$(document).ready(function() {

  var domains = ["Q1", "Q2", "Q3", "Q4", "Q5 ", "Q6", "Q7", "Q8 ", "Q9", "Q10", "Q11", "Q12 ", "Q13", "Q14","Q15","Q16","Q17","Q18","Q19"]
  var questionText = ["A vertical longitudinal space between wythes of masonry or between an outer masonry wythe and another backup system.",
  "A rod or spindle (either fixed or rotating) passing through the centre of a wheel or group of wheels.",
  "Which of these is called a split pin?",
  "The component  is a three-piece fastener system and has a U-shaped piece that has holes at the end of the prongs to accept the  pin.",
  "Which of the following is a hardware device that mechanically joins or affixes two or more objects together.",
  "Which simple machine principle applies on a pair of scissors?",
  " What is the device used for connecting ends of shafts for power transmission?",
  " Which of the following is a mechanical device that inhibits motion by absorbing energy from a moving system?",
  "Which of the following gear type is used for translating rotation motion in linear motion?",
  " What mechanical device is used to engage and disengage power transmission especially from driving shaft to driven shaft?",
  "A mechanical fastener composed of a head on one end and a cylindrical stem on another (called the tail) which has the appearance of a metal pin.",
  "A device that harnesses the kinetic energy of some fluid - such as water, steam, air, or combustion gases - and turns this into the rotational motion of the device itself. ",
  " What does the below gauge indicate in a car?",
  "Which one of the following is not a part of simple machine ",
"A machine element that constrains realative motion to only desired motion  and reduces the friction between two object?",
"Which of folowing tupes of brakes are the most effective one?",
"Which type of following brake system is most effective in car system",
".At what part of the car hydraulic liquid is not used?",
"What is the use of choke in a bike?"];

var choices=[["Studs","Collar Joint","Rivets","Standoffs"],["Axle","Rod","Clutch","Sprocket"],["B","C","D","A"],["ClutchTwin","Bracket","Clevis fastener","Retaining ring"],["Screw","Nails","Fastener","Power Screw"],["Wedge","Lever","Pulley","Slope"],["Splines","Linkages","Seals","Couplings"],["Fasteners","Clutch","Brake","Cam"],["Spur gear","Herringbone gear","Rack and Pinion gear","Bevel gear"],["Axle","Batten","Clutch","Flange"],["Screw","Rivet","Spur","Spline"],["Gasket","Turbine","Camshaft","Distributor"],["Temp.of oil","Temp.of coolant","Temp.of car","None of the above"],["wedge","lever","pulley","All of the above"],["Brakes","Accelerator","Bearing","Suspension"],["Caliper brake","V.brake","Cantilever brakes","Disc brake"],["Drum brakes","Disc brakes","CBS","ABS"],["Brakes","Steering","Engine","Clutch"],["Increasing the air quantity","Increasing fuel quantity","Balancing the air fuel mixture","None of the above"]];
 
//   var addressstuff=["https://www.aaruushdomains.com/magefficie",
// "https://www.aaruushdomains.com/architecture",
// "https://www.aaruushdomains.com/digital-design",
// "https://www.aaruushdomains.com/electrizite",
// "https://www.aaruushdomains.com/bluebook",
// "https://www.aaruushdomains.com/konstruktion",
// "https://www.aaruushdomains.com/fundaz",
// "https://www.aaruushdomains.com/x-zone",
// "https://www.aaruushdomains.com/vimanaz",
// "https://www.aaruushdomains.com/praesentatio",
// "https://www.aaruushdomains.com/yuddhame",
// "https://www.aaruushdomains.com/online",
// "https://www.aaruushdomains.com/machination",
// "https://www.aaruushdomains.com/robogyan"]
  var answers = [2,1,1,3,3,2,4,3,3,3,2,2,2,4,3,4,4,3,2];
  var userAnswers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  var ans = 0;
  var correct = 0;

  function hideAll() {
    $(".options").fadeOut(10);
    $(".question-box").fadeOut(10);
    $(".progressBar").fadeOut(10);
    $("option1").removeClass("btn-primary");
    $("option2").removeClass("btn-primary");
    $("option3").removeClass("btn-primary");
    $("option4").removeClass("btn-primary");
  }

  function progressBarIn() {
    $(".progressBar").fadeIn(500);
    var progress = 100;
    var progressAnim = setInterval(frame, 100);
    function frame() {
      if (progress <= 0) {
        clearInterval(progressAnim);
        progress = 100;
      } else {
        progress--;
        $(".progressBar").css("width", progress+"vw")
      }
    }

  }

  function questionBoxIn(id) {
    $(".question-box h1").text(domains[id]);
    $(".question-box h2").text(questionText[id]);
    console.log("../res/q images/"+id+'.png');
    $(".question-box img").attr("src", "./res/q images/"+id+".png");
    $(".question-box").fadeIn(500);
  }

  function optionsIn(id) {
    $(".options").fadeIn(500);
    $("#option1").text(choices[id][0]);
    $("#option2").text(choices[id][1]);
    $("#option3").text(choices[id][2]);
    $("#option4").text(choices[id][3]);
  }

  function questionOn(id) {
    progressBarIn();
    questionBoxIn(id);
    optionsIn(id);
    $("#option1").click(function () {
      $(this).addClass("btn-primary");
      ans=1;
      $("option2").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option2").click(function () {
      $(this).addClass("btn-primary");
      ans=2;
      $("option1").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option3").click(function () {
      $(this).addClass("btn-primary");
      ans=3;
      $("option1").removeClass("btn-primary");
      $("option2").removeClass("btn-primary");
      $("option4").removeClass("btn-primary");
    });
    $("#option4").click(function () {
      $(this).addClass("btn-primary");
      ans=4;
      $("option2").removeClass("btn-primary");
      $("option3").removeClass("btn-primary");
      $("option1").removeClass("btn-primary");
    });
    setTimeout(function () {
      hideAll();
      userAnswers[id] = ans;
      console.log(userAnswers);
      ans = 0;
    }, 10000);
  }

function startQuiz() {
  var count = 0;
  hideAll();
  questionOn(count);
  count++;
  startQuestions = setInterval(function () {
    if (count == 14) {
      clearInterval(startQuestions);
      console.log("interval end");
      console.log("------------RESULT------------");
      showResult();
    }
    else {
      questionOn(count);
      count++;
    }
  }, 11000);
}

$('#startQuizBtn').click(function () {
  $('.intro').css('display','none');
  $('.preQuiz').text('Ready?');
  $('.preQuiz').fadeIn(500);
  setTimeout(function () {
    $('.preQuiz').fadeOut(500);
  }, 500);
  setTimeout(function () {
    $('.preQuiz').text('Set.');
    $('.preQuiz').fadeIn(500);
    setTimeout(function () {
      $('.preQuiz').fadeOut(500);
    }, 500);
  }, 1000);
  setTimeout(function () {
    $('.preQuiz').text('Go!');
    $('.preQuiz').fadeIn(500);
    setTimeout(function () {
      $('.preQuiz').fadeOut(500);
    }, 500);
  }, 2000);
  setTimeout(startQuiz, 3000);
});

function showResult() {
  correct = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == userAnswers[i]) {
      correct++;
      $("#qualifiedDomains").append( domains[i] + "</a></li>");
    }
  }
  $('#score').text(correct);
  $('.result').fadeIn(1000);
}



});
