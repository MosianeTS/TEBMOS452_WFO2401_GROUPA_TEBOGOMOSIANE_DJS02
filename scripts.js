const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const overlay = document.getElementById("overlay");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend == '' || divider == '') {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    
  }
  else if (divider == 0) {
    result.innerText = "Division not performed. Invalid divider number provided. Try again";
    console.error(new Error("Division by 0 is undefined"))    
  }

  else if (isNaN(dividend) || isNaN(divider)) {
    console.error(new Error("Non-numeric inputs"))
    overlay.style.display = "flex";
    result.innerText = '';
  }
  else {
    result.innerText = Math.floor(dividend / divider);
  }
 
});