// import React, { useEffect } from "react";

// export default function HomePageSample(props) {
//   let sample = {
//     size: "",
//     type: "",
//     att: "",
//   };
//   console.log(props);
//   let examples = {
//     fields: {
//       Size: "",
//       Type: "",
//       AssignedAttributes: "",
//     },
//   };
//   let idx = props.index;

//   useEffect(() => {
//     console.log(examples);
//     examples = props.list;
//     const showExamples = () => {
//       setTimeout(() => {
//         console.log(examples);
//         console.log(idx);
//         console.log(props);
//         sample.size = props.list[idx].fields.Size;
//         sample.type = props.list[idx].fields.Type;
//         sample.att = props.list[idx].fields.AssignedAttributes;
//         return sample;
//       }, 2000);
//     };

//     showExamples();
//   }, []);
//   console.log(`when does this happen`);
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
