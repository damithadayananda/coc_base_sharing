import React from 'react';
import { ScrollView, Dimensions, StyleSheet, Text } from "react-native";
import {Card, DataTable} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

export default function FunnyLayout({navigation}) {
  return (
    <ScrollView>
      <DataTable.Row style={styles.row}>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('FunnyMap', {th: 14})}>
          <Card>
            <Card.Cover
              source={require('../../resources/home_townhall/14.png')}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 15,
                lineHeight: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#f0d74d',
              }}>
              14 Town Hall
            </Text>
          </Card>
        </DataTable.Cell>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('FunnyMap', {th: 13})}>
          <Card>
            <Card.Cover
              source={require('../../resources/home_townhall/13.png')}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 15,
                lineHeight: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#4de8f0',
              }}>
              13 Town Hall
            </Text>
          </Card>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row style={styles.row}>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('FunnyMap', {th: 12})}>
          <Card>
            <Card.Cover
              source={require('../../resources/home_townhall/12.png')}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 15,
                lineHeight: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#4daff0',
              }}>
              12 Town Hall
            </Text>
          </Card>
        </DataTable.Cell>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('FunnyMap', {th: 11})}>
          <Card>
            <Card.Cover
              source={require('../../resources/home_townhall/11.png')}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 15,
                lineHeight: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#adb5ba',
              }}>
              11 Town Hall
            </Text>
          </Card>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row style={styles.row}>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('FunnyMap', {th: 10})}>
          <Card>
            <Card.Cover
              source={require('../../resources/home_townhall/10.png')}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 15,
                lineHeight: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#540b04',
                color: '#ffffff',
              }}>
              10 Town Hall
            </Text>
          </Card>
        </DataTable.Cell>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('FunnyMap', {th: 9})}>
          <Card>
            <Card.Cover
              source={require('../../resources/home_townhall/9.png')}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 15,
                lineHeight: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#adb5ba',
              }}>
              9 Town Hall
            </Text>
          </Card>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row style={styles.row}>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('FunnyMap', {th: 8})}>
          <Card>
            <Card.Cover
              source={require('../../resources/home_townhall/8.png')}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 15,
                lineHeight: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#f0d74d',
              }}>
              8 Town Hall
            </Text>
          </Card>
        </DataTable.Cell>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('FunnyMap', {th: 7})}>
          <Card>
            <Card.Cover
              source={require('../../resources/home_townhall/7.png')}
              style={styles.image}
            />
            <Text
              style={{
                fontSize: 15,
                lineHeight: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#f0d74d',
              }}>
              7 Town Hall
            </Text>
          </Card>
        </DataTable.Cell>
      </DataTable.Row>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 0.2 * height,
    width: 0.5 * width,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  scrollView: {
    height: 0.2 * height,
  },
  row: {
    height: 0.2 * height,
  },
});
