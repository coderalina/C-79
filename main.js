var student = [];

function enter_name(){

var name_1 = document.getElementById("student_1").value;
var name_2 = document.getElementById("student_2").value;
var name_3 = document.getElementById("student_3").value;

student.push(name_1);
student.push(name_2);
student.push(name_3);
console.log(student);

document.getElementById("display").innerHTML=student;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}

function sorting(){

student.sort();
console.log(student);
document.getElementById("display").innerHTML=student;

}
