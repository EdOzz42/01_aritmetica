var tn1 = window.document.getElementById("text1") // Está variável vai selecionar o input 1
var tn2 = window.document.querySelector("input#text2")
//Está vai selecionar o input 2
var bt1 = window.document.getElementById("botao")
//Está vai selecionar o botão da soma
var res1 = window.document.getElementById("res+")
//Está vai selecionar a div "Resultado"
bt1.addEventListener('click', clicar00)
//Este addEventListener vai vereficar se o usuário clicou no botão somar. E se clicar, vai ativar a função clicar00, que tem a finalidade de somar valores.
function clicar00() {
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s1 = n1 + n2 
    res1.innerHTML = `A soma entre<strong> ${n1}</strong> e <strong>${n2}</strong> é igual a<strong> ${s1}</strong>`
}

//Está função clicar vai pegar o valor que o usuário colocou no input 1 & 2 e tranformar no tipo number. Em seguida ela vai guardar esses valores nas variáveis n1 & n2. Depois ele vai somar n1 e n2 e guardar esse valor na variável s1. Finalmente, essa função vai mostrar o valor guardado dessa variável s1. 

var tn3 = window.document.getElementById("text3")
var tn4 = window.document.getElementById("text4")
var bt2 = window.document.getElementById("botao1")
var res2 = window.document.getElementById("res-")

bt2.addEventListener('click', clicar01)

function clicar01() {
    n3 = Number(tn3.value)
    n4 = Number(tn4.value)
    s2 = n3 - n4 
    res2.innerHTML = `A subtração entre <strong>${n3}</strong> e <strong>${n4}</strong> é equivalente a <strong>${s2}</strong>`
}

var tn5 = window.document.getElementById("text5")
var tn6 = window.document.getElementById("text6")
var bt3 = window.document.getElementById("botao2")
var res3 = window.document.getElementById("resx")

bt3.addEventListener("click", clicar02)

function clicar02() {
    n5 = Number(tn5.value)
    n6 = Number(tn6.value)
    s3 = n5 * n6 
    res3.innerHTML = `A multiplicação entre <strong>${n5}</strong> e <strong>${n6}</strong> é igual a <strong>${s3}</strong>`
}

var tn7 = window.document.getElementById("text7")
var tn8 = window.document.getElementById("text8")
var bt4 = window.document.getElementById("botao3")
var res4 = window.document.getElementById("resd")

bt4.addEventListener("click", clicar03)

function clicar03() {
    n7 = Number(tn7.value)
    n8 = Number(tn8.value)
    s4 = n7 / n8
    res4.innerHTML = `A divisão entre <strong>${n7}</strong> e <strong>${n8}</strong> é igual a <strong>${s4}</strong>`
}

