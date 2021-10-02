import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { COLORS, icons } from '../../constants'
import { TabIcon } from '../../components'

import { Home, Search, Favorites, Setting } from "../../screens"

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    buttons: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: COLORS.transparent,
                    height: 100
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.home} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.search} />
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.love} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.profile} />
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={icons.setting} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;