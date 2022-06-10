import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';
import {restaurantData} from '../../Data/data';
import {COLORS, GOOGLE_API_KEY, icons, FONTS, SIZES} from '../../constants';

const OrderScreen = ({restaurant, navigation}) => {
  console.log('avatar', restaurant);
  return (
    <View style={{}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={restaurant?.courier.avatar}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.radius,
            }}>
            <Text style={{...FONTS.h4}}>{restaurant.name}</Text>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  ...FONTS.h4,
                }}>
                {restaurant?.courier.name}
              </Text>
            </View>
            <Text style={{color: COLORS.darkGray, ...FONTS.body4}}>
              {restaurant?.name}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding * 2,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              marginBottom: 20,
              height: 50,
              flex: 1,
              backgroundColor: COLORS.secondary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => navigation.goBack()}>
            <Text style={{...FONTS.h4, color: COLORS.white}}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
