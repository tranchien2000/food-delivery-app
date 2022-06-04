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

export default function SignUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <TextInput style={styles.text1} placeholder="Email" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},

  view1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  text1: {fontSize: 22, color: COLORS.buttons, fontWeight: 'bold'},

  view2: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
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

  view11: {marginLeft: 30, maxWidth: '65%'},

  input4: {fontSize: 16, marginLeft: -20, marginBottom: -10},

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

  view19: {backgroundColor: 'white', paddingHorizontal: 15},

  view20: {marginTop: 5},

  view21: {marginTop: 5, alignItems: 'flex-end'},

  button2: {
    backgroundColor: COLORS.background3,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.background2,
    height: 40,
    paddingHorizontal: 20,
    // width:'100%'
  },

  title2: {
    color: COLORS.buttons,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
