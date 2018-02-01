import React, {Component} from 'react';
import { StyleSheet, Text, View, PanResponder, Animated, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import target from '../../public/img/target.png';
import SocketIOClient from 'socket.io-client';
import Orientation from 'react-native-orientation';
import Draggable from './Draggable'
import sushi from '../../public/img/sushi.png'

export default class GameRoom extends Component {
  constructor(){
    super()

    this.state = {
      imageArray: [target, sushi]
    }
  }
  render() {
    let idx = 0
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        
        <View>
          {this.state.imageArray.map(elem => {
            idx++
            return (
              
                <Draggable img={elem}/>
              
            )
          })}
        </View>
      </View>
    );
  }
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});