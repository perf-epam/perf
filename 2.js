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

var myWindow = document.getElementById('myIFrame').contentWindow;
myWindow.postMessage(message, "*"); // Noncompliant; how do you know what you loaded in 'myIFrame' is still there?
