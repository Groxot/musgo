var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');
var visual = document.querySelector('#color');
// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
var source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node
var analys = audioCtx.createAnalyser();

analys.fftSize = 2048;
var bufferLength = analys.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analys.getByteTimeDomainData(dataArray);

///////
var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");

var dotsPerCircle=1024;

var interval=(Math.PI*2)/dotsPerCircle;   
var centerX=300;
var centerY=300;
var radius=100;


///////

(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
var a,b,c = 0;
function step(timestamp) {
    
   context.clearRect(0, 0,600,600); 
    analys.getByteTimeDomainData(dataArray);
 //   for(var i=0;i<dataArray.length-2;i++){


for(var i=0;i<dotsPerCircle;i++){

    desiredRadianAngleOnCircle = interval*i;
  
    //1
        var x = centerX+radius*Math.cos( desiredRadianAngleOnCircle )*(128/dataArray[i]);
        var y = centerY+radius*Math.sin( desiredRadianAngleOnCircle )*(128/dataArray[i]);
 
     context.beginPath();
     context.arc(x,y,2,0,Math.PI*2);
     context.closePath();
     context.fill();
    
}
 //   }
     visual.innerHTML = dataArray;
 //   visual.style.backgroundColor =  'rgb(' + [Math.round(a),Math.round(b),Math.round(c)].join(',') + ')';

    requestAnimationFrame(step);
  
}

requestAnimationFrame(step);


// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination, so we can play the
// music and adjust the volume using the mouse cursor
source.connect(analys);
analys.connect(audioCtx.destination);