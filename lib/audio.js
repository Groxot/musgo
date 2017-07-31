var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector('audio');
var visual = document.querySelector('#color');
// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
var source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node
const drowCircleEq = require('./visual/equalizer');
var analys = audioCtx.createAnalyser();
drowCircleEq(analys);

const setPanNodeComponent = require('./audio/stereo');
var panNode = audioCtx.createStereoPanner();
setPanNodeComponent(panNode);

source.connect(analys);
analys.connect(panNode);
panNode.connect(audioCtx.destination);