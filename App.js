import { StyleSheet, Text, View, Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import StatBlock from './components/StatBlock';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Image style={styles.avatar} source={require('./assets/profile.png')}/>
      <View style={styles.userTitle}>
        <Text style={styles.userName}>Vel Kumar P</Text>
        <Text style={styles.userJob}>UI/UX Designer</Text>
      </View>
      <View style={styles.userStatContainer}>
        <StatBlock title='Projects' count='11' ></StatBlock>
        <StatBlock title='Following' count='250' ></StatBlock>
        <StatBlock title='Followers' count='185' ></StatBlock>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ullamcorper arcu. Vestibulum iaculis interdum molestie. Suspendisse sodales, est vitae sollicitudin.</Text>
      </View>
      <View style={styles.socMedContainer}>
        <Image style={styles.socMedIcon} source={require('./assets/facebook.png')}></Image>
        <Image style={styles.socMedIcon} source={require('./assets/twitter.png')}></Image>
        <Image style={styles.socMedIcon} source={require('./assets/google-plus.png')}></Image>
      </View>
      <View style={styles.viewContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  avatar: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    backgroundColor: 'grey',
  },
  userTitle: {
    paddingTop: 30,
    alignItems: 'center',
  },
  userName: {
    fontSize: 30,
  },
  userJob: {
    fontSize: 18,
    color: 'grey'
  },
  userStatContainer: {
    paddingTop: 30,
    flexDirection: 'row',
  },

  userInfoContainer: {
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  userInfo: {
    textAlign: 'center',
    color: 'grey'
  },
  socMedContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socMedIcon: {
    margin: 10,
    width: 30,
    height: 30,
  },
  viewContainer: {
    paddingTop: 30,
    
  },
  button: {
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    backgroundColor: '#4dc4c1',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  }
});
