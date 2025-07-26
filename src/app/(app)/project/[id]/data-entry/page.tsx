import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DataEntryPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Project Data Entry</h1>
      </div>

      <Tabs defaultValue="company-info" className="space-y-4">
        <TabsList>
          <TabsTrigger value="company-info">Company Info</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="market">Market Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="company-info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Provide core details about the company.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mission">Mission Statement</Label>
                <Textarea id="mission" placeholder="To build the best widgets in the world." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="values">Company Values</Label>
                <Textarea id="values" placeholder="Innovation, Quality, Customer First..." />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Data</CardTitle>
              <CardDescription>Enter key financial metrics for the last fiscal year.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="revenue">Total Revenue ($)</Label>
                  <Input id="revenue" type="number" placeholder="10000000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profit-margin">Profit Margin (%)</Label>
                  <Input id="profit-margin" type="number" placeholder="15" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cash-flow">Operating Cash Flow ($)</Label>
                <Input id="cash-flow" type="number" placeholder="2000000" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

         <TabsContent value="market" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Analysis</CardTitle>
              <CardDescription>Describe the market landscape.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="space-y-2">
                <Label htmlFor="market-overview">Market Overview</Label>
                <Textarea id="market-overview" placeholder="Describe the market size, growth, and key segments." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="competition">Competition</Label>
                <Textarea id="competition" placeholder="List key competitors and their market position." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="trends">Market Trends</Label>
                <Textarea id="trends" placeholder="Identify key market trends, e.g., technological changes, consumer behavior shifts." />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button>Save Data</Button>
      </div>
    </div>
  );
}
