import Component from '../Component.js';

class ItemModal extends Component {

    render() {
        const modal = this.renderDOM();

        const closeButton = modal.querySelector('#close-modal');
        const overlay = modal.querySelector('.overlay');
        
        if(!closeButton) {
            return modal;
        }

        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        overlay.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        return modal;
    }

    renderTemplate() {
        const visible = this.props.visible;
        const item = this.props.clickedItem;
        if(!visible) {
            return '<div></div>';
        }

        return /*html*/`
            <div class="modal ${!visible ? 'hidden' : ''}">
                <div class="overlay"></div>
                <div class="modal-content">
                    <h1>${item.item.name}</h1>
                    <h3>${item.item.rarity} ${item.item.type}</h3>
                    <img src="${item.item.images.background}">
                    <section class="cost">
                        <img src="https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png">
                        <h2>${item.store.cost}</h2>
                    </section>
                    <button id="close-modal">ⓧ</button>
                </div>
            </div>
        `;
    }
}

export default ItemModal;