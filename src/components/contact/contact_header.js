import React from "react";
import frame from "../../assets/Frame 2 1.png";
import { Link } from "react-router-dom";

function ContactHeader() {
  return (
    <div>
      <div className="container mx-auto">
        <nav>
          <img src={frame} alt="" />
        </nav>
      </div>
    </div>
  );
}

export default ContactHeader;
