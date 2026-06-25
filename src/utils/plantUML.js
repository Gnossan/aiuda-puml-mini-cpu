import plantumlEncoder from 'plantuml-encoder';

/**
 * Takes PlantUML source code and returns a URL to the rendered image.
 * @param {string} code - PlantUML source text.
 * @param {string} format - 'svg' or 'png'.
 * @returns {string} The URL for the rendered image from the official PlantUML server.
 */
export function getPlantUMLUrl(code, format = 'svg') {
  const encoded = plantumlEncoder.encode(code);
  return `http://www.plantuml.com/plantuml/${format}/${encoded}`;
}
