const getDatas = async () => {
	const url = "/src/json/FishEyeDataFR.json";
	const response = await fetch(url);
	return response.json();
};
export default getDatas;