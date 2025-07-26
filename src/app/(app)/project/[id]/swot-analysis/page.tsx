import SwotGenerator from "./components/swot-generator";

export default function SwotAnalysisPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Automated SWOT Analysis</h1>
      </div>
      <p className="text-muted-foreground">
        Provide your company&apos;s data below to generate a comprehensive SWOT analysis using our powerful AI. For best results, be as detailed as possible.
      </p>
      <SwotGenerator />
    </div>
  );
}
