// Arrays Hotel

let idHotel = ["1", "2", "3", "4"]
let nomeHotel = ["A", "B", "C", "D"]
let categoriaHotel = []
let enderecoHotel = ["SP" ,"RJ", "MG","RS"]
let telefoneHotel = []
// Arrays Reserva

let idReserva = [1, 2, 3, 4]
let nomeResponsavelReserva = ["Luiz", "Anderson", "Shoiti", "Zizs"]
let hotelReservado = ["A", "B", "A", "A"]
let Entrada = [15, 22, 1, 7]
let Saida = [18, 23, 2, 7]
let contadorReserva = 0

MostrarReservaDoResponsavel(3)

function CadastrarHotel() {
    idHotel.push(prompt("Insira o id do hotel:"))
    nomeHotel.push(prompt("Insira o nome do hotel:"))
    categoriaHotel.push(prompt("Insira a categoria do hotel:"))
    enderecoHotel.push(prompt("Insira o endereço do hotel:"))
    telefoneHotel.push(prompt("Insira o telefone do hotel:"))
    return
}

function FazerReserva() {
    contadorReserva++
    idReserva.push(contadorReserva)
    let hotelReservar = prompt("Em qual hotel quer fazer a reserva?")
    let verificar = idHotel.includes(hotelReservar)
    if (verificar == false) {
        alert("Hotel não encontrado no sistema")
        return
    } else {
        hotelReservado.push(nomeHotel[idHotel.indexOf(hotelReservar)])
    }
    nomeResponsavelReserva.push(prompt("Insira o nome do reponsável da reserva:"))

    let diaEntrada = parseInt(prompt("Insira o dia de entrada:"))
    while (diaEntrada > 30 || diaEntrada < 1) {
        alert("Dia inserido inválido")
        diaEntrada = parseInt(prompt("Insira o dia de entrada:"))
    }
    Entrada.push(diaEntrada)

    let diaSaida = parseInt(prompt("Insira o dia de saida:"))
    while ((diaSaida > 30 || diaSaida < diaEntrada)) {
        alert("Dia inserido inválido")
        diaSaida = parseInt(prompt("Insira o dia de saida:"))
    }
    Saida.push(diaSaida)
}

function MostrarReservasDoHotel(idParametro) {
    let mensagem = true
    idHotel.forEach((x, index) => {
        if (idParametro == x) {
            hotelReservado.forEach((y, contador) => {
                if (hotelReservado[contador] == nomeHotel[index]) {
                    alert("Hotel " + hotelReservado[contador] + " - Responsável: " + nomeResponsavelReserva[contador] + " - Dia da entrada: " + Entrada[contador] + " - Dia da saída: " + Saida[contador])
                    mensagem = false
                }
                return
            })
        }
        if (mensagem == true) {
            alert("Hotel não encontrado no sistema")
            mensagem = false
            return
        }
    })
}

function MostrarReservaDoResponsavel(idReservaParametro){
    let mensagem = false
    idReserva.forEach((x,index) => {
        if(x == idReservaParametro){
            mensagem = true
            alert("Hotel: " +hotelReservado[index]+ "\nEndereço: " +enderecoHotel[nomeHotel.indexOf(idReservaParametro)]+ "\nDia de entrada: " +Entrada[index]+ "\n Dia de saída:"+Saida[index])
        }
    })

}