import React, { useState } from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
  const [foodData, setFoodData] = useState([
    {
      img: "https://www.masala.tv/wp-content/uploads/2020/10/Veg-Sandwichh.jpg",
      Food: "VEG SANDWICH",
      Price: 30,
      Quantity: 1,
    },
    {
      img: "https://www.eatingwell.com/thmb/lWAiwknQ9yapq6UuXAYrUdrcKbk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Rotisserie-Chicken-Sandwich-202-2000-485b673fe411460e95b512fbf805a5d9.jpg",
      Food: "CHICKEN SANDWICH",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJk0XiyYFY6C9MfZrOR6VNhjgOtv4JyvatA&usqp=CAU",
      Food: "CHEESE BURGER",
      Price: 40,
      Quantity: 1,
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7MhBH96-41-WGgRIu6PGXhxFZ7px010C8Ht76rCgeg&s",
      Food: "VEG BURGER",
      Price: 40,
      Quantity: 1,
    },
    {
      img:"https://simply-delicious-food.com/wp-content/uploads/2022/06/Grilled-chicken-burgers2.jpg",
      Food: "CHICKEN BURGER",
      Price: 40,
      Quantity: 1,
    },
    {
      img:"https://www.budgetbytes.com/wp-content/uploads/2020/06/BBQ-Chicken-Pizza-one-slice.jpg",
      Food: "BBQ Chicken Pizza",
      Price: 30,
      Quantity: 1,
    },
    { 
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0y69T9Amk-Wdu87wlHsj3GEgrlG5zRV8yh9XyOIFVA&s ",
      Food: "Margherita Pizza",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/4x3/4x3-veg-schezwan-noodles-recipe-video-how-to-make-easy-veg-schezwan-noodles.jpg",
      Food: "VEG NOODLES",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5mySHqfHCfL9CjmYY6clY9cqMN7SbGA63A&usqp=CAU",
      Food: "VEG NOODLES",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://kristineskitchenblog.com/wp-content/uploads/2022/12/air-fryer-chicken-nuggets-recipe-20.jpg",
      Food: "CHICKEN NUGGETS",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfNvtj_Zz_dL1O_6q8MVDKw8UqXsTJsA4lw&usqp=CAU",
      Food: "FRIES",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://c.ndtvimg.com/2021-09/10cgsus8_tacos_625x300_09_September_21.jpg ",
      Food: "TACOS",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhnKBZw9m3lWcivpt1oFLGjdwiZYKuqBxPg&usqp=CAU ",
      Food: "VANILLA ICE CREAM",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUubBSjkVuah52w43EloLlZCfyawTvbNkHg&usqp=CAU ",
      Food: "CHOCOLATE CHIP",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg ",
      Food: "CHOCOLATE CHIP",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://www.completelydelicious.com/wp-content/uploads/2016/11/14705399475_b1eb570d05_o-1.jpg",
      Food: "CHOCOLATE CHIP",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://headbangerskitchen.com/wp-content/uploads/2021/08/KETOICEDTEA-V1.jpg",
      Food: "ICED TEA",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://redandhoney.com/wp-content/uploads/2019/06/Honey-Sweetened-Lemonade.jpg",
      Food: "LEMONADE",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://www.seriouseats.com/thmb/Lkr5DnY7jNP2aP5DS3d5qE0PEkQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200816-nimbu-soda-vicky-wasik-1-28079d5d45ee4e47a37a969d1e4834a0.jpg",
      Food: "LIME SODA",
      Price: 30,
      Quantity: 1,
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qfNSeVfROOv5LBq6Km-6tT-5LoWaN7LVUQ&usqp=CAU",
      Food: "OREO MILKSHAKE",
      Price: 30,
      Quantity: 1,
    },
    // {
    //   Food: "VEG SANDWICH",
    //   Price: 30,
    //   Quantity: 1,
    // },
    // {
    //   Food: "VEG SANDWICH",
    //   Price: 30,
    //   Quantity: 1,
    // },
    // {
    //   Food: "VEG SANDWICH",
    //   Price: 30,
    //   Quantity: 1,
    // },
    // {
    //   Food: "VEG SANDWICH",
    //   Price: 30,
    //   Quantity: 1,
    // },
    // {
    //   Food: "VEG SANDWICH",
    //   Price: 30,
    //   Quantity: 1,
    // },
    // {
    //   Food: "VEG SANDWICH",
    //   Price: 30,
    //   Quantity: 1,
    // },
    // {
    //   Food: "VEG SANDWICH",
    //   Price: 30,
    //   Quantity: 1,
    // },
  ]);

  return (
    <div className='bg-yellow-100 mt-20'>
      <h1 className='xl:text-4xl 320:text-3xl font-bold font-mono xl:ml-40 sm:ml-20 '>MENU & ORDERS </h1>
      <div className='flex flex-wrap xl:w-10/12 xl:ml-32'>
        {foodData.map((food, index) => (
          <MenuCard key={index} foodData={food} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
