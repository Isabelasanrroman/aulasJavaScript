
const adultos = parseInt(prompt("Quantos adultos vão estar na festa?"))
const crianças = parseInt(prompt("Quantas crianças vão estar na festa?"))
const horafesta = parseFloat(prompt("Quantas horas vão ter de festa?"))

const convidados = adultos + crianças
const aluguelmesacadeira = (convidados / 4) * 17.99

const aluguelespaço = horafesta * 239.99
const aluguelkaraoke = (horafesta / 2) * 27.99

const valordividido = (aluguelespaço + aluguelmesacadeira + aluguelkaraoke) / adultos

const salgadinhos = convidados * 18
const docinhos = convidados * 6
const refrigerante = convidados * 1
const copos = convidados * 5
const pratos = convidados * 2
const kitgarfofaca = convidados * 2

const precoSalgadinhos = (48.90 / 100) * salgadinhos
const precoDocinhos = (42.90 / 20) * docinhos
const precoRefrigerante = (8.99 / 2) * refrigerante
const precoCopos = (12.99 / 100) * copos
const precoPratos = (4.99 / 10) * pratos
const precoKitgarfofaca = (7.99 / 10) * kitgarfofaca


const seuValor = precoSalgadinhos + precoDocinhos + precoRefrigerante + precoCopos + precoPratos + precoKitgarfofaca
const valorTotal = precoSalgadinhos + precoDocinhos + precoRefrigerante + precoCopos + precoPratos + precoKitgarfofaca + aluguelespaço + aluguelmesacadeira + aluguelkaraoke

alert(`RELATÓRIO:
    Adultos: ${adultos}.
    Crianças: ${crianças}.
    Tempo de Festa: ${horafesta}.

    Salgadinhos: ${precoSalgadinhos} reais.
    Docinhos: ${precoDocinhos} reais.
    Refrigerante: ${precoRefrigerante} reais.
    Copos: ${precoCopos} reais.
    Pratos: ${precoPratos} reais.
    Kit Garfo e Faca: ${precoKitgarfofaca} reais.
    Aluguel do Espaço: ${aluguelespaço} reais.
    Aluguel de Mesas e Cadeiras: ${aluguelmesacadeira} reais.

    Aluguel do Karaoke: ${aluguelkaraoke} reais.
    TOTAL: ${valorTotal} reais.
    VALOR POR CONVIDADO: ${valordividido} reais.
    VALOR QUE VOCE DEVERÁ PAGAR: ${seuValor} reais.
    `)