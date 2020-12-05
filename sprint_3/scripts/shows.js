// Creating array for storing show data

let showsArray = [];

// Setting up variables
var show;
var showDate;
var showDateTitleMobile;
var showDateTitleTablet;
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
const apiShowsEndpoint = '/showdates';

// Targetting shows container block in HTML
const showsParentContainer = document.getElementById('showsBlock');

// Function to generate HTML markup for show block
const generateMarkup = () => {
    // Creating all elements required for HTML markup
    show = document.createElement('div');
    showDate = document.createElement('div');
    showDateTitleMobile = document.createElement('h4');
    showDateTitleTablet = document.createElement('h4');
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
    showDateTitleMobile.className = 'shows__container-block-show-date-title shows__container-block-show-date-title--mobile';
    showDateTitleTablet.className = 'shows__container-block-show-date-title shows__container-block-show-date-title--tablet';
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
    showDate.append(showDateTitleMobile);
    showDate.append(showDateTitleTablet);
    showDate.append(showDateValue);
    showVenue.append(showVenueTitle);
    showVenue.append(showVenueValue);
    showLocation.append(showLocationTitle);
    showLocation.append(showLocationValue);

    // Adding default title values and setting attributes
    showDateTitleMobile.innerText = 'Date';
    showDateTitleTablet.innerText = 'Dates';
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
    let dateToBeLowCased = showObject.date;
    showDateValue.innerText = dateToBeLowCased.toLowerCase();
    showVenueValue.innerText = showObject.place;
    showLocationValue.innerText = showObject.location;
}

// Function to populate shows to page
const displayShows = () => {
    // => Pulls shows from API
    axios
        .get(apiUrl + apiShowsEndpoint + apiKey)
        .then(res => {
            // => Stores into variable
            showsArray = res.data;
                // => Creates markup while loading shows data
                for (let i = 0; i < showsArray.length; i++) {
                    generateShow(showsArray[i]);
                }
        })
        .catch(err => console.log(err));
}

// Shows populated into page
displayShows();