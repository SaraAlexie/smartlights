import { Outlet } from "react-router-dom";
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div className="app">
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
 
export default Layout;

/**
<header>
    <nav>
        <Link to="/">Control Panel</Link>
        <Link to="/room/bedroom">Room</Link>
    </nav>
</header>
 */