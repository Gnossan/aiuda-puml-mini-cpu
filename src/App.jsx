import React, { useState } from 'react';
import { getPlantUMLUrl } from './utils/plantUML';
import { pumlExamples } from './utils/pumlExamples';
import { generatePlantUML } from './utils/aiGenerate';

function App() {
  const [code, setCode] = useState(pumlExamples.sequence);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      const generatedCode = await generatePlantUML(prompt);
      setCode(generatedCode);
    } catch (error) {
      alert('Error generating diagram: ' + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="app" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Aiuda - PlantUML Renderer</h1>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>AI Assistant</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your diagram (e.g. 'A sequence diagram for a login flow')"
            style={{ flex: 1, padding: '10px', fontSize: '16px' }}
          />
          <button onClick={handleGenerate} disabled={isGenerating}>
            {isGenerating ? 'Generating...' : 'Generate Diagram'}
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Editor</h3>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
              width: '100%',
              height: '300px',
              marginBottom: '10px',
              fontFamily: 'monospace',
              padding: '10px'
            }}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setCode(pumlExamples.sequence)}>Sequence</button>
            <button onClick={() => setCode(pumlExamples.class)}>Class</button>
            <button onClick={() => setCode(pumlExamples.usecase)}>Use Case</button>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Rendered Image</h3>
          <img
            src={getPlantUMLUrl(code)}
            alt="PlantUML Diagram"
            style={{ maxWidth: '100%', border: '1px solid #ccc' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
