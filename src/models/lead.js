const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    created_at:{
      type: Date,
      default: Date.now,  
    },
});

module.exports = mongoose.model('Lead', LeadSchema);