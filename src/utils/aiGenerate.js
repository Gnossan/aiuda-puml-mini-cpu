/**
 * Generates PlantUML code from a natural language description.
 * Currently a placeholder implementation.
 *
 * To connect to a real AI provider (e.g., OpenAI):
 * 1. Install the provider's SDK or use fetch.
 * 2. Use the API key from environment variables: import.meta.env.VITE_AI_API_KEY.
 * 3. Construct a prompt that instructs the AI to return ONLY the PlantUML code.
 */
export async function generatePlantUML(prompt) {
  console.log(`Generating PlantUML for: ${prompt}`);

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!prompt) return '';

  // In a real implementation, you would do something like:
  // const apiKey = import.meta.env.VITE_AI_API_KEY;
  // const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     model: 'gpt-4',
  //     messages: [{ role: 'user', content: `Generate PlantUML code for: ${prompt}. Return only the code.` }]
  //   })
  // });
  // const data = await response.json();
  // return data.choices[0].message.content;

  return `@startuml\n' AI Generated Diagram for: ${prompt}\nUser -> AI: Request Diagram\nAI --> User: Here is your PlantUML code!\n@enduml`;
}

/**
 * Explains a PlantUML diagram in natural language.
 * Currently a placeholder implementation.
 *
 * To connect to a real AI provider (e.g., OpenAI):
 * 1. Install the provider's SDK or use fetch.
 * 2. Use the API key from environment variables: import.meta.env.VITE_AI_API_KEY.
 * 3. Construct a prompt that instructs the AI to explain the diagram.
 */
export async function explainPlantUML(code) {
  console.log(`Explaining PlantUML code...`);

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!code) return '';

  // In a real implementation, you would do something like:
  // const apiKey = import.meta.env.VITE_AI_API_KEY;
  // const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     model: 'gpt-4',
  //     messages: [{ role: 'user', content: `Explain this PlantUML diagram in natural language: ${code}` }]
  //   })
  // });
  // const data = await response.json();
  // return data.choices[0].message.content;

  return 'This is a placeholder explanation. In a real implementation, the AI would analyze the PlantUML code and provide a detailed description of what the diagram shows, including actors, components, and flow.';
}
