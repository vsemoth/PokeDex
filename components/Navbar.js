import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbarFixedTop">
      <div className="logo">
        <Image
          src={`/${'download.png'}`}
          alt="site logo"
          width={47}
          height={47}
          blurDataURL={`/${'download.png'}`}
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
