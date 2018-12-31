import { fromEvent } from 'rxjs';
import { mergeMap, map, takeUntil, distinctUntilChanged } from 'rxjs/operators';

const html = document.querySelector('html');
html.style.height = '100%';
html.style.width = '100%';
html.style.padding = 0;
html.style.margin = 0;

const body = document.querySelector('body');
body.style.height = '100%';
body.style.width = '100%';
body.style.padding = 0;
body.style.margin = 0;

const root = document.querySelector('#root');

const button = document.createElement('a');
button.textContent = 'Button';
button.style.position = 'absolute';
button.style.display = 'inline-block';
button.style.color = 'white';
button.style.backgroundColor = 'blue';
button.style.padding = '10px';

root.appendChild(button);

const start$ = fromEvent(button, 'pointerdown');
const move$ = fromEvent(window, 'pointermove');
const end$ = fromEvent(button, 'pointerup');

let count = 0;

const drag$ = start$.pipe(
  mergeMap(() => move$.pipe(
    map(({ clientX: x, clientY: y }) => ({ x, y })),
    distinctUntilChanged(({ x: dx, y: dy }, { x, y }) => dx !== x && dy !== y),
    takeUntil(end$)
  ))
);

drag$.subscribe(({ x, y }) => {
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
  count++;
  console.log(count);
});
