import React, { useState, useEffect } from "react";

export default function BuildPreview(props) {
  // console.log(props);
  const { area, size, desert, woods, urban, ocean } = props;
  const [options, setOptions] = useState([]);
  let poi = [];

  useEffect(() => {
    const runSize = () => {
      if (size === "" || size === 0) {
        console.log(`size is undefined`);
      } else {
        runArea();
      }
    };
    runSize();
  }, [size, area]);

  const runArea = () => {
    poi = [];
    setOptions([]);
    if (area === "" || area === 0) {
      console.log(`area is undefined`);
    } else {
      if (area === "desert") {
        if (size === "" || size === 0) {
          console.log(`size is undefined`);
        } else {
          if (size === "30x30") {
            setOptions(desert.fields.thirty);
          } else if (size === "60x60") {
            poi = desert.fields.thirty;
            poi.push(desert.fields.sixty);
            poi = poi.flat(1);
            setOptions(poi);
            // setOptions(desert.fields.sixty);
          } else if (size === "90x90") {
            poi = desert.fields.thirty;
            poi.push(desert.fields.sixty);
            poi.push(desert.fields.ninety);
            poi = poi.flat(1);
            setOptions(poi);
            // setOptions(desert.fields.ninety);
          }
        }
      } else if (area === "woods") {
        setOptions(woods);
      } else if (area === "urban") {
        setOptions(urban);
      } else if (area === "ocean") {
        setOptions(ocean);
      }
    }
    console.log(options);
    console.log(poi);
    poi = [];
    console.log(poi);
  };
  // useEffect(() => {
  //   runArea(area);
  //   console.log(`point of interest = ${options}`);
  // }, [area]);

  return (
    <article>
      <h3>
        Area: {area} | Size: {size}
      </h3>
    </article>
  );
}
