'use server';

import { generateInquiryDraft, type AiAssistedInquiryDraftInput } from '@/ai/flows/ai-assisted-inquiry-draft-flow';

export async function generateDraftAction(
  objective: AiAssistedInquiryDraftInput['objective']
): Promise<{ draft?: string; error?: string }> {
  if (!objective || objective === 'Outro') {
    return { error: 'Por favor, selecione um objetivo para gerar uma mensagem.' };
  }

  try {
    const result = await generateInquiryDraft({ objective });
    return { draft: result.draftMessage };
  } catch (e) {
    console.error('AI Draft Generation Error:', e);
    return { error: 'Ocorreu um erro ao gerar a mensagem. Tente novamente mais tarde.' };
  }
}
