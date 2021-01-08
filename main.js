

const baseURL = "https://ci-swapi.herokuapp.com/api/";
  
function getData(type, cb) {

//request method //
var xhr = new XMLHttpRequest();
//var data;//

//get info from adress//

xhr.open("GET", baseURL + type + "/");

//send info data//

xhr.send();


//function setData(jsonData) {//
    //data = jsonData; } //

//event listner see linkfolder for info about readyState and status//

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // document.getElementById("data").innerHTML = this.responseText;//
       // console.log(typeof(JSON.parse(this.responseText))); //
       //console.log(JSON.parse(this.responseText)); //
       //setData(JSON.parse(this.responseText));//
        //(data=JSON.parse(this.responseText); //
          cb(JSON.parse(this.responseText));
    }
}
};

//run code after 500 millisec //

//setTimeout(function(){//
//console.log(data);//
//}, 500);//

//function printDataToConsole(data) {
  //  console.log(data);
//}

//getData(printDataToConsole);

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type){
    
     var el = document.getElementById("data");
         el.innerHTML = "";

    getData(type, function(data){
        //console.dir(data);
        data =  data.results;
         var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){
            el.innerHTML = `<table>${tableHeaders}</table>`;
            //Object.keys(item).forEach(function(key){
                //console.log(key);           
              el.innerHTML+="<p>"+ item.name + "</p>"; })
    //document.getElementById("data").innerHTML=item.name;
   // document.getElementById("data").innerHTML+="<p>"+ item.name + "</p>";
 });
}