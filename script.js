// const form = document.querySelector("form");
// const card_1 = document.querySelector(".card");
// const card_2 = document.querySelector(".card-2");
// form.addEventListener("submit", (e) => {
//    e.preventDefault();
//    card_1.classList.add("hide");
//    card_2.classList.remove("hide")
// });

// function validateEmail(email) {
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//    return emailRegex.test(email)
// }

// const form = document.querySelector("form");
// const card_1 = document.querySelector(".card");
// const card_2 = document.querySelector(".card-2");
// const errorMessage = document.querySelector(".error-message");

// form.addEventListener("submit", (e) => {
//    e.preventDefault();
//    const emailInput = document.querySelector("#email");
//    const email = emailInput.value.trim();
   
//    if (!validateEmail(email)) {
//       errorMessage.textContent = "Valid email required";
//       errorMessage.style.display = "block";
//    } else {
//       card_1.classList.add("hide");
//       card_2.classList.remove("hide");
//    }
// });

// function validateEmail(email) {
//    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    return emailRegex.test(email);
// }

const form = document.querySelector("form");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
const errorMessage = document.querySelector(".error-message");
const dismissButton = document.querySelector(".dismiss");

form.addEventListener("submit", (e) => {
   e.preventDefault();
   const emailInput = document.querySelector("#email");
   const email = emailInput.value.trim();
   
   if (!validateEmail(email)) {
      errorMessage.textContent = "Valid email required";
      errorMessage.style.display = "block";
   } else {
      card_1.classList.add("hide");
      card_2.classList.remove("hide");
   }
});

dismissButton.addEventListener("click", () => {
   window.location.href = "index.html";
   e.preventDefault();
});

function validateEmail(email) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
}

