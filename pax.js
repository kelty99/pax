document.getElementById('1').style.visibility = 'hidden';
var button1count = 0;
document.getElementById('2').style.visibility = 'hidden';
var button2count = 0;
document.getElementById('3').style.visibility = 'hidden';
var button3count = 0;
document.getElementById('4').style.visibility = 'hidden';
var button4count = 0;
document.getElementById('5').style.visibility = 'hidden';
var button5count = 0;
document.getElementById('6').style.visibility = 'hidden';
var button6count = 0;
 
var buttonNames = [];
var buttonCounts = [button1count, button2count, button3count, button4count, button5count, button6count];
var outputArray = [];

document.getElementById("1").onclick = function (){
 outputArray[0].push(new Date().getTime());
 button1count++;
 document.getElementById('1').innerHTML = (buttonNames[0] +": "+ "\n" + button1count);
};

document.getElementById("2").onclick = function (){
 outputArray[1].push(new Date().getTime());
 button2count++;
 document.getElementById('2').innerHTML = (buttonNames[1] +":"+ "\n" + button2count);
};

document.getElementById("3").onclick = function (){
 outputArray[2].push(new Date().getTime());
 button3count++;
 document.getElementById('3').innerHTML = (buttonNames[2] +":"+ "\n" + button3count);
};

document.getElementById("4").onclick = function (){
 outputArray[3].push(new Date().getTime());
 button4count++;
 document.getElementById('4').innerHTML = (buttonNames[3] +":"+ "\n" + button4count);
}

document.getElementById("5").onclick = function (){
 outputArray[4].push(new Date().getTime());
 button5count++;
 document.getElementById('5').innerHTML = (buttonNames[4] +":"+ "\n" + button5count);
}

document.getElementById("6").onclick = function (){
 outputArray[5].push(new Date().getTime());
 button6count++;
 document.getElementById('6').innerHTML = (buttonNames[5] +":"+ "\n" + button6count);
}

var userInfo = [];
function menu() {
  var count = 1
  var userName = prompt("Please enter your name", "User Name");
  while (userName == null) {
    var userName = prompt("Please enter your name", "User Name");
};
var location = prompt("Please enter your location", "Location");
while (location == null) {
  var location = prompt("Please enter your location", "Location");
};
var buttonNo = prompt("Please enter the number of buttons you would like", "1");
  while (buttonNo > 6) {
  alert("This is invalid");
var buttonNo = prompt("Please enter the number of buttons you would like", "1");
};
userInfo.push(userName, location, buttonNo)
document.getElementById('info').innerHTML = userInfo
while (count <= buttonNo) {
  var buttonname = prompt("Please enter the name of button "+count, "Name");
  if (buttonname !=null) {
    document.getElementById(count).innerHTML = buttonname +": "+"\n" + buttonCounts[count-1]
    buttonNames.push(buttonname)
    document.getElementById(count).style.visibility = 'visible';
    count++
  } else {}
}
var count = 0;
  while(count < buttonNames.length){
      outputArray.push([]);
    count++
    }
}

document.getElementById('end').onclick = function () {
  var csvContent = "outputArray:text/csv;charset=utf-8,";
  outputArray.forEach(function(infoArray,index){
      dataString = infoArray.join(",");
    csvContent += dataString + "\n";
    }); 

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  var fileName = ("Survey of "+userInfo[1]+" by "+userInfo[0]+".html");
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
}

menu();

