 function turned_off () {
 var el = document.getElementById('radio_img');
 el.src="/img/Radio.png";
 el.title="Включить радио";
} 

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
 
 var myPlaylist = [];
var cid_items = [];
var cid_arr = [];
if ("$URI_ID$"=="ldCat2" || "$CID$"=="2")
{var cid = 2;
 var cover_path='/My_Music/2011/front.jpg'
}
else if ("$URI_ID$"=="ldCat1" || "$CID$"=="1")
{var cid = 1;
 var cover_path='/My_Music/2009/Front.jpg'
}
else if ("$URI_ID$"=="ldCat4" || "$CID$"=="4")
{var cid = 4;
 var cover_path='/My_Music/2013/front.jpg'
}
else if ("$URI_ID$"=="ldCat21" || "$CID$"=="21")
{var cid = 21;
 var cover_path='/My_Music/2014/front.jpg'
}
else if ("$URI_ID$"=="ldCat19" || "$CID$"=="19" || "$URI_ID$"=="ldCat22" || "$CID$"=="22" || "$URI_ID$"=="ldCat3")
{var cid = 19;
}
else if ("$URI_ID$"=="ldEnt264" || "$CID$"=="6")
{var cid = 6;
 var cover_path='/Images/Scandal/1.jpg'
}
else if ("$URI_ID$"=="ldEnt265" || "$CID$"=="7")
{var cid = 7;
 var cover_path='/Images/Scandal/2.jpg'
}
else if ("$URI_ID$"=="ldEnt267" || "$CID$"=="8")
{var cid = 8;
 var cover_path='/Images/Scandal/4.jpg'
}
else if ("$URI_ID$"=="ldEnt268" || "$CID$"=="9")
{var cid = 9;
 var cover_path='/Images/Scandal/5.jpg'
}
else if ("$URI_ID$"=="ldEnt269" || "$CID$"=="10")
{var cid = 10;
 var cover_path='/Images/Scandal/6.jpg'
}
else if ("$URI_ID$"=="ldEnt270" || "$CID$"=="11")
{var cid = 11;
 var cover_path='/Images/Scandal/7.jpg'
}
else if ("$URI_ID$"=="ldEnt271" || "$CID$"=="12")
{var cid = 12;
 var cover_path='/Images/Scandal/8.jpg'
}
else if ("$URI_ID$"=="ldEnt272" || "$CID$"=="13" || "$URI_ID$"=="ldCat26" || "$URI_ID$"=="ldCat23" || "$CID$"=="23" || "$URI_ID$"=="ldCat5")
{var cid = 13;
 var cover_path='/Images/Scandal/9.jpg'
}
else if ("$URI_ID$"=="ldCat15" || "$CID$"=="15")
{var cid = 15;
}
else if ("$URI_ID$"=="ldCat16" || "$CID$"=="16")
{var cid = 15;
}
else if ("$URI_ID$"=="ldCat17" == "$CID$"=="17")
{var cid = 17;
}
else if ("$URI_ID$"=="ldCat18" || "$CID$"=="18")
{var cid = 18;
 var cover_path='/RS/1/top500.jpg';
}
else if ("$URI_ID$"=="ldCat20" || "$CID$"=="20" || "$URI_ID$"=="ldCat14")
{var cid = 20;
}
else 
{
var cid = 0;
}
 /*My songs*/
if (cid==1 || cid==2 || cid==4 || cid==21 || cid==19 || cid== 6 || cid== 7 || cid== 8 || cid== 9 || cid== 10 || cid== 11 || cid== 12 || cid== 13)
{
var tempPlaylist = "$MYINF_29$";
myPlaylist = (tempPlaylist.substring(0,tempPlaylist.length-1)).split(';');
for (i = 0; i < myPlaylist.length; i=i+8) { 
if (myPlaylist[i]==cid && myPlaylist[i+6]!='')
 if (cid==4 || cid==19)
 {
 cid_arr.push(myPlaylist[i+2]);
 }
else
{
cid_items.push({
 mp3:myPlaylist[i+1],
 title:myPlaylist[i+2],
 artist:myPlaylist[i+3],
 rating:myPlaylist[i+4],
 buy:myPlaylist[i+5],
 duration:myPlaylist[i+6],
 cover:cover_path
 });
}
}
 }
 /*Rock-omlet*/
if (cid==15 || cid==16 || cid==17 || cid==18 || cid==20)
{
var tempPlaylist = "$MYINF_30$";
myPlaylist = (tempPlaylist.substring(0,tempPlaylist.length-1)).split(';');
for (i = 0; i < myPlaylist.length; i=i+8) { 
if (myPlaylist[i]==cid && myPlaylist[i+6]!='')
 if (cid==20 || cid==17)
 {
 cid_arr.push(myPlaylist[i+2]);
 }
else if (cid==18)
{
 cid_items.push({
 mp3:myPlaylist[i+1],
 title:myPlaylist[i+2],
 artist:myPlaylist[i+3],
 rating:myPlaylist[i+4],
 buy:myPlaylist[i+5],
 duration:myPlaylist[i+6],
 cover:cover_path
 });
}
 else
{
cid_items.push({
 mp3:myPlaylist[i+1],
 title:myPlaylist[i+2],
 artist:myPlaylist[i+3],
 rating:myPlaylist[i+4],
 buy:myPlaylist[i+5],
 duration:myPlaylist[i+6],
 cover:myPlaylist[i+7]
 });
 cid_items.push({
 mp3:myPlaylist[i+1],
 title:myPlaylist[i+2],
 artist:myPlaylist[i+3],
 rating:myPlaylist[i+4],
 buy:myPlaylist[i+5],
 duration:myPlaylist[i+6],
 cover:myPlaylist[i+7]
 });
}
}
 }
 /*Last 15*/
if (cid==0)
{
var tempPlaylist = "$MYINF_31$";
myPlaylist = (tempPlaylist.substring(0,tempPlaylist.length-1)).split(';');
for (i = 0; i < myPlaylist.length; i=i+8) { 
cid_items.push({
 mp3:myPlaylist[i+1],
 title:myPlaylist[i+2],
 artist:myPlaylist[i+3],
 rating:myPlaylist[i+4],
 buy:myPlaylist[i+5],
 duration:myPlaylist[i+6],
 cover:myPlaylist[i+7]
 });
}
 }
if (cid==4)
{ 
 cid_arr.sort();
 for (i = 0; i < cid_arr.length; i++) { 
var a = myPlaylist.indexOf(cid_arr[i]);
cid_items.push({
 mp3:myPlaylist[a-1],
 title:myPlaylist[a],
 artist:myPlaylist[a+1],
 rating:myPlaylist[a+2],
 buy:myPlaylist[a+3],
 duration:myPlaylist[a+4],
 cover:cover_path
 });
}
}
if (cid==19 || cid==20 || cid==17)
{ 
 i = cid_arr.length-1;
 while (i>-1)
 { 
var a = myPlaylist.indexOf(cid_arr[i]);
cid_items.push({
 mp3:myPlaylist[a-1],
 title:myPlaylist[a],
 artist:myPlaylist[a+1],
 rating:myPlaylist[a+2],
 buy:myPlaylist[a+3],
 duration:myPlaylist[a+4],
 cover:myPlaylist[a+5]
 });
 i=i-1;
}
}
 $(document).ready(function(){
 var description = '';
 var playlist = cid_items;
 $(Player).ttwMusicPlayer(playlist, {
 autoPlay:false, 
 description:description,
 jPlayer:{
 swfPath:'/player/jquery-jplayer' 
 }
 });
 }); 
