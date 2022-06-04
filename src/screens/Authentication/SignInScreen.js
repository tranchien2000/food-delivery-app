import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  Image,
} from 'react-native';

import {SocialIcon, Button} from 'react-native-elements';

import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import {COLORS, FONTS, icons} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SignInScreen({navigation}) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInpput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View style={styles.container}>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Text
          style={{color: COLORS.headerColor, fontSize: 30, fontWeight: 'bold'}}>
          ĐĂNG NHẬP
        </Text>
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInpput1}
          />
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View>
            {/* <Icon
              name="lock-closed-outline"
              iconStyle={{color: COLORS.grey3}}
              type=""
              style={{}}
            /> */}
            <Image source={icons.lock} style={{marginRight: 10}} />
          </Animatable.View>
          <TextInput
            style={{width: '80%', fontWeight: 'bold'}}
            placeholder="Password"
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
            secureTextEntry={true}
          />
          <Animatable.View>
            {/* <Icon
              name="visibility-off"
              iconStyle={{color: COLORS.grey3}}
              type="material"
              style={{marginRight: 10}}
            /> */}
            <Image source={icons.visibility_off} style={{marginRight: 10}} />
          </Animatable.View>
        </View>
      </View>

      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <Button
          title="ĐĂNG NHẬP"
          buttonStyle={styles.styledButton}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Text style={{...styles.text1, textDecorationLine: 'underline'}}>
          Quên mật khẩu ?
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 10, marginBottom: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Đăng nhập bằng</Text>
      </View>

      <View style={{marginHorizontal: 10, marginTop: 5}}>
        <SocialIcon
          title="Đăng nhập bằng Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginHorizontal: 10, marginTop: 5}}>
        <SocialIcon
          title="Đăng nhập bằng Google"
          button
          type="google"
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{marginTop: 10, marginLeft: 20}}>
        <Text style={{...styles.text1}}>Đăng nhập lần đầu</Text>
      </View>

      <View style={{alignItems: 'flex-end', marginHorizontal: 20}}>
        <Button
          title="Đăng kí"
          buttonStyle={styles.Button}
          titleStyle={styles.ButtonTitle}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.orderColor,
  },

  styledButton: {
    backgroundColor: '#ff8c52',
    alignContent: 'center',
    justifyContent: 'center',
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
    color: COLORS.grey3,
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
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },

  ButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
