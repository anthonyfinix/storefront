import './sidebar.css';
import menus from './menu';
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div id="sidebar-wrapper">
            {Object.keys(menus).map(key => <Link to={`/${key}`} className="menu-item" key={menus[key].name}>{menus[key].name}</Link>)}
        </div>
    )
}
export default Sidebar;