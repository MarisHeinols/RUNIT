import React, {
	useCallback,
	useEffect,
	useState,
} from "react";
import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	TextInput,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { auth } from "../../FireBase/FireBase";

const styles = require("../Styles/MainStyle");

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
			})
			.catch((error) => alert(error.message));
	};

	useEffect(() => {
		console.log("using effect");
		const unsubscribe = auth.onAuthStateChanged(
			(user) => {
				if (user) {
					navigation.navigate("Home");
				}
			}
		);
		return unsubscribe;
	}, []);

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
						LOGIN
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
						onPress={handleLogin}
						style={styles.button}
					>
						<View>
							<Text
								style={[
									styles.smallText,
									{ paddingBottom: 0 },
								]}
							>
								LOGIN
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("Register")
						}
						style={[
							styles.button,
							{
								backgroundColor:
									"rgba(26, 177, 219,0.8)",
								height: "10%",
								borderRadius: 10,
							},
						]}
					>
						<View>
							<Text
								style={[
									styles.smallText,
									{
										paddingBottom: 0,
										opacity: 0.8,
									},
								]}
							>
								REGISTER
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
};

export default Login;
