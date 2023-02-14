let good_signs = 0;
let bad_signs = 0;
let responseTable = document.getElementById("response-table");
let decision = document.getElementById("decision");
let questions = ["BA/DA match", "IP is close", "EM is aged", "avs full match", "ch/dr match", "DA ties to ch", "BA ties to ch", "DA ties to DR", "BA ties to DR"];
for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    let answer = prompt(question + " Please enter the answer (yes or no): ");
    let row = responseTable.insertRow();
    let questionCell = row.insertCell(0);
    let answerCell = row.insertCell(1);
    questionCell.innerHTML = question;
    answerCell.innerHTML = answer;
    if (answer.toLowerCase() === "yes") {
        good_signs++;
    } else if (answer.toLowerCase() === "no") {
        bad_signs++;
    } else {
        console.log("Invalid answer, please enter 'yes' or 'no'.");
    }
}
document.getElementById("good-signs").innerHTML = good_signs;
document.getElementById("bad-signs").innerHTML = bad_signs;
if (bad_signs > good_signs) {
    decision.innerHTML = "Based on the signals, it's a case of decline.";
} else {
    decision.innerHTML = "Based on the signals, it's not a case of decline.";
}