import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {HeartIcon, TriangleIcon } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <p className="text-center">
            All Copyrights &copy; {new Date().getFullYear()}{" "} are reserved by {" Refine AI"}
          </p>
        </div>

        {/* <div className="gap-4 items-center hidden md:flex">
          <FooterButtons dict={dict} />
        </div> */}
      </div>
    </footer>
  );
}

export function FooterButtons({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Link
        href="https://vercel.com/templates/next.js/documentation-template"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        {dict.footer.deploy}
      </Link>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        {dict.footer.sponsor}
      </Link>
    </>
  );
}
