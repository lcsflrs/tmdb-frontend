"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setHidden(true);
      return;
    }

    setHidden(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed z-50 flex justify-center w-full overflow-hidden transition-all bg-brand-pink-1 h-14",
        {
          "top-0 opacity-100": !hidden,
          "-top-14 opacity-0": hidden,
        }
      )}
    >
      <ContentContainer className="flex items-center justify-center w-full h-full px-8 sm:justify-start">
        {/* render the logo-tmdb.svg in public */}
        <Link href="/" className="p-4">
          <Image
            src="/logo-tmdb.svg"
            alt="The Movie Database (TMDb)"
            width={184.74}
            height={24}
          />
        </Link>
      </ContentContainer>
    </header>
  );
};

export default Header;
