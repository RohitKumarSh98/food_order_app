import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem.js";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pav Bhaji",
    description: "Finest bread and veggies",
    price: 99.99,
  },
  {
    id: "m2",
    name: "Smoky Pizza",
    description: "A Italian specialty!",
    price: 136.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Desi, raw veggies, paneer",
    price: 72.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 149.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
