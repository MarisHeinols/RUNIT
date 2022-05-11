import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

import { db } from "../../FireBase/FireBase";
import { auth } from "../../FireBase/FireBase";

import HyperLink from "react-native-hyperlink";

const styles = require("../Styles/MainStyle");

const CompetitonInfo = ({
	navigation,
	route,
}) => {
	//States for attendence state change
	var [isDenyPress, setDenyIsPress] =
		React.useState(false);

	var [isIntrestPress, setIntrestIsPress] =
		React.useState(false);

	const checkAttendence = () => {
		db.collection("UserCompetitions")
			.doc(
				auth.currentUser.uid +
					route.params.item.title
			)
			.get()
			.then((snaoshot) => {
				if (snaoshot.data().attended == false) {
					setDenyIsPress(true);
				} else {
					setIntrestIsPress(true);
					true;
				}
				console.log(snaoshot.data());
			});
	};

	checkAttendence();

	var buttonIntrestProps = {
		style: isIntrestPress
			? styles.intrestButtonPressed
			: styles.intrestButtonNormal,
		onPress: () => {
			db
				.collection("UserCompetitions")
				.doc(
					auth.currentUser.uid +
						route.params.item.title
				)
				.set({
					attended: true,
					date: route.params.item.date,
					text: route.params.item.text,
					title: route.params.item.title,
					userId: auth.currentUser.uid,
					description:
						route.params.item.description,
					email: route.params.item.email,
					location: route.params.item.location,
					uri: route.params.item.uri,
					bulletinLink:
						route.params.item.bulletinLink,
					organizers:
						route.params.item.organizers,
				}),
				console.log("item sent");
			isIntrestPress
				? setIntrestIsPress(false)
				: setIntrestIsPress(true),
				isDenyPress ? setDenyIsPress(false) : "";
		},
	};
	var buttonDenyProps = {
		style: isDenyPress
			? styles.denyButtonPressed
			: styles.denyButtonNormal,
		onPress: () => {
			db.collection("UserCompetitions")
				.doc(
					auth.currentUser.uid +
						route.params.item.title
				)
				.set({
					attended: false,
					date: route.params.item.date,
					text: route.params.item.text,
					title: route.params.item.title,
					userId: auth.currentUser.uid,
					description:
						route.params.item.description,
					email: route.params.item.email,
					location: route.params.item.location,
					uri: route.params.item.uri,
					bulletinLink:
						route.params.item.bulletinLink,
					organizers:
						route.params.item.organizers,
				});
			isDenyPress
				? setDenyIsPress(false)
				: setDenyIsPress(true),
				isIntrestPress
					? setIntrestIsPress(false)
					: "";
		},
	};

	return (
		<LinearGradient
			style={styles.container}
			colors={["#000000", "#00334a", "#000000"]}
			start={[0, 0]}
			end={[1, 1]}
		>
			<View style={styles.backButon}>
				<TouchableOpacity
					onPress={() => navigation.goBack(null)}
				>
					<Icon
						name={"chevron-left"}
						size={40}
						color="rgba(0, 207, 138,0.8)"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.contentCompetition}>
				<View style={styles.headerBox}>
					<ImageBackground
						source={{
							uri: route.params.item.uri,
						}}
						style={styles.competitionHeader}
						imageStyle={{ borderRadius: 10 }}
					>
						<View
							style={
								styles.competitionHeaderTextBox
							}
						>
							<Text style={styles.header}>
								{route.params.item.title}
							</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={styles.competitionInfoBox}>
					<Text
						style={styles.smallTextFaded}
						numberOfLines={1}
					>
						Location:{" "}
						<Text
							style={styles.smallText}
							numberOfLines={1}
						>
							{" "}
							{route.params.item.location}
						</Text>
					</Text>
					<Text
						style={styles.smallTextFaded}
						numberOfLines={1}
					>
						Date:
						<Text style={styles.smallText}>
							{" "}
							{route.params.item.date}
						</Text>
					</Text>
					<Text
						style={styles.smallTextFaded}
						numberOfLines={1}
					>
						Organizers:{" "}
						<Text style={styles.smallText}>
							{" "}
							{route.params.item.organizers}
						</Text>
					</Text>
					<HyperLink
						style={styles.smallText}
						linkDefault={true}
						linkText={(url) =>
							url ===
							route.params.item.bulletinLink
								? "Click here"
								: url
						}
					>
						<Text style={styles.smallTextFaded}>
							Link to bulletin:
							<Text style={styles.smallText}>
								{" "}
								{route.params.item.bulletinLink}
							</Text>
						</Text>
					</HyperLink>
					<View style={styles.contactsBox}>
						<View style={styles.contactsIconBox}>
							<Icon
								name="phone"
								size={25}
								color="rgba(0, 207, 138,0.8)"
							></Icon>
							<Icon
								name="envelope"
								size={25}
								color="rgba(219, 36, 22,0.8)"
							></Icon>
						</View>
						<View style={styles.contactsInfoBox}>
							<Text
								style={[
									styles.smallText,
									{ paddingBottom: 1 },
								]}
								numberOfLines={1}
							>
								{" "}
								{route.params.item.phoneNr}
							</Text>
							<Text
								style={[
									styles.smallText,
									{ paddingBottom: 1 },
								]}
								numberOfLines={1}
							>
								{" "}
								{route.params.item.email}
							</Text>
						</View>
					</View>
				</View>
				<ScrollView
					style={styles.competitonInfoBox}
				>
					<Text
						style={[
							styles.smallText,
							{ marginBottom: "10%" },
						]}
					>
						{route.params.item.description}
					</Text>
				</ScrollView>
				<View style={styles.intrestButtonBox}>
					<TouchableOpacity
						{...buttonIntrestProps}
					>
						<Icon
							name="check"
							size={30}
							color="rgba(0, 207, 138,0.8)"
						/>
					</TouchableOpacity>
					<TouchableOpacity {...buttonDenyProps}>
						<Icon
							name="times-circle"
							size={30}
							color="rgba(199, 54, 63,0.8)"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
};

export default CompetitonInfo;
