import Image from "next/image";
import Link from "next/link";

const Header = ({...props}) => {
  const { logo, navItems } = props;

  return (
    <header className="w-full h-26 fixed">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-6">
          <div>
            <Link href="/">
              <Image
                alt="Dippys Logo"
                className="aspect-video overflow-hidden object-cover"
                height="50"
                width="100"
                src={logo}
                priority
              />
            </Link>
          </div>
          <nav>
            <div className="flex flex-row justify-end">
              {navItems.map((item) => 
                <div key={item.url} className="mx-2">
                  <Link href={`/${item.url}`}>
                    {item.label}
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;