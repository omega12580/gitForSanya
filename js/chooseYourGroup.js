import Component from './component';

class ChooseYourGroup extends Component {
  init() {
    this.on('groupRender', this.showGroup.bind(this));
  }
  showGroup(activebutton) {
    const allusers = document.querySelectorAll('.user');
    allusers.forEach((element) => {
      element.setAttribute('hidden', '');
      if (element.classList.contains(activebutton) === true) {
        element.removeAttribute('hidden');
      }
    });
    this.emit();
  }
}
export default ChooseYourGroup;
