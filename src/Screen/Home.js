import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, ActivityIndicator, TextInput, RefreshControl } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { font } from '../Component/Styles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux';
import { addCharacterToWishlist } from '../redux/actions/Actions';
const { width } = Dimensions.get('window');


const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [charactersList, setCharactersList] = useState([]);
    const [searchUserList, setSearchUserList] = useState([]);
    const [isSearchBarVisible, setisSearchBarVisible] = useState(false)
    const [searchText, setIsSearchText] = useState('')

    useEffect(() => {
        getCharachterList()
    }, [])

    const getCharachterList = () => {
        try {
            fetch('https://reqres.in/api/users?per_page=12')
                .then(response => response.json())
                .then(res => {
                    console.log('res', res)
                    setCharactersList(res.data)
                    setSearchUserList(res.data)
                    setIsLoading(false)
                })
                .catch(e => {
                    console.log('e', e)
                    setIsLoading(false)
                })
        } catch (error) {
            console.log('error', error)
        }
    }

    const searchUser = (text) => {
        setIsSearchText(text)
        const newData = searchUserList.filter(item => {
            const itemMname = `${item.first_name.toUpperCase()} ${item.last_name.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemMname.indexOf(textData) > -1;
        });
        setSearchUserList(newData)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000', }}>
            {isSearchBarVisible ? <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, backgroundColor: '#242424', paddingTop: 31, paddingBottom: 22 }}>
                <MaterialIcons
                    onPress={() => {
                        setIsSearchText('')
                        setisSearchBarVisible(!isSearchBarVisible)
                    }}
                    name='arrow-back' color={'#fff'} size={22} style={{ marginRight: 7 }} />
                <TextInput
                    style={{ fontSize: 33, flex: 1, marginRight: 14 }}
                    placeholder='Search'
                    placeholderTextColor={'#ABABAB'}
                    value={searchText}
                    onChangeText={(searchText) => searchUser(searchText)}
                />
                <AntDesign
                    onPress={() => {
                        setIsSearchText('')
                        setisSearchBarVisible(!isSearchBarVisible)
                    }}
                    name='close' color={'#fff'} size={22} />
            </View>
                :
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingTop: 31 }}>
                    <Text style={{ flex: 1, fontFamily: font.bold, color: '#fff', fontSize: 23, fontWeight: '700' }}>The Breaking bad</Text>
                    <Feather onPress={() => setisSearchBarVisible(!isSearchBarVisible)} name='search' color={'gray'} size={22} style={{ marginRight: 26 }} />
                    <AntDesign onPress={() => navigation.navigate('Wishlist')} name='heart' color={'#18CA75'} size={22} />
                </View>}

            <FlatList
                contentContainerStyle={{ flexGrow: 1, paddingLeft: 15, paddingTop: 73 }}
                numColumns={2}
                data={isSearchBarVisible ? searchUserList : charactersList}
                renderItem={({ item, index }) =>
                    <Animatable.View key={index + ''} animation="fadeIn" delay={index * 180} style={{ width: (width - 45) * .5, marginRight: 15, marginBottom: 47, }}>
                        <TouchableOpacity key={index + ''} onPress={() => navigation.navigate('CharacterDetails', { user: item })} style={{ width: (width - 45) * .5, }}>
                            <View style={{ height: 194, justifyContent: 'center', alignItems: 'center', marginBottom: 8, backgroundColor: '#fff', borderRadius: 5, overflow: 'hidden' }}>
                                <Image source={{ uri: item.avatar }} style={{ height: '100%', width: '100%', }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontFamily: font.bold, fontSize: 13, color: '#fff' }}>{item.first_name}</Text>
                                    <Text style={{ fontFamily: font.reg, fontSize: 13, color: '#fff' }}> {item.last_name}</Text>
                                </View>
                                <Feather onPress={() => {
                                    dispatch(addCharacterToWishlist(item))
                                }} name='heart' color={'gray'} size={22} />
                            </View>
                        </TouchableOpacity>
                    </Animatable.View>
                }
                refreshControl={<RefreshControl
                    // colors={["#9Bd35A", "#689F38"]}
                    refreshing={isLoading} />}
                ListEmptyComponent={
                    !isLoading ? <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: font.bold }}>Oops, users not found!</Text>
                    </View> : null
                }
            />
        </View>
    )
}

export default Home