import { FC } from "react";
import { IUserAvatar } from "../../interfaces/chat.interface";
import avatar from "../../assets/images/avatar.png";
import activityStatus from "../../assets/images/activityStatus.png";
import "./UserImage.css";

const UserImage: FC<IUserAvatar> = ({ userImage, isActiveStatus }) => {
  return (
    <div className="userImage">
      <img className="userInfoImage" src={userImage || avatar} alt="Avatar" />

      {isActiveStatus && (
        <img
          className="checkMarkOnlineImage"
          src={activityStatus}
          alt="Activity status"
        />
      )}
    </div>
  );
};

export default UserImage;
