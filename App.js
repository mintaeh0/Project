import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigationApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Weight">
        <Tab.Screen
          name="Weight"
          component={WeightScreen}
          options={{
            title: '체성분 관리',
            tabBarIcon: ({color, size}) => (
              <Icon name="heart-pulse" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Diet"
          component={DietScreen}
          options={{
            title: '식단관리',
            tabBarIcon: ({color, size}) => (
              <Icon name="silverware-fork-knife" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: '프로필',
            tabBarIcon: ({color, size}) => (
              <Icon name="account-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function WeightScreen() {
  return (
    <View style={{padding: 10}}>
      <View style={styles.defaultArea}>
        
      </View>
      <View style={styles.defaultArea}>
        
      </View>
    </View>
  )
}

function DietScreen() {
  return <Text>식단조절</Text>;
}

function ProfileScreen() {
  return <Text>프로필</Text>;
}




const styles = StyleSheet.create({
  defaultArea: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BDBDBD',
    borderWidth: 2,
    borderStyle: 'solid',
    marginBottom: 10,
  },
});
