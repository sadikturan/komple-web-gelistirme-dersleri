function UI() {
    this.quizBox = document.querySelector("#quiz-box");
    this.buttonBox = document.querySelector("#button-box");
    this.scoreBox = document.querySelector("#score-box");
    this.body = document.querySelector("#quiz-box #body");
    this.correctIcon = '<i class="bi bi-check-circle"></i>';
    this.inCorrectIcon = '<i class="bi bi-x-circle"></i>';
    this.btnStart = document.querySelector(".btn-start");
    this.btnNext = document.querySelector(".btn-next");
    this.btnReplay = document.querySelector(".btn-replay");
    this.btnQuit = document.querySelector(".btn-quit");
    this.timeText = document.querySelector(".time-text");
    this.timeSecond = document.querySelector(".time-second");
    this.timeLine = document.querySelector(".time-line");
}

UI.prototype.soruGoster = function(soru) {
    this.body.innerHTML = "";
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("question-title");
    title.textContent = soru.soruMetni;

    const optionList = document.createElement("div");
    optionList.classList.add("option-list");

    for(let [key,value] of Object.entries(soru.cevapSecenekleri)) {
        const option = document.createElement("div");
        option.classList.add("option");
        option.addEventListener("click", optionSelected);

        const span = document.createElement("span");
        span.textContent = key + ") " + value;

        option.appendChild(span);
        optionList.appendChild(option);
    }

    cardBody.appendChild(title);
    cardBody.appendChild(optionList);

    this.body.appendChild(cardBody);
}

UI.prototype.disableAllOption = function() {
    const options = document.querySelectorAll(".option");
    for(let option of options) {
        option.classList.add("disabled");
    }
}

UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru) {
    const etiket = `<span class="badge text-bg-danger">${soruSirasi} / ${toplamSoru}</span>`;
    document.querySelector(".question-index").innerHTML = etiket;
}

UI.prototype.skoruGoster = function(dogruCevap, toplamSoru) {
    const etiket = `Toplam ${toplamSoru} soruda ${dogruCevap} doğru cevap verdiniz.`;
    document.querySelector(".score-text").innerHTML = etiket;
}