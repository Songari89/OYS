import React from "react";
import {Navigate} from 'react-router-dom';
import useUserContext from "../context/UserProvider";
import Loading from "./Loading";

export default function ProtectedRoute({children, requireAdmin}) {
  const {user, admin, loading} = useUserContext();
  if(loading){
    return <Loading/> ;
  }
  if( !user || (requireAdmin && !admin) ) {
    return <Navigate to='/' replace/>;
  }
  return children;
}
