import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


import { ButtonGroup, ListItem, Input } from 'react-native-elements';

export class Gratitude extends React.Component<{}, { selectedIndex: number; calendarViewIsVisible: boolean, dailyViewIsVisible: boolean; }> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 1,
      calendarViewIsVisible: false,
      dailyViewIsVisible: true
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(index: any) {
    if (index === 0) {
      this.setState({ selectedIndex: index, calendarViewIsVisible: true, dailyViewIsVisible: false });
    }
    else {
      this.setState({ selectedIndex: index, calendarViewIsVisible: false, dailyViewIsVisible: true });

    }
    console.log('updateIndex: %o', index);
  }

  render() {
    const buttons = ['Calendar', 'Daily'];
    const { selectedIndex } = this.state;

    if (this.state.calendarViewIsVisible) {
      return (
        <View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 30 }}
          />
          <View>
            <Calendar
              // Collection of dates that have to be marked. Default = {}
              markedDates={{
                '2012-05-16': { selected: true, marked: true, selectedColor: 'blue' },
                '2012-05-17': { marked: true },
                '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                '2012-05-19': { disabled: true, disableTouchEvent: true }
              }}
            />
          </View>
        </View>

      );
    } else {
      return (
        <View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 30 }}
          />
          <View>
            <Input
              placeholder='Add Daily GRATITUDE'
            />
            <Input
              value='I am thankful for the opportunity to create.'
            />
            <Input
              value='I am thankful for the opportunity to breathe.'
            />
            <Input
              value='I am thankful for the opportunity to be me.'
            />
            <Input
              value='I am thankful for the opportunity to serve.'
            />
            <Input
              value='I am thankful for the opportunity to learn.'
            />
          </View>
        </View>
      );
    }

  }
}

// const GratitudeScreen = ({navigation}:any) => (
//   <SafeAreaView>
//     <Text>Screen: Gratitude</Text>

//     <TouchableHighlight onPress={() => navigation.navigate('Login')}>
//       <Text>Go to Login</Text>
//     </TouchableHighlight>
//   </SafeAreaView>
// );

// export default GratitudeScreen;