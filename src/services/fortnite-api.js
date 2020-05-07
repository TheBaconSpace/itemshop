// import QUERY from '../QUERY.js';
const URL = 'https://cors-anywhere.herokuapp.com/https://fortnite-api.theapinetwork.com/store/get';

const api = {
    getItems() {        
        // const query = QUERY.stringify();
        const url = `${URL}`;
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '0ee82d8f772888a797e2543cca6edd15'
            }
        })
            .then(response => response.json());
    }
};

export default api;