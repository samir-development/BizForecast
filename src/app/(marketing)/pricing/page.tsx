import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Find the perfect plan</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Start for free and scale as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>For individuals and small teams getting started.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-4xl font-bold mb-4">$0 <span className="text-xl font-normal text-muted-foreground">/ month</span></div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Basic SWOT Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Up to 2 projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Core Metrics Dashboard</span>
              </li>
               <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Community Support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/signup">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-primary flex flex-col shadow-lg">
           <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For growing businesses that need more power and support.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-4xl font-bold mb-4">$49 <span className="text-xl font-normal text-muted-foreground">/ month</span></div>
             <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Advanced SWOT Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Customizable Dashboards</span>
              </li>
               <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Priority Email Support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/signup">Choose Pro</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For large organizations with custom needs.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-4xl font-bold mb-4">Custom</div>
             <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>All Pro features</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>On-premise deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Dedicated Account Manager</span>
              </li>
               <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>24/7 Phone Support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/support">Contact Us</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
