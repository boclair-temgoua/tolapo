import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { icons, FONTS, SIZES, COLORS } from '../../constants'
import { FormInput, TextButton, AuthLayout } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV_REACT_NATIVE_TOKEN } from '@env'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import dyaxios from './apiAuth'


const schema = yup.object().shape({
    email: yup.string().email().required().min(3).max(200),
    password: yup.string().required().min(6).max(200)
})

const Login = ({ navigation }) => {
    const [showPass, setShowPass] = useState(false)
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema), mode: "onChange"
    })
    const [message, setMessage] = useState(null)

    const onSubmit = async (data) => {
        try {
            const response = await dyaxios.login(data)
            if (response) {
                if (response.data.accessToken) {
                    if (response.data.accessToken != null) {
                        await AsyncStorage.setItem(`${ENV_REACT_NATIVE_TOKEN}`, JSON.stringify(response.data.accessToken))
                        console.log(await AsyncStorage.setItem('response', JSON.stringify(response.data.accessToken)))
                        navigation.navigate('Home');
                    }
                }
            }
        } catch (error) { setMessage(error.response.data.message) }
    }

    return (
        <AuthLayout
            title="Login"
            subtitle="Welcome back, you've been missed"
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}

            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.red,
                        marginTop: SIZES.base,
                        ...FONTS.body3
                    }}>
                    {message}
                </Text>
                {/* Form Inputs  */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            label="Email"
                            autoCompleteType='email'
                            keyboardType='email-address'
                            placeholder='Email address'
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            errorMsg={errors.email?.message}
                            autoCorrect={false}
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                            appendComponent={
                                <View
                                    style={{
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Image
                                        source={errors?.email ? icons.cross : icons.correct}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: errors.email ? COLORS.red : COLORS.green
                                        }}
                                    />
                                </View>
                            }
                        />
                    )}
                    name="email"
                    defaultValue=""
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            label="Password"
                            autoCompleteType='password'
                            placeholder='Password'
                            autoCapitalize="none"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={!showPass}
                            autoCorrect={false}
                            errorMsg={errors.password?.message}
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                            appendComponent={
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        alignItems: 'flex-end',
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => setShowPass(!showPass)}
                                >
                                    <Image
                                        source={showPass ? icons.eye_close : icons.eye}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.green
                                        }}
                                    />

                                </TouchableOpacity>
                            }
                        />
                    )}
                    name="password"
                    defaultValue=""
                />
                {/* Save me & Forgot Password */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                >
                    <TextButton />
                    <TextButton
                        label='Forgot Password'
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate('ForgotPassword')}

                    />
                </View>


                {/* Sign In */}
                <TextButton
                    label="Login"
                    disabled={!isValid}
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isValid  ? COLORS.blue : COLORS.transparentBlue
                    }}
                    onPress={handleSubmit(onSubmit)}
                />
                {/* Sign Up */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'center'
                }}>
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        Don't have an account ?
                    </Text>

                    <TextButton
                        label='Register'
                        buttonContainerStyle={{
                            marginLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.blue,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate('Register')}

                    />
                </View>
                {/* Footer */}

                {/* <TextIconButton
                    containerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue
                    }}
                    icons={icons.fb}
                    iconPosition='LEFT'
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label='Continue With Facebook'
                    labelStyle={{
                        marginTop: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => console.log('FB')}
                /> */}

            </View>

        </AuthLayout>
    )
}

export default Login;