import React from 'react';
import { View, Text, Button, Linking, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function FunnyMap({navigation, route}) {
  return (
    <ScrollView>{cardArray(route.params.th)}</ScrollView>
  );
}
function cardArray(th, category) {
  let cards = [];
  let funnyLayouts = BaseService.getFunnyLayouts(th);
  for (let i = 0; i < funnyLayouts.length; i++) {
    let card = (
      <View>
        <Card style={{marginTop: 30}}>
          <Card.Cover
            source={{
              uri: funnyLayouts[i].image_link,
            }}
          />
        </Card>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name="arrow-down-bold" size={20} color="#900" />
            <Text style={{color: '#900'}}>100</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="heart" size={20} color="#900" />
            <Text style={{color: '#900'}}>100</Text>
          </View>
        </View>
        <Button
          style={{marginBottom: 30}}
          color="#900"
          title="download"
          onPress={async () => {
            await Linking.openURL(funnyLayouts[i].link);
          }}
        />
      </View>
    );
    cards.push(card);
  }
  console.log('cards:', cards);
  return cards;
}
