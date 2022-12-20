var questions = [
    {
      Question: "MS word is software of ____",
      CorrectAns: "Microsoft",
      Options: ["Apple", "Android", "Google", "Microsoft"],
    },
    {
      Question: "Which is the word processing software?",
      CorrectAns: "MS word 2007",
      Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    },
    {
      Question: "MS Word is ____ software.    ",
      CorrectAns: "Word processing",
      Options: [
        "Web browser",
        "Word processing",
        "Operating system",
        "Antivirus",
      ],
    },
    {
      Question: "The valid format of MS Word is __",
      CorrectAns: ".doc",
      Options: [".exe", ".doc", ".png", " .jpeg"],
    },
    {
      Question: "What program is used in MS-Word to check the spelling?",
      CorrectAns: "Spelling & Grammar",
      Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    },
    {
      Question: "A word gets selected by clicking it",
      CorrectAns: "Twice",
      Options: [" Once", "Twice", "Three times", "Four times"],
    },
    {
      Question: "The center the selected text, the shortcut key is",
      CorrectAns: "Ctrl + E",
      Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    },
    {
      Question: "Which option is not available in Microsoft office button?",
      CorrectAns: "Bold",
      Options: ["Bold", "New", "Save", "Open"],
    },
    {
      Question:
        "_____ is the change the way text warps around the selected object.",
      CorrectAns: "Text wrapping",
      Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
    },
    {
      Question: "A major step before taking print of the document is",
      CorrectAns: "Both b and c",
      Options: [
        "To save the document",
        "To set paper setting",
        "To see print preview of the document",
        "Both b and c",
      ],
    },
  ];

var questionNum = document.getElementById("questionNum");
var ShowQuestion = document.getElementById("ShowQuestion");
var button = document.getElementById("button");
var showMarks = document.getElementById("showMarks");
var showPer = document.getElementById("showPer");
var indexNum = 0;
var marks = 1;
var per = 1;

function renderQuestion(){
    questionNum.innerHTML = `Question : ${indexNum + 1}/${questions.length}`;
    ShowQuestion.innerHTML = questions[indexNum].Question;
    button.innerHTML = "";
    for(var i =0 ;i<questions[indexNum].Options.length ; i++){
        button.innerHTML += `<div class="col-sm-6">
        <button type="button" class="btn btn-secondary btn-lg w-100 my-3 " 
        onclick = "nextquestion('${questions[indexNum].Options[i]}','${questions[indexNum].CorrectAns}')"> ${questions[indexNum].Options[i]}
        </button></div>`
        console.log(questions.CorrectAns);
    }
}
function nextquestion(a, b){

    if(indexNum+1 < questions.length ){
        indexNum++;
    renderQuestion()
    }
    else{
        quizApp.style.display = "none"
    }

    if(b == a){
      showMarks.innerHTML = `Marks = ${marks++ }` 
      showPer.innerHTML = `Percentage = ${per++ /10 * 100 }% `
    }
}



renderQuestion()