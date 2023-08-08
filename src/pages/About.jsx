import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantRegistration() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-black to-pink-500 min-h-screen text-white">
      <div className="w-full h-1/2 bg-gradient-to-r from-transparent to-pink-500"></div>

      <h1 className="italic font-extrabold text-6xl my-12">MunchHub Registration</h1>

      <h4 className="p-10 italic font-bold text-2xl text-white text-opacity-70">Join Us for Food Delivery Services</h4>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {/* Content for the left column */}
          <div className="p-4 text-center">
            <h1 className="font-bold italic text-4xl">About Us</h1><br></br>
            <p className="text-lg text-white text-opacity-80 leading-relaxed">
              Welcome to MunchHubEats, your platform for food delivery excellence! If you're a restaurant owner looking to expand your reach and offer convenient food delivery services, you're in the right place. Our app allows you to register your restaurant and connect with customers seamlessly, with the added benefit of integrated Google Maps for easy navigation.
            </p>
          </div>
          <br /><br />
          <img
            src="image/image1.jpeg"
            alt="MunchHubEats Restaurant"
            className="w-4/5 h-auto rounded-lg shadow-md mx-auto border-4 border-white border-opacity-50"
          />
          <br /><br /><br /><br />
          <h1 className="font-bold italic text-4xl">Our Vision</h1><br></br>
          <p className="text-lg text-white text-opacity-80 leading-relaxed">
            At MunchHubEats, we envision revolutionizing the dining experience through convenient and delightful food delivery services. Join us in shaping the future of food delivery and create memorable moments for your customers.
          </p><br></br><br></br>
          <img
            src="image/image4.jpeg"
            alt="MunchHubEats Restaurant"
            className="w-4/5 h-auto rounded-lg shadow-md mx-auto border-4 border-white border-opacity-50"
          />
          <br /><br /><br /><br />
        </div>

        <div className="md:w-1/2">
          {/* Content for the right column */}
          <img
            src="image/image8.jpeg"
            alt="MunchHubEats Restaurant"
            className="w-4/5 h-auto rounded-lg shadow-md mx-auto border-4 border-white border-opacity-50"
          />
          <br /><br /><br /><br />
          <h1 className="font-bold italic text-4xl">Get Started</h1><br></br>
          <p className="text-lg text-white text-opacity-80 leading-relaxed">
            Join our community of restaurants committed to providing exceptional food delivery services. Showcase your culinary expertise, share your menu, and attract food enthusiasts. Register your restaurant and be part of the MunchHubEats family today.
          </p>
          <img
            src="image/image5.jpeg"
            alt="MunchHubEats Restaurant"
            className="w-4/5 h-auto rounded-lg shadow-md mx-auto border-4 border-white border-opacity-50"
          />
          <br /><br /><br /><br />
          <h1 className="font-bold italic text-4xl">Why Choose Us</h1><br></br>
          <ul className="list-disc list-inside p-4 text-white text-opacity-80">
            <li className="mb-4">Wide Reach and Accessibility.</li>
            <li className="mb-4">Seamless Order Management.</li>
            <li className="mb-4">Integrated Navigation Services.</li>
            <li className="mb-4">Customer-Centric Approach.</li>
            <li className="mb-4">Promotion and Exposure Opportunities.</li>
          </ul>
          <p className="text-lg text-white text-opacity-70 mt-4">
            MunchHubEats is your partner in enhancing your restaurant's delivery capabilities. Join us and elevate your customer experience with hassle-free delivery services and greater visibility.
          </p>
        </div>
      </div>
      <div className="w-full h-1/2 bg-gradient-to-r from-pink-500 to-transparent"></div>
    </div>
  );
}

export default RestaurantRegistration;
