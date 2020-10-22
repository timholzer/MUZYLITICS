// youtube request

//tastdive url example https://tastedive.com/api/similar?q=The+beatles&type=music
//figure out a way to turn spaces into "+"

// example embed youtube just replace the src ending <iframe width="560" height="315" src="https://www.youtube.com/embed/cSp1dM2Vj48" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

//Api Variables
let key = "&key=AIzaSyCs-VAboY9e1znKxZ10_fZfub5FFxzEPSU";
let youtubeApiUrl = "https://www.googleapis.com/youtube/v3/search?q=";
let tasteDiveApiUrl = "https://tastedive.com/api/similar?q=";

//DOM Elements Variables
let searchInput = $('#search-input');
let videoDiv = $('#video-div');
let pastSearchDiv = $('#past-searches');

let searchTerm = "";

/**
 * Called when text is entered and submit button is clicked
 * 1. Validates text
 * 2. Adds search result to localStorage
 * 3. Calls tasteDive api requesting similar artists
 * 4. Calls youtube api loading videos for similar artists
 * */
const onSearch = (searchText) => {
	//Validate search, just trim? Don't know what else we can really validate
	seachTerm = searchText.trim();
	saveSearchToLocalStorage(searchTerm);

	//Call taste dive passing in the artist, saving the results for similar artists to a variable
	//Save the results for similar artists from tasteDive in a variable
	let similarArtists = tasteDiveApiCall();

	//Call youtube api, search for videos from the top 3? similar artists
	for(i = 0; i < 3; i++)
	{
		let videos = 
	}

	//Add a couple embeddd videos and links to the screen for each of the top 3 similar artists
};

/**
 * Call tasteDive's API searching for an artists similar to the artist passed in.
 * Return the results
 */
const tasteDiveApiCall = async () => {
	//Build the url
	let url = tasteDiveApiUrl + searchTerm + "&type=music";

	//Ajax call to the built URL, wait for a response, then return it
	return await $.ajax( {url: url, method: 'GET' } ).then( res => {
		//Return the response from the call
		return res.response;
	});
};

/**
 * Call Youtube's API searching for videos artist passed in.
 * Return the results
 */
const youtubeApiCall = async (artist) => {
	//Build the url
	let url = youtubeApiUrl + artist + "&type=music" + key;

	//Ajax call to the built URL, wait for a response, then return it
	return await $.ajax( {url: url, method: 'GET' } ).then( res => {
		//Return the response from the call
		return res.response;
	});
};

/**
 * Make api calls
 */
const apiCall = (url, callbackFunction) => {
	$.ajax( {url: url, method: 'GET'}).then(res => {
		
	});
};

/**
 * Resete the video div, just emptys the div
 */
const resetEmbeddedVideos = () => {

};

/**
 * Adds search text to array in localstorage
 */
const saveSearchToLocalStorage = (searchText) => {

};

/**
 * Retrieves array of searches from localStorage
 * Adds to the DOM
 */
const displaySavedSearches = () => {

};
