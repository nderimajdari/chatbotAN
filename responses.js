let userName = "";
let userEmri = "";
const preTrainedAnswers = {
    "Pershendetje":["Pershendetje, si mund te ju ndihmoj?", "Pershendetje, cfare ju duhet?", "Mirëmëngjesi, si mund t'ju ndihmoj?"],
    
    "hello ":[" hey, what’s up ", " hi, what’s up ", " hello! There, How can I help you today?"],
    "hey ":["hi ", " Hello! How can I help you today?", " hey "],
    "hi ":[" hello ", " hey ", " hi "],
    "how are you ":[" I'm just a computer program, so I don't have feelings or physical sensations. But thank you for asking. How can I help you today?", " I am an AI and do not have the ability to feel emotions, but thank you for asking. How can I assist you?", " I’m good, thanks. How can I help you today?"],

    "default":"I'm sorry, My training data does not include the information you're asking for. Could you please try asking a different question?"
};

function getBotResponse(input) {
  if (input.startsWith("my name is ")) {
    userName = input.replace("my name is ", "");
    return "Nice to meet you  " + userName + "! how can I help you today?";
  }

  if (input.startsWith("emri im eshte ")) {
    userEmri = input.replace("emri im eshte ", "");
    return "Gezohem  " + userEmri + "! si mund te ju ndihmoj?";
  }

  if (input.startsWith("I'm ")) {
    userName = input.replace("I'm ", "");
    return "Nice to meet you  " + userName + "! how can I help you today?";
  }

  if (input.startsWith("une jam ")) {
    userEmri = input.replace("une jam ", "");
    return "Gezohem  " + userEmri + "! si mund te ju ndihmoj?";
  }

  let response = preTrainedAnswers[input];
  if(!response){
    response = preTrainedAnswers["default"];
  }
  else{
    response = response[Math.floor(Math.random()*response.length)];
  }

  if (userName) {
    response = response.replace("Hello ", "Hello " + userName + ", ");
  }

  if (userEmri) {
    response = response.replace("Hello ", "Hello " + userEmri + ", ");
  }
  return response;
}
