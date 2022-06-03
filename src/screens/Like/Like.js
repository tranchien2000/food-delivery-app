import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Like = () => {
  return (
    <View style={styles.container}>
      <Text>Like screen</Text>
    </View>
  );
};

export default Like;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
