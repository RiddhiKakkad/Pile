import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, ScrollView, RefreshControl } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { color, font } from '../Component/Styles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useRoute } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const CharacterDetails = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [charactersList, setCharactersList] = useState([]);

    const route = useRoute();
    const { user } = route.params;

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

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#000' }}>
            <Image source={{ uri: user.avatar }} style={{ width: '100%', height: 536, opacity: 0.5 }} />
            <MaterialIcons
                onPress={() => navigation.goBack(null)}
                name='arrow-back' color={'#fff'} size={22} style={{ position: 'absolute', top: 28, left: 22 }} />
            <AntDesign onPress={() => navigation.navigate('Wishlist')} name='heart' color={'#18CA75'} size={22} style={{ position: 'absolute', top: 28, right: 24 }} />
            <Image source={{ uri: user.avatar }} style={{ width: 156, height: 195, position: 'absolute', top: 166, alignSelf: 'center', borderRadius: 5 }} />
            <Text style={{ color: '#fff', fontSize: 31, fontWeight: '700', fontFamily: font.bold, position: 'absolute', alignSelf: 'center', top: 397 }}>{user.first_name} {user.last_name}</Text>
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '300', position: 'absolute', alignSelf: 'center', top: 440 }}>Heisenberg</Text>
            <Text style={{ color: '#CA184E', fontSize: 14, fontWeight: '500', position: 'absolute', alignSelf: 'center', top: 460 }}>Presumed dead</Text>

            <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: '#18CA75' }}>Potrayed</Text>
                    <Text style={{ color: '#fff' }}>Bryan Cranston</Text>
                </View>
                <Text style={{ color: '#fff', marginRight: 5 }}>09-July-1958</Text>
                <Feather
                    onPress={() => navigation.goBack(null)}
                    name='gift' color={'#fff'} size={13} />
            </View>

            <View style={{ flex: 1, padding: 15 }}>
                <Text style={{ color: '#18CA75' }}>Occupation</Text>
                <Text style={{ color: '#fff' }}>High School Chemistry Teacher</Text>
                <Text style={{ color: '#fff' }}>King Pin</Text>
            </View>

            <View style={{ flex: 1, }}>
                <Text style={{ color: '#18CA75', paddingHorizontal: 15, paddingTop: 15 }}>Appeared in</Text>

                <FlatList
                    contentContainerStyle={{ flexGrow: 1, padding: 15 }}
                    horizontal
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    renderItem={({ item, index }) =>
                        <View style={{ width: 88, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 3, backgroundColor: '#1A1A1A', marginEnd: 10 }}>
                            <Text style={{ color: '#fff' }}>Seasons {index + 1}</Text>

                        </View>
                    }
                />
            </View>

            <View style={{ flex: 1, }}>
                <View style={{ paddingHorizontal: 15, paddingTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 24, flex: 1, fontFamily: font.bold }}>Other characters</Text>
                    <Text onPress={() => navigation.navigate('Home')} style={{ color: '#fff', fontSize: 14, fontFamily: font.bold }}>View More</Text>
                </View>

                <FlatList
                    contentContainerStyle={{ flexGrow: 1, padding: 15 }}
                    horizontal
                    data={charactersList}
                    renderItem={({ item, index }) =>
                        item.id !== user.id ? <Animatable.View key={index + ''} animation="fadeIn" delay={index * 180} style={{ width: (width - 45) * .5, marginRight: 15, marginBottom: 47, }}>
                            <TouchableOpacity key={index + ''} onPress={() => navigation.push('CharacterDetails', { user: item })} style={{ width: (width - 45) * .5, }}>
                                <View style={{ height: 194, justifyContent: 'center', alignItems: 'center', marginBottom: 8, backgroundColor: '#fff', borderRadius: 5, overflow: 'hidden' }}>
                                    <Image source={{ uri: item.avatar }} style={{ height: '100%', width: '100%', }} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontFamily: font.bold, fontSize: 13, color: '#fff' }}>{item.first_name} {item.last_name}</Text>
                                        <Text style={{ fontFamily: font.reg, fontSize: 13, color: '#fff' }}>Hank</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Animatable.View> : null
                    }
                    refreshControl={<RefreshControl
                        refreshing={isLoading} />}
                    ListEmptyComponent={
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontFamily: font.bold }}>Oops, users not found!</Text>
                        </View>
                    }
                />
            </View>
        </ScrollView>
    )
}

export default CharacterDetails