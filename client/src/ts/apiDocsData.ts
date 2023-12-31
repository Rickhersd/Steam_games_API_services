type apiDoc = {
	title: string,
	requestSample: string,
	responseSample: object,
	URI: string,
	resource: string,
	description: string,
	filter: string, 
}


const  apidocData: apiDoc[] = [
	{
		title: 'Videojuegos por Identificación de Steam',
		requestSample: '/game/670290',
		responseSample: { 
      app_name:"Real Pool 3D - Poolians",
      developer:"Poolians.com",
      discount_price:0.0,
      early_access:false,
      genres: ["Casual", "Free to Play", "Indie", "Simulation", "Sports"],
      id:670290.0,
      metascore:"no_score",
      price:"Free to Play",
      publisher:"Poolians.com",
      release_date:"Mon, 24 Jul 2017 00:00:00 GMT",
      reviews_url:"http://steamcommunity.com/app/670290/reviews/?browsefilter=mostrecent&p=1",
      sentiment:"Mostly Positive",
      specs:["Single-player", "Multi-player", "Online Multi-Player", "In-App Purchases", "Stats"],
      tags:["Free to Play", "Simulation", "Sports", "Casual", "Indie", "Multiplayer"],
      url:"http://store.steampowered.com/app/670290/Real_Pool_3D__Poolians/"
    },
		URI: '/api/game/{id}',
		resource: 'Juegos',
		description: 'Recibe un id y devuelve el videojuego asociado a este Id ',
		filter: '---', 	
	},
	{
		title: 'Lista de Videojuegos por Año',
		requestSample: '/gamelist/2018?limit=2',
		responseSample: {
			2018:[{
				app_name:"Lost Summoner Kitty",
				developer:"Kotoshiro",
				discount_price:4.49,
				early_access:false,
				genres:['Action', 'Casual', 'Indie', 'Simulation', 'Strategy'],
				id:761140.0,
				metascore:"no_score",
				price:4.99,
				publisher:"Kotoshiro",
				release_date:"Thu, 04 Jan 2018 00:00:00 GMT",
				reviews_url:"http://steamcommunity.com/app/761140/reviews/?browsefilter=mostrecent&p=1",
				sentiment:"no_sentiment",
				specs:"['Single-player']",
				tags:"['Strategy', 'Action', 'Indie', 'Casual', 'Simulation']",
				url:"http://store.steampowered.com/app/761140/Lost_Summoner_Kitty/"
			},{
				app_name:"Ironbound",
				developer:"Secret Level SRL",
				discount_price:0.0,
				early_access:false,
				genres:"['Free to Play', 'Indie', 'RPG', 'Strategy']",
				id:643980.0,
				metascore:"no_score",
				price:"Free To Play",
				publisher:"Making Fun, Inc.",
				release_date:"Thu, 04 Jan 2018 00:00:00 GMT",
				reviews_url:"http://steamcommunity.com/app/643980/reviews/?browsefilter=mostrecent&p=1",
				sentiment:"Mostly Positive",
				specs:['Single-player', 'Multi-player', 'Online Multi-Player', 'Cross-Platform Multiplayer', 'Steam Achievements', 'Steam Trading Cards', 'In-App Purchases'],
				tags:['Free to Play', 'Strategy', 'Indie', 'RPG', 'Card Game', 'Trading Card Game', 'Turn-Based', 'Fantasy', 'Tactical', 'Dark Fantasy', 'Board Game', 'PvP', '2D', 'Competitive', 'Replay Value', 'Character Customization', 'Female Protagonist', 'Difficult', 'Design & Illustration'],
				url:"http://store.steampowered.com/app/643980/Ironbound/"
			}]},
		URI: '/api/gamelist/{year}',
		resource: 'Juegos',
		description: 'Devuelve una lista completa de juegos publicados en un determinado año',
		filter: 'limit:{int}', 	
	},
	{
		title: 'Top Géneros mas Ofrecios por Año',
		requestSample: '/genres/2018',
		responseSample: {
			"Action":55,
			"Adventure":55,
			"Casual":36,
			"Indie":93,
			"Simulation":34
		},
		URI: '/api/genres/{year}',
		resource: 'Géneros',
		description: 'Recbie un año, y devuelve un diccionario con la cantidad de videojuegos que se ofrecieron en un según el género',
		filter: '---', 	
	},
	{
		title: 'Top Especificaciones más Comunes por Año',
		requestSample: '/specs/2013',
		responseSample: {
  		"Downloadable Content":901,
  		"Multi-player":645,
  		"Single-player":1377,
  		"Steam Achievements":965,
  		"Steam Cloud":691
		},
		URI: '/api/specs/{year}',
		resource: 'Especificaciones',
		description: 'Recibe un año y devuelve un diccionario con la cantidad de Especificaciones que más se repiten en un año',
		filter: '---', 	
	},
	{
		title: 'Cantidad de Juegos con Acceso Anticipado por Año',
		requestSample: '/earlyaccess/2015',
		responseSample: {amount:224},
		URI: '/api/earlyaccess/{year}',
		resource: 'Acceso Anticipado',
		description: 'Devuelve la cantidad de juegos con acceso anticipado en un año',
		filter: '---', 	
	},
	{
		title: 'Cantidad de Juegos Clasificados por Sentimiento en un Año',
		requestSample: '/sentiment/2010',
		responseSample: {
		  "1 user reviews":33,
		  "2 user reviews":28,
		  "3 user reviews":9,
		  "4 user reviews":9,
		  "5 user reviews":6,
		  "6 user reviews":5,
		  "7 user reviews":4,
		  "8 user reviews":3,
		  "9 user reviews":5,
		  "Mixed":71,
		  "Mostly Negative":22,
		  "Mostly Positive":54,
		  "Overwhelmingly Negative":1,
		  "Overwhelmingly Positive":14,
		  "Positive":28,
		  "Very Negative":1,
		  "Very Positive":100
		},
		URI: '/api/sentiment/{year}',
		resource: 'Sentimiento',
		description: 'Recibe un año y devuelve un diccionario con la cantidad de specs que más se repiten en el año',
		filter: '---', 	
	},
	{
		title: 'Top N Juegos por Metascore en un Año',
		requestSample: '/metascore/2012?limit=2',
		responseSample: {
      2012:[
        {
          app_name:"Dishonored",
          developer:"Arkane Studios",
          discount_price:0.0,
          early_access:false,
          genres:["Action", "Adventure"],
          id:205100.0,
          metascore:91.0,
          price:"9.99",
          publisher:"Bethesda Softworks",
          release_date:"Mon, 08 Oct 2012 00:00:00 GMT",
          reviews_url:"http://steamcommunity.com/app/205100/reviews/?browsefilter=mostrecent&p=1",
          sentiment:"Overwhelmingly Positive",
          specs:["Single-player", "Steam Achievements", "Full controller support", "Steam Cloud"],
          tags:["Stealth", "First-Person", "Action", "Steampunk", "Assassin", "Singleplayer", "Atmospheric", "Story Rich", "Adventure", "Multiple Endings", "Dark", "Magic", "Dystopian", "FPS", "RPG", "Replay Value", "Fantasy", "Open World", "Shooter", "Sci-fi"],
          url:"http://store.steampowered.com/app/205100/Dishonored/"
        },{
          app_name:"Mark of the Ninja",
          developer:"Klei Entertainment",
          discount_price:0.0,
          early_access:false,
          genres:["Action", "Adventure", "Indie"],
          id:214560.0,
          metascore:91.0,
          price:"14.99",
          publisher:"Microsoft Studios",
          release_date:"Tue, 16 Oct 2012 00:00:00 GMT",
          reviews_url:"http://steamcommunity.com/app/214560/reviews/?browsefilter=mostrecent&p=1",
          sentiment:"Overwhelmingly Positive",
          specs:["Single-player", "Steam Achievements", "Full controller support", "Steam Trading Cards", "Steam Cloud", "Steam Leaderboards"],
          tags:["Stealth", "Platformer", "Ninja", "Indie", "2D", "Action", "Singleplayer", "Side Scroller", "Adventure", "Atmospheric", "Assassin", "Controller", "Replay Value", "Cartoon", "Puzzle", "Dark", "Short", "Strategy", "Story Rich", "Casual"],
          url:"http://store.steampowered.com/app/214560/Mark_of_the_Ninja/"
        }  
      ]
    },
		URI: '/api/metascore/{year}',
		resource: 'Metascore',
		description: 'Devuelve un diccionario con los un top de videojuegos ordenados de acuerdo al metascore',
		filter: 'limit:{int}', 	
	}
]

export default apidocData;