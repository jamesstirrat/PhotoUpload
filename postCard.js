import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  ActivityIndicator
} from 'react-native';


class Card extends React.Component {
  state = {
    loading: true,
  }

  handleLoad = () => {
    this.setState({ loading: false });
  }

  render() {
    const { image } = this.props;
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
          )}

          <Image
            style={StyleSheet.absoluteFill}
            //need a uri to pull the image
            source={{uri: `${URL}${image}`}}
            onLoad={this.handleLoad}
          />
        </View>
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPhoto: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%'
}
});
