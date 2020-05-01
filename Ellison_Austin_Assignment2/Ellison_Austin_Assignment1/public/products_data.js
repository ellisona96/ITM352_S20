//product array with product data and images
products = [
    {
        "product": "Stickers",
        "price": 5.00,
        "image": "dogSticker.jpg"
    },
    {
        "product": "8x8 Framed Print",
        "price": 15.00,
        "image": "dogPrint.jpg"
    },
    {
        "product": "18x24 Wall Poster",
        "price": 25.00,
        "image": "dogPoster.jpg"
    },
    {
        "product": "Life-size Cutout",
        "price": 20.00,
        "image": "Cutout.jpg"
    },
    {
        "product": "Flag",
        "price": 30.00,
        "image": "Flag.jpg"
    }
];

if (typeof module != 'undefined') {
    module.exports.products = products;
}

