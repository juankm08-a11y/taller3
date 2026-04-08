const speakeasy = require("speakeasy");

const secret = "MM2FWPZPGBXFMJRKOYQSK4BQHRIVW3RI";

const token = speakeasy.totp({
  secret: secret,
  encoding: "base32"
});

console.log("Token generado:", token);

const verified = speakeasy.totp.verify({
  secret: secret,
  encoding: "base32",
  token: token,
  window: 1
});

console.log("Codigo valido:", verified);
