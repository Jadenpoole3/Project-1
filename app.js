let score = 0;
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
      points: 400,
    },

    {
      questions: "What team won 72 games in 2015-2016",
      answer: "Warriors",
      choices: "Jazz, Heat, Warriors, ",
      points: 500,
    }
    

  ]
  


$('.sports').on('click', function () {
  
  const y = prompt(sportsQuestions[0].questions,);
if(y === sportsQuestions[0].answer) {
  window.alert('Correct')
  score += 200;
  $('.scoreSheet').html(score);
  
  
} else {
  window.alert('incorrect')
  score -= 200;
  $('.scoreSheet').html(score);

    }
    $(this).remove()
  });

  $('.sports2').on('click', function () {
    const y = prompt(sportsQuestions[1].questions,);
  if(y === sportsQuestions[1].answer) {
    window.alert('Correct')
    score += 300;
    $('.scoreSheet').html(score);
    
    
  } else {
    window.alert('incorrect')
    score -=  300;
    $('.scoreSheet').html(score);
  
      }
    });


    $('.sports3').on('click', function () {
      const y = prompt(sportsQuestions[2].questions,);
    if(y === sportsQuestions[2].answer) {
      window.alert('Correct')
      score += 400;
      $('.scoreSheet').html(score);
      
      
    } else {
      window.alert('incorrect')
      score -=  400;
      $('.scoreSheet').html(score);
    
        }
      });
  
      $('.sports4').on('click', function () {
        const y = prompt(sportsQuestions[3].questions,);
      if(y === sportsQuestions[3].answer) {
        window.alert('Correct')
        score += 500;
        $('.scoreSheet').html(score);
        
        
      } else {
        window.alert('incorrect')
        score -=  500;
        $('.scoreSheet').html(score);
      
          }
        });
    


