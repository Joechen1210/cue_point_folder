videojs.plugin('pluginDev', function() {
  var player = this,
  overlay = document.createElement('p');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "Becoming a plugin developer";
  player.el().appendChild(overlay);
  
  player.catalog.getVideo('4601759356001', function(error, video) {
   player.catalog.load(video);
        var tt = player.textTracks()[0];
        tt.oncuechange = function() {
          if(tt.activeCues[0] !== undefined){
            var dynamicHTML = "id: " + tt.activeCues[0].id + ", ";
            dynamicHTML += "text: " + tt.activeCues[0].text + ", ";
            dynamicHTML += "startTime: " + tt.activeCues[0].startTime + ",  ";
            dynamicHTML += "endTime: " + tt.activeCues[0].endTime;
            document.getElementById("insertionPoint").innerHTML += dynamicHTML + "<br/>";
          }
        }
        player.play();
      });
});
