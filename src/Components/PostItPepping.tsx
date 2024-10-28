import { useState } from "react";
import "../styles/postitpeeping.css";
import empoweringMessages from "../fixtures/empoweringMessages.json";
import { getRandomMessage } from "../functions/getRandomMessage";

export const PostItPepping = () => {
  const [pepMessage, setPepMessage] = useState("Du är stark!");

  function handleClick() {
    const newPeppmessage = getRandomMessage(empoweringMessages);
    if (newPeppmessage === pepMessage) {
      setPepMessage("You are ready for success!");
    } else {
      setPepMessage(newPeppmessage);
    }
  }

  return (
    <div className="post-it-container">
      <article onClick={handleClick} className="post-it-card">
        <p>{pepMessage}</p>
      </article>
    </div>
  );
};
