import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
} from 'react-native';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {restaurantData} from '../../Data/data';
import {parameters, COLORS, FONTS} from '../../constants/theme';

export default function SearchModal({route, navigation}) {
  // const navigation = useNavigation();

  const [data, setData] = useState([...restaurantData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFossued, setTextInputFossued] = useState(true);
  const textInput = useRef(0);

  // const handleSearch = (text) => {
  //   const dataS = filter(foods, (userSearch) => {
  //     return contains(userSearch, text);
  //   });

  //   setData([...dataS]);
  // };

  return (
    <View>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.TextInput}>
              <Animatable.View>
                <Icon
                  name={textInputFossued ? 'arrow-back' : 'search'}
                  onPress={() => {
                    if (textInputFossued) setModalVisible(false);
                    setTextInputFossued(true);
                  }}
                  style={styles.icon2}
                  type="material"
                  iconStyle={{marginRight: 5}}
                />
              </Animatable.View>
              <TextInput
                style={{width: '90%'}}
                placeholder="Bạn muốn tìm gì?"
                autoFocus={false}
                ref={textInput}
                onFocus={() => {
                  setTextInputFossued(true);
                }}
                onBlur={() => {
                  setTextInputFossued(false);
                }}
                // onChangeText={handleSearch}
              />
              <Animatable.View
                animation={textInputFossued ? 'fadeInLeft' : ''}
                duration={400}>
                <Icon
                  name={textInputFossued ? 'cancel' : null}
                  iconStyle={{color: COLORS.grey3}}
                  type="material"
                  style={{marginRight: -10}}
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch()
                  }}
                />
              </Animatable.View>
            </View>
          </View>
          {/* <SearchItems foods={foods} /> */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: COLORS.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },

  text1: {
    color: COLORS.grey3,
    fontSize: 16,
  },

  TextInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  SearchArea: {
    marginTop: 10,
    width: '100%',
    height: 50,
    backgroundColor: COLORS.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.grey4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchIcon: {fontSize: 24, padding: 5, color: COLORS.grey2},

  view1: {
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  view2: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },

  icon2: {fontSize: 24, padding: 10, color: COLORS.grey2},
  modal: {
    flex: 1,
  },
});
