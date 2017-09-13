$(() => {
  const sportsQuestions = [
    {
      questions: "Who won the world series in 2016",
      answer: "Chicago Cubs",
      choices: "New York Yankees, Chicago Cubs, Cleveland Indians, ",
      points: 200,
    },
    {
      questions: "What team lost a 28-3 lead in the Super Bowl",
      answer: "Atlanta Falcons",
      choices: "Atlanta Falcons, New England Patriots, Green Bay Packers, ",
      points: 300,
    },
    
    {
      questions: "What basketball player had 42 triple doubles in the 2016-2017 year",
      answer: "Russell Westbrook",
      choices: "Stephen Curry, Lebron James, Russell Westbrook, ",
      points: 300,
    },
    

  ]
  


$('.basic').on('click', function ($event) {
  const y = prompt(sportsQuestions[0].questions, `Type ${sportsQuestions[0].choices}`);
if(y === sportsQuestions[0].answer) {
  window.alert('Correct')
} else {
  window.alert('incorrect')

    }
  }
};