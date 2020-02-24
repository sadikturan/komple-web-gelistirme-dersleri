function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype
Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}

// Quiz Prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

// Quiz guess
Quiz.prototype.guess = function(answer){
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}


var q1 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var q2 = new Question("what's the most popular programming language ?",["c#","visual basic","nodejs","javascript"],"javascript");

var q3 = new Question("what's the best modern programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var q4 = new Question("what's the best modern programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var questions = [q1,q2,q3,q4];


// Start Quiz

var quiz = new Quiz(questions);

console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.score)
console.log(quiz.isFinish());
