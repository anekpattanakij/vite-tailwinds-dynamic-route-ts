import styles from '$style/nav.module.css';
import { Link } from 'react-router-dom';
import {MyDropdown} from '$comp/dropdown';
import Toggle from '$comp/darkMode';

const Nav = () => {
	return (
		<nav
			role="navigation"
			className="w-full max-w-screen contain-content bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200">
			<ul className="flex flex-row items-center justify-center w-screen contain-content">
				<li className={styles.navItem}>
					<Link className={styles.link} to="/">
						Home
					</Link>
				</li>
				<li className={styles.navItem}>
					<MyDropdown/>
				</li>
				<li className={styles.navItem}>
					<Link className={styles.link} to="/">
						UpComing
					</Link>
				</li>
				<li
					className="hidden  border-r border-gray-200 md:block"
					style={{ marginLeft: 'auto' }}>
					{' '}
					&nbsp;
				</li>
				<li className={styles.navItem + ' hidden lg:block'}>
					<Link className={styles.link} to="/about">
						List Your Project
					</Link>
				</li>
				<li className={styles.navItem} style={{ overflow: 'hidden' }}>
					<Link className={styles.link} to="/about">
						About
					</Link>
				</li>
				<li
					className={styles.navItem + ' hidden lg:block'}
					style={{ overflow: 'hidden' }}>
					<Link className={styles.link} to="/contactus">
						Contact Us
					</Link>
				</li>
				<li className="flex items-center px-4 py-2 pr-8 text-sm ml-full">
					<Toggle />
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
