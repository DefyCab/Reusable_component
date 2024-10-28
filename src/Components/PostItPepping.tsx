import { useState } from "react";
import "../styles/postitpeeping.css";
import data from "../fixtures/empoweringMessages.json";

type Pepp = {
  id: number;
  message: string;
};

export const PostItPepping = () => {
  const [pepMessage, setPepMessage] = useState("Du är stark!");

  const empoweringMessages: Pepp[] = [];
  data.map((message) => {
    {
      empoweringMessages.push({ id: message.id, message: message.message });
    }
  });

  function randomizer(array: Pepp[]) {
    const max = array.length - 1;
    const min = 0;
    let i = Math.floor(Math.random() * (max - min + 1)) + min;
    return array[i].message;
  }

  function getRandomMessage(array: Pepp[]) {
    return randomizer(array);
  }

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
