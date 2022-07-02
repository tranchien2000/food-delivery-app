/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirection from 'react-native-maps-directions';

import {COLORS, GOOGLE_API_KEY, icons, FONTS, SIZES} from '../../constants';

const RenderDestinationHeader = ({addressName, duration, phone, name}) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding * 2,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        <Image
          source={icons.redPin}
          style={{
            width: 25,
            height: 25,
            marginRight: SIZES.padding,
          }}
        />
        <View
          style={{
            flex: 1,
          }}>
          <Text style={{...FONTS.body3}}>{addressName}</Text>
          <Text style={{...FONTS.body3}}>{name}</Text>
          <Text style={{...FONTS.body3}}>{phone}</Text>
        </View>

        {/* <Text style={{...FONTS.body3}}>{Math.ceil(duration)} mins</Text> */}
      </View>
    </View>
  );
};

const RenderDeliveryInfo = ({restaurant, navigation, orderItem}) => {
  //console.log('avatar', restaurant);
  //console.log(orderItem);
  //console.log(orderItem);
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: SIZES.width * 0.9,
          paddingVertical: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding * 2,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={restaurant?.courier.avatar}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
          <View
            style={{
              flex: 1,
              marginLeft: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  ...FONTS.h4,
                }}>
                {restaurant?.courier.name} - {restaurant?.courier.phone}
              </Text>

              <View style={{flexDirection: 'row'}}></View>
            </View>
            <Text style={{color: COLORS.darkGray, ...FONTS.body4}}>
              {restaurant?.name}
            </Text>
            {/* <Text style={{color: COLORS.darkGray, ...FONTS.body4}}>
              {restaurant?.address}
            </Text> */}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding * 2,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              height: 50,
              flex: 1,
              marginRight: 10,
              backgroundColor: COLORS.primary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() =>
              navigation.navigate('OrderScreen', {
                orderItem,
              })
            }>
            <Text style={{...FONTS.h4, color: COLORS.white}}>
              Chi tiết đơn hàng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              flex: 1,
              backgroundColor: COLORS.secondary,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={() => navigation.goBack()}>
            <Text style={{...FONTS.h4, color: COLORS.white}}>Hủy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const renderButton = (zoomIn, zoomOut) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: SIZES.height * 0.35,
        right: SIZES.padding * 2,
        width: 60,
        height: 130,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => zoomIn()}>
        <Text style={{...FONTS.body1}}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: COLORS.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => zoomOut()}>
        <Text style={{...FONTS.body1}}> - </Text>
      </TouchableOpacity>
    </View>
  );
};

export const RenderMap = ({
  region,
  destinationLocation,
  sourceLocation,
  addressName,
  phone,
  name,
  restaurant,
  handleSource,
  handleRegion,
  navigation,
  orderItem,
}) => {
  const mapView = React.useRef();
  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [angle, setAngle] = React.useState(0);

  //console.log('[RESTAURANT]: ', restaurant);

  const zoomIn = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };
    handleRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  };

  const zoomOut = () => {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };
    handleRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  };

  const calculateAngle = coordinates => {
    let startLatitude = coordinates[0].latitude;
    let startLongitude = coordinates[0].longitude;
    let endLatitude = coordinates[1].latitude;
    let endLongitude = coordinates[1].longitude;
    let dx = endLatitude - startLatitude;
    let dy = endLongitude - startLongitude;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  };

  const destinationMarker = () => {
    return (
      <Marker coordinate={destinationLocation}>
        <Image
          source={icons.xe_may}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );
  };

  const carIcon = () => {
    return (
      <Marker
        coordinate={sourceLocation}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}>
        <Image
          source={icons.redPin}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );
  };

  if (region) {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <MapView
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{flex: 1}}>
          <MapViewDirection
            origin={sourceLocation}
            destination={destinationLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
            onReady={result => {
              setDuration(result.duration);

              if (!isReady) {
                mapView.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 20,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 20,
                    top: SIZES.height / 8,
                  },
                });

                let nextLocation = {
                  latitude: result.coordinates[0].latitude,
                  longitude: result.coordinates[0].longitude,
                };

                if (result.coordinates.length >= 2) {
                  const newAngle = calculateAngle(result.coordinates);
                  setAngle(newAngle);
                }

                handleSource(nextLocation);
                setIsReady(true);
              }
            }}
          />
          {destinationMarker()}
          {carIcon()}
        </MapView>
        <RenderDestinationHeader
          addressName={addressName}
          name={name}
          phone={phone}
        />
        <RenderDeliveryInfo
          restaurant={restaurant}
          navigation={navigation}
          orderItem={orderItem}
        />
        {renderButton(zoomIn, zoomOut)}
      </View>
    );
  } else {
    return null;
  }
};
