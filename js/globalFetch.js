import Component from './component';

let activebutton;
class GlobalFetch extends Component {
  init() {
    this.on('arrProccesingUser', this.userrFetch.bind(this));
    this.on('arrProccesingGroup', this.grroupFetch.bind(this));
  }
  userrFetch(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.emit('userFetch', { data, activebutton }, document);
      });
  }
  grroupFetch(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.emit('groupFetch', { data, activebutton }, document);
      });
  }
}

export default GlobalFetch;
