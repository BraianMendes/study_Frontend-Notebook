// Foursquare API Info
const clientId = 'EP1IMDZEYRRM5UOYOSYJ3XTRBV4QUPUJ4RJG233G5L5THTU1';
const clientSecret = 'RXF0EGYB10HFPU3GUSWQSZIKZQLY4EDDWWWPTHADXBVOEE2Q';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '0625a3cc511d5481af65397072f32058';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20200412`;
  
  
  try{
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();     
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);    
      return venues;
    } 
  }
  catch(error){
    console.log(error);
  }
}

const getForecast = async () => {
  const urlToFetch = weatherUrl+'?q='+$input.val()+'&APPID='+openWeatherKey;
  
  try {
    const response = await fetch(urlToFetch);
    if ( response.ok ) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  }
  
  catch(error){
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
    .then( venues => { return renderVenues(venues) });
  getForecast()
    .then( forecast => { return renderForecast(forecast) })
  return false;
}

$submit.click(executeSearch)