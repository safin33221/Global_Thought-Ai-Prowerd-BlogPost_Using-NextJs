import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { prompt } = await req.json();

    if (!prompt) {
        return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // Remove "models/" prefix

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();

        return NextResponse.json({ content: text });
    } catch (error) {
        console.error("Gemini API error:", error);
        return NextResponse.json({ error: "AI processing failed" }, { status: 500 });
    }
}
