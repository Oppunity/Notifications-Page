import React from 'react';  
import {createAppContainer} from 'react-navigation';  
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import AllNotifications from "../screens/AllNotifications";  
import Mentions from "../screens/Mentions";  
import Events from "../screens/Events";  


const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Home: AllNotifications,  
        Profile: Mentions,  
        Settings: Events,
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'dodgerblue',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'black'  
            },

            indicatorStyle: {
            backgroundColor: 'dodgerblue',
        },
        },  
    }  
)  
export default createAppContainer(AppNavigator);  