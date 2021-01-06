
//request method //
var xhr = new XMLHttpRequest();
var data;


function setData(jsonData) {
    data = jsonData;
}

//event listner see linkfolder for info about readyState and status//

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
       // console.log(typeof(JSON.parse(this.responseText))); //
       //console.log(JSON.parse(this.responseText)); //
       setData(JSON.parse(this.responseText));

    }
};

//get info from adress//

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

//send info data//

xhr.send();

console.log(data);
