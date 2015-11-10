videojs.plugin('pluginDev', function() {
  var player = this,
      cuePointAra=[],
     allCuePointData;
  overlay = document.createElement('p');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "Becoming a plugin developer";
  player.el().appendChild(overlay);
  
  player.catalog.getVideo('myPlayer.options()['data-video-id']', function(error, video) {
   player.catalog.load(video);
   cuePointAra = myPlayer.mediainfo.cue_points;
        var tt = player.textTracks()[0];
        tt.oncuechange = function() {
          if(tt.activeCues[0] !== undefined){
            var dynamicHTML = "id: " + tt.activeCues[0].id + ", ";
            dynamicHTML += "text: " + tt.activeCues[0].text + ", ";
            dynamicHTML += "startTime: " + tt.activeCues[0].startTime + ",  ";
            dynamicHTML += "endTime: " + tt.activeCues[0].endTime;
            document.getElementById("insertionPoint").innerHTML += dynamicHTML + "<br/>";
              allCuePointData = getSubArray(cuePointAra,'time',tt.activeCues[0].startTime);
            console.log('cue point data:', allCuePointData);
            console.log('cue point metadata:', allCuePointData[0].metadata);
          }
        }
        player.play();
        player.muted(true);
      });
      function getSubArray(targetArray, objProperty, value) {
        var i, totalItems = targetArray.length,
          objFound = false,
          idxArr = [];
        for (i = 0; i < totalItems; i++) {
          if (targetArray[i][objProperty] === value) {
            objFound = true;
            idxArr.push(targetArray[i]);
          }
        }
        return idxArr;
      };
});
