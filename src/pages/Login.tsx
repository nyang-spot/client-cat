import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navi = useNavigate();
  return (
    <div>
      <div>login page</div>
      <button onClick={()=> navi('/main')} >go to main</button>
    </div>
  )
}

export default LoginPage;