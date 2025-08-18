import { InferenceClient } from "@huggingface/inference";
import { API_KEY } from "./API_KEY.js";
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients 
that a user has and suggests a recipe they could make with
 some or all of those ingredients. 
You don't need to use every ingredient 
 they mention in your recipe. The recipe can include additional ingredients they didn't mention, 
 but try not to include too many extra ingredients. 
 Please reply in the same language ingredients are written in.
 Format all of your response in HTML markdown to make it easier to render to a web page, don't forget to render it in user language.
`;

const hf = new InferenceClient(API_KEY);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Please give me a recipe in my language that you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });
    const incomingRecipe = response.choices[0].message.content;
    console.log(incomingRecipe);
    return incomingRecipe;
  } catch (err) {
    console.error(err.message);
  }
}
