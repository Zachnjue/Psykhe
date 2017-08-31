//custom js file

//get input form addPyschologist fields 
var addPyshName = document.getElementById("name2");
var addEmail = document.getElementById("email2");
var addAbout = document.getElementById("textarea2");
var submit = document.getElementById("create2");

//get input from addTopic form fields
var addTopicName = document.getElementById("name");
var addTopicDescription = document.getElementById("des");
var addTopic = document.getElementById("create");

var heading = document.getElementById("dataHeading");
var paragaraph = document.getElementById("dataDescription");
	//var rootRef = firebase.database().ref().child("Topics");

	//rootRef.on("child_added", snap => {
		//var name = snap.child("Topic_Name").val();
		//var des = snap.child("Description").val();
		//$("#surround").slideToggle();
		//$("#dataHeading").show(name);
		//$("#dataDescription").show(des);
  //});
//};

//reference for retrieving data in realtime
var firebaseHeadingRef = firebase.database().ref().child("name");
var firebaseDescriptionRef = firebase.database().ref().child("description");

firebaseHeadingRef.on("value", function(datasnapshot) {//the paremeter datasnapshot is the variable that is going to store the retrieved data
  fireHeading.innerText = datasnapshot.val();
  
});

firebaseDescriptionRef.on("value", function(datasnapshot) {
  fireDescription.innerText = datasnapshot.val();
});

















//set a reference to the database
/*var firebaseRef = firebase.database().ref();

var submitClick = function submitClick() {

	//write this user input to the database
  var psychName = addPyshNamevalue;
	var email =  addEmail.value;
	var about = addAbout.value;

	firebaseRef.push({Pyschologists: {Name:pyshName, Email:email, About:about, }});

  //write this user input to the database
	var name = addTopicName.value;
	var description = addTopicDescription.value;
	
	//set child value to root/main object of the database
	//firebaseRef.push().set(name);
	//firebaseRef.push().set(description);
	firebaseRef.push({Topics: {Topic_Name:name, Description:description, }});
};
 


//save data to firebase
/*function saveData() {
	var addTopicName = nameTopic.value;
	var addTopicDescription = descriptionTopic.value;

	messageRef.push({fieldname:"nameTopic", text:addTopicName});
	messageRef.push({fieldname:"descriptionTopic", text:addTopicDescription});
	nameTopic.value = "";
	descriptionTopic.value = "";
};*/

var database = firebase.database();




//addPsychologist
function send() {
  var psychName = addPyshName.value;
  var email =  addEmail.value;
  var about = addAbout.value;
  
  //reference datbase child
  var ref = database.ref("Pyschologists");

  //push data to database child
  var data = {Name:psychName, Email:email, About:about};

  ref.push(data);
};

//addTopic
function submitClick() { 
var name = addTopicName.value;
var description = addTopicDescription.value;


//reference datbase child
var ref = database.ref("Topics");

//push data to database child
var data = {Name: name, Description: description};

ref.push(data);

//retrieve and display topic data
//var ref = database.ref().child("Topics");
//ref.on("value", function(datasnapshot) {
  //heading.innerText = datasnapshot.val();
  //});
};








//front-end 
$(document).ready(function () {
	$("i.glyphicon-plus").click(function() {//add topic button functionality
    $("#addTopic").slideToggle();
   
    //tooltips
    $("[data-toggle='tooltip']").tooltip();
		$("[data-toggle='tooltip']").tooltip();
	});
	$("#plus2").click(function() {
    $("#addTopic2").slideToggle(); 
	});
});