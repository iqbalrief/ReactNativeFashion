import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { theme } from '../../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContext } from '../../Service/Cart/cart.context';
import listCart from './listCart';
import ListCart from './listCart';
import { OrderContext } from '../../Service/Order/OrderContext';


const Cart = () => {
  const [cart, setCart] = useState([])
  
  const { cartAll, editCart }: any = useContext(CartContext);



    useEffect( async () => {  
        const getItem = await cartAll() 
        setCart(getItem.data)
    }, [])

    const [order, setOrder] = useState()
    const { AddToOrder }: any = useContext(OrderContext);

  //   let totalPrice = 0;
  //   cartAll.forEach((item: any) => {
  //   totalPrice += item.price * item.quantity;
  //   console.log(totalPrice)
  // });

    // useEffect( async () => {  
    //     const getItem = await AddToOrder() 
    //     setOrder(getItem.data)
    // }, [])


    const onSubmit = async (data: any) => {
        
      await AddToOrder(data).then(() => {
         Alert.alert("Order Success")   
      })
      .catch((err: any) => {
          console.log(err);
        });
  }


  return (
   
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.white,
        position: 'relative',
      }}>
          <ScrollView>
         <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: theme.colors.backgroundDark,
                padding: 12,
                backgroundColor: theme.colors.backgroundLight,
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: theme.colors.black,
              fontWeight: '400',
            }}>
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: theme.colors.black,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
        <View style={{paddingHorizontal: 16}}>
      {cart && cart.map((item:any, i) => (
            <ListCart
              key={i}
              cart={item}
              
            />
          ))}         
           </View>
       <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Delivery Location
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: theme.colors.blue,
                    backgroundColor: theme.colors.backgroundLight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={{
                      fontSize: 18,
                      color: theme.colors.blue,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme.colors.black,
                      fontWeight: '500',
                    }}>
                    2 Petre Melikishvili St.
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: theme.colors.black,
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    0162, Tbilisi
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: theme.colors.black}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Payment Method
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: theme.colors.blue,
                    backgroundColor: theme.colors.backgroundLight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: theme.colors.blue,
                      letterSpacing: 1,
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: theme.colors.black,
                      fontWeight: '500',
                    }}>
                    Visa Classic
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: theme.colors.black,
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    ****-9092
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: theme.colors.black}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Order Info
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: theme.colors.black,
                  opacity: 0.5,
                }}>
                Subtotal
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: theme.colors.black,
                  opacity: 0.8,
                }}>
                {/* &#8377;{total}.00 */}
                Total Order
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: theme.colors.black,
                  opacity: 0.5,
                }}>
                Shipping Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: theme.colors.black,
                  opacity: 0.8,
                }}>
                {/* &#8377;{total / 20} */}
                Total
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: theme.colors.black,
                  opacity: 0.5,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: theme.colors.black,
                }}>
                {/* &#8377;{total + total / 20} */}
                total 2
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

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
        //   onPress={() => (total != 0 ? checkOut() : null)}
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
            {/* CHECKOUT (&#8377;{total + total / 20} ) */}
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
   
    
  );
};

export default Cart;
