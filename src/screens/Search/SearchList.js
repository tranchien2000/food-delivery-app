// import React from 'react';
// import {FlatList, View, Image, TouchableOpacity, Text} from 'react-native';
// import {COLORS, FONTS, icons, SIZES} from '../../constants';

// export const SearchList = ({
//   restaurants,
//   getCategoryNameById,
//   navigation,
//   currentLocation,
// }) => {
//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity
//         style={{
//           marginBottom: 10,
//           flexDirection: 'column',
//         }}
//         onPress={() =>
//           navigation.navigate('Restaurant', {
//             item,
//             currentLocation,
//           })
//         }>
//         <View style={{marginBottom: 5}}>
//           <Image
//             source={item.photo}
//             resizeMode="cover"
//             style={{
//               width: '100%',
//               height: 150,
//               borderRadius: SIZES.radius,
//             }}
//           />
//         </View>

//         <Text
//           style={{
//             ...FONTS.body2,
//             marginBottom: SIZES.padding,
//           }}>
//           {item.name}
//         </Text>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <FlatList
//       data={restaurants}
//       keyExtractor={item => `${item.id}`}
//       renderItem={renderItem}
//       contentContainerStyle={{
//         paddingHorizontal: SIZES.padding * 2,
//         paddingBottom: 30,
//       }}
//     />
//   );
// };
