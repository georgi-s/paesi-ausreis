import React from "react";

interface CollaborativeCursorProps {
  x: number;
  y: number;
  color: string;
  name: string;
}

const CollaborativeCursor: React.FC<CollaborativeCursorProps> = ({
  x,
  y,
  color,
  name,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      <svg
        width="24"
        height="36"
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
          fill={color}
        />
      </svg>
      <div
        style={{
          backgroundColor: color,
          color: "white",
          padding: "2px 4px",
          borderRadius: "2px",
          fontSize: "12px",
          marginTop: "4px",
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default CollaborativeCursor;
