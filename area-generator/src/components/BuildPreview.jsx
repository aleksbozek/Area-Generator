import React, { useState, useEffect } from "react";

export default function BuildPreview(props) {
  console.log(props);
  const { area, size } = props;
  const [options, setOptions] = useState({});
  let poi = [];

  useEffect(() => {
    const runSize = (s) => {
      if (s == 0) {
        console.log(`size is undefined`);
      } else {
        if (s == "30x30") {
          console.log(`30`);
          // console.log(`30 = ${a.fields[0]}`);
        } else if (s == "60x60") {
          console.log(`60`);
          // console.log(`30 = ${a.fields[0]} & 60 = ${a.fields[1]}`);
        } else if (s == "90x90") {
          console.log(`90`);
          // console.log(`30 = ${a.fields[0]} & 60 = ${a.fields[1]} & 90 = ${a.fields[2]}`);
        }
      }
    };
    runSize(size);
  }, [size]);

  useEffect(() => {
    const runArea = (a) => {
      if (a == 0) {
        console.log(`area is undefined`);
      } else {
        if (a == "desert") {
          setOptions(props.desert);
          console.log(`point of interest = ${options}`);
        } else if (a == "woods") {
          setOptions(props.woods);
          console.log(`point of interest = ${options}`);
        } else if (a == "urban") {
          setOptions(props.urban);
          console.log(`point of interest = ${options}`);
        } else if (a == "ocean") {
          setOptions(props.ocean);
          console.log(`point of interest = ${options}`);
        }
      }
    };
    runArea(area);
  }, [area]);
  //   function myFunction() {
  //   var x = document.getElementById("mySelect");
  //   var c = document.createElement("option");
  //   c.text = `Kiwi ${num}`;
  //   x.options.add(c, 1);
  //   num ++
  // }

  return (
    <article>
      <h3>
        Area: {area} | Size: {size}
      </h3>
    </article>
  );
}
