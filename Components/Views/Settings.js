import {
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth } from "../../FireBase/FireBase";

const styles = require("../Styles/MainStyle");

const Settings = ({ navigation }) => {
	const handleSignOut = async () => {
		await auth
			.signOut()
			.then(() => navigation.navigate("Login"))
			.catch((error) => alert(error.message));
	};

	return (
		<LinearGradient
			style={styles.container}
			colors={["#000000", "#00334a", "#000000"]}
			start={[0, 0]}
			end={[1, 1]}
		>
			<View style={styles.bannerWithButton}>
				<TouchableOpacity
					onPress={() => navigation.goBack(null)}
				>
					<Icon
						name={"chevron-left"}
						size={40}
						color="rgba(0, 207, 138,0.8)"
					/>
				</TouchableOpacity>
				<Text style={styles.bannerTextWithButton}>
					Settings
				</Text>
			</View>
			<View style={styles.content}>
				<Text
					style={[
						styles.competitonTitle,
						{ fontSize: 20, paddingTop: "10%" },
					]}
				>
					Do you realy wana sign out?
				</Text>
				<View style={styles.settingsBox}>
					<TouchableOpacity
						style={styles.settingOption}
						onPress={() => handleSignOut()}
					>
						<View style={styles.settingsIconBox}>
							<View>
								<Icon
									name="reply"
									size={40}
									color={"rgba(238, 22, 69, 0.8)"}
								/>
							</View>
						</View>
						<View style={styles.settingsTextBox}>
							<Text style={styles.settingsText}>
								SIGN OUT
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
};

export default Settings;
