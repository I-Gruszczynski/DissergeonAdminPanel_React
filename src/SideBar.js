import './SideBar.scss';
import { MdOutlineShowChart } from 'react-icons/md';
import { MdHomeFilled } from 'react-icons/md';
import {Link} from 'react-router-dom';

const SideBar = () => {
    return ( 
        <nav className="sidebar">
            <ul>
                <li>
                    <MdHomeFilled fontSize="4em"/>
                    <Link to="/">Home</Link>    
                </li>
                <li>
                    <MdOutlineShowChart fontSize="4em"/>
                    <Link to="/stats">Stats</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default SideBar;