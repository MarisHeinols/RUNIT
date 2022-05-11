import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
} from "react-native";
import React, {
	useEffect,
	useState,
} from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import NavBar from "../Navigation/NavBar";
import { auth } from "../../FireBase/FireBase";
import { db } from "../../FireBase/FireBase";

const styles = require("../Styles/MainStyle");

const Profile = ({ navigation }) => {
	const [competitions, setCompetitions] =
		useState([]);

	const fetchCompetitons = async () => {
		var exportData = [];
		db.collection("UserCompetitions")
			.where(
				"userId",
				"==",
				auth.currentUser?.uid
			)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach(
					(documentSnapshot) => {
						exportData.push(
							documentSnapshot.data()
						);
						console.log(documentSnapshot.data());
					}
				);
				setCompetitions(exportData);
			});
	};

	useEffect(async () => {
		console.log();
		await fetchCompetitons();
	}, []);

	const Item = ({ data }) => (
		<View style={styles.callendarCompetitionBox}>
			<View>
				<Text style={styles.competitonTitle}>
					{data.item.title}
				</Text>
				<View>
					<Text style={styles.competitonInfo}>
						{data.item.place}
					</Text>
					<Text style={styles.competitionDate}>
						{data.item.date}
					</Text>
				</View>
			</View>
			{data.item.attended ? (
				<Icon
					name="check"
					size={30}
					color="rgba(0, 207, 138,0.8)"
				/>
			) : (
				<Icon
					name="times-circle"
					size={30}
					color="rgba(199, 54, 63,0.8)"
				/>
			)}
		</View>
	);

	const renderItem = (compettionData) => (
		<Item data={compettionData} />
	);
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
						Profile
					</Text>
				</View>
				<View style={styles.profileBox}>
					<Text
						style={[
							styles.smallText,
							{ paddingBottom: 0 },
						]}
						numberOfLines={1}
					>
						{auth.currentUser?.email}
					</Text>
					<View style={styles.settings}>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Settings")
							}
						>
							<Icon
								name="cog"
								size={20}
								color="rgba(255, 255, 255,0.6)"
								light
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={styles.profileCompetitionBox}
				>
					<FlatList
						data={competitions}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					></FlatList>
				</View>
				<NavBar navigation={navigation} />
			</View>
		</LinearGradient>
	);
};

export default Profile;
