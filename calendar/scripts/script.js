// NAV BAR HAMBURGER
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

const cocktailIds = ['178314', '17230', '12198', '17233', '17196', '17194', '17253', '12402', '17207', '15941', '12196', '17213', '11690', '17180', '11113', '11009', '178325', '178336', '11008', '11118', '178340', '11004', '11006', '11001']
var dayNumber = 0

const single_cocktail_container = document.getElementById('single-cocktail-container')
const drinksArray = []

function getCocktail() {
    for (cocktail of cocktailIds) {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail}`)
            .then(res => res.json())
            .then(data => {
                const drink = data.drinks[0];
                dayNumber += 1
                addCocktailToDOM(dayNumber, drink)
            })       
    };
}

function addCocktailToDOM(dayNumber, drink) {
    const cocktailName = drink.strDrink
    const cocktailImage = drink.strDrinkThumb

    single_cocktail_container.innerHTML +=
        `<div class="flip-card">
        <div class="flip-card-inner">
            <div class="card-front">
                <img class="days-img" src="./days/day${dayNumber}.jpg" alt="${dayNumber}day">
            </div>
            <div class="card-back">
                <img class="cocktail" src="${cocktailImage}" alt="${cocktailName}">
            </div>
        </div>
    </div>`
}

//Event listener

window.addEventListener('load', () => {
    getCocktail();
})

hamburger.addEventListener('click', () => {
     navUL.classList.toggle('show');
});