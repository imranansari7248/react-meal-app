import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect } from "react";
import { useState } from "react";
import AddMeal from "./AddMeal/Addmeal";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://react-meal-app-67780-default-rtdb.firebaseio.com/meals.json"
      );
      console.log(response.ok);
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const responseData = await response.json();
      console.log(responseData);
      const loadedMeals = [];
      for (const key in responseData) {
        for (const key2 in responseData[key]) {
          loadedMeals.push({
            id: responseData[key][key2].id,
            name: responseData[key][key2].name,
            description: responseData[key][key2].description,
            price: responseData[key][key2].price,
          });
        }
      }

      console.log(loadedMeals);

      // put data to firebase
      // const response = await fetch(
      //   "https://react-meal-app-67780-default-rtdb.firebaseio.com/meals.json",
      //   {
      //     method: "POST",
      //     body: JSON.stringify(DUMMY_MEALS),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      // if (!response.ok) {
      //   throw new Error("Something went wrong.");
      // }
      // const responseData = await response.json();
      // console.log(responseData);
      setMeals(loadedMeals);
      setIsLoading(false);
    }

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  if (hasError) {
    return (
      <section className={classes.Error}>
        <p>{hasError}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className={classes.mealLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {/* <AddMeal /> */}
      </Card>
    </section>
  );
};

export default AvailableMeals;

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
