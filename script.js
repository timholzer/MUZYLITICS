// youtube request

//tastdive url example https://tastedive.com/api/similar?q=The+beatles&type=music
//figure out a way to turn spaces into "+"

// example embed youtube just replace the src ending <iframe width="560" height="315" src="https://www.youtube.com/embed/cSp1dM2Vj48" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

//Api Variables
let proxy = 'https://cors-anywhere.herokuapp.com/'
let youtubeKey = "&key=AIzaSyBrYHBqo3A_fYmsS9pr_20BBEgc52EOS30";
let tasteDivKey = '&k=389155-Bootcamp-98L8X8SY'
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
const onSearch = async (searchText) => {
	//Validate search, just trim? Don't know what else we can really validate
	searchText = searchText.trim();
	saveSearchToLocalStorage(searchTerm);

	//Call taste dive passing in the artist, saving the results for similar artists to a variable
	//Save the results for similar artists from tasteDive in a variable
	let similarArtists = await tasteDiveApiCall(searchText);
	console.log(similarArtists);

	//Call youtube api, search for videos from the top 3? similar artists
	for(i = 0; i < 3; i++)
	{
		let videos = youtubeSearchApiCall(similarArtists[i].Name);
		//Embed video, add link to DOM
	}

	//Add a couple embeddd videos and links to the screen for each of the top 3 similar artists
};

/**
 * Call tasteDive's API searching for an artists similar to the artist passed in.
 * Return the results
 */
const tasteDiveApiCall = async (searchText) => {
	//Build the url
	let url = proxy + tasteDiveApiUrl + searchText + "&type=music" + tasteDivKey;
	console.log(url);

	//Ajax call to the built URL, wait for a response, then return it
	let result = await $.ajax( {url: url, method: 'GET' } ).then( res => {
		//Return the response from the call
		return res.Similar.Results;
	});
	return result;
};

/**
 * Call Youtube's API searching for videos artist passed in.
 * Return the results
 */
const youtubeSearchApiCall = async (artist) => {
	//Build the url
	let url = youtubeApiUrl + artist + "&type=music" + youtubeKey;

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

/*
 * Resete the video div, just emptys the div
 */
const resetEmbeddedVideos = () => {
	location.reload();
};

let = searchHistoryArray = []

storedSearchHistory = JSON.parse(localStorage.getItem("Past Searches")) || [];
/**
 * Adds search text to array in localstorage
 */
const saveSearchToLocalStorage = (searchText) => {
    searchHistoryArray.push(searchTerm);
    localStorage.setItem("Past Searches", JSON.stringify(searchHistoryArray));
};

/**
 * Retrieves array of searches from localStorage
 * Adds to the DOM
 */
const displaySavedSearches = () => {
    for (i = 0; i < storedSearchHistory.length; i++) {
        var hist = document.createElement("P");  
        hist.innerHTML = searchHistoryArray[i];
        //add a search history div with this ID
        document.getElementById("searchHistory").appendChild(hist); 
        
    }
};

/**
 * Event Handling
 */
$(searchInput).on('keypress', function(event) {
	//Check if the enter key was pressed
	if(event.keyCode === 13)
	{
		//Get the value of the search input and call onSearch(searchText);
		let searchText = $(event.currentTarget).val();
		onSearch(searchText);
	}
});
