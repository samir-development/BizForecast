import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, BrainCircuit, LineChart, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-blue-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    BizForecast: AI-Powered Business Strategy
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Unlock your company's potential with automated SWOT analysis, core metric dashboards, and data-driven insights.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
                    <Link href="/signup">Get Started for Free</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <Image
                    src="https://placehold.co/600x400.png"
                    width="600"
                    height="400"
                    alt="Dashboard Preview"
                    data-ai-hint="business dashboard analytics"
                    className="rounded-xl shadow-2xl"
                  />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Everything You Need to Succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides powerful tools to help you understand your business landscape and make smarter decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Automated SWOT Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Leverage our GenAI to automatically generate comprehensive SWOT analyses from your company data, saving you hours of manual work.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Metrics Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Visualize your core business metrics like CAC, LTV, and growth rate in an intuitive and clean dashboard.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                   <div className="bg-primary/10 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Project Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Organize your work in projects, track their status, and keep all your analyses and data in one place.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Ready to Revolutionize Your Business Strategy?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Sign up today and start making data-driven decisions with confidence.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
                  <Link href="/signup">Get Started for Free</Link>
               </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
