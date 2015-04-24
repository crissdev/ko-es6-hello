'format es6';

import ko from 'knockout';
import kv from 'knockout.validation';
import sha256 from 'crypto-js/sha256';

// Register components
import * as components from './components/index';
components.register();


// Bootstrap the application
ko.applyBindings({});
