import { useState } from "react";
import "../styles/postitpeeping.css";

export const PostItPepping = () => {
  const [pepMessage, setPepMessage] = useState("Du är stark!");

  return (
    <div className="post-it-container">
      <article className="post-it-card">
        <p>{pepMessage}</p>
      </article>
    </div>
  );
};
