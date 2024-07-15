"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    };

    const loadMealIdeas = async () => {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals || []);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Meal Ideas for "{ingredient}"</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal} className="mb-2">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded-full mr-2" />
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}
