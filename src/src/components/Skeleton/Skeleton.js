import React from "react";
import { Skeleton } from "@mui/material";

function Skeletoncom({ variant, width, height }) {
  return <Skeleton variant={variant} width={width} height={height} />;
}

export default Skeletoncom;

// The Skeleton component supports various props to customize its appearance:

// variant: Controls the shape (e.g., "text", "circular", "rect").
// width: Sets the width of the element.
// height: Sets the height of the element.
// animation: Controls the animation style (optional).
