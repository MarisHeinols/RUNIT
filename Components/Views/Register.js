import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Alert,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../../FireBase/FireBase";

const Register = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async () => {
		await auth
			.createUserWithEmailAndPassword(
				email,
				password
			)
			.then((userCredentials) => {
				const user = userCredentials.user;
				Alert.alert("User registered", "", [
					{
						text: "OK",
					},
				]);
				navigation.navigate("Login");
			})
			.catch((error) => alert(error.message));
	};

	const styles = require("../Styles/MainStyle");

	return (
		<LinearGradient
			style={styles.container}
			colors={["#000000", "#00334a", "#000000"]}
			start={[0, 0]}
			end={[1, 1]}
		>
			<View style={styles.content}>
				<View style={styles.banner}>
					<Text style={styles.bannerText}>
						REGISTER
					</Text>
				</View>
				<View style={styles.loginBox}>
					<TextInput
						style={styles.inputBox}
						placeholder="Email"
						numberOfLines={1}
						autoCorrect={false}
						clearButtonMode="always"
						placeholderTextColor="white"
						textContentType="emailAddress"
						value={email}
						onChangeText={(text) =>
							setEmail(text)
						}
					></TextInput>
					<TextInput
						style={styles.inputBox}
						placeholder="Password"
						numberOfLines={1}
						clearButtonMode="always"
						placeholderTextColor="white"
						textColor="white"
						textContentType="password"
						secureTextEntry={true}
						value={password}
						onChangeText={(text) =>
							setPassword(text)
						}
					></TextInput>
					<TouchableOpacity
						onPress={() => handleSignUp()}
						style={styles.button}
					>
						<View>
							<Text
								style={[
									styles.smallText,
									{ paddingBottom: 0 },
								]}
							>
								REGISTER
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Login")
						}
						style={[
							styles.button,
							{
								backgroundColor:
									"rgba(238, 22, 69, 0.8)",
								height: "10%",
								width: "40%",
							},
						]}
					>
						<View>
							<Text
								style={[
									styles.smallText,
									{ paddingBottom: 0 },
								]}
							>
								CANCEL
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
};

export default Register;
