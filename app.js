const startquiz = document.getElementById("startquiz");
const main = document.querySelector("main");
const section = document.createElement("section");
const startcard = document.getElementById("startcard");
const span = document.getElementById("timer");

let quesNo = 0;
let score = 0;
let count = 140;
let reward = 6.25;

function start_Test() {
  startcard.remove();
  section.setAttribute("id", "question-section");
  main.appendChild(section);
}

function get_Question() {
  if (quesNo < questions.length) {
    const h2 = document.createElement("h2");
    h2.innerHTML = questions[quesNo].questionText;
    section.appendChild(h2);

    const options = questions[quesNo].options;
    let text = "";
    options.forEach((opt) => {
      const option = document.createElement("button");
      option.setAttribute("class", "options");
      option.innerHTML = opt;
      option.onclick = (e) => {
        text = e.target.innerHTML;
        checkanswer();
      };
      section.appendChild(option);
    });
    quesNo++;

    function checkanswer() {
      if (quesNo != questions.length) {
        const answer = questions[quesNo - 1].answer;
        const currentQuestionNumber = quesNo;
        const totalQuestions = questions.length;
        const questionCount = document.createElement("b");
        questionCount.innerHTML = `Question ${currentQuestionNumber} of ${totalQuestions}`;

        section.innerHTML = "";
        const div = document.createElement("div");
        const b = document.createElement("b");
        const hr = document.createElement("hr");
        div.classList.add("flex");
        hr.classList.add("hr");
        if (text === answer) {
          score += reward;
          b.innerHTML = " Correct ";
        } else {
          b.innerHTML = " Incorrect ";
          count -= 10;
        }
        get_Question();
        section.appendChild(hr);
        div.appendChild(b);
        div.appendChild(questionCount);
        section.appendChild(div);
      } else {
        const answer = questions[quesNo - 1].answer;

        if (text === answer) {
          score += 5;
        }

        section.innerHTML = "";
        get_score();
      }
    }
  }
}

function get_score() {
  const h2 = document.createElement("h2");
  h2.innerHTML = "ALL DONE !!!";

  section.appendChild(h2);
  section.setAttribute("id", "scoreboard");
  const span = document.createElement("span");

  const div = document.createElement("div");
  const p = document.createElement("p");

  p.innerHTML = `your final score is ${score}/${reward * questions.length} `;

  span.innerHTML = "Enter initials: ";

  const input = document.createElement("input");
  const form = document.createElement("form");
  form.setAttribute("onsubmit", "return false");
  input.setAttribute("required", "");

  input.placeholder = "Your Name";
  const button = document.createElement("input");
  button.setAttribute("type", "submit");
  button.id = "submit";
  button.classList.add("options");
  button.innerHTML = "Submit";
  section.appendChild(p);
  div.appendChild(span);
  form.appendChild(input);
  form.appendChild(button);
  div.appendChild(form);
  section.appendChild(div);

  form.onsubmit = getname;
}

let playerscore = new Array();

function getname() {
  const input = document.querySelector("input");
  const name = input.value;
  const yourScore = score;

  playerscore = JSON.parse(localStorage.getItem("players")) ? JSON.parse(localStorage.getItem("players")) : [];

  let newplayer = {
    name: name,
    score: yourScore,
  };

  if (
    playerscore.some((o) => {
      return o.name == newplayer.name;
    })
  ) {
    playerscore.forEach((element, index) => {
      if (element.score < newplayer.score && element.name == newplayer.name) {
        playerscore[index].score = newplayer.score;
      }
    });
  } else {
    playerscore.push(newplayer);
  }

  localStorage.setItem("players", JSON.stringify(playerscore));

  highscore();
}

function highscore() {
  section.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.innerHTML = "HIGH SCORES";
  h2.style.textAlign = "center";
  section.setAttribute("id", "highscore");

  const topPlayer = JSON.parse(localStorage.getItem("players")) ? JSON.parse(localStorage.getItem("players")) : [];

  const div = document.createElement("div");
  const pdiv = document.createElement("div");

  pdiv.classList.add("pdiv");
  div.classList.add("flex");

  const go_back = document.createElement("button");
  const clear_highscore = document.createElement("button");

  go_back.classList.add("options");
  clear_highscore.classList.add("options");

  go_back.onclick = returnhome;
  clear_highscore.onclick = deleteScore;

  go_back.innerHTML = "Go Back";
  clear_highscore.innerHTML = "Clear High Score";
  section.appendChild(h2);

  if (topPlayer.length === 0) {
    const p = document.createElement("p");
    p.innerHTML = ` NO HIGH SCORE YET `;
    pdiv.appendChild(p);
  } else {
    topPlayer.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    topPlayer.sort((a, b) => {
      return b.score - a.score;
    });
    topPlayer.forEach((player, index) => {
      const p = document.createElement("p");
      p.innerHTML = `${index + 1}.  ${player.name} - ${player.score}`;

      pdiv.appendChild(p);
    });
  }
  div.appendChild(go_back);
  div.appendChild(clear_highscore);
  section.appendChild(pdiv);
  section.appendChild(div);
  main.appendChild(section);
}

function returnhome() {
  location.reload();
}

function deleteScore() {
  localStorage.removeItem("players");
  highscore();
}

const leaderboard = document.getElementById("leaderboard");
leaderboard.onclick = () => {
  startcard.remove();
  highscore();
};

startquiz.addEventListener("click", start_Test);
startquiz.addEventListener("click", get_Question);
startquiz.addEventListener("click", countdown);

function countdown() {
  let counter = setInterval(timer, 1000);

  function timer() {
    count--;
    if (section.id === "scoreboard") {
      clearInterval(counter);
      span.innerHTML = 0;

      section.innerHTML = "";
      get_score();
    } else if (count >= 0) {
      span.innerHTML = count;
    } else if (count < 0) {
      clearInterval(counter);
      span.innerHTML = 0;

      section.innerHTML = "";
      get_score();
    }
  }
}
