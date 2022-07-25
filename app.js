const emailInput = document.querySelector("#emailInput");
const emailValue = document.querySelector("#emailValue");
var test = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const notifyButton = document.querySelector("#notifyButton");
const error = document.querySelector(".error");
const okButton = document.querySelector("#ok");
const thanksSection = document.querySelector(".thanks");

notifyButton.addEventListener("click", () => {
  if (emailInput.value.match(test)) {
    error.classList.add("active");
    error.textContent = ``;
  } else if (emailInput.value == "") {
    error.classList.add("active");
    error.textContent = `Please provide an email address`;
  } else {
    error.classList.add("active");
    emailInput.classList.add("active");
    error.textContent = `Please provide a valid email address`;
  }

  if (emailInput.value.match(test)) {
    thanksSection.classList.add("active");
    emailValue.innerHTML = emailInput.value;
  } else {
    console.log("not subscribed");
  }
  okButton.addEventListener("click", () => {
    location.reload(true);
  });
});
