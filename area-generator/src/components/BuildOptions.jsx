import React, { useState } from "react";
import BuildPreview from "./BuildPreview.jsx";

export default function BuildOptions(props) {
  const [area, setArea] = useState("");
  const [size, setSize] = useState("");

  // console.log(props);
  return (
    <main>
      stuff and things
      <form className="selector">
        <select
          name="area-type"
          id="area-type"
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="0">Area Type</option>
          <option value="desert">Desert</option>
          <option value="woods">Woods</option>
          <option value="urban">Urban</option>
          <option value="ocean">Ocean</option>
        </select>

        <select
          name="area-size"
          id="area-size"
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="0">Size</option>
          <option value="30x30">30x30</option>
          <option value="60x60">60x60</option>
          <option value="90x90">90x90</option>
        </select>
      </form>
      <BuildPreview
        area={area}
        size={size}
        desert={props.desert}
        woods={props.woods}
        urban={props.urban}
        ocean={props.ocean}
      />
    </main>
  );
}
