import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const navLinks = [
    {
      route: "Home",
      path: "/",
    },
    {
      route: "About Us",
      path: "/",
    },
    {
      route: "ChatGPT",
      path: "/contact",
    },
    {
      route: "Consulting Services",
      path: "",
    },
  ];

  return (
    <footer className="pt-16 pb-4">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Divider className="mb-4" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1 className=" mb-2  sm:mb-0" aria-label="Keensight Analytics Logo">
              <Image
                width={200}
                height={200}
                src={"./keensight-logo.svg"}
                alt="keensight-logo"
                className="filter invert dark:filter-none dark:invert-none"
              />
            </h1>
          </Link>

          <span className="block text-sm text-muted-foreground sm:text-center ">
            <span className="container flex justify-around">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms and Conditions</Link>
            </span>
            © {new Date().getFullYear()}
          </span>

          <ul className="mb-6 flex flex-col items-start  sm:mb-0">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.path} className="mr-4 hover:underline md:mr-6">
                  {link.route}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
