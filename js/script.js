// Question 1

var pets = [
	{
		type: "cat",
		age: 5.5,
	},
	{
		type: "dog",
		age: 3.8,
	},
	{
		type: "parrot",
		age: 4.0,
	},
];

for (var i = 0; i < pets.length ; i++) {
    
    var age = pets[i].age;

    if (age >= 4) {
        console.log(pets[i].type + "'s age is at least 4");
    }
}

// Question 2

function logBoolean(anyvalue) {
    
    var typeofanyvalue = typeof anyvalue;
   
    if (typeofanyvalue === "boolean") {
    console.log(typeofanyvalue);
    }
    
    if (typeofanyvalue !== "boolean") {
    console.log("Please pass a boolean value in");
    }
}

logBoolean("false");

// Question 3

var subheading = document.querySelector("h2");
var button = document.querySelector("button");

button.onclick = function() {
    
    subheading.style.color = "blue";
    subheading.innerHTML = "Updated subheading";
}