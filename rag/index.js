import fs from "fs";
import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { Pinecone } from "@pinecone-database/pinecone";
import "dotenv";
import { config } from "dotenv";
config();

const embeddings = new MistralAIEmbeddings({
    model:"mistral-embed",
    apiKey: process.env.MISTRAL_API_KEY
})

const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
})

const index = pc.index("cohort-2");

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

const results = await index.upsert({
    records: docs.map((doc, i)=> ({
        id:`doc-${i}`,
        values: doc.embedding,
        metadata:{
            text:doc.text
        }
    }))
})
 console.log(results);
 
