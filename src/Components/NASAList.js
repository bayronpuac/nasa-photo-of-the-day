import React, {useEffect, useState} from "react";
import axios from "axios";
import NASACard from "./NASACards";

export default function NASAList(){

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
        <div className="photo">
            <NASACard
              key={date}
              title={title}
              img={img}
              desc={desc}
              date={date}
              credit={credit}
            />
      </div>
    )
}



