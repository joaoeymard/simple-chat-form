const personalInfoQuestions = [
  {
    question: "Como gostaria de ser chamado?",
    key: "name",
    validate: function (value) {
      if (value.length < 3) {
        return "Informe um nome com pelo menos 3 caractere";
      }
      return "";
    },
  },
  {
    question: "Qual é a sua idade?",
    key: "age",
    validate: function (value) {
      if (isNaN(value)) {
        return "Informe um número";
      }
      if (parseInt(value) <= 0) {
        return "Informe um número maior que zero";
      }
      return "";
    },
  },
  {
    question: "De onde você é?",
    key: "location",
    validate: function (value) {
      if (value.length < 3) {
        return "Informe um endereço com pelo menos 3 caractere";
      }
      return "";
    },
  },
];

const userData = {};

function getQuestion(index) {
  return personalInfoQuestions[index].question;
}

function validateAnswer(index, answer) {
  return personalInfoQuestions[index].validate(answer);
}

function saveAnswer(index, answer) {
  const key = personalInfoQuestions[index].key;
  userData[key] = answer;
}

function isEndQuestion(index) {
  return index >= personalInfoQuestions.length;
}
