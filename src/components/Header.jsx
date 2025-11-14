import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
    const { theme, toggle } = useTheme();

    return (
        <header className="Header">
            <h1>Redux Blog</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">Post</Link></li>
                    <li>
                        <button onClick={toggle}>
                            {theme === 'dark' ? '🌙' : '☀️'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
