import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error in loading data!!");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isloading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities(){
  const context = useContext(CitiesContext);
  if(context === undefined) throw new Error("CitiesContext was used outside the CitiesProvider")
  return context;
}

export {CitiesProvider, useCities};
