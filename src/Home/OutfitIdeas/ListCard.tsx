import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export const ListCard = ({ products }: any) => {
    const navigation = useNavigation();
    return (
        
        <>
            <TouchableOpacity
                onPress={()=>navigation.navigate("OutfitIdeasDetail")}
                style={{
                    height: 250,
                    elevation: 2,
                    backgroundColor: "#FFF",
                    marginLeft: 20,
                    marginTop: 20,
                    borderRadius: 15,
                    marginBottom: 10,
                    width: 200
                }}
            >
                <Image
                    style={{
                        height: 150,
                        width: 200,
                        flex: 1
                    }}
                    source={{
                        uri:
                            `http://192.168.1.10:3000/api/products/image/${products.image[0].filename}`,
                    }}
                />
                <View style={{
                    flexDirection: "row",
                    paddingTop: 10,
                    paddingHorizontal: 10
                }}>
                    <Text style={{
                        fontWeight: "bold"
                    }}>SAMANTHA</Text>
                    <Text style={{
                        fontWeight: "bold",
                        color: "#00a46c",
                        paddingLeft: 35
                    }}>{products.price}</Text>
                </View>
                <Text style={{
                    paddingHorizontal: 10,
                    fontWeight: "bold",
                    color: "#b1e5d3",
                    paddingTop: 3
                }}>
                    RUSSIA
                </Text>
            </TouchableOpacity>





        </>
    );
};

export default ListCard;
