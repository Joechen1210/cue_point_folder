videojs.plugin('pluginDev', function() {
  var player = this,
      cuePointAra=[],
     allCuePointData;
  overlay = document.createElement('p');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "Becoming a plugin developer";
  player.el().appendChild(overlay);
    
   player.catalog.getVideo(player.options()['data-video-id'], function(error, video){
     player.catalog.load(video);
       player.one("loadedmetadata",function(){
        var trackIndex = player.textTracks().length -1;
        var tt = player.textTracks()[trackIndex];
        tt.oncuechange = function() {
          if(tt.activeCues[0] !== undefined){
        var dynamicHTML = "id: " + tt.activeCues[0].id + ", ";
            dynamicHTML += "text: " + tt.activeCues[0].text + ", ";
            dynamicHTML += "startTime: " + tt.activeCues[0].startTime + ",  ";
            dynamicHTML += "endTime: " + tt.activeCues[0].endTime + ",  ";
            dynamicHTML += "text2: " + tt.activeCues[0].id.text + ", ";
            dynamicHTML += "name: " + tt.activeCues[0].name + ", ";
            dynamicHTML += "content: " + tt.activeCues[0].content + ", ";
            dynamicHTML += "align: " + tt.activeCues[0].align + ", ";
            dynamicHTML += "type: " + tt.activeCues[0].type + ", ";
            //dynamicHTML += "title: " + tt.activeCues[0].title + ", ";
            //dynamicHTML += "description: " + tt.activeCues[0].description + ", ";
             document.getElementById("insertionPoint").innerHTML += dynamicHTML + "<br/><br/>";
            //jsonData = JSON.parse(tt.activeCues[0].text);
            //document.getElementById("insertionPoint").innerHTML += "title: " + jsonData.title + "description: " + jsonData.description + "<br/><br/>";
          } else {
            document.getElementById("insertionPoint").innerHTML += "Cue point duration over" + "<br/><br/>";
          }
        } //end oncuechange
        player.play();
        player.muted(true);
      }); //end loadedmetadata
     
      });
});
