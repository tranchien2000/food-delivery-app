/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {RenderMap} from './RenderMap';
import Tabs from '../tabs';

const OrderDelivery = ({route, navigation}) => {
  const [currRestaurant, setCurrRestaurant] = React.useState(null);
  const [addressName, setAddressName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [source, setSource] = React.useState(null);
  const [destination, setDestination] = React.useState(null);
  const [region, setRegion] = React.useState(null);
  const {orderItem} = route.params;
  console.log(orderItem);
  React.useEffect(() => {
    let {restaurant, currentLocation} = route.params;
    let sourceLocation = currentLocation.gps;
    let destinationLocation = restaurant.location;
    let street = currentLocation.addressName;
    let phone = currentLocation.phone;
    let name = currentLocation.name;

    let mapRegion = {
      latitude: (sourceLocation.latitude + destinationLocation.latitude) / 2,
      longitude: (sourceLocation.longitude + destinationLocation.longitude) / 2,
      latitudeDelta:
        Math.abs(sourceLocation.latitude - destinationLocation.latitude) * 2,
      longitudeDelta:
        Math.abs(sourceLocation.longitude - destinationLocation.longitude) * 2,
    };

    setCurrRestaurant(restaurant);
    setAddressName(street);
    setName(name);
    setPhone(phone);
    setSource(sourceLocation);
    setDestination(destinationLocation);
    setRegion(mapRegion);
  }, [currRestaurant, route.params]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <RenderMap
        route={route}
        navigation={navigation}
        orderItem={orderItem}
        region={region}
        destinationLocation={destination}
        sourceLocation={source}
        addressName={addressName}
        name={name}
        phone={phone}
        handleSource={setSource}
        handleRegion={setRegion}
        restaurant={currRestaurant}
      />
    </View>
  );
};

export default OrderDelivery;
