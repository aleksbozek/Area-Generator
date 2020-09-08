import React, { useState } from "react";
import BuildResult from "./BuildResult.jsx";

export default function BuildOptions(props) {
  const [area, setArea] = useState("");
  const [size, setSize] = useState("");

  console.log(props);
  return (
    <main>
      stuff and things
      <form className="selector">
        <select
          name="area-type"
          id="area-type"
          onSelect={(e) => setArea(e.target.value)}
        >
          <option value="">Area Type</option>
          <option value="Desert">Desert</option>
          <option value="Woods">Woods</option>
          <option value="Urban">Urban</option>
          <option value="Ocean">Ocean</option>
        </select>

        <select
          name="area-size"
          id="area-size"
          onSelect={(e) => setSize(e.target.value)}
        >
          <option value="">Size</option>
          <option value="30x30">30x30</option>
          <option value="60x60">60x60</option>
          <option value="90x90">90x90</option>
        </select>
      </form>
      <BuildResult area={area} size={size} />
    </main>
  );
}
