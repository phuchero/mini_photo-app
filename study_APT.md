- Use Fetch API

try {
const url = 'https://js-post-api.herokuapp.com/api/products?_limit=10&_page=1';
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON);
} catch (error) {
console.log('Failed to fetch products: ', error);
}

- Use Axious
# Install axios package
npm install --save axios

try {
    const url = 'https://js-post-api.herokuapp.com/apiproducts?_limit=10&_page=1';
    const response = await axios.get(url);
    console.log(response);
} catch (error) {
    console.log('Failed to fetch products: ', error);
}