import { Stave, Formatter } from 'vexflow';
import initializeRender from './render';

import notes from './notes';

const drawAndFormatNotes = () => {
  const width = notes.length * 50;

  const context = initializeRender(width);
  const stave = new Stave(0, 20, width);
  stave.addClef('treble');
  stave.setContext(context).draw();

  Formatter.FormatAndDraw(context, stave, notes);
};

export default drawAndFormatNotes;
