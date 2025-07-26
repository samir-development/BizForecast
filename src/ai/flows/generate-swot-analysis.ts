'use server';
/**
 * @fileOverview SWOT analysis AI agent.
 *
 * - generateSwotAnalysis - A function that handles the SWOT analysis generation.
 * - GenerateSwotAnalysisInput - The input type for the generateSwotAnalysis function.
 * - GenerateSwotAnalysisOutput - The return type for the generateSwotAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSwotAnalysisInputSchema = z.object({
  companyInfo: z.string().describe('Detailed information about the company, its mission, and values.'),
  financialData: z.string().describe('Key financial data including revenue, profit margins, and cash flow.'),
  marketAnalysis: z.string().describe('Overview of the market landscape, competition, and trends.'),
});
export type GenerateSwotAnalysisInput = z.infer<typeof GenerateSwotAnalysisInputSchema>;

const GenerateSwotAnalysisOutputSchema = z.object({
  strengths: z.string().describe('A detailed list of the company’s strengths.'),
  weaknesses: z.string().describe('A detailed list of the company’s weaknesses.'),
  opportunities: z.string().describe('A detailed list of the opportunities available to the company.'),
  threats: z.string().describe('A detailed list of the threats facing the company.'),
});
export type GenerateSwotAnalysisOutput = z.infer<typeof GenerateSwotAnalysisOutputSchema>;

export async function generateSwotAnalysis(input: GenerateSwotAnalysisInput): Promise<GenerateSwotAnalysisOutput> {
  return generateSwotAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSwotAnalysisPrompt',
  input: {schema: GenerateSwotAnalysisInputSchema},
  output: {schema: GenerateSwotAnalysisOutputSchema},
  prompt: `You are a strategic business analyst tasked with generating a SWOT analysis for a company based on the data provided. Analyze the following information and provide a comprehensive SWOT analysis.

Company Information: {{{companyInfo}}}
Financial Data: {{{financialData}}}
Market Analysis: {{{marketAnalysis}}}

Based on this information, generate a SWOT analysis, clearly identifying the company's Strengths, Weaknesses, Opportunities, and Threats. Each section should be detailed and well-justified based on the provided data.

Strengths:
{{field_descriptions.strengths}}

Weaknesses:
{{field_descriptions.weaknesses}}

Opportunities:
{{field_descriptions.opportunities}}

Threats:
{{field_descriptions.threats}}`,
});

const generateSwotAnalysisFlow = ai.defineFlow(
  {
    name: 'generateSwotAnalysisFlow',
    inputSchema: GenerateSwotAnalysisInputSchema,
    outputSchema: GenerateSwotAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
