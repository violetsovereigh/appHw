import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage, StatusBar, Image, Text } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { Facebook } from 'expo';
import Spinner from '../components/Spinner';

// Make a component
class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    error: ' ',
    loading: false,
    token: null,
    showSpinner: false,
    status: 'Not Login...'
  };
  //facebookLogin
  facebookLogin = async () => {
    console.log('Testing token....');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('Already having a token...');
      this.setState({ token });

      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.setState({ status: `Hello ${(await response.json()).name}` });
      console.log(response);

    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };
  //doFacebookLogin
  doFacebookLogin = async () => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1693821777314584',
      {
        permissions: ['public_profile'],
        behavior: 'web'
      });

    if (type === 'cancel') {
      console.log('Login Fail!!');
      return;
    }

    await AsyncStorage.setItem('fb_token', token);
    this.setState({ token });
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    this.setState({ status: `Hello ${(await response.json()).name}` });
    console.log(response);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`currentUser = ${currentUser.uid}`);
      this.props.navigation.navigate('UserStack');
    } catch (err) {

    }
  };
  //onSignIn
  onSignIn = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('UserStack');
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }
  //onCreateUser
  CreateUser = () => {
    this.props.navigation.navigate('CreateScreen');
  }
  //renderButton
  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
    } 
    return (
      <Button style={{ marginTop: 10 }}
        title='Sign in'
        backgroundColor='#4AAF4C'
        onPress={this.onSignIn}
      />
    );
  }
  
  //onCloseModal
  onCLoseModal = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }
  //View
  render() {
    return (
      <View style={{backgroundColor:"white"}}>
        <StatusBar
          barStyle="light-content"
        />

        <View style={styles.header}><Text style={{ marginTop: 10, color: "white" }}>FollowMe</Text></View>
        <View style={styles.content}>
          <Image
            style={{ marginTop: 30, width: 100, height: 100 }}
            source={{ uri: 'http://i.imgur.com/u0PAppI.png' }}
          />
          <View style={styles.formStyle}>

            <FormLabel>Email</FormLabel>
            <FormInput
              placeholder='user@email.com'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <FormLabel>PassWord</FormLabel>
            <FormInput
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='password'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            {this.renderButton()}
            <FormValidationMessage>{this.state.error}</FormValidationMessage>

            <Button
              title='Sign in with Facebook'
              backgroundColor='#39579A'
              onPress={this.facebookLogin}
            />
        <Button
              title='New User'
              backgroundColor='white'
              color='#939393'
              onPress={this.CreateUser}
            />

            
            <Spinner
          visible={this.state.showSpinner}
        />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  content: {
    alignItems: 'center',
  },
  formStyle: {
    marginTop: 20,
    width: 250,

  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#73b9c3',
    height: 65,
  },
};

export default LoginScreen;