import React from "react";


export const Shimmer = () => {
  return (
    <div className="ShimmerContainer">
      {[...Array(20)].map((_, index) => (
        <div className="ShimmerCard" key={index}>
          <div className="ShimmerImage"></div>
        </div>
      ))}
    </div>
  );
};
