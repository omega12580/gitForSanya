import Component from './component';

let activebutton;
class websocket extends Component {
  init() {
    this.on('putNewUser', this.arrProccesing.bind(this));
    this.on('createUser', this.arrProccesing.bind(this));
    const socket = new WebSocket('ws://ums-honeybadger.herokuapp.com/ums');
    socket.onmessage = (event) => {
      const webObj = JSON.parse(event.data);
      this.arrProccesing(webObj);
    };
  }
  arrProccesing(webObj) {
    const actionWeb = webObj.action;
    const idWeb = webObj.id;
    const httpslinkpart = 'https://ums-honeybadger.herokuapp.com/';
    if (actionWeb === 'user:updated') {
      const url = `${httpslinkpart}user/${idWeb}`;
      this.emit('arrProccesingUser', url, document);
    } else if (actionWeb === 'group:updated') {
      const url = `${httpslinkpart}group/${idWeb}`;
      this.emit('arrProccesingGroup', url, document);
    }
  }
}
export default websocket;
