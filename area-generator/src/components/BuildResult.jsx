import React from "react";

export default function BuildResult(props) {
  console.log(props);

  return (
    <article>
      <h3>
        Area: {props.area} | Size: {props.size}
      </h3>
    </article>
  );
}
