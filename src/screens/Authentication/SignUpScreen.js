import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import {Icon, Button} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {COLORS, SIZES, FONTS, icons} from '../../constants';
import Header from './Header';

const initialValues = {
  phone_number: '',
  name: '',
  password: '',
  email: '',
  username: '',
};

export default function SignUpScreen({navigation}) {
  const [passwordFocussed, setPassordFocussed] = useState(false);
  const [passwordBlured, setPasswordBlured] = useState(false);

  async function signUp(values) {
    const {email, password} = values;

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('USER ACCOUNT CREATED');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Địa chỉ email đã được sử dụng');
      }
      if (error.code === 'auth/invalid-email') {
        Alert.alert('Địa chỉ email không hợp lệ');
      } else {
        Alert.alert(error.code);
      }
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always">
        <Header type="" title="ĐĂNG KÍ" navigation={navigation} />
        <View style={styles.view1}>
          <Text style={styles.text1}>ĐĂNG KÍ</Text>
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            signUp(values);
          }}>
          {props => (
            <View style={styles.view2}>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Số điện thoại"
                  style={styles.input1}
                  keyboardType="number-pad"
                  autoFocus={true}
                  onChangeText={props.handleChange('phone_number')}
                  value={props.values.phone_number}
                />
              </View>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Tên"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                />
              </View>

              <View style={styles.view10}>
                <View style={styles.view11}>
                  <TextInput
                    placeholder="Email"
                    style={styles.input4}
                    autoFocus={false}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                  />
                </View>
              </View>

              <View style={styles.view14}>
                <Animatable.View
                  animation={passwordFocussed ? 'fadeInRight' : 'fadeInLeft'}
                  duration={400}>
                  <Image source={icons.lock} style={{marginRight: 10}} />
                </Animatable.View>
                <TextInput
                  placeholder="Password"
                  style={{flex: 1}}
                  autoFocus={false}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  onFocus={() => {
                    setPassordFocussed(true);
                  }}
                  onBlur={() => {
                    setPasswordBlured(true);
                  }}
                  secureTextEntry={true}
                />
                <Animatable.View
                  animation={passwordBlured ? 'fadeInLeft' : 'fadeInRight'}
                  duration={400}>
                  <Image
                    source={icons.visibility_off}
                    style={{marginRight: 10}}
                  />
                </Animatable.View>
              </View>

              <View style={styles.view17}>
                <Button
                  title="Tạo tài khoản mới "
                  buttonStyle={styles.button1}
                  titleStyle={styles.title1}
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.view18}>
          <Text style={styles.text5}>OR</Text>
        </View>
        <View style={styles.view19}>
          <View>
            <Text style={FONTS.body3}>Đã có tài khoản?</Text>
          </View>
          <View style={styles.view21}>
            <Button
              title="Đăng nhập"
              buttonStyle={styles.button2}
              titleStyle={styles.title2}
              onPress={() => {
                navigation.navigate('SignInScreen');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.orderColor},

  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 15,
  },

  text1: {fontSize: 30, color: COLORS.buttons, fontWeight: 'bold'},

  view2: {
    justifyContent: 'flex-start',
    backgroundColor: COLORS.orderColor,
    paddingHorizontal: 15,
  },

  view3: {marginTop: 5, marginBottom: 10},

  text2: {fontSize: 15, color: COLORS.grey2},

  view4: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.grey4,
    borderRadius: 12,
    paddingLeft: 5,
  },

  view5: {marginLeft: 30, marginTop: 20},

  input1: {fontSize: 16},

  view6: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },

  view7: {marginLeft: 0, maxWidth: '65%'},

  input2: {fontSize: 16, marginLeft: 0, marginBottom: 0},

  view8: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },

  view9: {marginLeft: 0, maxWidth: '65%'},

  input3: {fontSize: 16, marginLeft: 0, marginBottom: 0},

  view10: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },

  email: {
    fontSize: 24,
    padding: 0,
    marginBottom: 0,
    marginTop: 11,
    marginLeft: 2,
  },

  view11: {maxWidth: '65%'},

  input4: {fontSize: 16},

  view13: {flexDirection: 'row', height: 40},

  view14: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.grey4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 20,
  },

  view15: {alignItems: 'center', justifyContent: 'center', marginTop: 10},

  text3: {fontSize: 13},

  view16: {flexDirection: 'row'},

  text4: {textDecorationLine: 'underline', color: 'green', fontSize: 13},

  button1: {
    backgroundColor: COLORS.buttons,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.buttons,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
  },

  title1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },

  view17: {marginVertical: 10, marginTop: 30},

  view18: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15,
  },

  text5: {fontSize: 15, fontWeight: 'bold'},

  view19: {backgroundColor: COLORS.orderColor, paddingHorizontal: 15},

  view20: {marginTop: 5},

  view21: {marginTop: 5, alignItems: 'flex-end'},

  button2: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.headerColor,
    height: 40,
    paddingHorizontal: 20,
    // width:'100%'
  },

  title2: {
    color: COLORS.headerColor,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
