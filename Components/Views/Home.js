import React, {
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import {
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
} from "react-native";

import Carousel, {
	Pagination,
} from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import NavBar from "../Navigation/NavBar";
import { db } from "../../FireBase/FireBase";

const styles = require("../Styles/MainStyle");

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const Home = ({ navigation }) => {
	const d = new Date();
	const date = d.getDate();
	const month = d.getMonth();
	const year = d.getFullYear();
	const fullDate =
		month + "/" + date + "/" + year;
	const dateParts = fullDate.split("/");

	const [competitions, setCompetitions] =
		useState([]);

	var exportData = [];
	useEffect(async () => {
		await db
			.collection("Competitions")
			.get()
			.then((querySnapshot) => {
				console.log(
					"Competitions: ",
					querySnapshot.size
				);
				querySnapshot.forEach(
					(documentSnapshot) => {
						var date =
							documentSnapshot.data().date;
						var dateSplited = date.split("/");
						console.log(dateSplited);

						if (
							dateSplited[0] ==
							parseInt(dateParts[0]) + 1
						) {
							exportData.push(
								documentSnapshot.data()
							);
							console.log(
								documentSnapshot.data()
							);
						}
					}
				);
			});
		setCompetitions(exportData);
	}, []);

	const [activeIndex, setActiveIndex] =
		useState(0);

	const ref = useRef(null);

	const renderItem = useCallback(
		({ item, index }) => (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Competition", {
						item: item,
					})
				}
			>
				<ImageBackground
					source={{
						uri: item.uri,
					}}
					style={styles.card}
				>
					<LinearGradient
						colors={[
							"rgba(0, 0, 0,0)",
							"rgba(0, 0, 0,0.5)",
							"rgba(0, 0, 0,0.8)",
						]}
						style={styles.cardInfo}
					>
						<Text
							style={{
								fontSize: 30,
								color: "white",
								numberOfLines: 1,
								ellipsizeMode: "head",
							}}
							numberOfLines={1}
							ellipsizeMode="middle"
						>
							{item.title}
						</Text>
						<View
							style={{
								display: "flex",
								flexDirection: "row",
								width: "100%",
								justifyContent: "space-between",
							}}
						>
							<Text
								style={{
									color: "white",
								}}
								numberOfLines={1}
							>
								{item.location}
							</Text>
							<Text
								style={{
									color:
										"rgba(255, 255, 255,0.5)",
								}}
							>
								{item.date}
							</Text>
						</View>
					</LinearGradient>
				</ImageBackground>
			</TouchableOpacity>
		),
		[]
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
						COMPETITONS
					</Text>
					<Text style={styles.bannerMediumText}>
						{monthNames[d.getMonth()]}
					</Text>
				</View>
				<View style={styles.caruselBox}>
					<View style={styles.cardBox}>
						<Carousel
							layout={"stack"}
							layoutCardOffset={40}
							ref={ref}
							data={competitions}
							sliderWidth={350}
							itemWidth={350}
							renderItem={renderItem}
							onSnapToItem={(index) =>
								setActiveIndex(index)
							}
							useScrollView={true}
							inactiveSlideShift={0}
							loop={true}
							activeSlideAlignment={"start"}
							autoplay={true}
							autoplayDelay={500}
							autoplayInterval={3000}
							enableMomentum={true}
						/>
					</View>
					<Pagination
						carouselRef={ref}
						dotsLength={competitions.length}
						activeDotIndex={activeIndex}
						containerStyle={{
							height: "20%",
						}}
						dotStyle={{
							width: 10,
							height: 10,
							borderRadius: 5,
							marginHorizontal: 8,
							backgroundColor:
								"rgba(255, 255, 255, 0.92)",
						}}
						inactiveDotOpacity={0.4}
						inactiveDotScale={0.6}
					/>
				</View>
				<NavBar navigation={navigation} />
			</View>
		</LinearGradient>
	);
};

export default Home;
