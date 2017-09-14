const jeopardy = document.getElementById('jeopardy-song');
const thriller = document.getElementById('thriller');
const cry = document.getElementById('cry');
const magnolia = document.getElementById('magnolia');
const chainsmokers = document.getElementById('chainsmokers');
const september= document.getElementById('september');


 jeopardy.play();


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

  const moviesQuestions = [
    {
      questions: "What is Adam Sandler best movie",
      answer: "The Longest Yard ",
      choices: "Big Daddy, The Longest Yard,  Click, ",
      points: 200,
    },
    {
      questions: "What is the best mafia movie ",
      answer: "Scareface",
      choices: "God Father, The Town, Scareface, ",
      points: 300,
    },
    
    {
      questions: "What movie was Denzel Washington a dirty cop",
      answer: "Training Day",
      choices: "Training Day, Man on fire, The Equalizer, ",
      points: 400,
    },

    {
      questions: "Best R-Rated marvel movie",
      answer: "Logan",
      choices: "Logan, Deadpool, Captain America, ",
      points: 500,
    },
    {
      questions: "Best Batman movie",
      answer: "The Dark Knight",
      choices: "The Dark Knight, The Dark Knight rises, Batman Begins, ",
      points: 1000,
    }

    

  ]
  const TvQuestions = [
    {
      questions: "Best Cartoon on Nick",
      answer: "Spongebob ",
      choices: "Spongebob, Kenan and Kel,  Rugrats, ",
      points: 200,
    },
    {
      questions: "What is the show where a girl game reasons for suicide ",
      answer: "13 reasons",
      choices: "Riverdale, Stranger things, 13 reasons, ",
      points: 300,
    },
    
    {
      questions: "What is the best anime",
      answer: "Dragon ball Z",
      choices: "Dragon ball Z, Naruto, Baruto, ",
      points: 400,
    },

    {
      questions: "What is the highest rated tv show of the 90s",
      answer: "Seinfield",
      choices: "Friends, Seinfield, Ben, ",
      points: 500,
    },
    {
      questions: "Who is peter griffin baby son",
      answer: "Stewie",
      choices: "The Chicken, The Dog, Stewie, ",
      points: 1000,
    }

    

  ]

  const songsQuestions = [
    {
      questions: "Cause its a thriller",
      answer: "Thriller ",
      choices: "Billy Jean, Thriller,  Bad, ",
      points: 200,
    },
    {
      questions: "Baby pull me closer in the backseat of your rover ",
      answer: "Closer",
      choices: "Closer, Power, 444, ",
      points: 300,
    },
    
    {
      questions: "Ba de ya - dancing in September... Ba de ya - never was a cloudy day",
      answer: "September",
      choices: "September, hotline, closer, ",
      points: 400,
    },

    {
      questions: "You dont have to say what you did i found out about himmmm",
      answer: "Cry me a River",
      choices: "Cry me a River, Bye, ",
      points: 500,
    },
    {
      questions: "In New York I milly rock hide in my sock",
      answer: "Magnolia",
      choices: "Magnolia, Drake, Flex, ",
      points: 1000,
    }

    

  ]

  $('.song').on('click', function () {
    
    jeopardy.pause();
    console.log(thriller)
    thriller.currentTime = 30;
    thriller.play();
    setTimeout(function() {
      thriller.pause();

    const y = prompt(songsQuestions[0].questions,);
    if(y === songsQuestions[0].answer) {
      window.alert('Correct')
      score += 200;
      $('.scoreSheet').html(score);
      
    } else {
      window.alert('incorrect')
      score -= 200;
      $('.scoreSheet').html(score);
    
        }
    }, 5000)

    
    
   
    
    });

    $('.song2').on('click', function () {
    
      jeopardy.pause();
      chainsmokers.currentTime = 60;
      chainsmokers.play();
        setTimeout(function() {
          chainsmokers.pause();


      const y = prompt(songsQuestions[1].questions,);
    if(y === songsQuestions[1].answer) {
      window.alert('Correct')
      score += 300;
      $('.scoreSheet').html(score);
      
      
      
    } else {
      window.alert('incorrect')
      score -= 300;
      $('.scoreSheet').html(score);
    
        }
      }, 5000)
      
      });
      $('.song3').on('click', function () {

        jeopardy.pause();
        september.currentTime = 50;
        september.play();
          setTimeout(function() {
            september.pause();
        
        const y = prompt(songsQuestions[2].questions,);
      if(y === songsQuestions[2].answer) {
        window.alert('Correct')
        score += 400;
        $('.scoreSheet').html(score);
        
        
        
      } else {
        window.alert('incorrect')
        score -= 400;
        $('.scoreSheet').html(score);
      
          }
        }, 5000)
        
        });
        $('.song4').on('click', function () {

        jeopardy.pause();
        cry.currentTime = 40;
        cry.play();
          setTimeout(function() {
            cry.pause();

            const y = prompt(songsQuestions[3].questions,);
            if(y === songsQuestions[3].answer) {
              window.alert('Correct')
              score += 500;
              $('.scoreSheet').html(score);
              
              
              
            } else {
              window.alert('incorrect')
              score -= 500;
              $('.scoreSheet').html(score);
            
                }

            
          }, 5000)
          
          
          });
         
          $('.song5').on('click', function () {
            
         jeopardy.pause();
            magnolia.currentTime = 5;
            magnolia.play();
            setTimeout(function() {
              magnolia.pause();
              
              const y = prompt(songsQuestions[4].questions,);
              if(y === songsQuestions[4].answer) {
                window.alert('Correct')
                score += 1000;
                $('.scoreSheet').html(score);
               
                
                
                
              } else {
                window.alert('incorrect')
                score -= 1000;
                $('.scoreSheet').html(score);
              
                  }


            }, 5000)
            
            
            });
           


  $('.Tv').on('click', function () {
    
    const y = prompt(TvQuestions[0].questions,);
  if(y === TvQuestions[0].answer) {
    window.alert('Correct')
    score += 200;
    $('.scoreSheet').html(score);
    
    
    
  } else {
    window.alert('incorrect')
    score -= 200;
    $('.scoreSheet').html(score);
  
      }
    
    });

    $('.Tv2').on('click', function () {
      
      const y = prompt(TvQuestions[1].questions,);
    if(y === TvQuestions[1].answer) {
      window.alert('Correct')
      score += 200;
      $('.scoreSheet').html(score);
      
      
      
    } else {
      window.alert('incorrect')
      score -= 200;
      $('.scoreSheet').html(score);
    
        }
      
      });
  
      $('.Tv3').on('click', function () {
        
        const y = prompt(TvQuestions[2].questions,);
      if(y === TvQuestions[2].answer) {
        window.alert('Correct')
        score += 200;
        $('.scoreSheet').html(score);
        
        
        
      } else {
        window.alert('incorrect')
        score -= 200;
        $('.scoreSheet').html(score);
      
          }
        
        });
    

        $('.Tv4').on('click', function () {
          
          const y = prompt(TvQuestions[3].questions,);
        if(y === TvQuestions[3].answer) {
          window.alert('Correct')
          score += 200;
          $('.scoreSheet').html(score);
          
          
          
        } else {
          window.alert('incorrect')
          score -= 200;
          $('.scoreSheet').html(score);
        
            }
          
          });
      
          $('.Tv5').on('click', function () {
            
            const y = prompt(TvQuestions[4].questions,);
          if(y === TvQuestions[4].answer) {
            window.alert('Correct')
            score += 200;
            $('.scoreSheet').html(score);
            
            
            
          } else {
            window.alert('incorrect')
            score -= 200;
            $('.scoreSheet').html(score);
          
              }
            
            });
        

  $('.movies').on('click', function () {
    
    const y = prompt(moviesQuestions[5].questions,);
  if(y === moviesQuestions[5].answer) {
    window.alert('Correct')
    score += 200;
    $('.scoreSheet').html(score);
    
    
    
  } else {
    window.alert('incorrect')
    score -= 200;
    $('.scoreSheet').html(score);
  
      }
    
    });

    $('.movies2').on('click', function () {
      
      const y = prompt(moviesQuestions[1].questions,);
    if(y === moviesQuestions[1].answer) {
      window.alert('Correct')
      score += 200;
      $('.scoreSheet').html(score);
      
      
      
    } else {
      window.alert('incorrect')
      score -= 200;
      $('.scoreSheet').html(score);
    
        }
      
      });
  
      $('.movies3').on('click', function () {
        
        const y = prompt(moviesQuestions[2].questions,);
      if(y === moviesQuestions[2].answer) {
        window.alert('Correct')
        score += 200;
        $('.scoreSheet').html(score);
        
        
        
      } else {
        window.alert('incorrect')
        score -= 200;
        $('.scoreSheet').html(score);
      
          }
        
        });

        $('.movies4').on('click', function () {
          
          const y = prompt(moviesQuestions[3].questions,);
        if(y === moviesQuestions[3].answer) {
          window.alert('Correct')
          score += 200;
          $('.scoreSheet').html(score);
          
          
          
        } else {
          window.alert('incorrect')
          score -= 200;
          $('.scoreSheet').html(score);
        
            }
          
          });
  
          $('.movies5').on('click', function () {
            
            const y = prompt(moviesQuestions[4].questions,);
          if(y === moviesQuestions[4].answer) {
            window.alert('Correct')
            score += 200;
            $('.scoreSheet').html(score);
            
            
            
          } else {
            window.alert('incorrect')
            score -= 200;
            $('.scoreSheet').html(score);
          
              }
            
            });
          


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
      $('.sports2').css("background-color", "black");
      
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

            $('.music2').on('click', function () {
              
              const y = prompt(musicQuestions[1].questions);
            if(y === musicQuestions[1].answer) {
              window.alert('Correct')
              score += 300;
              $('.scoreSheet').html(score);
              
              
            } else {
              window.alert('incorrect')
              score -= 300;
              $('.scoreSheet').html(score);
            }
              });
              $('.music3').on('click', function () {
                
                const y = prompt(musicQuestions[2].questions);
              if(y === musicQuestions[2].answer) {
                window.alert('Correct')
                score += 400;
                $('.scoreSheet').html(score);
                
                
              } else {
                window.alert('incorrect')
                score -= 400;
                $('.scoreSheet').html(score);
              }
                });

                $('.music4').on('click', function () {
                  
                  const y = prompt(musicQuestions[3].questions);
                if(y === musicQuestions[3].answer) {
                  window.alert('Correct')
                  score += 500;
                  $('.scoreSheet').html(score);
                  
                  
                } else {
                  window.alert('incorrect')
                  score -= 500;
                  $('.scoreSheet').html(score);
                }
                  });

                  $('.music5').on('click', function () {
                    
                    const y = prompt(musicQuestions[4].questions);
                  if(y === musicQuestions[4].answer) {
                    window.alert('Correct')
                    score += 1000;
                    $('.scoreSheet').html(score);
                    
                    
                  } else {
                    window.alert('incorrect')
                    score -= 1000;
                    $('.scoreSheet').html(score);
                  }
                    });
