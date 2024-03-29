import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME, SIGNIN } from 'constants/routes';
import UserNav from 'views/account/components/UserAvatar';
import BasketToggle from '../basket/BasketToggle';
import Badge from './Badge';
import SearchBar from './SearchBar';
import FiltersToggle from './FiltersToggle';
import logo from '../../../static/logo-full.png';

const Navigation = (props) => {
	const history = useHistory();
	const { pathname } = useLocation();

	const onClickLink = (e) => {
		if (props.isAuthenticating) e.preventDefault();
	};

	return (
		<nav className="mobile-navigation">
			<div className="mobile-navigation-main">
				<div className="mobile-navigation-logo">
					<Link onClick={onClickLink} to={HOME}>
						{ <img src={logo} style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />}
						<h2></h2>
					</Link>
				</div>

				<BasketToggle>
					{({ onClickToggle }) => (
						<button
							className="button-link navigation-menu-link basket-toggle"
							onClick={onClickToggle}
							disabled={props.disabledPaths.includes(pathname)}
						>

							<Badge count={props.basketLength}>
								<i className="fa fa-shopping-bag" style={{ fontSize: '2rem' }} />
							</Badge>
						</button>
					)}
				</BasketToggle>
				<ul className="mobile-navigation-menu">
					{props.isAuth ? (
						<li className="mobile-navigation-item">
							<UserNav isAuthenticating={props.isAuthenticating} profile={props.profile} />
						</li>
					) : (
							<>
								{pathname !== SIGNIN && (
									<li className="mobile-navigation-item">
										<Link
											className="navigation-menu-link"
											onClick={onClickLink}
											to={SIGNIN}
										>
											Sign In
										</Link>
									</li>
								)}
							</>
						)}
				</ul>
			</div>
			<div className="mobile-navigation-sec">
				<SearchBar
					isLoading={props.isLoading}
					filter={props.filter}
				/>
				<FiltersToggle
					filter={props.filter}
					isLoading={props.isLoading}
					products={props.products}
					productsCount={props.productsLength}
					history={history}
				>
					<button className="button-link button-small">
						<i className="fa fa-filter" />
					</button>
				</FiltersToggle>
			</div>
		</nav>
	);
}

Navigation.propType = {
	path: PropTypes.string.isRequired,
	disabledPaths: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Navigation;
