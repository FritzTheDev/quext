const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageRecordSchema = new Schema({
    Username: String,
    TimeStamp: Date,
    Body: String
});

const MessageRecordModel =  mongoose.model('MessageRecordModel', MessageRecordSchema);