var numberOfStudents = 15;
var numberOfMentors = 8;
var group = (numberOfMentors+numberOfStudents);
var studentsPorcentage = numberOfStudents*100/group;
var mentorsPorcentage = numberOfMentors*100/group;



var outputStudent = "Percentage students:" + Math.round(studentsPorcentage) +"%";
var outputMentors = "Percentage mentors:" + Math.round(mentorsPorcentage)+"%";

console.log(outputMentors);
console.log(outputStudent);
