const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get courses (){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  
  get appetizers(){},
  set appetizers(appetizerIn){},
  
  get mains(){},
  set mains(mainIn){},
  
  get desserts(){},
  set desserts(dessertIn){},
  
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }  
    
    this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    
    return dishes[randomIndex];
  },
  
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  },
}

menu.addDishToCourse('appetizers', 'Small Eggs', 10);
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Small Salad', 2.25);

menu.addDishToCourse('mains', 'Pizza', 20);
menu.addDishToCourse('mains', 'Great Meat Steak', 15);
menu.addDishToCourse('mains', 'Tacos', 10);

menu.addDishToCourse('desserts', 'Icecream', 8);
menu.addDishToCourse('desserts', 'Lime Mousse', 12);
menu.addDishToCourse('desserts', 'Pudim', 14.25);

let meal = menu.generateRandomMeal();
console.log(meal);
