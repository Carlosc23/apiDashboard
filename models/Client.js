const mongoose = require('mongoose');
let clientSchema = new mongoose.Schema({
  documento:{
      type: Number
  },
  tipo_doc:{
      type: Number
  },
  categoria:{
      type: String
  },
  mnt_trx_mm:{
      type:Number
  },
  num_trx:{
      type: Number,
  },
  pct_mnt_tot:{
      type: Number
  },
  pct_num_trx_tot:{
      type: Number
  },
  

});
const collectionName = 'clients';
const Client = mongoose.model('clients',clientSchema,collectionName);

module.exports = Client;
