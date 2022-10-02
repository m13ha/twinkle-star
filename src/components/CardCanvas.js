// import { Stage, Layer, Circle } from "react-konva";
// import { useEffect, useRef, useState, createRef } from "react";

// const CardCanvas = ({ width }) => {
//   const cephidRef = useRef();

//   useEffect(() => {
//     cepheidVariable();
//   }, []);

//   const cepheidVariable = () => {
//     let animate = () => {
//       cephidRef.current?.to({
//         scaleX: 2,
//         scaleY: 2,
//         duration: 2,
//         onFinish: () => {
//           cephidRef.current?.to({
//             scaleX: 1,
//             scaleY: 1,
//             duration: 2,
//           });
//         },
//       });
//     };

//     let intervalId = setInterval(() => {
//       animate();
//     }, 3100);

//     return () => clearInterval(intervalId);
//   };

//   return (
//     <Stage className="" width={width} height={250}>
//       {!isNaN(width) && (
//         <Layer>
//           <Circle
//             x={width / 2 - 10}
//             y={250 / 2 - 10}
//             radius={20}
//             fill={"#00f"}
//             shadowBlur={15}
//             shadowOpacity={0.5}
//             shadowColor={"#00c"}
//             ref={cephidRef}
//           />
//         </Layer>
//       )}
//     </Stage>
//   );
// };

// export default CardCanvas;
