import drawAndFormatNotes from './helpers/drawer';

drawAndFormatNotes();

const noteElements = document.querySelectorAll('.vf-stavenote');
const imageElement = document.getElementById('fingering-image');

for (const index in noteElements) {
  noteElements.item(index).addEventListener('mouseenter', (event) => {
    console.log(event);
    console.log(imageElement);
  });
}
