var password = document.getElementById("password");
function generate() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var passwordLength = document.getElementById("length").value;
  var password = "";

  var firstCharIndex = Math.floor(Math.random() * capitalLetters.length);
  password += capitalLetters.charAt(firstCharIndex);

  for (var i = 1; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomNumber);
  }
  document.getElementById("password").value = password;
}

function copybtn() {
  var copytxt = document.getElementById("password");
  copytxt.select();
  document.execCommand("copy");
  alert("password copied to clipboard");
}

function clearbtn() {
  document.getElementById("password").value = "";
}
