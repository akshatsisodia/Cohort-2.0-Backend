import "dotenv/config";
import readline from "readline/promises";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, tool, createAgent } from "langchain";
import { sendEmail } from "./mail.service";
import * as z from "zod";

const emailTool = tool(
  sendEmail,
  {
    name:"emailTool",
    description:"Use this tool to send an email",
    schema: z.object({
       to: z.string().describe("The Recepient Email address"),
       html: z.string().describe("The Html content of the Email"),
       subject: z.string().describe("The Subject of the Email"),
    })
  }
)

const agent = createAgent({
  model,
  tools:[emailTool]
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
});

const COLORS = {
  reset: "\x1b[0m",
  user: "\x1b[36m",
  ai: "\x1b[32m",
  label: "\x1b[1m",
};

const message = [];

while (true) {
  const prompt = `${COLORS.user}${COLORS.label}You:${COLORS.reset} `;
  const userInput = await rl.question(prompt);

  message.push(new HumanMessage(userInput));

  // Invoke the model
  const response = await agent.invoke({message});

  message.push(response.messages[response.messages.length-1]);

  // Print AI response styled as `AI:`
  // const aiText = response?.content ?? String(response);
  // console.log(`${COLORS.ai}${COLORS.label}AI:${COLORS.reset} ${aiText}`);

  console.log(response);
}

