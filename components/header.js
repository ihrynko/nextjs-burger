import Link from "next/link";
import { GiHamburger } from "react-icons/si";

const Header = (
  <header>
    <div>
      <GiHamburger />
    </div>
    <nav>
      <a href="/">Home</a>
      <Link href="/about">
        <a>About us</a>
      </Link>
      <Link href="/reviews">
        <a>Reviews</a>
      </Link>
      <Link href="/burgers">
        <a>Burgers</a>
      </Link>
    </nav>
  </header>
);

export default Header;
