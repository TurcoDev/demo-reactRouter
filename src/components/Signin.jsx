

const Signin = ({ handleEvent }) => {
  return (
    <button className="sign-in" onClick={ () => handleEvent(true) }> Sign In </button>
  )
}

export default Signin;