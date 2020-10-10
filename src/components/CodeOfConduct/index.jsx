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
          <li>Be respectful towards others.</li>
          <li>Be respectful towards others.</li>
          <li>Be respectful towards others.</li>
          <li>Be respectful towards others.</li>
          <li>Be respectful towards others.</li>
          <li>Be respectful towards others.</li>
        </ul>
      </div>
    </div>
  );
};

export default COC;
