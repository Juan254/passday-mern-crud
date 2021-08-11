const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PassdaySchema = new Schema({
 title: {
 type: String,
 required: true
 },
 region: {
 type: String,
 required: true
 },
 img: {
    type: String,
 required: true
 },
 desc: {
 type: String,
 required: true
 },
 date: {
 type: Date,
 default: Date.now
 }
});
module.exports = Passday = mongoose.model("passdays", PassdaySchema);