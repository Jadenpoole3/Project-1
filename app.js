const jeopardy = document.getElementById('jeopardy-song');

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
    },
    {
      questions: "Who is the best basketball player ever",
      answer: "Jaden Poole",
      choices: "Lebron James, Jaden Poole, Micheal Jordan, ",
      points: 1000,
    }

    

  ]

  const musicQuestions = [
    {
      questions: "Who made your hotline bling in 2016",
      answer: "Drake",
      choices: "Drake, Jay-z, Kendrick Lamar , ",
      points: 200,
    },
    {
      questions: "What is the album of the year ",
      answer: "Damn",
      choices: "Damn, More Life, Cozy tapes, ",
      points: 300,
    },
    
    {
      questions: "Who has the major keys to sucesss",
      answer: "Dj Khaled",
      choices: "Dj Khaled, Rick Ross, Lil wayne, ",
      points: 400,
    },

    {
      questions: "Who invented the moon walk",
      answer: "Micheal Jackson",
      choices: "Micheal Jackson, Rick James, Prince, ",
      points: 500,
    },
    {
      questions: "Who is the best artist alive",
      answer: "Jaden Poole",
      choices: "Jay-z, Jaden Poole, Slick Rick, ",
      points: 1000,
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
      const jeopardy = (time, sound = true)
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
    
        $('.sports5').on('click', function () {
          const y = prompt(sportsQuestions[4].questions,);
        if(y === sportsQuestions[4].answer) {
          window.alert('Correct')
          score += 1000;
          $('.scoreSheet').html(score);
          
          
        } else {
          window.alert('incorrect')
          score -=  1000;
          $('.scoreSheet').html(score);
        
            }
          });

          
          $('.music').on('click', function () {
            
            const y = prompt(musicQuestions[0].questions);
          if(y === musicQuestions[0].answer) {
            window.alert('Correct')
            score += 200;
            $('.scoreSheet').html(score);
            
            
          } else {
            window.alert('incorrect')
            score -= 200;
            $('.scoreSheet').html(score);
          }
            });