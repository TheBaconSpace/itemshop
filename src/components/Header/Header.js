import Component from '../Component.js';

var supportcreator = ["BadCodes", "AngryBaconator", "KQM4X", "CHEFBOIMD"];
var sc = Math.floor(Math.random() * (1 + supportcreator.length - 1));
var scs = supportcreator[Math.floor(Math.random() * supportcreator.length)];
var myShows = supportcreator

function getRandomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

for (var i = 0; i < 3; i++) {
  var removedItem = myShows.splice(getRandomIndex(myShows), 1);
  document.writeln(removedItem)
}
class Header extends Component {

    renderTemplate() {
        return /*html*/`
            <header>
                <h1>FORTNITE Item Shop</h1>
                <h3>View your favorite items from in-game!</h3>
            <h3>Support Creator Code: ${myShows[Math.floor(Math.random() * myShows.length)]}</h3>
            </header>
        `;
    }
}

export default Header;