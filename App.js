import React from 'react';
import { Button, Image, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Storage } from 'aws-amplify';


//import RNFetchBlob from 'react-native-fetch-blob';
/*Auth.signIn('faoziaziz', 'Azizkeren1!');
readFile(filePath) {
  return RNFetchBlob.fs.readFile(filePath, 'base64').then(data => new Buffer(data, 'base64'));
}

readFile(imagePath).then(buffer => {
  Storage.put('MYKEY', buffer, {
    contentType: 'image/jpeg'
  })
}).catch(e => {
  console.log(e);
});
*/
class App extends React.Component{
  state = {
   username: '',
   password: '',
   phone_number: '',
   email: '',
   authCode: '',
   user: {}
 }
 async signUp() {
   const { username, password, email, phone_number } = this.state
   await Auth.signUp({
     username,
     password,
     attributes: { email, phone_number }
   })
   console.log('sign up successful!')
 }
 async confirmSignUp() {
   const { username, authCode } = this.state
   await Auth.configSignignUp(username, authCode)
   console.log('confirm sign up successful!')
 }
 async signIn() {
   const { username, password  } = this.state
   const user = await Auth.signIn(username, password)
   this.setState({ user })
   console.log('sign in successful!')
 }
 async confirmSignIn() {
   const { user, authCode } = this.state
   await Auth.configSignignIn(user, authCode)
   console.log('user now successfully signed in to the app!!')
}

  render(){

    return(
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

export default withAuthenticator(App);
//export default App;
