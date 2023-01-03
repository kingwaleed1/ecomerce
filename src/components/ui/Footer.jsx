import React from 'react';
import { useLocation } from 'react-router-dom';

import * as Route from 'constants/routes';
import logo from '../../../static/nlogo-full.png';

const Footer = () => {
	const { pathname } = useLocation();

	const hiddenFooterPaths = [
		Route.SIGNIN,
		Route.SIGNUP,
		Route.FORGOT_PASSWORD,
		Route.ACCOUNT
	];

	return hiddenFooterPaths.includes(pathname) ? null : (
		<footer className="footer">
			<div className="footer-col-1">
				<strong><span>Developed by <a href="https://www.google.com">waleed king</a></span></strong>
			</div>
			<div className="footer-col-2">
				<img className="footer-logo" src={logo} />
				<h5>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Copyright all rights reserverd</h5>
				<h5></h5>
			</div>
			<div className="footer-col-3">
				<strong>
					<span>
						Under construction &nbsp;
            <a href="https://www.king.com">HERE</a>
					</span>
				</strong>
			</div>
		</footer>
	);
};

export default Footer;
