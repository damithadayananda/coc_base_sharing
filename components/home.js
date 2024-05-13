import React from 'react';
import {
  Dimensions,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import {
  Card,
} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CardTitle } from "react-native-material-cards";

const {width, height} = Dimensions.get('window');

export default function home({navigation}) {
  const {width, height} = Dimensions.get('window');
  return (
    <ImageBackground
      source={require('../resources/background.png')}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          height: 0.5 * height,
          marginBottom: height * 0.1,
        }}>
        <DataTable.Row style={{marginBottom: 0.2 * height}}>
          <Card style={{height: 0.2 * height, width: 0.45 * width, marginRight:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeLayout')}>
              <Card.Cover
                source={require('../resources/home_base.jpg')}
                title="Home base design"
                textStyle={{fontSize: 15}}
                style={{padding: 15}}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: height * 0.1,
                  left: width * 0.1,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#ffffff'
                }}>
                Home Layouts
              </Text>
            </TouchableOpacity>
          </Card>
          <Card style={{height: 0.2 * height, width: 0.45 * width, marginRight:10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BuilderLayout')}>
              <Card.Cover
                source={require('../resources/builder_base.png')}
                title="Builder base design"
                textStyle={{fontSize: 15}}
                style={{padding: 15}}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: height * 0.1,
                  left: width * 0.1,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#ffffff'
                }}>
                Builder Layouts
              </Text>
            </TouchableOpacity>
          </Card>
        </DataTable.Row>
        <DataTable.Row style={{marginBottom: 0.1 * height}}>
          <Card
            style={{
              height: 0.2 * height,
              width: 0.45 * width,
              marginRight: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('FunnyLayout')}>
              <Card.Cover
                source={require('../resources/funny_base.jpg')}
                title="Funny layouts"
                textStyle={{fontSize: 15}}
                style={{padding: 15}}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: height * 0.1,
                  left: width * 0.1,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#ffffff',
                }}>
                Funny Layouts
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              height: 0.2 * height,
              width: 0.45 * width,
              marginRight: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
              <Card.Cover
                source={require('../resources/guide.jpg')}
                style={{padding: 15}}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: height * 0.1,
                  left: width * 0.08,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#ffffff',
                }}>
                Guide and News
              </Text>
            </TouchableOpacity>
          </Card>
        </DataTable.Row>
      </View>
    </ImageBackground>
  );
}
