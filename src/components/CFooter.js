import React from "react";

// function CFooter() {
//   let date = new Date();
//   return (
//     <div>
//       <h5>
//         PPFront-end, przykladowy serwis React. Dzisiaj mamy:{" "}
//         {date.toDateString()}
//       </h5>
//     </div>
//   );
// }

// export const CFooter = () => {
//   let date = new Date();
//   return (
//     <div>
//       <h5>
//         PPFront-end, przykladowy serwis React. Dzisiaj mamy:{" "}
//         {date.toDateString()}
//       </h5>
//     </div>
//   );
// };

export const CFooter = () => {
  let date = new Date();
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h5",
      null,
      "PPFront-end, przykladowy serwis React. Dzisiaj mamy: " +
        date.toDateString()
    )
  );
};

//export default CFooter;
