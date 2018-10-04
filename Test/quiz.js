//We search for the button, by id, that will satrt the test,and when we click it, the test will begin.
$('#startbtn').click(function(){
	$('#body').fadeIn(1000);
});

//Using each to be DRY
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

// History for all completed IQ tests
var resultsHistory = [];

//A function that take the results of the test, and check them using each, and then return the number of the correct values.
//Then the function will restore the result in addition to the name and the age of the candidate inside the resultsHistory.
//Then the function will show the result of that candidate.
function sub() {
  var counter = 0;
	var qus1 = document.quiz.q1.value;
	var qus2 = document.quiz.q2.value;
	var qus3 = document.quiz.q3.value;
	var qus4 = document.quiz.q4.value;
	var qus5 = document.quiz.q5.value;
	var qus6 = document.quiz.q6.value;
	var qus7 = document.quiz.q7.value;
	var qus8 = document.quiz.q8.value;
	var qus9 = document.quiz.q9.value;
	var qus10 = document.quiz.q10.value;

  var correctAnswers = ['33 percent', 'Apple', '0', '4', 'Bill is taller than Peter', 'Anxious', 'Spoke', '12', '31311313' ,'16'];
	var answers = [qus1, qus2, qus3, qus4, qus5, qus6, qus7, qus8, qus9, qus10];

	each(answers, function(value, key) {
		if (value === correctAnswers[key]) {
			counter++;
		}
	});
	var person = {};
	person.personName = $('#Name').val();
	person.age = $('#Age').val();
	person.mark = counter;
	resultsHistory.push(person);
	$('#result').html('<p>Your result is: ' + counter + '</p>');
}




