# Aiuda - PlantUML Editor & AI Chat

A web application for editing PlantUML diagrams with integrated AI assistance.

## Tech Stack

- **Frontend**: React 18 with Vite
  - Why: Fast development, modern tooling, and excellent DX.
- **Backend**: Node.js with Express (to be implemented)
  - Why: Lightweight, JavaScript full-stack compatibility, easy to handle API routes for AI and rendering.
- **PlantUML Rendering**: Initially using plantuml.com API or local server; will evaluate libraries like `plantuml-encoder`.
- **AI Integration**: OpenAI API or similar LLM provider for chat-assisted diagram generation.

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## AI Configuration

The AI generation feature uses a placeholder by default. To connect it to a real AI provider:
1. Create a `.env` file in the root directory.
2. Add your API key: `VITE_AI_API_KEY=your_api_key_here`.
3. Update `src/utils/aiGenerate.js` to use this key and call the desired AI API.

## Project Structure (Current Skeleton)
```
aiuda-puml-mini-cpu/
├── public/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   └── utils/
│       ├── plantUML.js
│       ├── pumlExamples.js
│       └── aiGenerate.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

Next steps: Implement editor component, AI chat interface, and PlantUML rendering pipeline.