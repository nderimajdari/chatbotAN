let userName = "";
let userEmri = "";
const preTrainedAnswers = {
    "Pershendetje":["Pershendetje, si mund te ju ndihmoj?", "Pershendetje, cfare ju duhet?", "Mirëmëngjesi, si mund t'ju ndihmoj?"],
    
    "hello ":[" hey, what’s up ", " hi, what’s up ", " hello! There, How can I help you today?"],
    "hey ":["hi ", " Hello! How can I help you today?", " hey "],
    "hi ":[" hello ", " hey ", " hi "],
    
"What is your name?": ["My name is AN.", "You can call me AN.", "I'm AN."],
"How are you doing?": ["I'm doing well, thank you.", "I'm functioning normally, thank you.", "I'm fine, thanks."],
"What time is it?": ["I'm sorry, I don't have access to real-time information.", "I don't have a clock, sorry.", "I'm not able to tell time."],
"What is the meaning of life?": ["That's a deep question. What do you think?", "The meaning of life is subjective and varies from person to person.", "I'm not sure. Perhaps it's to find your own purpose."],
"How do I reset my password?": ["To reset your password, go to the login page and click 'forgot password.'", "You can reset your password by clicking 'forgot password' on the login screen.", "To reset your password, follow the instructions on the 'forgot password' page."],
"What is the weather like today?": ["I'm sorry, I don't have access to real-time weather information.", "I'm not sure. Perhaps you can check your local news or weather website.", "I'm not able to tell you the weather."],
"What is the capital of France?": ["The capital of France is Paris.", "Paris is the capital of France.", "It's Paris."],
"How do I place an order?": ["To place an order, simply select the item you wish to purchase and follow the checkout process.", "You can place an order by adding items to your cart and proceeding to checkout.", "To order, add items to your cart and complete the checkout process."],
"What is the meaning of the word 'serendipity'?": ["Serendipity means a happy or beneficial coincidence.", "It refers to finding something valuable or pleasant when you're not looking for it.", "Serendipity is when something good happens unexpectedly."],
"What is your favorite color?": ["I don't have the ability to have a favorite color.", "As an AI, I don't have the capability to experience preferences.", "I don't have the capacity for personal preferences like humans do."],
"How do I track my order?": ["To track your order, go to the order history page and click on the order you want to track.", "You can track your order by going to the order history page and selecting the order you want to track.", "To track your order, follow the instructions on the order history page."],
"What is the largest planet in our solar system?": ["Jupiter is the largest planet in our solar system.", "It's Jupiter.", "The largest planet in our solar system is Jupiter."],
"How do I contact customer support?": ["To contact customer support, go to the contact page and fill out the form or use the live chat feature.", "You can contact customer support by filling out the form on the contact page or using the live chat feature.", "To contact customer support, follow the instructions on the contact page."],
"What is the distance between Earth and Mars?": ["The distance between Earth and Mars varies depending on their positions in their respective orbits.", "It varies, but on average it's about 140 million miles (225 million kilometers).", "On average, it's about 140 million miles (225 million kilometers)."],
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
