import { useState } from "react";

export const PostItPepping = () => {
  const [pepMessage, setPepMessage] = useState("");

  return (
    <div className="post-it-container">
      <article className="post-it-card">
        <p>{pepMessage}</p>
      </article>
    </div>
  );
};
