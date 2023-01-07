const groceries = {
    'Orange Juice': {
        price: 1.5,
        discount: 10,
    },
    Chocolate: {
        price: 2,
        discount: 0,
    },
};

const shoppingBag = [
    {
        product: 'Chocolate',
        quantity: 3,
    },
    {
        product: 'Orange Juice',
        quantity: 23,
    },
];

const getTotalPriceOfShoppingBag = (shoppingBag) => {
    return (
        shoppingBag.reduce((acc, item) => {
            const { product: productName, quantity: productQuantity } = item;
            const { price: productPrice, discount: productDiscount } =
                groceries[productName];
            const productPriceWithDiscount =
                productPrice - (productPrice * productDiscount) / 100;
            const totalProductPrice =
                productQuantity * productPriceWithDiscount;

            return acc + totalProductPrice;
        }, 0) || 0
    );
};

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice);
