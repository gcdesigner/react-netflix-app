import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';

import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Details from '~/pages/Details';
import Video from '~/pages/Video';
import CommingSoon from '~/pages/CommingSoon';
import Downloads from '~/pages/Downloads';
import More from '~/pages/More';

import SearchHeader from '~/components/SearchHeader';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const VideoStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
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
    <HomeStack.Screen
      name="Video"
      component={VideoStackScreen}
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
    <SearchStack.Screen
      name="Details"
      component={Details}
      options={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        title: null,
      }}
    />
  </SearchStack.Navigator>
);

const VideoStackScreen = () => (
  <VideoStack.Navigator headerMode="none" mode="modal">
    <VideoStack.Screen
      name="Video"
      component={Video}
      options={{
        gestureEnabled: false,
        headerStatusBarHeight: 0,
      }}
    />
  </VideoStack.Navigator>
);

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      lazy={true}
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
        component={CommingSoon}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconM name="airplay" size={20} focused={focused} color={color} />
          ),
          title: 'Em breve',
        }}
      />

      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="download" size={20} focused={focused} color={color} />
          ),
          title: 'Downloads',
        }}
      />

      <Tab.Screen
        name="Mais"
        component={More}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <IconM name="menu" size={20} focused={focused} color={color} />
          ),
          title: 'Mais',
        }}
      />
    </Tab.Navigator>
  );
}
