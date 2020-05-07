import Component from '../Component.js';
import Header from '../Header/Header.js';
import ItemList from '../ItemList/ItemList.js';
import ItemModal from '../ItemModal/ItemModal.js';
import api from '../../services/fortnite-api.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const itemModal = new ItemModal({ clickedItem: {}, visible: false });
        main.appendChild(itemModal.render());

        let clickedItem;
        const itemList = new ItemList({ 
            data: [],
            onClick: item => {
                clickedItem = item;
                itemModal.update({ clickedItem, visible: true });
            }
        });
        main.appendChild(itemList.render());

        api.getItems() 
            .then(items => {
                const data = items.data;
                itemList.update({ data });
            });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;