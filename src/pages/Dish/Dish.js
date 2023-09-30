import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function Dish() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = fetch("https://foodwiki.onrender.com/dishes/get");
      const res = await data;
      const dishData = await res.json();
      setDishes(dishData["dishes"]);
    };
    fetchPosts();
  }, []);
  console.log(dishes)
  
  return (
    <div className="Dish">
      {dishes && dishes.map((dish) => (
        <Card
          key={dish._id}
          title={dish.title}
          image={dish.dishImage}
          description={dish.description}
          cuisine={dish.cuisine.name}
        />
      ))}
    </div>
  );
}
