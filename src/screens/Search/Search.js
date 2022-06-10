import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import SearchHeader from './SearchHeader';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Heillo</Text>
      <SearchHeader />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: COLORS.orderColor,
  },
});
