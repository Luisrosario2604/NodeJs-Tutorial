const admin = require("firebase-admin");

const serviceAccount = require("./ PATH OF THE KEY.JSON");

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://NAME-OF-YOUR-DATABASE.com"
});

console.log(firebaseApp);
