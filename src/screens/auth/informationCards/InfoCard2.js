import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from 'react-native';
  import React from 'react';
  import {useTheme} from '../../../assets/theme/Theme';
  import LinearGradient from 'react-native-linear-gradient';
  import {SvgXml} from 'react-native-svg';
  import {assets} from '../../../assets/image/assets';
  import CustomBtn from '../../../components/CustomBtn';
  
  const InfoCard2 = ({title, description, image, navigation}) => {
    const theme = useTheme();
  
    return (
      <ImageBackground
        source={require('../../../assets/image/bg.png')} // Your background image
        style={styles.background}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../../../assets/image/infoImg2.png')}
            style={styles.image}
          />
          <View style={{width: '100%', justifyContent:'flex-start'}}>
          <Text style={styles.title}>How it Works</Text>
          <Text style={styles.description}>
          We will include your date to our system so you can easily track your currencies
          </Text>
          <SvgXml xml={assets.NextSecond} style={{marginVertical: 20, marginLeft: 5}}/>
          </View>
          <View style={{width: '100%', alignItems:'flex-end'}}>
          <CustomBtn SVGIcon={assets.MoveNextArrow} style={{width: 40, height: 40, alignItems:'center', justifyContent:'center', borderRadius: 100}} onPress={()=>navigation.navigate('InfoCard3')}/>
          </View>
        </View>
      </ImageBackground>
    );
  };
  
  export default InfoCard2;
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    cardContainer: {
      borderRadius: 20,
      marginVertical: 10,
      alignItems: 'center',
      width: '85%',
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
      borderRadius: 10,
    },
    title: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
    description: {
      color: '#d3d3d3',
      fontSize: 16,
      marginVertical: 10,
    },
    buttonContainer: {
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginTop: 20,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  