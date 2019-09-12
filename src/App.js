import React, {useEffect, useState} from "react";
import "./App.css";
import NASAList from "./Components/NASAList";
import axios from "axios"; 
import DropDown from "./Components/DropDown"


function App() {

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [credit, setCredit] = useState("");

  useEffect(() =>{
    axios 
    .get(`https://api.nasa.gov/planetary/apod?api_key=xdJ4nVca8IByhfVvIIdXUWQcLMYlcfZG0AxtIW4Q`)
    .then( res => {
        const photo = res.data;
        console.log(photo);
        setDate(res.data.date);
        setTitle(res.data.title);
        setImg(res.data.hdurl);
        setDesc(res.data.explanation);
        setCredit(res.data.copyright);
    })
    .catch(error => {
        console.log("The data was not returned", error);
    });
}, []);
  return (
    <div className="App">
      <DropDown />
      <nav className="navigation">
        <a href="Picture">Picture of the day</a>
      </nav>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label="Rocket">🚀</span>!
      </p>
      <NASAList date={date} img={img} title={title} desc={desc} credit={credit} />
      
    </div>
  );
}

export default App;
