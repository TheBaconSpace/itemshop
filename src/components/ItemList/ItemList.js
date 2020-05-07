import Component from '../Component.js';
import Item from '../Item/Item.js';

class ItemList extends Component {

    render() {
        const list = this.renderDOM();

        const items = this.props.data;
        const onClick = this.props.onClick;

        items.forEach(itemData => {
            const listItem = new Item({ itemData, onClick });

            list.appendChild(listItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul id="item-list">
            </ul>
        `;
    }
}

export default ItemList;