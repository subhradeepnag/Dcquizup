$(document).ready(function() {

  var domains = ["MAGEFFICIE", "ARCHITECTURE", "DIGITAL DESIGN", "ELECTRIZITE", "BLUEBOOK ", "KONSTRUKTION", "FUNDAZ", "X ZONE & ACTIVITIES ", "VIMANAZ", "PRAESENTATIO", "YUDDHAME", "ONLINE ", "MACHINATION", "ROBOGYAN"]
  var questionText = ["Which of the following company has signed an agreement with Bank of Baroda to be the preferred financier for its dealers and consumers?",
  "Which of these cities has the maximum number of historical monuments?",
  "Who started the Pixar animation studio?",
  "In the circuit shown below, the voltage and current sources are ideal. The voltage (Vout) across the current source, in volts, is",
  "Which is the sheet-like muscle at the bottom of a human chest?",
  "What is the recommended size of a brick according to Bureau of Indian Standards?",
  "Find out which of the figures (1), (2), (3) and (4) can be formed from the pieces given in the figure (X).",
  "What is this software used for?",
  "Which company’s headquarter lies in Chicago, IL?",
  "From the above given lines from “The Road not taken” by Robert frost, What is the author trying to convey?",
  "From the following options, choose the output for the code",
  "_______ programs are automatically loaded and operates as a part of browser.",
  "What type of machine does old fashioned water well use?",
  "What was the name of the maid robot in Richie Rich?"]
  var choices = [
    ["Ashok Leyland","Tata Motors","Hyundai Motor India", "Mahindra & Mahindra"],
    ["Kolkata","Delhi","Mumbai", "Chennai"],
    ["Warren Buffett", "Tim Cook", "Walt Disney", "Steve Jobs"],
    ["0","5","10", "20"],
    ["Internal intercostal","Diaphragm","External intercostal", "Sternum"],
    ["20x10x10cm","20x9x9cm","19x9x9cm", "19x8x8cm"],
    ["1","2","3", "4"],
    ["Photo Editing","Video editing","Game development", "Music production"],
    ["Boeing","Honeywell","Sukhoi", "Antonov"],
    ["It represents a world which is full of people, where people have been living for many years.","He decided that that day he would take one path and keep the other path for another day.","He says that, he had to choose a road and that made all the difference", "He says just as fair, so, he felt that both paths were equally good and started walking on one of them."],
    ["Done","Compile error","Runtime error", "None of the above"],
    ["Widgets","Utilities","Plug-ins", "Add-ons"],
    ["Wheel and axle","Pulley","Lever", "Wedge"],
    ["Dorothy","Sophia","Eva", "Irona"],
  ]
  var addressstuff=["https://www.aaruushdomains.com/magefficie",
"https://www.aaruushdomains.com/architecture",
"https://www.aaruushdomains.com/digital-design",
"https://www.aaruushdomains.com/electrizite",
"https://www.aaruushdomains.com/bluebook",
"https://www.aaruushdomains.com/konstruktion",
"https://www.aaruushdomains.com/fundaz",
"https://www.aaruushdomains.com/x-zone",
"https://www.aaruushdomains.com/vimanaz",
"https://www.aaruushdomains.com/praesentatio",
"https://www.aaruushdomains.com/yuddhame",
"https://www.aaruushdomains.com/online",
"https://www.aaruushdomains.com/machination",
"https://www.aaruushdomains.com/robogyan"]
  var answers = [3,2,4,4,2,3,3,3,1,3,3,3,2,4];
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
    console.log("../res/q images/"+id+'.jpg');
    $(".question-box img").attr("src", "./res/q images/"+id+".jpg");
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
      $("#qualifiedDomains").append("<li><a href='" + addressstuff[i] +"'target='_blank'>" + domains[i] + "</a></li>");
    }
  }
  $('#score').text(correct);
  $('.result').fadeIn(1000);
}



});
