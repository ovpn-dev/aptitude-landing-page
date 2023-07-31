import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge';

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export async function POST(request) {
    
    const { messages } = await request.json();

    // create chat completion (get response from chat gpt)
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            { role: "system", content: "you are a helpful assistant"},
            ...messages
        ]
    })

    // create a stream of data from open ai (stream data to frontend)
    const stream = await OpenAIStream(response)

    // send the stream as a response to our client / front end
    return new StreamingTextResponse(stream)
}