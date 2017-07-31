module.exports =
    function setPanNodeComponent(panNode) {
        document.querySelector("#stereo").addEventListener("change", function(e){
                    panNode.pan.value = e.target.value;
         })
};