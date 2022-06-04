import React from 'react';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {COLORS, parameters} from '../../constants/theme';

import {Icon} from 'react-native-elements';
import {icons} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Header({title, type, navigation}) {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 20, marginTop: 10}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={icons.back}
            name={type}
            size={20}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.headerColor,
    height: parameters.headerHeight,
  },

  headerText: {
    color: COLORS.heaherText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
  },
});
