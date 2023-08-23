const { db } = require("../db");
const mongoose = require("mongoose");

const getOrders = async (req, res, next) => {
    const orders = db.orders;
    const products = db.inventories;
    try {
        const orderWithDescription = orders.map(orderItem => {
            const inventoryItem = products.find(product => product.sku === orderItem.item);

            if (inventoryItem) {
                return {
                    ...orderItem,
                    description: inventoryItem
                };
            } else {
                return orderItem;
            }
        });
        res.json(orderWithDescription);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = getOrders;