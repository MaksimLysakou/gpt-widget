import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const getChatGPTAnswer = async (question: string, messages = [], model = 'gpt-3.5-turbo') => {
    return await openai.chat.completions.create({
        model,
        messages: [...messages, {role: 'user', content: question}],
        temperature: 0.2,
        max_tokens: 2048,
    });
};