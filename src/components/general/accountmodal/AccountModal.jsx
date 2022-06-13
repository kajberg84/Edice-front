import * as React from "react";

// nextjs imports
import Image from "next/image";
import { useRouter } from "next/router";

// icons
import closeIcon from "/public/icons/x-circle.svg";

// helpers
import { RoutingPath } from "../../../helpers/RoutingPath";

// context
import { UserContext } from "../../../context/UserContext";

// styles
import styles from "./AccountModal.module.scss";

//components
import { removeLocalStorage } from "../../../utils/localStorageHandler";

// todo
//  fixa in en closeIcon

export const AccountModal = ({ onCloseModal }) => {
  const { user, setUser } = React.useContext(UserContext);
  const router = useRouter();

  const userData = user?.user;

  const handleLogout = () => {
    removeLocalStorage("edice-user");
    setUser(null);
  };

  const onDeleteAccount = async () => {
    handleLogout();
    const response = await fetch(
      `https://edice-back.herokuapp.com/user/${userData.userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access_token}`,
        },
      }
    );
    router.push(`/${RoutingPath.Home}`);
  };

  return (
    <div className={styles.modal_backdrop}>
      <div className={styles.modal}>
        <div className={styles.modal_close}>
          <Image
            src="/icons/x-circle.svg"
            alt="Modal close icon"
            className={styles.modal_close_icon}
            width={40}
            height={40}
            onClick={onCloseModal}
          />
        </div>
        <p> Are you sure you want to delete your account?</p>
        <div className={styles.modal_content_container}>
          <button className="btn-primary" onClick={onDeleteAccount}>
            Yes I'm sure
          </button>
          <button className="btn-primary" onClick={onCloseModal}>
            No don't delete
          </button>
        </div>
      </div>
    </div>
  );
};
