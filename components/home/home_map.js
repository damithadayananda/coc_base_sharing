import React from 'react';
import {ScrollView, View, Text, Button, Linking} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TabView, SceneMap} from 'react-native-tab-view';


export default function homeMap({navigation, route}) {
  // return <ScrollView>{cardArray(route.params.th)}</ScrollView>;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'war', title: 'WAR' },
    { key: 'trophy', title: 'TROPHY' },
    { key: 'farming', title: 'FARMING' },
  ]);
  return(
    <TabView
      onIndexChange={setIndex}
      navigationState={{index, routes}}
      renderScene={SceneMap({
        war: () => <ScrollView>{cardArray(route.params.th, 'war')}</ScrollView>,
        trophy: () => (
          <ScrollView>{cardArray(route.params.th, 'trophy')}</ScrollView>
        ),
        farming: () => (
          <ScrollView>{cardArray(route.params.th, 'farming')}</ScrollView>
        ),
      })}
    />
  );
}

function cardArray(th, category) {
  let cards = [];
  let homeLayouts = BaseService.getHomeLayouts(th, category);
  for (let i = 0; i < homeLayouts.length; i++) {
    let card = (
      <View>
        <Card style={{marginTop: 30}}>
          <Card.Cover
            source={{
              uri: homeLayouts[i].image_link,
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
            await Linking.openURL(homeLayouts[i].link);
          }}
        />
      </View>
    );
    cards.push(card);
  }
  console.log('cards:', cards);
  return cards;
}
