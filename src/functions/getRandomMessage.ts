import { randomizer } from "./randomizer";
import { EmpoweringMessage } from "../types/EmpoeringMessage";

export function getRandomMessage(array: EmpoweringMessage[]) {
  array.map((message) => {
    {
      array.push({ id: message.id, message: message.message });
    }
  });
  return randomizer(array);
}
