'use server';
/**
 * @fileOverview A Genkit flow that generates an initial message draft for a personal trainer inquiry form
 * based on the client's selected objective.
 *
 * - generateInquiryDraft - A function that handles the message draft generation process.
 * - AiAssistedInquiryDraftInput - The input type for the generateInquiryDraft function.
 * - AiAssistedInquiryDraftOutput - The return type for the generateInquiryDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAssistedInquiryDraftInputSchema = z.object({
  objective: z
    .enum(['Emagrecer', 'Ganhar massa', 'Condicionamento', 'Outro'])
    .describe(
      "The client's main fitness objective (e.g., 'Emagrecer', 'Ganhar massa', 'Condicionamento', 'Outro')."
    ),
});
export type AiAssistedInquiryDraftInput = z.infer<
  typeof AiAssistedInquiryDraftInputSchema
>;

const AiAssistedInquiryDraftOutputSchema = z.object({
  draftMessage: z
    .string()
    .describe('A polite and concise initial message draft for the personal trainer.'),
});
export type AiAssistedInquiryDraftOutput = z.infer<
  typeof AiAssistedInquiryDraftOutputSchema
>;

export async function generateInquiryDraft(
  input: AiAssistedInquiryDraftInput
): Promise<AiAssistedInquiryDraftOutput> {
  return aiAssistedInquiryDraftFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAssistedInquiryDraftPrompt',
  input: {schema: AiAssistedInquiryDraftInputSchema},
  output: {schema: AiAssistedInquiryDraftOutputSchema},
  prompt: `You are an AI assistant helping a potential client draft an initial message for a personal trainer named "Fit Evolution Blumenau".

The client's main fitness objective is '{{{objective}}}'.

Write a concise, polite, and engaging initial message (in Portuguese) expressing their interest and asking for more information on how Fit Evolution Blumenau can help them achieve this specific goal. The message should be friendly and direct. If the objective is 'Outro', the message should be more general, stating they have a specific goal they'd like to discuss.

Start directly with the message content. Do not include salutations like "Olá" or closing remarks like "Atenciosamente".

Example for 'Emagrecer': "Tenho interesse em programas de emagrecimento e gostaria de saber mais sobre como a Fit Evolution Blumenau pode me ajudar a atingir meus objetivos."

Message Draft:`,
});

const aiAssistedInquiryDraftFlow = ai.defineFlow(
  {
    name: 'aiAssistedInquiryDraftFlow',
    inputSchema: AiAssistedInquiryDraftInputSchema,
    outputSchema: AiAssistedInquiryDraftOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
