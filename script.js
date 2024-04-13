//Man javascript code

let questions = document.querySelectorAll(".faq");
let answers = document.querySelectorAll(".ans");
let plusIcon = document.querySelector(".plus");
let minusIcon = document.querySelector(".minus");
let counter = 0;
let faqImgs = document.querySelectorAll(".faq img");

const displayAnswers = (x) => {
  let faqParent = x.parentElement.parentElement;
  faqParent.nextElementSibling.classList.toggle("showAnswer");
  if (faqParent.nextElementSibling.classList.contains("showAnswer")) {
    faqParent.getElementsByClassName("plus")[0].style.display = "none";
    faqParent.getElementsByClassName("minus")[0].style.display = "block";
  } else {
    faqParent.getElementsByClassName("plus")[0].style.display = "block";
    faqParent.getElementsByClassName("minus")[0].style.display = "none";
  }
};





// Events
Array.from(faqImgs).forEach((faqImg) => {
  faqImg.addEventListener("click", () => {
    displayAnswers(faqImg);
  });
});
