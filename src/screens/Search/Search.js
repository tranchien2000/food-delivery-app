import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {restaurantData, categoryData, CurrentLocation} from '../../Data/data';
import {RenderRestaurantList} from '../Home/RenderRestaurantList';
import {RenderMainCategories} from '../Home/RenderMainCategories';
import {SearchList} from './SearchList';

const Search = ({navigation}) => {
  const [currentLocation, setCurrentLocation] = React.useState(CurrentLocation);
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);

  const onSelectCategory = category => {
    // filter restaurant list
    let restaurantList = restaurantData.filter(a =>
      a.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  };

  const searchName = input => {
    let data = restaurantData;
    let searchData = restaurantData.filter(item => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setData(searchData);
  };

  const getCategoryNameById = categoryId => {
    let category = categories.filter(a => a.id === categoryId);
    if (category.length > 0) {
      return category[0].name;
    }
    return '';
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={{
            marginVertical: 10,
            marginHorizontal: 15,
            borderRadius: 20,
            backgroundColor: COLORS.headerColor,
          }}
          placeholder="Search"
          onChangeText={input => {
            searchName(input);
          }}
        />
      </View>

      <SearchList
        currentLocation={currentLocation}
        restaurants={restaurants}
        getCategoryNameById={getCategoryNameById}
        navigation={navigation}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.orderColor,
  },
});
