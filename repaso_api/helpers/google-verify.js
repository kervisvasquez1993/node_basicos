const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_ID_CLIENT);
const googleVerify = async (idToken = '') =>  {
  const token = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLE_ID_CLIENT,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const {name, picture : img, email} = token.getPayload();
  return {
      name,
      img,
      email
  }
}


module.exports = {googleVerify}