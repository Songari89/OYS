import React from "react";
import styles from "./Login.module.css";
import useUserContext from "../context/UserProvider";
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const { user, admin } = useUserContext();
  const navigate = useNavigate();
  const handleClick = () => {navigate('/management')}

  return (
    <>
      <div className={styles.icons}>
        {admin && (
          <img
            className={styles.addproduct}
            src="/image/icons/addproduct.svg"
            alt="addproducticon"
            onClick={handleClick}
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
