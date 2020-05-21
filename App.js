/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image
} from 'react-native';

import { Container, Button } from 'native-base';
import ImagePicker from 'react-native-image-picker';

import { Provider } from 'react-redux';
import Store from './app/store/Index'


class Form extends React.Component {
  state = {
    imageData: null
  }


  getPhotoFromGallery = () => {
    ImagePicker.launchImageLibrary({}, (response)  => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        this.setState({ imageData: response });
      }
    });
  };

  onSubmit = () => {
    const { imageData } = this.state
    const { onSubmit } = this.props

    onSubmit({ imageData })
  }

  showPickedImage() {
    const { imageData } = this.state;

    if (imageData !== null) {
        return (
          <Image
          source={{ uri: imageData.uri }}
          style={{ alignSelf: 'center', width: 200, height: 200 }}
          />
        );
    } else {
      return (
        <View>
          <TouchableHighlight
            style={styles.addPhoto}
            onPress={this.getPhotoFromGallery}
          >
            <Text style={styles.addPhotoText}>Add Photo</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }

  render() {
    const { image, onSubmit } = this.props;

    return (
        <Provider store={Store}>
            <View style={styles.container}>
              {this.showPickedImage()}
              <Button style={styles.submit}
                onPress={this.onSubmit}
              >
              <Text> Submit </Text>
              </Button>
            </View>
        </Provider>
    );
  }
}

export default Form;

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