import fs from "fs";
import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import "dotenv";
import { config } from "dotenv";
config();

const embeddings = new MistralAIEmbeddings({
    model:"mistral-embed",
    apiKey: process.env.MISTRAL_API_KEY
})

let dataBuffer = fs.readFileSync("./story.pdf");

const parser = new PDFParse({
    data:dataBuffer
});

const data = await parser.getText()


const splitter = new RecursiveCharacterTextSplitter({
    chunkSize:500,
    chunkOverlap:0
})

const chunks = await splitter.splitText(data.text);

const docs = await Promise.all(chunks.map(async (chunk)=>{
    const embedding = await embeddings.embedQuery(chunk);
    return {
        text:chunk,
        embedding
    }
}));

console.log(docs);

