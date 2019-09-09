// getting dom elements
var divSelectRoom = document.getElementById("selectRoom");
var divConsultingRoom = document.getElementById("consultingRoom");
var inputRoomNumber = document.getElementById("roomNumber");
var btnGoRoom = document.getElementById("goRoom");
var localVideo = document.getElementById("localVideo");
var remoteVideo = document.getElementById("remoteVideo");
var chartArea = document.getElementById('chat');
var currentDate = document.getElementById('current-date');

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
    messages.innerHTML += `<li class="chat-right">
        <div class="chat-avatar">
            <img src="/images/avatar-1.png" alt="YOU">
            <div class="chat-name">YOU</div>
        </div>
        <div class="chat-text">${textArea.value.trim()}</div>
        <div class="chat-hour"><span class="icon-done_all"></span></div>
    </li>`
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
  receiveChannel = event.channel;
  receiveChannel.onmessage = handleReceiveMessage;
  receiveChannel.onopen = handleReceiveChannelStatusChange;
  receiveChannel.onclose = handleReceiveChannelStatusChange;
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
  textArea.value = ''
}

function handleReceiveChannelStatusChange(event) {
  if (receiveChannel) {
    console.log("Receive channel's status has changed to " +
                receiveChannel.readyState);
  }
}

function sendMessageCaller() {

}

function sendMessageReceiver() {

}