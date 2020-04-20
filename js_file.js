 function add_audio(){
 var div_audio = document.getElementById("div_audio_radio")
 div_audio.innerHTML = '<audio id="audio_radio" src="http://82.209.232.173:8000/live"></audio>';
 }
 function play(){
 var audio = document.getElementById("audio_radio");
 audio.play();
 }
 function pause(){
 var div_audio = document.getElementById("div_audio_radio")
 var audio = document.getElementById("audio_radio");
 audio.pause();
 div_audio.removeChild(audio);
 document.getElementById("current_song").innerHTML = '';
 document.getElementById("current_song").style.display = 'none';
 document.getElementById("div_current_song").style.margin = 'auto 0px';
 }
 function switching () {
 var el = document.getElementById('radio_img');
 el.src="/img/Radio_switch.png";
}
 function turned_on () {
 var el = document.getElementById('radio_img');
 el.src="/img/Radio_on.png";
 el.title="Выключить радио";
}
 function turned_off () {
 var el = document.getElementById('radio_img');
 el.src="/img/Radio.png";
 el.title="Включить радио";
}
 function radio_info() {
 if (document.getElementById("audio_radio")!=null) 
{
 var next = 10000; 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
 if (xhttp.readyState == 4 && xhttp.status == 200) {
 var title = xhttp.responseText;
 document.getElementById("current_song").innerHTML = 'Сейчас играет:<br>'+ title;
 radio_wait(next); 
 }
 else if (xhttp.readyState == 4 && xhttp.status != 200)
 {
 radio_wait(1000);
 }
 
 }
 xhttp.open("GET", "http://82.209.232.173:8000/now/playing.txt", true);
 xhttp.send();
}
}
 function radio_wait(next) {
 setTimeout(radio_info, next);
}
function radio() {
 var el = document.getElementById('radio_img');
 if (el.src.indexOf("/img/Radio.png")>0){
 add_audio();
 setTimeout(switching, 500);
 play();
 document.getElementById("current_song").style.display = 'inline';
 document.getElementById("div_current_song").style.margin = 'auto 5px';
 radio_info();
 setTimeout(turned_on, 500);
}
else{
 pause();
 setTimeout(switching, 100);
 setTimeout(turned_off, 500);
}
}
 function new_window() {
 if (document.getElementById("audio_radio")!=null) {
 pause();
 window.open("/radio_player", "_blank", "width=320, height=160, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, toolbar=no");
 setTimeout(switching, 100);
 setTimeout(turned_off, 500);
 }
 else { window.open("/radio_player", "_blank", "width=320, height=160, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, toolbar=no");}
 }
 function new_window_ie() {
 if (document.getElementById("audio_radio")!=null) {
 pause();
 window.open("/radio_player", "_blank", "width=320, height=260, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, toolbar=no");
 setTimeout(switching, 100);
 setTimeout(turned_off, 500);
 }
 else { window.open("/radio_player", "_blank", "width=320, height=260, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, toolbar=no");}
 }
