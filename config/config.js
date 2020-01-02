/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0",// Address to listen on, can be:
			      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.1.221", "192.168.1.227"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
						url: "webcal://ics.ecal.com/ecal-sub/5df5629675a5ca94778b4567/Premier&20League.ics"
					}
				]
			}
		},
		/*
		{
			module: "compliments",
			position: "middle_center"
		},
		*/
		{
			module: "currentweather",
			position: "top_right",
			config: {
				useLocationAsHeader: true,
				location: "Austin, TX",
				locationID: "4671654",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "2f1452128028d55c152b6142a229b067"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				appendLocationNameToHeader: false,
				location: "Austin",
				locationID: "4671654",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "2f1452128028d55c152b6142a229b067"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
					},
					{
						title: "ESPN.com",
						url: "http://sports.espn.go.com/espn/rss/news",
					},
					{
						title: "KVUE.com (Austin)",
						url: "http://rssfeeds.kvue.com/kvue/local",
					},
					{
						title: "MarketWatch.com",
						url: "http://marketwatch.com/rss/realtimeheadlines",
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		// Third-party Modules
		{
			module: 'mmm-systemtemperature',
			position: 'top_right',
			classes: 'small dimmed',
			config: {
			    // See Configuration Options for more information.
			    prependString: 'Temp: ',
			    updateInterval: 50000,
			    unit: 'f'
			}
		},
		{
			module: "vocabulary",
			position: "center"

		},
		/*
		{
			module: 'MMM-json-feed',
			position: 'bottom_bar',
			config: {
			  urls: [
				''
			  ]
			}
		},
		{
			module: 'MMM-Globe',
			position: 'middle_center',
			config: {
				style: 'geoColor',
				imageSize: 500,
				ownImagePath: '/home/pi/MagicMirror/modules/MMM-Globe/galaxy.png',
				updateInterval: 10*60*1000
			}
		},
		{
			module: 'MMM-EmbedYoutube',
			position: 'middle_center',
			config: {
				video_id: 'x3uEPLT-yfg',
				autoplay: true,
				loop: false
			}
		},
		{
			disabled: true,
			module: 'MMM-EARTH-Live',
			position: 'bottom-right',
			config: {
			    height:"270px",
			    width:"480px",
			    useHeader: false,		// True if you want a header
			    header: "",			// Change in config file. useHeader must be true
			    animationSpeed: 1000,	// fade speed
			}
		},
		/*
		{
			module: 'MMM-stocks',
			position: 'bottom_bar',
			config: {
			  apiKey: 'pk_bd63856375ca422c8e4f4b3f01630b5c',  // API Token from https://cloud.iexapis.com
			  crypto: 'BTCUSDT,LTCUSDT,ETHUSDT',	// Crypto symbols
			  separator: '&nbsp;&nbsp;•&nbsp;&nbsp;',  // Separator between stocks
			  stocks: 'AAPL,GOOG,IAU,SLV,YETI',  // Stock symbols
			  updateInterval: 900000  // Update interval in milliseconds
			}
		},
		*/
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "bottom_right",

			config: {
			  clientID: "af9675e9b7c3408ea6b0c967369489f6",
			  clientSecret: "bc5c4b8cdcd145bd80f230a1aa64d82f",
			  accessToken: "BQDixiMweNs-0axuxwAlJ19mnYrs4unyBOxgmcFSJSz5LS5dHNgVwldeJpdMzROk15CpvZVCnOqPOhhUh6xtFHJR6Qe2ZcklS714F4IkYtp3bjcol-nZcTyM1d49qQPBKpwnotTyGjAftQP4y5YqMyaoqCyfqw",
			  refreshToken: "AQDqI406bObNlR8fZRKRZqzSayMusiY3y_TFQgGNBzAEmpidGg0dAIK_MjG0SREq2hE0qpGp-90d0VMgQK_g8SwHqp_Kd4U09wEFMN6N98SNWopxmqyihmzvXmG9mrZGKgc"
			}
		},
		/*
		{
			module: 'MMM-MyCommute',
			position: 'bottom_left',
			header: 'Commutes',
			classes: 'default everyone',
			config: {
			    apiKey: 'AIzaSyD7OGnv4Qhzxusi5TY2IWVwQ-XV0f0ghm8',
			    origin: '7004 Kenosha Pass, Austin, TX 78735',
			    startTime: '00:00',
			    endTime: '23:59',
			    hideDays: [0,6],
			    destinations: [
				{
				    destination: '7601 Southwest Pkwy, Austin, TX 78735',
				    label: 'YETI HQ',
				    color: '#82E5AA'
				},
				{
				    destination: '2301 East Saint Elmo Road, Austin, TX 78744',
				    label: 'YETI Custom Shop'
				},
				{
				    destination: '220 South Congress Avenue, Austin, TX, 78704',
				    label: 'YETI Flagship Store',
				    color: '#82E5AA'
				}
			    ]
			}
		},
		
		{
			module: 'MMM-MFP',
			position: 'top_left',
			config: {
				username: 'biffabiffington',
				passwd: 'Rambleron5000!',
				updateTime: 60 * 1000 * 5,  // Run every 5 minutes by default
				usernickname: 'Brenton'
			}
		},
		*/
		{
			module: 'MMM-Tools',
			position: 'top_left',
			config: {
				device: 'RPI',  // "RPI" is also available
				refresh_interval_ms: 10000,
				warning_interval_ms: 1000 * 60 * 5,
				enable_warning: true,
				warning: {
					CPU_TEMPERATURE: 65,
					GPU_TEMPERATURE: 65,
					CPU_USAGE: 75,
					STORAGE_USED_PERCENT: 80,
					MEMORY_USED_PERCENT: 80
				},
				warning_test: {
					CPU_TEMPERATURE: 'The temperature of CPU is over %VAL%',
					GPU_TEMPERATURE: 'The temperature of GPU is over %VAL%',
					CPU_USAGE: 'The usage of CPU is over %VAL%',
					STORAGE_USED_PERCENT: 'The storage has used over &VAL% percent',
					MEMORY_USED_PERCENT: 'The memory has used over %VAL% percent',
				}
			}
		},
		{
			module: 'MMM-WiFiPassword',
			position: 'bottom_left',

			config: {
			    // See Configuration Options for more information.
			    network: "biffa",
			    password: "my_pass",
			}
		},
		/*
		{
			module: 'MMM-Launch',
			position: 'top_left',
			config: {
				showPix: 'No',
				showAgency: 'Yes',
				showDescription: 'Yes',
				useHeader: true,
				header: 'UPCOMING LAUNCHES',
				maxWidth: '300px'
			}
		},
		*/
		{
			module: 'MMM-Remote-Control',
			// Uncomment the following line to show the URL of the remote control on mirror
			//position: 'bottom_left',
			config: {
				customCommand: {},  // Optional. See "Using Custom Commands" on GitHub
				customMenu: 'custom_menu.json',  // Optional. See "Custom Menu Items"
				showModuleApiMenu: true,  // Optional. Enable the Module Controls menu
				apiKey: '',  // Optional. See API/README.md for details
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
