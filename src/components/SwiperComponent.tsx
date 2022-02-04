import React from 'react'
import { View, Image, StyleSheet } from "react-native"
import Swiper from 'react-native-swiper'

export const SwiperComponent = () => {
    return(
        <Swiper
            dotStyle={{
                marginTop:-200,
                width:15,
                height:5,
                borderRadius:10,
                backgroundColor:"#FFF",

            }}
            activeDotColor="#FFF"
            activeDotStyle={{
                marginTop:-200,
                width:30,
                height:6,
                borderRadius:10,
                backgroundColor:"#FFF",
            }}
        >
                <View style={styles.slide}>
                    {/* <Image
                        source={require('../images/img.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:60,
                            resizeMode:"stretch"
                        }}
                    /> */}
                </View>
                <View style={styles.slide}>
                    {/* <Image
                        source={require('../images/img2.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:60,
                            resizeMode:"stretch"
                        }}
                    /> */}
                </View>
                <View style={styles.slide}>
                    {/* <Image
                        source={require('../images/img.png')}
                        style={{
                            marginLeft:120,
                            marginBottom:130,
                            height:720,
                            width:420,
                            marginTop:60,
                            resizeMode:"stretch"
                        }}
                    /> */}
                </View>
        </Swiper>
    )
}
const styles = StyleSheet.create({
  
    slide:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    }
})
export default SwiperComponent;