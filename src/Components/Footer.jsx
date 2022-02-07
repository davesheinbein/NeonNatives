import React from 'react';
import '../scss/footer/footer.css';

function Footer() {
	return (
		<div className='footer_container'>
			<div className='footer_links'>
				<a
					className='footer_link'
					href='https://opensea.io/collection/neonnatives'>
					<i class='fa fa-globe' aria-hidden='true'></i>
				</a>
				<div className='footer_line'>|</div>
				<a
					className='footer_link'
					href='https://www.instagram.com/neonnativesnft/'>
					<i class='fa fa-instagram' aria-hidden='true'></i>
				</a>
				<div className='footer_line'>|</div>
				<a
					className='footer_link'
					href='https://twitter.com/neonnativesnft'>
					<i class='fa fa-twitter' aria-hidden='true'></i>
				</a>
				<div className='footer_line'>|</div>
				<a
					className='footer_link'
					href='https://www.facebook.com/profile.php?id=100077929508266'>
					<i
						class='fa fa-facebook-official'
						aria-hidden='true'></i>
				</a>
			</div>
		</div>
	);
}

export default Footer;
