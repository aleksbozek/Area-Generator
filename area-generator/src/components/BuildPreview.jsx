import React, { useState, useEffect } from "react";

export default function BuildPreview(props) {
  console.log(props);
  const { area, size, desert, woods, urban, ocean } = props;
  const [options, setOptions] = useState([]);
  let poi = [];

  useEffect(() => {
    const runSize = (s) => {
      if (s === 0) {
        console.log(`size is undefined`);
      } else {
        if (s === "30x30") {
          console.log(`30`);
        } else if (s === "60x60") {
          console.log(`60`);
        } else if (s === "90x90") {
          console.log(`90`);
        }
      }
    };
    runSize(size);
  }, [size]);

  useEffect(() => {
    const runArea = (a) => {
      if (a === 0) {
        console.log(`area is undefined`);
      } else {
        if (a === "desert") {
          if (size === 0) {
            console.log(`size is undefined`);
          } else {
            if (size === "30x30") {
              setOptions(desert.fields.thirty);
            } else if (size === "60x60") {
              poi = desert.fields.thirty;
              poi.push(desert.fields.sixty);
              poi = poi.flat(1);
              setOptions(poi);
            } else if (size === "90x90") {
              poi = desert.fields.thirty;
              poi.push(desert.fields.sixty);
              poi.push(desert.fields.ninety);
              poi = poi.flat(1);
              setOptions(poi);
            }
          }
          // console.log(`point of interest = ${options}`);
        } else if (a === "woods") {
          setOptions(woods);
          // console.log(`point of interest = ${options}`);
        } else if (a === "urban") {
          setOptions(urban);
          // console.log(`point of interest = ${options}`);
        } else if (a === "ocean") {
          setOptions(ocean);
          // console.log(`point of interest = ${options}`);
        }
      }
    };
    runArea(area);
    console.log(`point of interest = ${options}`);
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
