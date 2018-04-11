import Component from './component';


class groupFetch extends Component {
  init() {
    this.on('selectLink', this.fetchGroup.bind(this));
  }

  fetchGroup(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const li = document.createElement('li');
        const groupid = document.querySelector('#groupid');
        groupid.appendChild(li);
        const inputtemplategroup = [{ group_id: '' }, { isAdmin: '' }, { name: '' }];

        function addMerchant() {
          inputtemplategroup[0].group_id = data.group_id;
          inputtemplategroup[1].isAdmin = data.isAdmin;
          inputtemplategroup[2].name = data.name;

          const a = document.createElement('a');
          const span = document.createElement('span');
          li.appendChild(a);
          li.classList.add('button');
          const id = `id${data.name}`;
          li.setAttribute('id', id);
          const href = `#/${data.name}`;
          a.setAttribute('href', href);
          a.innerText = data.name;
          a.appendChild(span);
          span.classList.add('badge');
          span.setAttribute('data-badge-caption', '');

          li.setAttribute('isAdmin', data.isAdmin);
          li.classList.add('button');
          li.classList.add(`group${data.group_id}`);
          li.classList.add(data.name);
          const optionmenu = document.querySelector('#optionmenu');
          const option = document.createElement('option');
          optionmenu.appendChild(option);
          option.innerText = data.name;
          li.addEventListener('click', () => {
            const allbuttons = document.querySelectorAll('.button');
            const title = document.querySelector('.page-title');
            title.innerText = data.name;
            allbuttons.forEach((element) => {
              element.classList.remove('active');
            });
            li.classList.add('active');
            let activebutton = 0;
            activebutton = `group${data.group_id}`;
            hideandshow(mygroup);
          });
        }
        addMerchant();
        countusers();
      })
      .catch(error => console.log(error));
    this.emit('fetchGroup', this, document);
  }
}
export default groupFetch;

