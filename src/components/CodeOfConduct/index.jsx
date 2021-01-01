import React from "react";
import { ContactHeading } from "../Contact/ContactElements";

const COC = () => {
  return (
    <div className="coc" id="coc">
      <div>
        <ContactHeading>Code Of Conduct</ContactHeading>
      </div>
      <div className="coc-main">
        <img src={require("../../images/community.svg")} alt="code-of-conduct" />
        <ul>
          <li>Be respectful towards others.</li>
          <li>Be friendly and welcoming</li>
          <li>Be thoughtful.</li>
          <li>Avoid destructive behavior.</li>
          <li>Be mindful of your language.</li>
          <li>NO any other kinds of harassment.</li>
        </ul>
      </div>
    </div>
  );
};

export default COC;
