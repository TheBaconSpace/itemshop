import items from './items.js';
const test = QUnit.test;

QUnit.module('returns correct item html');

test('Creates item from data', assert => {
    //arrange
    const item = items[0];

    const expected = /*html*/`
        <li class="item ${item.item.rarity}">
            <img src="${item.item.images.icon}">
            <h2>${item.item.name}</h2>
            <p>${item.item.rarity} ${item.item.type}</p>
        </li>
    `;
    //act
    const result = createItem(item);

    //assert
    assert.htmlEqual(result, expected);
});

function createItem(item) {
    return /*html*/`
        <li class="item ${item.item.rarity}">
            <img src="${item.item.images.icon}">
            <h2>${item.item.name}</h2>
            <p>${item.item.rarity} ${item.item.type}</p>
        </li>
    `;
}