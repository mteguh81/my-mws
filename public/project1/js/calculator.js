var classname_number = document.getElementsByClassName("btn_number");

var assignNumber = function() {
    let num = this.getAttribute("data-number");
    var first_number = document.getElementById("first_number").value;
    var operator = document.getElementById("operator").value;
    var calc_value = document.getElementById("calc_value").innerHTML;

    if (first_number == "") { 
        if (parseInt(calc_value) > 0) {
            document.getElementById("calc_value").innerHTML = calc_value + num;
        } else {
            document.getElementById("calc_value").innerHTML = num;
        }
    } else {
        if (parseInt(first_number) == parseInt(calc_value)) {
            document.getElementById("calc_value").innerHTML = num;
        } else {
            document.getElementById("calc_value").innerHTML = calc_value + num;
        }
    }
};

for (var i = 0; i < classname_number.length; i++) {
    classname_number[i].addEventListener('click', assignNumber, false);
}

var classname_operator = document.getElementsByClassName("btn_operator");

var assignOperator = function() {
    var operator = document.getElementById("operator").value;

	let opr = this.getAttribute("data-operator");
    let desc_opr = opr;

    if (desc_opr == "/") {
        desc_opr = "&#247;";
    }

    var first_number = document.getElementById("calc_value").innerHTML;
    document.getElementById("first_number").value = first_number;

    document.getElementById("operator").value = opr;
    document.getElementById("desc_calc").innerHTML = first_number + " " + desc_opr;
}

for (var j = 0; j < classname_operator.length; j++) {
    classname_operator[j].addEventListener('click', assignOperator, false);
}

var calculateNumber = function() {
    var first_number = document.getElementById("first_number").value;
    var calc_value = document.getElementById("calc_value").innerHTML;
    var operator = document.getElementById("operator").value;

    if (operator == "+") {
        var total = parseInt(first_number) + parseInt(calc_value);
    } else if (operator == "-") {
        var total = parseInt(first_number) - parseInt(calc_value);
    } else if (operator == "x") {
        var total = parseInt(first_number) * parseInt(calc_value);
    } else if (operator == "/") {
        var total = parseInt(first_number) / parseInt(calc_value);
    }

    document.getElementById("calc_value").innerHTML = total;
    document.getElementById("desc_calc").innerHTML = "";
    document.getElementById("first_number").value = "";
    document.getElementById("operator").value = "";
}

document.getElementById("btn_equal").addEventListener('click', calculateNumber);

var negateNumber = function() {
    var calc_value = document.getElementById("calc_value").innerHTML;
    calc_value = parseInt(calc_value) * -1;

    document.getElementById("calc_value").innerHTML = calc_value;
}

document.getElementById("btn_negate").addEventListener('click', negateNumber);

var deleteNumber = function() {
    var calc_value = document.getElementById("calc_value").innerHTML;

    if (calc_value.length > 1) {
        calc_value = calc_value.substring(0, calc_value.length - 1);
    } else {
        calc_value = 0;
    }

    document.getElementById("calc_value").innerHTML = calc_value;
}

document.getElementById("btn_del").addEventListener('click', deleteNumber);

var clearNumber = function() {
    document.getElementById("calc_value").innerHTML = "0";
    document.getElementById("first_number").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("desc_calc").innerHTML = "";
}

document.getElementById("btn_clear").addEventListener('click', clearNumber);

var clearEntry = function() {
    document.getElementById("calc_value").innerHTML = "0";
}

document.getElementById("btn_clear_entry").addEventListener('click', clearEntry);