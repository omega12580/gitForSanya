import Component from './component';

class selectLink extends Component {
  init() {
    this.on('websocket', this.arrProccesing.bind(this));
  }

  arrProccesing(webObj) {
    const actionWeb = webObj.action;
    const idWeb = webObj.id;
    const httpslinkpart = 'https://ums-honeybadger.herokuapp.com/';
    if (actionWeb === 'user:updated') {
      const url = `${httpslinkpart}user/${idWeb}`;
      this.emit('arrProccesing', url, document);
      fetchUser(url);
    } else if (actionWeb === 'group:updated') {
      const url = `${httpslinkpart}group/${idWeb}`;
      this.emit('arrProccesing', url, document);
      fetchGroup(url);
    }
  }
}

export default selectLink;
