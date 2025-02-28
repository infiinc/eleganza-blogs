import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center px-2 sm:py-8 py-12">
      {/* Brand Logo or Tagline */}
      <h1 className="text-[2.4rem] leading-10 sm:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        Elevate Your Bathroom Experience with Eleganza
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground text-left sm:text-center">
        Discover a premium selection of <b>luxurious bathroom accessories</b> that combine 
        <b>style, elegance, and functionality</b>. From modern fixtures to timeless essentials, 
        Eleganza transforms your space into a <b>sanctuary of comfort</b>.
      </p>

      {/* CTA Buttons */}
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm:gap-5 gap-3 mb-8">
        <Link
          href="https://eleganza.net.in/"
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Explore Products
        </Link>
        <Link
          href="/blog#blogs"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
      </div>

      {/* Featured Promo (Optional) */}
      <span className="sm:flex hidden flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-9 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium border rounded-full p-2.5 px-5 bg-muted/55">
        Upgrade your bathroom with <b>exclusive discounts</b> on our latest arrivals!
      </span>
    </div>
  );
}
