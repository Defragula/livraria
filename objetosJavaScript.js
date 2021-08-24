var hotel = {
    nome: 'Columbality',
    quartos: 40,
    reservados: 25,
    academia: true,
    checaDisponibilidade: function(){
        return this.quartos - this.reservados
    }
}
var nomeHotel = document.getElementById('nomeHotel')
nomeHotel.textContent = hotel.nome

var quartos = document.getElementById('quartos')
quartos.textContent = hotel.quartos

var reservados = document.getElementById('reservados')
reservados.textContent = hotel.reservados

var disponiveis = document.getElementById('disponiveis')
disponiveis.textContent = hotel.checaDisponibilidade