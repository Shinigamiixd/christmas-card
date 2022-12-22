let container = document.querySelector(".container")
let card = document.querySelector(".card")
let snowcontainer = document.querySelector(".snow-container")
let lightrope = document.querySelector(".lightrope")

for (i = 0; i < 50; i++) {
    let snowflake = document.createElement("div")
    snowflake.classList = "snowflake"
    snowcontainer.appendChild(snowflake)
    li = document.createElement("li")
    lightrope.appendChild(li)
}

function openCard() {
    var cards = document.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('open');
    }
}