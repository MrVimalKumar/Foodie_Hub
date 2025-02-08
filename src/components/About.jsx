import React from "react";
import Foodiehub from "../utils/FoodieHub.jpg";

const About = () => {
  return (
    <div className=" p-4 bg-gray-200 shadow-lg">
      <div className="flex items-center justify-center" >
        <img className="w-[450px] rounded-lg shadow-lg " src={Foodiehub} />
      </div>

      <div className="flex justify-center  bg-yellow-100 shadow-lg rounded-lg font-medium text-xl p-2 my-4 ">
        Welcome to Foodie Hub – your go-to platform for delicious, fast, and
        hassle-free food delivery! We are passionate about bringing your
        favorite meals right to your door, whether you're craving comfort food,
        a healthy option, or something new to explore. Our mission is simple: to
        connect you with the best local restaurants, ensuring every meal you
        order is made fresh, delivered quickly, and served with a smile. We
        understand how busy life can get, so we’ve created a seamless,
        user-friendly experience to make your food ordering as easy as possible.
        At Foodie Hub, we take pride in supporting local businesses while
        offering you a wide variety of cuisines to choose from, all in one
        place. Whether it’s breakfast, lunch, dinner, or a late-night snack,
        we’ve got you covered. What makes us different? It’s our dedication to
        quality, convenience, and customer satisfaction. We prioritize speed,
        reliability, and keeping you updated at every step of the delivery
        process. Plus, our platform is designed with you in mind – offering fast
        and secure payments, customizable orders, and exclusive deals. Thank you
        for choosing us to satisfy your cravings! We’re here to make every meal
        a moment to enjoy.
      </div>
      <div className="bg-gray-100 shadow-lg rounded-lg font-medium my-4 text-xl p-2 ">
        We believe food is more than just fuel – it's an experience. Whether
        you're sharing a meal with friends or enjoying some quiet time alone,
        we’re here to ensure that every bite brings you joy. Our team works
        tirelessly to bring you not just the best meals but a seamless ordering
        experience, every single time. Our commitment goes beyond great food. We
        value sustainability and strive to partner with restaurants that
        prioritize eco-friendly practices. From recyclable packaging to
        responsibly sourced ingredients, we are dedicated to making a positive
        impact on both your taste buds and the planet. Join our growing
        community of food lovers! Stay tuned for exciting updates, new
        restaurant partners, and exclusive offers to make your dining experience
        even better.
      </div>
    </div>
  );
};

export default About;
