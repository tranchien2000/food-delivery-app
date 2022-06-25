import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SIZES, icons} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const OrderScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{
          width: 40,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
      <Text>OrderScreen</Text>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
