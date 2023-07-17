import * as variable from './variable.js';
//import { DateTime } from '../node_modules/luxon/src/luxon.js';

// const timeFunction = () => {
//   variable.date.textContent = DateTime.now().toFormat('LLL dd yyyy HH:mm:ss');
// };

const navBarListener = () => {
  variable.addLink.addEventListener('click', () => {
    document.querySelector('.list-display').classList.add('hide');
    document.querySelector('.form').classList.remove('hide');
    document.querySelector('.section-contact-info').classList.add('hide');
    variable.h1.textContent = 'Add a new book';
    variable.addLink.style.color = 'blue';
    variable.listLink.style.color = 'black';
    variable.contactLink.style.color = 'black';
  });

  variable.listLink.addEventListener('click', () => {
    document.querySelector('.list-display').classList.remove('hide');
    document.querySelector('.form').classList.add('hide');
    document.querySelector('.section-contact-info').classList.add('hide');
    variable.h1.textContent = 'All awesome books';
    variable.listLink.style.color = 'blue';
    variable.addLink.style.color = 'black';
    variable.contactLink.style.color = 'black';
  });

  variable.contactLink.addEventListener('click', () => {
    document.querySelector('.list-display').classList.add('hide');
    document.querySelector('.form').classList.add('hide');
    document.querySelector('.section-contact-info').classList.remove('hide');
    variable.h1.textContent = 'Contact information';
    variable.contactLink.style.color = 'blue';
    variable.addLink.style.color = 'black';
    variable.listLink.style.color = 'black';
  });
};

export { navBarListener };
