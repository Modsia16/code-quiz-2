var next = document.getElementById('next');
var score = document.getElementById('score');
var total = document.getElementById('totalScore');
var timer = document.getElementById('timer');
var count = 0;
var scoreCount = 0;
var duration = 60;
var quizques = document.querySelectorAll('.quiz-ques');
var quizans = document.querySelectorAll('.quiz-ques .quiz-ans input');
var submit = document.getElementById('submit')
var initial = document.querySelector('#initials')
/*starts timer associates with step clearing when questions run out*/


next.addEventListener('click', function(){
    step()
    duration = 60
})

/*score count for correct answers add point incorrect deduct point and 5 sseconds*/
quizans.forEach(function(quizansSingle) {
     quizansSingle.addEventListener('click', function() {
         setTimeout(function() {
             step();
         })
         var valid = this.getAttribute("valid");
         if(valid == "valid") {
             scoreCount += 1;
             score.innerHTML = scoreCount;
             total.innerHTML = scoreCount; 
         } else {
            duration -=10;
            scoreCount -= 1;
            score.innerHTML = scoreCount;
            total.innerHTML = scoreCount;
         }
     })
});
/*count and time*/
function step() {
    count += 1;
    for (var i = 0; i < quizques.length; i++) {
        quizques[i].className = 'quiz-ques';
    }
    quizques[count].className = 'quiz-ques active';
    if (count == 5) {
        next.style.display = 'none';
        clearInterval(durTime);
        timer.innerHTML = 0;
    }
}


var durTime = setInterval(function() {
    if (duration == 0) {
        duration = 60;
    }
    duration -=1;
    timer.innerHTML=duration;
    if(timer.innerHTML === "0") {
    }
}, 1000);

submit.addEventListener("click", function(event) {
    event.preventDefault();
    var initial = document.querySelector('#initials').value;
    if (initial === "") {
        displayMessage("Initals saved");

        localStorage.setItem('initials', initials);
    }

});