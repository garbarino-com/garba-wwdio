import Base_PO from './Base_PO';

class Home_PO extends Base_PO {
    open() {
        super.open('http://www.garbarino.com');
    }
    get searchInput() {
        return $('#autocomplete-input');
    }
    get searchButton(){
        const search = $('.gb-search-button > img')
        search.waitForExist({ time:5000 });
        return search;
    }
    clickBuscar(){
        this.searchButton.click();
    }
}
export default new Home_PO()