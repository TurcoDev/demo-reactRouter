import { Outlet  } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Bienvenido al dashboard</h1>
      <p>React router dom</p>
      <hr />
      < Outlet/>
    </div>
  )
}

export default Dashboard;