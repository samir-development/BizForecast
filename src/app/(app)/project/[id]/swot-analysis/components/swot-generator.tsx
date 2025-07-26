"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { runSwotAnalysis } from "../actions";
import type { GenerateSwotAnalysisOutput } from "@/ai/flows/generate-swot-analysis";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightbulb, AlertTriangle, TrendingUp, ShieldAlert, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  companyInfo: z.string().min(50, { message: "Please provide more detail about the company." }),
  financialData: z.string().min(50, { message: "Please provide more detail about the financials." }),
  marketAnalysis: z.string().min(50, { message: "Please provide more detail about the market." }),
});

type SwotResult = GenerateSwotAnalysisOutput;

export default function SwotGenerator() {
  const [result, setResult] = useState<SwotResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyInfo: "",
      financialData: "",
      marketAnalysis: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const response = await runSwotAnalysis(values);
    setIsLoading(false);

    if ("error" in response) {
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
      });
    } else {
      setResult(response);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Input Data</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="companyInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Information</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Detailed information about the company, its mission, and values." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="financialData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Financial Data</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Key financial data including revenue, profit margins, and cash flow." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketAnalysis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Market Analysis</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Overview of the market landscape, competition, and trends." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate SWOT Analysis"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Generated Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p>Analyzing data... this may take a moment.</p>
            </div>
          )}
          {result ? (
            <Accordion type="single" collapsible defaultValue="strengths" className="w-full">
              <AccordionItem value="strengths">
                <AccordionTrigger className="text-lg font-semibold text-green-600">
                  <div className="flex items-center gap-2">
                    <Lightbulb /> Strengths
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base whitespace-pre-line">{result.strengths}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="weaknesses">
                <AccordionTrigger className="text-lg font-semibold text-orange-600">
                  <div className="flex items-center gap-2">
                   <AlertTriangle /> Weaknesses
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base whitespace-pre-line">{result.weaknesses}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="opportunities">
                <AccordionTrigger className="text-lg font-semibold text-blue-600">
                  <div className="flex items-center gap-2">
                    <TrendingUp /> Opportunities
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base whitespace-pre-line">{result.opportunities}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="threats">
                <AccordionTrigger className="text-lg font-semibold text-red-600">
                  <div className="flex items-center gap-2">
                    <ShieldAlert /> Threats
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base whitespace-pre-line">{result.threats}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : !isLoading && (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <p>Your SWOT analysis will appear here.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
