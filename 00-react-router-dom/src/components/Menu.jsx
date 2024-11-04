import {NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul> */}

            {/* Link and NavLink are same but NavLink 2 ta property niye kaz kore.. isActive and isPending... active ba pending thakle navigation er color kemon hobe eta korar jonno NavLink use kora hoy... class er moddhe isActive ba isPending true hole design kemon hobe and false hole design kemon hobe eta kora jai. ei example e arrow function er moddhe isActive true hole ki hobe and false hole ki hobe seta dekhano hoyeche */}
            {/* className={()=>} */}
            {/* className={({isActive})=>isActive?"":""} */}
            {/* className={({isActive})=>isActive?"active-item":"pending-item"} */}

            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/product/10/Laptop">Product</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/profile/iAM/Nahian">Profile</NavLink></li>
            </ul>


        </div>
    );
};

export default Menu;