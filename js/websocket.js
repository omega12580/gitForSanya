import Component from './component';

class websocket extends Component {
  init() {
    this.on('');
    const socket = new WebSocket('ws://ums-honeybadger.herokuapp.com/ums');
    socket.onmessage = (event) => {
      const webObj = JSON.parse(event.data);
      this.arrProccesing(webObj);
    };
  }
  arrProccesing(webObj) {
    const city = document.querySelector('#city');
    const rangeCredit = document.querySelector('#range_credit');
    const groupId = document.querySelector('.select-dropdown', '.dropdown-trigger');
    const firstName = document.querySelector('#first_name');
    const lastName = document.querySelector('#last_name');
    const phone = document.querySelector('#phone');
    const street = document.querySelector('#street');
    const zipCode = document.querySelector('#zip_code');
    function clickOnDoc() {
      document.addEventListener('click', () => {
        if (modalAdd.classList.contains('open') === false) {
          rangeCredit.removeAttribute('disabled');
          firstName.removeAttribute('disabled');
          lastName.removeAttribute('disabled');
          street.removeAttribute('disabled');
          zipCode.removeAttribute('disabled');
          city.removeAttribute('disabled');
          phone.removeAttribute('disabled');
          groupId.removeAttribute('disabled');
        }
      });
    }
    this.emit('selectLink', webObj, document);
  }
}
export default websocket;
