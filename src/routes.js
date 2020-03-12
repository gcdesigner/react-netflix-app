import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';
import User from './pages/User';

import LogoTitle from './components/LogoTitle';

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    background: '#111',
    card: '#111',
    text: '#fff',
    border: '#fff',
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer theme={MyTheme}>
      {/* <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: 'Gabriel',
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
            },
          }}
        />

        <Stack.Screen name="User" component={User} />
      </Stack.Navigator> */}

      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          background: 'red',
          activeTintColor: '#fff',
          inactiveTintColor: '#aaa',
          style: {
            borderTopColor: 0,
          },
          tabStyle: {
            backgroundColor: '#080808',
            elevation: 0,
            borderTopWidth: 0,
            borderTopColor: 'transparent',
            paddingTop: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Main}
          options={{
            tabBarIcon: props => <Icon name="home" size={20} color="#fff" />,
            title: 'Início',
          }}
        />
        <Tab.Screen
          name="Buscar"
          component={User}
          options={{
            tabBarIcon: props => <Icon name="search1" size={20} color="#aaa" />,
            title: 'Buscar',
          }}
        />

        <Tab.Screen
          name="EmBreve"
          component={User}
          options={{
            tabBarIcon: props => (
              <IconM name="airplay" size={20} color="#aaa" />
            ),
            title: 'Buscar',
          }}
        />

        <Tab.Screen
          name="Downloads"
          component={User}
          options={{
            tabBarIcon: props => (
              <Icon name="download" size={20} color="#aaa" />
            ),
            title: 'Buscar',
          }}
        />

        <Tab.Screen
          name="Mais"
          component={User}
          options={{
            tabBarIcon: props => <IconM name="menu" size={20} color="#aaa" />,
            title: 'Buscar',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
