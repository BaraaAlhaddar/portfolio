import "./index.scss";
import React from "react";

export default function AnimatedLetters({ lettersClass, strArray, idx }) {
  return (
    <span>
      {strArray.map((char, i) => {
        return (
          <span key={char + i} className={`${lettersClass} _${i + idx}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
}
