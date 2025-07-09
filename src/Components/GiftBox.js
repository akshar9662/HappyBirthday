import React, { useState } from "react";
import "./GiftBox.css";

export default function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gift-wrapper">
      {!isOpen ? (
        <div className="gift-box" onClick={() => setIsOpen(true)}>
          <div className="box-body">
            <div className="ribbon-horizontal"></div>
            <div className="ribbon-vertical"></div>
           
          </div>  <div className="box-lid"></div>
  <div className="open-text">🎁 Open Box</div>
</div>

      ) : (
       <div className="birthday-message">
  <h2>🎉 Hurray! Happy Birthday 🎂</h2>
  <div className="image-row">
    <img src="/images/IMG_3362.JPG" alt="Happy Birthday" className="birthday-img" />
   
  </div>
</div>

      )}
    </div>
  );
}
