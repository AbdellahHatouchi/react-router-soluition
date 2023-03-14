import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="header" title="header">
            <h1 data-testid='h1'>Learn code</h1>
            <ul>
                <li>
                    <Link to={'/'}>Content</Link>
                </li>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/profile'}>Profile</Link>
                </li>
            </ul>
        </div>
    )
}