console.log("hello")


// Variables

var firstVar = "String"
var secondVar = 45
console.log(firstVar)
console.log(secondVar)


let student = {
    first: "Jo",
    last: "Sundaram",
    id:101147833,
    age:19,

    studentInfo: function (){
        return this.first +" " + this.last + "\nID: " + this.id
    }


}

// document.getElementById("Text").innerHTML="19"

console.log(student.studentInfo())



// if else, switch

switch(3){

    case 0:
        text = "Sunday"
        break
    case 5:
        text = "Friday"
        break
    case 6:
        text = "Saturday"
        break

    default:
        text = "Weekday"
}


console.log(text)
