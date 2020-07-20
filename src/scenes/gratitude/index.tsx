import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';

import { ButtonGroup } from 'react-native-elements';

export class Gratitude extends React.Component<{}, { selectedIndex: number; }> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 1
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['Calendar', 'Daily'];
    const { selectedIndex } = this.state;

    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 30 }}
      />
    );
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