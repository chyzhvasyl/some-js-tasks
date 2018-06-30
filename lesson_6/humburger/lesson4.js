
const findInArr = function(array, x){
    for (let i = 0; i < array.length; i++) {
        if(array[i] === x){
            return i;
        }
    }
    return -1;
};

class Hamburger {
constructor (size, stuffing){

    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
}
    addTopping (topping) {
        let x = findInArr(this._toppings, topping);
        if(x === -1){
            this._toppings.push(topping);
            return 'Соус доданий';
        }else{
            return 'Соус такий вже є';
        }
    };
    removeTopping (topping) {
        let x = findInArr(this._toppings, topping);
        if(x !== -1){
            this._toppings.splice(x, 1);
            return 'Соус видалений';
        }else{
            return 'Соуса такого немає';
        }
    };

    getSize () {
        return this._size;
    };


    getStuffing () {
        return this._stuffing;
    };


    getToppings () {
        return this._toppings;
    };
    calculatePrice () {
        let price = this._size.price + this._stuffing.price;
        for (let i = 0; i < this._toppings.length; i++) {
            price += this._toppings[i].price;
        }
        return price;
    }


    calculateCalories () {
        let cals = this._size.cal + this._stuffing.cal;
        for (let i = 0; i < this._toppings.length; i++) {
            cals += this._toppings[i].cal;
        }
        return cals;
    }
}


Hamburger.SIZE_SMALL = {
    name: 'малий',
    price: 50,
    cal: 20
};
Hamburger.SIZE_LARGE = {
    name: 'великий',
    price: 100,
    cal: 40
};
Hamburger.STUFFING_CHEESE = {
    name: 'сирочок',
    price: 10,
    cal: 20
};
Hamburger.STUFFING_SALAD = {
    name: 'салатік',
    price: 20,
    cal: 5
};
Hamburger.STUFFING_POTATO = {
    name: 'картопелька',
    price: 15,
    cal: 10
};
Hamburger.TOPPING_MAYO = {
    name: 'мазік',
    price: 20,
    cal: 5
};
Hamburger.TOPPING_SPICE = {
    name: 'пряності',
    price: 15,
    cal: 0
};
//output
document.querySelector('.btn').onclick = function()
{
      const size = document.querySelector(".size input:checked").value;
      const stuff = document.querySelector("select option:checked").value;
      hamburger = new Hamburger(Hamburger[size], Hamburger[stuff]);
      const addings = document.querySelectorAll(".toppings input:checked");
      for (let i = 0; i < addings.length; i++) {
          hamburger.addTopping(Hamburger[addings[i].value]);
      }
      for (let i = 0; i < addings.length; i++)
      {
          alert(`
      Додали успішно: ${hamburger.getToppings()[i].name};
      Ваш бургер: ${hamburger.getSize().name} з такими пріколами: ${hamburger.getStuffing().name};
      Ціна: ${hamburger.calculatePrice()};
      Калорії: ${hamburger.calculateCalories()}`);
      }

}

	