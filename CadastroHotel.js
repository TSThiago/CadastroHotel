// Arrays Hotel

let idHotel = ["1", "2", "3", "4"]
let nomeHotel = ["A", "B", "C", "D"]
let categoriaHotel = []
let enderecoHotel = []
let telefoneHotel = []
// Arrays Reserva

let idReserva = []
let nomeResponsavelReserva = []
let hotelReservado = []
let Entrada = []
let Saida = []
let contadorReserva = 0

FazerReserva()

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