import userFetch from './fetchUser';
import groupFetch from './fetchGroup';
import websocket from './websocket';
import selectLink from './selectLink';
import userEdit from './editUser';
import putNewUser from './putNewUser';
import createUser from './createNewUser';

userFetch.bindTo(document);
groupFetch.bindTo(document);
websocket.bindTo(document);
selectLink.bindTo(document);
userEdit.bindTo(document);
putNewUser.bindTo(document);
createUser.bindTo(document);

let valuegroupmenu;
let numeratorusers = 0;
let currentTr;
let actionUserEditing;

const createButton = document.querySelector('#createButton');

const addButton = document.querySelector('#addButton');


createButton.style.display = 'inline';
saveButton.style.display = 'none';

const inputtemplate = [
  { name: '' },
  { street: '' },
  { zipCode: '' },
  { city: '' },
  { phoneNumber: '' },
];

const groupid = document.querySelector('#groupid');

addButton.addEventListener('click', () => {
  first_name.value = '';
  last_name.value = '';
  city.value = '';
  phone.value = '';
  zip_code.value = '';
  street.value = '';
  group_id.value = 'Choose group';
  createButton.style.display = 'inline';
  saveButton.style.display = 'none';
});

function hideandshow(mygroup) {
  let allusers = document.querySelectorAll('.user');

  allusers.forEach(function(element) {
    element.setAttribute('hidden', 'true');

    if (element.classList.contains(activebutton) === true) {
      element.removeAttribute('hidden');
    }
  });
}

function countusers() {
  let alllgroups = document.querySelectorAll('.button');
  let alllusers = document.querySelectorAll('.user');
  alllgroups.forEach(function(element) {
    let actiongroup = element.classList.item(1);
    let span2 = element.querySelector('.badge');
    alllusers.forEach(function(element2) {
      let actionusergroup = element2.classList.item(0);
      if (actiongroup === actionusergroup) {
        numeratorusers++;
      }
    });
    span2.innerText = numeratorusers;
    numeratorusers = 0;
  });
}

