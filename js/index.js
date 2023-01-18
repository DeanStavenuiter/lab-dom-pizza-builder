// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const whiteSauce = document.querySelector(".sauce")
    if (!state.whiteSauce) {
      whiteSauce.classList.add("sauce-white")
    } else {
      whiteSauce.classList.remove("sauce-white")
    }
  }
function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust")
    if (!state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free")
    } else {
      crust.classList.remove("crust-gluten-free")
    }
}

function renderButtons() {
  if (state.pepperoni) {
    document.querySelector('.btn-pepperoni').classList.add('active')
   } else {
    document.querySelector('.btn-pepperoni').classList.remove('active')
   }
   if (state.mushrooms) {
    document.querySelector('.btn-mushrooms').classList.add('active')
   } else {
    document.querySelector('.btn-mushrooms').classList.remove('active')
   }
   if (state.greenPeppers) {
    document.querySelector('.btn-green-peppers').classList.add('active')
   } else {
    document.querySelector('.btn-green-peppers').classList.remove('active')
   }
   if (state.whiteSauce) {
    document.querySelector('.btn-sauce').classList.remove('active')
   } else {
    document.querySelector('.btn-sauce').classList.add('active')
   }
   if (state.glutenFreeCrust) {
    document.querySelector('.btn-crust').classList.remove('active')
   } else {
    document.querySelector('.btn-crust').classList.add('active')
   }
}

function renderPrice() {
  const priceList = document.querySelector('.price ul')
  const totalList = document.querySelector('.price strong')
  let priceTotal = 10;
        priceList.innerText = '';
        totalList.innerText = `Total ${priceTotal}`;
  if (state.pepperoni) {
    const pepList = document.createElement('li'); 
    pepList.innerText = '$1 pepperoni'
    priceList.appendChild(pepList)
    priceTotal += 1
    totalList.innerText = `Total $${priceTotal}`;
  }
  if (state.mushrooms) {
    const musList = document.createElement('li'); 
    musList.innerText = '$1 mushrooms'
    priceList.appendChild(musList)
    priceTotal += 1
    totalList.innerText = `Total $${priceTotal}`;
  }
  if (state.greenPeppers) {
    const greList = document.createElement('li'); 
    greList.innerText = '$1 green peppers'
    priceList.appendChild(greList)
    priceTotal += 1
    totalList.innerText = `Total $${priceTotal}`;
  }
  if (!state.whiteSauce) {
    const whiList = document.createElement('li'); 
    whiList.innerText = '$3 white sauce'
    priceList.appendChild(whiList)
    priceTotal += 3
    totalList.innerText = `Total $${priceTotal}`;
  }
  if (!state.glutenFreeCrust) {
    const gluList = document.createElement('li');
    gluList.innerText = '$5 gluten-free crust'
    priceList.appendChild(gluList)
    priceTotal += 5
    totalList.innerText = `Total $${priceTotal}`;
  }

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
