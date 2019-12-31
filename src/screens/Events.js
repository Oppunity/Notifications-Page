import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/MaterialIcons';  
import  { EventFeed }  from './index';

class Events extends Component{  
    render(){  
        return(  

            <EventFeed/>
           
        );
    }  
}  
Events.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
        <Icon  
            name={'event-available'}  
            color={tintColor}  
            size={25}  
        />  
    )  
}  
export default Events;