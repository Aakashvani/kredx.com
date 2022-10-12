const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next_btn");
const previousBtn = document.querySelectorAll("form .previous_btn");
const form = document.querySelector("form");

// BUTTON:- next
nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

// BUTTON:- previous
previousBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

// to submit the input values and console the filled values ---> 
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputsData = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputsData.push({ name, value });
  });
  console.log(inputsData);
  form.reset();

  //   to make form in the initial stage means (starting form) --->
  let index = 0;
  const active = document.querySelector("form .step.active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  steps[0].classList.add("active");
});

// by clicking next/prev button form ui will change (using active in css and manupulating by JS)
const changeStep = (btn) => {
  let index = 0;
  const active = document.querySelector("form .step.active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
  //   console.log(index);
};
// console.log(steps);
