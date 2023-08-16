import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        navigate('/login');
    }
    return (
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid p-0">
                        <NavLink className="navbar-brand fw-bold" to="/home">Logo Here</NavLink>
                        <button id="navbar-toggle" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-lg-0">
                                <li className="nav-item">
                                    {/* <Link className="nav-link active" to="/home">Home</Link> */}
                                    <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/total-payments">Total Payments</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/verify-payment">Veified Payments</NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
