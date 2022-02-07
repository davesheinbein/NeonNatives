import React from 'react';
import '../scss/header/header.css';
import Logo from '../img/neon_natives_logo.png';

function Header() {
	return (
		<div className='header_container'>
			<img className='header_logo' src={Logo} href='#' />
			<ul className='header_links_container'>
				<li className='header_links' href='#'>
					About
				</li>
				<li className='header_links' href='#'>
					Shop
				</li>
				<li className='header_links' href='#'>
					Donations
				</li>
			</ul>
		</div>
	);
}

export default Header;
