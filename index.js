var tmb;
var sex;
var weight;
var height;
var age;

function calculate() {
    this.sex = document.forms["calculator"]["sex"].value;
    this.weight = document.forms["calculator"]["weight"].value;
    this.height = document.forms["calculator"]["height"].value;
    this.age = document.forms["calculator"]["age"].value;

    if(hasEmptyFields()) {
        alert("Por favor, preencha todos os campos.");
        return;
    } else if (this.sex === "m") {
        this.tmb = 66 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age);
    } else if (this.sex === "f") {
        this.tmb = 655 + (9.6 * this.weight) + (1.7 * this.height) - (4.7 * this.age);
    }
    
    var resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.hidden = false;
    resultDisplay.innerHTML = 'Seu gasto calórico diário é ' + this.tmb + "cal";
    
    $('#result-modal').modal('show');
};

function resetForm() {
    document.forms["calculator"]["sex"].value = "";
    document.forms["calculator"]["weight"].value = "";
    document.forms["calculator"]["height"].value = "";
    document.forms["calculator"]["age"].value = "";
    document.getElementById('resultDisplay').hidden = true;
};

function scrollToResult() {
    window.scrollTo(0, 300);
};

function hasEmptyFields() {
    var result = false;
    if (this.sex === ""){
        result = true;
    } else if (this.weight === ""){
        result = true;
    } else if (this.height === ""){
        result = true;
    } else if (this.age === ""){
        result = true;
    }
    return result;
};