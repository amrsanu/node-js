const mongoose = require('mongoose');

const schema = mongoose.Schema;

const orderSchema = new schema({
    products: [{
        productData: {type: Object, required: true},
        quantity: {type: Number, required: true}
    }],
    user: {
        name: {type: String, required: true},
        userId: {type: schema.Types.ObjectId, required: true}
    }
})


module.exports = mongoose.model('Order', orderSchema);