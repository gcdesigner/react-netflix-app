import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';
import User from './pages/User';
import Search from './pages/Search';

import SearchHeader from './components/SearchHeader';

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fff',
    background: '#1A191A',
    card: '#111',
    text: '#fff',
    border: '#fff',
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  function stackScreen() {
    return (
      <Stack.Navigator headerMode="screen" mode="card">
        <Stack.Screen
          name="Buscar"
          component={Search}
          // options={{
          //   headerTitle: props => <SearchHeader {...props} />,
          //   headerStyle: {
          //     // backgroundColor: 'transparent',
          //     elevation: 0,
          //   },
          //   transitionSpec: {
          //     open: config,
          //     close: config,
          //   },
          // }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
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
            backgroundColor: '#121212',
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
          component={stackScreen}
          options={{
            tabBarIcon: props => <Icon name="search1" size={20} color="#aaa" />,
            title: 'Buscas',
          }}
        />

        <Tab.Screen
          name="EmBreve"
          component={User}
          options={{
            tabBarIcon: props => (
              <IconM name="airplay" size={20} color="#aaa" />
            ),
            title: 'Em breve',
          }}
        />

        <Tab.Screen
          name="Downloads"
          component={User}
          options={{
            tabBarIcon: props => (
              <Icon name="download" size={20} color="#aaa" />
            ),
            title: 'Downloads',
          }}
        />

        <Tab.Screen
          name="Mais"
          component={User}
          options={{
            tabBarIcon: props => <IconM name="menu" size={20} color="#aaa" />,
            title: 'Mais',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
