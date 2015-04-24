import ko from 'knockout';
import componentTemplate from './index.html!text';


class Hello {
  constructor(params) {
    this.message = ko.observable(params.message);
  }
}


export default {
  viewModel: Hello,
  template: componentTemplate
};
