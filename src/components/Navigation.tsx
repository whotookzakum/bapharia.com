import './navigation.scss';

function Navigation() {
    return(
        <nav>
            <br /><br />
            <h4>Interactive</h4>
            <ul>
                <li>Imagine</li>
                <li>Weapons</li>
                <li>World Map</li>
                <li>Classes</li>
                <li>Dungeons</li>
                <li>Options</li>
            </ul><br />
            
            <h4>Other</h4>
            <ul>
                <li className="active">Guides</li>
                <li>About</li>
            </ul>
        </nav>
    );
}

export default Navigation;