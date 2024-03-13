 import { create } from 'zustand';

 type Weather = {
   weather: any; // Update the type of weather to any for now
   fetchWeather: (city: string) => void;
 };

 export const useWeather = create<Weather>((set) => ({
   weather: [],
   fetchWeather: async (city = "london") => {
     try {
       const response = await fetch(
         `http://api.weatherapi.com/v1/forecast.json?key=19ea0ece13264062921134627241003&q=${city}&days=5&aqi=no&alerts=no`
       );
       const data = await response.json();
       set({ weather: data });
     } catch (error) {
       console.error('Error fetching weather:', error);
     }
   },
 }));