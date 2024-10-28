import { EmpoweringMessage } from "../types/EmpoeringMessage";

export function randomizer(array: EmpoweringMessage[]) {
  const max = array.length - 1;
  const min = 0;
  let i = Math.floor(Math.random() * (max - min + 1)) + min;
  return array[i].message;
}
