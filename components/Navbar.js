import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar navbarFixedTop">
      <div className="logo">
        <Image
          src={`/${'webs_logo.ico'}`}
          alt="site logo"
          width={47}
          height={47}
          blurDataURL={`/${'webs_logo.ico'}`}
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
