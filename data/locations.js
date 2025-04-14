const jobsiteLocations = [
  {
    id: 1,
    address:
      "10926 Colleton River Court, Jacksonville, FL 32210, United States of America",
    latitude: "30.25499374",
    longitude: "-81.83623856",
  },
  {
    id: 2,
    address:
      "12255 Stone Bark Trail, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38700977",
    longitude: "-81.3429424",
  },
  {
    id: 3,
    address:
      "12336 Belcroft Drive, Riverview, FL 33579, United States of America",
    latitude: "27.81367948",
    longitude: "-82.3030213",
  },
  {
    id: 4,
    address:
      "126 Bradford Lake Circle, Jacksonville, FL 32218, United States of America",
    latitude: "30.52801796",
    longitude: "-81.616868",
  },
  {
    id: 5,
    address:
      "1318 Misty Valley Drive, Brandon, FL 33510, United States of America",
    latitude: "27.9607911",
    longitude: "-82.30401184",
  },
  {
    id: 6,
    address: "4232 Adelaar Drive, Tatum, FL 34240, United States of America",
    latitude: "27.32293087",
    longitude: "-82.42079362",
  },
  {
    id: 7,
    address: "320 Edisto Place, Apopka, FL 32712, United States of America",
    latitude: "28.6832271",
    longitude: "-81.5173832",
  },
  {
    id: 8,
    address:
      "10254 Newminster Loop, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76568605",
    longitude: "-82.33968494",
  },
  {
    id: 9,
    address:
      "3914 Prairie Reserve Boulevard, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38658044",
    longitude: "-81.33975783",
  },
  {
    id: 10,
    address:
      "5720 Dornich Drive, Auburndale, FL 33823, United States of America",
    latitude: "28.14788654",
    longitude: "-81.81957476",
  },
  {
    id: 11,
    address:
      "2225 50th Street Circle East, Bradenton, FL 34221, United States of America",
    latitude: "27.55891753",
    longitude: "-82.5405904",
  },
  {
    id: 12,
    address:
      "4114 Windcrest Drive, Seven Oaks, FL 33544, United States of America",
    latitude: "28.2160314",
    longitude: "-82.35548329",
  },
  {
    id: 13,
    address: "5786 Aaron Court, Sarasota, FL 34232, United States of America",
    latitude: "27.31335368",
    longitude: "-82.45385013",
  },
  {
    id: 14,
    address:
      "7904 Hampton Lake Drive, Tampa, FL 33647, United States of America",
    latitude: "28.16193552",
    longitude: "-82.39023744",
  },
  {
    id: 15,
    address:
      "11026 Spring Point Circle, Riverview, FL 33579, United States of America",
    latitude: "27.821151",
    longitude: "-82.320508",
  },
  {
    id: 16,
    address:
      "18473 Whyteleafe Court, Pasco County, FL 34638, United States of America",
    latitude: "28.20856855",
    longitude: "-82.51034264",
  },
  {
    id: 17,
    address:
      "26550 Chaparel Drive, Bonita Springs, FL 34135, United States of America",
    latitude: "26.35111145",
    longitude: "-81.75289706",
  },
  {
    id: 18,
    address:
      "7607 South Desoto Street, Tampa, FL 33616, United States of America",
    latitude: "27.85689655",
    longitude: "-82.52547886",
  },
  {
    id: 19,
    address:
      "2326 Dovesong Trace Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72476175",
    longitude: "-82.398402",
  },
  {
    id: 20,
    address:
      "14202 Magnolia Ridge Loop, Winter Garden, FL 34787, United States of America",
    latitude: "28.49492068",
    longitude: "-81.60776084",
  },
  {
    id: 21,
    address:
      "2182 Snapdragon Drive, Palm Bay, FL 32907, United States of America",
    latitude: "28.00250269",
    longitude: "-80.73231928",
  },
  {
    id: 22,
    address:
      "30842 Pumpkin Ridge Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.22161163",
    longitude: "-82.30619189",
  },
  {
    id: 23,
    address:
      "12174 Wynnfield Lakes Circle, Jacksonville, FL 32246, United States of America",
    latitude: "30.3101495",
    longitude: "-81.4957097",
  },
  {
    id: 24,
    address:
      "168 Corey Cay Avenue, Saint Johns County, FL 32092, United States of America",
    latitude: "30.04007021",
    longitude: "-81.53229541",
  },
  {
    id: 25,
    address:
      "1816 Monte Cristo Lane, Kissimmee, FL 34758, United States of America",
    latitude: "28.250633",
    longitude: "-81.466788",
  },
  {
    id: 26,
    address:
      "26140 Grand Prix Drive, Bonita Springs, FL 34135, United States of America",
    latitude: "26.35915751",
    longitude: "-81.76544488",
  },
  {
    id: 27,
    address:
      "1105 Spruce Ridge Court, Minneola, FL 34715, United States of America",
    latitude: "28.58154205",
    longitude: "-81.72673935",
  },
  {
    id: 28,
    address:
      "12206 Legacy Bright Street, Riverview, FL 33578, United States of America",
    latitude: "27.82202038",
    longitude: "-82.33556335",
  },
  {
    id: 29,
    address:
      "253 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07676312",
    longitude: "-81.52491336",
  },
  {
    id: 30,
    address:
      "736 Wellington Court, Oldsmar, FL 34677, United States of America",
    latitude: "28.030968",
    longitude: "-82.653094",
  },
  {
    id: 31,
    address:
      "11691 Breadfruit Lane, Venice, FL 34292, United States of America",
    latitude: "27.07943587",
    longitude: "-82.34510613",
  },
  {
    id: 32,
    address:
      "12242 Angleterre Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1501331",
    longitude: "-81.5358846",
  },
  {
    id: 33,
    address:
      "1019 Wax Myrtle Avenue, Minneola, FL 34715, United States of America",
    latitude: "28.59199851",
    longitude: "-81.72652289",
  },
  {
    id: 34,
    address:
      "21 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07733774",
    longitude: "-81.52345399",
  },
  {
    id: 35,
    address:
      "269 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07668639",
    longitude: "-81.52474699",
  },
  {
    id: 36,
    address:
      "10235 Celtic Ash Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76849781",
    longitude: "-82.3391979",
  },
  {
    id: 37,
    address:
      "13405 Villa Di Preserve Lane, The Preserve at Corkscrew, FL 33928, United States of America",
    latitude: "26.44945679",
    longitude: "-81.73779317",
  },
  {
    id: 38,
    address:
      "1449 Westbury Drive, Clermont, FL 34711, United States of America",
    latitude: "28.5360939",
    longitude: "-81.7291505",
  },
  {
    id: 39,
    address:
      "26654 Saville Avenue, Bonita Springs, FL 34135, United States of America",
    latitude: "26.35039753",
    longitude: "-81.75179286",
  },
  {
    id: 40,
    address:
      "3913 Prairie Reserve Boulevard, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38664917",
    longitude: "-81.34000928",
  },
  {
    id: 41,
    address:
      "738 Marsh Reed Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.531735",
    longitude: "-81.6087853",
  },
  {
    id: 42,
    address:
      "1162 Woods Landing Drive, Minneola, FL 34715, United States of America",
    latitude: "28.59362039",
    longitude: "-81.72576288",
  },
  {
    id: 43,
    address:
      "251 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07523498",
    longitude: "-81.52322835",
  },
  {
    id: 44,
    address:
      "123 Pond Run Lane, Jacksonville, FL 32218, United States of America",
    latitude: "30.53844628",
    longitude: "-81.61700246",
  },
  {
    id: 45,
    address:
      "895 East Red House Branch Road, St. Augustine, FL 32084, United States of America",
    latitude: "29.92852264",
    longitude: "-81.35790075",
  },
  {
    id: 46,
    address:
      "5412 Northwest Wisk Fern Circle, Port Saint Lucie, FL 34986, United States of America",
    latitude: "27.36267782",
    longitude: "-80.38272341",
  },
  {
    id: 47,
    address:
      "16313 Tisons Bluff Road, Jacksonville, FL 32218, United States of America",
    latitude: "30.53776546",
    longitude: "-81.61761942",
  },
  {
    id: 48,
    address:
      "105 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07723044",
    longitude: "-81.52297403",
  },
  {
    id: 49,
    address:
      "296 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07507526",
    longitude: "-81.52405195",
  },
  {
    id: 50,
    address: "442 Howland Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.09915139",
    longitude: "-81.46285461",
  },
  {
    id: 51,
    address:
      "64 Woodland Greens Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.10151666",
    longitude: "-81.46104266",
  },
  {
    id: 52,
    address:
      "9559 Wexford Chase Road, Jacksonville, FL 32257, United States of America",
    latitude: "30.2042617",
    longitude: "-81.58679398",
  },
  {
    id: 53,
    address:
      "575 Breakaway Trail, Titusville, FL 32780, United States of America",
    latitude: "28.55161026",
    longitude: "-80.80001623",
  },
  {
    id: 54,
    address:
      "11044 Standing Stone Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.76197095",
    longitude: "-82.32239823",
  },
  {
    id: 55,
    address:
      "12249 Stone Bark Trail, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38710602",
    longitude: "-81.34289758",
  },
  {
    id: 56,
    address:
      "14964 Durbin Cove Way, Jacksonville, FL 32259, United States of America",
    latitude: "30.1078245",
    longitude: "-81.5293563",
  },
  {
    id: 57,
    address:
      "156 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07789387",
    longitude: "-81.52521413",
  },
  {
    id: 58,
    address:
      "1858 Monte Cristo Lane, Kissimmee, FL 34758, United States of America",
    latitude: "28.24958849",
    longitude: "-81.46890448",
  },
  {
    id: 59,
    address:
      "3307 98th Street East, Gillette, FL 34221, United States of America",
    latitude: "27.60291913",
    longitude: "-82.53035294",
  },
  {
    id: 60,
    address:
      "902 Killarney Lane, Polk County, FL 33823, United States of America",
    latitude: "28.14675086",
    longitude: "-81.81998369",
  },
  {
    id: 61,
    address:
      "4529 Gray Hawk Street, Orange Park, FL 32065, United States of America",
    latitude: "30.1475872",
    longitude: "-81.85883582",
  },
  {
    id: 62,
    address:
      "119 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07708127",
    longitude: "-81.5229676",
  },
  {
    id: 63,
    address:
      "13412 Youngdale Place, Riverview, FL 33579, United States of America",
    latitude: "27.79439499",
    longitude: "-82.27973255",
  },
  {
    id: 64,
    address:
      "3605 Meadow Breeze Loop, Ocoee, FL 34761, United States of America",
    latitude: "28.61936837",
    longitude: "-81.52728384",
  },
  {
    id: 65,
    address:
      "4101 River Bank Way, Charlotte County, FL 33980, United States of America",
    latitude: "26.977516",
    longitude: "-82.049994",
  },
  {
    id: 66,
    address:
      "6173 Eddystone Trail, Jacksonville, FL 32258, United States of America",
    latitude: "30.1614567",
    longitude: "-81.5493618",
  },
  {
    id: 67,
    address:
      "12172 Sawgrass Reserve Boulevard, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38752695",
    longitude: "-81.34149361",
  },
  {
    id: 68,
    address:
      "6334 Springline Place, Apollo Beach, FL 33572, United States of America",
    latitude: "27.76983306",
    longitude: "-82.37260273",
  },
  {
    id: 69,
    address:
      "15626 Tisons bluff road, Jacksonville, FL 32218, United States of America",
    latitude: "30.53529574",
    longitude: "-81.61432629",
  },
  {
    id: 70,
    address:
      "11413 Estuary Preserve Drive, Riverview, FL 33569, United States of America",
    latitude: "27.8288804",
    longitude: "-82.31068933",
  },
  {
    id: 71,
    address:
      "12334 Juniper Field Court, Riverview, FL 33579, United States of America",
    latitude: "27.79677364",
    longitude: "-82.27647452",
  },
  {
    id: 72,
    address:
      "20420 Autumn Fern Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.167979",
    longitude: "-82.326851",
  },
  {
    id: 73,
    address:
      "499 Pine Eagle Drive, Fleming Island, FL 32003, United States of America",
    latitude: "30.103834",
    longitude: "-81.703288",
  },
  {
    id: 74,
    address:
      "13405 Graham Yarden Drive, Riverview, FL 33579, United States of America",
    latitude: "27.7881694",
    longitude: "-82.30545145",
  },
  {
    id: 75,
    address:
      "12116 Whistling Wind Drive, Riverview, FL 33569, United States of America",
    latitude: "27.82330973",
    longitude: "-82.31987224",
  },
  {
    id: 76,
    address:
      "3609 Annapolis Way, Jacksonville, FL 32224, United States of America",
    latitude: "30.2816976",
    longitude: "-81.4444693",
  },
  {
    id: 77,
    address:
      "12159 Stone Bark Trail, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38866764",
    longitude: "-81.34092329",
  },
  {
    id: 78,
    address:
      "16415 Tisons Bluff Road, Jacksonville, FL 32218, United States of America",
    latitude: "30.54015672",
    longitude: "-81.61780048",
  },
  {
    id: 79,
    address:
      "229 Lone Dove Lane, Bradenton, FL 34212, United States of America",
    latitude: "27.50174471",
    longitude: "-82.38090829",
  },
  {
    id: 80,
    address:
      "14923 Durbin Cove Way, Jacksonville, FL 32259, United States of America",
    latitude: "30.1089297",
    longitude: "-81.5290352",
  },
  {
    id: 81,
    address:
      "1313 West Redrock Ridge Avenue, Fruit Cove, FL 32259, United States of America",
    latitude: "30.066659",
    longitude: "-81.645066",
  },
  {
    id: 82,
    address:
      "63 Little Harbor Way, Saint Augustine, FL 32092, United States of America",
    latitude: "30.03229705",
    longitude: "-81.50088641",
  },
  {
    id: 83,
    address:
      "793 Petal Mist Lane, Brooksville, FL 34604, United States of America",
    latitude: "28.44341289",
    longitude: "-82.47423943",
  },
  {
    id: 84,
    address:
      "9022 Mountain Magnolia Drive, Riverview, FL 33578, United States of America",
    latitude: "27.89232745",
    longitude: "-82.35463594",
  },
  {
    id: 85,
    address:
      "11354 Emerald Shore Drive, Riverview, FL 33579, United States of America",
    latitude: "27.82085634",
    longitude: "-82.31514606",
  },
  {
    id: 86,
    address:
      "11406 Wishing Well Lane, Clermont, FL 34711, United States of America",
    latitude: "28.4932229",
    longitude: "-81.7634104",
  },
  {
    id: 87,
    address:
      "20027 Satin Leaf Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.16076335",
    longitude: "-82.32268638",
  },
  {
    id: 88,
    address:
      "2823 Shetland Ridge Drive, Marvina, FL 33596, United States of America",
    latitude: "27.8807344",
    longitude: "-82.2304865",
  },
  {
    id: 89,
    address:
      "14958 Durbin Cove Way, Jacksonville, FL 32259, United States of America",
    latitude: "30.1079724",
    longitude: "-81.5293186",
  },
  {
    id: 90,
    address:
      "2656 Kenchester Loop, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.19316958",
    longitude: "-82.29544424",
  },
  {
    id: 91,
    address:
      "534 Casa Sevilla Avenue, St. Augustine, FL 32092, United States of America",
    latitude: "29.966604",
    longitude: "-81.47259",
  },
  {
    id: 92,
    address:
      "10868 Cedar Branch Road, Jacksonville, FL 32218, United States of America",
    latitude: "30.43521189",
    longitude: "-81.63652756",
  },
  {
    id: 93,
    address:
      "11259 Spring Point Circle, Riverview, FL 33579, United States of America",
    latitude: "27.8187421",
    longitude: "-82.319448",
  },
  {
    id: 94,
    address:
      "12002 Rambling Stream Drive, Riverview, FL 33569, United States of America",
    latitude: "27.82420933",
    longitude: "-82.31904293",
  },
  {
    id: 95,
    address: "133 Greendale Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.1062182",
    longitude: "-81.42057",
  },
  {
    id: 96,
    address:
      "13910 Felix Will Road, Riverview, FL 33579, United States of America",
    latitude: "27.78100005",
    longitude: "-82.3037257",
  },
  {
    id: 97,
    address:
      "15827 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50166122",
    longitude: "-82.37997414",
  },
  {
    id: 98,
    address: "1701 Oak Pond Street, Ruskin, FL 33570, United States of America",
    latitude: "27.732513",
    longitude: "-82.397815",
  },
  {
    id: 99,
    address:
      "405 East Adelaide Drive, Fruit Cove, FL 32259, United States of America",
    latitude: "30.09111851",
    longitude: "-81.58452949",
  },
  {
    id: 100,
    address:
      "4241 Bethpage Court, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.21886036",
    longitude: "-82.31060268",
  },
  {
    id: 101,
    address:
      "529 Fiddleleaf Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04837347",
    longitude: "-80.69004563",
  },
  {
    id: 102,
    address:
      "5324 Northwest Wisk Fern Circle, Port Saint Lucie, FL 34986, United States of America",
    latitude: "27.3621218",
    longitude: "-80.37928567",
  },
  {
    id: 103,
    address:
      "87 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07773088",
    longitude: "-81.52414906",
  },
  {
    id: 104,
    address:
      "20229 Autumn Fern Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.163978",
    longitude: "-82.328057",
  },
  {
    id: 105,
    address:
      "144 Peter Island Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.035002",
    longitude: "-81.52082",
  },
  {
    id: 106,
    address:
      "1957 Attilburgh Boulevard, West Melbourne, FL 32904, United States of America",
    latitude: "28.04354392",
    longitude: "-80.65246855",
  },
  {
    id: 107,
    address:
      "20017 Bright Oak Court, Tampa, FL 33647, United States of America",
    latitude: "28.15837035",
    longitude: "-82.33132689",
  },
  {
    id: 108,
    address:
      "2754 Big Timber Drive, Kissimmee, FL 34758, United States of America",
    latitude: "28.21764474",
    longitude: "-81.47022042",
  },
  {
    id: 109,
    address:
      "6520 49th Court East, Bradenton, FL 34222, United States of America",
    latitude: "27.55952979",
    longitude: "-82.49764184",
  },
  {
    id: 110,
    address:
      "83 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07761067",
    longitude: "-81.52284942",
  },
  {
    id: 111,
    address:
      "12166 Wynnfield Lakes Circle, Jacksonville, FL 32246, United States of America",
    latitude: "30.3101679",
    longitude: "-81.4958689",
  },
  {
    id: 112,
    address:
      "11623 Mansfield Point Drive, Riverview, FL 33569, United States of America",
    latitude: "27.829511",
    longitude: "-82.327729",
  },
  {
    id: 113,
    address:
      "156 Peter Island Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.034845",
    longitude: "-81.520882",
  },
  {
    id: 114,
    address:
      "5111 Admiral Pointe Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.739239",
    longitude: "-82.42686",
  },
  {
    id: 115,
    address:
      "139 Montiano Circle, St. Augustine, FL 32084, United States of America",
    latitude: "29.9288206",
    longitude: "-81.37047071",
  },
  {
    id: 116,
    address:
      "14952 Durbin Cove Way, Jacksonville, FL 32259, United States of America",
    latitude: "30.1081233",
    longitude: "-81.5292393",
  },
  {
    id: 117,
    address:
      "7054 Rosabella Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1179172",
    longitude: "-81.5255104",
  },
  {
    id: 118,
    address:
      "12022 Wynnfield Lakes Circle, Jacksonville, FL 32246, United States of America",
    latitude: "30.3086301",
    longitude: "-81.4971135",
  },
  {
    id: 119,
    address:
      "12410 Whitmore Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1483254",
    longitude: "-81.569052",
  },
  {
    id: 120,
    address:
      "7630 Arden Lakes Drive, Jacksonville, FL 32222, United States of America",
    latitude: "30.2053547",
    longitude: "-81.8251541",
  },
  {
    id: 121,
    address:
      "7812 111th Terrace East, Parrish, FL 34219, United States of America",
    latitude: "27.58411676",
    longitude: "-82.45054939",
  },
  {
    id: 122,
    address:
      "8953 39th Street Circle East, Bradenton, FL 34219, United States of America",
    latitude: "27.54780098",
    longitude: "-82.47491614",
  },
  {
    id: 123,
    address:
      "1040 Thunderhead Lane, Minneola, FL 34715, United States of America",
    latitude: "28.59269173",
    longitude: "-81.72609659",
  },
  {
    id: 124,
    address:
      "11419 Lake Lucaya Drive, Riverview, FL 33579, United States of America",
    latitude: "27.82012271",
    longitude: "-82.31459379",
  },
  {
    id: 125,
    address:
      "12276 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18658595",
    longitude: "-82.61159063",
  },
  {
    id: 126,
    address:
      "305 East Teague Bay Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.0346139",
    longitude: "-81.51768691",
  },
  {
    id: 127,
    address:
      "1330 Woods Landing Drive, Minneola, FL 34715, United States of America",
    latitude: "28.59291804",
    longitude: "-81.72770515",
  },
  {
    id: 128,
    address:
      "12312 Ballentrae Forest Drive, Riverview, FL 33579, United States of America",
    latitude: "27.81813146",
    longitude: "-82.30033997",
  },
  {
    id: 129,
    address:
      "32 Saba Rock Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.031396",
    longitude: "-81.49940381",
  },
  {
    id: 130,
    address:
      "417 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07501704",
    longitude: "-81.52529788",
  },
  {
    id: 131,
    address:
      "4807 68th Street Circle East, Bradenton, FL 34203, United States of America",
    latitude: "27.45129165",
    longitude: "-82.47441167",
  },
  {
    id: 132,
    address:
      "4818 Woods Landing Lane, Progress Village, FL 33619, United States of America",
    latitude: "27.90621022",
    longitude: "-82.36303312",
  },
  {
    id: 133,
    address:
      "11695 Breadfruit Lane, Venice, FL 34292, United States of America",
    latitude: "27.07943601",
    longitude: "-82.34505896",
  },
  {
    id: 134,
    address:
      "11908 Diamond Springs Drive, Jacksonville, FL 32246, United States of America",
    latitude: "30.3071709",
    longitude: "-81.4940574",
  },
  {
    id: 135,
    address:
      "14057 Hazelwood Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.2741893",
    longitude: "-81.4433327",
  },
  {
    id: 136,
    address:
      "193 East New England Drive, Vermont Heights, FL 32033, United States of America",
    latitude: "29.8016937",
    longitude: "-81.39608261",
  },
  {
    id: 137,
    address:
      "630 Washita Stone Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.6858025",
    longitude: "-82.4241249",
  },
  {
    id: 138,
    address: "160 Princess Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.12186232",
    longitude: "-81.43276314",
  },
  {
    id: 139,
    address:
      "10444 Waterstone Drive, Riverview, FL 33578, United States of America",
    latitude: "27.85291635",
    longitude: "-82.3302782",
  },
  {
    id: 140,
    address:
      "11418 Blue Crane Street, Riverview, FL 33569, United States of America",
    latitude: "27.82949851",
    longitude: "-82.30909041",
  },
  {
    id: 141,
    address:
      "12048 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18595245",
    longitude: "-82.61509641",
  },
  {
    id: 142,
    address:
      "14324 Romeo Boulevard, Wimauma, FL 33598, United States of America",
    latitude: "27.768084",
    longitude: "-82.326847",
  },
  {
    id: 143,
    address:
      "15949 Tisons bluff road, Jacksonville, FL 32218, United States of America",
    latitude: "30.52914197",
    longitude: "-81.61705416",
  },
  {
    id: 144,
    address:
      "12346 Faust Court, Jacksonville, FL 32258, United States of America",
    latitude: "30.1497143",
    longitude: "-81.5693109",
  },
  {
    id: 145,
    address:
      "6760 Greenland Chase Boulevard, Jacksonville, FL 32258, United States of America",
    latitude: "30.1514028",
    longitude: "-81.5315954",
  },
  {
    id: 146,
    address:
      "505 Heathercreek Court, Oviedo, FL 32765, United States of America",
    latitude: "28.68765938",
    longitude: "-81.21595453",
  },
  {
    id: 147,
    address:
      "1513 Rhodeswell Lane, Brandon, FL 33527, United States of America",
    latitude: "27.96893923",
    longitude: "-82.26209746",
  },
  {
    id: 148,
    address:
      "1129 Seminole Sky Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72830995",
    longitude: "-82.44922719",
  },
  {
    id: 149,
    address:
      "12086 Narrowleaf Court, Jacksonville, FL 32225, United States of America",
    latitude: "30.32894386",
    longitude: "-81.49674465",
  },
  {
    id: 150,
    address:
      "2328 Silver View Drive, Lakeland, FL 33811, United States of America",
    latitude: "28.01841972",
    longitude: "-82.00804334",
  },
  {
    id: 151,
    address:
      "14307 Cedar Hill Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.4929718",
    longitude: "-81.60532228",
  },
  {
    id: 152,
    address:
      "14893 Durbin Cove Way, Jacksonville, FL 32259, United States of America",
    latitude: "30.1095778",
    longitude: "-81.5293945",
  },
  {
    id: 153,
    address:
      "290 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07650092",
    longitude: "-81.5246773",
  },
  {
    id: 154,
    address:
      "363 Heritage Oaks Drive, Saint Johns County, FL 32259, United States of America",
    latitude: "30.07488636",
    longitude: "-81.52462141",
  },
  {
    id: 155,
    address:
      "716 Briar View Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.16009204",
    longitude: "-81.84436023",
  },
  {
    id: 156,
    address:
      "7316 64th Street East, Bradenton, FL 34221, United States of America",
    latitude: "27.57192117",
    longitude: "-82.49003961",
  },
  {
    id: 157,
    address:
      "15611 Bloodroot Place, Brooksville, FL 34604, United States of America",
    latitude: "28.44380345",
    longitude: "-82.47393665",
  },
  {
    id: 158,
    address:
      "13401 Villa Di Preserve Lane, The Preserve at Corkscrew, FL 33928, United States of America",
    latitude: "26.449543",
    longitude: "-81.73786",
  },
  {
    id: 159,
    address: "291 Tavernier Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.11181131",
    longitude: "-81.42574442",
  },
  {
    id: 160,
    address:
      "10883 Birdsong Court, Jacksonville, FL 32257, United States of America",
    latitude: "30.1785633",
    longitude: "-81.5776435",
  },
  {
    id: 161,
    address:
      "10412 Flagstaff Falls Avenue, Riverview, FL 33578, United States of America",
    latitude: "27.8520062",
    longitude: "-82.33405471",
  },
  {
    id: 162,
    address:
      "131 Peter Island Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.035036",
    longitude: "-81.520187",
  },
  {
    id: 163,
    address: "13661 Messino Court, Estero, FL 33928, United States of America",
    latitude: "26.42492442",
    longitude: "-81.72580415",
  },
  {
    id: 164,
    address:
      "15875 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.5009791",
    longitude: "-82.38086852",
  },
  {
    id: 165,
    address:
      "5809 71st Street East, Bradenton, FL 34221, United States of America",
    latitude: "27.57703106",
    longitude: "-82.5043005",
  },
  {
    id: 166,
    address:
      "148 Maudehelen Street, Apopka, FL 32703, United States of America",
    latitude: "28.6750773",
    longitude: "-81.5462018",
  },
  {
    id: 167,
    address:
      "3776 Crossview Drive, Jacksonville, FL 32224, United States of America",
    latitude: "30.2770721",
    longitude: "-81.4444334",
  },
  {
    id: 168,
    address:
      "165 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07633856",
    longitude: "-81.52294953",
  },
  {
    id: 169,
    address:
      "3109 Angora Bay Drive, Middleburg, FL 32068, United States of America",
    latitude: "30.10233657",
    longitude: "-81.7933347",
  },
  {
    id: 170,
    address:
      "12410 Shady Bridge Trail, Jacksonville, FL 32258, United States of America",
    latitude: "30.14656085",
    longitude: "-81.58367384",
  },
  {
    id: 171,
    address:
      "850 Fiddleleaf Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04896472",
    longitude: "-80.68785703",
  },
  {
    id: 172,
    address:
      "15132 Rocky Shoals Road, Jacksonville, FL 32259, United States of America",
    latitude: "30.1054297",
    longitude: "-81.5372262",
  },
  {
    id: 173,
    address:
      "282 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07508049",
    longitude: "-81.52391631",
  },
  {
    id: 174,
    address:
      "11235 Spring Point Circle, Riverview, FL 33579, United States of America",
    latitude: "27.818814",
    longitude: "-82.321335",
  },
  {
    id: 175,
    address:
      "24041 Canal Street, Port Charlotte, FL 33980, United States of America",
    latitude: "26.975444",
    longitude: "-82.0509581",
  },
  {
    id: 176,
    address:
      "12257 Heronsford Lane, Jacksonville, FL 32258, United States of America",
    latitude: "30.1494793",
    longitude: "-81.5424736",
  },
  {
    id: 177,
    address:
      "14319 Romeo Boulevard, Wimauma, FL 33598, United States of America",
    latitude: "27.768389",
    longitude: "-82.327341",
  },
  {
    id: 178,
    address:
      "4393 Scarlet Loop, Wesley Chapel, FL 33544, United States of America",
    latitude: "28.22068229",
    longitude: "-82.36408586",
  },
  {
    id: 179,
    address:
      "6519 Cypress Crossing Court, Jacksonville, FL 32259, United States of America",
    latitude: "30.1046795",
    longitude: "-81.5274512",
  },
  {
    id: 180,
    address:
      "14007 Lonecreek Avenue, Orlando, FL 32828, United States of America",
    latitude: "28.56182696",
    longitude: "-81.18084363",
  },
  {
    id: 181,
    address:
      "30 Montiano Circle, St. Augustine, FL 32084, United States of America",
    latitude: "29.93022494",
    longitude: "-81.37118724",
  },
  {
    id: 182,
    address:
      "616 Stonehaven Drive, Haines City, FL 33844, United States of America",
    latitude: "28.13477039",
    longitude: "-81.61682158",
  },
  {
    id: 183,
    address: "2451 Martins Run, Tavares, FL 32778, United States of America",
    latitude: "28.7954682",
    longitude: "-81.7496575",
  },
  {
    id: 184,
    address:
      "32226 Garden Alcove Loop, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.2623734",
    longitude: "-82.28335243",
  },
  {
    id: 185,
    address:
      "428 Escalante Court, Saint Augustine Shores, FL 32086, United States of America",
    latitude: "29.79752535",
    longitude: "-81.29952719",
  },
  {
    id: 186,
    address:
      "12486 Longstone Court, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18452223",
    longitude: "-82.60897336",
  },
  {
    id: 187,
    address:
      "16358 Dawnwood Court, Jacksonville, FL 32218, United States of America",
    latitude: "30.5386941",
    longitude: "-81.6151654",
  },
  {
    id: 188,
    address:
      "261 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07514201",
    longitude: "-81.52332341",
  },
  {
    id: 189,
    address:
      "3115 Angora Bay Drive, Middleburg, FL 32068, United States of America",
    latitude: "30.1022786",
    longitude: "-81.79346037",
  },
  {
    id: 190,
    address:
      "2041 Emerald Green Road, Jacksonville, FL 32246, United States of America",
    latitude: "30.3102574",
    longitude: "-81.4966915",
  },
  {
    id: 191,
    address:
      "8823 Hinsdale Heights Drive, Polk City, FL 33868, United States of America",
    latitude: "28.15866363",
    longitude: "-81.85836661",
  },
  {
    id: 192,
    address:
      "672 Trellis Bay Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.0313265",
    longitude: "-81.49420927",
  },
  {
    id: 193,
    address:
      "12512 Cricklewood Drive, Spring Hill, FL 34610, United States of America",
    latitude: "28.33918947",
    longitude: "-82.54794305",
  },
  {
    id: 194,
    address: "Flagler County, FL, United States of America",
    latitude: "29.470682",
    longitude: "-81.288392",
  },
  {
    id: 195,
    address:
      "3189 Angora Bay Drive, Middleburg, FL 32068, United States of America",
    latitude: "30.10134248",
    longitude: "-81.7947982",
  },
  {
    id: 196,
    address:
      "632 Hollow Glen Drive, Titusville, FL 32780, United States of America",
    latitude: "28.553519",
    longitude: "-80.805885",
  },
  {
    id: 197,
    address:
      "82 Cloisterbane Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.0918805",
    longitude: "-81.5442228",
  },
  {
    id: 198,
    address:
      "925 Meadow Glade Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72592392",
    longitude: "-82.39832611",
  },
  {
    id: 199,
    address:
      "10453 Waterstone Drive, Riverview, FL 33578, United States of America",
    latitude: "27.852777",
    longitude: "-82.32980865",
  },
  {
    id: 200,
    address:
      "12403 Shady Bridge Trail, Jacksonville, FL 32258, United States of America",
    latitude: "30.14627875",
    longitude: "-81.5830994",
  },
  {
    id: 201,
    address:
      "1917 Attilburgh Boulevard, West Melbourne, FL 32904, United States of America",
    latitude: "28.04353747",
    longitude: "-80.6519378",
  },
  {
    id: 202,
    address:
      "4725 Balboa Park Loop, Bradenton, FL 34211, United States of America",
    latitude: "27.45793001",
    longitude: "-82.42046094",
  },
  {
    id: 203,
    address:
      "5036 Brenton Manor Avenue, Winter Haven, FL 33881, United States of America",
    latitude: "28.074168",
    longitude: "-81.65053931",
  },
  {
    id: 204,
    address:
      "521 Grant Logan Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.09160352",
    longitude: "-81.55927576",
  },
  {
    id: 205,
    address:
      "139 Cane Garden Way, St. Augustine, FL 32092, United States of America",
    latitude: "30.034698",
    longitude: "-81.518578",
  },
  {
    id: 206,
    address:
      "2000 Westborough Lane, Kissimmee, FL 34746, United States of America",
    latitude: "28.217339",
    longitude: "-81.420376",
  },
  {
    id: 207,
    address:
      "5282 Northwest Wisk Fern Circle, Port Saint Lucie, FL 34986, United States of America",
    latitude: "27.36068106",
    longitude: "-80.37910565",
  },
  {
    id: 208,
    address:
      "535 Side Creek Lane, Woodlawn, FL 32084, United States of America",
    latitude: "29.92822297",
    longitude: "-81.3508764",
  },
  {
    id: 209,
    address:
      "55 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07782556",
    longitude: "-81.52267376",
  },
  {
    id: 210,
    address: "93 Princess Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.12212482",
    longitude: "-81.43169709",
  },
  {
    id: 211,
    address:
      "10405 Laguna Plains Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84297",
    longitude: "-82.3306666",
  },
  {
    id: 212,
    address:
      "1169 Woods Landing Drive, Minneola, FL 34715, United States of America",
    latitude: "28.59342332",
    longitude: "-81.72526549",
  },
  {
    id: 213,
    address: "1834 Oak Hammock Court, Lutz, FL 33558, United States of America",
    latitude: "28.18367242",
    longitude: "-82.50337968",
  },
  {
    id: 214,
    address:
      "1708 North Cappero Drive, St. Augustine, FL 32092, United States of America",
    latitude: "29.95559162",
    longitude: "-81.48568313",
  },
  {
    id: 215,
    address:
      "258 East Teague Bay Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.034009",
    longitude: "-81.517087",
  },
  {
    id: 216,
    address:
      "10333 Summer Azure Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84969055",
    longitude: "-82.32839335",
  },
  {
    id: 217,
    address:
      "11340 Brighton Knoll Loop, Riverview, FL 33579, United States of America",
    latitude: "27.78088938",
    longitude: "-82.30607884",
  },
  {
    id: 218,
    address:
      "1990 Nations Way, Saint Cloud, FL 34769, United States of America",
    latitude: "28.24062034",
    longitude: "-81.31936384",
  },
  {
    id: 219,
    address:
      "4413 Banyan Tree Place, Riverview, FL 33578, United States of America",
    latitude: "27.90749892",
    longitude: "-82.35253673",
  },
  {
    id: 220,
    address:
      "7610 South Mascotte Street, Tampa, FL 33616, United States of America",
    latitude: "27.8564011",
    longitude: "-82.52759075",
  },
  {
    id: 221,
    address:
      "933 Seminole Sky Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.73044035",
    longitude: "-82.44772659",
  },
  {
    id: 222,
    address:
      "20205 Autumn Fern Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.164315",
    longitude: "-82.329938",
  },
  {
    id: 223,
    address:
      "2754 Via Piazza Loop, Fort Myers, FL 33905, United States of America",
    latitude: "26.63027349",
    longitude: "-81.80121153",
  },
  {
    id: 224,
    address:
      "3723 Briar Run Drive, Clermont, FL 34711, United States of America",
    latitude: "28.5118276",
    longitude: "-81.7420943",
  },
  {
    id: 225,
    address:
      "632 Fanning Drive, Winter Springs, FL 32708, United States of America",
    latitude: "28.696984",
    longitude: "-81.255543",
  },
  {
    id: 226,
    address:
      "16408 Tisons Bluff Road, Jacksonville, FL 32218, United States of America",
    latitude: "30.54020723",
    longitude: "-81.61799331",
  },
  {
    id: 227,
    address:
      "11525 Sand Stone Rock Drive, Riverview, FL 33569, United States of America",
    latitude: "27.8281972",
    longitude: "-82.3074157",
  },
  {
    id: 228,
    address:
      "10437 Waterstone Drive, Riverview, FL 33578, United States of America",
    latitude: "27.85335755",
    longitude: "-82.3308982",
  },
  {
    id: 229,
    address:
      "14366 Garden Gate Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1173648",
    longitude: "-81.5269022",
  },
  {
    id: 230,
    address:
      "182 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07758878",
    longitude: "-81.52536066",
  },
  {
    id: 231,
    address:
      "20109 Blue Daze Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.1617456",
    longitude: "-82.32845435",
  },
  {
    id: 232,
    address:
      "2479 Hastings Boulevard, Clermont, FL 34711, United States of America",
    latitude: "28.53672057",
    longitude: "-81.72798971",
  },
  {
    id: 233,
    address:
      "261 Heron Landing Road, Jacksonville, FL 32259, United States of America",
    latitude: "30.08682607",
    longitude: "-81.53816004",
  },
  {
    id: 234,
    address:
      "8478 Sumner Avenue, Fort Myers, FL 33908, United States of America",
    latitude: "26.49414846",
    longitude: "-81.89773149",
  },
  {
    id: 235,
    address:
      "12008 Legacy Bright Street, Riverview, FL 33578, United States of America",
    latitude: "27.8243518",
    longitude: "-82.33550778",
  },
  {
    id: 236,
    address:
      "12619 Longstone Court, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18515065",
    longitude: "-82.60731166",
  },
  {
    id: 237,
    address:
      "3463 Marmalade Court, Pasco County, FL 34638, United States of America",
    latitude: "28.20795188",
    longitude: "-82.50735543",
  },
  {
    id: 238,
    address:
      "921 Peregrine Hill Place, Ruskin, FL 33570, United States of America",
    latitude: "27.72555739",
    longitude: "-82.39921391",
  },
  {
    id: 239,
    address:
      "9571 Wexford Chase Road, Jacksonville, FL 32257, United States of America",
    latitude: "30.2039715",
    longitude: "-81.5868499",
  },
  {
    id: 240,
    address:
      "1395 Lexington Square Southwest, Florida Ridge, FL 32962, United States of America",
    latitude: "27.59746763",
    longitude: "-80.40405424",
  },
  {
    id: 241,
    address:
      "16206 Magnolia Grove Way, Jacksonville, FL 32218, United States of America",
    latitude: "30.53586283",
    longitude: "-81.61463982",
  },
  {
    id: 242,
    address:
      "1009 Fountain Coin Loop, Orlando, FL 32828, United States of America",
    latitude: "28.54985677",
    longitude: "-81.15528288",
  },
  {
    id: 243,
    address:
      "12393 Moss Lake Loop, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18697432",
    longitude: "-82.61157827",
  },
  {
    id: 244,
    address:
      "13237 Wellington Hills Drive, Riverview, FL 33579, United States of America",
    latitude: "27.79128324",
    longitude: "-82.32725285",
  },
  {
    id: 245,
    address: "Clermont, FL, United States of America",
    latitude: "28.552587",
    longitude: "-81.754435",
  },
  {
    id: 246,
    address:
      "514 Casa Sevilla Avenue, St. Augustine, FL 32092, United States of America",
    latitude: "29.96591713",
    longitude: "-81.472975",
  },
  {
    id: 247,
    address:
      "7613 South Mascotte Street, Tampa, FL 33616, United States of America",
    latitude: "27.85612275",
    longitude: "-82.5280384",
  },
  {
    id: 248,
    address: "1481 Scout Drive, Rockledge, FL 32955, United States of America",
    latitude: "28.3422503",
    longitude: "-80.7529197",
  },
  {
    id: 249,
    address:
      "1556 Thetford Circle, Meadow Woods, FL 32824, United States of America",
    latitude: "28.35011416",
    longitude: "-81.33531603",
  },
  {
    id: 250,
    address:
      "10015 Smarty Jones Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76653008",
    longitude: "-82.34412692",
  },
  {
    id: 251,
    address:
      "11511 Peru Springs Place, Riverview, FL 33569, United States of America",
    latitude: "27.832038",
    longitude: "-82.326917",
  },
  {
    id: 252,
    address:
      "4309 Eagle Landing Parkway, Orange Park, FL 32065, United States of America",
    latitude: "30.15434929",
    longitude: "-81.86257582",
  },
  {
    id: 253,
    address:
      "6456 Greenland Chase Boulevard, Jacksonville, FL 32258, United States of America",
    latitude: "30.1492657",
    longitude: "-81.539802",
  },
  {
    id: 254,
    address:
      "199 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07588918",
    longitude: "-81.5230196",
  },
  {
    id: 255,
    address:
      "3431 San Moise Place, Plant City, FL 33567, United States of America",
    latitude: "27.9601579",
    longitude: "-82.1572508",
  },
  {
    id: 256,
    address:
      "3930 Trail Ridge Road, Middleburg, FL 32068, United States of America",
    latitude: "30.13299076",
    longitude: "-81.84747635",
  },
  {
    id: 257,
    address:
      "413 Tierra Verde Way, Bradenton, FL 34212, United States of America",
    latitude: "27.50253375",
    longitude: "-82.39015601",
  },
  {
    id: 258,
    address:
      "10332 Oxford Lakes Drive, Jacksonville, FL 32257, United States of America",
    latitude: "30.18992095",
    longitude: "-81.5981303",
  },
  {
    id: 259,
    address:
      "12018 Legacy Bright Street, Riverview, FL 33578, United States of America",
    latitude: "27.82423904",
    longitude: "-82.33550624",
  },
  {
    id: 260,
    address:
      "488 Bottlebrush Loop, Sanford, FL 32771, United States of America",
    latitude: "28.81983901",
    longitude: "-81.3387971",
  },
  {
    id: 261,
    address:
      "14108 Waterford Creek Boulevard, Orlando, FL 32828, United States of America",
    latitude: "28.56263115",
    longitude: "-81.18039974",
  },
  {
    id: 262,
    address:
      "11705 Thicket Wood Drive, Riverview, FL 33579, United States of America",
    latitude: "27.818598",
    longitude: "-82.301985",
  },
  {
    id: 263,
    address:
      "15628 Trinity Fall Way, Bradenton, FL 34212, United States of America",
    latitude: "27.50332498",
    longitude: "-82.38315509",
  },
  {
    id: 264,
    address:
      "30848 Pumpkin Ridge Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.2216107",
    longitude: "-82.30609202",
  },
  {
    id: 265,
    address:
      "492 Pine Eagle Drive, Fleming Island, FL 32003, United States of America",
    latitude: "30.10557437",
    longitude: "-81.70340462",
  },
  {
    id: 266,
    address:
      "10501 Laguna Plains Drive, Riverview, FL 33578, United States of America",
    latitude: "27.844078",
    longitude: "-82.33355",
  },
  {
    id: 267,
    address:
      "11338 Lake Lucaya Drive, Riverview, FL 33579, United States of America",
    latitude: "27.820439",
    longitude: "-82.315457",
  },
  {
    id: 268,
    address:
      "12404 Whitmore Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1485165",
    longitude: "-81.5689852",
  },
  {
    id: 269,
    address:
      "177 Myrtle Brook Bend, Nocatee, FL 32081, United States of America",
    latitude: "30.098619",
    longitude: "-81.42460753",
  },
  {
    id: 270,
    address:
      "18140 Horizon View Boulevard, Lehigh Acres, FL 33972, United States of America",
    latitude: "26.62335145",
    longitude: "-81.65477385",
  },
  {
    id: 271,
    address:
      "12464 Acosta Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1480173",
    longitude: "-81.5664733",
  },
  {
    id: 272,
    address:
      "464 Pine Eagle Drive, Fleming Island, FL 32003, United States of America",
    latitude: "30.1056509",
    longitude: "-81.70293751",
  },
  {
    id: 273,
    address:
      "4424 Quail Hollow Road, Orange Park, FL 32065, United States of America",
    latitude: "30.14449325",
    longitude: "-81.85547543",
  },
  {
    id: 274,
    address:
      "10006 Spanish Cherry Court, Tampa, FL 33647, United States of America",
    latitude: "28.1630569",
    longitude: "-82.32328202",
  },
  {
    id: 275,
    address:
      "26944 Evergreen Chase Drive, Wesley Chapel, FL 33544, United States of America",
    latitude: "28.17875729",
    longitude: "-82.37122056",
  },
  {
    id: 276,
    address:
      "4814 Ashley Lake Circle, Vero Beach, FL 32967, United States of America",
    latitude: "27.681843",
    longitude: "-80.461706",
  },
  {
    id: 277,
    address:
      "499 Fiddleleaf Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.0480668",
    longitude: "-80.68996475",
  },
  {
    id: 278,
    address:
      "6301 75th Avenue East, Bradenton, FL 34221, United States of America",
    latitude: "27.57116414",
    longitude: "-82.48761169",
  },
  {
    id: 279,
    address:
      "8390 Nandina Drive, Sarasota County, FL 34240, United States of America",
    latitude: "27.31321906",
    longitude: "-82.39943702",
  },
  {
    id: 280,
    address:
      "139 Corey Cay Avenue, St. Augustine, FL 32092, United States of America",
    latitude: "30.04039721",
    longitude: "-81.53215922",
  },
  {
    id: 281,
    address:
      "1901 Via Palermo Street, Plant City, FL 33566, United States of America",
    latitude: "27.97950175",
    longitude: "-82.14108833",
  },
  {
    id: 282,
    address:
      "2776 Big Timber Drive, Kissimmee, FL 34758, United States of America",
    latitude: "28.21643818",
    longitude: "-81.47056419",
  },
  {
    id: 283,
    address:
      "2874 Pewter Mist Court, Oviedo, FL 32765, United States of America",
    latitude: "28.64736711",
    longitude: "-81.25483607",
  },
  {
    id: 284,
    address:
      "89 Little Harbor Way, Saint Augustine, FL 32092, United States of America",
    latitude: "30.03277225",
    longitude: "-81.50097326",
  },
  {
    id: 285,
    address:
      "12200 Woodview Drive, Jacksonville, FL 32246, United States of America",
    latitude: "30.3161559",
    longitude: "-81.4959143",
  },
  {
    id: 286,
    address:
      "4919 Tiger Lily Lane, Jacksonville, FL 32257, United States of America",
    latitude: "30.2039916",
    longitude: "-81.58639856",
  },
  {
    id: 287,
    address:
      "5816 112th Avenue East, Manatee County, FL 34219, United States of America",
    latitude: "27.56913444",
    longitude: "-82.44863541",
  },
  {
    id: 288,
    address:
      "10505 Laguna Plains Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84429062",
    longitude: "-82.33355531",
  },
  {
    id: 289,
    address: "2187 Geneva Drive, Lakeland, FL 33805, United States of America",
    latitude: "28.12459834",
    longitude: "-81.91595702",
  },
  {
    id: 290,
    address:
      "5660 Dornich Drive, Auburndale, FL 33823, United States of America",
    latitude: "28.14711813",
    longitude: "-81.81971769",
  },
  {
    id: 291,
    address:
      "12207 Woodview Drive, Jacksonville, FL 32246, United States of America",
    latitude: "30.3166244",
    longitude: "-81.4957488",
  },
  {
    id: 292,
    address:
      "13842 Gabriel Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.292716",
    longitude: "-81.4533646",
  },
  {
    id: 293,
    address:
      "10233 Newminster Loop, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76549813",
    longitude: "-82.33905176",
  },
  {
    id: 294,
    address:
      "4151 Little Gap Loop, Bradenton, FL 34222, United States of America",
    latitude: "27.55091",
    longitude: "-82.505109",
  },
  {
    id: 295,
    address:
      "9554 Wexford Chase Road, Jacksonville, FL 32257, United States of America",
    latitude: "30.204318",
    longitude: "-81.5873256",
  },
  {
    id: 296,
    address:
      "629 Fiddleleaf Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04925575",
    longitude: "-80.68980789",
  },
  {
    id: 297,
    address:
      "2705 Via San Latina Court, Fort Myers, FL 33905, United States of America",
    latitude: "26.630796",
    longitude: "-81.796877",
  },
  {
    id: 298,
    address:
      "4150 Carriage Crossing Lane, Orange Park, FL 32065, United States of America",
    latitude: "30.148414",
    longitude: "-81.856397",
  },
  {
    id: 299,
    address:
      "4909 Waters Gate Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7547391",
    longitude: "-81.7666062",
  },
  {
    id: 300,
    address:
      "6033 Sweet Birch Drive, Riverview, FL 33578, United States of America",
    latitude: "27.890528",
    longitude: "-82.355688",
  },
  {
    id: 301,
    address:
      "6315 Pin Cherry Place, Riverview, FL 33578, United States of America",
    latitude: "27.89100886",
    longitude: "-82.359737",
  },
  {
    id: 302,
    address:
      "1054 Bethpage Road, Polk County, FL 33823, United States of America",
    latitude: "28.14520025",
    longitude: "-81.81999669",
  },
  {
    id: 303,
    address:
      "3394 Burdock Avenue, West Melbourne, FL 32904, United States of America",
    latitude: "28.05385853",
    longitude: "-80.67704212",
  },
  {
    id: 304,
    address:
      "62 Traveler Palm Court, Palm Valley, FL 32082, United States of America",
    latitude: "30.1810188",
    longitude: "-81.38875915",
  },
  {
    id: 305,
    address:
      "10435 Waterstone Drive, Riverview, FL 33578, United States of America",
    latitude: "27.85334615",
    longitude: "-82.33105234",
  },
  {
    id: 306,
    address:
      "11324 Lake Lucaya Drive, Riverview, FL 33579, United States of America",
    latitude: "27.819821",
    longitude: "-82.316741",
  },
  {
    id: 307,
    address:
      "11543 Southern Creek Drive, Gibsonton, FL 33534, United States of America",
    latitude: "27.83182959",
    longitude: "-82.37320849",
  },
  {
    id: 308,
    address:
      "2245 Club Lake Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14547154",
    longitude: "-81.86106281",
  },
  {
    id: 309,
    address:
      "7795 Bucks Run, Collier County, FL 34120, United States of America",
    latitude: "26.2470145",
    longitude: "-81.68265237",
  },
  {
    id: 310,
    address:
      "251 Buck Run Way, St. Augustine, FL 32092, United States of America",
    latitude: "29.94254846",
    longitude: "-81.49096044",
  },
  {
    id: 311,
    address:
      "628 Birchbark Trail, St. Augustine, FL 32092, United States of America",
    latitude: "29.961756",
    longitude: "-81.528298",
  },
  {
    id: 312,
    address:
      "1119 Canyon Oaks Drive, Brandon, FL 33510, United States of America",
    latitude: "27.97600022",
    longitude: "-82.29487669",
  },
  {
    id: 313,
    address:
      "11310 Emerald Shore Drive, Riverview, FL 33579, United States of America",
    latitude: "27.81991359",
    longitude: "-82.31784318",
  },
  {
    id: 314,
    address:
      "1409 24th Street East, Memphis, FL 34221, United States of America",
    latitude: "27.53525642",
    longitude: "-82.55009277",
  },
  {
    id: 315,
    address:
      "5376 Northwest Wisk Fern Circle, Port Saint Lucie, FL 34986, United States of America",
    latitude: "27.36314813",
    longitude: "-80.38056627",
  },
  {
    id: 316,
    address:
      "16428 Magnolia Grove Way, Jacksonville, FL 32218, United States of America",
    latitude: "30.54055028",
    longitude: "-81.61675338",
  },
  {
    id: 317,
    address:
      "4306 Eagle Landing Parkway, Orange Park, FL 32065, United States of America",
    latitude: "30.15415354",
    longitude: "-81.86280018",
  },
  {
    id: 318,
    address:
      "142 Broyles Drive SE, Palm Bay, FL 32909, United States of America",
    latitude: "27.938251",
    longitude: "-80.669586",
  },
  {
    id: 319,
    address:
      "5239 Steadfast Lane, Jacksonville, FL 32257, United States of America",
    latitude: "30.1770222",
    longitude: "-81.5773279",
  },
  {
    id: 320,
    address:
      "9204 Mountain Magnolia Drive, Riverview, FL 33578, United States of America",
    latitude: "27.891647",
    longitude: "-82.351592",
  },
  {
    id: 321,
    address:
      "11334 Lake Lucaya Drive, Riverview, FL 33579, United States of America",
    latitude: "27.820317",
    longitude: "-82.315905",
  },
  {
    id: 322,
    address:
      "16120 Starling Crossing Drive, Lithia, FL 33547, United States of America",
    latitude: "27.8614176",
    longitude: "-82.21657567",
  },
  {
    id: 323,
    address:
      "26829 Evergreen Chase Drive, Wesley Chapel, FL 33544, United States of America",
    latitude: "28.17959956",
    longitude: "-82.37221594",
  },
  {
    id: 324,
    address:
      "5735 Broad River Run, Bradenton, FL 34222, United States of America",
    latitude: "27.55265596",
    longitude: "-82.50660906",
  },
  {
    id: 325,
    address:
      "11320 Emerald Shore Drive, Riverview, FL 33579, United States of America",
    latitude: "27.820418",
    longitude: "-82.31793857",
  },
  {
    id: 326,
    address:
      "196 Taylor Ridge Avenue, Nocatee, FL 32081, United States of America",
    latitude: "30.09768396",
    longitude: "-81.46268961",
  },
  {
    id: 327,
    address:
      "15812 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50195223",
    longitude: "-82.38020777",
  },
  {
    id: 328,
    address:
      "2818 Running Brook Circle, Kissimmee, FL 34744, United States of America",
    latitude: "28.331597",
    longitude: "-81.28865",
  },
  {
    id: 329,
    address:
      "3882 Tar Kiln Road, Jacksonville, FL 32223, United States of America",
    latitude: "30.14678702",
    longitude: "-81.60559352",
  },
  {
    id: 330,
    address:
      "4574 Sherman Hills Parkway, Jacksonville, FL 32210-, United States of America",
    latitude: "30.255409",
    longitude: "-81.837546",
  },
  {
    id: 331,
    address:
      "6513 Nestall Court, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77767895",
    longitude: "-82.37078394",
  },
  {
    id: 332,
    address:
      "11708 Thicket Wood Drive, Riverview, FL 33579, United States of America",
    latitude: "27.819286",
    longitude: "-82.301562",
  },
  {
    id: 333,
    address:
      "12610 Sawgrass Oak Street, Meadow Woods, FL 32824, United States of America",
    latitude: "28.381649",
    longitude: "-81.356636",
  },
  {
    id: 334,
    address:
      "12620 Longstone Court, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18497556",
    longitude: "-82.60728978",
  },
  {
    id: 335,
    address:
      "3460 Julius Estates Boulevard, Winter Haven, FL 33881, United States of America",
    latitude: "28.06481726",
    longitude: "-81.70815216",
  },
  {
    id: 336,
    address:
      "3766 Grecko Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.2126",
    longitude: "-82.272271",
  },
  {
    id: 337,
    address: "4248 Adelaar Drive, Tatum, FL 34240, United States of America",
    latitude: "27.32273681",
    longitude: "-82.42118802",
  },
  {
    id: 338,
    address:
      "6329 Manuscript Street, Horizon West, FL 34787, United States of America",
    latitude: "28.47160568",
    longitude: "-81.61615982",
  },
  {
    id: 339,
    address:
      "841 Jefferson Boulevard, Haines City, FL 33844, United States of America",
    latitude: "28.12986798",
    longitude: "-81.620886",
  },
  {
    id: 340,
    address:
      "11131 58th Street Circle East, Manatee County, FL 34219, United States of America",
    latitude: "27.57069697",
    longitude: "-82.44733285",
  },
  {
    id: 341,
    address:
      "1095 Southern Hills Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14875197",
    longitude: "-81.86242415",
  },
  {
    id: 342,
    address:
      "11902 Harpswell Drive, Riverview, FL 33579, United States of America",
    latitude: "27.8101549",
    longitude: "-82.29410639",
  },
  {
    id: 343,
    address:
      "7511 Tangle Rush Drive, Allens, FL 33534, United States of America",
    latitude: "27.82697",
    longitude: "-82.37514969",
  },
  {
    id: 344,
    address:
      "11762 Hampstead Street, Windermere, FL 34786, United States of America",
    latitude: "28.46205153",
    longitude: "-81.55736002",
  },
  {
    id: 345,
    address:
      "1780 Nature Cove Lane, Clermont, FL 34711, United States of America",
    latitude: "28.528299",
    longitude: "-81.721766",
  },
  {
    id: 346,
    address:
      "18448 Milton Keynes Court, Pasco County, FL 34638, United States of America",
    latitude: "28.21375047",
    longitude: "-82.51116518",
  },
  {
    id: 347,
    address:
      "2359 Silver View Drive, Lakeland, FL 33811, United States of America",
    latitude: "28.01703337",
    longitude: "-82.00782775",
  },
  {
    id: 348,
    address:
      "6913 Sail View Lane, Apollo Beach, FL 33572, United States of America",
    latitude: "27.7874856",
    longitude: "-82.3765697",
  },
  {
    id: 349,
    address: "1511 Oak Pond Street, Ruskin, FL 33570, United States of America",
    latitude: "27.73101867",
    longitude: "-82.39814845",
  },
  {
    id: 350,
    address:
      "319 Gladesdale Street, Haines City, FL 33844, United States of America",
    latitude: "28.08640631",
    longitude: "-81.61779222",
  },
  {
    id: 351,
    address:
      "7819 Bucks Run, Collier County, FL 34120, United States of America",
    latitude: "26.24698696",
    longitude: "-81.68191751",
  },
  {
    id: 352,
    address:
      "8218 Round Leaf Lane, Riverview, FL 33578, United States of America",
    latitude: "27.873155",
    longitude: "-82.364011",
  },
  {
    id: 353,
    address: "215 Brookline Trail, Nocatee, FL 32081, United States of America",
    latitude: "30.09696952",
    longitude: "-81.46351977",
  },
  {
    id: 354,
    address:
      "1516 Water Elm Court, Orlando, FL 32825, United States of America",
    latitude: "28.52741205",
    longitude: "-81.21880222",
  },
  {
    id: 355,
    address:
      "12430 Belcroft Drive, Riverview, FL 33579, United States of America",
    latitude: "27.809862",
    longitude: "-82.30265235",
  },
  {
    id: 356,
    address:
      "4310 Eagle Landing Parkway, Orange Park, FL 32065, United States of America",
    latitude: "30.15418118",
    longitude: "-81.862576",
  },
  {
    id: 357,
    address:
      "5832 Grey Heron Drive, Winter Haven, FL 33881, United States of America",
    latitude: "28.05856",
    longitude: "-81.67918033",
  },
  {
    id: 358,
    address:
      "7010 Old Benton Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77751865",
    longitude: "-82.38040296",
  },
  {
    id: 359,
    address:
      "8627 Turnstone Shore Lane, Riverview, FL 33578, United States of America",
    latitude: "27.887036",
    longitude: "-82.353192",
  },
  {
    id: 360,
    address:
      "1121 Maza Place, Pasco County, FL 34655, United States of America",
    latitude: "28.17508564",
    longitude: "-82.60374469",
  },
  {
    id: 361,
    address:
      "754 Tanana Fall Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.6901734",
    longitude: "-82.42143113",
  },
  {
    id: 362,
    address:
      "3855 Chasing Falls Road, Orange Park, FL 32065, United States of America",
    latitude: "30.16170945",
    longitude: "-81.84111268",
  },
  {
    id: 363,
    address:
      "11533 Sand Stone Rock Drive, Riverview, FL 33569, United States of America",
    latitude: "27.8289216",
    longitude: "-82.3072838",
  },
  {
    id: 364,
    address:
      "2850 Pewter Mist Court, Oviedo, FL 32765, United States of America",
    latitude: "28.66581",
    longitude: "-81.17938",
  },
  {
    id: 365,
    address:
      "14123 Whisper Bench Way, Lithia, FL 33547, United States of America",
    latitude: "27.84911455",
    longitude: "-82.25348641",
  },
  {
    id: 366,
    address:
      "10511 Summer Azure Drive, Riverview, FL 33578, United States of America",
    latitude: "27.8478266",
    longitude: "-82.32969281",
  },
  {
    id: 367,
    address:
      "16364 Dawnwood Court, Jacksonville, FL 32218, United States of America",
    latitude: "30.5387354",
    longitude: "-81.61514156",
  },
  {
    id: 368,
    address: "18454 Waydale Loop, Hudson, FL 34667, United States of America",
    latitude: "28.425864",
    longitude: "-82.648801",
  },
  {
    id: 369,
    address: "58 Marietta Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.1075749",
    longitude: "-81.4199942",
  },
  {
    id: 370,
    address:
      "5064 Longmeadow Park Street, Orlando, FL 32811, United States of America",
    latitude: "28.491147",
    longitude: "-81.447026",
  },
  {
    id: 371,
    address:
      "685 SW 242nd Terrace, Newberry, FL 32669, United States of America",
    latitude: "29.642069",
    longitude: "-82.59889",
  },
  {
    id: 372,
    address:
      "253 Heron Landing Road, Jacksonville, FL 32259, United States of America",
    latitude: "30.08680392",
    longitude: "-81.53806434",
  },
  {
    id: 373,
    address:
      "26 Traveler Palm Court, Palm Valley, FL 32082, United States of America",
    latitude: "30.1809759",
    longitude: "-81.38909259",
  },
  {
    id: 374,
    address: "1407 Oak Pond Street, Ruskin, FL 33570, United States of America",
    latitude: "27.73014285",
    longitude: "-82.39826555",
  },
  {
    id: 375,
    address:
      "15174 Rocky Shoals Road, Jacksonville, FL 32259, United States of America",
    latitude: "30.1045517",
    longitude: "-81.5372077",
  },
  {
    id: 376,
    address: "18770 Deer Tracks Loop, Lutz, FL 33558, United States of America",
    latitude: "28.1820547",
    longitude: "-82.5046478",
  },
  {
    id: 377,
    address:
      "3111 Amalfi Drive, Lake Pickett, FL 32820, United States of America",
    latitude: "28.58798932",
    longitude: "-81.11282684",
  },
  {
    id: 378,
    address: "3687 Hollisten Circle, Viera, FL 32940, United States of America",
    latitude: "28.24962262",
    longitude: "-80.75353435",
  },
  {
    id: 379,
    address: "1433 Avila Avenue, Deltona, FL 32725, United States of America",
    latitude: "28.9074398",
    longitude: "-81.235293",
  },
  {
    id: 380,
    address:
      "1631 Water Elm Court, Orlando, FL 32825, United States of America",
    latitude: "28.52639923",
    longitude: "-81.21803262",
  },
  {
    id: 381,
    address:
      "3453 Marmalade Court, Pasco County, FL 34638, United States of America",
    latitude: "28.20787351",
    longitude: "-82.50735471",
  },
  {
    id: 382,
    address:
      "3943 Buckinghamshire Drive, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.21429133",
    longitude: "-82.50768085",
  },
  {
    id: 383,
    address:
      "3012 Esmeralda Drive, Sarasota, FL 34243, United States of America",
    latitude: "27.39400759",
    longitude: "-82.52653939",
  },
  {
    id: 384,
    address:
      "11425 Lake Lucaya Drive, Riverview, FL 33579, United States of America",
    latitude: "27.82012328",
    longitude: "-82.31442172",
  },
  {
    id: 385,
    address:
      "14019 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.127594",
    longitude: "-81.5065536",
  },
  {
    id: 386,
    address:
      "713 SW 242nd Terrace, Newberry, FL 32669, United States of America",
    latitude: "29.641998",
    longitude: "-82.598793",
  },
  {
    id: 387,
    address: "360 Cameron Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.09639744",
    longitude: "-81.46394433",
  },
  {
    id: 388,
    address:
      "1941 Continental Street, Saint Cloud, FL 34769, United States of America",
    latitude: "28.24122755",
    longitude: "-81.32180288",
  },
  {
    id: 389,
    address:
      "300 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07650336",
    longitude: "-81.52453977",
  },
  {
    id: 390,
    address:
      "3852 Burnt Pine Drive, Jacksonville, FL 32224, United States of America",
    latitude: "30.2742712",
    longitude: "-81.4454436",
  },
  {
    id: 391,
    address:
      "4322 Bethpage Court, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.2192577",
    longitude: "-82.31040729",
  },
  {
    id: 392,
    address:
      "11424 Flora Springs Drive, Riverview, FL 33579, United States of America",
    latitude: "27.78481345",
    longitude: "-82.31345752",
  },
  {
    id: 393,
    address:
      "775 Mosswood Chase, Orange Park, FL 32065, United States of America",
    latitude: "30.1795564",
    longitude: "-81.8350893",
  },
  {
    id: 394,
    address:
      "150 Montiano Circle, St. Augustine, FL 32084, United States of America",
    latitude: "29.92878493",
    longitude: "-81.37066303",
  },
  {
    id: 395,
    address:
      "2443 Kenchester Loop, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.19327103",
    longitude: "-82.29629318",
  },
  {
    id: 396,
    address:
      "13906 Artesa Bell Drive, Riverview, FL 33579, United States of America",
    latitude: "27.77999491",
    longitude: "-82.31238838",
  },
  {
    id: 397,
    address: "3021 Winglewood Circle, Lutz, FL 33558, United States of America",
    latitude: "28.16636185",
    longitude: "-82.4876646",
  },
  {
    id: 398,
    address:
      "3695 Burnt Pine Drive, Jacksonville, FL 32224, United States of America",
    latitude: "30.2788419",
    longitude: "-81.4456307",
  },
  {
    id: 399,
    address:
      "931 Ginnie Way, Winter Springs, FL 32708, United States of America",
    latitude: "28.699804",
    longitude: "-81.257678",
  },
  {
    id: 400,
    address:
      "16283 Magnolia Grove Way, Jacksonville, FL 32218, United States of America",
    latitude: "30.53753744",
    longitude: "-81.61424651",
  },
  {
    id: 401,
    address:
      "11402 Brighton Knoll Loop, Riverview, FL 33579, United States of America",
    latitude: "27.78138005",
    longitude: "-82.30760148",
  },
  {
    id: 402,
    address:
      "12 Peter Island Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.037151",
    longitude: "-81.519905",
  },
  {
    id: 403,
    address:
      "3311 San Moise Place, Plant City, FL 33567, United States of America",
    latitude: "27.960588",
    longitude: "-82.1584372",
  },
  {
    id: 404,
    address: "707 Dogwood Run, Bradenton, FL 34212, United States of America",
    latitude: "27.49367152",
    longitude: "-82.41674006",
  },
  {
    id: 405,
    address:
      "3514 Gatwick Manor Lane, Viera, FL 32940, United States of America",
    latitude: "28.25248223",
    longitude: "-80.75150813",
  },
  {
    id: 406,
    address:
      "10144 Celtic Ash Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76644114",
    longitude: "-82.33917559",
  },
  {
    id: 407,
    address:
      "10411 Hampton Meadow Way, Riverview, FL 33578, United States of America",
    latitude: "27.82357394",
    longitude: "-82.3367854",
  },
  {
    id: 408,
    address: "13507 Fallspark Way, Orlando, FL 32824, United States of America",
    latitude: "28.3693318",
    longitude: "-81.3265166",
  },
  {
    id: 409,
    address:
      "16047 Hampton Crossing Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.43665414",
    longitude: "-81.64564573",
  },
  {
    id: 410,
    address:
      "2109 South Sorrento Hills Road, St. Augustine, FL 32092, United States of America",
    latitude: "29.95179589",
    longitude: "-81.48357505",
  },
  {
    id: 411,
    address:
      "330 Morning View Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.53843225",
    longitude: "-81.60967522",
  },
  {
    id: 412,
    address:
      "4932 Eastlake Vista Drive, St. Cloud, FL 34771, United States of America",
    latitude: "28.30516529",
    longitude: "-81.24172557",
  },
  {
    id: 413,
    address:
      "11635 Brighton Knoll Loop, Riverview, FL 33579, United States of America",
    latitude: "27.77787373",
    longitude: "-82.30308086",
  },
  {
    id: 414,
    address:
      "2300 Mountain Apple Way, Apopka, FL 32712, United States of America",
    latitude: "28.706003",
    longitude: "-81.54808",
  },
  {
    id: 415,
    address:
      "2636 Holly Bluff Court, Plant City, FL 33566, United States of America",
    latitude: "27.98272939",
    longitude: "-82.11663529",
  },
  {
    id: 416,
    address:
      "38 Abacus Avenue, Ormond Beach, FL 32174, United States of America",
    latitude: "29.2783533",
    longitude: "-81.1379277",
  },
  {
    id: 417,
    address:
      "4053 Windcrest Drive, Seven Oaks, FL 33544, United States of America",
    latitude: "28.21589528",
    longitude: "-82.35604629",
  },
  {
    id: 418,
    address:
      "2454 Linkwood Avenue, Clermont, FL 34711, United States of America",
    latitude: "28.53811915",
    longitude: "-81.72649803",
  },
  {
    id: 419,
    address: "3029 Winglewood Circle, Lutz, FL 33558, United States of America",
    latitude: "28.1661999",
    longitude: "-82.48698449",
  },
  {
    id: 420,
    address:
      "4287 Great Egret Way, Middleburg, FL 32068, United States of America",
    latitude: "30.13901983",
    longitude: "-81.86346934",
  },
  {
    id: 421,
    address:
      "1212 Trailwater Street, Ruskin, FL 33570, United States of America",
    latitude: "27.72916902",
    longitude: "-82.40703104",
  },
  {
    id: 422,
    address:
      "520 Seven Oaks Boulevard, Winter Springs, FL 32708, United States of America",
    latitude: "28.713589",
    longitude: "-81.322481",
  },
  {
    id: 423,
    address:
      "83 Bobwhite Quail Way, Jacksonville, FL 32081, United States of America",
    latitude: "30.10235",
    longitude: "-81.424438",
  },
  {
    id: 424,
    address:
      "8550 Banyan Bay Boulevard, Lee County, FL 33908, United States of America",
    latitude: "26.48944523",
    longitude: "-81.89141876",
  },
  {
    id: 425,
    address:
      "11076 58th Street Circle East, Manatee County, FL 34219, United States of America",
    latitude: "27.57126509",
    longitude: "-82.44889419",
  },
  {
    id: 426,
    address:
      "11774 Hampstead Street, Windermere, FL 34786, United States of America",
    latitude: "28.46233935",
    longitude: "-81.55735868",
  },
  {
    id: 427,
    address:
      "3158 Hidden Meadows Court, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.03595467",
    longitude: "-81.78191582",
  },
  {
    id: 428,
    address:
      "105 Telford Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.0898585",
    longitude: "-81.541611",
  },
  {
    id: 429,
    address:
      "10705 Southern Forest Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84583867",
    longitude: "-82.33244133",
  },
  {
    id: 430,
    address:
      "2410 Dovesong Trace Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72623045",
    longitude: "-82.40163081",
  },
  {
    id: 431,
    address: "3628 Hollisten Circle, Viera, FL 32940, United States of America",
    latitude: "28.25003107",
    longitude: "-80.75364042",
  },
  {
    id: 432,
    address:
      "7266 Somerset Pond Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.74479865",
    longitude: "-82.3700914",
  },
  {
    id: 433,
    address:
      "10364 Canal Brook Lane, Lehigh Acres, FL 33936, United States of America",
    latitude: "26.58507488",
    longitude: "-81.63957827",
  },
  {
    id: 434,
    address:
      "11616 Mansfield Point Drive, Riverview, FL 33569, United States of America",
    latitude: "27.82989",
    longitude: "-82.327214",
  },
  {
    id: 435,
    address:
      "145 Star Shell Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.73834195",
    longitude: "-82.4172421",
  },
  {
    id: 436,
    address: "4255 Adelaar Drive, Tatum, FL 34240, United States of America",
    latitude: "27.32284398",
    longitude: "-82.42163134",
  },
  {
    id: 437,
    address:
      "3965 Harvest Circle, Rockledge, FL 32955, United States of America",
    latitude: "28.29385979",
    longitude: "-80.71767012",
  },
  {
    id: 438,
    address:
      "100 Pond Run Lane, Jacksonville, FL 32218, United States of America",
    latitude: "30.538142",
    longitude: "-81.617809",
  },
  {
    id: 439,
    address:
      "10415 Flagstaff Falls Avenue, Riverview, FL 33578, United States of America",
    latitude: "27.85239275",
    longitude: "-82.33386277",
  },
  {
    id: 440,
    address:
      "1252 Autumn Pines Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14833803",
    longitude: "-81.85386727",
  },
  {
    id: 441,
    address:
      "302 Dakota Hill Drive, Seffner, FL 33584, United States of America",
    latitude: "27.98731655",
    longitude: "-82.28022442",
  },
  {
    id: 442,
    address:
      "1282 Wetland Ridge Circle, Middleburg, FL 32068, United States of America",
    latitude: "30.12639505",
    longitude: "-81.84394767",
  },
  {
    id: 443,
    address: "3007 Cortona Drive, Viera, FL 32940, United States of America",
    latitude: "28.25123085",
    longitude: "-80.74302586",
  },
  {
    id: 444,
    address:
      "804 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04578055",
    longitude: "-80.68850449",
  },
  {
    id: 445,
    address:
      "11434 Brighton Knoll Loop, Riverview, FL 33579, United States of America",
    latitude: "27.78174435",
    longitude: "-82.30854199",
  },
  {
    id: 446,
    address:
      "1226 Gatewood Avenue, Minneola, FL 34715, United States of America",
    latitude: "28.585527",
    longitude: "-81.73108",
  },
  {
    id: 447,
    address:
      "3817 Tuckerton Drive, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.2099777",
    longitude: "-82.5105798",
  },
  {
    id: 448,
    address:
      "59 Stirlingshire Court, Saint Johns County, FL 32259, United States of America",
    latitude: "30.0731812",
    longitude: "-81.5458686",
  },
  {
    id: 449,
    address:
      "6263 Manitoba Drive, Lakeland, FL 33805, United States of America",
    latitude: "28.12577698",
    longitude: "-81.92135931",
  },
  {
    id: 450,
    address:
      "278 Mission Trace Drive, St. Augustine, FL 32084, United States of America",
    latitude: "29.91226453",
    longitude: "-81.36469617",
  },
  {
    id: 451,
    address:
      "13025 Sawgrass Pine Circle, Meadow Woods, FL 32824, United States of America",
    latitude: "28.37958305",
    longitude: "-81.35826733",
  },
  {
    id: 452,
    address:
      "14679 Glade Hill Park Way, Winter Garden, FL 34787, United States of America",
    latitude: "28.43338851",
    longitude: "-81.6209612",
  },
  {
    id: 453,
    address:
      "18333 Briar Oaks Drive, Hudson, FL 34667, United States of America",
    latitude: "28.424166",
    longitude: "-82.648305",
  },
  {
    id: 454,
    address:
      "3501 Joslin Way, West Melbourne, FL 32904, United States of America",
    latitude: "28.049343",
    longitude: "-80.650357",
  },
  {
    id: 455,
    address:
      "4290 Harvest Circle, Rockledge, FL 32955, United States of America",
    latitude: "28.29448537",
    longitude: "-80.71626832",
  },
  {
    id: 456,
    address: "21 Whistler Trace, Nocatee, FL 32081, United States of America",
    latitude: "30.09625557",
    longitude: "-81.46434483",
  },
  {
    id: 457,
    address:
      "5708 Dornich Drive, Auburndale, FL 33823, United States of America",
    latitude: "28.14775072",
    longitude: "-81.8196583",
  },
  {
    id: 458,
    address:
      "690 Fiddleleaf Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04942526",
    longitude: "-80.68993793",
  },
  {
    id: 459,
    address:
      "11502 Mansfield Point Drive, Riverview, FL 33569, United States of America",
    latitude: "27.830866",
    longitude: "-82.32513",
  },
  {
    id: 460,
    address:
      "2451 Gratia Place, Casselberry, FL 32707, United States of America",
    latitude: "28.677985",
    longitude: "-81.295638",
  },
  {
    id: 461,
    address:
      "3067 Angora Bay Drive, Clay County, FL 32068, United States of America",
    latitude: "30.10272968",
    longitude: "-81.79254164",
  },
  {
    id: 462,
    address:
      "5336 Northwest Wisk Fern Circle, Port Saint Lucie, FL 34986, United States of America",
    latitude: "27.36249711",
    longitude: "-80.37946994",
  },
  {
    id: 463,
    address:
      "10351 Oxford Lakes Drive, Jacksonville, FL 32257, United States of America",
    latitude: "30.1893418",
    longitude: "-81.59756994",
  },
  {
    id: 464,
    address:
      "10904 Whitecap Drive, Riverview, FL 33579, United States of America",
    latitude: "27.79159782",
    longitude: "-82.32535744",
  },
  {
    id: 465,
    address:
      "11423 Lake Lucaya Drive, Riverview, FL 33579, United States of America",
    latitude: "27.82012309",
    longitude: "-82.31447908",
  },
  {
    id: 466,
    address:
      "45 Stirlingshire Court, Saint Johns County, FL 32259, United States of America",
    latitude: "30.07312334",
    longitude: "-81.54595221",
  },
  {
    id: 467,
    address:
      "15859 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50108365",
    longitude: "-82.38073712",
  },
  {
    id: 468,
    address:
      "2445 Dakota Rock Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.6894542",
    longitude: "-82.42676905",
  },
  {
    id: 469,
    address:
      "4077 Watervale Way, Orange Park, FL 32065, United States of America",
    latitude: "30.18269073",
    longitude: "-81.85349444",
  },
  {
    id: 470,
    address: "24428 SW 11th Road, Newberry, FL 32669, United States of America",
    latitude: "29.640642",
    longitude: "-82.600661",
  },
  {
    id: 471,
    address:
      "39 Long Point Way, St. Augustine, FL 32092, United States of America",
    latitude: "30.03401753",
    longitude: "-81.51847769",
  },
  {
    id: 472,
    address:
      "8649 Turnstone Shore Lane, Riverview, FL 33578, United States of America",
    latitude: "27.887036",
    longitude: "-82.351828",
  },
  {
    id: 473,
    address:
      "8710 Hinsdale Heights Drive, Polk City, FL 33868, United States of America",
    latitude: "28.159389",
    longitude: "-81.855679",
  },
  {
    id: 474,
    address:
      "378 Allapattah Avenue, St. Augustine, FL 32092, United States of America",
    latitude: "29.95467085",
    longitude: "-81.52786477",
  },
  {
    id: 475,
    address: "West Melbourne, FL, United States of America",
    latitude: "28.067394",
    longitude: "-80.65835",
  },
  {
    id: 476,
    address: "218 Brookline Trail, Nocatee, FL 32081, United States of America",
    latitude: "30.09712552",
    longitude: "-81.46343387",
  },
  {
    id: 477,
    address:
      "283 Pine Arbor Circle, Woodlawn, FL 32084, United States of America",
    latitude: "29.93029868",
    longitude: "-81.34871619",
  },
  {
    id: 478,
    address:
      "65 Benvolio Way, St. Augustine, FL 32092, United States of America",
    latitude: "29.96117436",
    longitude: "-81.48755689",
  },
  {
    id: 479,
    address:
      "483 Pine Eagle Drive, Fleming Island, FL 32003, United States of America",
    latitude: "30.10446",
    longitude: "-81.703172",
  },
  {
    id: 480,
    address:
      "6255 Manitoba Drive, Lakeland, FL 33805, United States of America",
    latitude: "28.12563928",
    longitude: "-81.92136345",
  },
  {
    id: 481,
    address:
      "6916 Makers Way, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77429796",
    longitude: "-82.38182917",
  },
  {
    id: 482,
    address:
      "7022 Dowling Mill Circle, Citrus Park, FL 33625, United States of America",
    latitude: "28.0840707",
    longitude: "-82.56454301",
  },
  {
    id: 483,
    address:
      "16196 Kayla Cove Court, Jacksonville, FL 32218, United States of America",
    latitude: "30.53361461",
    longitude: "-81.61704304",
  },
  {
    id: 484,
    address: "37 Whistler Trace, Nocatee, FL 32081, United States of America",
    latitude: "30.09616002",
    longitude: "-81.46443429",
  },
  {
    id: 485,
    address:
      "10416 Waterstone Drive, Riverview, FL 33578, United States of America",
    latitude: "27.8529807",
    longitude: "-82.33248679",
  },
  {
    id: 486,
    address:
      "14551 Northwest 27th Avenue, Newberry, FL 32669, United States of America",
    latitude: "29.67808948",
    longitude: "-82.4976059",
  },
  {
    id: 487,
    address:
      "307 Tumbled Stone Way, St. Augustine, FL 32086, United States of America",
    latitude: "29.83473636",
    longitude: "-81.36822432",
  },
  {
    id: 488,
    address:
      "8011 111th Terrace East, Manatee County, FL 34219, United States of America",
    latitude: "27.58641607",
    longitude: "-82.45159578",
  },
  {
    id: 489,
    address:
      "13904 Windy Knoll Drive, Riverview, FL 33579, United States of America",
    latitude: "27.77811393",
    longitude: "-82.30329747",
  },
  {
    id: 490,
    address:
      "2030 Banner Lane, Saint Cloud, FL 34769, United States of America",
    latitude: "28.23999534",
    longitude: "-81.32023936",
  },
  {
    id: 491,
    address: "606 Gordonia Court, DeLand, FL 32724, United States of America",
    latitude: "29.0182003",
    longitude: "-81.2916219",
  },
  {
    id: 492,
    address:
      "8607 Bayview Crossing Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.427777",
    longitude: "-81.637261",
  },
  {
    id: 493,
    address:
      "6207 Schoolhouse Pond Road, Horizon West, FL 34787, United States of America",
    latitude: "28.4744992",
    longitude: "-81.6156438",
  },
  {
    id: 494,
    address:
      "1206 Autumn Pines Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14976097",
    longitude: "-81.85370368",
  },
  {
    id: 495,
    address: "1814 Oak Pond Street, Ruskin, FL 33570, United States of America",
    latitude: "27.73341515",
    longitude: "-82.3973926",
  },
  {
    id: 496,
    address:
      "36 Long Point Way, Saint Johns County, FL 32092, United States of America",
    latitude: "30.0340146",
    longitude: "-81.5186985",
  },
  {
    id: 497,
    address:
      "3746 Island Green Way, Meadow Woods, FL 32824, United States of America",
    latitude: "28.389136",
    longitude: "-81.346228",
  },
  {
    id: 498,
    address:
      "1375 Coopers Hawk Way, Clay County, FL 32068, United States of America",
    latitude: "30.1370498",
    longitude: "-81.85818585",
  },
  {
    id: 499,
    address:
      "1479 Diamond Loop Drive, Kissimmee, FL 34744, United States of America",
    latitude: "28.2671364",
    longitude: "-81.36397833",
  },
  {
    id: 500,
    address:
      "5781 Inkberry Circle, Sarasota, FL 34238, United States of America",
    latitude: "27.25591602",
    longitude: "-82.44999098",
  },
  {
    id: 501,
    address:
      "664 Drysdale Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.18643204",
    longitude: "-81.85153447",
  },
  {
    id: 502,
    address:
      "1193 Cypress Pointe Boulevard, Loughman, FL 33896, United States of America",
    latitude: "28.24889794",
    longitude: "-81.57207843",
  },
  {
    id: 503,
    address:
      "12016 Legacy Bright Street, Riverview, FL 33578, United States of America",
    latitude: "27.82426159",
    longitude: "-82.33550655",
  },
  {
    id: 504,
    address:
      "19661 Long Lake Ranch Boulevard, Lutz, FL 33558, United States of America",
    latitude: "28.18869334",
    longitude: "-82.49897643",
  },
  {
    id: 505,
    address: "260 Chandler Circle, Oviedo, FL 32765, United States of America",
    latitude: "28.68867473",
    longitude: "-81.21358546",
  },
  {
    id: 506,
    address:
      "3621 Annapolis Way, Jacksonville, FL 32224, United States of America",
    latitude: "30.2815882",
    longitude: "-81.4439795",
  },
  {
    id: 507,
    address:
      "4156 Little Gap Loop, Bradenton, FL 34222, United States of America",
    latitude: "27.55060186",
    longitude: "-82.50526427",
  },
  {
    id: 508,
    address:
      "5355 Brilliance Circle, Cocoa, FL 32926, United States of America",
    latitude: "28.37417901",
    longitude: "-80.81084466",
  },
  {
    id: 509,
    address: "High Springs, FL 32655, United States of America",
    latitude: "29.8196705",
    longitude: "-82.59870983",
  },
  {
    id: 510,
    address:
      "13082 Christine Marie Court, Jacksonville, FL 32225, United States of America",
    latitude: "30.35519359",
    longitude: "-81.46297854",
  },
  {
    id: 511,
    address:
      "416 Gianna Way, Saint Johns County, FL 32086, United States of America",
    latitude: "29.817695",
    longitude: "-81.342733",
  },
  {
    id: 512,
    address:
      "22 White Bay Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.03174247",
    longitude: "-81.5018046",
  },
  {
    id: 513,
    address:
      "12411 Ballentrae Forest Drive, Riverview, FL 33579, United States of America",
    latitude: "27.81660327",
    longitude: "-82.29920927",
  },
  {
    id: 514,
    address:
      "18505 Aylesbury Lane, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.20933782",
    longitude: "-82.5107196",
  },
  {
    id: 515,
    address:
      "3089 Angora Bay Drive, Middleburg, FL 32068, United States of America",
    latitude: "30.10243523",
    longitude: "-81.79289324",
  },
  {
    id: 516,
    address:
      "9213 European Olive Way, Riverview, FL 33578, United States of America",
    latitude: "27.892037",
    longitude: "-82.350897",
  },
  {
    id: 517,
    address:
      "17076 Wrigley Circle, Fort Myers, FL 33908, United States of America",
    latitude: "26.49197498",
    longitude: "-81.89008863",
  },
  {
    id: 518,
    address:
      "108 Traveler Palm Court, Palm Valley, FL 32082, United States of America",
    latitude: "30.18101477",
    longitude: "-81.38832992",
  },
  {
    id: 519,
    address:
      "17124 Wrigley Circle, Fort Myers, FL 33908, United States of America",
    latitude: "26.49219138",
    longitude: "-81.88891376",
  },
  {
    id: 520,
    address:
      "19405 Mossy Ledge Terrace, Lehigh Acres, FL 33936, United States of America",
    latitude: "26.5862695",
    longitude: "-81.6405567",
  },
  {
    id: 521,
    address:
      "3654 Maidencain Street, Clermont, FL 34714, United States of America",
    latitude: "28.4013855",
    longitude: "-81.6842761",
  },
  {
    id: 522,
    address:
      "102 Forest Edge Drive, Saint Johns County, FL 32259, United States of America",
    latitude: "30.08477814",
    longitude: "-81.53930412",
  },
  {
    id: 523,
    address:
      "12401 Whitmore Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1483685",
    longitude: "-81.5685505",
  },
  {
    id: 524,
    address:
      "1270 Wetland Ridge Circle, Middleburg, FL 32068, United States of America",
    latitude: "30.12640248",
    longitude: "-81.84373369",
  },
  {
    id: 525,
    address: "3505 Ayrshire Circle, Viera, FL 32940, United States of America",
    latitude: "28.25190549",
    longitude: "-80.75003822",
  },
  {
    id: 526,
    address:
      "601 19th Street Northwest, Ruskin, FL 33570, United States of America",
    latitude: "27.72388",
    longitude: "-82.459487",
  },
  {
    id: 527,
    address:
      "7706 Southwest 88th Street, Gainesville, FL 32608, United States of America",
    latitude: "29.58272242",
    longitude: "-82.43662073",
  },
  {
    id: 528,
    address: "2007 Wavyleaf Court, Apopka, FL 32712, United States of America",
    latitude: "28.7139733",
    longitude: "-81.5537795",
  },
  {
    id: 529,
    address:
      "6303 Magnolia Park Boulevard, Riverview, FL 33578, United States of America",
    latitude: "27.888646",
    longitude: "-82.350157",
  },
  {
    id: 530,
    address:
      "9567 Abby Glen Circle, Jacksonville, FL 32257, United States of America",
    latitude: "30.2048163",
    longitude: "-81.5912788",
  },
  {
    id: 531,
    address:
      "1615 Balsam Willow Trail, Orlando, FL 32825, United States of America",
    latitude: "28.52595103",
    longitude: "-81.21709735",
  },
  {
    id: 532,
    address: "3239 Ogden Drive, Mulberry, FL 33860, United States of America",
    latitude: "27.93268509",
    longitude: "-81.99976293",
  },
  {
    id: 533,
    address:
      "12109 Fawn Brindle Street, Riverview, FL 33578, United States of America",
    latitude: "27.82276841",
    longitude: "-82.33268006",
  },
  {
    id: 534,
    address:
      "1303 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04378691",
    longitude: "-80.69132843",
  },
  {
    id: 535,
    address:
      "1880 Prima Vista Drive, Lakeland, FL 33810, United States of America",
    latitude: "28.0966279",
    longitude: "-81.99315282",
  },
  {
    id: 536,
    address:
      "241 Palazzo Circle, St. Augustine, FL 32092, United States of America",
    latitude: "29.95155474",
    longitude: "-81.49153355",
  },
  {
    id: 537,
    address:
      "656 Drysdale Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.18618365",
    longitude: "-81.85149535",
  },
  {
    id: 538,
    address:
      "7310 Milestone Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.7764149",
    longitude: "-82.37346258",
  },
  {
    id: 539,
    address:
      "20204 Natures Spirit Drive, Tampa, FL 33647, United States of America",
    latitude: "28.157226",
    longitude: "-82.278671",
  },
  {
    id: 540,
    address:
      "10438 Waterstone Drive, Riverview, FL 33578, United States of America",
    latitude: "27.8529324",
    longitude: "-82.33073813",
  },
  {
    id: 541,
    address:
      "11428 Icarus Circle, Fort Myers, FL 33971, United States of America",
    latitude: "26.62497753",
    longitude: "-81.76153843",
  },
  {
    id: 542,
    address:
      "12441 Field Point Way, Spring Hill, FL 34610, United States of America",
    latitude: "28.33892247",
    longitude: "-82.55814611",
  },
  {
    id: 543,
    address: "449 Kestrel Drive, Groveland, FL 34736, United States of America",
    latitude: "28.58481057",
    longitude: "-81.8092317",
  },
  {
    id: 544,
    address:
      "5784 Lakeside Landings Boulevard, Winter Haven, FL 33881, United States of America",
    latitude: "28.06068402",
    longitude: "-81.67940395",
  },
  {
    id: 545,
    address:
      "8238 Bayview Crossing Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.434072",
    longitude: "-81.638573",
  },
  {
    id: 546,
    address:
      "88 Stately Shoals Trail, Nocatee, FL 32081, United States of America",
    latitude: "30.096216",
    longitude: "-81.42413893",
  },
  {
    id: 547,
    address: "600 Gordonia Court, DeLand, FL 32724, United States of America",
    latitude: "29.0187981",
    longitude: "-81.2918072",
  },
  {
    id: 548,
    address:
      "10108 Ives Loop, Pasco County, FL 34667, United States of America",
    latitude: "28.42113185",
    longitude: "-82.64795054",
  },
  {
    id: 549,
    address:
      "16719 Scenic Hill Way, Wimauma, FL 33598, United States of America",
    latitude: "27.7064929",
    longitude: "-82.3354336",
  },
  {
    id: 550,
    address:
      "2314 Gratia Place, Casselberry, FL 32707, United States of America",
    latitude: "28.676369",
    longitude: "-81.297572",
  },
  {
    id: 551,
    address:
      "2474 Club Lake Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.15152472",
    longitude: "-81.85598976",
  },
  {
    id: 552,
    address: "70 Auberry Drive, Palm Coast, FL 32137, United States of America",
    latitude: "29.49839198",
    longitude: "-81.18133554",
  },
  {
    id: 553,
    address: "85 Carlson Court, Nocatee, FL 32081, United States of America",
    latitude: "30.09829591",
    longitude: "-81.46230179",
  },
  {
    id: 554,
    address:
      "11545 Southern Creek Drive, Gibsonton, FL 33534, United States of America",
    latitude: "27.83182678",
    longitude: "-82.37320346",
  },
  {
    id: 555,
    address:
      "11809 Harpswell Drive, Riverview, FL 33579, United States of America",
    latitude: "27.80977025",
    longitude: "-82.29625365",
  },
  {
    id: 556,
    address: "239 Domus Lane, Casselberry, FL 32707, United States of America",
    latitude: "28.677224",
    longitude: "-81.296675",
  },
  {
    id: 557,
    address:
      "32 Benvolio Way, St. Augustine, FL 32092, United States of America",
    latitude: "29.96107299",
    longitude: "-81.48681401",
  },
  {
    id: 558,
    address: "3907 Hollisten Circle, Viera, FL 32940, United States of America",
    latitude: "28.24832098",
    longitude: "-80.75160585",
  },
  {
    id: 559,
    address:
      "4926 Grassendale Terrace, Sanford, FL 32771, United States of America",
    latitude: "28.818473",
    longitude: "-81.338875",
  },
  {
    id: 560,
    address:
      "519 Heathercreek Court, Oviedo, FL 32765, United States of America",
    latitude: "28.68765909",
    longitude: "-81.21606137",
  },
  {
    id: 561,
    address:
      "11616 Shelby Jay Drive, Riverview, FL 33579, United States of America",
    latitude: "27.78020246",
    longitude: "-82.30483615",
  },
  {
    id: 562,
    address:
      "12255 Angleterre Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1498151",
    longitude: "-81.5352268",
  },
  {
    id: 563,
    address:
      "14168 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1277162",
    longitude: "-81.5056126",
  },
  {
    id: 564,
    address:
      "15405 Fire Rock Place, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.74616385",
    longitude: "-82.36270675",
  },
  {
    id: 565,
    address:
      "15426 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50186857",
    longitude: "-82.38558013",
  },
  {
    id: 566,
    address:
      "333 Grande Vista Boulevard, Bradenton, FL 34212, United States of America",
    latitude: "27.502584",
    longitude: "-82.387246",
  },
  {
    id: 567,
    address:
      "6958 Azalea Grove Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1127144",
    longitude: "-81.5221771",
  },
  {
    id: 568,
    address:
      "8825 Eden Cove Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.42493688",
    longitude: "-81.6368269",
  },
  {
    id: 569,
    address:
      "10703 Aldo Moro Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.767396",
    longitude: "-82.326775",
  },
  {
    id: 570,
    address:
      "14438 Serenoa Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1164786",
    longitude: "-81.5245842",
  },
  {
    id: 571,
    address:
      "1946 Pantheon Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.5058034",
    longitude: "-81.6239516",
  },
  {
    id: 572,
    address:
      "2435 Dovesong Trace Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72717728",
    longitude: "-82.40056586",
  },
  {
    id: 573,
    address:
      "347 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.074743",
    longitude: "-81.525064",
  },
  {
    id: 574,
    address:
      "6910 Makers Way, Apollo Beach, FL 33572, United States of America",
    latitude: "27.774631",
    longitude: "-82.381633",
  },
  {
    id: 575,
    address:
      "12110 Rambling Stream Drive, Riverview, FL 33569, United States of America",
    latitude: "27.8226069",
    longitude: "-82.31903895",
  },
  {
    id: 576,
    address:
      "2043 Red Bluff Avenue, Apopka, FL 32712, United States of America",
    latitude: "28.7174731",
    longitude: "-81.539351",
  },
  {
    id: 577,
    address:
      "347 Tumbled Stone Way, St. Augustine, FL 32086, United States of America",
    latitude: "29.83539931",
    longitude: "-81.36823958",
  },
  {
    id: 578,
    address:
      "36039 Carriage Pine Court, Zephyrhills, FL 33541, United States of America",
    latitude: "28.25086279",
    longitude: "-82.22047173",
  },
  {
    id: 579,
    address:
      "4219 Moon Shadow Loop, Mulberry, FL 33860, United States of America",
    latitude: "27.93689095",
    longitude: "-81.99646791",
  },
  {
    id: 580,
    address:
      "77 Molasses Court, Fruit Cove, FL 32259, United States of America",
    latitude: "30.05816397",
    longitude: "-81.62408967",
  },
  {
    id: 581,
    address:
      "11414 Estuary Preserve Drive, Riverview, FL 33569, United States of America",
    latitude: "27.82927955",
    longitude: "-82.31068182",
  },
  {
    id: 582,
    address:
      "1427 Attilburgh Boulevard, West Melbourne, FL 32904, United States of America",
    latitude: "28.04753035",
    longitude: "-80.64796004",
  },
  {
    id: 583,
    address:
      "14425 Alistar Manor Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.7658898",
    longitude: "-82.32156318",
  },
  {
    id: 584,
    address:
      "3664 Briar Run Drive, Clermont, FL 34711, United States of America",
    latitude: "28.513824",
    longitude: "-81.7415633",
  },
  {
    id: 585,
    address:
      "4215 Sandhill Crane Terrace, Middleburg, FL 32068, United States of America",
    latitude: "30.139713",
    longitude: "-81.854292",
  },
  {
    id: 586,
    address: "5689 Elsinore Way, Lakeland, FL 33805, United States of America",
    latitude: "28.12251813",
    longitude: "-81.91867287",
  },
  {
    id: 587,
    address:
      "6520 Salt Creek Avenue, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77416843",
    longitude: "-82.38231439",
  },
  {
    id: 588,
    address:
      "15929 Saint Clair Street, Clermont, FL 34714, United States of America",
    latitude: "28.4118092",
    longitude: "-81.6902544",
  },
  {
    id: 589,
    address:
      "1329 Gatewood Avenue, Minneola, FL 34715, United States of America",
    latitude: "28.58589009",
    longitude: "-81.72851186",
  },
  {
    id: 590,
    address:
      "7070 Crispin Cove Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1167717",
    longitude: "-81.5221605",
  },
  {
    id: 591,
    address:
      "10257 Magnolia Ridge Road, Jacksonville, FL 32210, United States of America",
    latitude: "30.25233469",
    longitude: "-81.83010386",
  },
  {
    id: 592,
    address:
      "13034 Christine Marie Court, Jacksonville, FL 32225, United States of America",
    latitude: "30.3552588",
    longitude: "-81.46230915",
  },
  {
    id: 593,
    address:
      "14211 Edinburgh Moor Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.765017",
    longitude: "-82.326386",
  },
  {
    id: 594,
    address:
      "7010 Azalea Grove Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1134817",
    longitude: "-81.5213905",
  },
  {
    id: 595,
    address:
      "8437 Hunters Fork Loop, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.7440372",
    longitude: "-82.3609767",
  },
  {
    id: 596,
    address: "8759 Rindge Road, Polk City, FL 33868, United States of America",
    latitude: "28.161643",
    longitude: "-81.852435",
  },
  {
    id: 597,
    address:
      "14545 Northwest 25th Avenue, Newberry, FL 32669, United States of America",
    latitude: "29.676542",
    longitude: "-82.49852351",
  },
  {
    id: 598,
    address:
      "269 Myrtle Brook Bend, Nocatee, FL 32081, United States of America",
    latitude: "30.0978215",
    longitude: "-81.42419308",
  },
  {
    id: 599,
    address:
      "12229 Ballentrae Forest Drive, Riverview, FL 33579, United States of America",
    latitude: "27.819608",
    longitude: "-82.300682",
  },
  {
    id: 600,
    address:
      "15175 Russell Bridge Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.1045863",
    longitude: "-81.5353467",
  },
  {
    id: 601,
    address:
      "1746 Litchfield Drive, West Melbourne, FL 32904, United States of America",
    latitude: "28.04511456",
    longitude: "-80.65058641",
  },
  {
    id: 602,
    address: "46 Auberry Drive, Palm Coast, FL 32137, United States of America",
    latitude: "29.49937672",
    longitude: "-81.18140183",
  },
  {
    id: 603,
    address:
      "7791 Bucks Run, Collier County, FL 34120, United States of America",
    latitude: "26.24700991",
    longitude: "-81.68277514",
  },
  {
    id: 604,
    address:
      "12434 Acosta Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1474073",
    longitude: "-81.5674209",
  },
  {
    id: 605,
    address:
      "12664 Sawgrass Plantation Boulevard, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38271276",
    longitude: "-81.35520619",
  },
  {
    id: 606,
    address:
      "12380 Whitmore Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.14881",
    longitude: "-81.5683283",
  },
  {
    id: 607,
    address:
      "12506 Acosta Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.149331",
    longitude: "-81.5665678",
  },
  {
    id: 608,
    address:
      "14144 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.127043",
    longitude: "-81.5055959",
  },
  {
    id: 609,
    address:
      "2293 Via Bella Boulevard, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.18985792",
    longitude: "-82.42193645",
  },
  {
    id: 610,
    address:
      "2565 Northwest 144th Way, Newberry, FL 32669, United States of America",
    latitude: "29.67709848",
    longitude: "-82.49724142",
  },
  {
    id: 611,
    address:
      "3010 Louetta Circle, Melbourne, FL 32901, United States of America",
    latitude: "28.06393435",
    longitude: "-80.63629724",
  },
  {
    id: 612,
    address:
      "5913 Jasper Glen Drive, Riverview, FL 33547, United States of America",
    latitude: "27.846236",
    longitude: "-82.251554",
  },
  {
    id: 613,
    address: "69 Carlson Court, Nocatee, FL 32081, United States of America",
    latitude: "30.09822755",
    longitude: "-81.46222049",
  },
  {
    id: 614,
    address:
      "8107 Orange Spring Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.744959",
    longitude: "-82.36361448",
  },
  {
    id: 615,
    address:
      "867 Quiet Stone Lane, Orange Park, FL 32065, United States of America",
    latitude: "30.15902671",
    longitude: "-81.8452416",
  },
  {
    id: 616,
    address:
      "107 Peter Island Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.035366",
    longitude: "-81.520073",
  },
  {
    id: 617,
    address:
      "12119 Echo Basin Cove, Riverview, FL 33579, United States of America",
    latitude: "27.79695354",
    longitude: "-82.28153397",
  },
  {
    id: 618,
    address:
      "12500 Acosta Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1491485",
    longitude: "-81.5665415",
  },
  {
    id: 619,
    address:
      "12728 Sawgrass Plantation Boulevard, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38083793",
    longitude: "-81.3552293",
  },
  {
    id: 620,
    address:
      "23931 Campania Pass, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.19220108",
    longitude: "-82.42048016",
  },
  {
    id: 621,
    address:
      "250 Oleander Street, Winter Haven, FL 33881, United States of America",
    latitude: "28.07790731",
    longitude: "-81.69939792",
  },
  {
    id: 622,
    address: "7500 Aguila Drive, Tatum, FL 34240, United States of America",
    latitude: "27.32191257",
    longitude: "-82.42288875",
  },
  {
    id: 623,
    address:
      "93 Peter Island Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.035551",
    longitude: "-81.520004",
  },
  {
    id: 624,
    address:
      "105 San Mardeen Court, Holly Hill, FL 32117, United States of America",
    latitude: "29.242789",
    longitude: "-81.077335",
  },
  {
    id: 625,
    address:
      "11212 58th Street Circle East, Manatee County, FL 34219, United States of America",
    latitude: "27.568547",
    longitude: "-82.449804",
  },
  {
    id: 626,
    address:
      "11518 Mansfield Point Drive, Riverview, FL 33569, United States of America",
    latitude: "27.8308",
    longitude: "-82.326403",
  },
  {
    id: 627,
    address:
      "2332 Blue Meadows Court, Apopka, FL 32703, United States of America",
    latitude: "28.6725305",
    longitude: "-81.5477925",
  },
  {
    id: 628,
    address:
      "416 Seattle Slew Drive, Davenport, FL 33837, United States of America",
    latitude: "28.25174467",
    longitude: "-81.62084844",
  },
  {
    id: 629,
    address:
      "5622 74th Place East, Bradenton, FL 34222, United States of America",
    latitude: "27.5636475",
    longitude: "-82.48951201",
  },
  {
    id: 630,
    address: "62 Auberry Drive, Palm Coast, FL 32137, United States of America",
    latitude: "29.49857613",
    longitude: "-81.18083904",
  },
  {
    id: 631,
    address:
      "8244 Bayview Crossing Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.433966",
    longitude: "-81.638558",
  },
  {
    id: 632,
    address:
      "864 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.0453497",
    longitude: "-80.68884751",
  },
  {
    id: 633,
    address:
      "949 Northwest 250th Drive, Newberry, FL 32669, United States of America",
    latitude: "29.65909057",
    longitude: "-82.60754223",
  },
  {
    id: 634,
    address:
      "10405 Riverdale Rise Drive, Riverview, FL 33578, United States of America",
    latitude: "27.82346103",
    longitude: "-82.33707605",
  },
  {
    id: 635,
    address:
      "12239 Prairie Plantation Way, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38845195",
    longitude: "-81.34682311",
  },
  {
    id: 636,
    address:
      "131 Magnolia Beach Trail, Nocatee, FL 32081, United States of America",
    latitude: "30.0948235",
    longitude: "-81.42175299",
  },
  {
    id: 637,
    address:
      "2325 Via Bella Boulevard, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.19001372",
    longitude: "-82.42174009",
  },
  {
    id: 638,
    address:
      "32880 Windelstraw Drive, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26848973",
    longitude: "-82.27377817",
  },
  {
    id: 639,
    address:
      "4024 Blazewater Court, Eustis, FL 32736, United States of America",
    latitude: "28.84912571",
    longitude: "-81.63649516",
  },
  {
    id: 640,
    address:
      "4820 Windbourne Way, Saint Cloud, FL 34772, United States of America",
    latitude: "28.21446897",
    longitude: "-81.26892762",
  },
  {
    id: 641,
    address:
      "618 Washita Stone Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.6858439",
    longitude: "-82.42497143",
  },
  {
    id: 642,
    address:
      "14091 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1261991",
    longitude: "-81.5062297",
  },
  {
    id: 643,
    address:
      "1443 Lexington Square Southwest, Florida Ridge, FL 32962, United States of America",
    latitude: "27.59846085",
    longitude: "-80.4051476",
  },
  {
    id: 644,
    address:
      "15776 Marina Bay Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.43682262",
    longitude: "-81.64375347",
  },
  {
    id: 645,
    address:
      "374 Sanctuary Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.085376",
    longitude: "-81.538483",
  },
  {
    id: 646,
    address:
      "412 19th Street Northwest, Ruskin, FL 33570, United States of America",
    latitude: "27.72309448",
    longitude: "-82.45741934",
  },
  {
    id: 647,
    address:
      "5419 Northwest Wisk Fern Circle, Port Saint Lucie, FL 34986, United States of America",
    latitude: "27.36286809",
    longitude: "-80.38277447",
  },
  {
    id: 648,
    address:
      "8821 Hildreth Avenue, Orlando, FL 32832, United States of America",
    latitude: "28.43933362",
    longitude: "-81.2340995",
  },
  {
    id: 649,
    address:
      "8922 Southwest 73rd Lane, Alachua County, FL 32608, United States of America",
    latitude: "29.58640579",
    longitude: "-82.43799657",
  },
  {
    id: 650,
    address:
      "1160 Brenton Manor Drive, Winter Haven, FL 33884, United States of America",
    latitude: "28.070537",
    longitude: "-81.653981",
  },
  {
    id: 651,
    address:
      "22690 Cherokee Rose Place, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.23355955",
    longitude: "-82.44022497",
  },
  {
    id: 652,
    address:
      "3539 Rhapsody Street, Saint Cloud, FL 34772, United States of America",
    latitude: "28.18108798",
    longitude: "-81.29913077",
  },
  {
    id: 653,
    address:
      "4869 Grassendale Terrace, Sanford, FL 32771, United States of America",
    latitude: "28.81794445",
    longitude: "-81.33835203",
  },
  {
    id: 654,
    address:
      "4881 Southwest 53rd Road, Ocala, FL 34474, United States of America",
    latitude: "29.13235057",
    longitude: "-82.2007548",
  },
  {
    id: 655,
    address:
      "4936 Butler National Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.22869767",
    longitude: "-82.31922968",
  },
  {
    id: 656,
    address:
      "97066 Huntington Court, Yulee, FL 32097, United States of America",
    latitude: "30.682182",
    longitude: "-81.548714",
  },
  {
    id: 657,
    address:
      "201 Myrtle Brook Bend, Nocatee, FL 32081, United States of America",
    latitude: "30.0982465",
    longitude: "-81.42460802",
  },
  {
    id: 658,
    address:
      "12929 Payton Street, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.19682993",
    longitude: "-82.60261716",
  },
  {
    id: 659,
    address:
      "1535 Water Elm Court, Orlando, FL 32825, United States of America",
    latitude: "28.52726993",
    longitude: "-81.21856551",
  },
  {
    id: 660,
    address:
      "16112 Wind View Lane, Winter Garden, FL 34787, United States of America",
    latitude: "28.43730867",
    longitude: "-81.64014373",
  },
  {
    id: 661,
    address:
      "1736 Litchfield Drive, West Melbourne, FL 32904, United States of America",
    latitude: "28.04522415",
    longitude: "-80.65057844",
  },
  {
    id: 662,
    address:
      "1742 Belle Chase Drive, Apopka, FL 32712, United States of America",
    latitude: "28.7156307",
    longitude: "-81.5392633",
  },
  {
    id: 663,
    address:
      "2280 Bolzano Court, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.19003155",
    longitude: "-82.42053255",
  },
  {
    id: 664,
    address:
      "57 Trellis Bay Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.0325575",
    longitude: "-81.502435",
  },
  {
    id: 665,
    address:
      "5812 112th Avenue East, Manatee County, FL 34219, United States of America",
    latitude: "27.56904233",
    longitude: "-82.44863456",
  },
  {
    id: 666,
    address:
      "7921 Pleasant Pine Circle, Seminole County, FL 32792, United States of America",
    latitude: "28.61648822",
    longitude: "-81.27802925",
  },
  {
    id: 667,
    address:
      "9586 Abby Glen Circle, Jacksonville, FL 32257, United States of America",
    latitude: "30.2043486",
    longitude: "-81.5908904",
  },
  {
    id: 668,
    address:
      "1104 15th Street Northeast, Ruskin, FL 33570, United States of America",
    latitude: "27.7280685",
    longitude: "-82.414703",
  },
  {
    id: 669,
    address:
      "1212 Autumn Pines Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14957533",
    longitude: "-81.85374916",
  },
  {
    id: 670,
    address: "52 Auberry Drive, Palm Coast, FL 32137, United States of America",
    latitude: "29.49911022",
    longitude: "-81.18109175",
  },
  {
    id: 671,
    address:
      "857 Quiet Stone Lane, Orange Park, FL 32065, United States of America",
    latitude: "30.15904019",
    longitude: "-81.84495075",
  },
  {
    id: 672,
    address:
      "14012 Prater Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.2751539",
    longitude: "-81.4453639",
  },
  {
    id: 673,
    address:
      "14480 Northwest 25th Avenue, Alachua County, FL 32669, United States of America",
    latitude: "29.67669967",
    longitude: "-82.49808645",
  },
  {
    id: 674,
    address:
      "1251 Limpkin Lane, Clay County, FL 32068, United States of America",
    latitude: "30.13726941",
    longitude: "-81.86032672",
  },
  {
    id: 675,
    address:
      "13228 Waterford Castle Drive, Dade City, FL 33525, United States of America",
    latitude: "28.35120612",
    longitude: "-82.21777929",
  },
  {
    id: 676,
    address:
      "17012 Rush Pea Circle, Lakeway, TX 78738, United States of America",
    latitude: "30.28871024",
    longitude: "-98.03094725",
  },
  {
    id: 677,
    address:
      "3218 Palatka Street, Meadow Woods, FL 32824, United States of America",
    latitude: "28.35682236",
    longitude: "-81.32540918",
  },
  {
    id: 678,
    address:
      "4411 Scarlet Loop, Wesley Chapel, FL 33544, United States of America",
    latitude: "28.22079791",
    longitude: "-82.36399687",
  },
  {
    id: 679,
    address:
      "485 Tuscany Chase Drive, Daytona Beach, FL 32117, United States of America",
    latitude: "29.2423818",
    longitude: "-81.079249",
  },
  {
    id: 680,
    address:
      "554 Drysdale Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.18337586",
    longitude: "-81.85197026",
  },
  {
    id: 681,
    address: "Port Charlotte, FL, United States of America",
    latitude: "26.989518",
    longitude: "-82.112282",
  },
  {
    id: 682,
    address: "10621 Massimo Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.766615",
    longitude: "-82.327822",
  },
  {
    id: 683,
    address:
      "190 Stately Shoals Trail, Nocatee, FL 32081, United States of America",
    latitude: "30.0947165",
    longitude: "-81.42414079",
  },
  {
    id: 684,
    address: "515 Kestrel Drive, Groveland, FL 34736, United States of America",
    latitude: "28.587498",
    longitude: "-81.812118",
  },
  {
    id: 685,
    address:
      "553 Trymore Drive SE, Palm Bay, FL 32909, United States of America",
    latitude: "27.932794",
    longitude: "-80.656375",
  },
  {
    id: 686,
    address:
      "7747 Windchase Way, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26815556",
    longitude: "-82.27493406",
  },
  {
    id: 687,
    address:
      "9354 Aplomado Circle, Jacksonville, FL 32210, United States of America",
    latitude: "30.257481",
    longitude: "-81.810953",
  },
  {
    id: 688,
    address:
      "3307 San Moise Place, Plant City, FL 33567, United States of America",
    latitude: "27.9605904",
    longitude: "-82.1588089",
  },
  {
    id: 689,
    address:
      "5337 Cortland Drive, Davenport, FL 33837, United States of America",
    latitude: "28.21814251",
    longitude: "-81.55977973",
  },
  {
    id: 690,
    address:
      "100 Merkland Court, Saint Johns County, FL 32259, United States of America",
    latitude: "30.077242",
    longitude: "-81.556216",
  },
  {
    id: 691,
    address:
      "309 Bellview Place, Alderene Park, FL 32771, United States of America",
    latitude: "28.81607627",
    longitude: "-81.36034587",
  },
  {
    id: 692,
    address: "676 SW 244th Way, Newberry, FL 32669, United States of America",
    latitude: "29.642088",
    longitude: "-82.601746",
  },
  {
    id: 693,
    address:
      "7123 58th Terrace East, Bradenton, FL 34221, United States of America",
    latitude: "27.57744414",
    longitude: "-82.50454892",
  },
  {
    id: 694,
    address: "97265 Yorkshire Drive, Yulee, FL 32097, United States of America",
    latitude: "30.680929",
    longitude: "-81.548997",
  },
  {
    id: 695,
    address:
      "12213 Woodview Drive, Jacksonville, FL 32246, United States of America",
    latitude: "30.3165752",
    longitude: "-81.4955399",
  },
  {
    id: 696,
    address: "1605 Oak Pond Street, Ruskin, FL 33570, United States of America",
    latitude: "27.73188429",
    longitude: "-82.39799076",
  },
  {
    id: 697,
    address:
      "3426 San Moise Place, Plant City, FL 33567, United States of America",
    latitude: "27.9598336",
    longitude: "-82.1566047",
  },
  {
    id: 698,
    address:
      "4022 Winnsboro Cove, Orange Park, FL 32065, United States of America",
    latitude: "30.183044",
    longitude: "-81.856179",
  },
  {
    id: 699,
    address: "65 Willow Bay Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.0966255",
    longitude: "-81.421658",
  },
  {
    id: 700,
    address: "2164 Blackbird Drive, Apopka, FL 32703, United States of America",
    latitude: "28.6706554",
    longitude: "-81.5424283",
  },
  {
    id: 701,
    address: "6085 Fender Court, Orlando, FL 32837, United States of America",
    latitude: "28.35406705",
    longitude: "-81.45989345",
  },
  {
    id: 702,
    address:
      "11508 Luckygem Drive, Riverview, FL 33579, United States of America",
    latitude: "27.780078",
    longitude: "-82.308253",
  },
  {
    id: 703,
    address:
      "1188 Orchard Oriole Place, Middleburg, FL 32068, United States of America",
    latitude: "30.13857246",
    longitude: "-81.86452814",
  },
  {
    id: 704,
    address:
      "12325 Fairlawn Drive, Riverview, FL 33579, United States of America",
    latitude: "27.811648",
    longitude: "-82.305673",
  },
  {
    id: 705,
    address:
      "12404 Ballentrae Forest Drive, Riverview, FL 33579, United States of America",
    latitude: "27.81677686",
    longitude: "-82.29850283",
  },
  {
    id: 706,
    address:
      "13051 Christine Marie Court, Jacksonville, FL 32225, United States of America",
    latitude: "30.35507722",
    longitude: "-81.4624681",
  },
  {
    id: 707,
    address:
      "15766 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50282585",
    longitude: "-82.38125114",
  },
  {
    id: 708,
    address:
      "225 South Bellagio Drive, St. Augustine, FL 32092, United States of America",
    latitude: "29.95933222",
    longitude: "-81.48571035",
  },
  {
    id: 709,
    address:
      "46 Long Point Way, Saint Johns County, FL 32092, United States of America",
    latitude: "30.0339492",
    longitude: "-81.51872043",
  },
  {
    id: 710,
    address:
      "4740 Grace Farms Lane, Jacksonville, FL 32258, United States of America",
    latitude: "30.14739215",
    longitude: "-81.58453594",
  },
  {
    id: 711,
    address: "10142 Ives Loop, Hudson, FL 34667, United States of America",
    latitude: "28.4215122",
    longitude: "-82.64818738",
  },
  {
    id: 712,
    address:
      "3846 Crystal Dew Street, Plant City, FL 33567, United States of America",
    latitude: "27.96290105",
    longitude: "-82.1545748",
  },
  {
    id: 713,
    address:
      "1570 Corbett Lane, West Melbourne, FL 32904, United States of America",
    latitude: "28.04583158",
    longitude: "-80.64891808",
  },
  {
    id: 714,
    address:
      "10616 Whispering Hammock Drive, Riverview, FL 33578, United States of America",
    latitude: "27.82318043",
    longitude: "-82.33247417",
  },
  {
    id: 715,
    address:
      "16313 Magnolia Grove Way, Jacksonville, FL 32218, United States of America",
    latitude: "30.53837533",
    longitude: "-81.61427382",
  },
  {
    id: 716,
    address:
      "20017 Satin Leaf Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.16009245",
    longitude: "-82.32268567",
  },
  {
    id: 717,
    address:
      "299 Mission Trace Drive, St. Augustine, FL 32084, United States of America",
    latitude: "29.91236799",
    longitude: "-81.36486487",
  },
  {
    id: 718,
    address:
      "3071 Patterson Groves Drive, Haines City, FL 33844, United States of America",
    latitude: "28.14176944",
    longitude: "-81.61761945",
  },
  {
    id: 719,
    address:
      "4634 Camp Creek Lane, Orange Park, FL 32065, United States of America",
    latitude: "30.14493",
    longitude: "-81.860076",
  },
  {
    id: 720,
    address: "68 Carlson Court, Nocatee, FL 32081, United States of America",
    latitude: "30.09833988",
    longitude: "-81.46208176",
  },
  {
    id: 721,
    address:
      "819 Maple Leaf Loop, Winter Springs, FL 32708, United States of America",
    latitude: "28.70922034",
    longitude: "-81.32156739",
  },
  {
    id: 722,
    address:
      "8242 Nandina Drive, Sarasota County, FL 34240, United States of America",
    latitude: "27.31448526",
    longitude: "-82.40016363",
  },
  {
    id: 723,
    address:
      "8831 Eden Cove Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.42487047",
    longitude: "-81.63685205",
  },
  {
    id: 724,
    address:
      "5081 Harvest Drive, Haines City, FL 33844, United States of America",
    latitude: "28.14269003",
    longitude: "-81.62003024",
  },
  {
    id: 725,
    address:
      "10808 Whitecap Drive, Riverview, FL 33579, United States of America",
    latitude: "27.79035028",
    longitude: "-82.32559996",
  },
  {
    id: 726,
    address:
      "11335 Brighton Knoll Loop, Riverview, FL 33579, United States of America",
    latitude: "27.78083259",
    longitude: "-82.30588414",
  },
  {
    id: 727,
    address:
      "304 North Bellagio Drive, St. Augustine, FL 32092, United States of America",
    latitude: "29.96068935",
    longitude: "-81.48557789",
  },
  {
    id: 728,
    address:
      "3148 Irish Peach Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.50107947",
    longitude: "-81.61022476",
  },
  {
    id: 729,
    address:
      "32205 Cottage Glen Lane, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26295765",
    longitude: "-82.28420331",
  },
  {
    id: 730,
    address:
      "428 Westchester Hills Lane, Angel Run, FL 33594, United States of America",
    latitude: "27.944847",
    longitude: "-82.24328492",
  },
  {
    id: 731,
    address: "379 Hefferon Drive, Woodlawn, FL 32084, United States of America",
    latitude: "29.9233761",
    longitude: "-81.34911771",
  },
  {
    id: 732,
    address:
      "4810 Old Glory Way, Saint Cloud, FL 34769, United States of America",
    latitude: "28.24042853",
    longitude: "-81.32219553",
  },
  {
    id: 733,
    address:
      "15738 Tisons bluff road, Jacksonville, FL 32218, United States of America",
    latitude: "30.532612",
    longitude: "-81.61428",
  },
  {
    id: 734,
    address:
      "1216 Orchard Oriole Place, Middleburg, FL 32068, United States of America",
    latitude: "30.13727741",
    longitude: "-81.86449533",
  },
  {
    id: 735,
    address:
      "12406 Latchford Stream Place, Riverview, FL 33579, United States of America",
    latitude: "27.811092",
    longitude: "-82.314182",
  },
  {
    id: 736,
    address: "13506 Fallspark Way, Orlando, FL 32824, United States of America",
    latitude: "28.3693213",
    longitude: "-81.3269808",
  },
  {
    id: 737,
    address:
      "14024 Lonecreek Avenue, Orlando, FL 32828, United States of America",
    latitude: "28.56199132",
    longitude: "-81.180695",
  },
  {
    id: 738,
    address:
      "15407 Fire Rock Place, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.746046",
    longitude: "-82.36268981",
  },
  {
    id: 739,
    address:
      "15787 Bainebridge Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.5224974",
    longitude: "-81.64651805",
  },
  {
    id: 740,
    address:
      "165 Pond Run Lane, Jacksonville, FL 32218, United States of America",
    latitude: "30.53812358",
    longitude: "-81.61638797",
  },
  {
    id: 741,
    address:
      "12312 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18691868",
    longitude: "-82.61093117",
  },
  {
    id: 742,
    address:
      "15226 Agave Grove Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50366042",
    longitude: "-82.3873667",
  },
  {
    id: 743,
    address:
      "253 South Bellagio Drive, St. Augustine, FL 32092, United States of America",
    latitude: "29.95900595",
    longitude: "-81.48489096",
  },
  {
    id: 744,
    address:
      "6908 Makers Way, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77422399",
    longitude: "-82.38191879",
  },
  {
    id: 745,
    address:
      "359 Sanctuary Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.08568892",
    longitude: "-81.53852876",
  },
  {
    id: 746,
    address: "435 Gris Sky Lane, Bradenton, FL 34212, United States of America",
    latitude: "27.50483574",
    longitude: "-82.38596757",
  },
  {
    id: 747,
    address:
      "15181 Russell Bridge Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.1044604",
    longitude: "-81.5353495",
  },
  {
    id: 748,
    address:
      "16005 Willow Bluff Court, Jacksonville, FL 32218, United States of America",
    latitude: "30.52996288",
    longitude: "-81.61751697",
  },
  {
    id: 749,
    address:
      "1849 Oak Hammock Court, Pasco County, FL 33558, United States of America",
    latitude: "28.18370481",
    longitude: "-82.50359165",
  },
  {
    id: 750,
    address:
      "229 South Bellagio Drive, St. Augustine, FL 32092, United States of America",
    latitude: "29.95921498",
    longitude: "-81.48557002",
  },
  {
    id: 751,
    address:
      "3319 Ridgeview Drive, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.03574093",
    longitude: "-81.78269197",
  },
  {
    id: 752,
    address:
      "42 Traveler Palm Court, Palm Valley, FL 32082, United States of America",
    latitude: "30.18099933",
    longitude: "-81.3889449",
  },
  {
    id: 753,
    address:
      "5640 Southwest 50th Avenue, Ocala, FL 34474, United States of America",
    latitude: "29.1284904",
    longitude: "-82.20224496",
  },
  {
    id: 754,
    address:
      "9015 32nd Court East, Bradenton, FL 34219, United States of America",
    latitude: "27.54123408",
    longitude: "-82.46746228",
  },
  {
    id: 755,
    address:
      "10756 Navigation Drive, Riverview, FL 33579, United States of America",
    latitude: "27.81005288",
    longitude: "-82.33004363",
  },
  {
    id: 756,
    address:
      "14049 Prater Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.2758994",
    longitude: "-81.4446258",
  },
  {
    id: 757,
    address:
      "150 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07791752",
    longitude: "-81.52513791",
  },
  {
    id: 758,
    address:
      "4647 Camp Creek Lane, Orange Park, FL 32065, United States of America",
    latitude: "30.144722",
    longitude: "-81.860011",
  },
  {
    id: 759,
    address:
      "7362 Cumbria Boulevard East, Jacksonville, FL 32219, United States of America",
    latitude: "30.412731",
    longitude: "-81.772502",
  },
  {
    id: 760,
    address:
      "12933 SW David Drive, Arcadia, FL 34269, United States of America",
    latitude: "27.033073",
    longitude: "-82.035185",
  },
  {
    id: 761,
    address:
      "14042 Carson Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.2746299",
    longitude: "-81.4440803",
  },
  {
    id: 762,
    address:
      "14473 Northwest 27th Place, Alachua County, FL 32669, United States of America",
    latitude: "29.67875029",
    longitude: "-82.49760354",
  },
  {
    id: 763,
    address:
      "11614 Winterset Cove Drive, Riverview, FL 33579, United States of America",
    latitude: "27.814223",
    longitude: "-82.297004",
  },
  {
    id: 764,
    address:
      "12454 Field Point Way, Spring Hill, FL 34610, United States of America",
    latitude: "28.33909304",
    longitude: "-82.55804113",
  },
  {
    id: 765,
    address:
      "1444 Coopers Hawk Way, Middleburg, FL 32068, United States of America",
    latitude: "30.1361102",
    longitude: "-81.86175249",
  },
  {
    id: 766,
    address: "4220 Adelaar Drive, Tatum, FL 34240, United States of America",
    latitude: "27.32320694",
    longitude: "-82.42061997",
  },
  {
    id: 767,
    address:
      "7087 Crispin Cove Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.116255",
    longitude: "-81.5215922",
  },
  {
    id: 768,
    address:
      "77 Mediterra Avenue, Jacksonville, FL 32081, United States of America",
    latitude: "30.109578",
    longitude: "-81.424666",
  },
  {
    id: 769,
    address:
      "110 Taylor Ridge Avenue, Nocatee, FL 32081, United States of America",
    latitude: "30.09684705",
    longitude: "-81.46173308",
  },
  {
    id: 770,
    address:
      "12118 Suburban Sunrise Street, Riverview, FL 33578, United States of America",
    latitude: "27.82280321",
    longitude: "-82.33160067",
  },
  {
    id: 771,
    address:
      "13046 Christine Marie Court, Jacksonville, FL 32225, United States of America",
    latitude: "30.3552425",
    longitude: "-81.4624765",
  },
  {
    id: 772,
    address:
      "7333 Sugar Brook Place, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26387938",
    longitude: "-82.26963061",
  },
  {
    id: 773,
    address:
      "1133 Orchard Oriole Place, Clay County, FL 32068, United States of America",
    latitude: "30.140998",
    longitude: "-81.862715",
  },
  {
    id: 774,
    address:
      "11709 Thicket Wood Drive, Riverview, FL 33579, United States of America",
    latitude: "27.818623",
    longitude: "-82.301598",
  },
  {
    id: 775,
    address:
      "14327 Northwest 160th Lane, Alachua, FL 32615, United States of America",
    latitude: "29.80196621",
    longitude: "-82.49787364",
  },
  {
    id: 776,
    address:
      "18321 Aylesbury Lane, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.20801728",
    longitude: "-82.51281787",
  },
  {
    id: 777,
    address:
      "2209 Club Lake Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14547427",
    longitude: "-81.86290771",
  },
  {
    id: 778,
    address: "2218 Caspian Drive, Lakeland, FL 33805, United States of America",
    latitude: "28.12815662",
    longitude: "-81.91793995",
  },
  {
    id: 779,
    address:
      "312 Tuscany Chase Drive, Daytona Beach, FL 32117, United States of America",
    latitude: "29.2434163",
    longitude: "-81.0805284",
  },
  {
    id: 780,
    address: "78638 Goldfinch Lane, Yulee, FL 32097, United States of America",
    latitude: "30.605814",
    longitude: "-81.649955",
  },
  {
    id: 781,
    address:
      "44 White Bay Drive, Saint Augustine, FL 32092, United States of America",
    latitude: "30.031488",
    longitude: "-81.50229653",
  },
  {
    id: 782,
    address:
      "11910 Wynnfield Lakes Circle, Jacksonville, FL 32246, United States of America",
    latitude: "30.3070774",
    longitude: "-81.4962845",
  },
  {
    id: 783,
    address:
      "217 Palazzo Circle, St. Augustine, FL 32092, United States of America",
    latitude: "29.95145602",
    longitude: "-81.49262976",
  },
  {
    id: 784,
    address:
      "6519 Salt Creek Avenue, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77471983",
    longitude: "-82.38225416",
  },
  {
    id: 785,
    address:
      "6766 Copperfield Drive, New Port Richey, FL 34655, United States of America",
    latitude: "28.17849109",
    longitude: "-82.7019656",
  },
  {
    id: 786,
    address:
      "8747 Eden Cove Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.4266083",
    longitude: "-81.63676409",
  },
  {
    id: 787,
    address:
      "97100 Harbor Concourse Circle, Fernandina Beach, FL 32034, United States of America",
    latitude: "30.590065",
    longitude: "-81.524276",
  },
  {
    id: 788,
    address:
      "20400 Lace Cascade Road, Land O' Lakes, FL 34637, United States of America",
    latitude: "28.283103",
    longitude: "-82.478717",
  },
  {
    id: 789,
    address:
      "9021 Mountain Magnolia Drive, Riverview, FL 33578, United States of America",
    latitude: "27.89216261",
    longitude: "-82.35467449",
  },
  {
    id: 790,
    address:
      "6938 Old Benton Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77659297",
    longitude: "-82.38238314",
  },
  {
    id: 791,
    address:
      "10835 Kirkwall Port Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.76304175",
    longitude: "-82.32860466",
  },
  {
    id: 792,
    address:
      "12319 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18707505",
    longitude: "-82.61103246",
  },
  {
    id: 793,
    address:
      "12416 Whitmore Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1481755",
    longitude: "-81.5690459",
  },
  {
    id: 794,
    address:
      "129 Pergola Place, Ormond Beach, FL 32174, United States of America",
    latitude: "29.2778828",
    longitude: "-81.1474208",
  },
  {
    id: 795,
    address:
      "16623 Broadwater Avenue, Winter Garden, FL 34787, United States of America",
    latitude: "28.5198561",
    longitude: "-81.629617",
  },
  {
    id: 796,
    address:
      "2235 Club Lake Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14552041",
    longitude: "-81.86147798",
  },
  {
    id: 797,
    address: "5513 Mang Place, Sarasota, FL 34238, United States of America",
    latitude: "27.2642167",
    longitude: "-82.46173797",
  },
  {
    id: 798,
    address:
      "6931 Old Benton Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77629426",
    longitude: "-82.38217671",
  },
  {
    id: 799,
    address:
      "823 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04572006",
    longitude: "-80.68831354",
  },
  {
    id: 800,
    address:
      "1952 Elkins Point Drive, Melbourne, FL 32935, United States of America",
    latitude: "28.17109222",
    longitude: "-80.653581",
  },
  {
    id: 801,
    address:
      "10409 Waterstone Drive, Riverview, FL 33578, United States of America",
    latitude: "27.85338415",
    longitude: "-82.33298356",
  },
  {
    id: 802,
    address:
      "11505 Sand Stone Rock Drive, Riverview, FL 33569, United States of America",
    latitude: "27.82811585",
    longitude: "-82.30925858",
  },
  {
    id: 803,
    address:
      "14128 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1265879",
    longitude: "-81.5055716",
  },
  {
    id: 804,
    address:
      "4036 River Bank Way, Charlotte County, FL 33980, United States of America",
    latitude: "26.9791584",
    longitude: "-82.050831",
  },
  {
    id: 805,
    address:
      "955 Ginnie Way, Winter Springs, FL 32708, United States of America",
    latitude: "28.699804",
    longitude: "-81.257678",
  },
  {
    id: 806,
    address:
      "3914 Pacente Loop, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.21402419",
    longitude: "-82.27258458",
  },
  {
    id: 807,
    address:
      "3917 Arbor Mill Circle, Orange Park, FL 32065, United States of America",
    latitude: "30.18750896",
    longitude: "-81.8384699",
  },
  {
    id: 808,
    address:
      "2042 Arden Forest Place, Fleming Island, FL 32003, United States of America",
    latitude: "30.09427128",
    longitude: "-81.71649137",
  },
  {
    id: 809,
    address: "2205 Sequoia Way, Loughman, FL 33896, United States of America",
    latitude: "28.22705313",
    longitude: "-81.54240767",
  },
  {
    id: 810,
    address:
      "3345 Tawny Grove Place, Lakeland, FL 33811, United States of America",
    latitude: "28.01594536",
    longitude: "-82.01211488",
  },
  {
    id: 811,
    address:
      "3353 Poneta Avenue, New Smyrna Beach, FL 32168, United States of America",
    latitude: "29.02882",
    longitude: "-81.0289353",
  },
  {
    id: 812,
    address:
      "3698 Lefays Point, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.21025396",
    longitude: "-82.51731559",
  },
  {
    id: 813,
    address:
      "3857 Burnt Pine Drive, Jacksonville, FL 32224, United States of America",
    latitude: "30.2744681",
    longitude: "-81.4449084",
  },
  {
    id: 814,
    address:
      "4355 Vermillion Sky Drive, Wesley Chapel, FL 33544, United States of America",
    latitude: "28.21993745",
    longitude: "-82.36407774",
  },
  {
    id: 815,
    address:
      "22620 Cherokee Rose Place, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.23307377",
    longitude: "-82.4409843",
  },
  {
    id: 816,
    address: "101 Carlson Court, Nocatee, FL 32081, United States of America",
    latitude: "30.09836427",
    longitude: "-81.46238308",
  },
  {
    id: 817,
    address:
      "11027 Standing Stone Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.76143899",
    longitude: "-82.32270534",
  },
  {
    id: 818,
    address:
      "1532 Gadsden Point Place, Ruskin, FL 33570, United States of America",
    latitude: "27.73220634",
    longitude: "-82.41207821",
  },
  {
    id: 819,
    address: "3023 Oriole Drive, Sarasota, FL 34243, United States of America",
    latitude: "27.39312358",
    longitude: "-82.52699028",
  },
  {
    id: 820,
    address:
      "3142 Hardwood Hammock Drive, Meadow Woods, FL 32824, United States of America",
    latitude: "28.385198",
    longitude: "-81.34616443",
  },
  {
    id: 821,
    address:
      "67 Cypress Banks Drive, Fruit Cove, FL 32259, United States of America",
    latitude: "30.1016573",
    longitude: "-81.56474402",
  },
  {
    id: 822,
    address:
      "1076 Woods Landing Drive, Minneola, FL 34715, United States of America",
    latitude: "28.59360969",
    longitude: "-81.72434875",
  },
  {
    id: 823,
    address:
      "12742 Tikal Way, New Port Richey, FL 34655, United States of America",
    latitude: "28.17571583",
    longitude: "-82.60385706",
  },
  {
    id: 824,
    address:
      "1058 Laurel Valley Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.1469837",
    longitude: "-81.84981348",
  },
  {
    id: 825,
    address:
      "12327 Prairie Valley Lane, Riverview, FL 33579, United States of America",
    latitude: "27.79557853",
    longitude: "-82.27712236",
  },
  {
    id: 826,
    address:
      "14058 Hazelwood Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.2737113",
    longitude: "-81.4435789",
  },
  {
    id: 827,
    address:
      "2545 Northwest 144th Way, Newberry, FL 32669, United States of America",
    latitude: "29.67698079",
    longitude: "-82.49724246",
  },
  {
    id: 828,
    address:
      "2999 Calvano Drive, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.19470662",
    longitude: "-82.4192118",
  },
  {
    id: 829,
    address:
      "3185 Winesap Way, Winter Garden, FL 34787, United States of America",
    latitude: "28.49899681",
    longitude: "-81.61093665",
  },
  {
    id: 830,
    address:
      "5106 San Palermo Drive, Bradenton, FL 34208, United States of America",
    latitude: "27.504133",
    longitude: "-82.497959",
  },
  {
    id: 831,
    address:
      "1451 Autumn Pines Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14451996",
    longitude: "-81.85033009",
  },
  {
    id: 832,
    address:
      "1402 Lantern Light Trail, Middleburg, FL 32068, United States of America",
    latitude: "30.12573687",
    longitude: "-81.84723225",
  },
  {
    id: 833,
    address: "814 Grand Park Court, DeLand, FL 32724, United States of America",
    latitude: "29.0404735",
    longitude: "-81.2775685",
  },
  {
    id: 834,
    address: "930 Berry Leaf Court, Apopka, FL 32703, United States of America",
    latitude: "28.64828238",
    longitude: "-81.52459738",
  },
  {
    id: 835,
    address:
      "959 Autumn Pines Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.15241343",
    longitude: "-81.85795166",
  },
  {
    id: 836,
    address:
      "408 Westchester Hills Lane, Angel Run, FL 33594, United States of America",
    latitude: "27.944546",
    longitude: "-82.24415643",
  },
  {
    id: 837,
    address:
      "5351 Gage oaks drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1505026",
    longitude: "-81.5678952",
  },
  {
    id: 838,
    address:
      "11711 Gilmerton Drive, Riverview, FL 33579, United States of America",
    latitude: "27.8120797",
    longitude: "-82.29727029",
  },
  {
    id: 839,
    address:
      "2014 Mesic Hammock Way, Venice, FL 34292, United States of America",
    latitude: "27.09216804",
    longitude: "-82.34747615",
  },
  {
    id: 840,
    address:
      "2997 Savona Court, Jacksonville, FL 32246, United States of America",
    latitude: "30.293295",
    longitude: "-81.4737942",
  },
  {
    id: 841,
    address:
      "369 Red Kite Drive, Groveland, FL 34736, United States of America",
    latitude: "28.5862518",
    longitude: "-81.81170027",
  },
  {
    id: 842,
    address:
      "381 Red Kite Drive, Groveland, FL 34736, United States of America",
    latitude: "28.58666327",
    longitude: "-81.81182789",
  },
  {
    id: 843,
    address:
      "519 Rutile Drive, Ponte Vedra Beach, FL 32082, United States of America",
    latitude: "30.22506486",
    longitude: "-81.37569902",
  },
  {
    id: 844,
    address:
      "8313 Creedmoor Lane, New Port Richey, FL 34654, United States of America",
    latitude: "28.285143",
    longitude: "-82.62633",
  },
  {
    id: 845,
    address:
      "920 Bent Creek Drive, Fruit Cove, FL 32259, United States of America",
    latitude: "30.10281766",
    longitude: "-81.56404104",
  },
  {
    id: 846,
    address:
      "589 Seven Oaks Boulevard, Winter Springs, FL 32708, United States of America",
    latitude: "28.71139637",
    longitude: "-81.3224787",
  },
  {
    id: 847,
    address:
      "105 Pine Arbor Circle, Woodlawn, FL 32084, United States of America",
    latitude: "29.92877973",
    longitude: "-81.34827225",
  },
  {
    id: 848,
    address:
      "1764 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04646731",
    longitude: "-80.69030317",
  },
  {
    id: 849,
    address:
      "1909 Shiloh Brook Street, Kissimmee, FL 34744, United States of America",
    latitude: "28.26889214",
    longitude: "-81.36281624",
  },
  {
    id: 850,
    address:
      "209 English Channel Place, Dover, FL 33527, United States of America",
    latitude: "27.93564067",
    longitude: "-82.21812896",
  },
  {
    id: 851,
    address:
      "26641 Lincoln Avenue, Bonita Springs, FL 34135, United States of America",
    latitude: "26.35059124",
    longitude: "-81.75259425",
  },
  {
    id: 852,
    address: "335 Gris Sky Lane, Bradenton, FL 34212, United States of America",
    latitude: "27.50347487",
    longitude: "-82.38558008",
  },
  {
    id: 853,
    address:
      "506 Majestic Eagle Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.098115",
    longitude: "-81.41794695",
  },
  {
    id: 854,
    address: "51 Redland Way, Jacksonville, FL 32218, United States of America",
    latitude: "30.53011996",
    longitude: "-81.62123771",
  },
  {
    id: 855,
    address:
      "11425 Emerald Shore Drive, Riverview, FL 33579, United States of America",
    latitude: "27.82059616",
    longitude: "-82.31515044",
  },
  {
    id: 856,
    address:
      "1163 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04384967",
    longitude: "-80.68975026",
  },
  {
    id: 857,
    address:
      "15849 Tisons bluff road, Jacksonville, FL 32218, United States of America",
    latitude: "30.53002542",
    longitude: "-81.61456082",
  },
  {
    id: 858,
    address:
      "23 White Bay Drive, Saint Augustine, FL 32092, United States of America",
    latitude: "30.03159675",
    longitude: "-81.50147987",
  },
  {
    id: 859,
    address:
      "3245 Hardwood Hammock Drive, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38537336",
    longitude: "-81.343753",
  },
  {
    id: 860,
    address:
      "351 Capron Ash Loop, Casselberry, FL 32707, United States of America",
    latitude: "28.673305",
    longitude: "-81.301072",
  },
  {
    id: 861,
    address: "594 Howland Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.09746204",
    longitude: "-81.46462975",
  },
  {
    id: 862,
    address: "39 Payne Trail, Nocatee, FL 32081, United States of America",
    latitude: "30.09893932",
    longitude: "-81.46161315",
  },
  {
    id: 863,
    address:
      "1061 Fountain Coin Loop, Orlando, FL 32828, United States of America",
    latitude: "28.55127498",
    longitude: "-81.15560215",
  },
  {
    id: 864,
    address:
      "11351 Leland Groves Drive, Riverview, FL 33579, United States of America",
    latitude: "27.775529",
    longitude: "-82.314524",
  },
  {
    id: 865,
    address:
      "12244 Creek Preserve Drive, Riverview, FL 33579, United States of America",
    latitude: "27.82362824",
    longitude: "-82.26094758",
  },
  {
    id: 866,
    address:
      "159 South Coopers Hawk Way, Palm Coast, FL 32164, United States of America",
    latitude: "29.4411609",
    longitude: "-81.18980668",
  },
  {
    id: 867,
    address:
      "198 Carnation Street, Saint Johns County, FL 32259, United States of America",
    latitude: "30.0773687",
    longitude: "-81.52535803",
  },
  {
    id: 868,
    address:
      "2589 Cody Drive, Jacksonville, FL 32223, United States of America",
    latitude: "30.1471155",
    longitude: "-81.64295758",
  },
  {
    id: 869,
    address:
      "318 Morning View Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.53885435",
    longitude: "-81.6096753",
  },
  {
    id: 870,
    address:
      "344 Majestic Eagle Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.096963",
    longitude: "-81.42036323",
  },
  {
    id: 871,
    address: "3556 Cheswick Drive, Ocoee, FL 34761, United States of America",
    latitude: "28.62024242",
    longitude: "-81.52641174",
  },
  {
    id: 872,
    address:
      "6201 Marbella Boulevard, Andalucia, FL 33572, United States of America",
    latitude: "27.77886335",
    longitude: "-82.43100902",
  },
  {
    id: 873,
    address:
      "11206 Coventry Grove Circle, Lithia, FL 33547, United States of America",
    latitude: "27.8332352",
    longitude: "-82.20423415",
  },
  {
    id: 874,
    address:
      "1143 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04385864",
    longitude: "-80.68952481",
  },
  {
    id: 875,
    address:
      "122 Montiano Circle, St. Augustine, FL 32084, United States of America",
    latitude: "29.92913728",
    longitude: "-81.37073879",
  },
  {
    id: 876,
    address:
      "16003 Baxter Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.53030243",
    longitude: "-81.64648255",
  },
  {
    id: 877,
    address:
      "1968 Grand Rue Drive, Casselberry, FL 32707, United States of America",
    latitude: "28.67593572",
    longitude: "-81.30101454",
  },
  {
    id: 878,
    address:
      "27 Long Point Way, St. Augustine, FL 32092, United States of America",
    latitude: "30.03411563",
    longitude: "-81.51847572",
  },
  {
    id: 879,
    address:
      "5054 Brilliance Circle, Cocoa, FL 32926, United States of America",
    latitude: "28.37280167",
    longitude: "-80.80982556",
  },
  {
    id: 880,
    address:
      "10512 Summer Azure Drive, Riverview, FL 33578, United States of America",
    latitude: "27.847803",
    longitude: "-82.32921",
  },
  {
    id: 881,
    address:
      "10719 Southern Forest Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84532356",
    longitude: "-82.33243389",
  },
  {
    id: 882,
    address:
      "13069 Christine Marie Court, Jacksonville, FL 32225, United States of America",
    latitude: "30.35505427",
    longitude: "-81.46270394",
  },
  {
    id: 883,
    address:
      "13945 Felix Will Road, Riverview, FL 33579, United States of America",
    latitude: "27.77890483",
    longitude: "-82.30521437",
  },
  {
    id: 884,
    address:
      "148 Telford Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.0875775",
    longitude: "-81.54260913",
  },
  {
    id: 885,
    address: "2855 Westyn Cove Lane, Ocoee, FL 34761, United States of America",
    latitude: "28.61121475",
    longitude: "-81.54799912",
  },
  {
    id: 886,
    address:
      "3432 Julius Estates Boulevard, Winter Haven, FL 33881, United States of America",
    latitude: "28.0656502",
    longitude: "-81.70864339",
  },
  {
    id: 887,
    address:
      "40 Stony Ford Drive, Jacksonville, FL 32081, United States of America",
    latitude: "30.1147407",
    longitude: "-81.4541714",
  },
  {
    id: 888,
    address:
      "4924 Tiger Lily Lane, Jacksonville, FL 32257, United States of America",
    latitude: "30.20356465",
    longitude: "-81.58614947",
  },
  {
    id: 889,
    address:
      "8811 Ashland Avenue, Polk City, FL 33868, United States of America",
    latitude: "28.15968285",
    longitude: "-81.85705642",
  },
  {
    id: 890,
    address:
      "228 Hibiscus Street, Winter Haven, FL 33881, United States of America",
    latitude: "28.07721694",
    longitude: "-81.70125019",
  },
  {
    id: 891,
    address:
      "2588 Murray Pass, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.19675776",
    longitude: "-82.59856328",
  },
  {
    id: 892,
    address:
      "288 East Teague Bay Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.03446571",
    longitude: "-81.51740031",
  },
  {
    id: 893,
    address:
      "4230 Harvest Circle, Rockledge, FL 32955, United States of America",
    latitude: "28.294597",
    longitude: "-80.71704837",
  },
  {
    id: 894,
    address:
      "4237 Eagle Landing Parkway, Orange Park, FL 32065, United States of America",
    latitude: "30.15658675",
    longitude: "-81.86468379",
  },
  {
    id: 895,
    address:
      "16259 Dowing Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.535681",
    longitude: "-81.618453",
  },
  {
    id: 896,
    address:
      "107 Brilliant Bloom Court, Bradenton, FL 34212, United States of America",
    latitude: "27.50011707",
    longitude: "-82.38271649",
  },
  {
    id: 897,
    address: "1012 Bradberry Drive, Laurel, FL 34275, United States of America",
    latitude: "27.13502571",
    longitude: "-82.44697043",
  },
  {
    id: 898,
    address: "104 Cameron Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.09321197",
    longitude: "-81.46200687",
  },
  {
    id: 899,
    address:
      "13187 Christine Marie Court, Jacksonville, FL 32225, United States of America",
    latitude: "30.35430379",
    longitude: "-81.46143334",
  },
  {
    id: 900,
    address:
      "14036 Finsbury Drive, Spring Hill, FL 34609, United States of America",
    latitude: "28.43948752",
    longitude: "-82.48984033",
  },
  {
    id: 901,
    address:
      "147 Grant Logan Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.091573",
    longitude: "-81.5558408",
  },
  {
    id: 902,
    address:
      "2055 Arden Forest Place, Fleming Island, FL 32003, United States of America",
    latitude: "30.09395756",
    longitude: "-81.71630363",
  },
  {
    id: 903,
    address:
      "3616 81st Place East, Sarasota, FL 34243, United States of America",
    latitude: "27.39487949",
    longitude: "-82.51786447",
  },
  {
    id: 904,
    address:
      "4912 Tiger Lily Lane, Jacksonville, FL 32257, United States of America",
    latitude: "30.20356765",
    longitude: "-81.58653973",
  },
  {
    id: 905,
    address:
      "19917 Satin Leaf Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.15950225",
    longitude: "-82.32274895",
  },
  {
    id: 906,
    address:
      "11867 Lake Lucaya Drive, Riverview, FL 33579, United States of America",
    latitude: "27.817014",
    longitude: "-82.317469",
  },
  {
    id: 907,
    address:
      "12266 Lavender Loop, Bradenton, FL 34212, United States of America",
    latitude: "27.50904319",
    longitude: "-82.42314163",
  },
  {
    id: 908,
    address:
      "15408 Stone House Drive, Brooksville, FL 34604, United States of America",
    latitude: "28.44752162",
    longitude: "-82.47276012",
  },
  {
    id: 909,
    address: "221 Glenwood Street, Nocatee, FL 32081, United States of America",
    latitude: "30.09831111",
    longitude: "-81.46114289",
  },
  {
    id: 910,
    address:
      "3060 Princewood Drive, Minneola, FL 34715, United States of America",
    latitude: "28.58645573",
    longitude: "-81.72969482",
  },
  {
    id: 911,
    address:
      "5111 Layton Drive, Sarasota County, FL 34293, United States of America",
    latitude: "27.03298822",
    longitude: "-82.38585331",
  },
  {
    id: 912,
    address:
      "7030 Crispin Cove Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1164142",
    longitude: "-81.5227601",
  },
  {
    id: 913,
    address:
      "7503 Sea Lilly Court, Apollo Beach, FL 33572, United States of America",
    latitude: "27.76859244",
    longitude: "-82.36969923",
  },
  {
    id: 914,
    address:
      "53 Starling Avenue, Jacksonville, FL 32081, United States of America",
    latitude: "30.101618",
    longitude: "-81.45095",
  },
  {
    id: 915,
    address:
      "8618 Creedmoor Lane, New Port Richey, FL 34654, United States of America",
    latitude: "28.284584",
    longitude: "-82.62125",
  },
  {
    id: 916,
    address:
      "24 Long Point Way, St. Augustine, FL 32092, United States of America",
    latitude: "30.03409631",
    longitude: "-81.51869165",
  },
  {
    id: 917,
    address:
      "13831 Goodson Place, Jacksonville, FL 32226, United States of America",
    latitude: "30.48590105",
    longitude: "-81.56905014",
  },
  {
    id: 918,
    address:
      "15872 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50113638",
    longitude: "-82.38097655",
  },
  {
    id: 919,
    address:
      "16252 Dowing Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.535502",
    longitude: "-81.618978",
  },
  {
    id: 920,
    address:
      "171 Spring Park Avenue, Nocatee, FL 32081, United States of America",
    latitude: "30.10431498",
    longitude: "-81.45240851",
  },
  {
    id: 921,
    address:
      "2011 Banner Lane, Saint Cloud, FL 34769, United States of America",
    latitude: "28.24030088",
    longitude: "-81.32005376",
  },
  {
    id: 922,
    address:
      "3471 Berkshire Woods Terrace, Deltona, FL 32725, United States of America",
    latitude: "28.9614211",
    longitude: "-81.2454821",
  },
  {
    id: 923,
    address: "10161 Authors Way, Orlando, FL 32832, United States of America",
    latitude: "28.4309182",
    longitude: "-81.21969437",
  },
  {
    id: 924,
    address:
      "1198 Autumn Pines Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.15001031",
    longitude: "-81.85365301",
  },
  {
    id: 925,
    address:
      "1201 Woods Landing Drive, Minneola, FL 34715, United States of America",
    latitude: "28.59343285",
    longitude: "-81.72602005",
  },
  {
    id: 926,
    address:
      "15792 Bainebridge Drive, Jacksonville, FL 32218-, United States of America",
    latitude: "30.522451",
    longitude: "-81.646898",
  },
  {
    id: 927,
    address:
      "3518 Kearsney Abbey Circle, Dover, FL 33527, United States of America",
    latitude: "27.93448881",
    longitude: "-82.21734671",
  },
  {
    id: 928,
    address:
      "3973 Hammock Bluff Circle, Jacksonville, FL 32226, United States of America",
    latitude: "30.47512678",
    longitude: "-81.55326986",
  },
  {
    id: 929,
    address: "786 NW 229th Drive, Newberry, FL 32669, United States of America",
    latitude: "29.661684",
    longitude: "-82.585864",
  },
  {
    id: 930,
    address:
      "10207 Stedfast Court, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.768104",
    longitude: "-82.339513",
  },
  {
    id: 931,
    address:
      "15855 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50110979",
    longitude: "-82.38070427",
  },
  {
    id: 932,
    address:
      "2840 Esmeralda Drive, Sarasota, FL 34243, United States of America",
    latitude: "27.39530067",
    longitude: "-82.52895047",
  },
  {
    id: 933,
    address:
      "308 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07507438",
    longitude: "-81.52416844",
  },
  {
    id: 934,
    address:
      "3946 Milner Court, West Melbourne, FL 32904, United States of America",
    latitude: "28.04659082",
    longitude: "-80.65310274",
  },
  {
    id: 935,
    address:
      "5000 Redford Manor Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1512366",
    longitude: "-81.57707138",
  },
  {
    id: 936,
    address:
      "5953 Sweet Birch Drive, Riverview, FL 33578, United States of America",
    latitude: "27.893097",
    longitude: "-82.35551",
  },
  {
    id: 937,
    address:
      "14342 Orchard Hills Boulevard, Winter Garden, FL 34787, United States of America",
    latitude: "28.49251451",
    longitude: "-81.6063956",
  },
  {
    id: 938,
    address:
      "2602 Holly Bluff Court, Plant City, FL 33566, United States of America",
    latitude: "27.98364219",
    longitude: "-82.1164563",
  },
  {
    id: 939,
    address:
      "7214 Milestone Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77599806",
    longitude: "-82.37563559",
  },
  {
    id: 940,
    address: "7495 Aguila Drive, Tatum, FL 34240, United States of America",
    latitude: "27.32191483",
    longitude: "-82.42270173",
  },
  {
    id: 941,
    address:
      "11542 Brighton Knoll Loop, Riverview, FL 33579, United States of America",
    latitude: "27.779902",
    longitude: "-82.30762043",
  },
  {
    id: 942,
    address:
      "137 Prestwick Grande Drive, Daytona Beach, FL 32124, United States of America",
    latitude: "29.1712082",
    longitude: "-81.097242",
  },
  {
    id: 943,
    address:
      "7513 Lantern Park Avenue, Apollo Beach, FL 33572, United States of America",
    latitude: "27.7669134",
    longitude: "-82.36905248",
  },
  {
    id: 944,
    address:
      "11121 Abaco Island Avenue, Riverview, FL 33579, United States of America",
    latitude: "27.81975598",
    longitude: "-82.32412051",
  },
  {
    id: 945,
    address:
      "14920 Del Morrow Way, Orlando, FL 32824, United States of America",
    latitude: "28.348609",
    longitude: "-81.363168",
  },
  {
    id: 946,
    address: "1579 Fox Grape Loop, Lutz, FL 33558, United States of America",
    latitude: "28.17874993",
    longitude: "-82.5047624",
  },
  {
    id: 947,
    address:
      "1839 Altavista Circle, Lakeland, FL 33810, United States of America",
    latitude: "28.0963416",
    longitude: "-81.9915085",
  },
  {
    id: 948,
    address:
      "10612 Summer Azure Drive, Riverview, FL 33578, United States of America",
    latitude: "27.8465009",
    longitude: "-82.3292365",
  },
  {
    id: 949,
    address:
      "12010 Legacy Bright Street, Riverview, FL 33578, United States of America",
    latitude: "27.82432924",
    longitude: "-82.33550747",
  },
  {
    id: 950,
    address:
      "12204 Fawn Brindle Street, Riverview, FL 33578, United States of America",
    latitude: "27.82158083",
    longitude: "-82.33268717",
  },
  {
    id: 951,
    address:
      "12386 Acosta Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1484655",
    longitude: "-81.5681673",
  },
  {
    id: 952,
    address:
      "16223 Magnolia Grove Way, Jacksonville, FL 32218, United States of America",
    latitude: "30.53599439",
    longitude: "-81.61431042",
  },
  {
    id: 953,
    address:
      "2315 Evening Breeze Lane, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.05487989",
    longitude: "-81.80488131",
  },
  {
    id: 954,
    address: "676 Bishop Bay Loop, Apopka, FL 32712, United States of America",
    latitude: "28.7127938",
    longitude: "-81.5237307",
  },
  {
    id: 955,
    address:
      "14546 Northwest 27th Avenue, Alachua County, FL 32669, United States of America",
    latitude: "29.67823782",
    longitude: "-82.49821382",
  },
  {
    id: 956,
    address:
      "14726 Trellis Street, Jacksonville, FL 32258, United States of America",
    latitude: "30.1115257",
    longitude: "-81.5202155",
  },
  {
    id: 957,
    address:
      "14749 Rain Lily Street, Jacksonville, FL 32258, United States of America",
    latitude: "30.110924",
    longitude: "-81.520521",
  },
  {
    id: 958,
    address:
      "1708 Attilburgh Boulevard, West Melbourne, FL 32904, United States of America",
    latitude: "28.04433699",
    longitude: "-80.64971346",
  },
  {
    id: 959,
    address:
      "3649 Maidencain Street, Clermont, FL 34714, United States of America",
    latitude: "28.4010149",
    longitude: "-81.6842808",
  },
  {
    id: 960,
    address:
      "49 Little Harbor Way, Saint Augustine, FL 32092, United States of America",
    latitude: "30.03209485",
    longitude: "-81.50088505",
  },
  {
    id: 961,
    address:
      "9189 Bella Vita Circle, Land O' Lakes, FL 34637, United States of America",
    latitude: "28.28634328",
    longitude: "-82.45937303",
  },
  {
    id: 962,
    address:
      "15413 Uglis Alley, Winter Garden, FL 34787, United States of America",
    latitude: "28.437281",
    longitude: "-81.621904",
  },
  {
    id: 963,
    address:
      "101 Concave Lane, Saint Johns County, FL 32095, United States of America",
    latitude: "30.07641137",
    longitude: "-81.4707896",
  },
  {
    id: 964,
    address:
      "11611 Branch Cay Circle, Riverview, FL 33569, United States of America",
    latitude: "27.830696",
    longitude: "-82.328194",
  },
  {
    id: 965,
    address: "18851 Deer Tracks Loop, Lutz, FL 33558, United States of America",
    latitude: "28.1828412",
    longitude: "-82.5045506",
  },
  {
    id: 966,
    address:
      "2509 Cody Drive, Jacksonville, FL 32223, United States of America",
    latitude: "30.14645865",
    longitude: "-81.64476465",
  },
  {
    id: 967,
    address:
      "3323 Ridgeview Drive, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.03558514",
    longitude: "-81.78269507",
  },
  {
    id: 968,
    address:
      "3412 Kearsney Abbey Circle, Dover, FL 33527, United States of America",
    latitude: "27.934941",
    longitude: "-82.215201",
  },
  {
    id: 969,
    address:
      "3923 Radley Drive, West Melbourne, FL 32904, United States of America",
    latitude: "28.04434663",
    longitude: "-80.65276569",
  },
  {
    id: 970,
    address:
      "4249 Eagle Landing Parkway, Orange Park, FL 32065, United States of America",
    latitude: "30.15594625",
    longitude: "-81.86466828",
  },
  {
    id: 971,
    address:
      "5414 Cartagena Drive, Sarasota County, FL 34233, United States of America",
    latitude: "27.27341871",
    longitude: "-82.46147",
  },
  {
    id: 972,
    address:
      "1071 Woodlark Drive, Davenport, FL 33844, United States of America",
    latitude: "28.14808002",
    longitude: "-81.61679786",
  },
  {
    id: 973,
    address:
      "11060 58th Street Circle East, Manatee County, FL 34219, United States of America",
    latitude: "27.57075523",
    longitude: "-82.44969512",
  },
  {
    id: 974,
    address:
      "12387 Sawgrass Prairie Loop, Meadow Woods, FL 32824, United States of America",
    latitude: "28.39101433",
    longitude: "-81.347316",
  },
  {
    id: 975,
    address:
      "12638 Boggy Pointe Drive, Meadow Woods, FL 32824, United States of America",
    latitude: "28.38098394",
    longitude: "-81.35608801",
  },
  {
    id: 976,
    address: "3218 Sorrel Drive, Deltona, FL 32725, United States of America",
    latitude: "28.9630542",
    longitude: "-81.2456936",
  },
  {
    id: 977,
    address:
      "24522 Via Vizcaya, San Antonio, TX 78260, United States of America",
    latitude: "29.66871904",
    longitude: "-98.47526355",
  },
  {
    id: 978,
    address:
      "12300 Raintree Lake Court, Jacksonville, FL 32246, United States of America",
    latitude: "30.3081333",
    longitude: "-81.4924513",
  },
  {
    id: 979,
    address:
      "15641 Mallard Rise Loop, Quail Ridge, FL 34610, United States of America",
    latitude: "28.33907667",
    longitude: "-82.55672238",
  },
  {
    id: 980,
    address:
      "15917 Hutton Lane, Jacksonville, FL 32218, United States of America",
    latitude: "30.52867853",
    longitude: "-81.62062727",
  },
  {
    id: 981,
    address:
      "300 Citrus Ridge Drive, Jacksonville, FL 32081, United States of America",
    latitude: "30.100454",
    longitude: "-81.450241",
  },
  {
    id: 982,
    address:
      "310 Bellview Place, Alderene Park, FL 32771, United States of America",
    latitude: "28.81618531",
    longitude: "-81.36053192",
  },
  {
    id: 983,
    address:
      "4792 Grassy Knoll Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7562033",
    longitude: "-81.7647652",
  },
  {
    id: 984,
    address:
      "646 Cross Ridge Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.09458517",
    longitude: "-81.46174462",
  },
  {
    id: 985,
    address:
      "14048 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1267201",
    longitude: "-81.5070068",
  },
  {
    id: 986,
    address:
      "1977 Plumas Way, Meadow Woods, FL 32824, United States of America",
    latitude: "28.39038868",
    longitude: "-81.3577193",
  },
  {
    id: 987,
    address:
      "2132 Richwood Pike Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.73113695",
    longitude: "-82.4049055",
  },
  {
    id: 988,
    address:
      "2390 Hastings Boulevard, Clermont, FL 34711, United States of America",
    latitude: "28.53807337",
    longitude: "-81.72995226",
  },
  {
    id: 989,
    address:
      "2852 Northeast 43rd Road, Ocala, FL 34470, United States of America",
    latitude: "29.21581303",
    longitude: "-82.07443676",
  },
  {
    id: 990,
    address:
      "32745 Windelstraw Drive, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26740907",
    longitude: "-82.27508544",
  },
  {
    id: 991,
    address:
      "416 Grande Vista Boulevard, Bradenton, FL 34212, United States of America",
    latitude: "27.502205",
    longitude: "-82.390482",
  },
  {
    id: 992,
    address:
      "419 Pink Coral Lane, New Smyrna Beach, FL 32168, United States of America",
    latitude: "29.0227938",
    longitude: "-80.9783972",
  },
  {
    id: 993,
    address:
      "69 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.0776302",
    longitude: "-81.52395607",
  },
  {
    id: 994,
    address:
      "1463 Malagueta Court, Shenandoah, TX 77384, United States of America",
    latitude: "30.1859821",
    longitude: "-95.46115937",
  },
  {
    id: 995,
    address:
      "10036 Victory Gallop Loop, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76578949",
    longitude: "-82.34849262",
  },
  {
    id: 996,
    address:
      "1289 Autumn Pines Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14877225",
    longitude: "-81.85374691",
  },
  {
    id: 997,
    address:
      "2662 Running Oak Court, North Port, FL 34289, United States of America",
    latitude: "27.07750564",
    longitude: "-82.12639518",
  },
  {
    id: 998,
    address:
      "355 Heritage Oaks Drive, Saint Johns County, FL 32259, United States of America",
    latitude: "30.07488816",
    longitude: "-81.52451441",
  },
  {
    id: 999,
    address:
      "3984 Cedar Bluff Lane, Jacksonville, FL 32226, United States of America",
    latitude: "30.46659724",
    longitude: "-81.55454872",
  },
  {
    id: 1000,
    address:
      "7022 Crispin Cove Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1163277",
    longitude: "-81.5229302",
  },
  {
    id: 1001,
    address:
      "3715 Treasure Cove Circle, Naples, FL 34114, United States of America",
    latitude: "26.03524118",
    longitude: "-81.68756781",
  },
  {
    id: 1002,
    address:
      "1048 Thunderhead Lane, Minneola, FL 34715, United States of America",
    latitude: "28.59269094",
    longitude: "-81.725835",
  },
  {
    id: 1003,
    address:
      "110 Stately Shoals Trail, Nocatee, FL 32081, United States of America",
    latitude: "30.095837",
    longitude: "-81.42425793",
  },
  {
    id: 1004,
    address:
      "120 Corey Cay Avenue, Saint Johns County, FL 32092, United States of America",
    latitude: "30.04066876",
    longitude: "-81.53239558",
  },
  {
    id: 1005,
    address: "13553 Messino Court, Estero, FL 33928, United States of America",
    latitude: "26.4253427",
    longitude: "-81.72832144",
  },
  {
    id: 1006,
    address:
      "14734 Littleleaf Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.111689",
    longitude: "-81.51937",
  },
  {
    id: 1007,
    address:
      "1816 Greenwood Valley Drive, Plant City, FL 33563, United States of America",
    latitude: "27.99474135",
    longitude: "-82.11552692",
  },
  {
    id: 1008,
    address: "75 Lone Eagle Way, Nocatee, FL 32081, United States of America",
    latitude: "30.12895952",
    longitude: "-81.42400798",
  },
  {
    id: 1009,
    address:
      "1360 Coopers Hawk Way, Clay County, FL 32068, United States of America",
    latitude: "30.13753282",
    longitude: "-81.85896224",
  },
  {
    id: 1010,
    address:
      "1884 Prima Vista Drive, Lakeland, FL 33810, United States of America",
    latitude: "28.09613",
    longitude: "-81.993373",
  },
  {
    id: 1011,
    address:
      "2774 Big Timber Drive, Kissimmee, FL 34758, United States of America",
    latitude: "28.21650234",
    longitude: "-81.47056495",
  },
  {
    id: 1012,
    address:
      "2258 Romanum Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.5018553",
    longitude: "-81.6204159",
  },
  {
    id: 1013,
    address:
      "290 Mission Trace Drive, St. Augustine, FL 32084, United States of America",
    latitude: "29.91236879",
    longitude: "-81.36463083",
  },
  {
    id: 1014,
    address:
      "425 Westchester Hills Lane, Angel Run, FL 33594, United States of America",
    latitude: "27.94465202",
    longitude: "-82.24331606",
  },
  {
    id: 1015,
    address:
      "6421 Yellow Buckeye Drive, Riverview, FL 33578, United States of America",
    latitude: "27.89061322",
    longitude: "-82.3612966",
  },
  {
    id: 1016,
    address:
      "702 Northwest 134th Way, Alachua County, FL 32669, United States of America",
    latitude: "29.65901284",
    longitude: "-82.48548532",
  },
  {
    id: 1017,
    address:
      "724 Montiano Circle, St. Augustine, FL 32084, United States of America",
    latitude: "29.92692099",
    longitude: "-81.3698415",
  },
  {
    id: 1018,
    address:
      "12341 Acosta Oaks Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1498403",
    longitude: "-81.567932",
  },
  {
    id: 1019,
    address:
      "2552 Murray Pass, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.19635565",
    longitude: "-82.59866904",
  },
  {
    id: 1020,
    address:
      "10358 Addison Lakes Drive, Jacksonville, FL 32257, United States of America",
    latitude: "30.18906475",
    longitude: "-81.59922773",
  },
  {
    id: 1021,
    address:
      "11704 Thicket Wood Drive, Riverview, FL 33579, United States of America",
    latitude: "27.8192857",
    longitude: "-82.301906",
  },
  {
    id: 1022,
    address: "1408 Cabot Drive, Clermont, FL 34711, United States of America",
    latitude: "28.53729286",
    longitude: "-81.73105866",
  },
  {
    id: 1023,
    address:
      "3902 Dylan court, Jacksonville, FL 32223, United States of America",
    latitude: "30.14772278",
    longitude: "-81.60505854",
  },
  {
    id: 1024,
    address:
      "4347 Moon Shadow Loop, Mulberry, FL 33860, United States of America",
    latitude: "27.93792",
    longitude: "-81.996881",
  },
  {
    id: 1025,
    address:
      "550 Swallowtail Drive, Davenport, FL 33844, United States of America",
    latitude: "28.14894518",
    longitude: "-81.61644173",
  },
  {
    id: 1026,
    address:
      "5696 Dornich Drive, Auburndale, FL 33823, United States of America",
    latitude: "28.14759771",
    longitude: "-81.81970322",
  },
  {
    id: 1027,
    address:
      "131 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07695341",
    longitude: "-81.52296209",
  },
  {
    id: 1028,
    address:
      "2910 49th Terrace South, Saint Petersburg, FL 33712, United States of America",
    latitude: "27.72334377",
    longitude: "-82.67225442",
  },
  {
    id: 1029,
    address:
      "4206 Northeast 29th Place, Ocala, FL 34470, United States of America",
    latitude: "29.21593667",
    longitude: "-82.07731527",
  },
  {
    id: 1030,
    address:
      "100 Woodcross Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.08417",
    longitude: "-81.546053",
  },
  {
    id: 1031,
    address:
      "126 San Carrara Court, Bradenton, FL 34208, United States of America",
    latitude: "27.50558342",
    longitude: "-82.49754115",
  },
  {
    id: 1032,
    address:
      "25 Forest Edge Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.08499334",
    longitude: "-81.54009709",
  },
  {
    id: 1033,
    address:
      "314 Lexington Avenue Southwest, Florida Ridge, FL 32962, United States of America",
    latitude: "27.59718029",
    longitude: "-80.39819301",
  },
  {
    id: 1034,
    address:
      "4897 Waters Gate Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7549031",
    longitude: "-81.7662532",
  },
  {
    id: 1035,
    address:
      "12115 Echo Basin Cove, Riverview, FL 33579, United States of America",
    latitude: "27.79694698",
    longitude: "-82.28157665",
  },
  {
    id: 1036,
    address:
      "4215 Sherman Hills Parkway West, Jacksonville, FL 32210, United States of America",
    latitude: "30.25588852",
    longitude: "-81.84026119",
  },
  {
    id: 1037,
    address:
      "11613 Mansfield Point Drive, Riverview, FL 33569, United States of America",
    latitude: "27.830226",
    longitude: "-82.32764",
  },
  {
    id: 1038,
    address:
      "1504 Climbing Dayflower Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.7284275",
    longitude: "-82.41439626",
  },
  {
    id: 1039,
    address:
      "33294 Whisper Pointe Drive, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26535119",
    longitude: "-82.26791007",
  },
  {
    id: 1040,
    address:
      "4575 Sherman Hills Parkway, Jacksonville, FL 32210, United States of America",
    latitude: "30.25485177",
    longitude: "-81.83761836",
  },
  {
    id: 1041,
    address:
      "707 Black Eagle Drive, Groveland, FL 34736, United States of America",
    latitude: "28.58899745",
    longitude: "-81.81123404",
  },
  {
    id: 1042,
    address:
      "728 West Kings College Drive, Fruit Cove, FL 32259, United States of America",
    latitude: "30.09462196",
    longitude: "-81.58703674",
  },
  {
    id: 1043,
    address:
      "10203 Stedfast Court, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.768252",
    longitude: "-82.339872",
  },
  {
    id: 1044,
    address:
      "12315 Ballentrae Forest Drive, Riverview, FL 33579, United States of America",
    latitude: "27.817865",
    longitude: "-82.300688",
  },
  {
    id: 1045,
    address:
      "138 San Carrara Court, Bradenton, FL 34208, United States of America",
    latitude: "27.50533319",
    longitude: "-82.49759429",
  },
  {
    id: 1046,
    address:
      "21469 Bella Terra Boulevard, Bella Terra, FL 33928, United States of America",
    latitude: "26.42362254",
    longitude: "-81.72656247",
  },
  {
    id: 1047,
    address:
      "259 Buck Run Way, St. Augustine, FL 32092, United States of America",
    latitude: "29.94254877",
    longitude: "-81.49070076",
  },
  {
    id: 1048,
    address:
      "2844 Esmeralda Drive, Sarasota, FL 34243, United States of America",
    latitude: "27.39530135",
    longitude: "-82.52888391",
  },
  {
    id: 1049,
    address:
      "4701 Cypress Forest Lane, Saint Cloud, FL 34772, United States of America",
    latitude: "28.21536506",
    longitude: "-81.29978514",
  },
  {
    id: 1050,
    address:
      "688 Briar View Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.16007913",
    longitude: "-81.84349876",
  },
  {
    id: 1051,
    address:
      "397 Blue Cypress Drive, Groveland, FL 34736, United States of America",
    latitude: "28.56517495",
    longitude: "-81.79560138",
  },
  {
    id: 1052,
    address:
      "1215 Harbour Blue Street, Ruskin, FL 33570, United States of America",
    latitude: "27.72899212",
    longitude: "-82.40729576",
  },
  {
    id: 1053,
    address: "1858 Rafton Road, Apopka, FL 32703, United States of America",
    latitude: "28.6502356",
    longitude: "-81.5290155",
  },
  {
    id: 1054,
    address:
      "1910 Remembrance Avenue, Saint Cloud, FL 34769, United States of America",
    latitude: "28.24185944",
    longitude: "-81.31852332",
  },
  {
    id: 1055,
    address: "3403 Apple Ridge Road, Ocoee, FL 34761, United States of America",
    latitude: "28.61966898",
    longitude: "-81.52797047",
  },
  {
    id: 1056,
    address:
      "10013 Logan Falls Court, Jacksonville, FL 32222, United States of America",
    latitude: "30.20489186",
    longitude: "-81.82427237",
  },
  {
    id: 1057,
    address:
      "2223 Richwood Pike Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.7290237",
    longitude: "-82.40486337",
  },
  {
    id: 1058,
    address:
      "10217 Celtic Ash Drive, Apollo Beach, FL 33573, United States of America",
    latitude: "27.76848903",
    longitude: "-82.3393129",
  },
  {
    id: 1059,
    address: "656 Jacksdaw Drive, Austin, TX 78737, United States of America",
    latitude: "30.15286307",
    longitude: "-97.93405694",
  },
  {
    id: 1060,
    address:
      "7027 Mirabelle Drive, Jacksonville, FL 32258-, United States of America",
    latitude: "30.117363",
    longitude: "-81.524973",
  },
  {
    id: 1061,
    address:
      "1055 Swiss Pointe Lane, Rockledge, FL 32955, United States of America",
    latitude: "28.310985",
    longitude: "-80.741304",
  },
  {
    id: 1062,
    address:
      "11507 Warren Oaks Place, Riverview, FL 33578, United States of America",
    latitude: "27.83251425",
    longitude: "-82.33152854",
  },
  {
    id: 1063,
    address:
      "11875 Thicket Wood Drive, Riverview, FL 33579, United States of America",
    latitude: "27.817245",
    longitude: "-82.297076",
  },
  {
    id: 1064,
    address:
      "12018 Steppingstone Boulevard, Tampa, FL 33635, United States of America",
    latitude: "28.036663",
    longitude: "-82.619253",
  },
  {
    id: 1065,
    address:
      "16214 Magnolia Grove Way, Jacksonville, FL 32218, United States of America",
    latitude: "30.53602157",
    longitude: "-81.61452132",
  },
  {
    id: 1066,
    address:
      "3407 Julius Estates Boulevard, Winter Haven, FL 33881, United States of America",
    latitude: "28.0653605",
    longitude: "-81.709568",
  },
  {
    id: 1067,
    address:
      "36 White Bay Drive, Saint Augustine, FL 32092, United States of America",
    latitude: "30.03167765",
    longitude: "-81.50210895",
  },
  {
    id: 1068,
    address:
      "5101 Grassy Knoll Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7523311",
    longitude: "-81.7685856",
  },
  {
    id: 1069,
    address:
      "815 Papaya Drive, Clair-Mel City, FL 33619, United States of America",
    latitude: "27.94239226",
    longitude: "-82.37483399",
  },
  {
    id: 1070,
    address:
      "917 Dome Peak Lane, Georgetown, TX 78633, United States of America",
    latitude: "30.71351223",
    longitude: "-97.74014624",
  },
  {
    id: 1071,
    address:
      "12515 Ballentrae Forest Drive, Riverview, FL 33579, United States of America",
    latitude: "27.81662933",
    longitude: "-82.29648055",
  },
  {
    id: 1072,
    address: "Vero Beach, FL, United States of America",
    latitude: "27.6387163",
    longitude: "-80.3975399",
  },
  {
    id: 1073,
    address:
      "341 Irish Rose Road, Wards Creek, FL 32092, United States of America",
    latitude: "29.96741255",
    longitude: "-81.5364289",
  },
  {
    id: 1074,
    address:
      "17 Auburn Oaks Road West, Jacksonville, FL 32218, United States of America",
    latitude: "30.43416561",
    longitude: "-81.63476191",
  },
  {
    id: 1075,
    address:
      "11942 Wynnfield Lakes Circle, Jacksonville, FL 32246, United States of America",
    latitude: "30.3071932",
    longitude: "-81.4966836",
  },
  {
    id: 1076,
    address:
      "1110 White Water Bay Drive, Groveland, FL 34736, United States of America",
    latitude: "28.560599",
    longitude: "-81.801032",
  },
  {
    id: 1077,
    address:
      "13022 Payton Street, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.1962507",
    longitude: "-82.60168653",
  },
  {
    id: 1078,
    address:
      "169 Quail Creek Circle, Jacksonville, FL 32259, United States of America",
    latitude: "30.07538466",
    longitude: "-81.55573668",
  },
  {
    id: 1079,
    address: "3057 Teak Court, Deltona, FL 32725, United States of America",
    latitude: "28.9605813",
    longitude: "-81.2463423",
  },
  {
    id: 1080,
    address:
      "4988 Grassy Knoll Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7526376",
    longitude: "-81.7667824",
  },
  {
    id: 1081,
    address:
      "8752 Eden Cove Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.42671828",
    longitude: "-81.63695272",
  },
  {
    id: 1082,
    address:
      "9032 Devon Pines Drive, Jacksonville, FL 32211, United States of America",
    latitude: "30.335073",
    longitude: "-81.558674",
  },
  {
    id: 1083,
    address:
      "1117 Orchard Oriole Place, Middleburg, FL 32068, United States of America",
    latitude: "30.14164157",
    longitude: "-81.86286883",
  },
  {
    id: 1084,
    address:
      "13047 Payton Street, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.1959621",
    longitude: "-82.60161036",
  },
  {
    id: 1085,
    address:
      "14728 Littleleaf Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.111789",
    longitude: "-81.519386",
  },
  {
    id: 1086,
    address:
      "1977 Grand Rue Drive, Casselberry, FL 32707, United States of America",
    latitude: "28.67583659",
    longitude: "-81.30116457",
  },
  {
    id: 1087,
    address:
      "2374 Carnation Court, North Port, FL 34289, United States of America",
    latitude: "27.076856",
    longitude: "-82.123705",
  },
  {
    id: 1088,
    address:
      "4926 Waters Gate Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7550238",
    longitude: "-81.7672672",
  },
  {
    id: 1089,
    address:
      "8008 Rail Street, Winter Garden, FL 34787, United States of America",
    latitude: "28.44896462",
    longitude: "-81.6097888",
  },
  {
    id: 1090,
    address:
      "10218 Magnolia Ridge Road, Jacksonville, FL 32210, United States of America",
    latitude: "30.2516539",
    longitude: "-81.83016985",
  },
  {
    id: 1091,
    address:
      "10814 52nd Court East, Parrish, FL 34219, United States of America",
    latitude: "27.562326",
    longitude: "-82.453442",
  },
  {
    id: 1092,
    address:
      "11713 Thicket Wood Drive, Riverview, FL 33579, United States of America",
    latitude: "27.818805",
    longitude: "-82.301233",
  },
  {
    id: 1093,
    address:
      "198 Mission Cove Circle, Saint Johns County, FL 32084, United States of America",
    latitude: "29.913711",
    longitude: "-81.36286479",
  },
  {
    id: 1094,
    address:
      "232 Wild Rose Drive, Fruit Cove, FL 32259, United States of America",
    latitude: "30.05989525",
    longitude: "-81.61999118",
  },
  {
    id: 1095,
    address:
      "283 Gray Wolf Trail, Jacksonville, FL 32081, United States of America",
    latitude: "30.1121148",
    longitude: "-81.4565689",
  },
  {
    id: 1096,
    address: "362 Moray Drive, Palm Bay, FL 32908, United States of America",
    latitude: "27.992736",
    longitude: "-80.718427",
  },
  {
    id: 1097,
    address:
      "4112 Sandhill Crane Terrace, Middleburg, FL 32068, United States of America",
    latitude: "30.14322869",
    longitude: "-81.85614964",
  },
  {
    id: 1098,
    address:
      "14463 Garden Gate Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1157724",
    longitude: "-81.5242109",
  },
  {
    id: 1099,
    address:
      "4398 Shrewbury Place, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.22062719",
    longitude: "-82.49959555",
  },
  {
    id: 1100,
    address:
      "5262 Bear Corn Run, Port Orange, FL 32128, United States of America",
    latitude: "29.1176091",
    longitude: "-81.0567324",
  },
  {
    id: 1101,
    address:
      "8901 Shipbrook Way, Winter Garden, FL 34787, United States of America",
    latitude: "28.430801",
    longitude: "-81.604296",
  },
  {
    id: 1102,
    address:
      "11330 Emerald Shore Drive, Riverview, FL 33579, United States of America",
    latitude: "27.8209348",
    longitude: "-82.31791185",
  },
  {
    id: 1103,
    address:
      "15750 Bainebridge Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.52137299",
    longitude: "-81.64644141",
  },
  {
    id: 1104,
    address:
      "1922 Altavista Circle, Lakeland, FL 33810, United States of America",
    latitude: "28.09722574",
    longitude: "-81.99378504",
  },
  {
    id: 1105,
    address:
      "2377 Snapdragon Drive NW, Palm Bay, FL 32907, United States of America",
    latitude: "28.000359",
    longitude: "-80.734338",
  },
  {
    id: 1106,
    address:
      "3151 Watergrass Street, West Melbourne, FL 32904, United States of America",
    latitude: "28.04898144",
    longitude: "-80.68196537",
  },
  {
    id: 1107,
    address:
      "129 Grande Belfly Way, Daytona Beach, FL 32124, United States of America",
    latitude: "29.172214",
    longitude: "-81.100071",
  },
  {
    id: 1108,
    address:
      "14616 Spotted Sandpiper Boulevard, Winter Garden, FL 34787, United States of America",
    latitude: "28.44660071",
    longitude: "-81.60510584",
  },
  {
    id: 1109,
    address: "14894 Fells Lane, Orlando, FL 32827, United States of America",
    latitude: "28.35076722",
    longitude: "-81.23967696",
  },
  {
    id: 1110,
    address:
      "16651 Myrtle Sand Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.70810425",
    longitude: "-82.33402386",
  },
  {
    id: 1111,
    address:
      "2438 Hastings Boulevard, Clermont, FL 34711, United States of America",
    latitude: "28.53798662",
    longitude: "-81.72887493",
  },
  {
    id: 1112,
    address:
      "4615 Plantation Oaks Boulevard, Orange Park, FL 32065, United States of America",
    latitude: "30.178919",
    longitude: "-81.859103",
  },
  {
    id: 1113,
    address:
      "6921 Old Benton Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.7765544",
    longitude: "-82.38204125",
  },
  {
    id: 1114,
    address:
      "7501 Sea Lilly Court, Apollo Beach, FL 33572, United States of America",
    latitude: "27.768596",
    longitude: "-82.369718",
  },
  {
    id: 1115,
    address:
      "4671 Camp Creek Lane, Orange Park, FL 32065, United States of America",
    latitude: "30.144489",
    longitude: "-81.861814",
  },
  {
    id: 1116,
    address:
      "10014 Crested Fringe Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84952247",
    longitude: "-82.34206847",
  },
  {
    id: 1117,
    address:
      "10274 Magnolia Hills Drive, Jacksonville, FL 32210, United States of America",
    latitude: "30.25112502",
    longitude: "-81.8308382",
  },
  {
    id: 1118,
    address:
      "2824 Northeast 43rd Road, Ocala, FL 34470, United States of America",
    latitude: "29.21568765",
    longitude: "-82.07441531",
  },
  {
    id: 1119,
    address:
      "6057 Merrifield Drive, Pasco County, FL 33541, United States of America",
    latitude: "28.24694123",
    longitude: "-82.23835668",
  },
  {
    id: 1120,
    address:
      "673 Egret Place Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.5343425",
    longitude: "-81.6088901",
  },
  {
    id: 1121,
    address: "351 Paul Point, Lake Mary, FL 32746, United States of America",
    latitude: "28.763772",
    longitude: "-81.351426",
  },
  {
    id: 1122,
    address: "4228 Adelaar Drive, Tatum, FL 34240, United States of America",
    latitude: "27.32300768",
    longitude: "-82.42070845",
  },
  {
    id: 1123,
    address:
      "4698 Alligator Flag Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.05026994",
    longitude: "-80.69176378",
  },
  {
    id: 1124,
    address:
      "6303 Yellow Buckeye Drive, Riverview, FL 33578, United States of America",
    latitude: "27.89103044",
    longitude: "-82.36061133",
  },
  {
    id: 1125,
    address:
      "446 Stately Shoals Trail, Nocatee, FL 32081, United States of America",
    latitude: "30.094105",
    longitude: "-81.4208505",
  },
  {
    id: 1126,
    address:
      "9562 Abby Glen Circle, Jacksonville, FL 32257, United States of America",
    latitude: "30.2043595",
    longitude: "-81.5916484",
  },
  {
    id: 1127,
    address:
      "1447 Coopers Hawk Way, Middleburg, FL 32068, United States of America",
    latitude: "30.1359352",
    longitude: "-81.86178489",
  },
  {
    id: 1128,
    address:
      "5060 Palmetto Park Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.48997066",
    longitude: "-81.60902112",
  },
  {
    id: 1129,
    address: "5926 Anise Drive, Sarasota, FL 34238, United States of America",
    latitude: "27.26287361",
    longitude: "-82.44986136",
  },
  {
    id: 1130,
    address:
      "677 Seven Oaks Boulevard, Winter Springs, FL 32708, United States of America",
    latitude: "28.70833086",
    longitude: "-81.32272814",
  },
  {
    id: 1131,
    address:
      "97054 Huntington Court, Yulee, FL 32097, United States of America",
    latitude: "30.682349",
    longitude: "-81.54842",
  },
  {
    id: 1132,
    address:
      "1015 SW 243rd Terrace, Newberry, FL 32669, United States of America",
    latitude: "29.640906",
    longitude: "-82.599669",
  },
  {
    id: 1133,
    address:
      "1141 Ketzal Drive, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.17488398",
    longitude: "-82.60469501",
  },
  {
    id: 1134,
    address:
      "1160 Dillard Drive SE, Palm Bay, FL 32909, United States of America",
    latitude: "27.931056",
    longitude: "-80.655682",
  },
  {
    id: 1135,
    address: "11664 Mystery Lane, Orlando, FL 32832, United States of America",
    latitude: "28.42427063",
    longitude: "-81.21619759",
  },
  {
    id: 1136,
    address:
      "304 Blackthorn Place, Jacksonville, FL 32259, United States of America",
    latitude: "30.086193",
    longitude: "-81.597381",
  },
  {
    id: 1137,
    address:
      "714 2nd Street, Neptune Beach, FL 32266, United States of America",
    latitude: "30.3187228",
    longitude: "-81.39672",
  },
  {
    id: 1138,
    address:
      "11463 SW 36th Road, Gainesville, FL 32608, United States of America",
    latitude: "29.621253",
    longitude: "-82.465087",
  },
  {
    id: 1139,
    address:
      "13414 Youngdale Place, Riverview, FL 33579, United States of America",
    latitude: "27.79436649",
    longitude: "-82.27973322",
  },
  {
    id: 1140,
    address:
      "37 Trellis Bay Drive, St. Augustine, FL 32092, United States of America",
    latitude: "30.03268945",
    longitude: "-81.50249187",
  },
  {
    id: 1141,
    address:
      "8173 De Haven Street, Orlando, FL 32832, United States of America",
    latitude: "28.4428097",
    longitude: "-81.23964375",
  },
  {
    id: 1142,
    address:
      "8371 Nandina Drive, Sarasota County, FL 34240, United States of America",
    latitude: "27.3132436",
    longitude: "-82.39989064",
  },
  {
    id: 1143,
    address:
      "8900 Devon Pines Drive, Jacksonville, FL 32211, United States of America",
    latitude: "30.333713",
    longitude: "-81.55731",
  },
  {
    id: 1144,
    address:
      "14114 Waterford Creek Boulevard, Orlando, FL 32828, United States of America",
    latitude: "28.56266031",
    longitude: "-81.18034474",
  },
  {
    id: 1145,
    address:
      "14143 Covert Green Place, Riverview, FL 33579, United States of America",
    latitude: "27.7757442",
    longitude: "-82.31896074",
  },
  {
    id: 1146,
    address:
      "15422 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50191879",
    longitude: "-82.38557842",
  },
  {
    id: 1147,
    address:
      "1805 Hawks View Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72960882",
    longitude: "-82.40943481",
  },
  {
    id: 1148,
    address:
      "3612 Kearsney Abbey Circle, Dover, FL 33527, United States of America",
    latitude: "27.93448372",
    longitude: "-82.21838057",
  },
  {
    id: 1149,
    address:
      "76 Mission Woods Way, St. Augustine, FL 32084, United States of America",
    latitude: "29.9135694",
    longitude: "-81.3614358",
  },
  {
    id: 1150,
    address:
      "50 Wayside Lane, Jacksonville, FL 32081, United States of America",
    latitude: "30.1206136",
    longitude: "-81.4463439",
  },
  {
    id: 1151,
    address:
      "14650 Bahama Swallow Boulevard, Winter Garden, FL 34787, United States of America",
    latitude: "28.44819912",
    longitude: "-81.60556792",
  },
  {
    id: 1152,
    address:
      "14667 Garden Gate Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1126969",
    longitude: "-81.5210153",
  },
  {
    id: 1153,
    address:
      "148 Cascade Bend Drive, Amanda, FL 33570, United States of America",
    latitude: "27.69226081",
    longitude: "-82.44140433",
  },
  {
    id: 1154,
    address:
      "377 Willow Winds Parkway, Saint Johns County, FL 32259, United States of America",
    latitude: "30.07929931",
    longitude: "-81.55527392",
  },
  {
    id: 1155,
    address:
      "5745 Liatris Circle, Sarasota County, FL 34238, United States of America",
    latitude: "27.2577436",
    longitude: "-82.45111147",
  },
  {
    id: 1156,
    address:
      "7882 Bucks Run, Collier County, FL 34120, United States of America",
    latitude: "26.24651535",
    longitude: "-81.68049055",
  },
  {
    id: 1157,
    address:
      "9031 Devon Pines Drive, Jacksonville, FL 32211, United States of America",
    latitude: "30.335543",
    longitude: "-81.558738",
  },
  {
    id: 1158,
    address:
      "10234 Celtic Ash Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76868108",
    longitude: "-82.33931766",
  },
  {
    id: 1159,
    address:
      "1132 Rymers Switch Lane, Friendswood, TX 77546, United States of America",
    latitude: "29.485941",
    longitude: "-95.185491",
  },
  {
    id: 1160,
    address:
      "11830 Frost Aster Drive, Riverview, FL 33579, United States of America",
    latitude: "27.80023504",
    longitude: "-82.2967281",
  },
  {
    id: 1161,
    address:
      "4621 Greenbrook Court, Jacksonville, FL 32257, United States of America",
    latitude: "30.1974551",
    longitude: "-81.5938091",
  },
  {
    id: 1162,
    address:
      "4667 Camp Creek Lane, Orange Park, FL 32065, United States of America",
    latitude: "30.144451",
    longitude: "-81.86158",
  },
  {
    id: 1163,
    address:
      "4721 Grassendale Terrace, Sanford, FL 32771, United States of America",
    latitude: "28.81856999",
    longitude: "-81.33708011",
  },
  {
    id: 1164,
    address:
      "6473 Seasound Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77671181",
    longitude: "-82.36877",
  },
  {
    id: 1165,
    address:
      "947 Ginnie Way, Winter Springs, FL 32708, United States of America",
    latitude: "28.699804",
    longitude: "-81.257678",
  },
  {
    id: 1166,
    address:
      "10511 55th Court East, Bradenton, FL 34219, United States of America",
    latitude: "27.56185397",
    longitude: "-82.4734914",
  },
  {
    id: 1167,
    address:
      "109 Corey Cay Avenue, Saint Johns County, FL 32092, United States of America",
    latitude: "30.04077777",
    longitude: "-81.53221618",
  },
  {
    id: 1168,
    address:
      "136 Prince Albert Avenue, Fruit Cove, FL 32259, United States of America",
    latitude: "30.09359643",
    longitude: "-81.58377132",
  },
  {
    id: 1169,
    address: "18687 Deer Tracks Loop, Lutz, FL 33558, United States of America",
    latitude: "28.1819835",
    longitude: "-82.503166",
  },
  {
    id: 1170,
    address:
      "2291 Bolzano Court, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.18989182",
    longitude: "-82.42072009",
  },
  {
    id: 1171,
    address:
      "30 Autumn Bliss Drive, Fruit Cove, FL 32259, United States of America",
    latitude: "30.06142973",
    longitude: "-81.62318926",
  },
  {
    id: 1172,
    address:
      "309 Silver Glen Avenue, St. Augustine, FL 32092, United States of America",
    latitude: "29.96903315",
    longitude: "-81.52816685",
  },
  {
    id: 1173,
    address:
      "831 Dillard Drive SE, Palm Bay, FL 32909, United States of America",
    latitude: "27.931181",
    longitude: "-80.660916",
  },
  {
    id: 1174,
    address:
      "3811 91st Avenue East, Bradenton, FL 34219, United States of America",
    latitude: "27.54716391",
    longitude: "-82.46967353",
  },
  {
    id: 1175,
    address:
      "10002 Stockbridge Street, Clermont, FL 34711, United States of America",
    latitude: "28.49267675",
    longitude: "-81.78710683",
  },
  {
    id: 1176,
    address:
      "11548 Weston Course Loop, Riverview, FL 33579, United States of America",
    latitude: "27.8091569",
    longitude: "-82.3122768",
  },
  {
    id: 1177,
    address:
      "2427 Hastings Boulevard, Clermont, FL 34711, United States of America",
    latitude: "28.538218",
    longitude: "-81.73035237",
  },
  {
    id: 1178,
    address:
      "11403 Holmbridge Lane, Riverview, FL 33579, United States of America",
    latitude: "27.8133748",
    longitude: "-82.31467945",
  },
  {
    id: 1179,
    address:
      "120 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07794624",
    longitude: "-81.52472717",
  },
  {
    id: 1180,
    address:
      "13731 Artesa Bell Drive, Riverview, FL 33579, United States of America",
    latitude: "27.78293015",
    longitude: "-82.30982012",
  },
  {
    id: 1181,
    address:
      "2587 Murray Pass, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.19676449",
    longitude: "-82.59876332",
  },
  {
    id: 1182,
    address: "1124 Oakcrest, Brandon, FL 33510, United States of America",
    latitude: "27.95795505",
    longitude: "-82.30558409",
  },
  {
    id: 1183,
    address:
      "5209 Sanderling Ridge Drive, Lithia, FL 33547, United States of America",
    latitude: "27.8617621",
    longitude: "-82.22264095",
  },
  {
    id: 1184,
    address: "5555 57th Way, Vero Beach, FL 32967, United States of America",
    latitude: "27.696344",
    longitude: "-80.444952",
  },
  {
    id: 1185,
    address:
      "124 Cathedral Mountain Pass, Georgetown, TX 78633, United States of America",
    latitude: "30.7200367",
    longitude: "-97.7341339",
  },
  {
    id: 1186,
    address: "255 Domus Lane, Casselberry, FL 32707, United States of America",
    latitude: "28.67765",
    longitude: "-81.29663",
  },
  {
    id: 1187,
    address:
      "10350 Atwater Bay Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.416543",
    longitude: "-81.641866",
  },
  {
    id: 1188,
    address:
      "10224 Celtic Ash Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76867921",
    longitude: "-82.3393987",
  },
  {
    id: 1189,
    address:
      "10236 Celtic Ash Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.76868145",
    longitude: "-82.33930146",
  },
  {
    id: 1190,
    address:
      "11904 Quack Grass Court, Riverview, FL 33579, United States of America",
    latitude: "27.795415",
    longitude: "-82.28721267",
  },
  {
    id: 1191,
    address:
      "11950 Wynnfield Lakes Circle, Jacksonville, FL 32246, United States of America",
    latitude: "30.3073896",
    longitude: "-81.4967765",
  },
  {
    id: 1192,
    address:
      "4230 Roberta Drive, Winter Haven, FL 33881, United States of America",
    latitude: "28.04174494",
    longitude: "-81.7005622",
  },
  {
    id: 1193,
    address:
      "4764 Grace Farms Lane, Jacksonville, FL 32258, United States of America",
    latitude: "30.1474411",
    longitude: "-81.58371446",
  },
  {
    id: 1194,
    address:
      "615 Majestic Eagle Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.099731",
    longitude: "-81.418525",
  },
  {
    id: 1195,
    address:
      "11808 Fitchwood Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1589616",
    longitude: "-81.580798",
  },
  {
    id: 1196,
    address:
      "418 Kickapoo Creek Lane, Georgetown, TX 78633, United States of America",
    latitude: "30.72612535",
    longitude: "-97.76026932",
  },
  {
    id: 1197,
    address:
      "10268 Magnolia Hills Drive, Jacksonville, FL 32210, United States of America",
    latitude: "30.25112773",
    longitude: "-81.83074875",
  },
  {
    id: 1198,
    address:
      "1063 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04389451",
    longitude: "-80.68862299",
  },
  {
    id: 1199,
    address: "2436 Riviera Lane, Minneola, FL 34715, United States of America",
    latitude: "28.58741353",
    longitude: "-81.73380543",
  },
  {
    id: 1200,
    address:
      "260 Wild Rose Drive, Fruit Cove, FL 32259, United States of America",
    latitude: "30.05988399",
    longitude: "-81.61961038",
  },
  {
    id: 1201,
    address:
      "3000 Northeast 43rd Road, Ocala, FL 34470, United States of America",
    latitude: "29.21707102",
    longitude: "-82.0758663",
  },
  {
    id: 1202,
    address:
      "604 Washington Way, Haines City, FL 33844, United States of America",
    latitude: "28.129924",
    longitude: "-81.61718144",
  },
  {
    id: 1203,
    address:
      "4317 Fieldview Circle, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.21975177",
    longitude: "-82.2554493",
  },
  {
    id: 1204,
    address:
      "1177 Ballard Ridge Road, Jacksonville, FL 32211, United States of America",
    latitude: "30.33300756",
    longitude: "-81.55646525",
  },
  {
    id: 1205,
    address: "1416 Reklaw Lane, Leander, TX 78641, United States of America",
    latitude: "30.55406359",
    longitude: "-97.8657022",
  },
  {
    id: 1206,
    address:
      "14493 Garden Gate Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1154397",
    longitude: "-81.5234776",
  },
  {
    id: 1207,
    address: "24406 SW 11th Road, Newberry, FL 32669, United States of America",
    latitude: "29.64068",
    longitude: "-82.600455",
  },
  {
    id: 1208,
    address:
      "3641 Maidencain Street, Clermont, FL 34714, United States of America",
    latitude: "28.4010464",
    longitude: "-81.683957",
  },
  {
    id: 1209,
    address:
      "6512 Salt Creek Avenue, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77406195",
    longitude: "-82.3822401",
  },
  {
    id: 1210,
    address:
      "7051 Rosabella Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1178066",
    longitude: "-81.524868",
  },
  {
    id: 1211,
    address:
      "7422 61st Street East, Bradenton, FL 34221, United States of America",
    latitude: "27.56940643",
    longitude: "-82.4886888",
  },
  {
    id: 1212,
    address:
      "11247 Red Bluff Lane, Fort Myers, FL 33912, United States of America",
    latitude: "26.58310965",
    longitude: "-81.80104051",
  },
  {
    id: 1213,
    address:
      "6335 Manuscript Street, Horizon West, FL 34787, United States of America",
    latitude: "28.47150745",
    longitude: "-81.6162507",
  },
  {
    id: 1214,
    address:
      "10218 Count Fleet Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.770848",
    longitude: "-82.339503",
  },
  {
    id: 1215,
    address:
      "12130 Barnsley Reserve Place, Gibsonton, FL 33534, United States of America",
    latitude: "27.82192915",
    longitude: "-82.36826073",
  },
  {
    id: 1216,
    address:
      "2328 Dovesong Trace Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72477145",
    longitude: "-82.39855591",
  },
  {
    id: 1217,
    address:
      "3435 Berkshire Woods Terrace, Deltona, FL 32725, United States of America",
    latitude: "28.9585039",
    longitude: "-81.2449471",
  },
  {
    id: 1218,
    address:
      "3840 North Trapani Drive, St. Augustine, FL 32092, United States of America",
    latitude: "29.95783254",
    longitude: "-81.48113128",
  },
  {
    id: 1219,
    address:
      "5374 Buckthorn Street, Orlando, FL 32811, United States of America",
    latitude: "28.4862242",
    longitude: "-81.45051624",
  },
  {
    id: 1220,
    address: "632 Bishop Bay Loop, Apopka, FL 32712, United States of America",
    latitude: "28.7121924",
    longitude: "-81.5249331",
  },
  {
    id: 1221,
    address:
      "7828 Tuscan Bay Circle, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.27045137",
    longitude: "-82.29828366",
  },
  {
    id: 1222,
    address:
      "1216 Harbour Blue Street, Ruskin, FL 33570, United States of America",
    latitude: "27.72882229",
    longitude: "-82.40719931",
  },
  {
    id: 1223,
    address:
      "2025 Arbor Mist Drive, Brandon, FL 33510, United States of America",
    latitude: "27.95284902",
    longitude: "-82.31717916",
  },
  {
    id: 1224,
    address:
      "3230 Hidden Meadows Court, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.03333847",
    longitude: "-81.7819846",
  },
  {
    id: 1225,
    address:
      "4078 Lindever Lane, Bradenton, FL 34221, United States of America",
    latitude: "27.54936424",
    longitude: "-82.52280443",
  },
  {
    id: 1226,
    address:
      "920 Swiss Pointe Lane, Rockledge, FL 32955, United States of America",
    latitude: "28.310922",
    longitude: "-80.742397",
  },
  {
    id: 1227,
    address:
      "11012 Spring Point Circle, Riverview, FL 33579, United States of America",
    latitude: "27.821172",
    longitude: "-82.321813",
  },
  {
    id: 1228,
    address:
      "11080 Spring Point Circle, Riverview, FL 33579, United States of America",
    latitude: "27.818438",
    longitude: "-82.318921",
  },
  {
    id: 1229,
    address:
      "1585 Auburn Hills Court, Tavares, FL 32278, United States of America",
    latitude: "28.8149879",
    longitude: "-81.711162",
  },
  {
    id: 1230,
    address: "3517 Pelock Drive, Apopka, FL 32703, United States of America",
    latitude: "28.6260174",
    longitude: "-81.5314938",
  },
  {
    id: 1231,
    address:
      "4913 Grassy Knoll Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7533817",
    longitude: "-81.7658009",
  },
  {
    id: 1232,
    address:
      "8953 Devon Pines Drive, Jacksonville, FL 32211-, United States of America",
    latitude: "30.333817",
    longitude: "-81.558894",
  },
  {
    id: 1233,
    address: "5909 Croydon Court, Viera, FL 32940, United States of America",
    latitude: "28.25728433",
    longitude: "-80.75276694",
  },
  {
    id: 1234,
    address:
      "959 Maypole Drive, South Apopka, FL 32703, United States of America",
    latitude: "28.65001377",
    longitude: "-81.52378597",
  },
  {
    id: 1235,
    address:
      "10910 Dunscore Cottage Way, Wimauma, FL 33598, United States of America",
    latitude: "27.75901319",
    longitude: "-82.32640084",
  },
  {
    id: 1236,
    address:
      "11507 Mansfield Point Drive, Riverview, FL 33569, United States of America",
    latitude: "27.831319",
    longitude: "-82.325642",
  },
  {
    id: 1237,
    address:
      "12646 Julington Oaks Drive, Jacksonville, FL 32223, United States of America",
    latitude: "30.1428546",
    longitude: "-81.61616075",
  },
  {
    id: 1238,
    address:
      "17013 Peaceful Valley Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.702282",
    longitude: "-82.33791246",
  },
  {
    id: 1239,
    address:
      "2300 Evening Breeze Lane, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.055288",
    longitude: "-81.805075",
  },
  {
    id: 1240,
    address:
      "4206 Little Gap Loop, Bradenton, FL 34222, United States of America",
    latitude: "27.55001402",
    longitude: "-82.50670777",
  },
  {
    id: 1241,
    address:
      "1137 Hawk Watch Circle, St. Augustine, FL 32092, United States of America",
    latitude: "29.92562459",
    longitude: "-81.42961132",
  },
  {
    id: 1242,
    address:
      "10611 Standing Stone Drive, Riverview, FL 33598, United States of America",
    latitude: "27.76498208",
    longitude: "-82.32236552",
  },
  {
    id: 1243,
    address:
      "15703 Tisons bluff road, Jacksonville, FL 32218, United States of America",
    latitude: "30.53366679",
    longitude: "-81.61446655",
  },
  {
    id: 1244,
    address:
      "2467 Gratia Place, Casselberry, FL 32707, United States of America",
    latitude: "28.678544",
    longitude: "-81.295549",
  },
  {
    id: 1245,
    address:
      "523 Crystal Reserve Court, Lake Mary, FL 32746, United States of America",
    latitude: "28.758835",
    longitude: "-81.337908",
  },
  {
    id: 1246,
    address:
      "6514 Salt Creek Avenue, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77408779",
    longitude: "-82.38225979",
  },
  {
    id: 1247,
    address:
      "7058 Spring Park Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.44113671",
    longitude: "-81.60699239",
  },
  {
    id: 1248,
    address:
      "14025 Carson Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.2749625",
    longitude: "-81.4447678",
  },
  {
    id: 1249,
    address:
      "14494 Serenoa Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1157018",
    longitude: "-81.5233308",
  },
  {
    id: 1250,
    address:
      "16203 Wind View Lane, Winter Garden, FL 34787, United States of America",
    latitude: "28.43726541",
    longitude: "-81.64135317",
  },
  {
    id: 1251,
    address:
      "18375 Scunthorpe Lane, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.20982523",
    longitude: "-82.51257163",
  },
  {
    id: 1252,
    address:
      "3233 Hidden Meadows Court, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.03315057",
    longitude: "-81.78179949",
  },
  {
    id: 1253,
    address:
      "20291 Cypress Shadows Boulevard, The Preserve at Corkscrew, FL 33928, United States of America",
    latitude: "26.43969632",
    longitude: "-81.7327856",
  },
  {
    id: 1254,
    address:
      "10515 Sleepy Orange Court, Riverview, FL 33578, United States of America",
    latitude: "27.8482316",
    longitude: "-82.32994611",
  },
  {
    id: 1255,
    address:
      "151 Plaza del Rio Drive, Saint Augustine, FL 32084, United States of America",
    latitude: "29.9302108",
    longitude: "-81.34013383",
  },
  {
    id: 1256,
    address:
      "20218 Autumn Fern Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.164553",
    longitude: "-82.328749",
  },
  {
    id: 1257,
    address:
      "208 English Heritage Place, Dover, FL 33527, United States of America",
    latitude: "27.93563908",
    longitude: "-82.21707031",
  },
  {
    id: 1258,
    address: "520 Keyhold Loop, Apopka, FL 32712, United States of America",
    latitude: "28.7110377",
    longitude: "-81.522652",
  },
  {
    id: 1259,
    address:
      "847 Jefferson Boulevard, Haines City, FL 33844, United States of America",
    latitude: "28.1296986",
    longitude: "-81.62088738",
  },
  {
    id: 1260,
    address:
      "140 Concave Lane, St. Augustine, FL 32095, United States of America",
    latitude: "30.0767907",
    longitude: "-81.47016311",
  },
  {
    id: 1261,
    address: "6451 Devesta Loop, Bradenton, FL 34221, United States of America",
    latitude: "27.57300706",
    longitude: "-82.5071928",
  },
  {
    id: 1262,
    address:
      "1291 Dillard Drive SE, Palm Bay, FL 32909, United States of America",
    latitude: "27.932691",
    longitude: "-80.654194",
  },
  {
    id: 1263,
    address:
      "13843 Harlowton Avenue, Jacksonville, FL 32256, United States of America",
    latitude: "30.1305133",
    longitude: "-81.4871234",
  },
  {
    id: 1264,
    address:
      "14815 Trinity Fall Way, Bradenton, FL 34212, United States of America",
    latitude: "27.5064444",
    longitude: "-82.39221607",
  },
  {
    id: 1265,
    address:
      "2605 Torino Way, St. Augustine, FL 32092, United States of America",
    latitude: "29.95040711",
    longitude: "-81.48386775",
  },
  {
    id: 1266,
    address:
      "30 Myrtle Brook Bend, Nocatee, FL 32081, United States of America",
    latitude: "30.1008465",
    longitude: "-81.42492772",
  },
  {
    id: 1267,
    address:
      "3813 Broadlands Lane, Meadow Woods, FL 32824, United States of America",
    latitude: "28.34986818",
    longitude: "-81.32353453",
  },
  {
    id: 1268,
    address:
      "7696 Tuscan Bay Circle, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26937401",
    longitude: "-82.29966208",
  },
  {
    id: 1269,
    address:
      "11934 Grand Kempston Drive, Gibsonton, FL 33534, United States of America",
    latitude: "27.82675155",
    longitude: "-82.36551345",
  },
  {
    id: 1270,
    address:
      "6422 Yellow Buckeye Drive, Riverview, FL 33578, United States of America",
    latitude: "27.88963732",
    longitude: "-82.36149782",
  },
  {
    id: 1271,
    address:
      "7025 Azalea Grove Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1141144",
    longitude: "-81.5211099",
  },
  {
    id: 1272,
    address:
      "10269 Magnolia Ridge Road, Jacksonville, FL 32210, United States of America",
    latitude: "30.25241489",
    longitude: "-81.8303069",
  },
  {
    id: 1273,
    address:
      "10549 Medford Lake Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84375166",
    longitude: "-82.33048197",
  },
  {
    id: 1274,
    address:
      "2315 Gratia Place, Casselberry, FL 32707, United States of America",
    latitude: "28.676013",
    longitude: "-81.297718",
  },
  {
    id: 1275,
    address:
      "315 Enrede Lane, Saint Augustine, FL 32095, United States of America",
    latitude: "30.04341",
    longitude: "-81.39326414",
  },
  {
    id: 1276,
    address: "3965 Baja Drive, Saint Cloud, FL 34772, United States of America",
    latitude: "28.18368984",
    longitude: "-81.28047612",
  },
  {
    id: 1277,
    address:
      "11842 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18637455",
    longitude: "-82.61844543",
  },
  {
    id: 1278,
    address:
      "141 Tuskawilla Road, Winter Springs, FL 32708, United States of America",
    latitude: "28.69942",
    longitude: "-81.26085",
  },
  {
    id: 1279,
    address:
      "2920 Casabella Drive, Buenaventura Lakes, FL 34744, United States of America",
    latitude: "28.3363701",
    longitude: "-81.32716401",
  },
  {
    id: 1280,
    address:
      "3127 Steeple Pine Court, Middleburg, FL 32068, United States of America",
    latitude: "30.1031209",
    longitude: "-81.79305599",
  },
  {
    id: 1281,
    address: "7476 Aguila Drive, Tatum, FL 34240, United States of America",
    latitude: "27.3212954",
    longitude: "-82.42293915",
  },
  {
    id: 1282,
    address:
      "8715 Hinsdale Heights Drive, Polk City, FL 33868, United States of America",
    latitude: "28.15955",
    longitude: "-81.85596",
  },
  {
    id: 1283,
    address:
      "549 Amber Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.49393262",
    longitude: "-81.60891594",
  },
  {
    id: 1284,
    address:
      "1681 Fenton Avenue, Jacksonville, FL 32259, United States of America",
    latitude: "30.0965868",
    longitude: "-81.55143809",
  },
  {
    id: 1285,
    address:
      "10291 Oxford Lakes Drive, Jacksonville, FL 32257, United States of America",
    latitude: "30.1912597",
    longitude: "-81.59768956",
  },
  {
    id: 1286,
    address:
      "2445 Carnation Court, North Port, FL 34289, United States of America",
    latitude: "27.076407",
    longitude: "-82.122942",
  },
  {
    id: 1287,
    address:
      "2602 Waterline Street, Buenaventura Lakes, FL 34743, United States of America",
    latitude: "28.3387247",
    longitude: "-81.33789351",
  },
  {
    id: 1288,
    address:
      "393 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07487958",
    longitude: "-81.52502266",
  },
  {
    id: 1289,
    address: "576 Keyhold Loop, Apopka, FL 32712, United States of America",
    latitude: "28.7125924",
    longitude: "-81.521731",
  },
  {
    id: 1290,
    address:
      "7024 Old Benton Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.77748483",
    longitude: "-82.38048899",
  },
  {
    id: 1291,
    address: "Riverview, FL, United States of America",
    latitude: "27.820475",
    longitude: "-82.303571",
  },
  {
    id: 1292,
    address:
      "15794 Rachel Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.52316495",
    longitude: "-81.64595508",
  },
  {
    id: 1293,
    address: "24497 SW 8th Place, Newberry, FL 32669, United States of America",
    latitude: "29.64151",
    longitude: "-82.601469",
  },
  {
    id: 1294,
    address:
      "5066 Magnolia Valley Drive, Jacksonville, FL 32210, United States of America",
    latitude: "30.25250169",
    longitude: "-81.83292155",
  },
  {
    id: 1295,
    address:
      "11515 Warren Oaks Place, Riverview, FL 33578, United States of America",
    latitude: "27.8319902",
    longitude: "-82.33152683",
  },
  {
    id: 1296,
    address:
      "12118 Creek Preserve Drive, Riverview, FL 33579, United States of America",
    latitude: "27.821502",
    longitude: "-82.264893",
  },
  {
    id: 1297,
    address:
      "15726 Bainebridge Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.5207628",
    longitude: "-81.64634276",
  },
  {
    id: 1298,
    address:
      "2318 Richwood Pike Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72937905",
    longitude: "-82.40336801",
  },
  {
    id: 1299,
    address:
      "5402 Cartagena Drive, Sarasota County, FL 34233, United States of America",
    latitude: "27.27341296",
    longitude: "-82.46160029",
  },
  {
    id: 1300,
    address:
      "149 Sutherland Drive Southwest, Palm Bay, FL 32908, United States of America",
    latitude: "27.99750544",
    longitude: "-80.68264807",
  },
  {
    id: 1301,
    address:
      "15770 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50287947",
    longitude: "-82.38113857",
  },
  {
    id: 1302,
    address:
      "2607 Gwynhurst Boulevard, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.19502584",
    longitude: "-82.28676394",
  },
  {
    id: 1303,
    address:
      "2671 Cypress Tree Trail, Saint Cloud, FL 34772, United States of America",
    latitude: "28.21637823",
    longitude: "-81.29897211",
  },
  {
    id: 1304,
    address:
      "11056 Little Blue Heron Drive, Riverview, FL 33579, United States of America",
    latitude: "27.77974783",
    longitude: "-82.32431626",
  },
  {
    id: 1305,
    address:
      "15410 Dakota Sky Place, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.745903",
    longitude: "-82.36391725",
  },
  {
    id: 1306,
    address:
      "10203 Count Fleet Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.77046147",
    longitude: "-82.34120304",
  },
  {
    id: 1307,
    address:
      "10519 Texas Redbud Court, Cypress, TX 77433, United States of America",
    latitude: "29.9324372",
    longitude: "-95.68893796",
  },
  {
    id: 1308,
    address:
      "17027 Peaceful Valley Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.701857",
    longitude: "-82.3372003",
  },
  {
    id: 1309,
    address:
      "1706 Berkshire Circle Southwest, Vero Beach, FL 32968, United States of America",
    latitude: "27.57108256",
    longitude: "-80.4189513",
  },
  {
    id: 1310,
    address:
      "3537 Vega Creek Drive, Saint Cloud, FL 34772, United States of America",
    latitude: "28.18883737",
    longitude: "-81.28455997",
  },
  {
    id: 1311,
    address:
      "4876 Grassy Knoll Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7543844",
    longitude: "-81.7659331",
  },
  {
    id: 1312,
    address:
      "652 Charter Oaks Boulevard, Orange Park, FL 32065, United States of America",
    latitude: "30.18663063",
    longitude: "-81.84140397",
  },
  {
    id: 1313,
    address:
      "7029 Bartram Cove Parkway, Jacksonville, FL 32258, United States of America",
    latitude: "30.1081863",
    longitude: "-81.5205572",
  },
  {
    id: 1314,
    address:
      "11150 Abaco Island Avenue, Riverview, FL 33579, United States of America",
    latitude: "27.820028",
    longitude: "-82.322088",
  },
  {
    id: 1315,
    address:
      "11886 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18642",
    longitude: "-82.61763225",
  },
  {
    id: 1316,
    address:
      "1416 Tanager Court, Timberwood Park, TX 78260, United States of America",
    latitude: "29.68536124",
    longitude: "-98.46941961",
  },
  {
    id: 1317,
    address:
      "1728 Brassie Court, Kissimmee, FL 34746, United States of America",
    latitude: "28.25949547",
    longitude: "-81.41848976",
  },
  {
    id: 1318,
    address:
      "1815 Redmond Brook Lane, Ruskin, FL 33570, United States of America",
    latitude: "27.728956",
    longitude: "-82.409526",
  },
  {
    id: 1319,
    address:
      "545 White Coral Lane, New Smyrna Beach, FL 32168, United States of America",
    latitude: "29.0266775",
    longitude: "-80.9782218",
  },
  {
    id: 1320,
    address:
      "5803 Caldera Ridge Drive, Lithia, FL 33547, United States of America",
    latitude: "27.849647",
    longitude: "-82.252835",
  },
  {
    id: 1321,
    address: "99 Beam Lane, St. Augustine, FL 32095, United States of America",
    latitude: "30.07609224",
    longitude: "-81.46970238",
  },
  {
    id: 1322,
    address:
      "567 Blue Cypress Drive, Groveland, FL 34736, United States of America",
    latitude: "28.56013617",
    longitude: "-81.78324606",
  },
  {
    id: 1323,
    address:
      "12172 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18614621",
    longitude: "-82.61300197",
  },
  {
    id: 1324,
    address:
      "13 Privado Court, St. Augustine, FL 32095, United States of America",
    latitude: "30.03301491",
    longitude: "-81.39003431",
  },
  {
    id: 1325,
    address:
      "1405 Westbury Drive, Clermont, FL 34711, United States of America",
    latitude: "28.5360955",
    longitude: "-81.7310666",
  },
  {
    id: 1326,
    address: "54 Hiller Lane, Nocatee, FL 32081, United States of America",
    latitude: "30.10347092",
    longitude: "-81.45254417",
  },
  {
    id: 1327,
    address:
      "652 Black Eagle Drive, Groveland, FL 34736, United States of America",
    latitude: "28.58543027",
    longitude: "-81.80822642",
  },
  {
    id: 1328,
    address:
      "13404 Youngdale Place, Riverview, FL 33579, United States of America",
    latitude: "27.79450902",
    longitude: "-82.27973042",
  },
  {
    id: 1329,
    address:
      "14523 Garden Gate Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1152628",
    longitude: "-81.5228438",
  },
  {
    id: 1330,
    address:
      "14938 Bartram Creek Boulevard, Jacksonville, FL 32259, United States of America",
    latitude: "30.1069186",
    longitude: "-81.5307236",
  },
  {
    id: 1331,
    address:
      "172 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07772315",
    longitude: "-81.52534972",
  },
  {
    id: 1332,
    address:
      "17991 Atherstone Trail, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.20835593",
    longitude: "-82.51745647",
  },
  {
    id: 1333,
    address:
      "1813 Haven Bend, All Bright Shores, FL 33613, United States of America",
    latitude: "28.091082",
    longitude: "-82.476897",
  },
  {
    id: 1334,
    address:
      "7043 Peregine Loop, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26016327",
    longitude: "-82.27933554",
  },
  {
    id: 1335,
    address:
      "7249 Somerset Pond Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.744399",
    longitude: "-82.3713866",
  },
  {
    id: 1336,
    address:
      "9167 Outlook Rock Trail, Windermere, FL 34786, United States of America",
    latitude: "28.43542109",
    longitude: "-81.55982239",
  },
  {
    id: 1337,
    address:
      "10104 Count Fleet Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.77193262",
    longitude: "-82.34260886",
  },
  {
    id: 1338,
    address:
      "3317 Westford Circle SW, Vero Beach, FL 32968, United States of America",
    latitude: "27.567994",
    longitude: "-80.421403",
  },
  {
    id: 1339,
    address:
      "3426 Kearsney Abbey Circle, Dover, FL 33527, United States of America",
    latitude: "27.934369",
    longitude: "-82.215806",
  },
  {
    id: 1340,
    address:
      "10050 Celtic Ash Drive, Apollo Beach, FL 33573, United States of America",
    latitude: "27.76366789",
    longitude: "-82.3442625",
  },
  {
    id: 1341,
    address:
      "14037 Lonecreek Avenue, Orlando, FL 32828, United States of America",
    latitude: "28.56182175",
    longitude: "-81.18050676",
  },
  {
    id: 1342,
    address:
      "2217 Eagle Talon Circle, Fleming Island, FL 32003, United States of America",
    latitude: "30.08994376",
    longitude: "-81.70528247",
  },
  {
    id: 1343,
    address:
      "27 Wayside Lane, Jacksonville, FL 32081, United States of America",
    latitude: "30.1201797",
    longitude: "-81.4459331",
  },
  {
    id: 1344,
    address:
      "3445 Manati Court, Cape Coral, FL 33909, United States of America",
    latitude: "26.71760396",
    longitude: "-81.91524519",
  },
  {
    id: 1345,
    address: "7463 Aguila Drive, Tatum, FL 34240, United States of America",
    latitude: "27.32120035",
    longitude: "-82.42261438",
  },
  {
    id: 1346,
    address:
      "725 Lake Douglas Drive, Groveland, FL 34736, United States of America",
    latitude: "28.5564578",
    longitude: "-81.8130466",
  },
  {
    id: 1347,
    address:
      "11031 Standing Stone Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.7615338",
    longitude: "-82.32260014",
  },
  {
    id: 1348,
    address:
      "2076 Nerva Road, Winter Garden, FL 34787, United States of America",
    latitude: "28.5042464",
    longitude: "-81.623187",
  },
  {
    id: 1349,
    address:
      "5642 Dornich Drive, Auburndale, FL 33823, United States of America",
    latitude: "28.146971",
    longitude: "-81.819589",
  },
  {
    id: 1350,
    address:
      "5927 Esker Falls Lane, Lithia, FL 33547, United States of America",
    latitude: "27.8495059",
    longitude: "-82.25192382",
  },
  {
    id: 1351,
    address:
      "304 Majestic Eagle Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.097143",
    longitude: "-81.42104657",
  },
  {
    id: 1352,
    address:
      "10935 Colleton River Court, Jacksonville, FL 32210, United States of America",
    latitude: "30.25518499",
    longitude: "-81.83621026",
  },
  {
    id: 1353,
    address:
      "1834 Balsam Willow Trail, Orlando, FL 32825, United States of America",
    latitude: "28.52526849",
    longitude: "-81.22024804",
  },
  {
    id: 1354,
    address:
      "32719 Summerglade Drive, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.25953009",
    longitude: "-82.27582709",
  },
  {
    id: 1355,
    address:
      "4973 Cypress Hammock, St. Cloud, FL 34771, United States of America",
    latitude: "28.30872605",
    longitude: "-81.24419489",
  },
  {
    id: 1356,
    address:
      "7247 Somerset Pond Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.7443967",
    longitude: "-82.37154095",
  },
  {
    id: 1357,
    address:
      "15404 Trinity Fall Way, Bradenton, FL 34212, United States of America",
    latitude: "27.50572193",
    longitude: "-82.38562034",
  },
  {
    id: 1358,
    address:
      "15741 High Bell Place, Bradenton, FL 34212, United States of America",
    latitude: "27.50280199",
    longitude: "-82.38159316",
  },
  {
    id: 1359,
    address:
      "8777 Eden Cove Drive, Horizon West, FL 34787, United States of America",
    latitude: "28.42581086",
    longitude: "-81.63682696",
  },
  {
    id: 1360,
    address:
      "7743 Tuscan Bay Circle, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.2701433",
    longitude: "-82.2990035",
  },
  {
    id: 1361,
    address:
      "10766 Ellison Avenue, Orlando, FL 32832, United States of America",
    latitude: "28.43089899",
    longitude: "-81.21880835",
  },
  {
    id: 1362,
    address:
      "11524 Scarlet Ibis Place, Riverview, FL 33569, United States of America",
    latitude: "27.83034154",
    longitude: "-82.30559339",
  },
  {
    id: 1363,
    address:
      "12033 Suburban Sunrise Street, Riverview, FL 33578, United States of America",
    latitude: "27.82421073",
    longitude: "-82.33195628",
  },
  {
    id: 1364,
    address:
      "16210 Dowing Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.534424",
    longitude: "-81.618904",
  },
  {
    id: 1365,
    address:
      "2096 Arden Forest Place, Fleming Island, FL 32003, United States of America",
    latitude: "30.09262681",
    longitude: "-81.71596034",
  },
  {
    id: 1366,
    address:
      "4736 Woods Landing Lane, Progress Village, FL 33619, United States of America",
    latitude: "27.9068276",
    longitude: "-82.36258251",
  },
  {
    id: 1367,
    address:
      "6131 Trent Creek Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.74788245",
    longitude: "-82.37244357",
  },
  {
    id: 1368,
    address:
      "9514 Abby Glen Circle, Jacksonville, FL 32257, United States of America",
    latitude: "30.2055156",
    longitude: "-81.5917081",
  },
  {
    id: 1369,
    address:
      "10115 Mangrove Well Road, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.74340739",
    longitude: "-82.34044655",
  },
  {
    id: 1370,
    address:
      "11618 Mansfield Point Drive, Riverview, FL 33569, United States of America",
    latitude: "27.829743",
    longitude: "-82.327218",
  },
  {
    id: 1371,
    address:
      "2318 Gratia Place, Casselberry, FL 32707, United States of America",
    latitude: "28.676317",
    longitude: "-81.297447",
  },
  {
    id: 1372,
    address:
      "385 Silver Sage Lane, St. Augustine, FL 32095, United States of America",
    latitude: "30.06802474",
    longitude: "-81.45710684",
  },
  {
    id: 1373,
    address:
      "142 San Carrara Court, Bradenton, FL 34208, United States of America",
    latitude: "27.50527358",
    longitude: "-82.49759487",
  },
  {
    id: 1374,
    address:
      "3001 North Cassata Lane, Saint Augustine, FL 32092, United States of America",
    latitude: "29.9519479",
    longitude: "-81.47986022",
  },
  {
    id: 1375,
    address: "636 Bishop Bay Loop, Apopka, FL 32712, United States of America",
    latitude: "28.7123835",
    longitude: "-81.5249645",
  },
  {
    id: 1376,
    address:
      "8562 Banyan Bay Boulevard, Lee County, FL 33908, United States of America",
    latitude: "26.48946596",
    longitude: "-81.8918258",
  },
  {
    id: 1377,
    address:
      "1154 Ballard Ridge Road, Jacksonville, FL 32211, United States of America",
    latitude: "30.33232545",
    longitude: "-81.5566335",
  },
  {
    id: 1378,
    address:
      "1910 Redmond Brook Lane, Ruskin, FL 33570, United States of America",
    latitude: "27.729825",
    longitude: "-82.408836",
  },
  {
    id: 1379,
    address:
      "32068 Pinfeld Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.18878408",
    longitude: "-82.28618206",
  },
  {
    id: 1380,
    address:
      "351 Westyn Bay Boulevard, Ocoee, FL 34761, United States of America",
    latitude: "28.61164052",
    longitude: "-81.54918126",
  },
  {
    id: 1381,
    address:
      "8409 Cherry Branch Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.7461935",
    longitude: "-82.3609841",
  },
  {
    id: 1382,
    address:
      "10634 Standing Stone Drive, Riverview, FL 33598, United States of America",
    latitude: "27.76560462",
    longitude: "-82.32314251",
  },
  {
    id: 1383,
    address:
      "2617 Manzilla Lane, Cape Coral, FL 33909, United States of America",
    latitude: "26.71821702",
    longitude: "-81.91585284",
  },
  {
    id: 1384,
    address:
      "3019 Plantation Ridge Drive, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.05367479",
    longitude: "-81.80466174",
  },
  {
    id: 1385,
    address: "67 Auberry Drive, Palm Coast, FL 32137, United States of America",
    latitude: "29.49828193",
    longitude: "-81.18090156",
  },
  {
    id: 1386,
    address:
      "10052 Celtic Ash Drive, Apollo Beach, FL 33573, United States of America",
    latitude: "27.76373139",
    longitude: "-82.34416329",
  },
  {
    id: 1387,
    address: "1108 Oakcrest, Brandon, FL 33510, United States of America",
    latitude: "27.9586673",
    longitude: "-82.30440247",
  },
  {
    id: 1388,
    address: "1116 Oakcrest, Brandon, FL 33510, United States of America",
    latitude: "27.95797525",
    longitude: "-82.30471301",
  },
  {
    id: 1389,
    address:
      "11915 Greenchop Place, Riverview, FL 33579, United States of America",
    latitude: "27.79193794",
    longitude: "-82.28844497",
  },
  {
    id: 1390,
    address:
      "15644 Tisons bluff road, Jacksonville, FL 32218, United States of America",
    latitude: "30.53502236",
    longitude: "-81.61426801",
  },
  {
    id: 1391,
    address:
      "162 Split Oak Road, St. Augustine, FL 32092, United States of America",
    latitude: "29.9339315",
    longitude: "-81.51770068",
  },
  {
    id: 1392,
    address:
      "5024 Inshore Landing Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.737125",
    longitude: "-82.436942",
  },
  {
    id: 1393,
    address:
      "81519 Boatswain Court, Fernandina Beach, FL 32034, United States of America",
    latitude: "30.58899349",
    longitude: "-81.52277339",
  },
  {
    id: 1394,
    address:
      "11838 Wynnfield Lakes Circle, Jacksonville, FL 32246, United States of America",
    latitude: "30.3070685",
    longitude: "-81.4948188",
  },
  {
    id: 1395,
    address:
      "10628 Aldo Moro Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.76779",
    longitude: "-82.328239",
  },
  {
    id: 1396,
    address:
      "11521 Blue Crane Street, Riverview, FL 33569, United States of America",
    latitude: "27.82971485",
    longitude: "-82.3100878",
  },
  {
    id: 1397,
    address:
      "13977 Magnolia Ridge Loop, Winter Garden, FL 34787, United States of America",
    latitude: "28.49187416",
    longitude: "-81.60745544",
  },
  {
    id: 1398,
    address:
      "1650 Regal River Circle, Ocoee, FL 34761, United States of America",
    latitude: "28.60317627",
    longitude: "-81.55378954",
  },
  {
    id: 1399,
    address:
      "4714 Woods Landing Lane, Progress Village, FL 33619, United States of America",
    latitude: "27.9074074",
    longitude: "-82.36386459",
  },
  {
    id: 1400,
    address:
      "55 Carnation Street, Saint Johns County, FL 32259, United States of America",
    latitude: "30.07754354",
    longitude: "-81.52381029",
  },
  {
    id: 1401,
    address:
      "901 Timberview Road, Clermont, FL 34715, United States of America",
    latitude: "28.576848",
    longitude: "-81.709569",
  },
  {
    id: 1402,
    address:
      "14505 Garden Gate Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1153822",
    longitude: "-81.5232349",
  },
  {
    id: 1403,
    address:
      "10232 Count Fleet Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.771041",
    longitude: "-82.338499",
  },
  {
    id: 1404,
    address:
      "12335 Ballentrae Forest Drive, Riverview, FL 33579, United States of America",
    latitude: "27.816481",
    longitude: "-82.300367",
  },
  {
    id: 1405,
    address:
      "1815 Candlenut Circle, Apopka, FL 32712, United States of America",
    latitude: "28.7072184",
    longitude: "-81.5490407",
  },
  {
    id: 1406,
    address:
      "2098 Club Lake Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.14984369",
    longitude: "-81.86485496",
  },
  {
    id: 1407,
    address: "2200 Napone Lane, Minneola, FL 34715, United States of America",
    latitude: "28.589042",
    longitude: "-81.732231",
  },
  {
    id: 1408,
    address:
      "12658 Julington Oaks Drive, Jacksonville, FL 32223, United States of America",
    latitude: "30.1425025",
    longitude: "-81.61622132",
  },
  {
    id: 1409,
    address:
      "1327 Canyon Oaks Drive, Brandon, FL 33510, United States of America",
    latitude: "27.974646",
    longitude: "-82.296613",
  },
  {
    id: 1410,
    address:
      "32746 Windelstraw Drive, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.26718331",
    longitude: "-82.27437069",
  },
  {
    id: 1411,
    address:
      "290 Buck Run Way, St. Augustine, FL 32092, United States of America",
    latitude: "29.94295594",
    longitude: "-81.48971761",
  },
  {
    id: 1412,
    address:
      "15781 Bainebridge Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.52234827",
    longitude: "-81.64647923",
  },
  {
    id: 1413,
    address:
      "12880 Strode Lane, Windermere, FL 34786, United States of America",
    latitude: "28.45495011",
    longitude: "-81.57600873",
  },
  {
    id: 1414,
    address:
      "2784 Murray Pass, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.19893267",
    longitude: "-82.59735266",
  },
  {
    id: 1415,
    address:
      "518 Arborwood Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.49468107",
    longitude: "-81.6093624",
  },
  {
    id: 1416,
    address:
      "5206 Bear Corn Run, Port Orange, FL 32128, United States of America",
    latitude: "29.1187791",
    longitude: "-81.0561825",
  },
  {
    id: 1417,
    address:
      "764 Sycamore Way, Orange Park, FL 32073, United States of America",
    latitude: "30.169993",
    longitude: "-81.781705",
  },
  {
    id: 1418,
    address:
      "15870 Tisons bluff road, Jacksonville, FL 32218, United States of America",
    latitude: "30.52954405",
    longitude: "-81.61475458",
  },
  {
    id: 1419,
    address:
      "16358 Treasure Point Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.71971285",
    longitude: "-82.3252831",
  },
  {
    id: 1420,
    address:
      "1745 Regal River Circle, Ocoee, FL 34761, United States of America",
    latitude: "28.60258189",
    longitude: "-81.55512309",
  },
  {
    id: 1421,
    address:
      "19746 Long Lake Ranch Boulevard, Lutz, FL 33558, United States of America",
    latitude: "28.18843851",
    longitude: "-82.50006246",
  },
  {
    id: 1422,
    address: "2408 Riviera Lane, Minneola, FL 34715, United States of America",
    latitude: "28.58741467",
    longitude: "-81.73328943",
  },
  {
    id: 1423,
    address: "488 Nuestra Place, Groveland, FL 34736, United States of America",
    latitude: "28.57713445",
    longitude: "-81.809368",
  },
  {
    id: 1424,
    address: "949 Molly Circle, Belspur, FL 34232, United States of America",
    latitude: "27.34261763",
    longitude: "-82.45502885",
  },
  {
    id: 1425,
    address:
      "10525 Billings Street, Orlando, FL 32832, United States of America",
    latitude: "28.44016916",
    longitude: "-81.23629698",
  },
  {
    id: 1426,
    address:
      "1766 Thetford Circle, Meadow Woods, FL 32824, United States of America",
    latitude: "28.3484907",
    longitude: "-81.33236931",
  },
  {
    id: 1427,
    address:
      "12433 Duckett Court, Spring Hill, FL 34610, United States of America",
    latitude: "28.33828868",
    longitude: "-82.54964728",
  },
  {
    id: 1428,
    address:
      "1645 Balsam Willow Trail, Orlando, FL 32825, United States of America",
    latitude: "28.525542",
    longitude: "-81.217653",
  },
  {
    id: 1429,
    address:
      "347 Gianna Way, St. Augustine, FL 32086, United States of America",
    latitude: "29.81539016",
    longitude: "-81.34155834",
  },
  {
    id: 1430,
    address:
      "5779 Nannyberry Circle, Sarasota, FL 34238, United States of America",
    latitude: "27.25508822",
    longitude: "-82.45001573",
  },
  {
    id: 1431,
    address:
      "11628 Warren Oaks Place, Riverview, FL 33578, United States of America",
    latitude: "27.8295888",
    longitude: "-82.3311013",
  },
  {
    id: 1432,
    address:
      "11917 Greenchop Place, Riverview, FL 33579, United States of America",
    latitude: "27.79193308",
    longitude: "-82.28839439",
  },
  {
    id: 1433,
    address:
      "165 Prairie Falcon Drive, Groveland, FL 34736, United States of America",
    latitude: "28.58546746",
    longitude: "-81.8125371",
  },
  {
    id: 1434,
    address:
      "241 Heritage Oaks Drive, Saint Johns County, FL 32259, United States of America",
    latitude: "30.07534686",
    longitude: "-81.52315707",
  },
  {
    id: 1435,
    address:
      "2418 Dovesong Trace Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72683817",
    longitude: "-82.40156434",
  },
  {
    id: 1436,
    address: "432 Trackside Court, DeLand, FL 32724, United States of America",
    latitude: "29.0030849",
    longitude: "-81.2813367",
  },
  {
    id: 1437,
    address:
      "10001 Celtic Ash Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.764635",
    longitude: "-82.346806",
  },
  {
    id: 1438,
    address:
      "12018 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18596484",
    longitude: "-82.61556827",
  },
  {
    id: 1439,
    address:
      "1283 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04379587",
    longitude: "-80.69110298",
  },
  {
    id: 1440,
    address: "15211 Fiji Isle Place, Tampa, FL 33647, United States of America",
    latitude: "28.13203018",
    longitude: "-82.29044543",
  },
  {
    id: 1441,
    address:
      "15793 Bainebridge Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.52264731",
    longitude: "-81.64655377",
  },
  {
    id: 1442,
    address:
      "331 Enrede Lane, Saint Augustine, FL 32095, United States of America",
    latitude: "30.043228",
    longitude: "-81.39320953",
  },
  {
    id: 1443,
    address:
      "4184 Prima Lago Circle, Lakeland, FL 33810, United States of America",
    latitude: "28.10081954",
    longitude: "-81.99061908",
  },
  {
    id: 1444,
    address:
      "10155 Newminster Loop, Apollo Beach, FL 33573, United States of America",
    latitude: "27.76356337",
    longitude: "-82.33946994",
  },
  {
    id: 1445,
    address:
      "10323 Addison Lakes Drive, Jacksonville, FL 32257, United States of America",
    latitude: "30.19027205",
    longitude: "-81.59880656",
  },
  {
    id: 1446,
    address:
      "14639 Littleleaf Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.11394",
    longitude: "-81.520035",
  },
  {
    id: 1447,
    address:
      "15079 Russell Bridge Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.1065636",
    longitude: "-81.5362053",
  },
  {
    id: 1448,
    address:
      "5036 Inshore Landing Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.737915",
    longitude: "-82.436926",
  },
  {
    id: 1449,
    address:
      "6301 Trent Creek Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.7486345",
    longitude: "-82.37430996",
  },
  {
    id: 1450,
    address:
      "70 Quartz Place, St. Augustine, FL 32086, United States of America",
    latitude: "29.83522984",
    longitude: "-81.36750194",
  },
  {
    id: 1451,
    address:
      "79 Mission Cove Circle, St. Augustine, FL 32084, United States of America",
    latitude: "29.91295342",
    longitude: "-81.36279307",
  },
  {
    id: 1452,
    address:
      "12173 Hatherden Court, Jacksonville, FL 32258, United States of America",
    latitude: "30.1518899",
    longitude: "-81.5329381",
  },
  {
    id: 1453,
    address:
      "11408 Thames Fare Way, Lithia, FL 33547, United States of America",
    latitude: "27.83492295",
    longitude: "-82.20938656",
  },
  {
    id: 1454,
    address:
      "1216 Patterson Terrace, Lake Mary, FL 32746, United States of America",
    latitude: "28.7636905",
    longitude: "-81.34934395",
  },
  {
    id: 1455,
    address:
      "219 Heron Landing Road, Jacksonville, FL 32259, United States of America",
    latitude: "30.08665901",
    longitude: "-81.53767909",
  },
  {
    id: 1456,
    address:
      "3076 Patterson Groves Drive, Haines City, FL 33844, United States of America",
    latitude: "28.14187699",
    longitude: "-81.61768722",
  },
  {
    id: 1457,
    address:
      "1118 Lauriston Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.0938471",
    longitude: "-81.55622165",
  },
  {
    id: 1458,
    address:
      "1329 Patterson Terrace, Lake Mary, FL 32746, United States of America",
    latitude: "28.76301636",
    longitude: "-81.352329",
  },
  {
    id: 1459,
    address:
      "14007 Carson Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.2747916",
    longitude: "-81.4452835",
  },
  {
    id: 1460,
    address: "24304 SW 8th Place, Newberry, FL 32669, United States of America",
    latitude: "29.641633",
    longitude: "-82.599534",
  },
  {
    id: 1461,
    address: "2760 Westyn Cove Lane, Ocoee, FL 34761, United States of America",
    latitude: "28.60976094",
    longitude: "-81.54893926",
  },
  {
    id: 1462,
    address:
      "6307 Red Herring Drive, Winter Haven, FL 33881, United States of America",
    latitude: "28.05712074",
    longitude: "-81.67887028",
  },
  {
    id: 1463,
    address:
      "6739 Azalea Park Road, Jacksonville, FL 32259, United States of America",
    latitude: "30.1046615",
    longitude: "-81.5367361",
  },
  {
    id: 1464,
    address: "240 Domus Lane, Casselberry, FL 32707, United States of America",
    latitude: "28.677231",
    longitude: "-81.297118",
  },
  {
    id: 1465,
    address:
      "12116 Creek Preserve Drive, Riverview, FL 33579, United States of America",
    latitude: "27.821403",
    longitude: "-82.264723",
  },
  {
    id: 1466,
    address:
      "14774 Honeycrisp Lane, Orlando, FL 32827, United States of America",
    latitude: "28.35141069",
    longitude: "-81.23881871",
  },
  {
    id: 1467,
    address:
      "2504 Egret Loop, Buenaventura Lakes, FL 34743, United States of America",
    latitude: "28.33943191",
    longitude: "-81.33973258",
  },
  {
    id: 1468,
    address:
      "3016 North Cassata Lane, Saint Augustine, FL 32092, United States of America",
    latitude: "29.9524901",
    longitude: "-81.47912109",
  },
  {
    id: 1469,
    address: "3096 Pinenut Drive, Apopka, FL 32712, United States of America",
    latitude: "28.7306975",
    longitude: "-81.5199707",
  },
  {
    id: 1470,
    address:
      "4359 Eagle Landing Parkway, Orange Park, FL 32065, United States of America",
    latitude: "30.15454477",
    longitude: "-81.86099104",
  },
  {
    id: 1471,
    address:
      "4748 Silver Birch Way, Orlando, FL 32811, United States of America",
    latitude: "28.49014493",
    longitude: "-81.44861726",
  },
  {
    id: 1472,
    address:
      "7415 61st Street East, Bradenton, FL 34221, United States of America",
    latitude: "27.56925284",
    longitude: "-82.48879167",
  },
  {
    id: 1473,
    address:
      "30706 Satinleaf Run, Brooksville, FL 34602, United States of America",
    latitude: "28.53679898",
    longitude: "-82.2351948",
  },
  {
    id: 1474,
    address:
      "110 Sarah Elizabeth Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.09408684",
    longitude: "-81.56129938",
  },
  {
    id: 1475,
    address: "3022 Winglewood Circle, Lutz, FL 33558, United States of America",
    latitude: "28.1667332",
    longitude: "-82.48747441",
  },
  {
    id: 1476,
    address:
      "32073 Pinfeld Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.18892011",
    longitude: "-82.28642307",
  },
  {
    id: 1477,
    address:
      "357 Palazzo Circle, St. Augustine, FL 32092, United States of America",
    latitude: "29.95397905",
    longitude: "-81.49470659",
  },
  {
    id: 1478,
    address:
      "581 Blue Park Road, Orange City, FL 32763, United States of America",
    latitude: "28.9401908",
    longitude: "-81.2922639",
  },
  {
    id: 1479,
    address:
      "8947 Devon Pines Drive, Jacksonville, FL 32211-, United States of America",
    latitude: "30.33374",
    longitude: "-81.558729",
  },
  {
    id: 1480,
    address:
      "9620 Orange Jasmine Way, Tampa, FL 33647, United States of America",
    latitude: "28.16208845",
    longitude: "-82.32941242",
  },
  {
    id: 1481,
    address:
      "111 Irish Rose Road, Wards Creek, FL 32092, United States of America",
    latitude: "29.9697072",
    longitude: "-81.53456985",
  },
  {
    id: 1482,
    address:
      "12105 Barnsley Reserve Place, Gibsonton, FL 33534, United States of America",
    latitude: "27.82321365",
    longitude: "-82.36843137",
  },
  {
    id: 1483,
    address:
      "1756 Regal River Circle, Ocoee, FL 34761, United States of America",
    latitude: "28.60240824",
    longitude: "-81.55520127",
  },
  {
    id: 1484,
    address:
      "22721 Cherokee Rose Place, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.23376087",
    longitude: "-82.44022207",
  },
  {
    id: 1485,
    address:
      "5228 Brydon Woods Circle, St. Cloud, FL 34771, United States of America",
    latitude: "28.33064931",
    longitude: "-81.23148683",
  },
  {
    id: 1486,
    address:
      "14317 Haddon Mist Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.76716729",
    longitude: "-82.32088038",
  },
  {
    id: 1487,
    address:
      "15653 Marina Bay Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.43391614",
    longitude: "-81.64230323",
  },
  {
    id: 1488,
    address:
      "1727 Penrith Loop, Meadow Woods, FL 32824, United States of America",
    latitude: "28.34918992",
    longitude: "-81.33037681",
  },
  {
    id: 1489,
    address:
      "267 Medio Drive, Saint Johns County, FL 32095, United States of America",
    latitude: "30.03580102",
    longitude: "-81.391171",
  },
  {
    id: 1490,
    address:
      "374 Gianna Way, Saint Johns County, FL 32086, United States of America",
    latitude: "29.81647397",
    longitude: "-81.3409541",
  },
  {
    id: 1491,
    address:
      "5041 Ivory Stone Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.72185753",
    longitude: "-82.32670085",
  },
  {
    id: 1492,
    address:
      "5241 Villa Rosa Avenue, St. Cloud, FL 34771, United States of America",
    latitude: "28.30239976",
    longitude: "-81.22794898",
  },
  {
    id: 1493,
    address:
      "6220 Horse Mill Place, Palmetto, FL 34221, United States of America",
    latitude: "27.570804",
    longitude: "-82.493435",
  },
  {
    id: 1494,
    address:
      "16006 Baxter Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.53043178",
    longitude: "-81.64664769",
  },
  {
    id: 1495,
    address: "20021 Date Palm Way, Tampa, FL 33647, United States of America",
    latitude: "28.1597653",
    longitude: "-82.32361257",
  },
  {
    id: 1496,
    address:
      "3133 Hidden Meadows Court, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.03668289",
    longitude: "-81.78170978",
  },
  {
    id: 1497,
    address:
      "4890 Waters Gate Drive, Tavares, FL 32778, United States of America",
    latitude: "28.7554032",
    longitude: "-81.7664344",
  },
  {
    id: 1498,
    address:
      "696 Black Eagle Drive, Groveland, FL 34736, United States of America",
    latitude: "28.58867826",
    longitude: "-81.81040121",
  },
  {
    id: 1499,
    address:
      "8104 36th Street East, Sarasota, FL 34243, United States of America",
    latitude: "27.395973",
    longitude: "-82.518275",
  },
  {
    id: 1500,
    address:
      "513 Serenity Mill Loop, Amanda, FL 33570, United States of America",
    latitude: "27.69358969",
    longitude: "-82.4415582",
  },
  {
    id: 1501,
    address:
      "7023 Dowling Mill Circle, Citrus Park, FL 33625, United States of America",
    latitude: "28.0844375",
    longitude: "-82.56453381",
  },
  {
    id: 1502,
    address:
      "13120 Bridgeport Crossing, Bradenton, FL 34211, United States of America",
    latitude: "27.43917391",
    longitude: "-82.41070192",
  },
  {
    id: 1503,
    address:
      "187 Stony Ford Drive, Jacksonville, FL 32081, United States of America",
    latitude: "30.1131247",
    longitude: "-81.4526128",
  },
  {
    id: 1504,
    address:
      "19 Starling Avenue, Jacksonville, FL 32081, United States of America",
    latitude: "30.102042",
    longitude: "-81.451481",
  },
  {
    id: 1505,
    address:
      "8181 Faire Frost Lane, Land O' Lakes, FL 34637, United States of America",
    latitude: "28.276332",
    longitude: "-82.461683",
  },
  {
    id: 1506,
    address:
      "8239 Lakeview Crossing Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.433395",
    longitude: "-81.63922",
  },
  {
    id: 1507,
    address:
      "10513 Sleepy Orange Court, Riverview, FL 33578, United States of America",
    latitude: "27.8482222",
    longitude: "-82.3301",
  },
  {
    id: 1508,
    address:
      "14808 Ellingsworth Lane, Winter Garden, FL 34787, United States of America",
    latitude: "28.5359802",
    longitude: "-81.6048421",
  },
  {
    id: 1509,
    address:
      "2575 Murray Pass, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.19662548",
    longitude: "-82.59880722",
  },
  {
    id: 1510,
    address:
      "270 Rincon Drive, Saint Johns County, FL 32095, United States of America",
    latitude: "30.03505049",
    longitude: "-81.39007675",
  },
  {
    id: 1511,
    address:
      "3440 Ridgeview Drive, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.03181971",
    longitude: "-81.78374397",
  },
  {
    id: 1512,
    address:
      "3807 91st Avenue East, Bradenton, FL 34219, United States of America",
    latitude: "27.54709674",
    longitude: "-82.46962852",
  },
  {
    id: 1513,
    address:
      "88551 Waxwing Court, Nassau County, FL 32097, United States of America",
    latitude: "30.60886291",
    longitude: "-81.64909613",
  },
  {
    id: 1514,
    address:
      "6751 Azalea Park Road, Jacksonville, FL 32259, United States of America",
    latitude: "30.1046747",
    longitude: "-81.5364294",
  },
  {
    id: 1515,
    address:
      "10119 Dogwood Creek Drive, Jacksonville, FL 32222, United States of America",
    latitude: "30.21242251",
    longitude: "-81.82786214",
  },
  {
    id: 1516,
    address:
      "10414 Waterstone Drive, Riverview, FL 33578, United States of America",
    latitude: "27.8529563",
    longitude: "-82.33264162",
  },
  {
    id: 1517,
    address:
      "12615 LillyReed Court, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18788822",
    longitude: "-82.60773617",
  },
  {
    id: 1518,
    address: "2765 Mead Avenue, St. Cloud, FL 34771, United States of America",
    latitude: "28.33201526",
    longitude: "-81.23169976",
  },
  {
    id: 1519,
    address: "3574 Pelock Drive, Apopka, FL 32703, United States of America",
    latitude: "28.6246882",
    longitude: "-81.5316999",
  },
  {
    id: 1520,
    address:
      "5906 Jasper Glen Drive, Lithia, FL 33547, United States of America",
    latitude: "27.846743",
    longitude: "-82.250962",
  },
  {
    id: 1521,
    address:
      "10938 Chitwood Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.430635",
    longitude: "-81.739225",
  },
  {
    id: 1522,
    address:
      "16201 Yelloweyed Drive, Clermont, FL 34714, United States of America",
    latitude: "28.4021573",
    longitude: "-81.6831286",
  },
  {
    id: 1523,
    address:
      "16438 Dawn Crescent Court, Quail Ridge, FL 34610, United States of America",
    latitude: "28.34455341",
    longitude: "-82.54404185",
  },
  {
    id: 1524,
    address: "2249 Scrub Jay Road, Apopka, FL 32703, United States of America",
    latitude: "28.6723369",
    longitude: "-81.5459908",
  },
  {
    id: 1525,
    address:
      "2343 Aurelius Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.5014292",
    longitude: "-81.6233944",
  },
  {
    id: 1526,
    address: "2382 Norwood Place, Tavares, FL 32778, United States of America",
    latitude: "28.798266",
    longitude: "-81.7521883",
  },
  {
    id: 1527,
    address:
      "261 Majestic Eagle Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.0979565",
    longitude: "-81.42101564",
  },
  {
    id: 1528,
    address:
      "333 Lexington Avenue Southwest, Florida Ridge, FL 32962, United States of America",
    latitude: "27.59941972",
    longitude: "-80.39836123",
  },
  {
    id: 1529,
    address:
      "13107 Ramblewood Trail, Bradenton, FL 34211, United States of America",
    latitude: "27.4411977",
    longitude: "-82.41028652",
  },
  {
    id: 1530,
    address:
      "3672 Oglebay Drive, Green Cove Springs, FL 32043, United States of America",
    latitude: "29.99994102",
    longitude: "-81.72244073",
  },
  {
    id: 1531,
    address:
      "12112 Creek Preserve Drive, Riverview, FL 33579, United States of America",
    latitude: "27.82139",
    longitude: "-82.264358",
  },
  {
    id: 1532,
    address:
      "13117 Bee Blossom Place, Riverview, FL 33579, United States of America",
    latitude: "27.79976428",
    longitude: "-82.29504949",
  },
  {
    id: 1533,
    address:
      "16132 Dowing Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.532491",
    longitude: "-81.618173",
  },
  {
    id: 1534,
    address:
      "7137 Claremont Creek Drive, Jacksonville, FL 32222, United States of America",
    latitude: "30.2138505",
    longitude: "-81.82708644",
  },
  {
    id: 1535,
    address:
      "8311 Nandina Drive, Sarasota County, FL 34240, United States of America",
    latitude: "27.31366767",
    longitude: "-82.40051246",
  },
  {
    id: 1536,
    address: "951 Sally Road, Lake Wales, FL 33853, United States of America",
    latitude: "27.889367",
    longitude: "-81.571386",
  },
  {
    id: 1537,
    address:
      "10715 Southern Forest Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84538413",
    longitude: "-82.33243473",
  },
  {
    id: 1538,
    address:
      "12622 Julington Oaks Drive, Jacksonville, FL 32223, United States of America",
    latitude: "30.14290955",
    longitude: "-81.61646953",
  },
  {
    id: 1539,
    address:
      "15904 Starling Crossing Drive, Lithia, FL 33547, United States of America",
    latitude: "27.8612098",
    longitude: "-82.21916388",
  },
  {
    id: 1540,
    address:
      "16455 Centipede Street, Clermont, FL 34714, United States of America",
    latitude: "28.4033005",
    longitude: "-81.6837223",
  },
  {
    id: 1541,
    address: "1952 Dunn Cove Drive, Apopka, FL 32703, United States of America",
    latitude: "28.6840655",
    longitude: "-81.544459",
  },
  {
    id: 1542,
    address:
      "287 Heron Landing Road, Jacksonville, FL 32259, United States of America",
    latitude: "30.08689803",
    longitude: "-81.53847107",
  },
  {
    id: 1543,
    address:
      "4007 Willow Walk Drive, Bradenton, FL 34221, United States of America",
    latitude: "27.54967963",
    longitude: "-82.52124086",
  },
  {
    id: 1544,
    address:
      "11021 Purple Martin Boulevard, Riverview, FL 33579, United States of America",
    latitude: "27.78054268",
    longitude: "-82.32405432",
  },
  {
    id: 1545,
    address:
      "2347 Snapdragon Drive NW, Palm Bay, FL 32907, United States of America",
    latitude: "28.000053",
    longitude: "-80.733644",
  },
  {
    id: 1546,
    address:
      "3065 Patterson Groves Drive, Haines City, FL 33844, United States of America",
    latitude: "28.141641",
    longitude: "-81.617537",
  },
  {
    id: 1547,
    address:
      "32632 Summerglade Drive, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.259369",
    longitude: "-82.276692",
  },
  {
    id: 1548,
    address:
      "3882 Burnt Pine Drive, Jacksonville, FL 32224, United States of America",
    latitude: "30.2736401",
    longitude: "-81.4450035",
  },
  {
    id: 1549,
    address:
      "4386 Shrewbury Place, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.22056848",
    longitude: "-82.49955549",
  },
  {
    id: 1550,
    address:
      "2737 Chapman Oak Drive, Jacksonville, FL 32257, United States of America",
    latitude: "30.18669925",
    longitude: "-81.63514868",
  },
  {
    id: 1551,
    address:
      "11267 SW 34th Road, Gainesville, FL 32608, United States of America",
    latitude: "29.622037",
    longitude: "-82.462986",
  },
  {
    id: 1552,
    address:
      "1184 Ballard Ridge Road, Jacksonville, FL 32211, United States of America",
    latitude: "30.33305946",
    longitude: "-81.55665907",
  },
  {
    id: 1553,
    address:
      "11923 Twilight Darner Place, Riverview, FL 33569, United States of America",
    latitude: "27.82576007",
    longitude: "-82.2431154",
  },
  {
    id: 1554,
    address:
      "16115 Starling Crossing Drive, Lithia, FL 33547, United States of America",
    latitude: "27.86093365",
    longitude: "-82.2167091",
  },
  {
    id: 1555,
    address:
      "300 Palazzo Circle, Saint Augustine, FL 32092, United States of America",
    latitude: "29.95327735",
    longitude: "-81.49233261",
  },
  {
    id: 1556,
    address:
      "3980 Eternity Circle, Saint Cloud, FL 34772, United States of America",
    latitude: "28.176149",
    longitude: "-81.301334",
  },
  {
    id: 1557,
    address:
      "4312 Shrewbury Place, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.21946458",
    longitude: "-82.49876789",
  },
  {
    id: 1558,
    address:
      "4678 Alligator Flag Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.05027171",
    longitude: "-80.69197062",
  },
  {
    id: 1559,
    address:
      "4702 Ashley Lake Circle, Vero Beach, FL 32967, United States of America",
    latitude: "27.67660562",
    longitude: "-80.46189611",
  },
  {
    id: 1560,
    address:
      "1628 Cabbage Key Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.73069803",
    longitude: "-82.41321336",
  },
  {
    id: 1561,
    address:
      "1843 Harbour Blue Street, Ruskin, FL 33570, United States of America",
    latitude: "27.73443479",
    longitude: "-82.40957598",
  },
  {
    id: 1562,
    address: "2342 Kennington Cove, DeLand, FL 32724, United States of America",
    latitude: "28.9864007",
    longitude: "-81.2964195",
  },
  {
    id: 1563,
    address:
      "3142 South Northview Road, Plant City, FL 33566, United States of America",
    latitude: "27.97660603",
    longitude: "-82.12675117",
  },
  {
    id: 1564,
    address:
      "3514 Kearsney Abbey Circle, Dover, FL 33527, United States of America",
    latitude: "27.934489",
    longitude: "-82.217318",
  },
  {
    id: 1565,
    address:
      "3748 Tuckerton Drive, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.21051383",
    longitude: "-82.51175093",
  },
  {
    id: 1566,
    address:
      "559 Trymore Drive SE, Palm Bay, FL 32909, United States of America",
    latitude: "27.932787",
    longitude: "-80.656128",
  },
  {
    id: 1567,
    address:
      "9056 Devon Pines Drive, Jacksonville, FL 32211, United States of America",
    latitude: "30.335095",
    longitude: "-81.55803",
  },
  {
    id: 1568,
    address:
      "10231 Count Fleet Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.7707206",
    longitude: "-82.34221667",
  },
  {
    id: 1569,
    address:
      "1208 Buckhorn Way, St. Augustine, FL 32092, United States of America",
    latitude: "29.923136",
    longitude: "-81.429155",
  },
  {
    id: 1570,
    address: "12266 Barn Cat Run, Odessa, FL 33556, United States of America",
    latitude: "28.201519",
    longitude: "-82.612859",
  },
  {
    id: 1571,
    address: "19334 Fallglo Drive, Orlando, FL 32827, United States of America",
    latitude: "28.34864239",
    longitude: "-81.23785776",
  },
  {
    id: 1572,
    address:
      "3219 Bayflower Street, Harmony, FL 34773, United States of America",
    latitude: "28.20047294",
    longitude: "-81.15901152",
  },
  {
    id: 1573,
    address:
      "755 Maple Leaf Loop, Winter Springs, FL 32708, United States of America",
    latitude: "28.71153029",
    longitude: "-81.32165469",
  },
  {
    id: 1574,
    address:
      "844 Vino Verde Circle, Brandon, FL 33511, United States of America",
    latitude: "27.91746663",
    longitude: "-82.29990052",
  },
  {
    id: 1575,
    address:
      "9243 Tillinghast Drive, Citrus Park, FL 33626, United States of America",
    latitude: "28.08336029",
    longitude: "-82.59439504",
  },
  {
    id: 1576,
    address: "1093 Bluffwood Drive, Laurel, FL 34275, United States of America",
    latitude: "27.1378984",
    longitude: "-82.448606",
  },
  {
    id: 1577,
    address:
      "11108 Coventry Grove Circle, Lithia, FL 33547, United States of America",
    latitude: "27.83164533",
    longitude: "-82.20517802",
  },
  {
    id: 1578,
    address:
      "304 Ironwood Drive, Davenport, FL 33837, United States of America",
    latitude: "28.166607",
    longitude: "-81.601548",
  },
  {
    id: 1579,
    address: "3675 Umbrella Court, Tavares, FL 32778, United States of America",
    latitude: "28.753763",
    longitude: "-81.76747",
  },
  {
    id: 1580,
    address:
      "3859 Trail Ridge Road, Middleburg, FL 32068, United States of America",
    latitude: "30.13282852",
    longitude: "-81.84785611",
  },
  {
    id: 1581,
    address:
      "112 Spoonbill Drive, Palm Coast, FL 32164, United States of America",
    latitude: "29.439856",
    longitude: "-81.192087",
  },
  {
    id: 1582,
    address: "2563 Whittler Branch, Odessa, FL 33556, United States of America",
    latitude: "28.196372",
    longitude: "-82.599809",
  },
  {
    id: 1583,
    address:
      "4359 Sherman Hills Parkway North, Jacksonville, FL 32210, United States of America",
    latitude: "30.26667",
    longitude: "-81.75049",
  },
  {
    id: 1584,
    address:
      "5060 Inshore Landing Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.738163",
    longitude: "-82.43556",
  },
  {
    id: 1585,
    address: "5785 Aaron Court, Sarasota, FL 34232, United States of America",
    latitude: "27.31247591",
    longitude: "-82.45525433",
  },
  {
    id: 1586,
    address: "710 Dogwood Run, Bradenton, FL 34212, United States of America",
    latitude: "27.492853",
    longitude: "-82.417414",
  },
  {
    id: 1587,
    address:
      "11633 Huckba Court, Jacksonville, FL 32218, United States of America",
    latitude: "30.44718093",
    longitude: "-81.71186841",
  },
  {
    id: 1588,
    address:
      "18325 Rossendale Court, Pasco County, FL 34638, United States of America",
    latitude: "28.21189681",
    longitude: "-82.51335359",
  },
  {
    id: 1589,
    address: "3575 Aria Drive, Melbourne, FL 32904, United States of America",
    latitude: "28.10330815",
    longitude: "-80.69558282",
  },
  {
    id: 1590,
    address: "3135 Spicer Avenue, Eustis, FL 32735, United States of America",
    latitude: "28.8786335",
    longitude: "-81.7186032",
  },
  {
    id: 1591,
    address:
      "11331 Hudson Hills Lane, Riverview, FL 33579, United States of America",
    latitude: "27.77109555",
    longitude: "-82.31666692",
  },
  {
    id: 1592,
    address:
      "1203 Custer Bayou Street, Ruskin, FL 33570, United States of America",
    latitude: "27.72996104",
    longitude: "-82.41305341",
  },
  {
    id: 1593,
    address:
      "1224 Patterson Terrace, Lake Mary, FL 32746, United States of America",
    latitude: "28.76368946",
    longitude: "-81.34958255",
  },
  {
    id: 1594,
    address:
      "13211 Wellington Hills Drive, Riverview, FL 33579, United States of America",
    latitude: "27.79046759",
    longitude: "-82.32726758",
  },
  {
    id: 1595,
    address: "2296 Aloe Alley, Apopka, FL 32703, United States of America",
    latitude: "28.6426381",
    longitude: "-81.4981919",
  },
  {
    id: 1596,
    address:
      "303 Enrede Lane, Saint Augustine, FL 32095, United States of America",
    latitude: "30.0436535",
    longitude: "-81.39331191",
  },
  {
    id: 1597,
    address:
      "3610 Lefays Point, Pasco County, FL 34638, United States of America",
    latitude: "28.20962399",
    longitude: "-82.51712063",
  },
  {
    id: 1598,
    address:
      "19350 Long Lake Ranch Boulevard, Lutz, FL 33558, United States of America",
    latitude: "28.18517988",
    longitude: "-82.49858183",
  },
  {
    id: 1599,
    address:
      "21056 Passive Porch Drive, Land O' Lakes, FL 34637, United States of America",
    latitude: "28.283632",
    longitude: "-82.467119",
  },
  {
    id: 1600,
    address:
      "320 Tollerton Avenue, Jacksonville, FL 32259, United States of America",
    latitude: "30.08729355",
    longitude: "-81.55677468",
  },
  {
    id: 1601,
    address:
      "3963 Bramblewood Loop, Spring Hill, FL 34609, United States of America",
    latitude: "28.49276828",
    longitude: "-82.50447471",
  },
  {
    id: 1602,
    address:
      "45 Mediterra Avenue, Jacksonville, FL 32081, United States of America",
    latitude: "30.109143",
    longitude: "-81.424806",
  },
  {
    id: 1603,
    address:
      "740 Lake Douglas Drive, Groveland, FL 34736, United States of America",
    latitude: "28.55629856",
    longitude: "-81.81201403",
  },
  {
    id: 1604,
    address:
      "7636 Arden Lakes Drive, Jacksonville, FL 32222, United States of America",
    latitude: "30.20526136",
    longitude: "-81.82515348",
  },
  {
    id: 1605,
    address:
      "825 Wiltonway Drive, Plant City, FL 33563, United States of America",
    latitude: "27.99385145",
    longitude: "-82.11394045",
  },
  {
    id: 1606,
    address:
      "1060 Thunderhead Lane, Minneola, FL 34715, United States of America",
    latitude: "28.59268976",
    longitude: "-81.7254426",
  },
  {
    id: 1607,
    address: "Apopka, Apopka, FL, United States of America",
    latitude: "28.678013",
    longitude: "-81.511398",
  },
  {
    id: 1608,
    address:
      "11024 Folklore Street, Winter Garden, FL 34787, United States of America",
    latitude: "28.40036497",
    longitude: "-81.6398454",
  },
  {
    id: 1609,
    address:
      "2657 Rail Spur, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.197104",
    longitude: "-82.59746288",
  },
  {
    id: 1610,
    address:
      "348 Southern Winds Boulevard, DeLand, FL 32720, United States of America",
    latitude: "29.034244",
    longitude: "-81.3429561",
  },
  {
    id: 1611,
    address:
      "3869 Arbor Mill Circle, Orange Park, FL 32065, United States of America",
    latitude: "30.18826637",
    longitude: "-81.8397158",
  },
  {
    id: 1612,
    address:
      "556 Blue Cypress Drive, Groveland, FL 34736, United States of America",
    latitude: "28.56134436",
    longitude: "-81.78144382",
  },
  {
    id: 1613,
    address: "68 Auberry Drive, Palm Coast, FL 32137, United States of America",
    latitude: "29.49840423",
    longitude: "-81.18119785",
  },
  {
    id: 1614,
    address:
      "7123 Crispin Cove Drive, Jacksonville, FL 32258, United States of America",
    latitude: "30.1158428",
    longitude: "-81.5222005",
  },
  {
    id: 1615,
    address:
      "827 Vino Verde Circle, Brandon, FL 33511, United States of America",
    latitude: "27.91727533",
    longitude: "-82.29915417",
  },
  {
    id: 1616,
    address:
      "1174 Musgrass Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04403707",
    longitude: "-80.68958578",
  },
  {
    id: 1617,
    address:
      "14103 Poke Ridge Drive, Riverview, FL 33579, United States of America",
    latitude: "27.77627183",
    longitude: "-82.31786083",
  },
  {
    id: 1618,
    address:
      "2243 50th Street Circle East, Bradenton, FL 34221, United States of America",
    latitude: "27.56001136",
    longitude: "-82.54055191",
  },
  {
    id: 1619,
    address:
      "32660 Harmony Oaks Drive, Pasco County, FL 33545, United States of America",
    latitude: "28.23187888",
    longitude: "-82.27563861",
  },
  {
    id: 1620,
    address:
      "366 Gianna Way, Saint Johns County, FL 32086, United States of America",
    latitude: "29.8160729",
    longitude: "-81.34084976",
  },
  {
    id: 1621,
    address:
      "638 Black Eagle Drive, Groveland, FL 34736, United States of America",
    latitude: "28.58437384",
    longitude: "-81.80864541",
  },
  {
    id: 1622,
    address:
      "14020 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1275654",
    longitude: "-81.507042",
  },
  {
    id: 1623,
    address:
      "16013 Dowing Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.532056",
    longitude: "-81.614563",
  },
  {
    id: 1624,
    address:
      "32652 Harmony Oaks Drive, Pasco County, FL 33545, United States of America",
    latitude: "28.23183152",
    longitude: "-82.27570683",
  },
  {
    id: 1625,
    address:
      "16156 Dowing Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.533169",
    longitude: "-81.618776",
  },
  {
    id: 1626,
    address:
      "10623 Standing Stone Drive, Riverview, FL 33598, United States of America",
    latitude: "27.76547867",
    longitude: "-82.32261887",
  },
  {
    id: 1627,
    address:
      "10875 Birdsong Court, Jacksonville, FL 32257, United States of America",
    latitude: "30.1784842",
    longitude: "-81.5779667",
  },
  {
    id: 1628,
    address:
      "11901 Twilight Darner Place, Fish Hawk, FL 33569, United States of America",
    latitude: "27.826171",
    longitude: "-82.243104",
  },
  {
    id: 1629,
    address:
      "140 Traveler Palm Court, Palm Valley, FL 32082, United States of America",
    latitude: "30.18102394",
    longitude: "-81.38803086",
  },
  {
    id: 1630,
    address:
      "14233 Covert Green Place, Riverview, FL 33579, United States of America",
    latitude: "27.771176",
    longitude: "-82.318767",
  },
  {
    id: 1631,
    address:
      "15763 Bainebridge Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.521705",
    longitude: "-81.646316",
  },
  {
    id: 1632,
    address: "18431 Waydale Loop, Hudson, FL 34667, United States of America",
    latitude: "28.42532245",
    longitude: "-82.64898706",
  },
  {
    id: 1633,
    address:
      "1885 Castleton Drive, Saint Cloud, FL 34771, United States of America",
    latitude: "28.24954338",
    longitude: "-81.22400119",
  },
  {
    id: 1634,
    address:
      "3713 Maidencain Street, Clermont, FL 34714, United States of America",
    latitude: "28.400761",
    longitude: "-81.686817",
  },
  {
    id: 1635,
    address:
      "11832 Thicket Wood Drive, Riverview, FL 33579, United States of America",
    latitude: "27.817921",
    longitude: "-82.299324",
  },
  {
    id: 1636,
    address:
      "14120 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1263661",
    longitude: "-81.5055529",
  },
  {
    id: 1637,
    address:
      "15433 Porter Road, Winter Garden, FL 34787, United States of America",
    latitude: "28.45278272",
    longitude: "-81.61750934",
  },
  {
    id: 1638,
    address:
      "15629 Trinity Fall Way, Bradenton, FL 34212, United States of America",
    latitude: "27.50331151",
    longitude: "-82.382964",
  },
  {
    id: 1639,
    address:
      "2916 Sea Grape Drive South, Fernandina Beach, FL 32034, United States of America",
    latitude: "30.62631429",
    longitude: "-81.46655523",
  },
  {
    id: 1640,
    address:
      "3242 Mangrove Island Drive, Meadow Woods, FL 32824, United States of America",
    latitude: "28.3844032",
    longitude: "-81.3458454",
  },
  {
    id: 1641,
    address:
      "5544 Pamplona Way, Sarasota County, FL 34233, United States of America",
    latitude: "27.27438928",
    longitude: "-82.45964877",
  },
  {
    id: 1642,
    address:
      "825 Seminole Sky Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72839555",
    longitude: "-82.44603079",
  },
  {
    id: 1643,
    address:
      "109 Terracina Drive, Saint Augustine, FL 32092, United States of America",
    latitude: "29.9511199",
    longitude: "-81.49612613",
  },
  {
    id: 1644,
    address: "1125 Oakcrest, Brandon, FL 33510, United States of America",
    latitude: "27.95839255",
    longitude: "-82.30568606",
  },
  {
    id: 1645,
    address:
      "12269 Lake Boulevard, Starkey Ranch, FL 34655, United States of America",
    latitude: "28.18664122",
    longitude: "-82.61180475",
  },
  {
    id: 1646,
    address:
      "14087 Tropical Kingbird Way, Riverview, FL 33579, United States of America",
    latitude: "27.779574",
    longitude: "-82.321847",
  },
  {
    id: 1647,
    address:
      "14452 Scottburgh Glen Drive, Riverview, FL 33598, United States of America",
    latitude: "27.76308635",
    longitude: "-82.31952042",
  },
  {
    id: 1648,
    address:
      "15403 Trinity Fall Way, Bradenton, FL 34212, United States of America",
    latitude: "27.50561731",
    longitude: "-82.38449719",
  },
  {
    id: 1649,
    address:
      "403 Pink Coral Lane, New Smyrna Beach, FL 32168, United States of America",
    latitude: "29.0222132",
    longitude: "-80.9784664",
  },
  {
    id: 1650,
    address:
      "5730 Rock Dove Drive, Sarasota County, FL 34241, United States of America",
    latitude: "27.27073303",
    longitude: "-82.43731143",
  },
  {
    id: 1651,
    address:
      "15960 Tisons bluff road, Jacksonville, FL 32218, United States of America",
    latitude: "30.52890617",
    longitude: "-81.61762566",
  },
  {
    id: 1652,
    address:
      "1162 Tinkers Cove Lane, Jacksonville, FL 32211, United States of America",
    latitude: "30.33311444",
    longitude: "-81.55841055",
  },
  {
    id: 1653,
    address:
      "1258 Limpkin Lane, Clay County, FL 32068, United States of America",
    latitude: "30.13727174",
    longitude: "-81.86054732",
  },
  {
    id: 1654,
    address:
      "13791 Rangeland Boulevard, Starkey Ranch, FL 34656, United States of America",
    latitude: "28.1979601",
    longitude: "-82.5908356",
  },
  {
    id: 1655,
    address:
      "1838 Harbour Blue Street, Ruskin, FL 33570, United States of America",
    latitude: "27.7342627",
    longitude: "-82.40952257",
  },
  {
    id: 1656,
    address:
      "32048 Pinfeld Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.1882896",
    longitude: "-82.28602368",
  },
  {
    id: 1657,
    address:
      "5709 Wild Sage Circle, Sarasota, FL 34238, United States of America",
    latitude: "27.266348",
    longitude: "-82.451926",
  },
  {
    id: 1658,
    address:
      "12520 Hammock Pointe Circle, Clermont, FL 34711, United States of America",
    latitude: "28.5177922",
    longitude: "-81.7495446",
  },
  {
    id: 1659,
    address:
      "16112 Hampton Crossing Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.43523",
    longitude: "-81.648369",
  },
  {
    id: 1660,
    address:
      "22774 Cherokee Rose Place, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.23391445",
    longitude: "-82.43920961",
  },
  {
    id: 1661,
    address: "24548 SW 11th Road, Newberry, FL 32669, United States of America",
    latitude: "29.640646",
    longitude: "-82.601674",
  },
  {
    id: 1662,
    address: "9624 Oak Glade Avenue, Tampa, FL 33647, United States of America",
    latitude: "28.16551955",
    longitude: "-82.32962039",
  },
  {
    id: 1663,
    address:
      "18470 Whyteleafe Court, Pasco County, FL 34638, United States of America",
    latitude: "28.20840634",
    longitude: "-82.51031387",
  },
  {
    id: 1664,
    address:
      "108 Nunna Rock Trail, St. Augustine, FL 32092, United States of America",
    latitude: "29.94370873",
    longitude: "-81.48780473",
  },
  {
    id: 1665,
    address:
      "12210 Creek Preserve Drive, Riverview, FL 33579, United States of America",
    latitude: "27.82459835",
    longitude: "-82.26228784",
  },
  {
    id: 1666,
    address:
      "1520 Finchburg Street, Minneola, FL 34715, United States of America",
    latitude: "28.5840962",
    longitude: "-81.73581031",
  },
  {
    id: 1667,
    address:
      "15998 Willow Bluff Court, Jacksonville, FL 32218, United States of America",
    latitude: "30.5309644",
    longitude: "-81.61777546",
  },
  {
    id: 1668,
    address:
      "220 Barrington Drive, Haines City, FL 33844, United States of America",
    latitude: "28.087836",
    longitude: "-81.615798",
  },
  {
    id: 1669,
    address:
      "2645 Rail Spur, Starkey Ranch, FL 33556, United States of America",
    latitude: "28.19696371",
    longitude: "-82.5975557",
  },
  {
    id: 1670,
    address:
      "4730 Havilland Drive, Mount Dora, FL 32757, United States of America",
    latitude: "28.78266087",
    longitude: "-81.60198129",
  },
  {
    id: 1671,
    address:
      "1010 Seminole Sky Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.73063995",
    longitude: "-82.45021794",
  },
  {
    id: 1672,
    address:
      "157 South Coopers Hawk Way, Palm Coast, FL 32164, United States of America",
    latitude: "29.44121434",
    longitude: "-81.18978342",
  },
  {
    id: 1673,
    address:
      "32122 Goddard Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.17629261",
    longitude: "-82.28162635",
  },
  {
    id: 1674,
    address:
      "4411 Vista Point Lane, Orange Park, FL 32065, United States of America",
    latitude: "30.16022465",
    longitude: "-81.86166023",
  },
  {
    id: 1675,
    address:
      "8637 Turnstone Shore Lane, Riverview, FL 33578, United States of America",
    latitude: "27.887022",
    longitude: "-82.352577",
  },
  {
    id: 1676,
    address:
      "2587 Eagle Bay Boulevard, Buenaventura Lakes, FL 34743, United States of America",
    latitude: "28.337076",
    longitude: "-81.338868",
  },
  {
    id: 1677,
    address:
      "12138 Ridge Crossing Way, Jacksonville, FL 32226, United States of America",
    latitude: "30.456727",
    longitude: "-81.533534",
  },
  {
    id: 1678,
    address: "14302 Italia Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.769249",
    longitude: "-82.32733",
  },
  {
    id: 1679,
    address:
      "3143 South Northview Road, Plant City, FL 33566, United States of America",
    latitude: "27.97644107",
    longitude: "-82.12675017",
  },
  {
    id: 1680,
    address:
      "6524 Nestall Court, Apollo Beach, FL 33572, United States of America",
    latitude: "27.7770179",
    longitude: "-82.37176337",
  },
  {
    id: 1681,
    address:
      "7221 Nightshade Drive, Riverview, FL 33578, United States of America",
    latitude: "27.874527",
    longitude: "-82.364829",
  },
  {
    id: 1682,
    address:
      "779 Fiddleleaf Circle, West Melbourne, FL 32904, United States of America",
    latitude: "28.04922656",
    longitude: "-80.68819977",
  },
  {
    id: 1683,
    address:
      "12729 Geneva Glade Drive, Riverview, FL 33579, United States of America",
    latitude: "27.80719",
    longitude: "-82.33695381",
  },
  {
    id: 1684,
    address:
      "11942 Grand Kempston Drive, Gibsonton, FL 33534, United States of America",
    latitude: "27.8265291",
    longitude: "-82.36541902",
  },
  {
    id: 1685,
    address:
      "143 Traveler Palm Court, Palm Valley, FL 32082, United States of America",
    latitude: "30.18119289",
    longitude: "-81.3879328",
  },
  {
    id: 1686,
    address:
      "15512 Caynor Ash Lane, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.74574555",
    longitude: "-82.37631057",
  },
  {
    id: 1687,
    address:
      "5121 Suncatcher Drive, Pasco County, FL 33545, United States of America",
    latitude: "28.2317503",
    longitude: "-82.27746685",
  },
  {
    id: 1688,
    address:
      "7502 Sea Mark Court, Apollo Beach, FL 33572, United States of America",
    latitude: "27.76797186",
    longitude: "-82.36989506",
  },
  {
    id: 1689,
    address:
      "8989 Devon Pines Drive, Jacksonville, FL 32211, United States of America",
    latitude: "30.334703",
    longitude: "-81.559203",
  },
  {
    id: 1690,
    address: "1745 Bonser Road, Minneola, FL 34715, United States of America",
    latitude: "28.58483781",
    longitude: "-81.73401473",
  },
  {
    id: 1691,
    address:
      "3803 Radley Drive, West Melbourne, FL 32904, United States of America",
    latitude: "28.04433519",
    longitude: "-80.65070337",
  },
  {
    id: 1692,
    address:
      "433 Cranbrook Court, Orange Park, FL 32065, United States of America",
    latitude: "30.17859414",
    longitude: "-81.85522708",
  },
  {
    id: 1693,
    address:
      "1154 Sawgrass Pointe Drive, Meadow Woods, FL 32824, United States of America",
    latitude: "28.3827062",
    longitude: "-81.35796462",
  },
  {
    id: 1694,
    address:
      "138 Wayfare Lane, Jacksonville, FL 32081, United States of America",
    latitude: "30.1152015",
    longitude: "-81.4473123",
  },
  {
    id: 1695,
    address:
      "534 Drysdale Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.18285767",
    longitude: "-81.8518633",
  },
  {
    id: 1696,
    address:
      "10313 Riverdale Rise Drive, Riverview, FL 33578, United States of America",
    latitude: "27.824575",
    longitude: "-82.335771",
  },
  {
    id: 1697,
    address:
      "19411 Paddock View Drive, Tampa, FL 33647, United States of America",
    latitude: "28.16864872",
    longitude: "-82.29912942",
  },
  {
    id: 1698,
    address:
      "32471 Sunny Parke Drive, Fernandina Beach, FL 32034, United States of America",
    latitude: "30.611013",
    longitude: "-81.542345",
  },
  {
    id: 1699,
    address:
      "3509 San Moise Place, Plant City, FL 33567, United States of America",
    latitude: "27.9602843",
    longitude: "-82.1582537",
  },
  {
    id: 1700,
    address:
      "36 Privado Court, St. Augustine, FL 32095, United States of America",
    latitude: "30.03286107",
    longitude: "-81.39042431",
  },
  {
    id: 1701,
    address:
      "5288 11th Street East, Bradenton, FL 34203, United States of America",
    latitude: "27.4492901",
    longitude: "-82.55234398",
  },
  {
    id: 1702,
    address:
      "611 Amber Creek Drive, Jacksonville, FL 32218, United States of America",
    latitude: "30.4931398",
    longitude: "-81.6082964",
  },
  {
    id: 1703,
    address:
      "8691 Bayview Crossing Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.425202",
    longitude: "-81.637595",
  },
  {
    id: 1704,
    address:
      "11502 Warren Oaks Place, Riverview, FL 33578, United States of America",
    latitude: "27.83286975",
    longitude: "-82.33109325",
  },
  {
    id: 1705,
    address: "3156 Dark Sky Drive, Harmony, FL 34773, United States of America",
    latitude: "28.20295658",
    longitude: "-81.15809272",
  },
  {
    id: 1706,
    address:
      "36123 Markree Castle Avenue, Dade City, FL 33525, United States of America",
    latitude: "28.352898",
    longitude: "-82.21811504",
  },
  {
    id: 1707,
    address:
      "4563 Coachford Drive, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.22320812",
    longitude: "-82.30716704",
  },
  {
    id: 1708,
    address:
      "7406 Benes Trail, Jacksonville, FL 32244, United States of America",
    latitude: "30.21137225",
    longitude: "-81.755351",
  },
  {
    id: 1709,
    address:
      "8650 Mabel Drive, Jacksonville, FL 32256, United States of America",
    latitude: "30.2200054",
    longitude: "-81.5033265",
  },
  {
    id: 1710,
    address:
      "10202 Strawberry Tetra Drive, Riverview, FL 33578, United States of America",
    latitude: "27.84958801",
    longitude: "-82.33924498",
  },
  {
    id: 1711,
    address:
      "11941 Story Time Drive, Orlando, FL 32832, United States of America",
    latitude: "28.42598808",
    longitude: "-81.21024453",
  },
  {
    id: 1712,
    address:
      "15066 Durbin Cove Way, Jacksonville, FL 32259, United States of America",
    latitude: "30.1053944",
    longitude: "-81.5285226",
  },
  {
    id: 1713,
    address:
      "3609 Creswick Circle, Orange County, FL 32829, United States of America",
    latitude: "28.50041177",
    longitude: "-81.24181001",
  },
  {
    id: 1714,
    address:
      "55 Spring Park Avenue, Nocatee, FL 32081, United States of America",
    latitude: "30.10369974",
    longitude: "-81.45377919",
  },
  {
    id: 1715,
    address:
      "10997 History Avenue, Orlando, FL 32832, United States of America",
    latitude: "28.42469121",
    longitude: "-81.21733141",
  },
  {
    id: 1716,
    address:
      "16471 Centipede Street, Clermont, FL 34714, United States of America",
    latitude: "28.4033185",
    longitude: "-81.6830909",
  },
  {
    id: 1717,
    address:
      "28904 Perilli Place, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.21347136",
    longitude: "-82.33854206",
  },
  {
    id: 1718,
    address: "468 Shirley Drive, Apopka, FL 32712, United States of America",
    latitude: "28.6865667",
    longitude: "-81.522302",
  },
  {
    id: 1719,
    address:
      "1231 Yorkshire Court, Four Corners, FL 33896, United States of America",
    latitude: "28.250337",
    longitude: "-81.638015",
  },
  {
    id: 1720,
    address:
      "1370 Coopers Hawk Way, Clay County, FL 32068, United States of America",
    latitude: "30.13724971",
    longitude: "-81.85856115",
  },
  {
    id: 1721,
    address:
      "3317 North Ravello Lane, Saint Augustine, FL 32092, United States of America",
    latitude: "29.9559115",
    longitude: "-81.480141",
  },
  {
    id: 1722,
    address:
      "3603 Plymouth Run, Lakewood Ranch, FL 34211, United States of America",
    latitude: "27.46743095",
    longitude: "-82.42576182",
  },
  {
    id: 1723,
    address: "8243 Nandina Drive, Sarasota, FL 34240, United States of America",
    latitude: "27.31450866",
    longitude: "-82.40034794",
  },
  {
    id: 1724,
    address:
      "4744 Woods Landing Lane, Progress Village, FL 33619, United States of America",
    latitude: "27.906238",
    longitude: "-82.36265583",
  },
  {
    id: 1725,
    address:
      "4854 Grassendale Terrace, Sanford, FL 32771, United States of America",
    latitude: "28.81777158",
    longitude: "-81.33645237",
  },
  {
    id: 1726,
    address:
      "4902 Boat Landing Drive, St. Augustine, FL 32092, United States of America",
    latitude: "29.94353385",
    longitude: "-81.52791848",
  },
  {
    id: 1727,
    address:
      "5145 Brilliance Circle, Cocoa, FL 32926, United States of America",
    latitude: "28.37357073",
    longitude: "-80.80876954",
  },
  {
    id: 1728,
    address:
      "7119 Sentinel Falls, Missouri City, TX 77459, United States of America",
    latitude: "29.52421642",
    longitude: "-95.55830234",
  },
  {
    id: 1729,
    address:
      "819 Marsh Reed Drive, Winter Garden, FL 34787, United States of America",
    latitude: "28.5310416",
    longitude: "-81.6089656",
  },
  {
    id: 1730,
    address:
      "11849 Thicket Wood Drive, Riverview, FL 33579, United States of America",
    latitude: "27.817215",
    longitude: "-82.29911",
  },
  {
    id: 1731,
    address:
      "14139 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1269187",
    longitude: "-81.5060969",
  },
  {
    id: 1732,
    address:
      "14432 Black Lake Preserve Street, Winter Garden, FL 34787, United States of America",
    latitude: "28.5356834",
    longitude: "-81.602937",
  },
  {
    id: 1733,
    address:
      "2662 Northwest 147th Street, Alachua County, FL 32669, United States of America",
    latitude: "29.67780433",
    longitude: "-82.499811",
  },
  {
    id: 1734,
    address:
      "2820 Esmeralda Drive, Sarasota, FL 34243, United States of America",
    latitude: "27.39528785",
    longitude: "-82.52928319",
  },
  {
    id: 1735,
    address:
      "43 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07791766",
    longitude: "-81.52259848",
  },
  {
    id: 1736,
    address:
      "508 Serenity Mill Loop, Amanda, FL 33570, United States of America",
    latitude: "27.6937558",
    longitude: "-82.44164947",
  },
  {
    id: 1737,
    address:
      "139 Prince Albert Avenue, Fruit Cove, FL 32259, United States of America",
    latitude: "30.09283908",
    longitude: "-81.58403595",
  },
  {
    id: 1738,
    address:
      "25 Pine Beach Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.026602",
    longitude: "-81.628379",
  },
  {
    id: 1739,
    address:
      "32836 Emily Loop, Wesley Chapel, FL 33543, United States of America",
    latitude: "28.21234996",
    longitude: "-82.27279493",
  },
  {
    id: 1740,
    address:
      "3676 Tuckerton Drive, Pasco County, FL 34638, United States of America",
    latitude: "28.210256",
    longitude: "-82.513004",
  },
  {
    id: 1741,
    address:
      "433 Serenity Mill Loop, Amanda, FL 33570, United States of America",
    latitude: "27.69432982",
    longitude: "-82.44114433",
  },
  {
    id: 1742,
    address:
      "4415 Mount Bandon Drive, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.220116",
    longitude: "-82.50044127",
  },
  {
    id: 1743,
    address:
      "1101 Dillard Drive SE, Palm Bay, FL 32909, United States of America",
    latitude: "27.931155",
    longitude: "-80.656535",
  },
  {
    id: 1744,
    address:
      "147 Vivian James Drive, St. Augustine, FL 32092, United States of America",
    latitude: "29.97919195",
    longitude: "-81.5245033",
  },
  {
    id: 1745,
    address:
      "16191 Wind View Lane, Winter Garden, FL 34787, United States of America",
    latitude: "28.43726796",
    longitude: "-81.64119354",
  },
  {
    id: 1746,
    address:
      "21108 Passive Porch Drive, Land O' Lakes, FL 34637, United States of America",
    latitude: "28.284005",
    longitude: "-82.466786",
  },
  {
    id: 1747,
    address:
      "23052 Wood Violet Court, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.23599332",
    longitude: "-82.43592191",
  },
  {
    id: 1748,
    address:
      "27 Privado Court, St. Augustine, FL 32095, United States of America",
    latitude: "30.032948",
    longitude: "-81.389815",
  },
  {
    id: 1749,
    address:
      "337 Heritage Oaks Drive, Jacksonville, FL 32259, United States of America",
    latitude: "30.07489223",
    longitude: "-81.52427366",
  },
  {
    id: 1750,
    address:
      "460 Porta Rosa Circle, St. Augustine, FL 32092, United States of America",
    latitude: "29.9526875",
    longitude: "-81.48093534",
  },
  {
    id: 1751,
    address: "620 Dogwood Run, Bradenton, FL 34212, United States of America",
    latitude: "27.49425441",
    longitude: "-82.41671627",
  },
  {
    id: 1752,
    address: "1214 Oakcrest, Brandon, FL 33510, United States of America",
    latitude: "27.95893015",
    longitude: "-82.30612355",
  },
  {
    id: 1753,
    address:
      "13460 Canopy Creek Drive, Citrus Park, FL 33625, United States of America",
    latitude: "28.0713988",
    longitude: "-82.5458168",
  },
  {
    id: 1754,
    address:
      "247 Woodland Greens Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.099154",
    longitude: "-81.460064",
  },
  {
    id: 1755,
    address:
      "11547 Brighton Knoll Loop, Riverview, FL 33579, United States of America",
    latitude: "27.77973786",
    longitude: "-82.30751214",
  },
  {
    id: 1756,
    address:
      "11650 Palmetto Pine Street, Riverview, FL 33569, United States of America",
    latitude: "27.827669",
    longitude: "-82.302961",
  },
  {
    id: 1757,
    address:
      "4061 Lindever Lane, Bradenton, FL 34221, United States of America",
    latitude: "27.5487679",
    longitude: "-82.5229561",
  },
  {
    id: 1758,
    address:
      "4206 Alex Rose Court, Jacksonville, FL 32223, United States of America",
    latitude: "30.14584412",
    longitude: "-81.59770053",
  },
  {
    id: 1759,
    address:
      "5012 Inshore Landing Drive, Apollo Beach, FL 33572, United States of America",
    latitude: "27.736322",
    longitude: "-82.436949",
  },
  {
    id: 1760,
    address:
      "626 Champions Gate Boulevard, DeLand, FL 32724, United States of America",
    latitude: "29.0072992",
    longitude: "-81.2783261",
  },
  {
    id: 1761,
    address:
      "7504 Lantern Park Avenue, Apollo Beach, FL 33572, United States of America",
    latitude: "27.767158",
    longitude: "-82.369939",
  },
  {
    id: 1762,
    address:
      "5201 Villa Rosa Avenue, Osceola County, FL 34771, United States of America",
    latitude: "28.302411",
    longitude: "-81.231175",
  },
  {
    id: 1763,
    address:
      "1266 Fountain Coin Loop, Orlando, FL 32828, United States of America",
    latitude: "28.54829633",
    longitude: "-81.15690567",
  },
  {
    id: 1764,
    address:
      "1276 Sangria Circle, Rockledge, FL 32955, United States of America",
    latitude: "28.34440136",
    longitude: "-80.75380304",
  },
  {
    id: 1765,
    address:
      "4207 Shrewbury Place, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.21769936",
    longitude: "-82.49875497",
  },
  {
    id: 1766,
    address: "4239 Adelaar Drive, Tatum, FL 34240, United States of America",
    latitude: "27.322913",
    longitude: "-82.4212797",
  },
  {
    id: 1767,
    address: "5925 Anise Drive, Sarasota, FL 34238, United States of America",
    latitude: "27.26135012",
    longitude: "-82.4510298",
  },
  {
    id: 1768,
    address:
      "6703 Trent Creek Drive, Greater Sun Center, FL 33573, United States of America",
    latitude: "27.74577325",
    longitude: "-82.37755864",
  },
  {
    id: 1769,
    address:
      "14307 Orchard Hills Boulevard, Winter Garden, FL 34787, United States of America",
    latitude: "28.49275886",
    longitude: "-81.60557929",
  },
  {
    id: 1770,
    address:
      "1527 Acadia Harbor Place, Brandon, FL 33511, United States of America",
    latitude: "27.91363005",
    longitude: "-82.33245311",
  },
  {
    id: 1771,
    address:
      "2101 Glen Laurel Drive, Apopka, FL 32712, United States of America",
    latitude: "28.7222455",
    longitude: "-81.5442138",
  },
  {
    id: 1772,
    address:
      "3476 Bradley Creek Parkway, Green Cove Springs, FL 32043, United States of America",
    latitude: "30.03185699",
    longitude: "-81.78514115",
  },
  {
    id: 1773,
    address:
      "424 Escalante Court, Saint Augustine Shores, FL 32086, United States of America",
    latitude: "29.79747738",
    longitude: "-81.29958892",
  },
  {
    id: 1774,
    address: "508 Howland Drive, Nocatee, FL 32081, United States of America",
    latitude: "30.098268",
    longitude: "-81.463759",
  },
  {
    id: 1775,
    address:
      "10985 Cherry Laurel Drive, Fort Myers, FL 33912, United States of America",
    latitude: "26.58652934",
    longitude: "-81.80241355",
  },
  {
    id: 1776,
    address:
      "174 Pergola Place, Ormond Beach, FL 32174, United States of America",
    latitude: "29.2763457",
    longitude: "-81.144134",
  },
  {
    id: 1777,
    address:
      "2282 Bolzano Court, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.19003949",
    longitude: "-82.42053249",
  },
  {
    id: 1778,
    address:
      "247 Drayton Avenue, Davenport, FL 33837, United States of America",
    latitude: "28.22842381",
    longitude: "-81.55931522",
  },
  {
    id: 1779,
    address:
      "11225 Great Neck Road, Riverview, FL 33578, United States of America",
    latitude: "27.88772877",
    longitude: "-82.31232035",
  },
  {
    id: 1780,
    address: "2364 Sebago Drive, Lakeland, FL 33805, United States of America",
    latitude: "28.12622777",
    longitude: "-81.91383168",
  },
  {
    id: 1781,
    address:
      "247 Laurel Point Court, DeLand, FL 32724, United States of America",
    latitude: "28.9854084",
    longitude: "-81.2650389",
  },
  {
    id: 1782,
    address:
      "359 Tierra Verde Way, Bradenton, FL 34212, United States of America",
    latitude: "27.50082729",
    longitude: "-82.39025821",
  },
  {
    id: 1783,
    address:
      "3953 Bramblewood Loop, Spring Hill, FL 34609, United States of America",
    latitude: "28.49270112",
    longitude: "-82.50460379",
  },
  {
    id: 1784,
    address:
      "6524 Cypress Crossing Court, Jacksonville, FL 32259, United States of America",
    latitude: "30.1044287",
    longitude: "-81.5274403",
  },
  {
    id: 1785,
    address:
      "11523 Blue Crane Street, Riverview, FL 33569, United States of America",
    latitude: "27.82951725",
    longitude: "-82.31007805",
  },
  {
    id: 1786,
    address:
      "233 Parsons Woods Drive, Brandon, FL 33584, United States of America",
    latitude: "27.9654568",
    longitude: "-82.28100394",
  },
  {
    id: 1787,
    address:
      "2353 Silver View Drive, Lakeland, FL 33811, United States of America",
    latitude: "28.01724762",
    longitude: "-82.00787599",
  },
  {
    id: 1788,
    address:
      "2727 Marton Oak Boulevard, North Port, FL 34289, United States of America",
    latitude: "27.07895208",
    longitude: "-82.12511445",
  },
  {
    id: 1789,
    address:
      "33179 Azalea Ridge Drive, Wesley Chapel, FL 33545, United States of America",
    latitude: "28.25953243",
    longitude: "-82.2679684",
  },
  {
    id: 1790,
    address:
      "13029 Boggy Pointe Drive, Meadow Woods, FL 32824, United States of America",
    latitude: "28.37904334",
    longitude: "-81.35156466",
  },
  {
    id: 1791,
    address:
      "765 West Kings College Drive, Fruit Cove, FL 32259, United States of America",
    latitude: "30.09459176",
    longitude: "-81.58705147",
  },
  {
    id: 1792,
    address:
      "10569 Standing Stone Drive, Wimauma, FL 33598, United States of America",
    latitude: "27.76362335",
    longitude: "-82.32168795",
  },
  {
    id: 1793,
    address:
      "1088 Autumn Pines Drive, Orange Park, FL 32065, United States of America",
    latitude: "30.15336085",
    longitude: "-81.85497173",
  },
  {
    id: 1794,
    address:
      "1308 Harbour Blue Street, Ruskin, FL 33570, United States of America",
    latitude: "27.72993383",
    longitude: "-82.40847842",
  },
  {
    id: 1795,
    address:
      "14354 Orchard Hills Boulevard, Winter Garden, FL 34787, United States of America",
    latitude: "28.492491",
    longitude: "-81.606546",
  },
  {
    id: 1796,
    address:
      "2973 Calvano Drive, Land O' Lakes, FL 34639, United States of America",
    latitude: "28.19481164",
    longitude: "-82.4198338",
  },
  {
    id: 1797,
    address:
      "821 Greenshank Drive, Haines City, FL 33844, United States of America",
    latitude: "28.14727",
    longitude: "-81.622979",
  },
  {
    id: 1798,
    address: "24533 SW 11th Road, Newberry, FL 32669, United States of America",
    latitude: "29.640308",
    longitude: "-82.601522",
  },
  {
    id: 1799,
    address:
      "10704 Clover Walk Dr, Orlando, FL 32825, United States of America",
    latitude: "28.52895999",
    longitude: "-81.2292673",
  },
  {
    id: 1800,
    address:
      "1205 Trailwater Street, Ruskin, FL 33570, United States of America",
    latitude: "27.72907567",
    longitude: "-82.40684639",
  },
  {
    id: 1801,
    address:
      "14815 Opal Ridge Place, Wimauma, FL 33598, United States of America",
    latitude: "27.756092",
    longitude: "-82.315906",
  },
  {
    id: 1802,
    address:
      "1801 Greenwood Valley Drive, Plant City, FL 33563, United States of America",
    latitude: "27.9938058",
    longitude: "-82.11596267",
  },
  {
    id: 1803,
    address:
      "1917 Broad Winged Hawk Drive, Ruskin, FL 33570, United States of America",
    latitude: "27.72715988",
    longitude: "-82.40855203",
  },
  {
    id: 1804,
    address:
      "8912 Ambrosia Drive, Dripping Springs, TX 78738, United States of America",
    latitude: "30.28591307",
    longitude: "-98.02642813",
  },
  {
    id: 1805,
    address:
      "12125 Sawgrass Reserve Boulevard, Meadow Woods, FL 32824, United States of America",
    latitude: "28.3887451",
    longitude: "-81.34220381",
  },
  {
    id: 1806,
    address:
      "14330 White Moss Way, Winter Garden, FL 34787, United States of America",
    latitude: "28.4935116",
    longitude: "-81.60572048",
  },
  {
    id: 1807,
    address:
      "209 Willow Ridge Drive, Jacksonville, FL 32081, United States of America",
    latitude: "30.1191864",
    longitude: "-81.4448961",
  },
  {
    id: 1808,
    address: "276 Wallrock Court, Ocoee, FL 34761, United States of America",
    latitude: "28.61938756",
    longitude: "-81.53923181",
  },
  {
    id: 1809,
    address:
      "6031 Sweet Birch Drive, Riverview, FL 33578, United States of America",
    latitude: "27.890639",
    longitude: "-82.355704",
  },
  {
    id: 1810,
    address:
      "958 Revere Avenue, Haines City, FL 33844, United States of America",
    latitude: "28.12918402",
    longitude: "-81.61806719",
  },
  {
    id: 1811,
    address:
      "103 Carnation Street, Jacksonville, FL 32259, United States of America",
    latitude: "30.07777109",
    longitude: "-81.52433636",
  },
  {
    id: 1812,
    address:
      "21430 Starry Eyes Way, Land O' Lakes, FL 34637, United States of America",
    latitude: "28.27580525",
    longitude: "-82.46160263",
  },
  {
    id: 1813,
    address:
      "4066 Brookshire Circle, Eustis, FL 32736, United States of America",
    latitude: "28.85075295",
    longitude: "-81.63492819",
  },
  {
    id: 1814,
    address:
      "4926 Reflecting Pond Circle, Wimauma, FL 33598, United States of America",
    latitude: "27.7062568",
    longitude: "-82.33624859",
  },
  {
    id: 1815,
    address:
      "6125 35th Court East, Bradenton, FL 34203, United States of America",
    latitude: "27.43137141",
    longitude: "-82.5180139",
  },
  {
    id: 1816,
    address:
      "6317 Mighty Eagle Way, Sarasota, FL 34241, United States of America",
    latitude: "27.29411439",
    longitude: "-82.41845991",
  },
  {
    id: 1817,
    address:
      "947 Maypole Drive, South Apopka, FL 32703, United States of America",
    latitude: "28.6500146",
    longitude: "-81.52392097",
  },
  {
    id: 1818,
    address:
      "10130 Newminster Loop, Apollo Beach, FL 33573, United States of America",
    latitude: "27.76339547",
    longitude: "-82.34025236",
  },
  {
    id: 1819,
    address:
      "11350 Hudson Hills Lane, Riverview, FL 33579, United States of America",
    latitude: "27.772798",
    longitude: "-82.316796",
  },
  {
    id: 1820,
    address:
      "11901 Ledbury Commons Drive, Gibsonton, FL 33534, United States of America",
    latitude: "27.82804065",
    longitude: "-82.36213119",
  },
  {
    id: 1821,
    address:
      "12230 Woodview Drive, Jacksonville, FL 32246, United States of America",
    latitude: "30.3162834",
    longitude: "-81.4950507",
  },
  {
    id: 1822,
    address:
      "14032 Corrine Circle, Jacksonville, FL 32258, United States of America",
    latitude: "30.1272326",
    longitude: "-81.5070271",
  },
  {
    id: 1823,
    address:
      "185 Terracina Drive, Saint Augustine, FL 32092, United States of America",
    latitude: "29.9499829",
    longitude: "-81.49244379",
  },
  {
    id: 1824,
    address: "2300 Nutmeg Lane, Palm Bay, FL 32909, United States of America",
    latitude: "27.936315",
    longitude: "-80.660621",
  },
  {
    id: 1825,
    address: "849 Haring Lane, Mount Dora, FL 32757, United States of America",
    latitude: "28.8039078",
    longitude: "-81.6201437",
  },
  {
    id: 1826,
    address:
      "11907 Sand Myrtle Road, Riverview, FL 33579, United States of America",
    latitude: "27.79887372",
    longitude: "-82.2920319",
  },
  {
    id: 1827,
    address:
      "4197 Eagle Landing Parkway, Orange Park, FL 32065, United States of America",
    latitude: "30.1587225",
    longitude: "-81.86470221",
  },
  {
    id: 1828,
    address:
      "6217 Horse Mill Place, Palmetto, FL 34221, United States of America",
    latitude: "27.570381",
    longitude: "-82.49328",
  },
  {
    id: 1829,
    address:
      "6328 Waves End Place, Apollo Beach, FL 33572, United States of America",
    latitude: "27.76900098",
    longitude: "-82.36984634",
  },
  {
    id: 1830,
    address:
      "14953 Flowing Gold Drive, Manatee County, FL 34212, United States of America",
    latitude: "27.50377439",
    longitude: "-82.39193999",
  },
  {
    id: 1831,
    address:
      "14074 Carson Court, Jacksonville, FL 32224, United States of America",
    latitude: "30.2746304",
    longitude: "-81.4434333",
  },
  {
    id: 1832,
    address:
      "3760 Tuckerton Drive, Land O' Lakes, FL 34638, United States of America",
    latitude: "28.21042008",
    longitude: "-82.51155121",
  },
];

export default jobsiteLocations;
