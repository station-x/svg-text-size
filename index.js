const ns = 'http://www.w3.org/2000/svg';
const makeSvgNode = (name, doc) => doc.createElementNS(ns, name);

const makeTextSpanNode = (text, dy, doc) => {
  const node = doc.createTextNode(text);
  const span = makeSvgNode('tspan', doc);
  span.setAttribute('x', 0);
  span.setAttribute('y', 0);
  span.setAttribute('dy', dy);
  span.appendChild(node);
  return span;
};

const makeTextNode = (texts, attrs = {}, doc) => {
  const node = makeSvgNode('text', doc);
  node.setAttribute('x', 0);
  node.setAttribute('y', 0);
  for (let attr in attrs) { node.setAttribute(attr, attrs[attr]); }
  texts.forEach((t, i) => node.appendChild(makeTextSpanNode(t, `${i}em`, doc)));
  return node;
};

// Takes a string, or array of strings, some svg attrs, and gives you back a
// {width, height} of the resulting svg box containing the strings.
const svgTextSize = (texts, attrs, doc = document) => {
  const textArr = (texts.constructor === Array) ? texts : [texts];
  const svg = makeSvgNode('svg', doc);
  const textNode = makeTextNode(textArr, attrs, doc);
  svg.appendChild(textNode);
  doc.body.appendChild(svg);
  const {width, height} = textNode.getBBox();
  doc.body.removeChild(svg);
  return {width, height};
};

export default svgTextSize;
