const axios = require('axios');
const Client = require("../models/Client");


async function retrieveCategoriesInfo(req, res, next) {

      const clientCount = await Client.find({"tipo_doc":1}).distinct('documento');
      const clientCount2 = await Client.find({"tipo_doc":2}).distinct('documento');
      const clientAmount = await Client.aggregate([{
        $group:{
            _id:'$categoria',
            "mnt_trx_mm":{$sum:'$mnt_trx_mm'}
        }
    }]
      );
      const clientTransaction = await Client.aggregate([{
        $group:{
            _id:'$categoria',
            "num_trx":{$sum:'$num_trx'}
        }
    }]
      );
    res.json({
        clients: [clientCount.length,clientCount2.length],
        amount: clientAmount,
        transaction: clientTransaction
    })
 
  }


module.exports = { retrieveCategoriesInfo };