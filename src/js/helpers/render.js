import { Vex } from 'vexflow';

const initializeRender = (width) => {
  const VF = Vex.Flow;
  const div = document.getElementById('output');
  const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer.resize(width + 1, 150);

  return renderer.getContext().setFont('Arial', 10);
};

export default initializeRender;
