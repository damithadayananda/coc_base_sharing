class Bases_service {
  constructor() {}
  async setData() {
    return new Promise((resolve, reject) => {
      fetch('https://damithadayananda.github.io/coc_data/docs/coc_data.json')
        .then(resp => {
          resp.json().then(data => {
            console.log('data:', data['home_base']['war']);
            this.coc_data = data;
            resolve(data);
          });
        })
        .catch(error => {
          console.log('error:', error);
          reject(error);
        });
    });
  }
  getHomeLayouts(townHall, category) {
    return this.coc_data['home_base'][category][townHall];
  }
  getBuilderLayouts(townHall){
    return this.coc_data['builder_base'][townHall];
  }
  getFunnyLayouts(townHall){
    return this.coc_data['funny_layout'][townHall];
  }
  getGuide(){
    return this.coc_data['guides'];
  }
}
export async function init() {
  let baseService = new Bases_service();
  await baseService.setData();
  global.BaseService = baseService;
}
