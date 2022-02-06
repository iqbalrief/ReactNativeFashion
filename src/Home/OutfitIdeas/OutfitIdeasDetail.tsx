import { View, Text, Image, TouchableOpacity, Dimensions, Animated, FlatList, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { theme } from '../../components';


export const OutfitIdeasDetail = ({navigations, route}: any) => {

  // const {productID} = route.params;

  // const [products, setProducts] = useState({});

  // const fhoto = products.productImage[0].fileName;
  

 const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width)
    return (
        <>
        <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{uri:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fid-live-05.slatic.net%2Fp%2Fce008327754338445a5f7ccded110c68.jpg_720x720q80.jpg_.webp&imgrefurl=https%3A%2F%2Fwww.lazada.co.id%2Fproducts%2Fcrewneck-erigoerigo-crewneckcrewneck-erigo-original-i4778438175.html&tbnid=59U__6vGWfUrGM&vet=12ahUKEwjz_tD30eb1AhUaxaACHWEhASsQMygEegUIARDDAQ..i&docid=Z6wJGVjD7q_Z2M&w=720&h=720&q=erigo&ved=2ahUKEwjz_tD30eb1AhUaxaACHWEhASsQMygEegUIARDDAQ"}}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
          </View>
          
        <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.white,
        position: 'relative',
      }}>
      <StatusBar
        backgroundColor={theme.colors.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            backgroundColor: theme.colors.backgroundLight,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 16,
              paddingLeft: 16,
            }}>
            <TouchableOpacity 
          >
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: theme.colors.backgroundDark,
                  padding: 12,
                  backgroundColor: theme.colors.white2,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            // data={product.productImageList ? product.productImageList : null}
            horizontal
            // renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              marginTop: 32,
            }}>
            {/* {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  }); */}
                  {/* return ( */}
                    <Animated.View
                    //   key={index}
                      style={{
                        width: '16%',
                        height: 2.4,
                        backgroundColor: theme.colors.black,
                        // opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}></Animated.View>
                  {/* );
                })
              : null} */}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 14,
            }}>
            <Entypo
              name="shopping-cart"
              style={{
                fontSize: 18,
                color: theme.colors.blue,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: theme.colors.black,
              }}>
              Shopping
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: theme.colors.black,
                maxWidth: '84%',
              }}>
             
           
            </Text>
            <Ionicons
              name="link-outline"
              style={{
                fontSize: 24,
                color: theme.colors.blue,
                backgroundColor: theme.colors.blue + 10,
                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: theme.colors.black,
              fontWeight: '400',
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: '85%',
              maxHeight: 44,
              marginBottom: 18,
            }}>
            {/* {product.description} */}
            description
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 14,
              borderBottomColor: theme.colors.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                alignItems: 'center',
              }}>
              <View
                style={{
                //   color: theme.colors.blue,
                  backgroundColor: theme.colors.backgroundLight,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}>
                <Entypo
                  name="location-pin"
                  style={{
                    fontSize: 16,
                    color: theme.colors.blue,
                  }}
                />
              </View>
              {/* <Text> Rustaveli Ave 57,{'\n'}17-001, Batume</Text> */}
            </View>
            <Entypo
              name="chevron-right"
              style={{
                fontSize: 22,
                color: theme.colors.backgroundDark,
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                maxWidth: '85%',
                color: theme.colors.black,
                marginBottom: 4,
              }}>
              {/* &#8377; {theme.colors.productPrice}.00 */}
              price
            </Text>
            {/* <Text>
               Tax Rate 2%~ &#8377;{product.productPrice / 20} (&#8377;
              {product.productPrice + product.productPrice / 20}) 
            </Text> */}
          </View>
        </View>
      </ScrollView>
    </View>
    <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
        //   onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: theme.colors.blue,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: theme.colors.white,
              textTransform: 'uppercase',
            }}>
            {/* {product.isAvailable ? 'Add to cart' : 'Not Avialable'} */}
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    
      </>
)
}

export default OutfitIdeasDetail;
