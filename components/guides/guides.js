import React from 'react';
import { View, Text, Button, Linking, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function Guides(){
  return (
    <ScrollView>
      {cardArray()}
    </ScrollView>
  );
}

function cardArray() {
  let cards = [];
  let guides = BaseService.getGuide();
  for (let i = 0; i < guides.length; i++) {
    let card = (
      <View>
        <Card style={{marginTop: 30}}>
          <Card.Cover
            source={{
              uri: guides[i].image_url,
            }}
          />
          <Card.Content>
            <Title>{guides[i].headline}</Title>
            <Paragraph>{guides[i].description}</Paragraph>
          </Card.Content>
        </Card>
        <Button
          style={{marginBottom: 30}}
          color="#900"
          title="see more"
          onPress={async () => {
            await Linking.openURL(guides[i].link);
          }}
        />
      </View>
    );
    cards.push(card);
  }
  console.log('cards:', cards);
  return cards;
}
