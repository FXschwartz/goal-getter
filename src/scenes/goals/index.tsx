import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, View, FlatList } from 'react-native';

import { ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';


const list = [
  {
    name: 'I am so happy and grateful now that I have a beautiful app where all of my goals are stored by June 1, 2020',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    // subtitle: 'Vice President'
  },
  {
    name: 'I am so happy and grateful now that I am the CCO at My Organizaion',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    // subtitle: 'Vice Chairman'
  },
  {
    name: 'I am so happy and grateful now that I am making $$ each month',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    // subtitle: 'Vice Chairman'
  },
];

const GoalsScreen = ({ navigation }: any) => (

  <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Button
        title='Add Goal'
        type='clear'
      />
      <Button
        icon={
          <Icon
            name='filter-list'
            size={25}
            color='grey'
          />
        }
        type='clear'
      // title="Button with icon component"
      />
    </View>

    {

      list.map((l, i) => (
        <ListItem
          key={i}
          // leftAvatar={{ source: { uri: l.avatar_url } }}
          leftIcon={{ name: 'camera-alt' }}
          title={l.name}
          // subtitle={l.subtitle}
          bottomDivider
        />
      ))
    }
  </View>
);

// const GoalsScreen = ({navigation}:any) => (

//   <SafeAreaView>
//     <Text>Screen: Goals</Text>

//     <TouchableHighlight onPress={() => navigation.navigate('Login')}>
//       <Text>Go to Login</Text>
//     </TouchableHighlight>
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-around"
//       }}
//     >
//       <View style={{ backgroundColor: "blue", flex: 0.2 }} />
//       <View style={{ flex: 0.7 }}><Text>I am so happy and grateful now that I have a beautiful app where all of my goals are stored by June 1, 2020</Text></View>
//     </View>
//     <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//   </SafeAreaView>
// );

export default GoalsScreen;