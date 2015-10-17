document.addEventListener('DOMContentLoaded', function () {
  
    var people = [
	  {name: 'Brendan',
	  gender:'male', job: 'Frontend Engineer'},
	  {name: 'N/A', foo: 'bar'},
	  {name: 'Steve', gender: 'male', foo: 'not neccessarily bar',
		job:'student', age:23, phonenumber:'555-555-5555'}, 
	  {name: 'Just Name'}, {foo: 'Just Bar'}, {gender: 'Just gender'}, 
	  {job: 'Just Job'}
	];
  

	function displayPeople(people) {
		//Create a table
	    var body = document.body;
	    var personTable  = document.createElement('table');
        personTable.id = "person-table";
    
		//Create Title Row and an empty row
	    var titleRow = personTable.insertRow();
		titleRow.id = "title-row";
        var emptyRow = personTable.insertRow();
	    var attrMap = {};
	    var numAttrs = 0;
  
	    for (var i = 0; i < people.length; i++) {
	      var person = people[i];
	      for (var key in person) {
	        if (! (key in attrMap)) {
              
	          //Add to attrMap
	          attrMap[key] = numAttrs;
	          numAttrs++;
          
	          //Add a new column
	          var td = titleRow.insertCell();
	          $(td).text(key);
              emptyRow.insertCell();
	        }
	      }  
	    }
        
        for (var i = 0; i < people.length - 1; i++) {
		  //Clone empty columns for each person
          $(emptyRow).clone().appendTo(personTable);
        }
      
        //Add table
        body.appendChild(personTable);
      
	    for (var i = 0; i < people.length; i++) {
      
	      //Fill data for each person
          var person = people[i];
	      var attributes = Object.keys(person);
          var $curRow = $("#person-table tbody").children().eq(i + 1);
          
	      for (var j = 0; j < attributes.length; j++) {
				//Insert attributes
                $curRow.children().eq(
                  attrMap[attributes[j]]).text(person[attributes[j]]);
			}
	    }
	}
	
	//Call function
	displayPeople(people);
});