import React from 'react'
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import { COLORS } from '../constants'


const TabIcon = ({
    focused,
    icon,
    iconStyle,
    onPress,
}) => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
        }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.blue : COLORS.transparentBlack1,
                    ...iconStyle,
                }}
            />

            {focused && (
                <View
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 4,
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        backgroundColor: COLORS.blue
                    }}
                >

                </View>
            )}

        </View>
    )
}

export default TabIcon;