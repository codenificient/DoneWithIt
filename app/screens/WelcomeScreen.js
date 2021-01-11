import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Color from '../config/colors';

export default function WelcomeScreen() {
	return (
		<ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
			
            <View style={styles.logoContainer}>

                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>
			<View>
				<View style={styles.loginButton}>
					<Button title="login" />
				</View>
				<View style={styles.registerButton}>
					<Button title="register" />
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 50,
        alignItems: 'center'
    },
	logo: {
		width: 100,
		height: 100,
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: Color.accent
	},
	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: Color.primary
	}
});
