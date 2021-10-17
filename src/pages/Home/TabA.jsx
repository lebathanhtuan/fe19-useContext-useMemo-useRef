import React, { useState, useEffect } from "react";

const TabA = () => {
  const [valueA, setValueA] = useState("");
  console.log('🚀 ~ file: TabA.jsx ~ line 5 ~ TabA ~ valueA', valueA);
  // Mounting
  useEffect(() => {
    console.log("Mới vào render lần đầu tiên A, set lại state cho input từ localStorage");
    setValueA(JSON.parse(localStorage.getItem('inputA')))
  }, []);

  // UnMounting
  useEffect(() => {
    return () => {
      // Clear Data
    };
  }, []);

  return (
    <div>
      TabA
      <input
        type="text"
        onChange={(e) => {
          setValueA(e.target.value)
          localStorage.setItem('inputA', JSON.stringify(e.target.value))
        }}
        value={valueA}
      />
    </div>
  );
};

export default TabA;
