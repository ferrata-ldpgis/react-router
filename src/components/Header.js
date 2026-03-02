import Link from "next/link";
import { useRouter } from "next/router"

export default function Header() {

	const { pathname } = useRouter();
	console.log(pathname);

	const apiUrl= "https://fakestoreapi.com";

	function isActive(rotta) {
		let classi = "nav-link";

		if (rotta != "/" && pathname.startsWith(rotta)) {
			classi += " active";
		} else if (rotta == pathname) {
			classi += " active";
		}

		return classi;
	}

	return <nav>
		<Link href="/" className={isActive("/")}>Home</Link>
		<br></br>
		<Link href= "/products" className={isActive("/products")}>Prodotti</Link>
		<br></br>
		<Link href="/presentation" className={isActive("/presentation")}>Chi Siamo</Link>
	</nav>
}