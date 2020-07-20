import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableHighlight, View, FlatList } from 'react-native';

import { ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-community/picker';

const filterOptions: Array<string> = [
  'All',
  'Primary',
  'Career',
  'Family',
  'Wealth'
];

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

// function setFilter(value: any) {
//   console.log('setState:%o', value);
//   selectedFilter = value;
//   console.log('selectedFilter: %o', selectedFilter);
// }

function filterPicker() {
  const [selectedFilter, setFilter] = useState('primary');

  return (

    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button
          title='Add Goal'
          type='clear'
        />
        <Picker
          selectedValue={selectedFilter}
          style={{ height: 50, width: 120 }}
          onValueChange={(itemValue) => {
            setFilter(itemValue);
          }}>
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Primary" value="primary" />
          <Picker.Item label="Career" value="career" />
          <Picker.Item label="Family" value="family" />
          <Picker.Item label="Wealth" value="wealth" />
        </Picker>
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
}


// const GoalsScreen = ({ navigation }: any) => (

//   <View>
//     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//       <Button
//         title='Add Goal'
//         type='clear'
//       />
//       <Picker
//         selectedValue={selectedFilter}
//         style={{ height: 50, width: 100 }}
//         onValueChange={(itemValue, itemIndex) =>
//           setFilter(selectedFilter)
//         }>
//         <Picker.Item label="All" value="all" />
//         <Picker.Item label="Primary" value="primary" />
//         <Picker.Item label="Career" value="career" />
//         <Picker.Item label="Family" value="family" />
//         <Picker.Item label="Wealth" value="wealth" />
//       </Picker>
//       {/* <Button
//         icon={
//           <Icon
//             name='filter-list'
//             size={25}
//             color='grey'
//           />
//         }
//         type='clear'
//       /> */}
//     </View>

//     {

//       list.map((l, i) => (
//         <ListItem
//           key={i}
//           // leftAvatar={{ source: { uri: l.avatar_url } }}
//           leftIcon={{ name: 'camera-alt' }}
//           title={l.name}
//           // subtitle={l.subtitle}
//           bottomDivider
//         />
//       ))
//     }
//   </View>
// );

export default filterPicker;