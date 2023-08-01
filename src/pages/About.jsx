import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-black to-pink-500 min-h-screen text-white">
      <div className="w-full h-1/2 bg-gradient-to-r from-transparent to-pink-500"></div>

      <h1 className="italic font-extrabold text-6xl my-12">About MunchHubEats</h1>

      <h4 className="p-10 italic font-bold text-2xl text-white text-opacity-70">We Are A Modern Restaurant in The Center Of The City</h4>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {/* Content for the left column */}
          <div className="p-4 text-center">
            <h1 className="font-bold italic text-4xl">About Us</h1><br></br>
            <p className="text-lg text-white text-opacity-80 leading-relaxed">
              Welcome to MunchHubEats, where we redefine the art of dining! Our goal is to create a culinary experience like no other. Through our app, you can explore a delightful range of food options while easily locating and connecting with our top-notch restaurants using the integrated Google Maps feature.
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
            At MunchHubEats, we envision being pioneers in creating exceptional dining experiences that delight our guests with a diverse and delectable menu. Join us on this culinary journey and let's savor unforgettable moments together.
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
          <h1 className="font-bold italic text-4xl">Our Mission</h1><br></br>
          <p className="text-lg text-white text-opacity-80 leading-relaxed">
            Our mission is to create a hub of culinary excellence where creativity and passion converge to deliver dishes that resonate with your taste buds and warm your heart. We're thrilled to share memorable moments and delicious meals with you and the entire community. Thank you for being a part of our story.
          </p>
          <img
            src="image/image5.jpeg"
            alt="MunchHubEats Restaurant"
            className="w-4/5 h-auto rounded-lg shadow-md mx-auto border-4 border-white border-opacity-50"
          />
          <br /><br /><br /><br />
          <h1 className="font-bold italic text-4xl">Our Values</h1><br></br>
          <ul className="list-disc list-inside p-4 text-white text-opacity-80">
            <li className="mb-4">Passion for Quality.</li>
            <li className="mb-4">Dedication to Service.</li>
            <li className="mb-4">Collaboration and Teamwork.</li>
            <li className="mb-4">Embrace Diversity.</li>
            <li className="mb-4">Innovation and Creativity.</li>
          </ul>
          <p className="text-lg text-white text-opacity-70 mt-4">
            At MunchHubEats, we believe in elevating your dining experience to new heights. With our handpicked ingredients and culinary expertise, we promise to serve you nothing but the best. Come, indulge in a gastronomic journey that will leave you craving for more!
          </p>
        </div>
      </div>
      <div className="w-full h-1/2 bg-gradient-to-r from-pink-500 to-transparent"></div>
    </div>
  );
}

export default About;
