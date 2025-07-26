"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MarketingHeader() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center gap-2 font-semibold">
        <Icons.Logo className="h-6 w-6 text-primary" />
        <span className="text-xl font-headline">BizForecast</span>
      </Link>
      <nav className="ml-auto hidden gap-4 sm:gap-6 md:flex">
        <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
          Pricing
        </Link>
        <Link href="/support" className="text-sm font-medium hover:underline underline-offset-4">
          Support
        </Link>
        <Button variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </nav>
      <div className="md:hidden ml-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-4">
              <Link href="/" className="flex items-center justify-center gap-2 font-semibold mb-4">
                <Icons.Logo className="h-6 w-6 text-primary" />
                <span className="text-xl font-headline">BizForecast</span>
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">
                Pricing
              </Link>
              <Link href="/support" className="text-sm font-medium hover:underline underline-offset-4">
                Support
              </Link>
              <hr className="my-2" />
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
