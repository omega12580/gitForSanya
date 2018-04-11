import Component from './component';

class putNewUser extends Component {
  init() {
    this.on('editUser', this.putChangedUser.bind(this));
  }

  putChangedUser(tr) {
    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', () => {
      tr.remove();
      let saveuserinvalid = 0;
      if (saveuserinvalid === 0) {
        saveuserinvalid = 1;
        const algroups = document.querySelectorAll('.button');
        let grouppost;

        algroups.forEach((element) => {
          const listgroup = element.classList.item(2);
          const groupId = document.querySelector('.select-dropdown', '.dropdown-trigger');
          if (`${groupId.value}s` === listgroup) {
            const mymygroup = element.classList.item(1);
            grouppost = mymygroup[5];
          }
        });
        let urlput = 'https://ums-honeybadger.herokuapp.com/user';
        const idmyuser = tr.getAttribute('id');
        urlput = `${urlput}/${idmyuser}`;

        const city = document.querySelector('#city');
        const rangeCredit = document.querySelector('#range_credit');
        const firstName = document.querySelector('#first_name');
        const lastName = document.querySelector('#last_name');
        const phone = document.querySelector('#phone');
        const street = document.querySelector('#street');
        const zipCode = document.querySelector('#zip_code');

        /* eslint-disable no-inner-declarations */
        function createNewProfile() {
          const formData = new FormData();
          formData.append('city', city.value);
          formData.append('credits', Number(rangeCredit.value));
          formData.append('group_id', Number(grouppost));
          formData.append('name', `${firstName.value} ${lastName.value}`);
          formData.append('phone', phone.value);
          formData.append('street', street.value);
          formData.append('zip_code', Number(zipCode.value));
          return fetch(urlput, {
            method: 'PUT',
            body: formData,
          }).then(response => response.json());
        }
        createNewProfile()
          .then(res => res.json())
          .then(() => console.log)
          .catch(error => error);
      }
    });
    this.emit('putChangedUser', this, document);
  }
}
export default putNewUser;
