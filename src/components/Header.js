import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import RecentNewsHeader from "./RecentNewsHeader";
import DarkModeToggle from "./DarkModeToggle";
import axios from "axios";

export default function Header() {
  const getDateTime = () => {
    const months = [
      "January",
      "February", 
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    var todate = date.getDate();
    var tomonth = date.getMonth();
    var toyear = date.getFullYear();
    var week = date.getDay();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime =
      weeks[week] +
      ", " +
      todate +
      " " +
      months[tomonth] +
      " " +
      toyear +
      " " +
      hours +
      ":" +
      minutes +
      " " +
      ampm;
    return strTime;
  };

  const [location, setLocation] = useState("Surat");
  const [temp, setTemp] = useState("Surat");
  const updateWeather = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Surat&aqi=no
        `
      )
      .then((res) => {
        setTemp(res.data.current.temp_c + " °C");
        setLocation(res.data.location.name + ", " + res.data.location.region);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    updateWeather();
  }, []);
  return (
    <div>
      <header className="bg-white dark:bg-gray-900 shadow-lg border-b-4 border-news-accent dark:border-yellow-400 fixed top-0 w-full z-50">
        {/* Top Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
            {/* Date and Weather */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-body">{getDateTime()}</span>
              <span className="hidden sm:inline">•</span>
              <span className="font-body">{temp} | {location}</span>
            </div>
            
            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <Link to="/home" className="flex items-center">
                <h1 className="newspaper-headline text-2xl md:text-3xl text-news-primary dark:text-white">
                  NextIn <span className="text-news-accent dark:text-yellow-400">News</span>
                </h1>
              </Link>
            </div>
            
            {/* Language & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <button className="font-semibold text-gray-700 dark:text-gray-300 hover:text-news-accent dark:hover:text-yellow-400 transition-colors">
                  ENGLISH
                </button>
                <span className="text-gray-400">|</span>
                <button className="font-semibold text-gray-500 dark:text-gray-500 hover:text-news-accent dark:hover:text-yellow-400 transition-colors">
                  ESPAÑOL
                </button>
              </div>
              <DarkModeToggle />
            </div>
          </div>

          {/* Navigation */}
          <nav className="py-4">
            <div className="flex flex-wrap justify-center items-center space-x-8">
              <Link 
                to="/home" 
                className="newspaper-byline text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-news-accent dark:hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-news-accent dark:hover:border-yellow-400 pb-1"
              >
                Home
              </Link>
              <Link 
                to="/science" 
                className="newspaper-byline text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-news-accent dark:hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-news-accent dark:hover:border-yellow-400 pb-1"
              >
                Science
              </Link>
              <Link 
                to="/entertainment" 
                className="newspaper-byline text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-news-accent dark:hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-news-accent dark:hover:border-yellow-400 pb-1"
              >
                Entertainment
              </Link>
              <Link 
                to="/health" 
                className="newspaper-byline text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-news-accent dark:hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-news-accent dark:hover:border-yellow-400 pb-1"
              >
                Health
              </Link>
              <Link 
                to="/business" 
                className="newspaper-byline text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-news-accent dark:hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-news-accent dark:hover:border-yellow-400 pb-1"
              >
                Business
              </Link>
              <Link 
                to="/sports" 
                className="newspaper-byline text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-news-accent dark:hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-news-accent dark:hover:border-yellow-400 pb-1"
              >
                Sports
              </Link>
              <Link 
                to="/technology" 
                className="newspaper-byline text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-news-accent dark:hover:text-yellow-400 transition-colors border-b-2 border-transparent hover:border-news-accent dark:hover:border-yellow-400 pb-1"
              >
                Technology
              </Link>
            </div>
          </nav>

          {/* Social Media Icons */}
          <div className="py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center items-center space-x-6">
              <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Facebook">
                <AiFillFacebook className="w-6 h-6" />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors" aria-label="Instagram">
                <AiFillInstagram className="w-6 h-6" />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors" aria-label="YouTube">
                <AiFillYoutube className="w-6 h-6" />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors" aria-label="LinkedIn">
                <AiFillLinkedin className="w-6 h-6" />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors" aria-label="Twitter">
                <AiFillTwitterSquare className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <RecentNewsHeader />
      </header>
    </div>
  );
}
