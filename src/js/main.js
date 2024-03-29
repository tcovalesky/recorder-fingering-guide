import { Stave, Formatter } from 'vexflow';
import initializeRender from './helpers/render';
import notes from './helpers/notes';

const width = notes.length * 50;

const context = initializeRender(width);

const stave = new Stave(0, 20, width);
stave.addClef('treble');
stave.setContext(context).draw();

Formatter.FormatAndDraw(context, stave, notes);

const noteElements = document.querySelectorAll('.vf-stavenote');
const imageElement = document.getElementById('fingering-image');

for (const index in noteElements) {
  noteElements.item(index).addEventListener('mouseenter', (event) => {
    console.log(event);
    console.log(imageElement);
  });
}
