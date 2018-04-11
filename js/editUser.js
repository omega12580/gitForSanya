import Component from './component';

class userEdit extends Component {
  init() {
    // this.on('groupRender', this.editUser.bind(this));
    this.on('currentTr', this.editUser.bind(this));
  }

  editUser(tr) {
    const credits = tr.getAttribute('credits');
    let idgroup = tr.classList.item(0);
    const instance = M.Modal.getInstance(modal);
    instance.open();

    const city = document.querySelector('#city');
    const rangeCredit = document.querySelector('#range_credit');
    const firstName = document.querySelector('#first_name');
    const lastName = document.querySelector('#last_name');
    const phone = document.querySelector('#phone');
    const street = document.querySelector('#street');
    const zipCode = document.querySelector('#zip_code');
    const label = document.querySelectorAll('.label');
    const groupId = document.querySelector('.select-dropdown', '.dropdown-trigger');
    const createButton = document.querySelector('#createButton');
    const saveButton = document.querySelector('#saveButton');
    const addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', () => {
      firstName.value = '';
      lastName.value = '';
      city.value = '';
      phone.value = '';
      zipCode.value = '';
      street.value = '';
      groupId.value = 'Choose group';
      createButton.style.display = 'inline';
      saveButton.style.display = 'none';
    });

    for (let i = 0; i <= 4; i += 1) {
      const list = tr.getElementsByTagName('td')[i];
      const str = list.innerText;
      const res = str.split(' ');
      if (i === 0) {
        firstName.value = res[0];
        lastName.value = res[1];
      } else if (i === 1) street.value = list.innerText;
      else if (i === 2) zipCode.value = list.innerText;
      else if (i === 3) city.value = list.innerText;
      else if (i === 4) phone.value = list.innerText;
    }
    const listgroups = document.querySelectorAll('.button');
    listgroups.forEach((element) => {
      label.forEach((element2) => {
        element2.click();
      });
      const parentgroup = element.classList.item(1);
      if (parentgroup === idgroup) {
        const isAdmin = element.getAttribute('isAdmin');
        console.log(isAdmin);
        if (isAdmin === 'true') {
          rangeCredit.setAttribute('disabled', '');
        } else {
          rangeCredit.removeAttribute('disabled');
          if (credits === '0') {
            firstName.setAttribute('disabled', '');
            lastName.setAttribute('disabled', '');
            street.setAttribute('disabled', '');
            zipCode.setAttribute('disabled', '');
            city.setAttribute('disabled', '');
            phone.setAttribute('disabled', '');
            groupId.setAttribute('disabled', '');
            rangeCredit.setAttribute('disabled', '');
          } else if (credits !== '0') {
            rangeCredit.removeAttribute('disabled');
            firstName.removeAttribute('disabled');
            lastName.removeAttribute('disabled');
            street.removeAttribute('disabled');
            zipCode.removeAttribute('disabled');
            city.removeAttribute('disabled');
            phone.removeAttribute('disabled');
            groupId.removeAttribute('disabled');
          }
        }
      }
    });
    idgroup = idgroup[5];
    if (idgroup === '1') groupId.value = 'Administrator';
    else if (idgroup === '2') groupId.value = 'Merchant';
    else if (idgroup === '3') groupId.value = 'Operator';
    else if (idgroup === '4') groupId.value = 'Client';
    else if (idgroup === '5') groupId.value = 'Resellers';
    rangeCredit.value = credits;
    // EventListenerPut(tr);
    this.emit('editUser', this, document);
  }
}
export default userEdit;
