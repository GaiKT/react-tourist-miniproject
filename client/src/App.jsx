import "./App.css";
import NavigationBar from "./utils/navigationBar";
import Hero from "./utils/Hero";
import Card from "./component/Card";

function App() {
  return (
  <div className="min-h-screen pb-10 relative">
      <div className="h-svh bg-bottom bg-cover bg-opacity-50 bg-[url('https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?t=st=1714134096~exp=1714137696~hmac=907407c3986ca84e6391f8cdfba7e7a13d3a751e8afdcfdb68cc34c6eb4d6b94&w=996')]">
        <NavigationBar/>
        <div className="h-full text-center font-semibold text-white text-lg px-20 pt-16 bg-black bg-opacity-50">
            <h1 className="text-4xl font-extrabold mb-4">Travel is life</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem eos beatae numquam ex velit accusantium incidunt, corporis eius. Nemo laboriosam facere a possimus obcaecati! Illum harum fugit voluptas rem!
        </div>
      </div>
      <div className="absolute top-80 w-full">
       <Hero/>
        <div className="flex flex-col gap-5 px-10 bg-white bg-opacity-50">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
  </div>);
}

export default App;
