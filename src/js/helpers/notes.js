import { StaveNote, Accidental } from 'vexflow';

const notes = [
  new StaveNote({ keys: ['f/4'], duration: 'w' }),
  new StaveNote({ keys: ['f/4'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['g/4'], duration: 'w' }),
  new StaveNote({ keys: ['g/4'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['a/4'], duration: 'w' }),
  new StaveNote({ keys: ['a/4'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['b/4'], duration: 'w' }),
  new StaveNote({ keys: ['c/5'], duration: 'w' }),
  new StaveNote({ keys: ['c/5'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['d/5'], duration: 'w' }),
  new StaveNote({ keys: ['d/5'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['e/5'], duration: 'w' }),
  new StaveNote({ keys: ['f/5'], duration: 'w' }),
  new StaveNote({ keys: ['f/5'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['g/5'], duration: 'w' }),
  new StaveNote({ keys: ['g/5'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['a/5'], duration: 'w' }),
  new StaveNote({ keys: ['a/5'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['b/5'], duration: 'w' }),
  new StaveNote({ keys: ['c/6'], duration: 'w' }),
  new StaveNote({ keys: ['c/6'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['d/6'], duration: 'w' }),
  new StaveNote({ keys: ['d/6'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['e/6'], duration: 'w' }),
  new StaveNote({ keys: ['f/6'], duration: 'w' }),
  new StaveNote({ keys: ['f/6'], duration: 'w' }).addModifier(
    new Accidental('#'),
    0
  ),
  new StaveNote({ keys: ['g/6'], duration: 'w' }),
];

export default notes;
