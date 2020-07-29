// function showWords() {
// 	document.querySelector("#forTest").innerHtml = 
// 	for (var prop in col_Array) {
// 		console.log(prop + ":" + col_Array[prop]);
// 	}
// }


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

document.querySelector("button")
	.addEventListener("click", function () {
		var self = this;
		var name = "";

		sendGetRequest("data.txt", 
		function (request) {
			self.name = request.responseText;
		})
	})
