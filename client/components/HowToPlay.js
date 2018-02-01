import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import store, { playCard, getCurrentUser } from '../store';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AAA',
    justifyContent: 'center'
  }
})

class HowToPlay extends Component {
  constructor(props) {
    super(props)
    this.state = {}
}
  render() {
    return (
      <View style={styles.container}>
        <Button 
          onPress={() => {
            this.props.playCardDispatch('666', 'chopsticks')
            console.log(this.props.users)
          }}
          title="Press me"
        />
        <Text>This is my HowToPlay Component!</Text>
      </View>
    )
  }
};

const mapState = state => {
  return {
    users: state.users.all,
    currentUser: state.current

  }
}

const mapDispatch = dispatch => {
  return ({
    getCurrentUserDispatch(socketId) {
      dispatch(getCurrentUser(socketId))
    },
    playCardDispatch(socketId, card) {
      dispatch(playCard(socketId, card))
    }
  })
}


export default connect(mapState, mapDispatch)(HowToPlay);
