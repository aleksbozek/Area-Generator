// import React, { useEffect } from "react";

// export default function HomePageSample(props) {
//   let sample = {
//     size: "",
//     type: "",
//     att: "",
//   };
//   let examples = props.list;

//   useEffect(() => {
//     console.log(examples);

//     function getRandom() {
//       const index = Math.floor(Math.random() * props.list.length);
//       console.log(examples);
//       return index;
//     }

//     const showExamples = async () => {
//       setTimeout(() => {
//         const index = getRandom();
//         console.log(examples);
//         console.log(index);
//         sample.size = examples[index].fields.Size;
//         sample.type = props.list[index].fields.Type;
//         sample.att = props.list[index].fields.AssignedAttributes;
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
//       <h5>{sample.type}</h5>
//       <h4>Size: </h4>
//       <h5>{sample.size}</h5>
//       <h4>Points Of Interest: </h4>
//       <h6>{sample.att}</h6>
//     </div>
//   );
// }
