import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  Dimensions,
  ImageBackground,
  TextInput,
} from 'react-native';
import * as AppConstants from '../constants/AppConstants';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function LoginScreen(props) {
  return (
    <ScrollView>
      <View>
        <View>
          <Image source={require('../assets/Top.png')} style={styles.img} />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.wbtxt}>Welcome back!</Text>
          </View>
          <View style={styles.loremcontainer}>
            <Text style={styles.lorem}>
              Without Labour Nothing Big is Possible
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.googleContainer}>
            <Image
              source={require('../assets/google.png')}
              style={styles.googleImg}
            />
            <Text style={styles.googletxt}>Google</Text>
          </View>
          <View style={styles.googleContainer}>
            <Image
              source={require('../assets/facebook.png')}
              style={styles.fbImg}
            />
            <Text style={styles.googletxt}>Facebook</Text>
          </View>
        </View>
        <View style={styles.InputUser}>
          <TextInput style={styles.txtUser} value="Suresh Raut" />
          <AntDesign
            style={styles.check}
            name="check"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.InputPass}>
          <TextInput style={styles.txtPass} value=". . . . . . . . " />
        </View>
        <View style={styles.Login_Btn}>
          <Text
            style={styles.login}
                  onPress={() => {
                props.navigation.navigate({ routeName: 'Category' });
            }}
          >
            login
          </Text>
        </View>
        <Text
          style={styles.register}
                onPress={() => {
              props.navigation.navigate({ routeName: 'Register' });
          }}
        >
          Register Here
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: AppConstants.pixelNormalize(324),
    height: AppConstants.pixelNormalize(221),
    //marginBottom: AppConstants.pixelNormalize(16),
    marginLeft: AppConstants.pixelNormalize(17.81),
    marginTop: AppConstants.pixelNormalize(30),
  },
  check: {
    marginTop: AppConstants.pixelNormalize(-40),
    marginLeft: AppConstants.pixelNormalize(295),
  },
  container: {
    width: AppConstants.pixelNormalize(325),
    height: AppConstants.pixelNormalize(60),
    marginLeft: AppConstants.pixelNormalize(28),
    marginTop: AppConstants.pixelNormalize(33),
  },
  wbtxt: {
    color: '#000000',
    width: AppConstants.pixelNormalize(200),
    height: AppConstants.pixelNormalize(27),
    marginLeft: AppConstants.pixelNormalize(60),
    fontSize: AppConstants.pixelNormalize(21),
    textAlign: 'center',
    justifyContent: 'center',
  },
  lorem: {
    color: '#AAAAAA',
    width: AppConstants.pixelNormalize(343),
    height: AppConstants.pixelNormalize(20),
    fontSize: AppConstants.pixelNormalize(14),
    marginTop: AppConstants.pixelNormalize(10),
    textAlign: 'center',
    // marginLeft: AppConstants.pixelNormalize(38),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  googleContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    width: AppConstants.pixelNormalize(139),
    height: AppConstants.pixelNormalize(55),
    borderRadius: 7,
    borderColor: '#0000000F',
    borderBottomWidth: 2,

    marginBottom: AppConstants.pixelNormalize(28),
    marginTop: AppConstants.pixelNormalize(22),
  },
  googleImg: {
    width: AppConstants.pixelNormalize(14.63),
    height: AppConstants.pixelNormalize(14.86),
    marginTop: AppConstants.pixelNormalize(21.07),
    marginLeft: AppConstants.pixelNormalize(30.38),
  },
  googletxt: {
    width: AppConstants.pixelNormalize(65),
    height: AppConstants.pixelNormalize(20),
    fontSize: AppConstants.pixelNormalize(14),
    color: '#000000',
    marginTop: AppConstants.pixelNormalize(20),
    marginLeft: AppConstants.pixelNormalize(13),
  },
  fbImg: {
    width: AppConstants.pixelNormalize(8.84),
    height: AppConstants.pixelNormalize(16.51),
    marginTop: AppConstants.pixelNormalize(19.24),
    marginLeft: AppConstants.pixelNormalize(25.25),
  },
  InputUser: {
    backgroundColor: 'rgba(115,203,220,0.42)',
    width: AppConstants.pixelNormalize(325),
    height: AppConstants.pixelNormalize(60),
    borderRadius: 10,
    marginLeft: AppConstants.pixelNormalize(26),
  },
  txtUser: {
    width: AppConstants.pixelNormalize(400),
    marginLeft: AppConstants.pixelNormalize(20),
    height: AppConstants.pixelNormalize(60),
    color: '#000000',
    fontSize: AppConstants.pixelNormalize(14),
  },
  InputPass: {
    backgroundColor: 'rgba(115,203,220,0.42)',
    width: AppConstants.pixelNormalize(325),
    height: AppConstants.pixelNormalize(60),
    borderRadius: 10,
    marginLeft: AppConstants.pixelNormalize(26),
    marginTop: AppConstants.pixelNormalize(23),
  },
  txtPass: {
    fontSize: AppConstants.pixelNormalize(34),
    marginLeft: AppConstants.pixelNormalize(19),
    color: '#1C1C1C',
  },
  Login_Btn: {
    backgroundColor: '#52bfe3',

    width: AppConstants.pixelNormalize(325),
    height: AppConstants.pixelNormalize(60),
    marginLeft: AppConstants.pixelNormalize(26),
    marginTop: AppConstants.pixelNormalize(23),
  },
  login: {
    // width: AppConstants.pixelNormalize(180),
    // height: AppConstants.pixelNormalize(20),
    fontSize: AppConstants.pixelNormalize(22),
    color: '#ffffff',
    // marginLeft: AppConstants.pixelNormalize(100),
    marginTop: AppConstants.pixelNormalize(12),
    textAlign: 'center',
  },
  register: {
    width: AppConstants.pixelNormalize(180),
    height: AppConstants.pixelNormalize(20),
    fontSize: AppConstants.pixelNormalize(14),
    color: '#000000',
    marginLeft: AppConstants.pixelNormalize(100),
    marginTop: AppConstants.pixelNormalize(10),
    textAlign: 'center',
  },
});
