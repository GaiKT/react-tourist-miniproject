import "./App.css";
import NavigationBar from "./utils/navigationBar";
import Hero from "./utils/Hero";
import Card from "./component/Card";
import axios from "axios"
import { useEffect, useState } from "react";

function App() {

  const [trips , setTrips] = useState([])
  const [keyword , setKeyword] = useState('')

  const getTrip = async () => {
    let findkeyword = keyword.replace(" ","");
    const result = await axios.get('http://localhost:4001/trips?keywords='+ findkeyword)
    setTrips(result.data.data)
  }

  const getKeyword = (keywords) => {
    setKeyword(keywords)
  }

  const getTags = (keywords) => {
    setKeyword(keyword + ` ${keywords}`)
  }

  useEffect(()=>{
    getTrip()
  },[keyword])

  return (
  <div className="min-h-screen pb-10 relative">
      <div className="h-svh bg-bottom bg-cover bg-opacity-50 bg-[url('https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?t=st=1714134096~exp=1714137696~hmac=907407c3986ca84e6391f8cdfba7e7a13d3a751e8afdcfdb68cc34c6eb4d6b94&w=996')]">
        <NavigationBar/>
        <div className="h-full text-center font-semibold text-white text-lg md:px-20 md:pt-16 max-md:pt-8 bg-black bg-opacity-50">
            <h1 className="text-4xl font-extrabold mb-4">Travel is life</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem eos beatae numquam ex velit accusantium incidunt, corporis eius. Nemo laboriosam facere a possimus obcaecati! Illum harum fugit voluptas rem!
        </div>
      </div>
      <div className="absolute md:top-96 max-md:top-80 w-full rounded-t-2xl bg-slate-100 shadow-lg">
        <Hero value={keyword} getKeyword={getKeyword} />
        <div className="flex flex-col gap-5 px-10 min-h-52 pb-10">
            {
              trips.length > 0 ?
                trips.map((trip , index)=>{
                  return <Card key={index} trip={trip} getKeyword={getTags} />
                })
              : <p className="text-center">Can't find this keyword.</p>
             }
        </div>
      </div>
  </div>);
}

export default App;
