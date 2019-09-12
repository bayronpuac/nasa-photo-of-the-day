import React from "react";
import NASACard from "./NASACards";

export default function NASAList(props) {


    return (
        <div className="photo">
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



