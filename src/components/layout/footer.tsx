import Link from "next/link";
import { Icons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
      <div className="flex items-center gap-2">
        <Icons.Logo className="h-6 w-6 text-primary" />
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} BizForecast. All rights reserved.</p>
      </div>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="/support" className="text-xs hover:underline underline-offset-4">
          Support
        </Link>
        <Link href="/pricing" className="text-xs hover:underline underline-offset-4">
          Pricing
        </Link>
      </nav>
    </footer>
  );
}
