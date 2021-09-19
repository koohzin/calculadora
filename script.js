function somar(){
    var num1 = document.querySelector(".num1").value
    var num2 = document.querySelector(".num2").value

    var resultado = parseInt(num1) + parseInt(num2)
    document.querySelector(".resultado").innerHTML = resultado
}

function subtrair(){
    var num1 = document.querySelector(".num1").value
    var num2 = document.querySelector(".num2").value

    var resultado = parseInt(num1) - parseInt(num2)
    document.querySelector(".resultado").innerHTML = resultado
}

function dividir(){
    var num1 = document.querySelector(".num1").value
    var num2 = document.querySelector(".num2").value

    var resultado = parseInt(num1) / parseInt(num2)
    document.querySelector(".resultado").innerHTML = resultado
}

function multiplicar(){
    var num1 = document.querySelector(".num1").value
    var num2 = document.querySelector(".num2").value

    var resultado = parseInt(num1) * parseInt(num2)
    document.querySelector(".resultado").innerHTML = resultado
}
function limpar(){
    var num1 = document.querySelector(".num1").value = ''
    var num2 = document.querySelector(".num2").value = ''
    document.querySelector(".resultado").innerHTML = 'Resultado'
}