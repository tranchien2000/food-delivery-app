/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Animated, Text, Image, TouchableOpacity} from 'react-native';

import {SIZES, COLORS, FONTS, icons} from '../../constants';

export const RenderOrderInfo = ({
  restaurant,
  scrollX,
  handleBasketItemCount,
  handleBasketItemPrice,
  navigation,
  currentLocation,
}) => {
  const dotPosition = Animated.divide(scrollX, SIZES.width);
  return (
    <View>
      {/* Dots */}
      <View
        style={{
          height: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: SIZES.padding,
          }}>
          {restaurant?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });

            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: 'clamp',
            });

            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkGray, COLORS.primary, COLORS.darkGray],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
      {/* Order section */}
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
            borderBottomColor: COLORS.orderColor,
            borderBottomWidth: 1,
          }}>
          <Text style={{...FONTS.h4}}>{handleBasketItemCount()} Món</Text>
          <Text style={{...FONTS.h4}}>{handleBasketItemPrice()} VND</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={icons.pin}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkGray,
              }}
            />
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.h5,
              }}>
              Địa chỉ
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={icons.mastercard}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkGray,
              }}
            />
            <Text
              style={{
                marginLeft: SIZES.padding,
                ...FONTS.h5,
                fontWeight: '600',
                color: COLORS.darkGray,
              }}></Text>
          </View>
        </View>
        {/* Order button section */}
        <View
          style={{
            padding: SIZES.padding * 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              borderRadius: SIZES.radius,
            }}
            onPress={() =>
              handleBasketItemCount() > 0
                ? navigation.navigate('OrderDelivery', {
                    restaurant,
                    currentLocation,
                  })
                : null
            }>
            <Text style={{color: COLORS.white, ...FONTS.h2}}>Đặt món</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
