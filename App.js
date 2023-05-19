import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';

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

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.masterView}>
      <Button
        title = "체성분 등록"
        onPress={() => setIsModalVisible(!isModalVisible)}
      />
      <View style={[styles.defaultArea, {flex: 1}]}>
        <Text>체성분 차트</Text>
      </View>
      <Modal visible={isModalVisible}
        presentationStyle={"overFullScreen"}
        animationType={"slide"}
        transparent={true}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible)}}>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end'}}>
            <View style={{
              height: 500,
              flex: 1,
              backgroundColor: '#000'}}>

              <Text>체성분 등록 Modal</Text>

            </View>
          </View>

        </Modal>
    </View>
  )
}

function DietScreen() {
  return (
    <View style={styles.masterView}>
      <Button
        title = "식단추가"
        onPress={() => Alert.alert("식단추가 버튼")}
      />
      <View style={[styles.defaultArea, {flex: 1}]}>
        <Text>칼로리 차트</Text>
      </View>
    </View>
    
  )
}

function ProfileScreen() {
  return (
    <View style={styles.masterView}>
      <Text>프로필 확인 및 편집</Text>
      <Text>환경설정</Text>
    </View>
  )
}




const styles = StyleSheet.create({
  defaultArea: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BDBDBD',
    borderWidth: 2,
    borderStyle: 'solid',
    marginTop: 10,
  },
  masterView: {
    padding: 10,
    flex: 1,
  },
  defaultModal: {
    height: 300,
  },
});
