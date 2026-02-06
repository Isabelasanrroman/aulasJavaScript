
const salgadoUm = prompt("Qual salgado você deseja pedir hoje?")
const valorUm = parseFloat(prompt("Qual o valor?"))
const salgadoDois = prompt("Qual o nome do segundo salgado?")
const valorDois = parseFloat(prompt("Qual o valor?"))

const refrigeranteUm = prompt("Qual refrigerante você deseja pedir?")
const litroUm = parseFloat(prompt("Quantos litros?"))
const valorRefriUm = parseFloat(prompt("Qual o valor?"))
const refrigeranteDois = prompt("Qual outro refrigerante você deseja pedir?")
const litroDois = parseFloat(prompt("Quantos litros?"))
const valorRefriDois = parseFloat(prompt("Qual o valor?"))

const frete = parseFloat(prompt("Qual o valor da taxa de entrega?"))


const total = valorUm + valorDois + valorRefriUm + valorRefriDois + frete
alert(`O valor total do seu pedido é ${total} reais, com ${salgadoUm}, ${salgadoDois}, ${refrigeranteUm} de ${litroUm} litros e ${refrigeranteDois} de ${litroDois} litros.`)
alert(`A taxa de entrega é de ${frete} reais.`)