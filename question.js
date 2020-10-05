

class Question {
    constructor(question) {
        this.question = question.question;
        this.answers = question.answers;
        this.correctAnswers = question.correct_answers;
    }
}

class QuestionClass {
    constructor(questionsArray) {
        this.questionsArray = [];
        this.count = 0; 
        this.userAnswers = []

        for (let question of questionsArray) {
            this.questionsArray.push(new Question(question));
        }
    }

    setNewQuestion() {
        let shownQuestion = document.getElementById("shown-question");
        let shownAnswersUl = document.getElementById("shown-Answers");
        let resetBtn = document.createElement("input")
        resetBtn.type ="button"
        resetBtn.value ="reset"

        shownAnswersUl.appendChild(resetBtn)

        this.count++

        shownAnswersUl.innerHTML = ""

        let anotherCount = 0;
        
        for(let i = 0; i < Object.values(this.questionsArray[this.count].answers).length; ++i){
            if(Object.values(this.questionsArray[this.count].answers)[i] != null){
                let newAnswers = document.createElement("li");
                shownAnswersUl.appendChild(newAnswers)
                shownAnswersUl.appendChild(resetBtn)
                newAnswers.innerHTML = Object.values(this.questionsArray[this.count].answers)[i]
                
                let clickcount = 0; 
                let answer;
                let correct; 
                
                newAnswers.addEventListener("click", e => {
                    //resetBtn.addEventListener("click", e =>{
                    //    this.userAnswers[this.count-1].answer = []
                    //    this.userAnswers[this.count-1].correct = []
                    //    console.log("userAnswer")
                    //    console.log(this.userAnswers[this.count-1].answer)
                    //    console.log("correctAnwser")
                    //    console.log( this.userAnswers[this.count-1].correct)                
                    //})
                    ++clickcount
                    if(clickcount > 1){
                        console.log(this.userAnswers[this.count-1].answer)
                    }
                    else{
                        newAnswers.style.backgroundColor =  "rgba(65, 105, 225, 0.5)"
                        answer = {
                            answer: [],
                            correct: []
                        }
                        this.userAnswers.push(answer)
                        
                        this.userAnswers[this.count-1].answer.push(Object.values(this.questionsArray[this.count].correctAnswers)[i])
                        //this.userAnswers[0].correct.push(Object.values(this.questionsArray[this.count].correctAnswers)[i])
                        
                        //console.log(this.userAnswers)
                        anotherCount++  
                        
                        for(let answer of Object.values(this.questionsArray[this.count].correctAnswers)){
                            console.log(anotherCount)
                            if(answer == "true" && anotherCount < 2 ){ 
                                this.userAnswers[this.count-1].correct.push(answer)
                            }
                        }
                        
                        console.log("userAnswer")
                        console.log(this.userAnswers[this.count-1].answer)
                        console.log("correctAnwser")
                        console.log( this.userAnswers[this.count-1].correct)
                    }
                })
            }
        }
        shownQuestion.innerHTML = this.questionsArray[this.count].question;
    }

    correctUserAnswer(correctAnswer, userAnwser){
    }
    
    //correctUserAnswer(correctAnswer, userAnswer)


    

}

