function organizeChristmasDinner(dishes) {
  const response = [];

  let ingredients = Array.from(
    new Set(dishes.map((dish) => dish.filter((_, i) => i !== 0)).flat())
  );

  ingredients.map((ingredient) => {
    let dish_coincidence = [];
    let count = 0;
    for (let dish of dishes) {
      if (dish.includes(ingredient)) {
        count++;
        dish_coincidence.push(dish[0]);
      }
    }
    if (count > 1) {
      response.push([ingredient, ...dish_coincidence.sort()]);
    }
  });

  return response.sort();
}

// organizeChristmasDinner([
//   ["christmas turkey", "turkey", "sauce", "herbs"],
//   ["cake", "flour", "sugar", "egg"],
//   ["hot chocolate", "chocolate", "milk", "sugar"],
//   ["pizza", "sauce", "tomato", "cheese", "ham"],
// ]);

// organizeChristmasDinner([
//   ["fruit salad", "apple", "banana", "orange"],
//   ["berry smoothie", "blueberry", "banana", "milk"],
//   ["apple pie", "apple", "sugar", "flour"],
// ]);

// organizeChristmasDinner([
//   ["gingerbread", "flour", "ginger", "sugar"],
//   ["glazed ham", "ham", "honey", "sugar", "vinegar"],
//   ["roast chicken", "chicken", "rosemary", "thyme", "garlic"],
//   ["vegetable soup", "carrot", "potato", "onion", "garlic"],
//   ["fruit punch", "apple juice", "orange juice", "sugar"],
// ]);
