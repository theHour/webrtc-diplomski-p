 WebRTC - Web komunikacija zasnovana u realnom vremenu

```
TODO:

```


  * Uvod
  Komunikacija je prenos(slanje i primanje) informacija razgovorom, pisanjem ili koristenjem nekog drugog medija. 
  Nacin komunikacije je veoma napredovao u poslednjih sto godina: preko pisama, komunikacije putem telefona, komunikacija putem telefona preko interneta (Voice Over Internet Protocol) i sada video konferencije. 
  Sam razvoj interneta i pojava pametnih telefona su doprinjeli razvoju i napretku komunikacije. 
  S obzirom na razvoj drustvenih mreza i broj korisnika istih, komunikacija u realnom vremenu je postala i postaje sve vise rasprostranjenija.
  U 2018. godini u Sjedinjenim Americkim Drzavama (skraceno SAD) broj korisnika drustvenih mreza je iznosio preko 240 miliona i predvidjanja su da ce taj broj da raste u narednih nekoliko godina.
  Komunikacija preko drustvenih mreza je jedna od najpopularnijih online aktivnosti i firme kao sto su Facebook, Twitter, Google, Weibo 
  su postale veoma uticajne u pogledu online interakcije i digitalnog marketinga. 
  Kao i u svijetu, i u Bosni i Hercegovini (Bih) broj korisnika drustvenih mreza  je u porastu, i prema istrazivanju https://gs.statcounter.com/social-media-stats/all/europe  Facebook je najkoristenija drustvena mreza. Facebook Messenger, standalone aplikacija pruza mogucnosti tekstualnog ceta, glasovnog i video poziva, kao i mogucnost dijeljenja fajlova. S obzirom na samu popluranost Facebook-a kao drustvene mreze, moze se zakljuciti da je i u BiH veliki broj korisnika izlozen komunikaciji u realnom vremenu i koriste mogucnosti iste. I ne samo Facebook Messenger, Google Hangouts se sve vise koristi za video 
  konferencije ne samo u privatnom nego i u poslovnom svijetu.
  Pored drustvenih mreza, video streaming je postao veoma popularan i sajtovi kao sto su Twitch i Youtube biljeze rast korisnika iz godine u godinu.
  
  Komunikacija u realnom vremenu (Real-time_communication RTC) jeste svaki vid telekomunikacije u kojoj korisnici razmjenjuju 
  informacije trenutno/instantno sa zanemarivom latencijom. 
  https://searchunifiedcommunications.techtarget.com/definition/real-time-communications
  Do prije par godina, komunikacija u realnom vremenu putem web-a je bila zastupljena pomocu third party pluginova kao sto je Flash ili standalone aplikacija kao sto je Skype, i sama kompleksnost istih je otezavala developerima da razvijaju rjesenja i prosiruju mogucnosti.

  WebRTC (Web Real Time Communication) je projekat otvorenog koda podrzan od strane Google-a, IETFF i W3C. Prvi draft se pojavio 2011. godine, ali je tek pusten u rad 2012. Sastoji se od grupe API (Application programming Interface) koji omogucavaju developerima laganu integraciju. Cilj ovog rada jeste da se predstave standardi i protokoli za komunikaciju u realnom vremenu, sa posebnim naglaskom na WebRTC kao tehnologiju koja je i dalje mlada i nastavlja da se razvija.


  NE KORISTITI BUDUCE VRIJEME JER SU STVARI VEC OBRADJENE!!!!!
  U drugom poglavlju ce biti opisane potrebe za komunikacijom u realnom vremenu, kao i par primjera gdje i na koji nacin se moze primjeniti.

  Trece poglavlje ce predstaviti par standarda i protokola kojim se moze postici komunikacija u realnom vremenu, s tim da ce naglasak biti na protokole koji sluze da se komunikacija postigne putem weba/interneta.

  Cetvrto poglavlje ce sluziti za analizu predstavljenih protokola i standarda sa posebnim naglaskom na WebRTC.

  U petom poglavlju ce se izvristi poredjenje datih protokola kroz jednostavne primjere.

  Sesto poglavlje dace pregled WebRTC API-ja, podrsku istog  u web platformama i mobilnim uredjajima, kao i mogucnost uspostavljanja peer-to-peer konekcije (P2P) u razlicitm mreznim uslovima.

  U sedmom ce biti opisan prakticni rad gdje ce biti prikazano na koji nacin se uspostavlja p2p konekcija pomocu WebRTC protokola. 
  Osmo poglavlje je rezervisano za zakljucke vezane za temu rada.
  
  
  
  
  
  https://blog.wildix.com/what-is-real-time-communication/
  https://ti.tuwien.ac.at/cps/teaching/courses/real-time-systems/slides/rts04_rt_communication-1.pdf
  https://www.vonage.com/business/perspectives/real-time-communications/
  https://searchunifiedcommunications.techtarget.com/definition/real-time-communications
  https://www.eztalks.com/video-conference/advantages-of-video-conference-communication.html
  2* Analizirati potrebe za audio, video i tekstualnom komunikacijom u realnom vremenu

  S obzirom da na brzi razvoj tehnologije a samim time i drustva, sve vise se javlja potreba za brzom razmjenom informacija. Da li to bilo u obliku teksta, audio ili videa, cinjenica je da su mnogo sfere danasnjeg zivota pod direktnim uticajem tih istih informacija i sama brzina razmjene je od velikog znacaja. Komunikacija u realnom vremenu nam upravo to i omogucava, brzi  i lagani prenos informacija izmedju razlicitih korisnika. 
  Da bi se analizirale potrebe za audio, video i tekstualnom komunikacijom u realnom vremenu, najlakse ih je predstaviti kroz par primjera i primjena u stvarnom svijetu.

  2.1. Primjeri upotrebe audio, video i tekstualne komunikacije u realnom vremenu
  2.1.1. Audio i video komunikacijski servis

  Dva ili vise korisnika otvaraju istu web aplikaciju, obezbjedjenu od strane istog servisa,  u svoje browsere i loguju se u sa pristupnim podacima. Web servis objavljuje stanje logovanja korisnika tako sto azurira stanje u web aplikaciji. Kada jedan korisnik izabre drugog korisnika, uspostavlja se jedan-ka-jedan audio-vizuelna komunikacija. Pozivani korisnik moze da prihvati ili da odbije sesiju. Prilikom uspostavljana konekcije lokalni video je prikazan u web aplikaciji. Nakon sto je konekcija uspostavljenja, pored lokalnog videa prikazuje se i video remote(udaljenog) korisnika.

  2.1.2. Audio i video komunikacijski servis sa dijeljenjem ekrana

  Ovaj primjer ima iste mogucnosti  audio i video komunikacije kao i primjer 2.1.1. Pored mogucnosti iz navedenog primjera, u ovom slucaju jedan od korisnika moze da podijeli sta je prikazna na njegovom ekranu sa drugim korisnikom. Korisnik moze da izabere da li ce biti prikazan cijeli ekran ili samo dio.

  2.1.3. Audio i video komunikacijski servis sa mogucnoscu dijeljenja fajlova/datoteka

  Kao i u slucaju prethodnog primjera, sve mogucnosti iz 2.1.1. se podrazumjevaju s tim da korisnici mogu da salju i primaju datoteke koje se nalaze na file sistemu (file system) uredjaja koji koriste, bio to mobilni telefon, laptop ili desktop racunar.

  2.1.4. Aplikacija za gledanje fudbalskih utakmica

  Fudbalski klub koristi aplikaciju koja omogucava skautima, da u realnom vremenu,  prenose i razgovaraju o utakmici i igracima sa menadzerom kluba. Skaut koristi mobilni telefon sa dvije kamere: jedna sa prednje i jedna za zadnje strane. Menadzer kluba koristi desktop racunar ili laptop opremljen sa kamerom za gledanje i komentarisanje utakmice sa skautom. Prilikom pauze, skaut moze da koristi prednju kameru i da razgovara sa menadzerom, a za vrijeme trajanja utakmice koristi zadnju kameru za prenos utakmice (livestream) koju menadzer posmatra.

  2.2. Prednosti koristenja audio, video i tekstualne komunikacije u realnom vremenu

  Iz prethodnih primjera (poglavlje 2.1.) moze se primjetiti da je primjena audio, video i tekstualne komunikacije u realnom vremenu veoma siroka, kako u privatnom tako i poslovnom svijetu. IT (informacione tehnologije) sektor dominira sto se tice primjene komunikacije u realnom vremenu, ali i drugi sektori koriste mogucnosti RTC i prosiruju svoja poslovanja pored lokalnog i na globalno trziste, zahvaljujuci cinjeci da mogu lagano i u realnom vremenu da dostave informacije i svoje usluge korisnicima.
  
  Glavne prednosti koristenja audio, vido i tektsutalne komunikacije u realnom vremenu su:

    - Isplativost u poredjenju sa fizickim sastancima

    Usluge video konferencije su postale isplativije iz svakog ugla u odnosu na fizicke sastanka jer su za njih dovoljni racunar ili mobilni telefon sa internet konekcijom. Za fizicke sastanke je potrebno izdovjiti vrijeme i novac za putovanje do sastanka, troskove smjestaja u slucaju da su sastanci u drugom gradu ili drzavi itd. 

    - Lagana povezanost iz svakog dijela svijeta

    S obzirom da je sama tehnologija napredovala, mogucnost uspostavljanja audio ili video poziva iz bilo kog dijela svijeta je postala svakodnevnica kako u privatnom tako i u poslovnom zivotu.

    - Mogucnost koristenja na razlicitim uredjajima

    Da li korisnici koristili racunare ili mobilne telefone, mogucnost koristenja istog servisa na razlicitim uredjajima jeste velika prednost u danasnje vrijeme.

    - Povecanje produktivnosti i efikasnosti

    Zahvaljujuci komunikaciji u realnom vremenu, sama produktivnost i efikasnost u poslovnom svijetu je povecanja. Iako je email i dalje standardan nacin komunikacije, u mnogim slucajevima je potrebno da se na neka pitanja dobiju odgovori sto prije. 
    Ovo je pogotovo vidljivo u IT sektoru gdje nije neobicno naici na firme gdje su im zaposleni cesto u razlicitim drzavama. 






  https://tools.ietf.org/html/rfc7478


  https://www.nojitter.com/8-use-cases-real-time-communications-webrtc
  https://tools.ietf.org/html/rfc7478
  https://en.wikipedia.org/wiki/Real-time_communication
  https://www.realtimecommunicationsworld.com/
  https://www.realtimecommunicationsworld.com/what-is-real-time-communications/
  https://nationalmortgageprofessional.com/blog/importance-real-time-communication
  https://www.callstats.io/blog/2018/06/08/what-are-webrtc-use-cases-infographic
  https://tools.ietf.org/id/draft-ietf-rtcweb-use-cases-and-requirements-12.html
  https://www.callstats.io/blog/2018/03/23/what-is-webrtc-and-what-can-you-use-it-for
  * 3. Dati pregled standarda i protokola za audio, video i tekstualnom komunikacijom u realnom vremenu

  Protokoli i standardi  za web audio, video i tekstualnu komunikaciju su se mijenjali i napredovali sa vremenom. Samom napretku je doprinjeo i razvoj interneta, stabilnost internet konekcija i samih masina koje ucestvuju u komunikaciji. Pocev od IRC (Internet Relay Chat) za tekstualnu komunikaciju u realnom vremenu, preko pojave XHR-a (XMLHttpRequest), Server Sent Events-a (SSE), WebSocket-a pa sve do WebRTC, sami standardi su prosli kroz nekoliko faza razvoja i upotrebe. Iako gore navedeni nisu cisti protokoli za audio, video i tektstualnu komnukicaiju u realnom vremenu, sam njihov uticaj kroz istorju i nacin na koji su koristeni da se postigne zeljena  komunikacija su izabrani da se predstave kroz ovaj rad.

  3.1. IRC 
  https://tools.ietf.org/html/rfc1459
  je protkol za tekstualnu komunikaciju ili sinhronu konferenciju putem interneta u realnom vremenu.  Primarno je bio dizajniran za grupnu komunikaciju u diskusijama na forumima, tzv kanalima (channel), ali takodje omogucava i jedan-ka-jedan (one-to-one) komunikaciju putem privatnih poruka, grupni chat i transfer fajlova. 
  Nastao je 1988. godine i njegov autor je  Jarkko Oikarinen(http://www.kumpu.org/).  Maja 1993. godine objavljen je RFC draft https://tools.ietf.org/html/rfc1459 koji opisuje protokol za klijent-server komunikaciju, kanale, jedan-ka-jedan i jedan-ka-vise komunikaciju. Sam protokol je bio na vrhuncu krajem 90tih godina i pocetkom 2000ih kada je biljezio najveci broj korisnika i aktivnih servera. Jedna od najpopularnijih mreza jeste "QuakeNet" koja je prosijecno biljezila 72,000 korisnika i 42,000 kanala. Kako se IRC razvijao u svijetu i njegova popularnost rasla, tako je i na Balkanu jedna od najvecih mreza bila pricaonica na krstarici. (pricaonica.krstarica.com)
  

  MOZDA IZBACITI XMPP
  3.2. XMPP
  https://tools.ietf.org/html/rfc6120

  Extensible Messaging and Presence Protocol je protokol nastao 1999. godine i koristi se za slanje direktnih poruka, multi-party chat, video i audio pozive. Prve XMPP specifikacije su se pojavile 2004. godine. (https://xmpp.org/rfcs/rfc3920.html, https://xmpp.org/rfcs/rfc3921.html), da bi se 2011. iste specifikacije dopunile i pratile najnovije specifikacije(https://xmpp.org/rfcs/rfc6120.html, https://xmpp.org/rfcs/rfc6121.html). Omogucava slanje strukturiranih podataka u skoro realnom vremenu izmedju dva ili vise mreznih entitea.

  3.3. XHR
  https://xhr.spec.whatwg.org/

  XHR (XMLHttpRequest) je standard koji definise  API na nivou internet pretrazivaca (u daljem tekstu browser) koji omogucava slanje podataka izmedju klijenta i servera (client-to-server) pomocu Javascripta. Prvi put se pojavio u Internet Exploreru 5 i postao je jedna od glavnih tehnologija iza AJAX (Asynchronous JavaScript) revolucije i danas cini fundementalnu tehnologiju pri kreiranju modernih web aplikacija. Prije pojave XHR, web stranice su morale da se osvjeze(refresh) da bi poslale i dohvatile bilo kakvo azuriranje stanja izmedju servera i klijenta. Sa XHR-om, ovo je postalo moguce da se izvode asinhrono pod punom kontrolom aplikacijskog JavaScript koda.
  Medjutim, moc XHR nije samo u tome sto omogucava asinhronu komunikaciju izmedju klijenta i servera, vec sto ju je ucinio jednostavnijom. Sluzbena W3C specifikacija je objavljena 2006. godine, nakon cega XHR ulazi u masovnu upotrebu. Prva implementacija, tj rana verzija XHR API-ja, imala je odredjene nedostatke. Nova specifikacija je objavljena 2008. godine pod nazivom "XMLHttpRequest Level 2" koja je ispravila odredjene nedostatke.
  2011. godine "XMLHttpRequest Level 2" specifikacija je spojena zajedno sa prvobitnom verzijom da bi se dobila jedinstvena specifikacija.
 https://www.w3.org/TR/2006/WD-XMLHttpRequest-20060405/ 
  3.4. SSE
  https://www.w3.org/TR/2009/WD-eventsource-20090421/

  Tradicionalno, web stranica ili aplikacija mora da posalje zahtjev(request) ka serveru da bi primila nove podatke, tj web stranica zahtjeva podatke od servera. Sa Server-Sent-Events, otvara se mogucnost serveru da salje nove podatke da web stranici u bilo koje vrijeme. Server-Sent Events je standard koji opisuje nacin na koji server moze da inicira prenos podataka ka klijentu ili klijentima nakon sto je inicijalna konekcija sa klijentom ostvarena. Da bi se slale poruke ka klijentu preko HTTP (Hyper Text Transfer Protocol), SSE uvodi dvije nove komponente: EventSource (https://developer.mozilla.org/en-US/docs/Web/API/EventSource)interfejs u browseru koji omogucava klijentu da prima poruke inicirane sa strane servera i "event stream" (https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) format podataka.
  Kombinacija navedenih komponenti je ono sto omogucava SSE da bude ujedno efikasan i nezamjenljiv alat za rukovanje podacima u realnom vremenu. SSE pruza efikasnu i cross-browser implementaciju XHR streaminga; stvarni prenos poruka se odvija preko jedne, duge HTTP konekcije. Browser obradjuje svo upravljanje konekcijam i parsiranjem poruka, omogucavajuci aplikaciji da se fokusira na biznis logiku.

  3.5. WebSockets
  https://tools.ietf.org/html/rfc655

  WebSockets je transportni protokol koji omogucava full-duplex komunikaciju preko TCP () konekcije. WebSocket protokol je napravljen da bi radio sa vec postojecom web infrastrukturom. WebSocketi su jedan od najsvestranijih i najfleksibilnijih protokola u browseru i u sustini to je set vise standarda: WebSocket API je definisan od strane W3C grupacije dok je WebSocketProtocol (RFC 6455) i njegove ekstenzije definisan od strane HyBi radne grupe (IETF).

  Kombinacija laganog i minimalnog APIja omogucava da se izmedju klijenta i servera prenose podaci streamingom, pri cemu i klijent i server mogu da salju podatke u bilo koje vrijeme.

  3.6. WebRTC
  https://tools.ietf.org/html/rfc7478

  Web Real-Time Communication (WebRTC) je kolekcija standarda, protokola i JavaScript APIja, koji zajedno u kombinaciji omogucavaju peer-to-peer dijeljenje audio, video i podataka izmedju internet pretrazivaca(browsera).  Umjesto oslanjanja na plug-inove ili posebne programe, WebRTC pretvara komunikaciju u realnom vremenu u standard koji bilo koja web aplikacija moze koristiti putem jednostavnog JavaScript APIja. Kupovinom GIPS kompanije (http://gipscorp.com/), koja je razvila mnoge komponente potrebne za komunikaciju u realnom vremenu putem weba,  od strane Googlea 2010. godine moze se smatrati za pocetak WebRTC kao protokola. 
  WebRTC je projekat  projekat otvorenog koda (https://webrtc.googlesource.com/) i podrzan je od svih velikih kompanija kao sto su Google, Apple, Mozilla, Microsoft. 
  Standardizovan  je od strane W3C i IETF grupacije. 
  Za razliku od prethodnih protokola, koji  koriste klijent-server komunikaciju, WebRTC koristi peer-to-peer komunikaciju i tako izbacuje potrebo za centralnom jedinicom. Iako omogucava peer-to-peer komunikaciju, u nastavku rada je  prikazano zasto postoje potrebe za serverskim dijelom i kod WebRTC protkola.

  Jedna od najvecih prednosti WebRTCa jeste sto je integrisan u browser i ne zahtjeva nikakvo instalaciju dodatnih aplikacija i pluginova.

  peer2peer slika i standardna slika sa serverom.

  Uspostavljanje P2P konekcije zahtjeva mnogo vise posla u odnosu na uspostavljanje XHR, EventSource ili WebSocket konekcije koji se oslanjaju na na definisane HTTP mehanizme za uspostavljanje konekcije i koji predpostavljaju da je server sa kojim komuniciraju dostupan. Medjutim, kod P2P konekcije to nije slucaj. Peer sa kojim zelimo da uspostavimo konekciju moze biti u nekoliko razlicitih stanja: da je offline ili nedostupan, zauzet ili jednostavno ne zeli da uspostavi konekciju.
  Da bi uspostavili konekciju sa udaljenim peerom potreban je server za signalizaciju. Server za signalizaciju koordinise svu komnuikaciju i razmjenu potrebnih informacija da bi se uspostavila veza izmedju peerova.  
  
  slika servera za signalizaciju.png

  Server za signalizaciju nije definisan WebRTC protkolom jer se ostavlja mogucnost programerima da sami izaberu koja tehnologija im najvise odgovara. Signaliziranje se moze izvesti pomocu WebSocketa, XMPPa, SIP (Session Initiaton Protocol).

  WebRTC koristi SDP (Session Description Protocol) da bi opisao parametre p2p konekcije. SDP ne prenosi nikakve multimedijalne podatke (audio, video), vec samo opisuje parametre sesije kao sto su: koji tip multimedije je ponudjen (audio, video) i njihova rezolucija, kodeki (Vp8,Opus), informacije o mreznoj konekciji itd. Svi peerovi kreiraju i razmjenjuju SDP prije nego sto se uspostavi direktna p2p konekcija. 

  Slika webrtc stacka.

    (kod ostailih se koristi TCP -Transssion Control Protocol- za prenos informacija izmedju browsera i servera jer TCP garantuje pouzdanost i da ce podaci stici u istom redoslijedu kao sto su i poslani)

 Kod komunikacije u realnom vremenu, brzina je bitnija u odnosu na pouzdanost. WebRTC prenosi audi, video i ostale podatke izmedju browsera koristeci User Datagram Protocol (UDP). WebRTC moze da radi i preko TCP ali koristi se kao zadnja opcija i to samo kad su svi UDP portovi blokirani. UDP je izabran za WebRTC je jer su niska latencija i visoka propusnost podatak bitnijii od pouzdanosti u kojem redoslijdu ce stici podaci. 
 S obzirom da WebRTC koristi UDP, dodatni sigurnosni protokli su dodati za enkripciju, pouzdanost, kotrolu toga i zagusenja.
 WebRTC specifikacija zahtjeva da svi podaci koji se prenose budu enkriptovani. Da bi se obezbijedila sigurnost UDP protokola, koristi se 
 Datagram Transport Layer Security (DTLS) protokol. DTLS je baziran na TLSu(Transport Layer Security)  koji se koristi kod enkrpicije TCP saobracaja. 

 Secure Real-Time Protocol (SRTP) je najbitniji protokol  za prenos multimedijalnih podataka. Nakon sto je konekcija uspostavljena izmedju peerova, SRTP se koristi za audio i video streaming. SRTP sadrzi sve informacije vezane za prenos i renderovanje medija.
 Medjutim, ne pruza mehanizam za oporavak od greske, garantovanu dostavu podataka i pouzdanost.

 Stream Control Transmission Protocol (SCTP) se koristi za prenos aplikacijskih podataka, tj Data Channel. SCTP omogucava UDPu osobine slicne koje posjeduje TCP, kao sto su: multipleksing, kotrola toga i kontrola zagusenja.

 ICE, STUN i TURN su obradjeni u poglavlju 5.2.


  https://pdfs.semanticscholar.org/6612/43b9a86fe64b5da64e21fe165e3bf71d4c04.pdf
  https://stackoverflow.com/questions/14499282/what-are-the-realtime-communication-protocols-available-for-the-web
  * 4. Analizirati standarde i protokole za web zasnovanu audio, video i tekstualnu komunikaciju u realnom vremenu, a posebno WebRTC

    IRC i XMP protokoli se nece detaljno analizirati u ovom radu, akcenat ce vise biti stavljen na ostale protokole i mehanizme za obezbjedjivanje komunikacije u realnom vremenu.
  

  4.1 XHR

  XHR je aplikativni API koji nam pruza pretrazivac (browser), sto znaci da se sam pretrazivac(browser) brine o upravljanju konekcijom na nizem nivou, formatiranju HTTP zahtjeva i stvarima kao sto su:
    - pretrazivac se brine o uspostavljanju konekcije, poolingu i prekidu konekcije
    - pretrazivac sam odredjuje najbolji transportni protokol HTTP(S) (1.0, 1.1, 1.2)
    - pretrazivac se brine o HTTP kesiranju (caching), preusmjeravanju (redirects).
    
    S obzirom da se pretrazivac brine o vecini stvari, sama aplikacija moze da se bazira na biznis stranu inicirati zahtjeva za podacima, prihvatanju podataka i obradjivanju podataka. 

  Kombinacija jednostavnog APIja i podrzanosti od strane svih modernih pretrazivaca (browsera) omogucila je XHRu da bude "sve u jedan" pri umrezavanju u pretrazivacu (browseru). Sve i jedan slucaj (download, upload, streaming, real time notifications) se moze i napravljen je pomocu XHR ali to ne znaci ni da je XHR najbolji za pojedine slucaje.

  Da bi se napravio HTTP zahtjeve potrebno je: napraviti XMLHttpRequest objekat, otvoriti (open) URL i poslati zahtjev. Nakon sto se transakcija zavrsi objekat ce da zadrzi korisne informacije kao sto su tijelo odgovora (response body) i HTTP status zahtjeva.

        function reqListener () {
          console.log(this.responseText);
        }

        let oReq = new XMLHttpRequest(); 1
        oReq.addEventListener("load", reqListener); 2
        oReq.open("GET", "./resource.js"); 3
        oReq.send(); 4 
 
   1. pravi se objekat XMLHttpRequest
   2. dodaje se listener
   3. otvara se GET zahtjev prema URL
   4. salje se zahtjev


   XHR je u pocetku samo podrzavao dohvatanje resursa sa stranica istog porijekla (origin) - https://tools.ietf.org/html/draft-abarth-origin-09. Medjutim, uvodjenjem CORS (Cross-Origin Resource Sharing) omoguceno je pretrazivacu da pristupa resursima i sa drugih stranica/servera.  https://tools.ietf.org/html/rfc6454 []9 reference
   XHR zahtjev sa CORSom je skoro identican obicnom XHR zahtjevu, jedina razlika jeste da se zahtjevani resurs ne nalazi na istom originu. Kada se zahtjev napravi, pretrazivac automatski dodaje Origin HTTP zaglavlje kojim se oznacava sa origin sa kojeg zahtjev potice. Nakon toga, server moze da provjeri Origin zaglavlje i da odluci da li ce da prihvati zahtjev postavljajuci Accept-Control-Allow-Origin zaglavlje u odgovoru:

        => Request
        GET /resource.js HTTP/1.1
        Host: thirdparty.com
        Origin: http://example.com 
        ...

        <= Response
        HTTP/1.1 200 OK
        Access-Control-Allow-Origin: http://example.com 
        ... 

      
    XHR omogucava jednostavan i efikasan nacin sinrhonizacije  podataka sa strane klijenta ka serveru. Kad god je potrebno, XHR zahtjev se salje sa strane klijenta da se osvjeze podaci na strani servera. Medjutim, suprotan nacin komunikacije je mnogo tezi. 
    HTTP ne omogucava serveru da inicira konekciju sa klijentom. Kao rezultat toga, da bi klijent primao notifikacije u realnom vremenu, klijent mora konstatno da salje zahtjeve ka serveru i provjerava da li je doslo do promjene stanja.

    Tehnika koja omogucava ovaj nacin se naziva polling i podrazumjeva da klijent periodicno salje XHR zahtjev ka serveru i provjerava da li je dosloi do promijene stanja. U slucaju da su novi podaci dostupni na serveru, onda se ti podaci vracaju u odgovoru, u suprotnom odgovor je prazan. 

      function checkUpdates(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() { ... };  1
        xhr.send();
      }

      setInterval(function() { checkUpdates('/updates') }, 60000);  2


  Problem sa periodicnim pollingom jeste u tome da potencijalno moze postojati veliki broj bespotrebnih i praznih provjera ka serveru. 
  Imajuci to u vidu, razvijene je druga tehnika koja je u sustini samo modifikovana verzija periodicnog pollinga. Modifikacija se ogleda u tome da se konekcija drzi otvorenom dok se ne dobije stvarna promjena stanja na serveru. 

  polling vs long-polling slika sa hpbn


  Drzeci konekciju otvorenom dok azurirani podaci nisu spremni, podaci se mogu poslati ka klijentu bez cekanja cim postanu spremni na serveru. Kao rezultat toga, long-polling pruza najbolji scenario kod latencije i uklanja prazne provjere.

      function checkUpdates(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() { 
        ...
        checkUpdates('/updates'); 
      };
      xhr.send();
    }

    checkUpdates('/updates'); 

    Long-polling tehnika je jos poznata kao "COMET" i u praksi je postao kao jedna od najcesce koristenih tehnika za dohvatanje informacija u realnom vremenu putem XHRa. Facebook Chat je u 2008. godini koristio ovu tehniku da bi omogucio komunikaciju u realnom vremenu. (citat sa facebook bloga)

    U poslednje vrijeme koristi se novija verzija XHR, fetch API, koja je takodje podrzana u svim browserima.

  

  4.2. SSE

  EventSource interfejst (spomenut u prethodnom poglavlju) apstraktuje uspotavljanje konekije na niskom nivou i obradu podataka. Da bi se primili podaci sa servera, potrebno je smao specifikovati URL SSE resursa i registrovati listener na JavaScript objekat.


      var source = new EventSource("/path/to/stream-url"); 1

        source.onopen = function () { ... }; 2
        source.onerror = function () { ... }; 3

        source.onmessage = function (event) {  4
          console.log(event.id, event.data);

          if (event.id == "CLOSE") {
            source.close(); 5
          }
        }


      1 Otvara se SSE konekcija

      2 opcioni callback, poziva se kad je konekcija uspostavljen

      3 opcioni callback, poziva se u slucaju da je konekcija pala

      4 "oslusjuku" se svi dogadjaji

      5 zatvara se SSE konekcija u slucaju da server posalje id "CLOSE"


    EventSource interfejs pruza opciju auto rekonekcije i pracenja poruke koja je zadnja bila vidljiva. U slucaju da konekcija prema serveru padne, EventSource ce se automatski rekonektovati ka serveru i opcioni poslati ID  zadnje primljene poruke.

    SSE ima dva nedostatka: prvi je da SSE predstavlja server-ka-klijent komunikaciju i drugo event-stream je specificno dizajniran da prenosi UTF-8 podatke.  UTF-8 limitacija se cesto moze rijesiti na aplikacijskom nivou: SSE dostavi notifikaciju klijentu da se binarni podatak(asset) nalazi na serveru i aplikacija salje XHR zahtjev da ga dohvati.





  4.3. WebSockets

  WebSocket API koji je podrzan od strane pretrazivaca (browsera) je veoma jednostavan. Kao i kod XHR i SSE, pretrazivac se brine o svim detaljima upravljanja konekcijom i procesiranjem podataka. 

  Da bi se inicijalizovala nova WebSocket konekcija potreban nam je URL Websocket resursa kao i da se registuje nekoliko aplikacijskih callbacka.


        var ws = new WebSocket('wss://example.com/socket');  1

        ws.onerror = function (error) { ... } 2
        ws.onclose = function () { ... } 3

        ws.onopen = function () { 4
          ws.send("Connection established. Hello server!"); 5
        }

        ws.onmessage = function(msg) { 6

        }

    1 otvara se sigurna WebSocket konekcija (wss)

   2 opcioni callback, pozica se u slucaju greske

    3 opcioni callback, poziva se kad je koneckija prekinuta

    4 opcioni callback, poziva se kad je konekcija uspostavljena

    5 klijentska poruka ka serveru

    6 callback funkcija koja se poziva svaki put kada se primi poruka od servera


    WebSocket API je veoma slican EventSource APIju, i to je napravljeno namjerno jer WebSocket pruza slicne i prosirene funkcionalnosti u odnosu na EventSource API.

    WebSocket URL resurs koristi jedinstvene seme: ws (ws://test.com/socket) za plain-text komunikaciju i wss kada je enkriptovani kanal potreban. Primarni svrha WebSocket protkola jeste da obezbjedi optimizovan i dvosmjerni komunikacioni kanal izmedju aplikacije koja radi u browseru i servera. Medjutim, WebSocket prokol se moze koristiti i van browsera.



  1.  Izvršiti poređenje svih analiziranih standarda i protokola

    XHR, SSE i WebSocket koriste TCP za prenos podataka i koriste se pri klijent-server komunikaciji, za razliku od WebRTCa koji koristi UDP i upostavljena konekcija je P2P.

    Za dostavljanje notifikacija ka klijentu mogu se koristiti svi protkoli, ali treba uzeti u obzir brzinu odziva kao i sam uredjaj koji se koristi. Npr, u slucaju da se koristi XHR za push notifikacije, treba obratiti paznju da se ne ugrozi baterija na mobilnom telefonu u slucaju da je to uredjaj koji se koristi. Velik broj zahtjeva za azuriranim podacima moze da utice na samu bateriju i ostale performanse.

    XHR i SSE kroiste half-duplex komunikaciju dok websocket i webrtc koriste full-duplex komnukaciju. Da bi se simulirala full-duplex koristene su posebne tehnike kod prva dva protkola.

    Streaming podataka nije moguc pomocu XHR (dok Stream API ne bude u potpunosti podrzan od strane browsera), WebSocketi i WebRTC pruzaju tu mogucnost, i sam tip podataka koji se mogu prenositi putem navedenih protokola se razlikuje. Jedna od najvecih prednosti WebRTC jeste sto pruza mogucnost pristupa audio i video streamingu sa samog uredjaja pomocu jednostavnog APIja.

    Brzina odziva je takodje bitna kod navedenih protokola. S obzirom da ostali protkoli, u odnosu na WebRTC, za komunikaciju dolazi do pojave latencije i u slucaju da citava arhitektura nije dobro postavljena moze doci do kasnjenja pri prenosu poruka. Kako WebRTC koristi p2p konekciju, mnogo je brzi u odnosu na ostale, jer se podaci prenose direktno izmedju peerova bez ucesca cetralnog servera.

                      XHR SSE WebSocket Webrtc
    Transport         TCP TCT TCP       UDP
    Konekcija         c2s c2s c2s       p2p
    Tip komunikacije  half half full    full
    Latencija         zavisi od servera  zanemariva




  Poredjenje sa hpbn.com


  * Dati pregled WebRTC API-ja, podrške u web čitačima i mobilnim platformama (prvenstveno Android i iOS), te analizirati mogućnosti 
  uspostavljanja P2P konekcije u različitim mrežnim uslovima

  5. WebRTC API

    Osnovne komponente WebRTC su izlozene pomocu APIja koji je podzran od strane browsera. Ovaj API pruza mogucnost developerima da pristupi videu i audiu na uredjaju na kome se aplikacija nalazi, uspostavljanju P2P konekcije i koristenju kanal za prenos podataka.


    5.1. API
      5.1.1 getUserMedia
      Da bi se pristupilo korisnikovom audio i video uredjaju, koristi se MediaDevices.getUserMedia().  Nakon sto se funkcija pozove, od korisnika se trazi dopustenje da browser pristupi uredjaju za reprodukovanje multimedije. U slucaju da korisnik dozvoli koristenje multimedijalnih uredjaja(kamera, mikorfon), poziva funkcija vraca MediaStream objekat. MEdiaStream sadrzi VideoTrack i AudioTrack objekte koji dolaze iz oba kanala (lijevog i desnog). 

      primjer kako se se koristi getUserMedia.

      getUserMedia je dostupna u svim modernim browserima i jedino sto zahtjeva jeste da su mikrofon i kamera korektno podeseni na uredjau na kojem se poziva. Sa Google Chrome v47 verzijom, getUserMedia je jedino dostupna iz sigurnog konteksta (web sajtovi moraju da koriste HTTPS) da bi se sprovelo koristenje enkripcije.

      5.1.2 RTCPeerConnection

      RTCPeerConenction API je odgovoran za uspostavljanje peer to oeer konekcije izmedju dva browsera. 

      var signalingChannel = new SignalingChannel();
        var pc = new RTCPeerConnection(ice);

        navigator.getUserMedia({ "audio": true }, gotStream, logError);

        function gotStream(stream) {
          pc.addStream(stream);

          pc.createOffer(function(offer) {
            pc.setLocalDescription(offer); 
          });
        }

        pc.onicecandidate = function(evt) {
          if (evt.target.iceGatheringState == "complete") { 
              local.createOffer(function(offer) {
                console.log("Offer with ICE candidates: " + offer.sdp);
                signalingChannel.send(offer.sdp); 
              });
          }
        }

        5.1.3. RTCDataChannel  

        RTCDataCHannel je interfejs koji pruza da se otovri kanal izmedju dva peera putem kojeg mogu da se razmjenjuju proizvoljni podaci. Svaki kanal je povezan sa RTCPeerConnection objektom, i svaka peer konekcija moze teoretksi da ima maksimalano 65,534 kanala za prenos podataka (stvarni broj moze da varira od browsera do browsera.) Da bi se napravio RTCDataCHannel objekat, potrebno je samo pozvati createDataChannel() metodu nad objektom tipa RTCPeerConnection. Peer koji je pozvan za razmjenu podataka, prima datachannel event da bi znao da je kanal za razmjenu podataka dodan na konekciju.

        function handleChannel(chan) { 
          chan.onerror = function(error) { ... }
          chan.onclose = function() { ... }

          chan.onopen = function(evt) {
            chan.send("DataChannel connection established. Hello peer!")
          }

          chan.onmessage = function(msg) {
            if(msg.data instanceof Blob) {
              processBlob(msg.data);
            } else {
              processText(msg.data);
            }
          }
        }

        var signalingChannel = new SignalingChannel();
        var pc = new RTCPeerConnection(iceConfig);

        var dc = pc.createDataChannel("namedChannel", {reliable: false}); 

        ... 

        handleChannel(dc); 
        pc.ondatachannel = handleChannel;

        Register WebSocket-like callbacks on DataChannel object

        Initialize new DataChannel with best-effort delivery semantics

        Regular RTCPeerConnection offer/answer code

        Register callbacks on locally initialized DataChannel

        Register callbacks on DataChannel initiated by remote peer  

      5.2 Uspostavljanje p2p konekcije u razlicitm mreznim uslovima

      Kao sto smo vidjeli, za uspostavljanje p2p konekcije korsiti se RTCPeerConenction API u kombinaciji sa serverom za signalizaciju. Peerovi razmjenjuju SDP informacije prije nego se konekcija uspostavi.

      U slucaju da se peerovi nalaza na istoj internoj mrezi, bez ikakvih firewalla i NATa (Network Address Translation), dovoljno je samo da ubace svoju IP adresu u SDP poruku i proslijede drugom peeru. Nakon sto je razmjena SDP poruka zavrsena, oba peera mogu da iniciraju direktnu peer2peer konekcija.

      U stvarnom svijetu, peerovi se cesto nalaze iza firewalla, NATa ili antivirusne zastite, direktna komnuikacija nije moguca kao u gore navedenom slucaju. Da bi se rijesio problem NATa, WebRTC koristi ICE, STUN i TURN mehanizme za uspostavljanje direktne komunikacije sa udaljenim peerovima.

      WebRTC koristi INteractive Connectivity Establishment (ICE) da bi zaobisao NAT. U pocetku, ICE pokusava da se konektuje direktno na adresu koja je razmijenjena, medjutim lokalna adresa ce da radi samo u slucaju ako su peerovi u lokalnoj mrezi. Kada konekcija ne uspije, ICE koristi Session Traversal Utilities for NAT (STUN) server da bi pribavio eksternu adresu za uspostavljanje konekcije izmedju peerova. U slucaju da se konekcija ne moze uspostaviti ni pomocu STUN servera, WebRTC prelazi na sledecu opciju i koristi Traversal Using Relays around NAT (TURN) server. STUN server se uvijek koristi prvo za pokusaj uspostavljanja direktne komunikacije, dok se TURN koristi kao poslednje sredstvo. 

      Da bi se koristile ICE, STUN, TURN funkcionalnosti pomocu WebRTC APIja, potrebno je samo proslijediti iceServers objekat pri kreiranju nove peer konekcije.

      var configuration = {
      ’iceServers ’: [
      {
      ’url ’: ’stun : stun .l. google .com :19302 ’
      } ,
      {
      ’url ’: ’turn :192.158.29.39:3478 ’,
      ’credential ’: ’<somepassword >’,
      ’username ’: ’user ’
      } ,
      {
      ’url ’: ’turn :132.12.452.39:3478 ’,
      ’credential ’: ’<somepassword >’,
      ’username ’: ’user ’
      }
      ]
      };
      var pc = new RTCPeerConnection ( configuration ) ;

      Pri inicijalizacije nove peer to peer konekcije:
        - ICE agent dohvati lokalnu adresu,
        - konfigurisani STUN serveri se pretrazuju koji vracaju ekterni IP i port;
        - TURN serveri se koriste u slucaju da se konekcija ne moze uspostaviti.

        Nakon sto su ICE kandidati (candidates) razmijenjeni preko servera za signalizaciju, ICE agent provjerava da li se moze pristupiti. Prvo se testira konekcija preko lokalne IP adrese, onda dolazi na red eksterna adresa pribavljena od strane STUN servera i na kraju TURN server u slucaju da prethodne opcije ne uspiju.
        Nakon sto je konekcija uspostavljena, ICE nastavlja da trazi alternative, tj brze, rute za konekciju peerova. 


      NAT pretvara jednu IP adresu u drugu, i koristi se kada su racunaru povezani na internet preko rutera. Svaki racunar ima istu vanjsku IP adresu, ali razlikuju  po jedinstvenim lokalnim IP adresama.



      5.3. Podrzanost u internet pretrazivacima i mobilnim uredjajima

         


      
      

  https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
  https://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-where
  https://webrtc.org/native-code/android/
  https://github.com/ant-media/Ant-Media-Server/wiki/Step-by-Step-Guide-to-Build-WebRTC-Native-Android-App
  https://vivekc.xyz/getting-started-with-webrtc-part-4-de72b58ab31e
  https://hackernoon.com/real-time-communication-with-webrtc-on-android-f96cdcfc4771
  https://webrtc.org/native-code/ios/
  * Zakljucak
  * U praktičnom dijelu rada potrebno je kreirati kompleksnu aplikaciju korišćenjem WebRTC-a


  ### Examples that can be useful:

  https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling

  https://github.com/dimircea/WebRTC/tree/master/SimpleVideoChat

  https://github.com/triniwiz/nativescript-webrtc/tree/master/demo-vue

  https://codelabs.developers.google.com/codelabs/webrtc-web/#0

  https://www.npmjs.com/package/socket.io