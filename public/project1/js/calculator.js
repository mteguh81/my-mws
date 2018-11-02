var wrapper_title = document.createElement("div");
wrapper_title.className = "title";

var text_title = document.createElement("h1");
text_title.className = "center";
text_title.innerHTML = "Kalkulator";

wrapper_title.appendChild(text_title);

var wrapper_result = document.createElement("div");
wrapper_result.className = "result";

var span_desc_calc = document.createElement("span");
span_desc_calc.className = "right";
span_desc_calc.id = "desc_calc";

var span_calc_value = document.createElement("span");
span_calc_value.className = "right";
span_calc_value.id = "calc_value";
span_calc_value.innerHTML = "0";

var input_first_number = document.createElement("input");
input_first_number.type = "hidden";
input_first_number.name = "first_number";
input_first_number.id = "first_number";
input_first_number.value = "0";

var input_operator = document.createElement("input");
input_operator.type = "hidden";
input_operator.name = "operator";
input_operator.id = "operator";

wrapper_result.appendChild(span_desc_calc);
wrapper_result.appendChild(span_calc_value);
wrapper_result.appendChild(input_first_number);
wrapper_result.appendChild(input_operator);

var wrapper_calc = document.createElement("div");
wrapper_calc.className = "calc";

var btn_clear_entry = document.createElement("button");
btn_clear_entry.id = "btn_clear_entry";
btn_clear_entry.innerHTML = "CE";

var btn_clear = document.createElement("button");
btn_clear.id = "btn_clear";
btn_clear.innerHTML = "C";

var btn_del = document.createElement("button");
btn_del.id = "btn_del";
btn_del.innerHTML = "&larr;";

var btn_operator_division = document.createElement("button");
btn_operator_division.className = "btn_operator";
btn_operator_division.dataset.operator = "/";
btn_operator_division.innerHTML = "&#247;";

var btn_number_seven = document.createElement("button");
btn_number_seven.className = "btn_number";
btn_number_seven.dataset.number = "7";
btn_number_seven.innerHTML = "7";

var btn_number_eight = document.createElement("button");
btn_number_eight.className = "btn_number";
btn_number_eight.dataset.number = "8";
btn_number_eight.innerHTML = "8";

var btn_number_nine = document.createElement("button");
btn_number_nine.className = "btn_number";
btn_number_nine.dataset.number = "9";
btn_number_nine.innerHTML = "9";

var btn_operator_multiplication = document.createElement("button");
btn_operator_multiplication.className = "btn_operator";
btn_operator_multiplication.dataset.operator = "x";
btn_operator_multiplication.innerHTML = "x";

var btn_number_four = document.createElement("button");
btn_number_four.className = "btn_number";
btn_number_four.dataset.number = "4";
btn_number_four.innerHTML = "4";

var btn_number_five = document.createElement("button");
btn_number_five.className = "btn_number";
btn_number_five.dataset.number = "5";
btn_number_five.innerHTML = "5";

var btn_number_six = document.createElement("button");
btn_number_six.className = "btn_number";
btn_number_six.dataset.number = "6";
btn_number_six.innerHTML = "6";

var btn_operator_substraction = document.createElement("button");
btn_operator_substraction.className = "btn_operator";
btn_operator_substraction.dataset.operator = "-";
btn_operator_substraction.innerHTML = "-";

var btn_number_one = document.createElement("button");
btn_number_one.className = "btn_number";
btn_number_one.dataset.number = "1";
btn_number_one.innerHTML = "1";

var btn_number_two = document.createElement("button");
btn_number_two.className = "btn_number";
btn_number_two.dataset.number = "2";
btn_number_two.innerHTML = "2";

var btn_number_three = document.createElement("button");
btn_number_three.className = "btn_number";
btn_number_three.dataset.number = "3";
btn_number_three.innerHTML = "3";

var btn_operator_addition = document.createElement("button");
btn_operator_addition.className = "btn_operator";
btn_operator_addition.dataset.operator = "+";
btn_operator_addition.innerHTML = "+";

var btn_negate = document.createElement("button");
btn_negate.id = "btn_negate";
btn_negate.innerHTML = "&plusmn;";

var btn_number_zero = document.createElement("button");
btn_number_zero.className = "btn_number";
btn_number_zero.dataset.number = "0";
btn_number_zero.innerHTML = "0";

var btn_comma = document.createElement("button");
btn_comma.id = "btn_comma";
btn_comma.innerHTML = ",";

var btn_equal = document.createElement("button");
btn_equal.id = "btn_equal";
btn_equal.innerHTML = "=";

wrapper_calc.appendChild(btn_clear_entry);
wrapper_calc.appendChild(btn_clear);
wrapper_calc.appendChild(btn_del);
wrapper_calc.appendChild(btn_operator_division);
wrapper_calc.appendChild(btn_number_seven);
wrapper_calc.appendChild(btn_number_eight);
wrapper_calc.appendChild(btn_number_nine);
wrapper_calc.appendChild(btn_operator_multiplication);
wrapper_calc.appendChild(btn_number_four);
wrapper_calc.appendChild(btn_number_five);
wrapper_calc.appendChild(btn_number_six);
wrapper_calc.appendChild(btn_operator_substraction);
wrapper_calc.appendChild(btn_number_one);
wrapper_calc.appendChild(btn_number_two);
wrapper_calc.appendChild(btn_number_three);
wrapper_calc.appendChild(btn_operator_addition);
wrapper_calc.appendChild(btn_number_one);
wrapper_calc.appendChild(btn_number_two);
wrapper_calc.appendChild(btn_number_three);
wrapper_calc.appendChild(btn_operator_addition);
wrapper_calc.appendChild(btn_negate);
wrapper_calc.appendChild(btn_number_zero);
wrapper_calc.appendChild(btn_comma);
wrapper_calc.appendChild(btn_equal);
document.body.insertBefore(wrapper_calc, document.body.firstChild);
document.body.insertBefore(wrapper_result, wrapper_calc);
document.body.insertBefore(wrapper_title, wrapper_result);

var classname_number = document.getElementsByClassName("btn_number");

var assignNumber = function() {
    let num = this.getAttribute("data-number");
    var first_number = document.getElementById("first_number").value;
    var operator = document.getElementById("operator").value;
    var calc_value = document.getElementById("calc_value").innerHTML;

    if (first_number == "") { 
        if (parseInt(calc_value) > 0) {
            document.getElementById("calc_value").innerHTML = calc_value + num;
        } else if (calc_value.indexOf(',') >= 1) {
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
    var desc_calc = document.getElementById("desc_calc").innerHTML;
    var first_number = document.getElementById("first_number").value;

    if (operator) {
        calculateNumber();
    }

	let opr = this.getAttribute("data-operator");
    let desc_opr = opr;

    if (desc_opr == "/") {
        desc_opr = "&#247;";
    }

    var calc_value = document.getElementById("calc_value").innerHTML;
    document.getElementById("first_number").value = calc_value;

    document.getElementById("operator").value = opr;

    if (desc_calc == "") {
        document.getElementById("desc_calc").innerHTML = calc_value + " " + desc_opr;
    } else {
        document.getElementById("desc_calc").innerHTML = desc_calc + " " + first_number + " " + desc_opr;
    }
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

var assignComma = function() {
    var calc_value = document.getElementById("calc_value").innerHTML;

    if (calc_value.indexOf(',') < 1) {
        calc_value += ",";
    }

    document.getElementById("calc_value").innerHTML = calc_value;
}

document.getElementById("btn_comma").addEventListener('click', assignComma);

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