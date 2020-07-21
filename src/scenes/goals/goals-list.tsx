import React, { useState, PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';

import { SafeAreaView, View, Text } from 'react-native';

import { ListItem, Button, Card } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { PickerIOS, Picker } from '@react-native-community/picker';

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
    avatar_url: 'https://www.prchecker.info/free-icons/128x128/goal_128_px.png',
    // subtitle: 'Vice President'
  },
  {
    name: 'I am so happy and grateful now that I am the CCO at My Organizaion',
    avatar_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAqFBMVEX////h5+wVNlHxX1FJv5+uu8XEzdOKmqj819T4r6j1h31IYnh7j58iQVu7xs9QaH3U3OKVpbJieIs7V25BXHLp7fHw8vQvTGRug5WhsLwYP1b4+fpVbYEpaW4iWGVUw6U2jIJGtprd8+05lIcscnN3z7dry7GN18McR1uZ28kve3j96+k8nYxDrpU/pZAyg3384d6759vo9/MfUGD6w77+9fT3pZ3G6+H6x6ZgAAAGrklEQVR4nO2b13riOhCAY22ws3HBNmBsII2E9J7dc97/zQ4adVkyLgonF8zFrj9ZaH7PjOooR0eaFMEcIRSXnv5ioFTTbbMo93fVS2JEpXKpvpiyZvOiWT8S4pBA6Edo2lTRiyUAtNNcrWUsNxs1VCwBMUkT+MXYlX4ftxYHqR8AQUN4YQNMwUn5jpqdBL4rxU8VfsqsFVNheM+lD7A9S/GYWyuCqegzDpvAEQA2bEIeg0bXygBjhwCSNX8mgOdTyTSA0ncjGsCUv6DfrXR+GcClSABCxoayvQKgAwAvizwsIw2AlA4XDSAUpQcAEwBdMOB1UeYIANoizUaNADAZkZoweIwcAYSIdfkCs5RWAG+yfYyxsVI8OMWO9HsQ+ng6LGBiruwAMBajPIB69hAYbSWFp0R58i314XPQPIjm8L9nBwATMJmnNgDhnlB5shIrvb9qAkgFQZzYmusO4OVCP49sI4CXsqqhzZ69ALyAznjziheZATzPj8IwjOyfj5VthVQolaembptmeRjmcg0bwN7kAHAA+FkA+Wj/ogD8X3IA+DkArnaBXeQAcAA4AJgATn5zeYKCJ1Hwh1T5I0q+AeD3Ly4nhEgUnJIqp6LkAHAAOACY210uC5Dlcrl3gGUxU9eds1kDhWuA5cy8+J0VFganADbtlMGIYAJ4OuHyFwr+ioJ3UuVdlLRUb0NwNxntVG9GcAVQtFEPCN8D0OrzjUZwArBsrx6LkjV1AdBRv+oGBwCt3W8kGA7Qwf0mgp4D0aDvVwiGAnT2v04wEKC3fk4wEIC0BcePYVQ1a/S8JFqF4Yodfy4dAEAA8nNdNA+a1I9CVi8cCYJBABCAiZzxDK1n614knwiU3AlDACAARkiRiY2gVOvluKwYCIAdQDO+0ygoIQ9hTfCQeuMgoKlI8NYwADAA+HUKyTDyjfyA3ceHcOK4HfDgXgZJG8Q+ccIAAGyAhDdL9YNpvaTkATfPs1SEilS1JHFoAvhzyoUsgN5FwT+qAaApT9WfkqSQ7PBEI8BuiEkcmgDaCXRBnNspVf1RjOqS+wqBz53VH4CMgdCQrD+ZGNTj7w0UAvwA41bRG6DgAD7Tv2IZP4QWZ5fPx1t5ub65p0WrlHZZTMBTwrPeADMJoKJfmdDOfn95LMnrGSmd+NQ6WwKREp70BFiK3p1VqrUXinpAOFdrTCE7POIDZB8AugxY4Q8nn89aP7+iam83m1uG8KZFBP6H5lp7AtB1EPM5ylmy8wwUXtz9S+qtPwjE9YK8zvgvVmKI1AFqh1QGUUdYHP+ppP9BXnoThFd4HQlmNmaHLUbCuvCFSMX0k9nuHGy/ppAprXyHSy/x+zm3WshaiIYBwMAO4x+2xQL7/5Z+fiVuS31gAugMGSUQOfGqF4C0FI3CiEUzupb0w+U1dhPvYfviakFN4I1WuchJj4YCSMGAHXCxZnWQBHC0YU6or9t6AdQ2AxUzwAOvowB8YicsEJsu3QPgMfAeG0DUUQCOcCDeINONEDcAeBS4UQygAXyyrli7EjB3AsA8sBZ1VICjW+qD2so5dAEA89yV4gEdAHeEc2TID7sD2GrYaADT8VbI3egPGgShDtDikGo3AO4EXwYAIkCw3r5+bAfQQnSAiI4CUgxKAIF7AH0gqmgvlC0gLu34TQB+LwB9V2yKgSILiJDLxCwGVvWfugJ4UXuBJrZeEPRbkNQdWRsHNMHjAJsPZckHrYi4TOhi5MH2AxwCz6aRcCIBdLjCrG+C8VywwHOB7WDeNhfghRQH6CB6KMFseGk3wZotCPTZMOsJgPQgmNOOaImCW9oJa9v3nAFkzfpqoscSrIje5BWR7gCxIpJlu5CJoUpRmjaVdtF9QNaEL2aCO2VNqHlgnljCZofo/QB8+HWsrMqILDd8b1Ibh3ektJqktiyEnQnZF9x9ShU/LviqvNYH9exBJ9EByO77jOzMNh/AsFw/gHqqv7YWGGCAuglScjDy9aLvTekI4NoAugn4TdjFo67++Yu+0q/IDjKAPiNJRyP3b1eS+mtpc64SDDSA2hHI6Qfvy+ePz6/Hxy/Pb2d0W4zySS0KBhpANUFCerkfIqPEFfGRDND8F3etRI7DEsUwymT6IR1YJiVRIp/kDnYAFmO+JtNOyuLSeD3ahX5bxsgPVswOYWlJIwwOgEYCoBiNGv40wZX+vkkbZ/p7EjjU3yZt/736j7rnLl3r75i9dNL/dengBgfjn1FaGsF8kcSJtDHCN6pvg/DN6gFBv8O0X/V2htm+tAuI2YzrLnZdJ9vKf0E1jtrBxdL9AAAAAElFTkSuQmCC',
    // subtitle: 'Vice Chairman'
  },
  {
    name: 'I am so happy and grateful now that I am making $$ each month',
    avatar_url: 'https://lh3.googleusercontent.com/proxy/AnI01wb0qH3wtrGGvPakTVP7CUKwn8nsn3AJ2C8CKEtEgyz6MZ9LbcH8Fxcomt-nbe80tBRoUmQ9-8JivoZalL_-nrHBjoK00PfJF6iW9wfX-g05hcwJty4wqHYoQ7sHt9qxV4lKn8AlTGq90bfojYxTj1n7d2yW9nZGwiL9w64h9RQ',
    // subtitle: 'Vice Chairman'
  },
];

