import React from "react";
import NASACard from "./NASACards";
import NASACard2 from "./NASACard2";

export default function NASAList(props) {


    return (
        <div className="photo">
            <NASACard2
            title={props.title}
            img={props.img}
            desc={props.desc}
            date={props.date}
            credit={props.credit} />
            <NASACard
              title={props.title}
              img={props.img}
              desc={props.desc}
              date={props.date}
              credit={props.credit}
            />
            
           
      </div>
    )
}



