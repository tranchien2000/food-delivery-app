/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {COLORS, icons, FONTS, SIZES} from '../../constants';
import {restaurantData} from '../../Data/data';

export const RenderHeader = ({
  currentLocation,
  setCurrentLocation,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        paddingTop: 10,
      }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '80%',
            height: '100%',
            backgroundColor: COLORS.headerColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: COLORS.lightGray3,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
              }}>
              <Text style={{...FONTS.h4}}>{currentLocation.addressName}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchArea: {
    // marginTop: 10,
    width: '100%',
    height: 50,
    backgroundColor: COLORS.headerColor,
    borderRadius: SIZES.radius,
    borderColor: COLORS.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {fontSize: 24, padding: 5, color: COLORS.grey2},
});
