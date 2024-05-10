const form = document.querySelector("[data-form]");          //Getting elements from HTML
const result = document.querySelector("[data-result]");        
const errorScreen = document.getElementById("error_div");      


form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);   //Obtain inputs and destructure them into variables

  if (dividend == '' || divider == '') {     //checks if inputs are empty
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    
  }
  else if (divider == 0) {                   //checks if divider is equal to 0
    result.innerText = "Division not performed. Invalid divider number provided. Try again";
    console.error(new Error("Division by 0 is undefined. Please enter a non-zero divider"))    
  }

  else if (isNaN(dividend) || isNaN(divider)) {       //checks if inputs are numeric
    console.error(new Error("Non-numeric inputs. Please enter numeric inputs"))
    errorScreen.style.display = "flex";
    result.innerText = '';
  }
  else {
    result.innerText = Math.floor(dividend / divider);    //Works out division result
  } 
});