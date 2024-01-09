import React from "react";
import styles from "./Login.module.css";
import useUserContext from "../context/UserProvider";

export default function Login() {
  const { user, admin } = useUserContext();

  return (
    <>
      <div className={styles.icons}>
        {admin && (
          <img
            className={styles.addproduct}
            src="/image/icons/addproduct.svg"
            alt="addproducticon"
          />
        )}
        {user && (
          <img
            className={styles.mypageicon}
            src="/image/icons/loginicon.svg"
            alt="loginicon"
          />
        )}
      </div>
    </>
  );
}
