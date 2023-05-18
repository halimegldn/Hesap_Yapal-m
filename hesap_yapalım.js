var btn = document.createElement("button");
var btn2 = document.createElement("button");
var correctAnswers = 0; // Doğru cevap sayısı
var totalQuestions = 0;
var result;

btn.setAttribute("id", "button1");
btn2.setAttribute("id", "button2");
btn.setAttribute("name", "button1");
btn2.setAttribute("name", "button2");
btn.innerText = "EVET";
btn2.innerText = "HAYIR";

btn.onclick = function () {
  btn.style.display = "none"; // "Evet" düğmesini gizle
  showQuestion(); // İlk soruyu göster
};

btn2.onclick = function () {
  window.alert("DEVAM");
};

var panelDiv = document.getElementById("panel");
var panelDiv2 = document.getElementById("panel2");
panelDiv.appendChild(btn);
panelDiv2.appendChild(btn2);

const buttonContainer = document.getElementById("button-container");

function showQuestion() {
  if (totalQuestions >= 10) {
    // 10 sorudan fazla ise sonucu göster
    showResult();
    return;
  }

  buttonContainer.innerHTML = ""; // Önceki soru düğmelerini temizle

  const buttonLabels = ["Toplama", "Cikarma", "Carpma", "Bolme"];
  for (let i = 0; i < buttonLabels.length; i++) {
    const button = document.createElement("button");
    button.innerText = buttonLabels[i];
    button.onclick = function () {
      askQuestion(i);
    };
    buttonContainer.appendChild(button);
  }
}

function askQuestion(operatorIndex) {
  totalQuestions++;
  const sayi1 = Math.floor(Math.random() * 10) + 1; // 1-10 arasında rastgele bir sayı oluşturur
  const sayi2 = Math.floor(Math.random() * 10) + 1; // 1-10 arasında rastgele bir sayı oluşturur
  let result, operation;

  switch (operatorIndex) {
    case 0:
      result = sayi1 + sayi2;
      operation = "+";
      break;
    case 1:
      result = sayi1 - sayi2;
      operation = "-";
      break;
    case 2:
      result = sayi1 * sayi2;
      operation = "*";
      break;
    case 3:
      result = Math.round((sayi1 / sayi2) * 10) / 10; // bir ondalıklı basamağa yuvarlama
      operation = "/";
      break;
  }

  const answer = prompt(`Soru: ${sayi1} ${operation} ${sayi2} = ?`);
  if (answer == result) {
    correctAnswers++;
    alert("Tebrikler, doğru cevap verdiniz!");
  } else {
    alert(`Maalesef yanlış cevap verdiniz. Doğru cevap: ${result}`);
  }

  showQuestion(); // Bir sonraki soruyu göster
}

function showResult() {
  if (correctAnswers === 0) {
    alert("Hiç doğru cevap vermediniz.");
  } else if (correctAnswers === 10) {
    alert("Tebrikler, tüm sorulara doğru cevap verdiniz!");
  }   else {
    alert(`Toplam ${totalQuestions} sorudan ${correctAnswers} tanesine doğru cevap verdiniz.`);
  }

  btn.style.display = "none";
  btn2.style.display = "block";
  buttonContainer.style.display = "none";
}

btn2.onclick = function () {
  location.reload(); // Sayfayı yeniden yükle
}

















