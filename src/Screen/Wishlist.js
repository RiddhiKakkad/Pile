import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { font } from '../Component/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { removeCharacterFromWishlist } from '../redux/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const Wishlist = ({ navigation }) => {
  const dispatch = useDispatch();
  const WishlistItems = useSelector(state => state);

  return (
    <View style={{ flex: 1, backgroundColor: '#000', }}>

      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingTop: 31 }}>
        <Text style={{ flex: 1, fontFamily: font.bold, color: '#18CA75', fontSize: 23, fontWeight: '700' }}>Favourites</Text>
        <AntDesign
          onPress={() => navigation.navigate('Home')}
          name='close' color={'#fff'} size={22} />
      </View>

      {/* Characters List  */}
      <FlatList
        contentContainerStyle={{ flexGrow: 1, paddingLeft: 15, paddingTop: 73 }}
        numColumns={2}
        data={WishlistItems}
        renderItem={({ item, index }) =>
          <Animatable.View key={index + ''} animation="fadeIn" style={{ width: (width - 45) * .5, marginRight: 15, marginBottom: 47, }}>
            <TouchableOpacity key={index + ''} style={{ width: (width - 45) * .5, }}>
              <View style={{ height: 194, justifyContent: 'center', alignItems: 'center', marginBottom: 8, backgroundColor: '#fff', borderRadius: 5, overflow: 'hidden' }}>
                <Image source={{ uri: item.avatar }} style={{ height: '100%', width: '100%', }} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontFamily: font.bold, fontSize: 13, color: '#fff' }}>{item.first_name}</Text>
                  <Text style={{ fontFamily: font.reg, fontSize: 13, color: '#fff' }}> {item.last_name}</Text>
                </View>
                <AntDesign onPress={() => { dispatch(removeCharacterFromWishlist(index)) }} name='heart' color={'#18CA75'} size={22} />
              </View>
            </TouchableOpacity>
          </Animatable.View>
        }
        ListEmptyComponent={
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontFamily: font.bold }}>Wishlist is empty</Text>
          </View>}
      />
    </View>
  )
}

export default Wishlist;