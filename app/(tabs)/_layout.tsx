import { Tabs } from 'expo-router/tabs';
import React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

export const IconSymbol = ({ name, size, color }: { name: string; size: number; color: string }) => (
  <Text style={{ fontSize: size, color }}>{name}</Text>
);

export const HapticTab = (props: any) => (
  <TouchableOpacity {...props} />
);

export const Colors = {
  light: {
    tint: '#000',
  },
  dark: {
    tint: '#fff',
  },
};
export const useColorScheme = () => 'light';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
     
        headerShown: false,
        
        
        tabBarButton: HapticTab,
        
            
        
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            borderTopWidth: 0,
            backgroundColor: 'transparent',
            elevation: 0,
          },
          android: {
            elevation: 8,
            borderTopWidth: 0,
          },
          default: {},
        }),
        
        
        tabBarItemStyle: {
          paddingVertical: Platform.OS === 'ios' ? 4 : 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: -2,
        },
      }}>
      
      {/* Tab Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name={focused ? "house.fill" : "house"} 
              color={color} 
            />
          ),
        }}
      />
      
      {/* Tab Explore */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name={focused ? "paperplane.fill" : "paperplane"} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}