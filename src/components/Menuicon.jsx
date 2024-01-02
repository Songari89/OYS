import React from 'react';
import {useLocation} from 'react-router-dom';

export default function Menuicon(path) {
  const location = useLocation()
  return (
    <>
      {path === location.pathname && <img src="/image/icons/menuicon.svg"/>}
      {console.log(location.pathname,path)}
    </>
  );
}

