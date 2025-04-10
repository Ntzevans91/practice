import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <>
        <nav>
            <Link to='/'> Home </Link>|
            <Link to='/user/0000000001'> User </Link>|
            <Link to='/about'> About </Link>|
            <Link to='/notFound'> Dodge </Link>|
            <Link to='/FavColor'> FavColor </Link>|
            <Link to='/Counter'> Counter </Link>|
            <Link to='/LightTracker'> LightTracker </Link>|
            <Link to='/LightSwitch'> LightSwitch </Link>|
            <Link to='/WorldClock'> WorldClock </Link>|
            <Link to='/WeatherApp'> WeatherApp </Link>|
        </nav>
        </>
    )
}
export default NavBar