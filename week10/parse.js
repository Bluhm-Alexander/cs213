/************************************************************
* This function cleans up empty spots in the arrays
***********************************************************/

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

/****************************************************************
* This function parses out the data from the txt files so we can
* get a better display of it.
****************************************************************/

function GetCountries(val)
{
  //let us store cities and population in to seperate arrays
   var cities;
   var population = [];
   
   
	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() 
  {
		if (this.readyState == 4 && this.status == 200)
		{
        var text = this.responseText;
        //We Need to split populations and cities
        population = text.split(/[a-zA-Z\s]/g);
        cities = text.split(/[0-9,;]/g);
        //clean out empty spots in array, ethnic comma cleansing!
        population.clean("");
        population.clean("-");
        cities.clean("");
        
        //loop through and display the table
        var myTable = "<table><tr><th>Cities</th>";
        myTable+="<th>Population</th></tr>";
        
        for (var i = 0; i < cities.length; i++)
        {
          myTable += "<tr><td>" + cities[i] + "</td>";
          myTable += "<td>" + population[i] + "</td></tr>";
        }
        
        /*for (var i = 0; i < population.length; i++)
        {
	        document.getElementById("demo").innerHTML += (population[i] + "<br />");
        }
        document.getElementById("demo").innerHTML = (cities + "<br />");*/
        
        document.getElementById('tablePrint').innerHTML = myTable;
		}
  };
	xhttp.open("GET", val+".txt", true);
	xhttp.send();
	
}

/*******************************************************************
* Code below will open .json files and parse them.
********************************************************************/

function openJson(url)
{
  
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myArr = JSON.parse(this.responseText);
          var myTable = "<table><tr><th>First Name</th>";
          myTable+="<th>Last Name</th>";
          myTable+="<th>Address</th>";
          myTable+="<th>Major</th>";
          myTable+="<th>GPA</th></tr>";
          
          for (var i = 0; i < myArr.students.length; i++)
          {
            myTable += "<tr><td>" + myArr.students[i].first + "</td>";
            myTable += "<td>" + myArr.students[i].last + "</td>";
            myTable += "<td>" + myArr.students[i].address.city + "<br>"
            + myArr.students[i].address.state + ", " +
            myArr.students[i].address.zip; + "</td>";
            myTable += "<td>" + myArr.students[i].major + "</td>";
            myTable += "<td>" + myArr.students[i].gpa + "</td></tr>";
          }
          document.getElementById('display').innerHTML = myTable;
          
      }
  };

var input = document.getElementById("user_input").value; //fetch user input field

xmlhttp.open("GET", input, true);
xmlhttp.send();

}

