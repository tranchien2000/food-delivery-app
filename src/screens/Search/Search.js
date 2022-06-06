import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
import SearchModal from './SearchModal';

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchModal />
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
