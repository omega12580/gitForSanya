import Component from './component';

class renderUser extends Component {
  init() {
    this.on('userFetch', this.userRender.bind(this));
  }
  userRender({ data, activebutton }) {
    let mygroup;
    const tr = document.createElement('tr');
    const tbody = document.querySelector('#tbody');
    tbody.appendChild(tr);
    function addMerchant() {
      const inputtemplate = [
        { name: '' },
        { street: '' },
        { zipCode: '' },
        { city: '' },
        { phoneNumber: '' },
      ];
      inputtemplate[0].name = data.name;
      inputtemplate[1].street = data.street;
      inputtemplate[2].zipCode = data.zip_code;
      inputtemplate[3].city = data.city;
      inputtemplate[4].phoneNumber = data.phone;
      inputtemplate.forEach((element) => {
        tr.setAttribute('id', data.user_id);
        const td = document.createElement('td');
        for (const prop in element) {
          td.innerText = element[prop];
        }
        tr.appendChild(td);
      });
    }
    tr.setAttribute('credits', data.credits);
    tr.classList.add(`group${data.group_id}`);
    tr.classList.add('user');
    addMerchant();
    mygroup = 0;
    mygroup = `group${data.group_id}`;
    const createButton = document.querySelector('#createButton');
    const saveButton = document.querySelector('#saveButton');
    tr.addEventListener('dblclick', () => {
      createButton.style.display = 'none';
      saveButton.style.display = 'inline';
      this.emit('currentTr', tr, document);
    });
    this.emit('groupRender', { mygroup, activebutton }, document);
  }
}
export default renderUser;
