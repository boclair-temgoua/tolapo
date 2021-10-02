import React from 'react'
import {
    Image,
    TouchableOpacity
} from 'react-native'
import { COLORS } from '../constants'


const FavoriteButton = ({
    containerStyle,
    iconStyle,
    icon,
    onPress
}) => {
    return (
        <TouchableOpacity style={{
            ...containerStyle
        }}
            onPress={onPress}
        >

            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray2,
                    ...iconStyle,
                }}
            />

        </TouchableOpacity>
    )
}

export default FavoriteButton;