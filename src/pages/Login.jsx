import { useState } from "react";
import Signin from "../components/SignIn";
import Logout from "../components/LogOut";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)

  if(!isLogin) return <Signin handleEvent={setIsLogin}/>

  return (<Logout handleEvent={setIsLogin}/>)
}

export default Login;