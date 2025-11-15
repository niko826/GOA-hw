import { Link } from "react-router";
import { useAuth } from "../../context/auth.context";

const Nav = () => {
    const { user, logout } = useAuth();

    return (
        <header>
            <nav>
                <ul className="flex gap-2">
                    <li className="text-xl text-green-700"><Link to={'/'}>Home</Link></li>
                    {
                        user ? (
                            <>
                                <li onClick={logout}>Logout</li>
                            </>
                        ) : (
                            <>
                                <li className="text-xl text-green-700"><Link to={'/login'}>Login</Link></li>
                                <li className="text-xl text-green-700"><Link to={'/register'}>Register</Link></li>
                            </>
                        )
                    }
                    
                    
                </ul>
            </nav>
        </header>
    )
}

export default Nav;