import { useState } from "react";
import Container from "../../../layouts/Container";
import Button from "../../../components/ui/Button";
import { navigation } from "../../../content/navigation";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <Container>
          <nav className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="text-xl font-bold tracking-wide text-white transition hover:text-blue-400"
            >
              Karan Onkar
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <li key={item.id}>
                  <NavLink href={item.href}>{item.title}</NavLink>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* Resume Button */}
              <div className="hidden lg:block">
                <Button>Resume ↗</Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 lg:hidden"
              >
                ☰
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
