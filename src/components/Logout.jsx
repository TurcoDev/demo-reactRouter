

function Logout({ handleEvent }){
  return (
    <button className="sign-out" onClick={ () => handleEvent(false)}>Sign out</button>
    );
}

export default Logout;