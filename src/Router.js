import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Details from './Details';
import Information from './Information';


const Router = createStackNavigator({ 

    Details:{screen:Details,navigationOptions:{header:null}},
    Information:{screen:Information,navigationOptions:{header:null}},

},{ initialRouteName: 'Details' });

export default Router;