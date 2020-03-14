import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

import Main from '../pages/Main';
import Search from '../pages/Search';
import Details from '../pages/Details';
import User from '../pages/User';

import SearchHeader from '../components/SearchHeader';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Main}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        title: null,
      }}
    />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={{
        title: 'teste',
        headerTitle: () => <SearchHeader />,
      }}
    />
    <SearchStack.Screen name="Details" component={Details} />
  </SearchStack.Navigator>
);

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        background: 'red',
        inactiveTintColor: '#aaa',
        activeTintColor: '#fff',
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
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="home" size={20} focused={focused} color={color} />
          ),
          title: 'Início',
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="search1" size={20} focused={focused} color={color} />
          ),
          title: 'Buscas',
        }}
      />

      <Tab.Screen
        name="EmBreve"
        component={User}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconM name="airplay" size={20} focused={focused} color={color} />
          ),
          title: 'Em breve',
        }}
      />

      <Tab.Screen
        name="Downloads"
        component={User}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="download" size={20} focused={focused} color={color} />
          ),
          title: 'Downloads',
        }}
      />

      <Tab.Screen
        name="Mais"
        component={User}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconM name="menu" size={20} focused={focused} color={color} />
          ),
          title: 'Mais',
        }}
      />
    </Tab.Navigator>
  );

  // return (
  //   <Stack.Navigator initialRouteName="Home" headerMode="screen">
  //     <Stack.Screen
  //       name="Home"
  //       component={Tabs}
  //       options={
  //         {
  //           // headerShown: false,
  //         }
  //       }
  //     />
  //     <Stack.Screen
  //       name="Buscar"
  //       component={Tabs}
  //       options={{
  //         title: 'teste',
  //         headerTitle: () => <SearchHeader />,
  //       }}
  //     />
  //     <Stack.Screen
  //       name="Details"
  //       component={Details}
  //       options={{
  //         headerTransparent: true,
  //         headerBackTitleVisible: false,
  //         title: null,
  //       }}
  //     />
  //   </Stack.Navigator>
  // );
}
