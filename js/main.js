/*------------Constants-------------*/
var color_minus = '#FF0000';
var color_positive = '#040404';
var color_NaN = '#18ED37';
/*------------App's state (variables)-------------*/
/*------------Cached elements reference-------------*/

/*------------Event listeners-------------*/

/*------------Functions-------------*/

function sum(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('result').value);

    if(isNaN(n1)){
        document.getElementById('result').value = 'NaN';
        document.getElementById('result').style.color = color_NaN;
    }

    var oper = document.getElementById('operators').value;

    if(oper === '+'){
        document.getElementById('result').value = n1 + n2;
        document.getElementById('result').style.color = color_positive;
    }
}

function decrease(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('result').value);

    if(isNaN(n1)){
        document.getElementById('result').value = 'NaN';
        document.getElementById('result').style.color = color_NaN;
    }

    var oper = document.getElementById('minus_operators').value;

    if(oper === '-'){
        document.getElementById('result').value = n2 - n1;
        document.getElementById('result').style.color = color_minus;
    }
}
