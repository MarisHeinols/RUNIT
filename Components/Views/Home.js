import React, {
	useCallback,
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

import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

import NavBar from "../Navigation/NavBar";

const styles = require("../Styles/MainStyle");

const exampleItems = [
	{
		title: "Mountain running",
		text: "Sigulda",
		uri: "https://blog.sports-tracker.com/wp-content/uploads/2017/04/JaakkoPostiPyhaTunturiMaraton1.jpg",
		date: "20/04/2022",
	},
	{
		title: "Marathon",
		text: "Riga",
		uri: "https://www.justrunlah.com/wp-content/uploads/2017/05/Running.jpg",
		date: "15/06/2022",
	},
	{
		title: "Orientiering",
		text: "Madona",
		uri: "https://miro.medium.com/max/512/1*oNw3l7OCsTd-A3sbT_tV1A.jpeg",
		date: "15/06/2022",
	},
	{
		title: "Beach run",
		text: "Saulkrasti",
		uri: "https://images.pond5.com/woman-running-beach-footage-081538706_iconl.jpeg",
		date: "18/07/2022",
	},
	{
		title: "Mountain running",
		text: "Gaizins",
		uri: "https://blog.sports-tracker.com/wp-content/uploads/2017/04/JaakkoPostiPyhaTunturiMaraton1.jpg",
		date: "19/07/2022",
	},
];
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
	const [activeIndex, setActiveIndex] =
		useState(0);
	const [carouselItems, setCarouselItems] =
		useState(exampleItems);
	const ref = useRef(null);

	const renderItem = useCallback(
		({ item, index }) => (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Competition")
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
							}}
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
							<Text style={{ color: "white" }}>
								{item.text}
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

	const d = new Date();

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
							data={carouselItems}
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
						dotsLength={carouselItems.length}
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
