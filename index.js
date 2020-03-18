function calculate() {
    var tmb;
    var sex = document.forms["calculator"]["sex"].value;
    var weight = document.forms["calculator"]["weight"].value;
    var height = document.forms["calculator"]["height"].value;
    var age = document.forms["calculator"]["age"].value;
    if(sex === "") {
        alert("Por favor selecione uma opção na categoria Sexo.");
    } else if (sex === "m") {
        tmb = 66 + (13.6 * weight) + (5 * height) - (6.8 * age);
    } else if (sex === "f") {
        tmb = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }
    var resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.hidden = false;
    resultDisplay.innerHTML = 'Seu gasto calórico diário é ' + tmb + "cal";
  }

function resetForm() {
    document.forms["calculator"]["sex"].value = "";
    document.forms["calculator"]["weight"].value = "";
    document.forms["calculator"]["height"].value = "";
    document.forms["calculator"]["age"].value = "";
    document.getElementById('resultDisplay').hidden = true;
}