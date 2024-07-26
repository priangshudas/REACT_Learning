import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="h-8 w-48 m-4">
        <h2 className="bg-red-600 p-4 rounded-xl text-xl hover:bg-green-500 transition-all ease-in duration-200 text-center">
          Hover Yr Mouse
        </h2>
      </div>

      <br />

      <div className="grid grid-cols-4 grid-row-4 gap-5">
        <Card
          productName="Windows"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0AQugI5xVEn-WLuFAjQN7hJ1fBJ2gyQ6mA&s"
        />
        <Card
          productName="Mackbook"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lVAtFzXGDxmNjUMZ4xn-9sKxC0bAvK4Clw&s"
        />
        <Card
        // productName="Linux"
        // imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3q4PrO96oUQQVeoDHVLYOroxQnYKJK_CSQ&s"
        />
        <Card
        // productName="Android"
        // imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZbcitLlc-AWE8vekG0RytAkWlp4W100Q7mQ&s"
        />
      </div>
    </>
  );
}

export default App;