// function setFilter(value: any) {
//   console.log('setState:%o', value);
//   selectedFilter = value;
//   console.log('selectedFilter: %o', selectedFilter);
// }

class GoalsList extends PureComponent {

  static propTypes = {
    navigator: PropTypes.object,
    componentId: PropTypes.string
  };

  constructor(props: any) {
    super(props);
    this.openGoal = this.openGoal.bind(this);
  }

  openGoal() {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Goals Detail',
        options: {
          topBar: {
            title: {
              text: 'Goal Detail',
              color: 'white',
              alignment: 'center'
            },
            background: {
              color: '#4d089a'
            }
          }
        }
      }
    });
  };

  render() {
    // const [selectedFilter, setFilter] = useState('primary');

    return (
      <SafeAreaView>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button
              title='Add Goal'
              type='clear'
              titleStyle={{ color: '#4d089a' }}
            />
            {/* <Picker
            selectedValue={selectedFilter}
            style={{ height: 50, width: 120 }}
            onValueChange={(itemValue: any) => {
              setFilter(itemValue);
            }}>
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Primary" value="primary" />
            <Picker.Item label="Career" value="career" />
            <Picker.Item label="Family" value="family" />
            <Picker.Item label="Wealth" value="wealth" />
          </Picker> */}
          </View>

          {

            list.map((u, i) => (
              <Card key={i} containerStyle={{ padding: 0 }}>
                {
                  <ListItem
                    onPress={() => this.openGoal()}
                    title={u.name}
                    leftAvatar={{ source: { uri: u.avatar_url }, rounded: true }}
                  />
                }
              </Card>
            ))
          }
        </View>
      </SafeAreaView>
    );
  }
}
export default GoalsList;