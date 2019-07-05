
import { observable, action } from 'mobx';

class TopNav{
    @observable formData = 'test';
    
    @action change = () => {
         this.formData = '123';
         console.log(this.formData)     
    }
}
export default new TopNav();