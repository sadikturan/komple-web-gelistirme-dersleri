const soruListesi = [
    new Soru("1-Hangisi Javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm"}, "d"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];

const quiz = new Quiz(soruListesi);
const ui = new UI();

ui.btnStart.addEventListener("click", function() {
    startTimer(10);
    startTimerLine();
    ui.quizBox.classList.add("active");
    ui.buttonBox.classList.remove("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btnNext.classList.remove("show");
});

ui.btnNext.addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex) {
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btnNext.classList.remove("show");
    } else {
        ui.scoreBox.classList.add("active");
        ui.quizBox.classList.remove("active");
        ui.skoruGoster(quiz.dogruCevapSayisi, quiz.sorular.length);
    }
});

function optionSelected(e) {
    clearInterval(counter);
    clearInterval(counterLine);
    let selectedElement = e.target;

    if(selectedElement.nodeName == "SPAN") {
        selectedElement = selectedElement.parentElement;
    }
    const cevap = e.target.textContent[0];
    const soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1;
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        selectedElement.classList.add("incorrect");
        selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }

    quiz.soruIndex += 1;
    ui.disableAllOption();
    ui.btnNext.classList.add("show");
}

ui.btnQuit.addEventListener("click", function() {
    window.location.reload();
});

ui.btnReplay.addEventListener("click", function() {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    // start button
    ui.btnStart.click();
    ui.scoreBox.classList.remove("active");
});

let counter;
function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        ui.timeSecond.textContent = time;
        time--;

        if(time < 0) {
            clearInterval(counter);
            ui.timeText.textContent = "Süre Bitti";

            ui.disableAllOption();
            quiz.soruIndex += 1;

            ui.btnNext.classList.add("show");
        }
    }
}

let counterLine;
function startTimerLine() {
    let line_width = 0;

    counterLine = setInterval(timer, 20);

    function timer() {
        line_width += 1;

        ui.timeLine.style.width = line_width + "px";

        if(line_width > 549) {
            clearInterval(counterLine);
        }
    }
}