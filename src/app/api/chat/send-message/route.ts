import {NextResponse} from 'next/server';
import {getChatGPTAnswer} from '@/repositories/ChatGPTRepository'
import {bodyToJson} from './utils';

export const POST = async (rawRequest: Request) => {
    try {
        const {body} = await bodyToJson(rawRequest.body) ?? {};

        const response = await getChatGPTAnswer(body.message);

        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return NextResponse.json({error});
    }
};