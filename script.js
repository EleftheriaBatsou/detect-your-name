
var ba = ["Chrome","Firefox","Safari","Opera","MSIE","Trident","Edge"];
var b, ua = navigator.userAgent;
for(var i=0; i < ba.length; i++){
    if( ua.indexOf(ba[i]) > -1 ){
        b = ba[i];
        break;
    }
}
if(b == "MSIE" || b == "Trident" || b == "Edge"){
    b = "Internet Explorer";
}
alert("Your browser is " + b + " :)");
