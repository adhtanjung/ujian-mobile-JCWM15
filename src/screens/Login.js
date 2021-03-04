import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert, Image} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {useDispatch} from 'react-redux';
import {withTheme, TextInput, Button} from 'react-native-paper';
import {userLoginAction} from '../redux/actions';

const Login = ({theme}) => {
  const dispatch = useDispatch();
  const {colors} = theme;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = () => {
    if (username && password) {
      dispatch(userLoginAction(username));
    } else {
      Alert.alert('Username or Password cannot be empty');
    }
  };

  return (
    <Grid style={{backgroundColor: colors.background}}>
      <Row style={styles.row1}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </Row>
      <Row style={{flexDirection: 'column', paddingHorizontal: 10}}>
        <Text
          style={[
            styles.loginText,
            {
              color: colors.primary,
            },
          ]}>
          LOGIN
        </Text>
        <TextInput
          label="Username"
          onChangeText={(e) => setUsername(e)}
          value={username}
          theme={{
            colors: {
              placeholder: 'gray',
            },
          }}
          style={[
            styles.input,
            {
              backgroundColor: colors.surface,
            },
          ]}
        />
        <TextInput
          label="Password"
          onChangeText={(e) => setPassword(e)}
          value={password}
          theme={{
            colors: {
              placeholder: 'gray',
            },
          }}
          style={[
            styles.input,
            {
              backgroundColor: colors.surface,
            },
          ]}
          secureTextEntry={true}
        />
        <Button style={styles.button} onPress={handleLoginSubmit}>
          LOGIN
        </Button>
      </Row>
    </Grid>
  );
};

export default withTheme(Login);

const styles = StyleSheet.create({
  row1: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderRadius: 12,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  button: {
    backgroundColor: 'black',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderRadius: 12,
    marginVertical: 5,
  },
});
