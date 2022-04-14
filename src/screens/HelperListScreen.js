import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import * as AppConstants from '../constants/AppConstants';

export default function RegisterScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/bgs.png')}
      style={{
        width: AppConstants.pixelNormalize(410),
        height: AppConstants.pixelNormalize(812),
        marginLeft: AppConstants.pixelNormalize(-10),
      }}>
      <View
        style={{
          height: AppConstants.pixelNormalize(60),
          width: '100%',
          backgroundColor: '#ffffff',
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginTop: AppConstants.pixelNormalize(20),
            fontSize: AppConstants.pixelNormalize(20),
            fontWeight: 'bold',
          }}>
          Select Helper
        </Text>
      </View>
      <View style={styles.scroll}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#ffffff',
              marginTop: AppConstants.pixelNormalize(10),
              padding: AppConstants.pixelNormalize(5),
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 1,
              elevation: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  height: AppConstants.pixelNormalize(75),
                  width: AppConstants.pixelNormalize(75),
                  marginTop: AppConstants.pixelNormalize(15),
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(20),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                  onPress={() => {
                      props.navigation.navigate({routeName: 'Profile'});
                  }}>
                  Name: Mr. Avinash Kanhere
                </Text>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(18),
                    color: '#000080',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Carpenter
                </Text>
                <TouchableOpacity
                  style={{
                    // width: pixelNormalizeByAdobeXD(101),
                    width: AppConstants.pixelNormalize(100),
                    height: AppConstants.pixelNormalize(30),
                    marginTop: AppConstants.pixelNormalize(20),
                    marginLeft: AppConstants.pixelNormalize(75),
                    backgroundColor: '#000080',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: AppConstants.pixelNormalize(15),
                      fontWeight: 'bold',
                    }}
                    onPress={() => {
                        props.navigation.navigate({routeName: 'Payment'});
                    }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffffff',
              marginTop: AppConstants.pixelNormalize(10),
              padding: AppConstants.pixelNormalize(5),
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 1,
              elevation: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  height: AppConstants.pixelNormalize(75),
                  width: AppConstants.pixelNormalize(75),
                  marginTop: AppConstants.pixelNormalize(15),
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(20),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Name: Mr. Rahul Kumar
                </Text>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(18),
                    color: '#000080',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Carpenter
                </Text>
                <TouchableOpacity
                  style={{
                    // width: pixelNormalizeByAdobeXD(101),
                    width: AppConstants.pixelNormalize(100),
                    height: AppConstants.pixelNormalize(30),
                    marginTop: AppConstants.pixelNormalize(20),
                    backgroundColor: '#000080',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: AppConstants.pixelNormalize(75),
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: AppConstants.pixelNormalize(15),
                      fontWeight: 'bold',
                    }}
                    onPress={() => {
                        props.navigation.navigate({routeName: 'Payment'});
                    }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffffff',
              marginTop: AppConstants.pixelNormalize(10),
              padding: AppConstants.pixelNormalize(5),
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 1,
              elevation: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  height: AppConstants.pixelNormalize(75),
                  width: AppConstants.pixelNormalize(75),
                  marginTop: AppConstants.pixelNormalize(15),
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(20),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Name: Mr. Shayan Chaterjee
                </Text>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(18),
                    color: '#000080',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Carpenter
                </Text>
                <TouchableOpacity
                  style={{
                    // width: pixelNormalizeByAdobeXD(101),
                    // width: '33.33%',
                    width: AppConstants.pixelNormalize(100),
                    height: AppConstants.pixelNormalize(30),
                    marginTop: AppConstants.pixelNormalize(20),
                    backgroundColor: '#000080',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: AppConstants.pixelNormalize(75),
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: AppConstants.pixelNormalize(15),
                      fontWeight: 'bold',
                    }}
                    onPress={() => {
                        props.navigation.navigate({routeName: 'Payment'});
                    }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffffff',
              marginTop: AppConstants.pixelNormalize(10),
              padding: AppConstants.pixelNormalize(5),
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 1,
              elevation: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  height: AppConstants.pixelNormalize(75),
                  width: AppConstants.pixelNormalize(75),
                  marginTop: AppConstants.pixelNormalize(15),
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(20),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Name: Mr. Avinash Kanhere
                </Text>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(18),
                    color: '#000080',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Carpenter
                </Text>
                <TouchableOpacity
                  style={{
                    // width: pixelNormalizeByAdobeXD(101),
                    // width: '33.33%',
                    width: AppConstants.pixelNormalize(100),
                    height: AppConstants.pixelNormalize(30),
                    marginTop: AppConstants.pixelNormalize(20),
                    backgroundColor: '#000080',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: AppConstants.pixelNormalize(75),
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: AppConstants.pixelNormalize(15),
                      fontWeight: 'bold',
                    }}
                    onPress={() => {
                        props.navigation.navigate({routeName: 'Payment'});
                    }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffffff',
              marginTop: AppConstants.pixelNormalize(10),
              padding: AppConstants.pixelNormalize(5),
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 1,
              elevation: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  height: AppConstants.pixelNormalize(75),
                  width: AppConstants.pixelNormalize(75),
                  marginTop: AppConstants.pixelNormalize(15),
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(20),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Name: Mr. Rahul Kumar
                </Text>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(18),
                    color: '#000080',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Carpenter
                </Text>
                <TouchableOpacity
                  style={{
                    // width: pixelNormalizeByAdobeXD(101),
                    // width: '33.33%',
                    width: AppConstants.pixelNormalize(100),
                    height: AppConstants.pixelNormalize(30),
                    marginTop: AppConstants.pixelNormalize(20),
                    backgroundColor: '#000080',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: AppConstants.pixelNormalize(75),
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: AppConstants.pixelNormalize(15),
                      fontWeight: 'bold',
                    }}
                    onPress={() => {
                        props.navigation.navigate({routeName: 'Payment'});
                    }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffffff',
              marginTop: AppConstants.pixelNormalize(10),
              padding: AppConstants.pixelNormalize(5),
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 1,
              elevation: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  height: AppConstants.pixelNormalize(75),
                  width: AppConstants.pixelNormalize(75),
                  marginTop: AppConstants.pixelNormalize(15),
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(20),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Name: Mr. Shayan Chaterjee
                </Text>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(18),
                    color: '#000080',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Carpenter
                </Text>
                <TouchableOpacity
                  style={{
                    // width: pixelNormalizeByAdobeXD(101),
                    width: '33.33%',
                    height: AppConstants.pixelNormalize(30),
                    marginTop: AppConstants.pixelNormalize(20),
                    backgroundColor: '#000080',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: AppConstants.pixelNormalize(15),
                      fontWeight: 'bold',
                    }}
                    onPress={() => {
                        props.navigation.navigate({routeName: 'Payment'});
                    }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#ffffff',
              marginTop: AppConstants.pixelNormalize(10),
              padding: AppConstants.pixelNormalize(5),
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 1,
              elevation: 8,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  height: AppConstants.pixelNormalize(75),
                  width: AppConstants.pixelNormalize(75),
                  marginTop: AppConstants.pixelNormalize(15),
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(20),
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Name: Mr. Shayan Chaterjee
                </Text>
                <Text
                  style={{
                    fontSize: AppConstants.pixelNormalize(18),
                    color: '#000080',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Carpenter
                </Text>
                <TouchableOpacity
                  style={{
                    // width: pixelNormalizeByAdobeXD(101),
                    width: '33.33%',
                    height: AppConstants.pixelNormalize(30),
                    marginTop: AppConstants.pixelNormalize(20),
                    backgroundColor: '#000080',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: AppConstants.pixelNormalize(15),
                      fontWeight: 'bold',
                    }}
                    onPress={() => {
                      props.navigation.navigate({routeName: 'Payment'});
                    }}>
                    Book Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scroll: {
    height: AppConstants.pixelNormalize(650),
  },
});
