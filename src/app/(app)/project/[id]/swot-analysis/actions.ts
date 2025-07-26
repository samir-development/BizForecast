"use server";

import { generateSwotAnalysis, type GenerateSwotAnalysisInput, type GenerateSwotAnalysisOutput } from "@/ai/flows/generate-swot-analysis";

export async function runSwotAnalysis(
  input: GenerateSwotAnalysisInput
): Promise<GenerateSwotAnalysisOutput | { error: string }> {
  try {
    const result = await generateSwotAnalysis(input);
    return result;
  } catch (e) {
    console.error(e);
    return { error: "Failed to generate SWOT analysis. Please try again." };
  }
}
