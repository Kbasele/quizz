document.addEventListener("DOMContentLoaded", async function (e) {
   

    let questions = await getQuestions();
    let clickCount = 0; 

    document.getElementById("question-btn").addEventListener("click", function(e){
        e.target.innerHTML = "next"
        ++clickCount

        questions.setNewQuestion()

        if(clickCount > 1){
            questions.saveUserAnswer()
            //console.log(questions.getUserFacit())
            //game.checkIfCorrect(questions.saveUserAnswer,questions.saveUserAnswer)
        }
    })

});
//document, get question returnerar promise, await väntar så att getQuestions resolvar och
//returnerar värdet och kör in det i Questions.


