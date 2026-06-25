import React, { useState } from 'react';
import { getPlantUMLUrl } from './utils/plantUML';
import { pumlExamples } from './utils/pumlExamples';

function App() {
  const [code, setCode] = useState(pumlExamples.sequence);

  return (
    <div className="app" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Aiuda - PlantUML Renderer</h1>
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
