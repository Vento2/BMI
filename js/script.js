function calculateBMI() {

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
  
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Podaj swój wzrost!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Podaj swoją wage!";

    else {
  
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);
  
        if (bmi < 16) result.innerHTML = `Wygłodzenie : <span>${bmi}</span>`;
  
        else if (bmi >= 16 && bmi < 16.99) 
            result.innerHTML = `Wychudzenie : <span>${bmi}</span>`;

        else if (bmi >= 17 && bmi < 18.49) 
            result.innerHTML = `Niedowaga : <span>${bmi}</span>`;

        else if (bmi >= 18.5 && bmi < 24.99) 
            result.innerHTML = `Waga prawidłowa : <span>${bmi}</span>`;

        else if (bmi >= 25 && bmi < 29.99) 
            result.innerHTML = `Nadwaga : <span>${bmi}</span>`;

        else if (bmi >= 30 && bmi < 34.99) 
            result.innerHTML = `I stopnień otyłości : <span>${bmi}</span>`;

        else if (bmi >= 35 && bmi < 39.99) 
            result.innerHTML = `II stopnień otyłości : <span>${bmi}</span>`;

        else result.innerHTML = `Otyłość skrajna : <span>${bmi}</span>`;
    }
}

const button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);