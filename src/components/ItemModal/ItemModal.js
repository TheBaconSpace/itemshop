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
<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
                <div class="modal-content">
                    <h1>${item.item.name}</h1>
<title>${item.item.name}</title>
                    <h3>${item.item.rarity} ${item.item.type}</h3>
                    <img src="${item.item.images.background}">
                    <section class="cost">
                        <img src="https://fortnite-public-files.theapinetwork.com/fortnite-vbucks-icon.png">
                        <h2>${item.store.cost}</h2>

<div class="tooltip">Hover over me
  <span class="tooltiptext">${item.store.cost}</span>
</div>
                    </section>
                    <button id="close-modal">ⓧ</button>
                </div>
            </div>
        `;
    }
}

export default ItemModal;
