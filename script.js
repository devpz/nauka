const nowyElement = document.createElement("h1");
const zmiana = document.getElementById("zmiana");
const zmiana2 = document.getElementById("zmiana2");
const zmiana3 = document.getElementById("zmiana3");
const zmiana4 = document.getElementById("zmiana4");
//---------------------------------------------------------------
//tłumaczenie

// document.addEventListener("DOMContentLoaded", function () {
//   const textToTranslateElement = document.getElementById("textToTranslate");

//   console.log(textToTranslateElement);
//   const translateButton = document.getElementById("translateButton");
//   const translatedTextElement = document.getElementById("translatedText");

//   translateButton.addEventListener("click", function () {
//     const textToTranslate = textToTranslateElement.value;
//     translateText(textToTranslate);
//   });

//   function translateText(text) {
//     const apiKey = "apiKey"; // Wprowadź swój klucz API Google Translate
//     const targetLang = "fr"; // Język docelowy (francuski)

//     const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

//     const data = {
//       q: text,
//       target: targetLang,
//     };

//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const translatedText = data.data.translations[0].translatedText;
//         translatedTextElement.textContent = translatedText;
//       })
//       .catch((error) => {
//         console.error("Błąd tłumaczenia:", error);
//         translatedTextElement.textContent = "Błąd tłumaczenia";
//       });
//   }
// });
//---------------------------------------------------------------

const odczytZmiany = document.getElementById("odczytZmiany");

const przycisk = document.getElementById("przycisk");

const waznyPrzycisk = document.getElementById("waznyPrzycisk");

var czyWidoczny = false;

let tekstParagrafu = document.getElementById("tekst");

let najwazniejszyTekst = waznyTekst.textContent;

//---------------------------------------------------------------
//Tłumaczenie #2

const sourceLang = "en"; // Język źródłowy (angielski)
const targetLang = "fr"; // Język docelowy (francuski)

// Twój klucz API od Google (trzeba go uzyskać w konsoli Google Cloud)
const apiKey = "AIzaSyANImIVCdPvAhG_lzRKzK48RI93ZXWVSPw";

// URL usługi tłumaczeniowej Google Translate API
const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

// Dane do wysłania w zapytaniu POST
const data = {
  q: najwazniejszyTekst,
  target: targetLang,
};

// Wyślij zapytanie do API
fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const translatedText = data.data.translations[0].translatedText;
    console.log("Przetłumaczony tekst:", translatedText);
    tekstParagrafu.innerText = `Nowy tekst: ${translatedText}`;
  })
  .catch((error) => {
    console.error("Błąd tłumaczenia:", error);
  });

//---------------------------------------------------------------

waznyPrzycisk.addEventListener("click", function () {
  if (czyWidoczny) {
    tekstParagrafu.style.display = "none"; // Ukryj tekst
  } else {
    tekstParagrafu.style.display = "block"; // Wyświetl tekst
  }
  czyWidoczny = !czyWidoczny; // Zmień stan
});

const h1 = document.getElementById("h1doZmiany");
h1.innerText = "Nowy H1";

zmiana.addEventListener("click", function () {
  h1.innerText = "Najnowszy h1";
});

zmiana2.addEventListener("click", function () {
  h1.innerHTML = `grubyh1`;
});

zmiana3.addEventListener("click", function () {
  h1.textContent = `Trzecia zmiana`;
});

zmiana4.addEventListener("click", function () {
  h1.textContent = `Czwarta zmiana`;
});

przycisk.addEventListener("click", function () {
  switch (odczytZmiany.value) {
    case "zmiana":
      h1.innerHTML = "gefdhdhwgw";
      break;
    case "zmiana2":
      h1.innerHTML = "Najnowszy h1";
      break;
    case "zmiana3":
      h1.innerHTML = `grubyh1`;
      break;
    case "Zmiana4":
      h1.innerHTML = "acasfsaf";
      break;
  }
});
tekstParagrafu.innerText = `Nowy tekst: ${translatedText}`;
console.log(translatedText);
