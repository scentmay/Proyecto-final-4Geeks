import { Link } from 'react-router-dom'
import React from 'react'
import '../../styles/adminSideBar.css'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/admin-home"><button className="btn" style={{width:"110px"}}>Socios</button></Link>
                </li>
                <li>
                    <Link to="/admin-cuotas"><button className="btn" style={{width:"110px"}}>Cuotas</button></Link>
                </li>
                <li>
                    <Link to="/admin-newadmin"><button className="btn" style={{width:"110px"}}>New Admin</button></Link>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;