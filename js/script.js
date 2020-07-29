
function words() {

  $ajaxUtils
    .sendGetRequest("../episode_12/data.txt", 
      function (request) {
        var file = request.responseText;

        var lines = file.split('\n');
        var table = document.getElementById("forTest");
        for (var i=0; i<lines.length; i++){
          var row = table.insertRow(i+1);
          var word = lines[i].split('\t');
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);

          
          cell1.innerHTML = word[0];
          cell2.innerHTML = word[1]; 
        }

      });
}