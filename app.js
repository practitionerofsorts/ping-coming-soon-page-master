const emailInput = document.querySelector("#emailInput");
var test = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const notifyButton = document.querySelector("#notifyButton");
const error = document.querySelector(".error");

notifyButton.addEventListener("click", () => {
  if (emailInput.value.match(test)) {
    error.classList.add("active");
    error.textContent = `Subscribed`;
  } else if (emailInput.value == "") {
    error.classList.add("active");
    error.textContent = `Please provide an email address`;
  } else {
    error.classList.add("active");
    error.textContent = `Please provide a valid email address`;
  }

  if (emailInput.value.match(test)) {
    alert("Thank You loser");
    location.reload(true);
  } else {
    console.log("not subscribed");
  }
});
