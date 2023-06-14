const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelected = document.getElementById("movie");

let ticketPrice = parseInt(movieSelected.value); 
//calculate seats and total price
function  udataSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seatsIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat);
    });
    //storage value inside localstorage
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}
// movie click event
movieSelected.addEventListener('change',(e)=>{
    ticketPrice = +e.target.value;
    localStorage.setItem('movieSelected', JSON.stringify(movieSelected))
    udataSelectedCount();
})
  //save selected movie name and price
  function setMovieData (movieIndex,moviePrice) {
        localStorage.setItem("movieName",movieIndex);
        localStorage.setItem("moviePrice",moviePrice);
    }
// seat click event
container.addEventListener('click',(e)=>{

    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

         e.target.classList.toggle('selected');

         udataSelectedCount();
    }
})