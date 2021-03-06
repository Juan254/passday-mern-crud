const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const PassdaySchema = new Schema({
  Departamento: {
    type: String,
    required: true,
  },
  Costo:{
   type: String,
   default: "0",
  },
  Ciudad: {
    type: String,
    required: true,
  },
  Actividad: {
    type: String,
    required: true,
  },
  Imagen: {
    type: String,
    required: true,
  },
  Tipo: {
    type: String,
    required: true,
  },
  Descripción: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    default: "-",

  },
  mail: {
    type: String,
    required: true,
  },
  Celular: {
    type: String,
    required: true,
  },
  NIT: {
    type: String,
    default: "-",
  },
  RNT: {
    type: String,
    default: "-"

  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Passday = mongoose.model("pasadias", PassdaySchema);
