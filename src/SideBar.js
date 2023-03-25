import './SideBar.scss';
import { MdOutlineShowChart } from 'react-icons/md';
import { MdHomeFilled } from 'react-icons/md';
import { MdCampaign } from "react-icons/md";
import {Link} from 'react-router-dom';

const SideBar = () => {
    return ( 
        <nav className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                    <MdHomeFilled fontSize="4em"/>
                    Home
                    </Link>    
                </li>
                <li>
                    <Link to="/stats">
                    <MdOutlineShowChart fontSize="4em"/>
                    Stats
                    </Link>
                </li>
                <li>
                    <Link to="/tutorial">
                    <MdCampaign fontSize="4em"/>
                    Tutorial
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default SideBar;