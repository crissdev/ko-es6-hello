import ko from 'knockout';
import component_hello from './hello/index';
import component_fork_me_ribbon from './fork-me-ribbon/index';


export function register() {
  ko.components.register('cko-hello', component_hello);
  ko.components.register('cko-fork-ribbon', component_fork_me_ribbon);
}
