import { Firestore } from "@firebase/firestore";

export async function getCompetitions() {
	var competitionList = [];
	console.log("we get here");
	var data = await Firestore()
		.collection("Competitions")
		.get();

	data.forEach((doc) => {
		console.log("using here");
		console.log(doc.data());
		competitionList.push(doc.data());
	});
	console.log(competitionList);
	return competitionList;
}
