import React, { useState, useEffect } from "react";

export default function BuildPreview(props) {
  // console.log(props);
  const { area, size, desert, woods, urban, ocean } = props;
  const [options, setOptions] = useState([]);

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
    setOptions([]);
    if (area === "" || area === 0) {
      console.log(`area is undefined`);
    } else {
      if (area === "desert") {
        if (size === "30x30") {
          setOptions(desert.fields.thirty);
        } else if (size === "60x60") {
          setOptions([...desert.fields.thirty, ...desert.fields.sixty]);
        } else if (size === "90x90") {
          setOptions([
            ...desert.fields.thirty,
            ...desert.fields.sixty,
            ...desert.fields.ninety,
          ]);
        }
      } else if (area === "woods") {
        if (size === "30x30") {
          setOptions(woods.fields.thirty);
        } else if (size === "60x60") {
          setOptions([...woods.fields.thirty, ...woods.fields.sixty]);
        } else if (size === "90x90") {
          setOptions([
            ...woods.fields.thirty,
            ...woods.fields.sixty,
            ...woods.fields.ninety,
          ]);
        }
      } else if (area === "urban") {
        if (size === "30x30") {
          setOptions(urban.fields.thirty);
        } else if (size === "60x60") {
          setOptions([...urban.fields.thirty, ...urban.fields.sixty]);
        } else if (size === "90x90") {
          setOptions([
            ...urban.fields.thirty,
            ...urban.fields.sixty,
            ...urban.fields.ninety,
          ]);
        }
      } else if (area === "ocean") {
        if (size === "30x30") {
          setOptions(ocean.fields.thirty);
        } else if (size === "60x60") {
          setOptions([...ocean.fields.thirty, ...ocean.fields.sixty]);
        } else if (size === "90x90") {
          setOptions([
            ...ocean.fields.thirty,
            ...ocean.fields.sixty,
            ...ocean.fields.ninety,
          ]);
        }
      }
    }
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
      <h4>Points of Interest Possibilities:</h4>
      <h5>
        {options.map((options) => (
          <h6>{options}</h6>
        ))}
      </h5>
    </article>
  );
}
