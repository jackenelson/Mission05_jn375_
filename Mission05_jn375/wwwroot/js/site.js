$("#btnCalc").click(function () {

    /*calculated precentage weights of each type of assignment */
    var midterm = $("#pctMidterm").val() * 0.1
    var assignments = $("#pctAssign").val() * 0.5
    var projects = $("#pctProject").val() * 0.1
    var quiz = $("#pctQuiz").val() * 0.1
    var final = $("#pctFinal").val() * 0.1
    var intex = $("#pctIntex").val() * 0.1

    var studentScore = assignments + projects + quiz + midterm + final + intex
    studentScore = studentScore.toFixed(2)
    var letterGrade = ''
    /*determine what the letter grade is depending on student score */
    if (studentScore >= 94) {
        letterGrade = "A"
    } else if (studentScore >= 90) {
        letterGrade = "A-"
    } else if (studentScore >= 87) {
        letterGrade = "B+"
    } else if (studentScore >= 84) {
        letterGrade = "B"
    } else if (studentScore >= 80) {
        letterGrade = "B-"
    } else if (studentScore >= 77) {
        letterGrade = "C+"
    } else if (studentScore >= 74) {
        letterGrade = "C"
    } else if (studentScore >= 70) {
        letterGrade = "C-"
    } else if (studentScore >= 67) {
        letterGrade = "D+"
    } else if (studentScore >= 64) {
        letterGrade = "D"
    } else if (studentScore >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }
    /*Print through index page*/
    $("#letterCalculated").html(letterGrade)
    $("#studCalculated").html(studentScore + "%")

})
