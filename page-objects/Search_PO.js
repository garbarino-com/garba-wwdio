import Base_PO from './Base_PO';

class Search_PO extends Base_PO {
    get firstItem(){
        const first = $('.itemBox');
        first.waitForExist({ time:5000 })
        return first;
    }
    clickItem(){
        this.firstItem.click();
    }
}
export default new Search_PO()