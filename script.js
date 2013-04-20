//question array
//array of JSON objects
//FMT Q => txt, Ans = > txt, Correct =>nom
var questions = [
//	{"text": "this is my question"},
	{"text": "What is the capital of Italy?", "answers": ["Rome","Italy","Pikachu","Vagin" ], "correct": "Rome" },
	{"text": "What is the Capital of Germany?", "answers": ["Rome","Spain","Pikachu","Berlin" ], "correct": "Berlin"  },
	{"text": "What is the Capital of Ireland?", "answers": ["Dublin","Spain","Pikachu","Berlin" ], "correct": "Dublin" },
	{"text": "What is not the best pokemon?", "answers": ["Starmie","Aggron","Pikachu","Ladey Gags" ], "correct": "Ladey Gags" },
	{"text": "Who is not dead?", "answers": ["Lol Kem","Kety Perr","kem\'s career","Bayonse", "the goast" ], "correct": "Bayonse" }

];

var score = 0;//assign a value to score
var display_question =(function(){//creates a var 
	var question = questions[score];//targets a specific question, change array position to change q number
		
		$("#question").text(question.text); //select key => value
		
		$("#answers").empty();
		for(var i in question.answers) {
			var answer =question.answers[i];
			$("#answers").append("<li>" + answer + "</li>"); //append adds instead of overwrites as list items	
		}
		
		$("#answers li").on("click", validate_answer); //aims to validate the answer by calling the variable val ans
		});
		
		var validate_answer = (function () { //creates a function that will validate the answer
			if( $(this).text().toLowerCase() == questions[score].correct.toLowerCase()){
				score++;
					if(questions.length > score){
						display_question();
						countdown = max_countdown
				}else{
					$("#question").text("you finished, you are not retarded!");
					$("#answers").empty();
					clearInterval(countdown_interval);
					}
			}else{
				display_error();
		}
		display_score();
		});
		
var display_error = (function(){
		$("#question").text("you are retarded, refresh and try again");
		$("#answers").empty();
		clearInterval(countdown_interval);
		});
var display_score =(function(){
	$("#score").text(score);
});
var max_countdown = 10;
var countdown = max_countdown;
var display_countdown = (function () {
	$("#countdown").text(countdown);
});

var countdown_interval = setInterval( function() {
	display_countdown();
	countdown--;
	if(countdown < 0){
		display_error();
	}
	}, 
	1000);




display_question();//displays the content of the question variable
display_score();























