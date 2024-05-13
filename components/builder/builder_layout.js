import React from 'react';
import {ScrollView, Dimensions, StyleSheet, Text} from 'react-native';
import {Card, DataTable} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

export default function builderLayout({navigation}) {
  return (
    <ScrollView>
      <DataTable.Row style={styles.row}>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('BuilderMap', {th: 9})}>
          <Card>
            <Card.Cover
              source={require('../../resources/builder_base/9.png')}
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
              9 Builder Base
            </Text>
          </Card>
        </DataTable.Cell>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('BuilderMap', {th: 8})}>
          <Card>
            <Card.Cover
              source={require('../../resources/builder_base/8.png')}
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
              8 Builder Base
            </Text>
          </Card>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row style={styles.row}>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('BuilderMap', {th: 7})}>
          <Card>
            <Card.Cover
              source={require('../../resources/builder_base/7.png')}
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
              7 Builder Base
            </Text>
          </Card>
        </DataTable.Cell>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('BuilderMap', {th: 6})}>
          <Card>
            <Card.Cover
              source={require('../../resources/builder_base/6.png')}
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
              6 Builder Base
            </Text>
          </Card>
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row style={styles.row}>
        <DataTable.Cell
          style={styles.card}
          onPress={() => navigation.navigate('BuilderMap', {th: 5})}>
          <Card>
            <Card.Cover
              source={require('../../resources/builder_base/5.png')}
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
              5 Builder Base
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
