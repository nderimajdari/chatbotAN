var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}


let firstMessage = "Hello, I'm chatbot AN! How can I help you today?";
document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

let time = getTime();
$("#chat-timestamp").append(time);
document.getElementById("userInput").scrollIntoView(false);


let questionQueue = [];
let isAnsweringQuestion = false;
let intervalId = null;

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>|</span></p>';

  // append bot's response after the last user message
  $(".userText:last").after(botHtml);

  let i = 0;
  intervalId = setInterval(function () {
    if (i % 2 == 0) {
      $(".botText:last span").text(botResponse.slice(0, i) + "_");
    } else {
      $(".botText:last span").text(botResponse.slice(0, i));
    }
    i++;

    if (i > botResponse.length) {
      clearInterval(intervalId);

      // fade out cursor after 2 seconds
      setTimeout(function() {
        $(".botText:last span:not(:last-child)").fadeOut("slow");
      }, 2000);

      let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
      $(".botText:last").replaceWith(botHtml);
      
      isAnsweringQuestion = false;
      processQuestionQueue();
    }
  }, 150);

  setInterval(function () {
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }, 10);
}

async function queueQuestion(userText) {
  questionQueue.push(userText);
  await processQuestionQueue();
}

async function processQuestionQueue() {
  if (questionQueue.length > 0 && !isAnsweringQuestion) {
    isAnsweringQuestion = true;
    const question = questionQueue.pop();
    clearInterval(intervalId);
    await getHardResponse(question);
    await processQuestionQueue();
    isAnsweringQuestion = false;
  }
}

function getResponse() {
  let userText = $("#textInput").val();

  if (userText.trim() == "") {
    return;
  } else {
    // Run the rest of the code
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  queueQuestion(userText);
}


function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
