const geo_data = [
  {
    id: 1,
    name: "Return to Paradise",
    genre: "Crime|Drama|Romance|Thriller",
    latitude: -8.2068055,
    longitude: 113.7989815,
  },
  {
    id: 2,
    name: "Farmer's Daughter, The",
    genre: "Comedy",
    latitude: 22.826877,
    longitude: 107.840624,
  },
  {
    id: 3,
    name: "Dracula: Pages from a Virgin's Diary",
    genre: "Horror|Mystery",
    latitude: 49.9958286,
    longitude: 88.6754902,
  },
  {
    id: 4,
    name: "Magic Christian, The",
    genre: "Comedy",
    latitude: 12.405227,
    longitude: 121.990643,
  },
  {
    id: 5,
    name: "Chhoti Si Baat",
    genre: "Comedy|Romance",
    latitude: 25.234479,
    longitude: 110.179953,
  },
  {
    id: 6,
    name: "Man from Beyond, The",
    genre: "Mystery",
    latitude: 46.8260183,
    longitude: -2.1318548,
  },
  {
    id: 7,
    name: "Man Who Couldn't Say No, The (Mies joka ei osannut sanoa EI)",
    genre: "Comedy|Drama|Romance",
    latitude: 1.352083,
    longitude: 103.819836,
  },
  {
    id: 8,
    name: "Powder",
    genre: "Drama|Sci-Fi",
    latitude: -11.8769261,
    longitude: 43.4054565,
  },
  {
    id: 9,
    name: "Air Raid Wardens",
    genre: "Children|Comedy",
    latitude: 11.7129451,
    longitude: 122.3630092,
  },
  {
    id: 10,
    name: "Halloween: Resurrection (Halloween 8)",
    genre: "Horror|Thriller",
    latitude: 50.7053,
    longitude: 38.637,
  },
  {
    id: 11,
    name: "Maborosi (Maboroshi no hikari)",
    genre: "Drama",
    latitude: 45.1905186,
    longitude: 0.7423124,
  },
  {
    id: 12,
    name: "Three and Out (Deal Is a Deal, A)",
    genre: "Comedy|Drama",
    latitude: 45.2581286,
    longitude: 17.8291657,
  },
  {
    id: 13,
    name: "September",
    genre: "Drama",
    latitude: -23.4135017,
    longitude: -46.3433897,
  },
  {
    id: 14,
    name: "Woodmans, The",
    genre: "Documentary",
    latitude: 36.982186,
    longitude: 111.18115,
  },
  {
    id: 15,
    name: "Falling in Love Again",
    genre: "Comedy",
    latitude: -34.6091049,
    longitude: -58.7005845,
  },
  {
    id: 16,
    name: "Dolly and Her Lover (Räpsy ja Dolly eli Pariisi odottaa)",
    genre: "Comedy|Crime|Romance",
    latitude: 41.1814553,
    longitude: -7.4179536,
  },
  {
    id: 17,
    name: "Reckless",
    genre: "Comedy|Fantasy",
    latitude: 58.7462917,
    longitude: 26.3972118,
  },
  {
    id: 18,
    name: "Mission London",
    genre: "Comedy",
    latitude: 7.7713572,
    longitude: -72.2261466,
  },
  {
    id: 19,
    name: "Hue and Cry",
    genre: "Action|Comedy|Crime",
    latitude: 28.659387,
    longitude: 87.124099,
  },
  {
    id: 20,
    name: "Where in the World Is Osama Bin Laden?",
    genre: "Documentary",
    latitude: 3.1523104,
    longitude: 101.7178316,
  },
  {
    id: 21,
    name: "Smart Set, The",
    genre: "Comedy|Drama",
    latitude: 30.304377,
    longitude: 103.686294,
  },
  {
    id: 22,
    name: "Black Book (Zwartboek)",
    genre: "Drama|Thriller|War",
    latitude: 14.2345436,
    longitude: 121.0929584,
  },
  {
    id: 23,
    name: "Hannibal Rising",
    genre: "Drama|Horror|Thriller",
    latitude: 39.8086333,
    longitude: 116.4455561,
  },
  {
    id: 24,
    name:
      "Strange Case of Dr. Jekyll and Miss Osbourne, The (Dr. Jekyll and His Women) (Docteur Jekyll et les femmes)",
    genre: "Horror",
    latitude: 41.3999288,
    longitude: -8.6637745,
  },
  {
    id: 25,
    name: "Raw Deal",
    genre: "Film-Noir",
    latitude: 29.24693,
    longitude: 103.08249,
  },
  {
    id: 26,
    name: "Soft Skin, The (La peau douce)",
    genre: "Drama",
    latitude: 14.2038203,
    longitude: 121.1457666,
  },
  {
    id: 27,
    name: "March of the Movies (Film Parade, The)",
    genre: "Documentary",
    latitude: 53.5484541,
    longitude: 18.9455238,
  },
  {
    id: 28,
    name: "Blood Spattered Bride, The (La novia ensangrentada)",
    genre: "Horror",
    latitude: 8.9061016,
    longitude: 117.5524235,
  },
  {
    id: 29,
    name: "Leningrad Cowboys Go America",
    genre: "Comedy|Musical",
    latitude: -3.1865586,
    longitude: -40.2475694,
  },
  {
    id: 30,
    name: "Cialo",
    genre: "Comedy|Crime",
    latitude: 44.8547059,
    longitude: 15.6521179,
  },
  {
    id: 31,
    name: "Human Experience, The",
    genre: "Documentary",
    latitude: 50.4674149,
    longitude: 15.1761989,
  },
  {
    id: 32,
    name: "Love Is All You Need (Den skaldede frisør)",
    genre: "Comedy|Drama|Romance",
    latitude: 30.3619359,
    longitude: 51.1611537,
  },
  {
    id: 33,
    name: "Devil's Advocate, The",
    genre: "Drama|Mystery|Thriller",
    latitude: 21.356694,
    longitude: 110.525677,
  },
  {
    id: 34,
    name: "Buffalo Bill",
    genre: "Western",
    latitude: 32.979258,
    longitude: 114.890194,
  },
  {
    id: 35,
    name: "Under the Skin of the City (Zir-e-poost-e Shahr)",
    genre: "Drama",
    latitude: 11.1138152,
    longitude: 125.3867985,
  },
  {
    id: 36,
    name: "Dona Flor and Her Two Husbands (Dona Flor e Seus Dois Maridos)",
    genre: "Comedy",
    latitude: 53.6091856,
    longitude: 31.9594674,
  },
  {
    id: 37,
    name: "Today's Special",
    genre: "Comedy",
    latitude: 42.615891,
    longitude: 114.744988,
  },
  {
    id: 38,
    name: "Please Vote for Me",
    genre: "Documentary",
    latitude: -6.755504,
    longitude: 105.8613233,
  },
  {
    id: 39,
    name: "Death Before Dishonor",
    genre: "Action|Drama",
    latitude: 20.9455701,
    longitude: -101.4423451,
  },
  {
    id: 40,
    name: "Sharky's Machine",
    genre: "Crime|Drama|Romance",
    latitude: 29.686366,
    longitude: 89.208761,
  },
  {
    id: 41,
    name: "No Way Home",
    genre: "Drama",
    latitude: 50.2642858,
    longitude: 13.5453919,
  },
  {
    id: 42,
    name: "Contractor, The",
    genre: "Action|Drama|Thriller",
    latitude: 3.0708714,
    longitude: 99.4172728,
  },
  {
    id: 43,
    name: "Star for Two, A",
    genre: "Drama|Romance",
    latitude: 11.3460734,
    longitude: 9.6591939,
  },
  {
    id: 44,
    name: "Order and Disorder",
    genre: "Documentary",
    latitude: 38.6226736,
    longitude: 23.2352639,
  },
  {
    id: 45,
    name: "G.B.F.",
    genre: "Comedy",
    latitude: 27.320917,
    longitude: 111.458656,
  },
  {
    id: 46,
    name: "Griffin and Phoenix",
    genre: "Drama",
    latitude: -3.7368149,
    longitude: 119.5803605,
  },
  {
    id: 47,
    name: "Fist of the North Star",
    genre: "Action|Animation",
    latitude: 49.8363158,
    longitude: 36.6813123,
  },
  {
    id: 48,
    name: "When We Leave (Die Fremde)",
    genre: "Drama",
    latitude: -38.956431,
    longitude: -68.23127,
  },
  {
    id: 49,
    name: "Beyond Rangoon",
    genre: "Adventure|Drama|War",
    latitude: 52.372196,
    longitude: 140.442719,
  },
  {
    id: 50,
    name: "Kink",
    genre: "Documentary",
    latitude: 14.371666,
    longitude: 100.314818,
  },
  {
    id: 51,
    name: "My Flesh My Blood (Moja krew)",
    genre: "Drama",
    latitude: 25.504173,
    longitude: 101.241728,
  },
  {
    id: 52,
    name: "Indian Summer (a.k.a. The Professor) (La prima notte di quiete)",
    genre: "Drama",
    latitude: 39.726929,
    longitude: 116.341395,
  },
  {
    id: 53,
    name: "Carne de gallina (Chicken Skin)",
    genre: "Comedy",
    latitude: 52.0404797,
    longitude: 76.9262526,
  },
  {
    id: 54,
    name: "Luminarias",
    genre: "Comedy|Romance",
    latitude: -22.2220229,
    longitude: -49.8197149,
  },
  {
    id: 55,
    name: "Boys from Brazil, The",
    genre: "Action|Mystery|Thriller",
    latitude: -6.9757129,
    longitude: 107.5801033,
  },
  {
    id: 56,
    name: "Zone 39",
    genre: "Sci-Fi",
    latitude: 34.542308,
    longitude: 118.752842,
  },
  {
    id: 57,
    name: "Zatoichi and the Chest of Gold (Zatôichi senryô-kubi) (Zatôichi 6)",
    genre: "Action|Drama",
    latitude: 40.2675155,
    longitude: 69.6452877,
  },
  {
    id: 58,
    name: "Fall of the Roman Empire, The",
    genre: "Drama",
    latitude: 64.58897,
    longitude: 18.6667119,
  },
  {
    id: 59,
    name: "Agony and the Ecstasy, The",
    genre: "Drama",
    latitude: -15.4384565,
    longitude: -74.6180833,
  },
  {
    id: 60,
    name: "Guerrilla: The Taking of Patty Hearst",
    genre: "Documentary",
    latitude: -6.9568794,
    longitude: 112.8544932,
  },
  {
    id: 61,
    name: "Color Purple, The",
    genre: "Drama",
    latitude: 45.5733817,
    longitude: -0.4198187,
  },
  {
    id: 62,
    name: "Tough Enough (Knallhart)",
    genre: "Crime|Drama",
    latitude: 34.3020001,
    longitude: 48.8145943,
  },
  {
    id: 63,
    name: "Knock Off",
    genre: "Action",
    latitude: 11.348909,
    longitude: 106.4641459,
  },
  {
    id: 64,
    name: "Hell's Angels",
    genre: "Drama|War",
    latitude: 19.3803931,
    longitude: -99.1476908,
  },
  {
    id: 65,
    name: "Agenda: Grinding America Down",
    genre: "Documentary",
    latitude: 14.9445596,
    longitude: 103.7983521,
  },
  {
    id: 66,
    name: "Paradise",
    genre: "Comedy|Drama",
    latitude: 49.039076,
    longitude: 2.074954,
  },
  {
    id: 67,
    name: "Carmen",
    genre: "Drama|Musical|Romance",
    latitude: 41.773672,
    longitude: 123.426773,
  },
  {
    id: 68,
    name: "Still Bill",
    genre: "Documentary",
    latitude: -3.4816267,
    longitude: -80.2453748,
  },
  {
    id: 69,
    name: "Rat",
    genre: "Comedy|Drama|Romance",
    latitude: -7.5690727,
    longitude: 110.8312777,
  },
  {
    id: 70,
    name: "Goya: Crazy Like a Genius",
    genre: "Documentary",
    latitude: 23.9211737,
    longitude: -106.8915948,
  },
  {
    id: 71,
    name: "Drawn Together Movie: The Movie!, The",
    genre: "Animation|Comedy",
    latitude: 27.1840722,
    longitude: 114.9749001,
  },
  {
    id: 72,
    name: "Far Out Man",
    genre: "Comedy",
    latitude: -8.6508134,
    longitude: 118.7023068,
  },
  {
    id: 73,
    name: "Andy Hardy's Double Life",
    genre: "Comedy|Romance",
    latitude: -6.4306844,
    longitude: 106.7175669,
  },
  {
    id: 74,
    name: "Scorched",
    genre: "Comedy|Crime",
    latitude: 37.22,
    longitude: -121.86,
  },
  {
    id: 75,
    name: "Ideal Husband, An",
    genre: "Comedy|Romance",
    latitude: 53.5324492,
    longitude: 28.187043,
  },
  {
    id: 76,
    name: "Tale of Despereaux, The",
    genre: "Adventure|Animation|Children|Comedy|Fantasy",
    latitude: 46.1167,
    longitude: 3.4167,
  },
  {
    id: 77,
    name: "Me Two (Personne aux deux personnes, La)",
    genre: "Comedy|Fantasy",
    latitude: 44.1264683,
    longitude: 40.810896,
  },
  {
    id: 78,
    name: "Charlie Chan Carries On",
    genre: "Mystery",
    latitude: -8.2969666,
    longitude: 113.6561725,
  },
  {
    id: 79,
    name: "Confessional, The (Confessionnal, Le)",
    genre: "Drama|Mystery",
    latitude: 7.3601663,
    longitude: 9.0377612,
  },
  {
    id: 80,
    name: "Winterhawk",
    genre: "Western",
    latitude: 31.13856,
    longitude: 113.744367,
  },
  {
    id: 81,
    name: "Man Of The Moment",
    genre: "Comedy",
    latitude: 57.6480612,
    longitude: 14.0685008,
  },
  {
    id: 82,
    name: "One Nation Under God ",
    genre: "Documentary",
    latitude: 41.3458989,
    longitude: 19.5657349,
  },
  {
    id: 83,
    name: "Men Who Stare at Goats, The",
    genre: "Action|Comedy|Drama",
    latitude: 13.8135951,
    longitude: 100.4227992,
  },
  {
    id: 84,
    name: "Fresh",
    genre: "Crime|Drama|Thriller",
    latitude: 14.5699334,
    longitude: 121.0204582,
  },
  {
    id: 85,
    name: "Time of Favor (Ha-Hesder)",
    genre: "Drama|War",
    latitude: 22.781631,
    longitude: 108.273158,
  },
  {
    id: 86,
    name: "Das Experiment (Experiment, The)",
    genre: "Drama|Thriller",
    latitude: 44.5284238,
    longitude: 15.0728705,
  },
  {
    id: 87,
    name: "Yes Or No",
    genre: "Comedy|Drama|Romance",
    latitude: 13.7374387,
    longitude: -89.7121674,
  },
  {
    id: 88,
    name: "These Final Hours",
    genre: "Drama|Thriller",
    latitude: 43.804723,
    longitude: 4.401981,
  },
  {
    id: 89,
    name: "Killer Condom (Kondom des Grauens)",
    genre: "Comedy|Horror|Romance|Sci-Fi",
    latitude: 46.9821813,
    longitude: 35.1115128,
  },
  {
    id: 90,
    name: "Gigi",
    genre: "Comedy",
    latitude: -35.0234334,
    longitude: -63.5803937,
  },
  {
    id: 91,
    name: "41",
    genre: "Documentary",
    latitude: 37.0741297,
    longitude: -8.8436815,
  },
  {
    id: 92,
    name: "300: Rise of an Empire",
    genre: "Action|Drama|War|IMAX",
    latitude: 39.825495,
    longitude: 116.288478,
  },
  {
    id: 93,
    name: "Stealth",
    genre: "Action|Adventure|Sci-Fi|Thriller",
    latitude: 7.7762319,
    longitude: 123.7330073,
  },
  {
    id: 94,
    name: "Limuzins Janu nakts krasa",
    genre: "Comedy|Drama",
    latitude: 54.7556556,
    longitude: 38.8869951,
  },
  {
    id: 95,
    name: "Dreamscape",
    genre: "Horror|Sci-Fi|Thriller",
    latitude: 56.2437046,
    longitude: 96.0954395,
  },
  {
    id: 96,
    name: "Backflash (Backflash Blues)",
    genre: "Action|Crime|Drama|Thriller",
    latitude: 5.6460924,
    longitude: -75.3178952,
  },
  {
    id: 97,
    name: "Geography Club",
    genre: "Comedy|Drama|Romance",
    latitude: 22.691253,
    longitude: 114.346251,
  },
  {
    id: 98,
    name: "Employees' Entrance",
    genre: "Drama|Romance",
    latitude: -12.1584708,
    longitude: 44.4364706,
  },
  {
    id: 99,
    name: "Marius and Jeanette (Marius et Jeannette)",
    genre: "Comedy|Drama|Romance",
    latitude: 27.8827043,
    longitude: 53.4284076,
  },
  {
    id: 100,
    name: "We Live Again",
    genre: "Drama",
    latitude: 48.3605267,
    longitude: 22.3908266,
  },
]

export default geo_data
