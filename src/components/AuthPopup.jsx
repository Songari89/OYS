import React from "react";
import styles from "./AuthPopup.module.css";
import useUserContext from "../context/UserProvider";



export default function AuthPopup() {
  const {login, user} = useUserContext();

  return (
    <>
      {!user && (
        <div className={styles.authcontainer}>
          <p>로그인하고 더 많은 혜택을 받으세요!</p>
          <button onClick={login}>로그인</button>
        </div>
      )}
    </>
  );
}
