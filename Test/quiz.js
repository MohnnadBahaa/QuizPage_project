$('#startbtn').click(function(){
	$('#body').fadeIn(500);
})


function each(coll, func) { 
  if (Array.isArray(coll)) { 
    for (var i = 0; i < coll.length; i++) { 
      func(coll[i], i); 
    } 
  } else { 
    for (var key in coll) { 
      func(coll[key], key); 
    } 
  } 
}

var answers;
var counter = 0;
function sub() {
	var qus1= document.quiz.q1.value;
	console.log(qus1);
	var qus2= document.quiz.q2.value;
	console.log(qus2);
	var qus3= document.quiz.q3.value;
	console.log(qus3);
	var qus4= document.quiz.q4.value;
	console.log(qus4);
	var qus5= document.quiz.q5.value;
	console.log(qus5);
	var qus6= document.quiz.q6.value;
	console.log(qus6);
	var qus7= document.quiz.q7.value;
	console.log(qus7);
	var qus8= document.quiz.q8.value;
	console.log(qus8);
	var qus9= document.quiz.q9.value;
	console.log(qus9);
	var qus10= document.quiz.q10.value;
	console.log(qus10);
	var correctAnswers = ['holand', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9' ,'q10'];
	answers = [qus1, qus2, qus3, qus4, qus5, qus6, qus7, qus8, qus9, qus10]
	for (var i = 0; i < answers.length; i++) {
		if (answers[i] === correctAnswers[i]) {
			counter++;
		}
	}
	$('#result').append('<p>Your result is: ' + counter + '</p>');
}




