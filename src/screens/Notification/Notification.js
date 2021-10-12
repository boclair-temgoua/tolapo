import React from 'react'
import {
    View
} from 'react-native'
import { TextButton } from '../../components'
import { FONTS, SIZES, COLORS } from '../../constants'


const Notification = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'space-between'
                }}
            >
                <TextButton
                    label='Notification Page'
                    buttonContainerStyle={{
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}
                    onPress={() => navigation.navigate('NotificationDetail')}

                />
            </View>
        </View>
    )
}

export default Notification;