// getting dom elements
var divSelectRoom = document.getElementById("selectRoom");
var divConsultingRoom = document.getElementById("consultingRoom");
var inputRoomNumber = document.getElementById("roomNumber");
var btnGoRoom = document.getElementById("goRoom");
var localVideo = document.getElementById("localVideo");
var remoteVideo = document.getElementById("remoteVideo");
var chartArea = document.getElementById('chat');
var currentDate = document.getElementById('current-date');
var hangUp = document.getElementById("hangUpButton");

const textArea = document.getElementById("textArea");
const messages = document.getElementById("messages");

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
currentDate.innerText = today;


textArea.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        messages.innerHTML += `
       <li class="chat-right">									
            <div class="chat-text">${textArea.value.trim()}</div>
            <div class="chat-avatar">
                <img src="/images/avatar-1.png" alt="YOU">
                <div class="chat-name">YOU</div>
            </div>
        </li>`;
        messages.scrollTop = messages.scrollHeight
        if (isCaller) {
            dataChannel.send(textArea.value.trim())
        } else {
            receiveChannel.send(textArea.value.trim())
        }
        textArea.value = ''

    }
})

// variables
var roomNumber;
var localStream;
var remoteStream;
var rtcPeerConnection, dataChannel, receiveChannel;
var iceServers = {
    'iceServers': [
        { 'urls': 'stun:stun.services.mozilla.com' },
        { 'urls': 'stun:stun.l.google.com:19302' }
    ]
}
var streamConstraints = {
    audio: true,
    video: {
        width: 640,
        height: 320
    }
};
var isCaller;

// Let's do this
var socket = io();

btnGoRoom.onclick = function () {
    if (inputRoomNumber.value === '') {
        alert("Please type a room number")
    } else {
        roomNumber = inputRoomNumber.value;
        socket.emit('create or join', roomNumber);
        divSelectRoom.style = "display: none;";
        divConsultingRoom.style = "display: block;";
        chartArea.style = "display: block";
    }
};

hangUp.onclick = function () {
    rtcPeerConnection.close();
    socket.emit('leave', roomNumber);
}

// message handlers
socket.on('created', function (room) {
    navigator.mediaDevices.getUserMedia(streamConstraints).then(function (stream) {
        localStream = stream;
        localVideo.srcObject = stream;
        isCaller = true;
    }).catch(function (err) {
        console.log('An error ocurred when accessing media devices', err);
    });
});

socket.on('joined', function (room) {
    navigator.mediaDevices.getUserMedia(streamConstraints).then(function (stream) {
        localStream = stream;
        localVideo.srcObject = stream;
        socket.emit('ready', roomNumber);
    }).catch(function (err) {
        console.log('An error ocurred when accessing media devices', err);
    });
});

socket.on('candidate', function (event) {
    var candidate = new RTCIceCandidate({
        sdpMLineIndex: event.label,
        candidate: event.candidate
    });
    rtcPeerConnection.addIceCandidate(candidate);
});

