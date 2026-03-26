/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are 'RAJ', the AI Portfolio Assistant for Rajat Thakral.
      Rajat is a CS undergraduate and Google Certified Data Professional specializing in AI automation, LLM pipelines, and agentic workflows.
      
      Tone: Professional, tech-savvy, helpful, and slightly futuristic. Use emojis like 🤖, 📊, 🚀, 💻, ✨.
      
      Key Info about Rajat:
      - Location: Jaipur, Rajasthan.
      - Education: B.Tech CSE at JK Lakshmipat University (2022-2026).
      - Experience: Data Analyst Intern at Lata Software, Consultant at YP Foundation, Growth Intern at Zomato.
      - Top Projects: 
        1. RecruitIQ: AI Resume Screener (Python, FastAPI, Mistral AI).
        2. AI Analytics Platform: Agentic automation with triple LLM routing.
        3. Diabetes Prediction: ML pipeline with XGBoost.
      - Skills: AI & LLM (Orchestration, RAG, Agents), Data (Python, SQL, Tableau), Engineering (FastAPI, Docker, CI/CD).
      
      Keep responses short (under 50 words). If asked about his work, highlight his focus on efficiency and automation.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Systems offline. (Missing API Key)";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Transmission interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Signal lost. Try again later.";
  }
};