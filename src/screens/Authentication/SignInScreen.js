import React, {useState, useRef, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import {SocialIcon, Button} from 'react-native-elements';

import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import {COLORS, FONTS, icons} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SignInContext} from './authContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {auth} from '../../../firebase';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
      }
    });
    return unsubcribe;
  }, []);

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        alert('Đăng nhập thành công', user.email);
      })
      .catch(error => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <Text
            style={{
              color: COLORS.headerColor,
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            ĐĂNG NHẬP
          </Text>
        </View>

        <View>
          <View style={{marginTop: 20}}>
            <View>
              <TextInput
                style={styles.TextInput1}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>

            <View style={styles.TextInput2}>
              <Animatable.View>
                <Image source={icons.lock} style={{marginRight: 10}} />
              </Animatable.View>
              <TextInput
                style={{width: '80%', fontWeight: 'bold'}}
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
              />
              <Animatable.View>
                <Image
                  source={icons.visibility_off}
                  style={{marginRight: 10}}
                />
              </Animatable.View>
            </View>
          </View>

          <View style={{marginHorizontal: 20, marginVertical: 20}}>
            <TouchableOpacity
              style={styles.styledButton}
              onPress={handleSignIn}>
              <Text style={styles.buttonTitle}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={styles.ButtonTitle}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.orderColor,
  },

  styledButton: {
    backgroundColor: '#ff8c52',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },

  text1: {
    color: COLORS.black,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
    padding: 10,
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    padding: 0,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  Button: {
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
  },

  ButtonTitle: {
    color: '#ff8c52',
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
