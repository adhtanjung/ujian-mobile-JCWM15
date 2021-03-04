import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header} from 'react-native-elements';
import {Button, withTheme, Card, Title, Paragraph} from 'react-native-paper';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCovidTotalAction} from '../redux/actions';

const Home = ({theme, navigation}) => {
  const {colors} = theme;
  const dispatch = useDispatch();
  const {global} = useSelector((state) => state.covid);

  const images = [
    {
      source: require('../assets/images/satu.png'),
    },
    {
      source: require('../assets/images/dua.png'),
    },
    {
      source: require('../assets/images/tiga.png'),
    },
    {
      source: require('../assets/images/empat.png'),
    },
    {
      source: require('../assets/images/lima.png'),
    },
    {
      source: require('../assets/images/enam.png'),
    },
  ];

  const renderImage = () => {
    return images.map((val, i) => {
      return (
        <View
          key={i}
          style={[
            styles.imgContainer,
            {
              backgroundColor: colors.surface,
            },
          ]}>
          <Image source={val.source} style={styles.img} />
        </View>
      );
    });
  };
  useEffect(() => {
    dispatch(fetchCovidTotalAction());
  }, [dispatch]);
  return (
    <>
      <Header
        leftComponent={{
          icon: 'menu',
          color: colors.primary,
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{text: 'COVID 19', style: {color: colors.primary}}}
        rightComponent={{icon: 'contact-support', color: colors.primary}}
        style={{backgroundColor: colors.primary}}
        containerStyle={{
          backgroundColor: colors.surface,
          borderBottomColor: 'transparent',
        }}
      />
      <Grid style={{backgroundColor: colors.background}}>
        <Row style={{flexDirection: 'column', margin: 20}} size={1}>
          <Text
            style={{
              color: colors.text,
              textAlign: 'center',
              fontSize: 20,
              marginBottom: 10,
            }}>
            CORONAVIRUS LIVE UPDATE
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Card style={styles.cardStyle}>
              <Card.Title
                title="Total"
                titleStyle={{fontSize: 15}}
                style={{borderBottomColor: 'grey', borderBottomWidth: 1}}
              />
              <Card.Content>
                <Title>{global.TotalConfirmed}</Title>
                <Paragraph>+{global.NewConfirmed}</Paragraph>
              </Card.Content>
            </Card>
            <Card
              style={[
                styles.cardStyle,
                {
                  marginHorizontal: 10,
                },
              ]}>
              <Card.Title
                title="Recovered"
                titleStyle={{fontSize: 15}}
                style={{borderBottomColor: 'grey', borderBottomWidth: 1}}
              />
              <Card.Content>
                <Title>{global.TotalRecovered}</Title>
                <Paragraph>+{global.NewRecovered}</Paragraph>
              </Card.Content>
            </Card>
            <Card style={styles.cardStyle}>
              <Card.Title
                title="Deaths"
                titleStyle={{fontSize: 15}}
                style={{borderBottomColor: 'grey', borderBottomWidth: 1}}
              />
              <Card.Content>
                <Title>{global.TotalDeaths}</Title>
                <Paragraph>+{global.NewDeaths}</Paragraph>
              </Card.Content>
            </Card>
          </View>
        </Row>
        <Row style={styles.healthTips} size={2}>
          <Text style={styles.bodyTitle}>Health Tips</Text>
          <View style={styles.healthTipsImg}>{renderImage()}</View>
        </Row>
      </Grid>
    </>
  );
};

export default withTheme(Home);

const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    alignItems: 'center',
    width: 120,
  },

  bodyTitle: {
    fontSize: 30,
    color: 'white',
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  imgContainer: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  healthTips: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
  healthTipsImg: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
