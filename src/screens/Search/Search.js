import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search screen</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.orderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
