import React from "react";
import "./Button.scss";

export default function Button({text, className, href, id, newTab}) {
  return (
    <div id={id} className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
