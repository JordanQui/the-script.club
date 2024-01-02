'use client'

import { useState, useEffect } from "react";
import Head from "next/head";

const HomePage = () => {
     const [isDarkMode, setIsDarkMode] = useState(false);
     const [currentTime, setCurrentTime] = useState(new Date());

     useEffect(() => {
          // Mettez à jour l'heure toutes les secondes
          const intervalId = setInterval(() => {
               setCurrentTime(new Date());
          }, 1000);

          return () => clearInterval(intervalId);
     }, []);

     useEffect(() => {
          // Mettez à jour le mode sombre en fonction de l'heure
          const currentHour = currentTime.getHours();
          setIsDarkMode(currentHour < 8 || currentHour >= 20);
     }, [currentTime]);

     return (
          <div>
               <Head>
                    <title>Titre de votre page</title>
               </Head>
               <div className={`min-h-screen ${isDarkMode ? "dark" : "light"}`}>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                         <img
                              src={
                                   isDarkMode
                                        ? "/scriptwhite.png"
                                        : "/scriptblack .png"
                              }
                              alt="Logo"
                              className="w-48 h-48 mb-4"
                         />
                         <a
                              href="https://oncyber.io/scriptclub"
                              className="text-blue-500 hover:underline text-lg font-SpaceMono"
                         >
                              Enter the Club
                         </a>
                    </div>
               </div>
               <div className={`min-h-screen ${isDarkMode ? "dark" : "light"}`}>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                         <img
                              src={
                                   isDarkMode
                                        ? "/scriptblack.png"
                                        : "/scriptwhite.png"
                              }
                              alt="Logo"
                              className="w-48 h-48 mb-4"
                         />
                         <a
                              href="https://oncyber.io/scriptclub"
                              className={`hover:underline text-lg font-SpaceMono ${isDarkMode ? "text-black" : "text-white"}`}
                         >
                              Enter the Club
                         </a>
                    </div>
               </div>
          </div>
     );
};

export default HomePage;
