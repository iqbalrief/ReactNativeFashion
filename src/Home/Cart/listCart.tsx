import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { theme } from '../../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box } from '../../components/Theme';
import { productsRequest } from '../../Service/Products/productsService';
import { CartContext } from '../../Service/Cart/cart.context';

const ListCart = ({ cart }: any) => {
  console.log(cart)
  const [quantity, setQuantity] = useState(1);

  

  const {  editCart }: any = useContext(CartContext);
  // console.log(editCart)
  

  const onAddQty = () => {
    setQuantity(quantity + 1);
  };

  const onSubtractQty = () => {
    if(quantity === 1){
      return
    }
    setQuantity(quantity - 1);
  };

  const updateQty = async (type: string) => {

    let reqData;
    if (type === "add") {
      reqData = {  quantity: quantity + 1 };
    } else if (type === "subtract") {
      reqData = { quantity: quantity - 1 };
    }

    await editCart(cart.id, reqData);
  };

  
   
    return (
        <>
            
          
          <TouchableOpacity
    
        style={{
          width: '100%',
          height: 100,
          marginVertical: 6,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '30%',
            height: 100,
            padding: 14,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.backgroundLight,
            borderRadius: 10,
            marginRight: 22,
          }}>
          <Image
            source={{uri:"https://images.tokopedia.net/img/cache/900/hDjmkQ/2022/2/1/290a259e-d1c4-4448-a296-68d3b2dfb27b.jpg"}}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 14,
                maxWidth: '100%',
                color: theme.colors.black,
                fontWeight: '600',
                letterSpacing: 1,
              }}>
               {cart.product.title}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
                {cart.product.price * quantity}
              </Text>
              <View>
              <Text  style={{
                  fontSize: 14,
                  fontWeight: '400',
                  maxWidth: '85%',
                  marginRight: 4,
                }}>
               {cart.size}
              </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  borderRadius: 100,
                  marginRight: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: theme.colors.backgroundMedium,
                  opacity: 0.5,
                }}>
                  <TouchableOpacity onPress={() =>{ onSubtractQty()
                    updateQty('subtract')
                  }}>
                <MaterialCommunityIcons
                  name="minus"
                  style={{
                    fontSize: 16,
                    color: theme.colors.backgroundDark,
                  }}
                />
                </TouchableOpacity>
              </View>
              <Text>{quantity}</Text>
              <View
                style={{
                  borderRadius: 100,
                  marginLeft: 20,
                  padding: 4,
                  borderWidth: 1,
                  borderColor: theme.colors.backgroundMedium,
                  opacity: 0.5,
                }}>
                    <TouchableOpacity onPress={() => {onAddQty() 
                      updateQty("add")
                      }}>
                <MaterialCommunityIcons
                  name="plus"
                  style={{
                    fontSize: 16,
                    color: theme.colors.backgroundDark,
                  }}
                />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => true}>
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: theme.colors.backgroundDark,
                  backgroundColor: theme.colors.backgroundLight,
                  padding: 8,
                  borderRadius: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>        
       
        </>

    );
};

export default ListCart;
