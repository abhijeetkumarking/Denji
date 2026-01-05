import { Outlet, NavLink } from "react-router-dom"
import "../styles/App.css"

export default function Layout() {
  return (
    <div className="app">
      <nav className="nav">
        <NavLink to="/">Timer</NavLink>
        <NavLink to="/stats">Stats</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}
