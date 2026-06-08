import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export function getAgentModel() {

const provider = createOpenRouter({apiKey:process.env.openrouter_api_key});

const modelId = process.env.openrouter_default_model !;

return provider(modelId);

}