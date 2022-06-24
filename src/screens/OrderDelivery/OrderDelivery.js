/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {RenderMap} from './RenderMap';
import Tabs from '../tabs';

const OrderDelivery = ({route, navigation}) => {
  const [currRestaurant, setCurrRestaurant] = React.useState(null);
  const [addressName, setAddressName] = React.useState('');
  const [source, setSource] = React.useState(null);
  const [destination, setDestination] = React.useState(null);
  const [region, setRegion] = React.useState(null);

  React.useEffect(() => {
    let {restaurant, currentLocation} = route.params;
    let sourceLocation = currentLocation.gps;
    let destinationLocation = restaurant.location;
    let street = currentLocation.addressName;

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
        region={region}
        destinationLocation={destination}
        sourceLocation={source}
        addressName={addressName}
        handleSource={setSource}
        handleRegion={setRegion}
        restaurant={currRestaurant}
      />
    </View>
  );
};

export default OrderDelivery;
