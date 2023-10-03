import React, { createContext, useEffect, useState } from "react";

export const context = createContext();

const AppContext = (props) => {
  const [ctgData, setCtgData] = useState([]); //state to handle selected category data
  const [localData, setLocalDdata] = useState([]);
  useEffect(() => {
    // if (ctgData.length === 0) {
    //   const data = JSON.parse(localStorage.getItem("categories"));
    //   setCtgData(data);
    //   return;
    // } else {
    //   localStorage.setItem("categories", JSON.stringify(ctgData));
    //   const data = JSON.parse(localStorage.getItem("categories"));
    //   setLocalDdata(data);
    // }
    localStorage.setItem("categories", JSON.stringify(ctgData));
    const data = JSON.parse(localStorage.getItem("categories"));
    setLocalDdata(data);
  }, [ctgData]);
  // function to add data into seletcted category state which being called from selelectedcategory page
  const handleCtgData = (data) => {
    const sameData = ctgData.find((item) => item.value === data.value);
    if (!sameData) {
      const newValue = data;
      newValue.isSelected = true;
      setCtgData([...ctgData, newValue]);
      // localStorage.setItem("categories", JSON.stringify(ctgData));
    }
  };

  // function to delete data from selected category state
  const handleDelteCtg = (data) => {
    data.isSelected = false;
    const newList = ctgData.filter((item) => item.value !== data.value);
    setCtgData(newList);
    // localStorage.setItem("categories", JSON.stringify(ctgData));
  };
  return (
    <context.Provider
      value={{
        ctgData,
        setCtgData,
        handleCtgData,
        handleDelteCtg,
        localData,
        setLocalDdata,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default AppContext;
