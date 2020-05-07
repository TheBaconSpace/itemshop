import Component from '../Component.js';

class Item extends Component {
    
    render() {
        const item = this.renderDOM();
        const itemData = this.props.itemData;
        const onClick = this.props.onClick;
        
        item.addEventListener('click', () => {
            onClick(itemData);
            console.log(itemData);
        });

        return item;
    }

    renderTemplate() {
        const itemData = this.props.itemData;

        return /*html*/`
            <li class="item ${itemData.item.rarity}">
                <img src="${itemData.item.images.icon}">
                <h2>${itemData.item.name}</h2>
                <p>${itemData.item.rarity} ${itemData.item.type}</p>
            </li>
        `;
    }
}

export default Item;