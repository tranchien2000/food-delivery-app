import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {SIZES, icons, FONTS, COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {Divider, List, ListItem} from '@ui-kitten/components';

const Quanity = qty => {
  return <Text>{qty}</Text>;
};

const OrderScreen = ({route, restaurant}) => {
  const navigation = useNavigation();
  console.log(route);
  const array = new Array();

  const {orderItem} = route.params;
  const convert = orderItem.map(item => {
    array.push(item);
  });
  const res = orderItem
    .map(item => item.total)
    .reduce((price, item) => item + price);
  console.log(array);

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.name} `}
      description={`${item.price}.000 VND `}
      accessoryRight={Quanity(item.qty)}
    />
  );
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.headerColor,
          }}>
          <Text style={{...FONTS.h2}}>Chi tiết đơn hàng</Text>
        </View>
      </View>
      <View>
        <Text>{restaurant?.name}</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.ListItem}>
          <List
            // style={styles.renderList}
            data={array}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.totalPrice}>
          <Text style={styles.textTotalPrice}>Tổng giá: {res}.000 VND</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              height: 50,
              flex: 1,
              backgroundColor: COLORS.secondary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => navigation.goBack()}>
            <Text style={{...FONTS.h4, color: COLORS.black}}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  renderList: {
    maxHeight: 192,
    marginBottom: 10,
  },

  totalPrice: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textTotalPrice: {
    fontSize: 26,
    borderRadius: 20,
  },
});
