import { useState } from "react";
import "./App.css";
import Card from "./components/card";
function App() {
  let myObj = {
    name: "Abdul",
    age: 20,
  };
  const myArr = [1,2,3,4,5];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl m-2 mb-4">
        Hello WOrld
      </h1>
      <Card username="Abdul" btnText= "visit our profile"/>
      <Card username="Abdul Haseeb Imran" btnText="Visit profile"/>
      <Card/>
    </>
  );
}

export default App;
