const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
 let errors = {};
// Convert empty fields to an empty string so we can use validator functions
 data.name = !isEmpty(data.name) ? data.name : "";
 data.email = !isEmpty(data.email) ? data.email : "";
 data.password = !isEmpty(data.password) ? data.password : "";
 data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Name checks
 if (Validator.isEmpty(data.name)) {
 errors.name = "El campo de nombre es obligatorio";
 }
// Email checks
 if (Validator.isEmpty(data.email)) {
 errors.email = "El campo de correo electrónico es obligatorio";
 } else if (!Validator.isEmail(data.email)) {
 errors.email = "El correo electrónico ya está en uso";
 }
// Password checks
 if (Validator.isEmpty(data.password)) {
 errors.password = "El campo de contraseña es requerido";
 }
if (Validator.isEmpty(data.password2)) {
 errors.password2 = "El campo de confirmar contraseña es requerido";
 }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
 errors.password = "La contraseña debe de contener como mínimo 6 caracteres";
 }
if (!Validator.equals(data.password, data.password2)) {
 errors.password2 = "Las contraseñas deben de coincidir";
 }
return {
 errors,
 isValid: isEmpty(errors)
 };
};