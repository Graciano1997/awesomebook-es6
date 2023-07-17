import { navBarListener, timeFunction } from './module/navbar.js';
import * as bookController from './module/bookOperations.js';

navBarListener();
setInterval(() => timeFunction(), 1000);
bookController.displayBook();
bookController.addBookListener();
bookController.deleteBookListener();
