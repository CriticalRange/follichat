import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-center top-0 z-50 w-full b-10 bg-black-300 border-white text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl ml-2">
        <Link href="/">
          <Image
            src="/images/follichat-logo.svg"
            alt="Follichat Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
