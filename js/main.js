import renderUser from './renderUser';
import renderGroup from './renderGroup';
import websocket from './websocket';
import userEdit from './editUser';
import putNewUser from './putNewUser';
import createUser from './createNewUser';
import UserCounter from './userCounter';
import ChooseYourGroup from './chooseYourGroup';
import GlobalFetch from './globalFetch';


renderUser.bindTo(document);
renderGroup.bindTo(document);
websocket.bindTo(document);
userEdit.bindTo(document);
putNewUser.bindTo(document);
createUser.bindTo(document);
UserCounter.bindTo(document);
ChooseYourGroup.bindTo(document);
GlobalFetch.bindTo(document);
