import Link from "next/link";
import { v4 as uuid4 } from "uuid";
import { FaTools } from "react-icons/fa"
import { IoBookSharp } from "react-icons/io5";
import { GiBarracksTent } from "react-icons/gi"
import { GiTShirt, GiFlyingFlag } from "react-icons/gi";

function HomeIconsSection() {
  const shortcuts = [
    { icon: IoBookSharp, name: "Diaries", link: "books" },
    { icon: GiTShirt, name: "Clothing", link: "/store/clothing" },
    { icon: FaTools, link: "/store/tools", name: "Tools" },
    { icon: GiBarracksTent, link: "/store/tents", name: "Tents" },
    { icon: GiFlyingFlag, link: "/store/flags", name: "Flags" }
  ];
  return (
    <section className="pt-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <nav className="flex justify-evenly">
          {shortcuts.map((shortcut) => (
            // <Link href={shortcut.link} >
            <div className="group flex w-full cursor-pointer flex-col items-center justify-evenly pb-10 text-white" key={uuid4()}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary-light p-1 group-hover:bg-secondary-dark">
                <shortcut.icon className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium">{shortcut.name}</span>
            </div>
            // </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default HomeIconsSection;
