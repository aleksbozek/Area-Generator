// import React, { useEffect } from "react";

// export default function HomePageSample(props) {
//   console.log(props);
//   let list = props.list;
//   let idx = props.index;
//   let sample = {
//     type: "",
//     size: "",
//     att: "",
//   };
//   useEffect(() => {
//     console.log(idx);
//     gen();
//   }, [list]);

//   const gen = () => {
//     sample.type = list[idx].fields.Type;
//   };
//   return (
//     <div>
//       <h2>Sample From Gallery</h2>
//       <h4>Type: </h4>
//       {/* <h5>{sample.type}</h5> */}
//       <h4>Size: </h4>
//       {/* <h5>{sample.size}</h5> */}
//       <h4>Points Of Interest: </h4>
//       {/* <h6>{sample.att}</h6> */}
//     </div>
//   );
// }
