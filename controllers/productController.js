const { db } = require("../db");

const getAllProduct = (req, res) => {
  if(req.query.key1){
    const lowQuantity = parseInt(req.query.key1);
    const products = db.inventories.filter(product => product.instock < lowQuantity);
    res.send(products); 
  }
  else{
    res.send(db.inventories);
  }
  
};

module.exports = getAllProduct;