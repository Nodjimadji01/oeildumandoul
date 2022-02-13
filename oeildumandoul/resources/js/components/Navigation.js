/*import React from "react";

const Navigation = () => {
    return (
        <di className= "nav">
           <nav>
               A LA UNE
           </nav>
           <nav>
               A LA UNE
           </nav>

        </di>

    );
}

export default Navigation;*/
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navigation = () => {
return (
	
	<>
	<di className= "nav">
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/events' activeStyle>
			Events
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Annual Report
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>

	</di>
	</>
);
};

export default Navigation;
