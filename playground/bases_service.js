class Bases_service {
  constructor() {
    fetch('https://damithadayananda.github.io/coc_data/docs/coc_data.json')
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log('error:', error);
      });
  }
}

let c = new Bases_service();
// export function init() {
//   global.BaseService = new Bases_service();
// }
