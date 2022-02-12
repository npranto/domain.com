import Logo from './Logo';
import CartButton from '../Cart/CartButton';

export default function Nav() {
	return (
		<nav className="p-2 md:px-4 bg-white flex items-center">
			<Logo />
			<CartButton className="relative flex" />
		</nav>
	);
}
