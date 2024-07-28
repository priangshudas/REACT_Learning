import { useState } from "react";
import Button from "./Components/Button";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-end items-center px-6"
      style={{ backgroundColor: color }}
    >
      <div className="h-full w-full flex justify-center items-center text-2xl">
        <h1 className="text-gray-600 mix-blend-difference font-semibold">
          Click On Those Buttons To Change Colour
        </h1>
      </div>

      <div className="bg-white w-16 h-5/6 rounded-xl flex flex-col px-1 py-1 gap-1">
        <Button btColor={"Red"} btnClick={() => setcolor("Red")} />
        <Button btColor={"Green"} btnClick={() => setcolor("Green")} />
        <Button btColor={"Plum"} btnClick={() => setcolor("Plum")} />
        <Button btColor={"Brown"} btnClick={() => setcolor("Brown")} />
        <Button btColor={"Purple"} btnClick={() => setcolor("Purple")} />
        <Button btColor={"Black"} btnClick={() => setcolor("Black")} />
      </div>
    </div>
  );
}

export default App;
