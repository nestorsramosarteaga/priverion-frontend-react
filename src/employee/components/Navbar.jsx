import { useAuthStore } from "../../hooks"


export const Navbar = () => {

  const {startLogout, user} = useAuthStore();

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i className="fa-solid fa-people-group"></i>
            &nbsp;
            { user.name }
        </span>

        <button 
          className="btn btn-outline-danger"
          onClick={ startLogout }
        >
            <i className="fa-solid fa-right-from-bracket"></i>&nbsp;
            <span>Exit</span>
        </button>
    </div>
  )
}
