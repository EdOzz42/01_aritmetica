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
    res1.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s1}`
}


