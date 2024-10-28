import { ReactNode } from "react";
import "../styles/postitpeeping.css";

type Props = {
  message: ReactNode;
};

export const PostItPeppingReusable = ({ message }: Props) => {
  return (
    <div className="post-it-container">
      <article className="post-it-card">
        <p>{message}</p>
      </article>
    </div>
  );
};