socket.on('ready', function () {
    if (isCaller) {
        rtcPeerConnection = new RTCPeerConnection(iceServers);
        dataChannel = rtcPeerConnection.createDataChannel("channel");
        dataChannel.onopen = handleSendChannelStatusChange;
        dataChannel.onclose = handleSendChannelStatusChange;
        dataChannel.onmessage = handleReceiveMessage;
        rtcPeerConnection.onicecandidate = onIceCandidate;
        rtcPeerConnection.ontrack = onAddStream;
        rtcPeerConnection.addTrack(localStream.getTracks()[0], localStream);
        rtcPeerConnection.addTrack(localStream.getTracks()[1], localStream);
        rtcPeerConnection.createOffer()
            .then(sessionDescription => {
                rtcPeerConnection.setLocalDescription(sessionDescription);
                socket.emit('offer', {
                    type: 'offer',
                    sdp: sessionDescription,
                    room: roomNumber
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
});

socket.on('offer', function (event) {
    if (!isCaller) {
        rtcPeerConnection = new RTCPeerConnection(iceServers);
        rtcPeerConnection.onicecandidate = onIceCandidate;
        rtcPeerConnection.ontrack = onAddStream;
        rtcPeerConnection.ondatachannel = receiveChannelCallback;
        rtcPeerConnection.addTrack(localStream.getTracks()[0], localStream);
        rtcPeerConnection.addTrack(localStream.getTracks()[1], localStream);
        rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event));
        rtcPeerConnection.createAnswer()
            .then(sessionDescription => {
                rtcPeerConnection.setLocalDescription(sessionDescription);
                socket.emit('answer', {
                    type: 'answer',
                    sdp: sessionDescription,
                    room: roomNumber
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
});

socket.on('answer', function (event) {
    rtcPeerConnection.setRemoteDescription(new RTCSessionDescription(event));
})

socket.on('full', function (event) {
    divSelectRoom.style = "display: block;";
    divConsultingRoom.style = "display: none;";
    chartArea.style = "display: none";
    alert(`Room is full. Please enter another room id.`)
})

socket.on('left', function (event) {
    rtcPeerConnection.close();
})

socket.on('file', function (event) {
    fileSize = event.fileSize;
    name = event.name;
});

// handler functions
function onIceCandidate(event) {
    if (event.candidate) {
        console.log('sending ice candidate');
        socket.emit('candidate', {
            type: 'candidate',
            label: event.candidate.sdpMLineIndex,
            id: event.candidate.sdpMid,
            candidate: event.candidate.candidate,
            room: roomNumber
        })
    }
}

function onAddStream(event) {
    remoteVideo.srcObject = event.streams[0];
    remoteStream = event.stream;
}

function handleSendChannelStatusChange(event) {
    if (dataChannel) {
        var state = dataChannel.readyState;

        if (state === "open") {
            console.log('data channel opened')
        } else {
            console.log('data channel something went wrong :O')
        }
    }
}

function receiveChannelCallback(event) {
    if (event.channel.label === 'sendDataChannel') {
        receiveFileChannelCallback(event);
    } else {
        receiveChannel = event.channel;
        receiveChannel.onmessage = handleReceiveMessage;
        receiveChannel.onopen = handleReceiveChannelStatusChange;
        receiveChannel.onclose = handleReceiveChannelStatusChange;
    }
}

function handleReceiveMessage(event) {
    console.log(`message received: `, event.data)
    messages.innerHTML += `<li class="chat-left">
        <div class="chat-avatar">
            <img src="/images/avatar-2.png" alt="ANON">
            <div class="chat-name">ANON</div>
        </div>
        <div class="chat-text">${event.data}</div>
        <div class="chat-hour"><span class="icon-done_all"></span></div>
    </li>`;
    textArea.value = '';
    messages.scrollTop = messages.scrollHeight
}

function handleReceiveChannelStatusChange(event) {
    if (receiveChannel) {
        console.log("Receive channel's status has changed to " +
            receiveChannel.readyState);
    }
}


///file transfer
const fileInput = document.querySelector('input#fileInput');
const abortButton = document.querySelector('button#abortButton');
const sendFileButton = document.querySelector('button#sendFile');

let sendFileChannel;
let receiveFileChannel;
let fileReader;
const downloadAnchor = document.querySelector('a#download');
let receiveBuffer = [];
let receivedSize = 0;
let fileSize = 0;
let name = '';

sendFileButton.addEventListener('click', () => createConnection());
fileInput.addEventListener('change', handleFileInputChange, false);
abortButton.addEventListener('click', () => {
    if (fileReader && fileReader.readyState === 1) {
        console.log('Abort read!');
        fileReader.abort();
    }
});

async function handleFileInputChange() {
    let file = fileInput.files[0];
    if (!file) {
        console.log('No file chosen');
    } else {
        socket.emit('expected', {
            room: roomNumber,
            fileSize: file.size,
            name: file.name
        })
        sendFileButton.disabled = false;
    }
}


async function createConnection() {
    abortButton.disabled = false;
    sendFileButton.disabled = true;

    sendFileChannel = rtcPeerConnection.createDataChannel('sendDataChannel');
    sendFileChannel.binaryType = 'arraybuffer';
    console.log('Created send data channel');

    sendFileChannel.addEventListener('open', onSendFileChannelStateChange);
    sendFileChannel.addEventListener('close', onSendFileChannelStateChange);
    sendFileChannel.addEventListener('error', error => console.error('Error in sendChannel:', error));

    fileInput.disabled = true;
}

function sendData() {
    const file = fileInput.files[0];
    console.log(`File is ${[file.name, file.size, file.type, file.lastModified].join(' ')}`);

    // Handle 0 size files.
    downloadAnchor.textContent = '';
    if (file.size === 0) {
        closeDataChannels();
        return;
    }
    const chunkSize = 16384;
    fileReader = new FileReader();
    let offset = 0;
    fileReader.addEventListener('error', error => console.error('Error reading file:', error));
    fileReader.addEventListener('abort', event => console.log('File reading aborted:', event));
    fileReader.addEventListener('load', e => {
        console.log('FileRead.onload ', e);
        sendFileChannel.send(e.target.result);
        offset += e.target.result.byteLength;
        if (offset < file.size) {
            readSlice(offset);
        }
    });
    const readSlice = o => {
        console.log('readSlice ', o);
        const slice = file.slice(offset, o + chunkSize);
        fileReader.readAsArrayBuffer(slice);
    };
    readSlice(0);
}

function closeDataChannels() {
    console.log('Closing data channels');
    sendFileChannel.close();
    console.log(`Closed data channel with label: ${sendChannel.label}`);
    if (receiveFileChannel) {
        receiveChannel.close();
        console.log(`Closed data channel with label: ${receiveChannel.label}`);
    }
    // re-enable the file select
    fileInput.disabled = false;
    abortButton.disabled = true;
    sendFileButton.disabled = false;
}


function receiveFileChannelCallback(event) {
    console.log('Receive Channel Callback');
    receiveFileChannel = event.channel;
    receiveFileChannel.binaryType = 'arraybuffer';
    receiveFileChannel.onmessage = onReceiveFileMessageCallback;
    receiveFileChannel.onopen = onReceiveFileChannelStateChange;
    receiveFileChannel.onclose = onReceiveFileChannelStateChange;

    downloadAnchor.textContent = '';
    downloadAnchor.removeAttribute('download');
    if (downloadAnchor.href) {
        URL.revokeObjectURL(downloadAnchor.href);
        downloadAnchor.removeAttribute('href');
    }
}

function onReceiveFileMessageCallback(event) {
    console.log(`Received Message ${event.data.byteLength}`);
    receiveBuffer.push(event.data);
    receivedSize += event.data.byteLength;

    // we are assuming that our signaling protocol told
    // about the expected file size (and name, hash, etc).
    if (receivedSize === fileSize) {
        const received = new Blob(receiveBuffer);
        receiveBuffer = [];

        downloadAnchor.href = URL.createObjectURL(received);
        downloadAnchor.download = name;
        downloadAnchor.textContent =
            `Click to download '${name}' (${fileSize} bytes)`;
        downloadAnchor.style.display = 'block';
        fileSize = 0;
        closeDataChannels();
    }
}

function onSendFileChannelStateChange() {
    const readyState = sendFileChannel.readyState;
    console.log(`Send channel state is: ${readyState}`);
    if (readyState === 'open') {
        sendData();
    }
}

async function onReceiveFileChannelStateChange() {
    const readyState = receiveFileChannel.readyState;
    console.log(`Receive channel state is: ${readyState}`);
}