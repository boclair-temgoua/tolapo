import React from 'react'
import {
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'


const CartQuantityButton = ({
    containerStyle,
    icon,
    iconStyle,
    quantity,
    onPress
}) => {
    return (
        <TouchableOpacity style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2
        }}
            onPress={onPress}
        >
            
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black,
                    ...iconStyle,
                }}

            />
            {/* Notification quantity count */}
            <View style={{
                position: 'absolute',
                top: 5,
                right: 5,
                height: 15,
                width: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.red,
            }}>
                <Text style={{
                    color: COLORS.white,
                    ...FONTS.body5,
                    lineHeight: 0,
                    fontSize: 10

                }}>
                    {quantity}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CartQuantityButton;