import { ReactNode } from "react";

type Props = {
  message: ReactNode;
};

export const PostIt = ({ message }: Props) => {
  return (
    <div className="post-it-container">
      <article
        className="post-it-card"
        style={{
          border: "0.1rem solid slategray",
          boxShadow: "5px 5px 4px 2px rgba(1, 1, 38, 0.198)",
          width: "25rem",
          height: "30rem",
          backgroundColor: "lightgoldenrodyellow",
          fontSize: "4rem",
          display: "block",
          padding: "0.5rem",
          textAlign: "center",
          borderRadius: "2px",
          fontFamily: "'Reenie Beanie', cursive",
          fontWeight: 400,
          fontStyle: "normal",
        }}
      >
        <p>{message}</p>
      </article>
    </div>
  );
};
