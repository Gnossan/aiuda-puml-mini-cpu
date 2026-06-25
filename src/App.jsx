import React, { useState } from 'react';
import { getPlantUMLUrl } from './utils/plantUML';
import { pumlExamples } from './utils/pumlExamples';
import { generatePlantUML, explainPlantUML } from './utils/aiGenerate';

function App() {
  const [code, setCode] = useState(pumlExamples.sequence);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [isExplaining, setIsExplaining] = useState(false);

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

  const handleExplain = async () => {
    if (!code) return;
    setIsExplaining(true);
    try {
      const explanationText = await explainPlantUML(code);
      setExplanation(explanationText);
    } catch (error) {
      alert('Error explaining diagram: ' + error.message);
    } finally {
      setIsExplaining(false);
    }
  };

  return (
    <div className="app" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Aiuda - PlantUML Renderer</h1>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>AI Assistant - Generate Diagram</h3>
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

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '8px' }}>
        <h3>AI Assistant - Explain Diagram</h3>
        <button onClick={handleExplain} disabled={isExplaining}>
          {isExplaining ? 'Explaining...' : 'Explain Current Diagram'}
        </button>
        {explanation && (
          <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ccc' }}>
            <strong>Explanation:</strong>
            <p>{explanation}</p>
          </div>
        )}
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
