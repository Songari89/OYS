import React from "react";
import styles from "./Mypage.module.css";
import useUserContext from "../context/UserProvider";
import Loading from "./Loading";

export default function Mypage() {
  const { logout } = useUserContext();

  return <><button onClick={logout}>logout</button></>;
}
