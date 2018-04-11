import Component from './component';

class createUser extends Component {
  init() {
    this.on('document', this.createNewUser.bind(this));
  }

  createNewUser() {
    const city = document.querySelector('#city');
    const rangeCredit = document.querySelector('#range_credit');
    const firstName = document.querySelector('#first_name');
    const lastName = document.querySelector('#last_name');
    const phone = document.querySelector('#phone');
    const street = document.querySelector('#street');
    const zipCode = document.querySelector('#zip_code');
    const createButton = document.querySelector('#createButton');
    const groupId = document.querySelector('.select-dropdown', '.dropdown-trigger');
    createButton.addEventListener('click', () => {
      const allllgroups = document.querySelectorAll('.button');
      let grouppost;

      allllgroups.forEach((element) => {
        const listgroup = element.classList.item(2);
        if (`${groupId.value}s` === listgroup) {
          const mymygroup = element.classList.item(1);
          grouppost = mymygroup[5];
        }
      });

      function createNewProfile() {
        const formData = new FormData();
        formData.append('city', city.value);
        formData.append('credits', Number(rangeCredit.value));
        formData.append('group_id', Number(grouppost));
        formData.append('name', `${firstName.value}${lastName.value}`);
        formData.append('phone', phone.value);
        formData.append('street', street.value);
        formData.append('zip_code', Number(zipCode.value));
        return fetch('https://ums-honeybadger.herokuapp.com/user', {
          method: 'POST',
          body: formData,
        }).then(response => response.json());
      }

      createNewProfile()
        .then(res => res.json())
        .then(() => console.log)
        .catch(error => error);
    });
    this.emit('createNewUser', this, document);
  }
}

export default createUser;
