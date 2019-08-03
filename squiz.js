var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
    },
    {
        question:"which is leap year?",
        answers:{
            a:'2000',
            b:'2001',
            c:'2002'
        },
        correctAnswer:'a'
    },
    {
        question:"what is a new year?",
        answers:{
            a:'january1',
            b:'december1',
            c:'august2'
        },
        correctAnswer:'a'
    },
    {
        question:"what is a ?",
        answers:{
            a:'2000',
            b:'2001',
            c:'2002'
        },
        correctAnswer:'a'
    },
    {
        question:"what is birthday?",
        answers:{
            a:'day you were born',
            b:'day you die',
            c:'day you think why were you born?'
        },
        correctAnswer:'a'
    },
    {
        question:"what is a 2?",
        answers:{
            a:'primeno',
            b:'odd no',
            c:'compositeno'
        },
        correctAnswer:'a'
    },
    {
        question:"what is a NITT?",
        answers:{
            a:'Myhome',
            b:'place to enjoy',
            c:'place where you make friends'
        },
        correctAnswer:'c'
    },
    {
        question:"who are you?",
        answers:{
            a:'I dont know',
            b:'I am batman',
            c:'I am ultraman'
        },
        correctAnswer:'a'
    },
    {
        question:"how much duration is a B.Tech course?",
        answers:{
            a:'I can make complete in 4 yrs or even more',
            b:'who knows ',
            c:'Dont care'
        },
        correctAnswer:'a'
    }
];
var questionno;
var score=0;
var answers;
answers=[];
var k=0;
var bigquestion;
function view()
{
    
}
function Createquestion()
{    questionno=Math.floor((Math.random()*9)+1);
   bigquestion=myQuestions[questionno];
   viewquestion();
}
function viewquestion()
{
    document.getElementById("p").innerHTML = `${bigquestion.question}`;
    document.getElementById("an1").innerHTML=`${bigquestion.answers.a}`;
    document.getElementById("an2").innerHTML=`${bigquestion.answers.b}`;
    document.getElementById("an3").innerHTML=`${bigquestion.answers.c}`;

}
Createquestion();

function rsponse()
{
   
 answers[k]=document.querySelector('input[name = "radio"]:checked').value;
 console.log(answers[k]);
 if(myQuestions[questionno].correctAnswer==answers[k])
 {score++;
  document.getElementById("Results").innerHTML="Success";
  console.log("correct");
 }
 else{
 console.log("wrong answer");
 document.getElementById("Results").innerHTML="Failure";
 }
 
 k++;
 //Createquestion();
 //location.reload();
}
function getresults()
{
  alert("Your Score is ="+score);
  
}
