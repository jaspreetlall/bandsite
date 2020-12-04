// Creating array for storing show data

let showsArray = [
    {
        date: 'Mon Dec 17 2018',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Jul 18 2019',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Jul 22 2019',
        venue: 'View Loungue',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Aug 12 2019',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Sep 05 2019',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Aug 11 2019',
        venue: 'Pres Club',
        location: 'San Francisco, CA'
    }
]

// Setting up variables
var show;
var showDate;
var showDateTitle;
var showDateValue;
var showVenue;
var showVenueTitle;
var showVenueValue;
var showLocation;
var showLocationTitle;
var showLocationValue;
var showBuyButton;

const apiUrl = 'https://project-1-api.herokuapp.com';
const apiKey = '?api_key=9398d87e-02a2-4bf6-a8f4-d58ce06ce0f3';

// ============Testing Stuff Below============

// ============Get Shows
// var testGetShows = axios
//     .get(apiUrl + '/showdates' + apiKey)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err));

// ============Testing stuff above============

// Targetting shows container block in HTML
const showsParentContainer = document.getElementById('showsBlock');

// Function to generate HTML markup for show block
const generateMarkup = () => {
    // Creating all elements required for HTML markup
    show = document.createElement('div');
    showDate = document.createElement('div');
    showDateTitle = document.createElement('h4');
    showDateValue = document.createElement('div');
    showVenue = document.createElement('div');
    showVenueTitle = document.createElement('h4');
    showVenueValue = document.createElement('div');
    showLocation = document.createElement('div');
    showLocationTitle = document.createElement('h4');
    showLocationValue = document.createElement('div');
    showBuyButton = document.createElement('a');

    // Setting classes to each element created above
    show.className = 'shows__container-block-show';
    showDate.className = 'shows__container-block-show-date';
    showDateTitle.className = 'shows__container-block-show-date-title';
    showDateValue.className = 'shows__container-block-show-date-value';
    showVenue.className = 'shows__container-block-show-venue';
    showVenueTitle.className = 'shows__container-block-show-venue-title';
    showVenueValue.className = 'shows__container-block-show-venue-value';
    showLocation.className = 'shows__container-block-show-location';
    showLocationTitle.className = 'shows__container-block-show-location-title';
    showLocationValue.className = 'shows__container-block-show-location-value';
    showBuyButton.className = 'shows__container-block-show-button';

    // Appending elements & setting up elements nesting
    showsParentContainer.append(show);
    show.append(showDate);
    show.append(showVenue);
    show.append(showLocation);
    show.append(showBuyButton);
    showDate.append(showDateTitle);
    showDate.append(showDateValue);
    showVenue.append(showVenueTitle);
    showVenue.append(showVenueValue);
    showLocation.append(showLocationTitle);
    showLocation.append(showLocationValue);

    // Adding default title values and setting attributes
    showDateTitle.innerText = 'Date';
    showVenueTitle.innerText = 'Venue';
    showLocationTitle.innerText = 'Location';
    showBuyButton.innerText = 'Buy Tickets';

    showDateValue.setAttribute('aria-label', 'Date');
    showVenueValue.setAttribute('aria-label', 'Venue');
    showLocationValue.setAttribute('aria-label', 'Location');
    showBuyButton.setAttribute('href', '#');
}

// Function to fill content into each show block
const generateShow = (showObject) => {
    generateMarkup();
    showDateValue.innerText = showObject.date;
    showVenueValue.innerText = showObject.venue;
    showLocationValue.innerText = showObject.location;
}

// Function to populate shows to page
const displayShows = () => {
    for (let i = 0; i < showsArray.length; i++) {
        generateShow(showsArray[i]);
    }
}

// Shows populated into page
displayShows();