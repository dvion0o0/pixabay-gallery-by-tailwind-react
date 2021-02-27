import axios from "axios";
import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const api = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${api}&q=${value}&image_type=all&per_page=30`
      );
      const { hits } = response.data;
      setPhotos(hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <AppContext.Provider value={{ photos, setValue, value, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
