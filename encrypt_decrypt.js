const CryptoJS = require("crypto-js");
var key = "6Le0DgMTAAPSAAokdEEial"; //length=22
var iv = "mHGFxENPSLbienLyANoilu"; //length=22
key = CryptoJS.enc.Base64.parse(key);
iv = CryptoJS.enc.Base64.parse(iv);

exports.encrypt = (text) => {
  var cipherData = CryptoJS.AES.encrypt(text, key, { iv: iv }).toString();
  return cipherData;
};

exports.decrypt = (text) => {
  var bytes = CryptoJS.AES.decrypt(text, key, { iv: iv });
  var decryptData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptData;
};
