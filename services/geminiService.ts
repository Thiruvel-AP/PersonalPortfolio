
import { GoogleGenAI, Type } from "@google/genai";
import type { PortfolioData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const portfolioSchema = {
    type: Type.OBJECT,
    properties: {
        profile: {
            type: Type.OBJECT,
            properties: {
                name: { type: Type.STRING, description: "Full name of the person." },
                title: { type: Type.STRING, description: "Professional title, e.g., 'MSc Data Science Student'." },
                location: { type: Type.STRING, description: "City and country, e.g., 'London, UK'." },
                email: { type: Type.STRING, description: "Contact email address." },
                phone: { type: Type.STRING, description: "Contact phone number, e.g., '+1 (555) 123-4567'." },
                summary: { type: Type.STRING, description: "A brief professional summary, 2-4 sentences." },
                imageUrl: { type: Type.STRING, description: "A URL for the profile picture. Can be left empty as the user will upload it manually." },
                links: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            name: { type: Type.STRING, description: "Name of the social link, e.g., 'LinkedIn' or 'GitHub'." },
                            url: { type: Type.STRING, description: "The full URL." },
                        },
                        required: ["name", "url"],
                    },
                },
            },
            required: ["name", "title", "location", "email", "phone", "summary", "links", "imageUrl"],
        },
        experience: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    role: { type: Type.STRING, description: "Job title or role." },
                    company: { type: Type.STRING, description: "Name of the company." },
                    period: { type: Type.STRING, description: "Employment period, e.g., 'Jan 2022 - Present'." },
                    location: { type: Type.STRING, description: "Location of the company." },
                    description: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                        description: "Key responsibilities and achievements as an array of strings."
                    },
                },
                required: ["role", "company", "period", "location", "description"],
            },
        },
        education: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    degree: { type: Type.STRING, description: "Degree obtained, e.g., 'MSc in Data Science'." },
                    institution: { type: Type.STRING, description: "Name of the university or institution." },
                    period: { type: Type.STRING, description: "Period of study, e.g., 'Sep 2023 - Sep 2024'." },
                    details: { type: Type.STRING, description: "Optional details like GPA or key modules." },
                },
                required: ["degree", "institution", "period"],
            },
        },
        skills: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of technical skills, e.g., 'Python', 'React', 'SQL'."
        },
        projects: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING, description: "The name of the project." },
                    description: { type: Type.STRING, description: "A brief description of the project." },
                    technologies: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                        description: "List of technologies used."
                    },
                    link: { type: Type.STRING, description: "Optional URL to the project repository or live demo." },
                },
                required: ["name", "description", "technologies"],
            },
        },
    },
    required: ["profile", "experience", "education", "skills", "projects"],
};


export const parseResume = async (pdfBase64: string): Promise<PortfolioData> => {
    try {
        const prompt = `
            You are an expert resume parser for a professional portfolio website.
            Analyze the provided resume file and extract the information into a valid JSON object.
            Do not include any text, markdown, or formatting outside of the JSON object itself.
            Adhere strictly to the provided JSON schema.
            If a section like 'projects' is not found, return an empty array for that key.
            If a value for a field like 'imageUrl' or 'phone' cannot be found in the resume, return an empty string for it.
            Ensure all required fields in the schema are present.
        `;

        const pdfPart = {
            inlineData: {
                mimeType: 'application/pdf',
                data: pdfBase64,
            },
        };

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: { parts: [pdfPart, { text: prompt }] },
            config: {
                responseMimeType: "application/json",
                responseSchema: portfolioSchema,
            }
        });

        const jsonString = response.text;
        const parsedData = JSON.parse(jsonString);

        return parsedData as PortfolioData;

    } catch (error) {
        console.error("Error parsing resume with Gemini API:", error);
        throw new Error("Failed to parse the resume. Please ensure the PDF is valid and try again.");
    }
};