import Link from "next/link";
import { Icons } from "@/components/icons";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
       <div className="absolute top-4 left-4">
          <Link href="/" className="flex items-center justify-center gap-2 font-semibold text-lg">
            <Icons.Logo className="h-6 w-6 text-primary" />
            <span className="font-headline">BizForecast</span>
          </Link>
       </div>
      {children}
    </div>
  );
}
