var merged = arr.reduce(function(a, b) {
  a.concat(b);
}); // Noncompliant: No return statement

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

var data = {
  "key": "value",
  "1": "value",
  "key": "value", // Noncompliant - duplicate of "key"
  'key': "value", // Noncompliant - duplicate of "key"
  key: "value", // Noncompliant - duplicate of "key"
  \u006bey: "value", // Noncompliant - duplicate of "key"
  "\u006bey": "value", // Noncompliant - duplicate of "key"
  "\x6bey": "value", // Noncompliant - duplicate of "key"
  1: "value" // Noncompliant - duplicate of "1"
}

function include(url) {
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", url);
  document.body.appendChild(s);
}
include("http://hkhxcvackers.com/steawerwetl.js")  // Noncompliant

var myWindow = document.getElementById('myIFrame').contentWindow;
myWindow.postMessage(message, "*"); // Noncompliant; how do you know what you loaded in 'myIFrame' is still there?

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
 setTimeout(turned_off, 400);
 }
 else { window.open("/radio_player", "_blank", "width=320, height=260, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, toolbar=no");}
 }

var myNumber = 010;   // Noncompliant. myNumber will hold 8, not 10 - was this really expected?

function say(a, b) {
  print(a + " " + b);
}

say("hello", "world", "!"); // Noncompliant; last argument is not used

let value = eval('obj.' + propName); // Sensitive
let func = Function('obj' + propName); // Sensitive

localStorage.setItem("login", login); // Noncompliant
sessionStorage.setItem("sessionId", sessionId); // Noncompliant

refs: [
   {
      ref: 'mySecondComponentReference',
      selector: 'field[itemId=mySecondCmp]'
   }, {
      ref: 'anotherComponentRef',
      selector: 'field[itemId=anotherCmp]'
   }
]
