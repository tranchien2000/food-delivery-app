/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';

import {COLORS, FONTS, icons, SIZES} from '../../constants';

export const RenderMainCategories = ({
  onSelectCategory,
  selectedCategory,
  categories,
}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          padding: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
          backgroundColor:
            selectedCategory?.id === item.id
              ? COLORS.headerColor
              : COLORS.white,
          borderRadius: SIZES.radius,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: SIZES.padding,
          shadow: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 1,
          },
        }}
        onPress={() => onSelectCategory(item)}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              selectedCategory?.id === item.id
                ? COLORS.white
                : COLORS.categoriesColor,
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </View>

        <Text
          style={{
            marginTop: SIZES.padding,
            color:
              selectedCategory?.id === item.id ? COLORS.white : COLORS.black,
            ...FONTS.body5,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        padding: SIZES.padding * 2,
      }}>
      <Text style={{...FONTS.h2}}>Hôm Nay Ăn Gì</Text>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingVertical: SIZES.padding,
        }}
      />
    </View>
  );
};
