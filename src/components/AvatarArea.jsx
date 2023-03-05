import React from "react";
import avatarImg from "../assets/images/image-avatar.png";

function AvatarArea() {
  return (
    <div className="avatar-area">
      <img src={avatarImg} alt="avatar" className="avatar-img" />
    </div>
  );
}

export default AvatarArea;
