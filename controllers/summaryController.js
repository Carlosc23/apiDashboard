const axios = require('axios');
const Client = require("../models/Client");


async function retrieveSummary(req, res, next) {

      const clientCount = await Client.estimatedDocumentCount({}).distinct('documento');
      const clientAmount = await Client.aggregate([{
        $group:{
            _id:'',
            "mnt_trx_mm":{$sum:'$mnt_trx_mm'}
        }
    }]
      );
      const clientTransaction =  await Client.aggregate([{
        $group:{
            _id:'',
            "num_trx":{$sum:'$num_trx'}
        }
    }]);
    res.json({
        clients: clientCount.length,
        amount: clientAmount[0].mnt_trx_mm,
        transaction: clientTransaction[0].num_trx
    })
 
  }


module.exports = { retrieveSummary };