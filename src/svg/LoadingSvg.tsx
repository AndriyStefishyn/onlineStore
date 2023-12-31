import * as React from "react";
 export const LoadingSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    preserveAspectRatio="xMidYMid"
    style={{
      margin: "auto",
      background: "#fff",
      display: "flex",
      justifyContent:"center",
      alignItems: "center",
      shapeRendering: "auto",
      width:"100vw",
      height:"100vh",

    }}
    
    viewBox="0 0 100 100"
  
  >
    <circle cx={50} cy={50} r={0} fill="none" stroke="#e90c59" strokeWidth={2}>
      <animate
        attributeName="r"
        begin="0s"
        calcMode="spline"
        dur="1s"
        keySplines="0 0.2 0.8 1"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="0;40"
      />
      <animate
        attributeName="opacity"
        begin="0s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0 0.8 1"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </circle>
    <circle cx={50} cy={50} r={0} fill="none" stroke="#46dff0" strokeWidth={2}>
      <animate
        attributeName="r"
        begin="-0.5s"
        calcMode="spline"
        dur="1s"
        keySplines="0 0.2 0.8 1"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="0;40"
      />
      <animate
        attributeName="opacity"
        begin="-0.5s"
        calcMode="spline"
        dur="1s"
        keySplines="0.2 0 0.8 1"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </circle>
  </svg>
);
