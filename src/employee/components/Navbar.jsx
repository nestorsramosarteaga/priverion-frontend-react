

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i class="fa-solid fa-people-group"></i>
            &nbsp;
            Username
        </span>

        <button className="btn btn-outline-danger">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Exit</span>
        </button>
    </div>
  )
}
