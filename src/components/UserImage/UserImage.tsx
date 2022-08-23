import { FC } from "react";
import { IUserAvatar } from "../../interfaces/chat.interface";
import "./UserImage.css";

const UserImage: FC<IUserAvatar> = ({ userImage, isActiveStatus }) => {
  return (
    <div className="userImage">
      <img
        className="userInfoImage"
        src={
          userImage || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
        alt="Avatar"
      />

      {isActiveStatus && (
        <img
          className="checkMarkOnlineImage"
          src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-340x340.png"
          alt="Activity status"
        />
      )}
    </div>
  );
};

export default UserImage;
