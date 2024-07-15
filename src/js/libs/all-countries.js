const allCountries = [
   {
      "nameCommon": "Wallis and Futuna",
      "nameOfficial": "Territory of the Wallis and Futuna Islands",
      "region": "Oceania",
      "flag": "wf",
      "subregion": "Polynesia",
      "currency": "XPF"
   },
   {
      "nameCommon": "Iceland",
      "nameOfficial": "Iceland",
      "region": "Europe",
      "flag": "is",
      "subregion": "Northern Europe",
      "currency": "ISK"
   },
   {
      "nameCommon": "Luxembourg",
      "nameOfficial": "Grand Duchy of Luxembourg",
      "region": "Europe",
      "flag": "lu",
      "subregion": "Western Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Mali",
      "nameOfficial": "Republic of Mali",
      "region": "Africa",
      "flag": "ml",
      "subregion": "Western Africa",
      "currency": "XOF"
   },
   {
      "nameCommon": "Comoros",
      "nameOfficial": "Union of the Comoros",
      "region": "Africa",
      "flag": "km",
      "subregion": "Eastern Africa",
      "currency": "KMF"
   },
   {
      "nameCommon": "Australia",
      "nameOfficial": "Commonwealth of Australia",
      "region": "Oceania",
      "flag": "au",
      "subregion": "Australia and New Zealand",
      "currency": "AUD"
   },
   {
      "nameCommon": "Estonia",
      "nameOfficial": "Republic of Estonia",
      "region": "Europe",
      "flag": "ee",
      "subregion": "Northern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Canada",
      "nameOfficial": "Canada",
      "region": "Americas",
      "flag": "ca",
      "subregion": "North America",
      "currency": "CAD"
   },
   {
      "nameCommon": "Belarus",
      "nameOfficial": "Republic of Belarus",
      "region": "Europe",
      "flag": "by",
      "subregion": "Eastern Europe",
      "currency": "BYN"
   },
   {
      "nameCommon": "Guyana",
      "nameOfficial": "Co-operative Republic of Guyana",
      "region": "Americas",
      "flag": "gy",
      "subregion": "South America",
      "currency": "GYD"
   },
   {
      "nameCommon": "Gambia",
      "nameOfficial": "Republic of the Gambia",
      "region": "Africa",
      "flag": "gm",
      "subregion": "Western Africa",
      "currency": "GMD"
   },
   {
      "nameCommon": "Tunisia",
      "nameOfficial": "Tunisian Republic",
      "region": "Africa",
      "flag": "tn",
      "subregion": "Northern Africa",
      "currency": "TND"
   },
   {
      "nameCommon": "Cameroon",
      "nameOfficial": "Republic of Cameroon",
      "region": "Africa",
      "flag": "cm",
      "subregion": "Middle Africa",
      "currency": "XAF"
   },
   {
      "nameCommon": "Rwanda",
      "nameOfficial": "Republic of Rwanda",
      "region": "Africa",
      "flag": "rw",
      "subregion": "Eastern Africa",
      "currency": "RWF"
   },
   {
      "nameCommon": "Cambodia",
      "nameOfficial": "Kingdom of Cambodia",
      "region": "Asia",
      "flag": "kh",
      "subregion": "South-Eastern Asia",
      "currency": "KHR"
   },
   {
      "nameCommon": "Benin",
      "nameOfficial": "Republic of Benin",
      "region": "Africa",
      "flag": "bj",
      "subregion": "Western Africa",
      "currency": "XOF"
   },
   {
      "nameCommon": "Greece",
      "nameOfficial": "Hellenic Republic",
      "region": "Europe",
      "flag": "gr",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "South Korea",
      "nameOfficial": "Republic of Korea",
      "region": "Asia",
      "flag": "kr",
      "subregion": "Eastern Asia",
      "currency": "KRW"
   },
   {
      "nameCommon": "Mauritius",
      "nameOfficial": "Republic of Mauritius",
      "region": "Africa",
      "flag": "mu",
      "subregion": "Eastern Africa",
      "currency": "MUR"
   },
   {
      "nameCommon": "United States Virgin Islands",
      "nameOfficial": "Virgin Islands of the United States",
      "region": "Americas",
      "flag": "vi",
      "subregion": "Caribbean",
      "currency": "USD"
   },
   {
      "nameCommon": "Åland Islands",
      "nameOfficial": "Åland Islands",
      "region": "Europe",
      "flag": "ax",
      "subregion": "Northern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "San Marino",
      "nameOfficial": "Republic of San Marino",
      "region": "Europe",
      "flag": "sm",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Maldives",
      "nameOfficial": "Republic of the Maldives",
      "region": "Asia",
      "flag": "mv",
      "subregion": "Southern Asia",
      "currency": "MVR"
   },
   {
      "nameCommon": "Vanuatu",
      "nameOfficial": "Republic of Vanuatu",
      "region": "Oceania",
      "flag": "vu",
      "subregion": "Melanesia",
      "currency": "VUV"
   },
   {
      "nameCommon": "Malawi",
      "nameOfficial": "Republic of Malawi",
      "region": "Africa",
      "flag": "mw",
      "subregion": "Eastern Africa",
      "currency": "MWK"
   },
   {
      "nameCommon": "Egypt",
      "nameOfficial": "Arab Republic of Egypt",
      "region": "Africa",
      "flag": "eg",
      "subregion": "Northern Africa",
      "currency": "EGP"
   },
   {
      "nameCommon": "Senegal",
      "nameOfficial": "Republic of Senegal",
      "region": "Africa",
      "flag": "sn",
      "subregion": "Western Africa",
      "currency": "XOF"
   },
   {
      "nameCommon": "Georgia",
      "nameOfficial": "Georgia",
      "region": "Asia",
      "flag": "ge",
      "subregion": "Western Asia",
      "currency": "GEL"
   },
   {
      "nameCommon": "New Zealand",
      "nameOfficial": "New Zealand",
      "region": "Oceania",
      "flag": "nz",
      "subregion": "Australia and New Zealand",
      "currency": "NZD"
   },
   {
      "nameCommon": "Cape Verde",
      "nameOfficial": "Republic of Cabo Verde",
      "region": "Africa",
      "flag": "cv",
      "subregion": "Western Africa",
      "currency": "CVE"
   },
   {
      "nameCommon": "Italy",
      "nameOfficial": "Italian Republic",
      "region": "Europe",
      "flag": "it",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Monaco",
      "nameOfficial": "Principality of Monaco",
      "region": "Europe",
      "flag": "mc",
      "subregion": "Western Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Slovakia",
      "nameOfficial": "Slovak Republic",
      "region": "Europe",
      "flag": "sk",
      "subregion": "Central Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Uruguay",
      "nameOfficial": "Oriental Republic of Uruguay",
      "region": "Americas",
      "flag": "uy",
      "subregion": "South America",
      "currency": "UYU"
   },
   {
      "nameCommon": "Laos",
      "nameOfficial": "Lao People's Democratic Republic",
      "region": "Asia",
      "flag": "la",
      "subregion": "South-Eastern Asia",
      "currency": "LAK"
   },
   {
      "nameCommon": "Faroe Islands",
      "nameOfficial": "Faroe Islands",
      "region": "Europe",
      "flag": "fo",
      "subregion": "Northern Europe",
      "currency": "DKK"
   },
   {
      "nameCommon": "Niue",
      "nameOfficial": "Niue",
      "region": "Oceania",
      "flag": "nu",
      "subregion": "Polynesia",
      "currency": "NZD"
   },
   {
      "nameCommon": "North Macedonia",
      "nameOfficial": "Republic of North Macedonia",
      "region": "Europe",
      "flag": "mk",
      "subregion": "Southeast Europe",
      "currency": "MKD"
   },
   {
      "nameCommon": "Chile",
      "nameOfficial": "Republic of Chile",
      "region": "Americas",
      "flag": "cl",
      "subregion": "South America",
      "currency": "CLP"
   },
   {
      "nameCommon": "Cyprus",
      "nameOfficial": "Republic of Cyprus",
      "region": "Europe",
      "flag": "cy",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Macau",
      "nameOfficial": "Macao Special Administrative Region of the People's Republic of China",
      "region": "Asia",
      "flag": "mo",
      "subregion": "Eastern Asia",
      "currency": "MOP"
   },
   {
      "nameCommon": "El Salvador",
      "nameOfficial": "Republic of El Salvador",
      "region": "Americas",
      "flag": "sv",
      "subregion": "Central America",
      "currency": "USD"
   },
   {
      "nameCommon": "Jordan",
      "nameOfficial": "Hashemite Kingdom of Jordan",
      "region": "Asia",
      "flag": "jo",
      "subregion": "Western Asia",
      "currency": "JOD"
   },
   {
      "nameCommon": "Jamaica",
      "nameOfficial": "Jamaica",
      "region": "Americas",
      "flag": "jm",
      "subregion": "Caribbean",
      "currency": "JMD"
   },
   {
      "nameCommon": "Barbados",
      "nameOfficial": "Barbados",
      "region": "Americas",
      "flag": "bb",
      "subregion": "Caribbean",
      "currency": "BBD"
   },
   {
      "nameCommon": "Western Sahara",
      "nameOfficial": "Sahrawi Arab Democratic Republic",
      "region": "Africa",
      "flag": "eh",
      "subregion": "Northern Africa",
      "currency": "DZD"
   },
   {
      "nameCommon": "Qatar",
      "nameOfficial": "State of Qatar",
      "region": "Asia",
      "flag": "qa",
      "subregion": "Western Asia",
      "currency": "QAR"
   },
   {
      "nameCommon": "Guatemala",
      "nameOfficial": "Republic of Guatemala",
      "region": "Americas",
      "flag": "gt",
      "subregion": "Central America",
      "currency": "GTQ"
   },
   {
      "nameCommon": "Micronesia",
      "nameOfficial": "Federated States of Micronesia",
      "region": "Oceania",
      "flag": "fm",
      "subregion": "Micronesia",
      "currency": "USD"
   },
   {
      "nameCommon": "Montserrat",
      "nameOfficial": "Montserrat",
      "region": "Americas",
      "flag": "ms",
      "subregion": "Caribbean",
      "currency": "XCD"
   },
   {
      "nameCommon": "Papua New Guinea",
      "nameOfficial": "Independent State of Papua New Guinea",
      "region": "Oceania",
      "flag": "pg",
      "subregion": "Melanesia",
      "currency": "PGK"
   },
   {
      "nameCommon": "Brazil",
      "nameOfficial": "Federative Republic of Brazil",
      "region": "Americas",
      "flag": "br",
      "subregion": "South America",
      "currency": "BRL"
   },
   {
      "nameCommon": "Lithuania",
      "nameOfficial": "Republic of Lithuania",
      "region": "Europe",
      "flag": "lt",
      "subregion": "Northern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "French Guiana",
      "nameOfficial": "Guiana",
      "region": "Americas",
      "flag": "gf",
      "subregion": "South America",
      "currency": "EUR"
   },
   {
      "nameCommon": "Moldova",
      "nameOfficial": "Republic of Moldova",
      "region": "Europe",
      "flag": "md",
      "subregion": "Eastern Europe",
      "currency": "MDL"
   },
   {
      "nameCommon": "Kyrgyzstan",
      "nameOfficial": "Kyrgyz Republic",
      "region": "Asia",
      "flag": "kg",
      "subregion": "Central Asia",
      "currency": "KGS"
   },
   {
      "nameCommon": "Curaçao",
      "nameOfficial": "Country of Curaçao",
      "region": "Americas",
      "flag": "cw",
      "subregion": "Caribbean",
      "currency": "ANG"
   },
   {
      "nameCommon": "Vietnam",
      "nameOfficial": "Socialist Republic of Vietnam",
      "region": "Asia",
      "flag": "vn",
      "subregion": "South-Eastern Asia",
      "currency": "VND"
   },
   {
      "nameCommon": "Angola",
      "nameOfficial": "Republic of Angola",
      "region": "Africa",
      "flag": "ao",
      "subregion": "Middle Africa",
      "currency": "AOA"
   },
   {
      "nameCommon": "Malaysia",
      "nameOfficial": "Malaysia",
      "region": "Asia",
      "flag": "my",
      "subregion": "South-Eastern Asia",
      "currency": "MYR"
   },
   {
      "nameCommon": "Switzerland",
      "nameOfficial": "Swiss Confederation",
      "region": "Europe",
      "flag": "ch",
      "subregion": "Western Europe",
      "currency": "CHF"
   },
   {
      "nameCommon": "Thailand",
      "nameOfficial": "Kingdom of Thailand",
      "region": "Asia",
      "flag": "th",
      "subregion": "South-Eastern Asia",
      "currency": "THB"
   },
   {
      "nameCommon": "Dominican Republic",
      "nameOfficial": "Dominican Republic",
      "region": "Americas",
      "flag": "do",
      "subregion": "Caribbean",
      "currency": "DOP"
   },
   {
      "nameCommon": "Uzbekistan",
      "nameOfficial": "Republic of Uzbekistan",
      "region": "Asia",
      "flag": "uz",
      "subregion": "Central Asia",
      "currency": "UZS"
   },
   {
      "nameCommon": "Chad",
      "nameOfficial": "Republic of Chad",
      "region": "Africa",
      "flag": "td",
      "subregion": "Middle Africa",
      "currency": "XAF"
   },
   {
      "nameCommon": "Cocos (Keeling) Islands",
      "nameOfficial": "Territory of the Cocos (Keeling) Islands",
      "region": "Oceania",
      "flag": "cc",
      "subregion": "Australia and New Zealand",
      "currency": "AUD"
   },
   {
      "nameCommon": "Guinea",
      "nameOfficial": "Republic of Guinea",
      "region": "Africa",
      "flag": "gn",
      "subregion": "Western Africa",
      "currency": "GNF"
   },
   {
      "nameCommon": "Turks and Caicos Islands",
      "nameOfficial": "Turks and Caicos Islands",
      "region": "Americas",
      "flag": "tc",
      "subregion": "Caribbean",
      "currency": "USD"
   },
   {
      "nameCommon": "Puerto Rico",
      "nameOfficial": "Commonwealth of Puerto Rico",
      "region": "Americas",
      "flag": "pr",
      "subregion": "Caribbean",
      "currency": "USD"
   },
   {
      "nameCommon": "Bhutan",
      "nameOfficial": "Kingdom of Bhutan",
      "region": "Asia",
      "flag": "bt",
      "subregion": "Southern Asia",
      "currency": "BTN"
   },
   {
      "nameCommon": "Cayman Islands",
      "nameOfficial": "Cayman Islands",
      "region": "Americas",
      "flag": "ky",
      "subregion": "Caribbean",
      "currency": "KYD"
   },
   {
      "nameCommon": "Marshall Islands",
      "nameOfficial": "Republic of the Marshall Islands",
      "region": "Oceania",
      "flag": "mh",
      "subregion": "Micronesia",
      "currency": "USD"
   },
   {
      "nameCommon": "Anguilla",
      "nameOfficial": "Anguilla",
      "region": "Americas",
      "flag": "ai",
      "subregion": "Caribbean",
      "currency": "XCD"
   },
   {
      "nameCommon": "Mauritania",
      "nameOfficial": "Islamic Republic of Mauritania",
      "region": "Africa",
      "flag": "mr",
      "subregion": "Western Africa",
      "currency": "MRU"
   },
   {
      "nameCommon": "Norway",
      "nameOfficial": "Kingdom of Norway",
      "region": "Europe",
      "flag": "no",
      "subregion": "Northern Europe",
      "currency": "NOK"
   },
   {
      "nameCommon": "Martinique",
      "nameOfficial": "Martinique",
      "region": "Americas",
      "flag": "mq",
      "subregion": "Caribbean",
      "currency": "EUR"
   },
   {
      "nameCommon": "Israel",
      "nameOfficial": "State of Israel",
      "region": "Asia",
      "flag": "il",
      "subregion": "Western Asia",
      "currency": "ILS"
   },
   {
      "nameCommon": "Saint Barthélemy",
      "nameOfficial": "Collectivity of Saint Barthélemy",
      "region": "Americas",
      "flag": "bl",
      "subregion": "Caribbean",
      "currency": "EUR"
   },
   {
      "nameCommon": "Ecuador",
      "nameOfficial": "Republic of Ecuador",
      "region": "Americas",
      "flag": "ec",
      "subregion": "South America",
      "currency": "USD"
   },
   {
      "nameCommon": "Grenada",
      "nameOfficial": "Grenada",
      "region": "Americas",
      "flag": "gd",
      "subregion": "Caribbean",
      "currency": "XCD"
   },
   {
      "nameCommon": "Croatia",
      "nameOfficial": "Republic of Croatia",
      "region": "Europe",
      "flag": "hr",
      "subregion": "Southeast Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Brunei",
      "nameOfficial": "Nation of Brunei, Abode of Peace",
      "region": "Asia",
      "flag": "bn",
      "subregion": "South-Eastern Asia",
      "currency": "BND"
   },
   {
      "nameCommon": "Iraq",
      "nameOfficial": "Republic of Iraq",
      "region": "Asia",
      "flag": "iq",
      "subregion": "Western Asia",
      "currency": "IQD"
   },
   {
      "nameCommon": "Japan",
      "nameOfficial": "Japan",
      "region": "Asia",
      "flag": "jp",
      "subregion": "Eastern Asia",
      "currency": "JPY"
   },
   {
      "nameCommon": "Lesotho",
      "nameOfficial": "Kingdom of Lesotho",
      "region": "Africa",
      "flag": "ls",
      "subregion": "Southern Africa",
      "currency": "LSL"
   },
   {
      "nameCommon": "Tuvalu",
      "nameOfficial": "Tuvalu",
      "region": "Oceania",
      "flag": "tv",
      "subregion": "Polynesia",
      "currency": "AUD"
   },
   {
      "nameCommon": "Heard Island and McDonald Islands",
      "nameOfficial": "Heard Island and McDonald Islands",
      "region": "Antarctic",
      "flag": "hm",
      "currency": ""
   },
   {
      "nameCommon": "Finland",
      "nameOfficial": "Republic of Finland",
      "region": "Europe",
      "flag": "fi",
      "subregion": "Northern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "South Sudan",
      "nameOfficial": "Republic of South Sudan",
      "region": "Africa",
      "flag": "ss",
      "subregion": "Middle Africa",
      "currency": "SSP"
   },
   {
      "nameCommon": "United States Minor Outlying Islands",
      "nameOfficial": "United States Minor Outlying Islands",
      "region": "Americas",
      "flag": "um",
      "subregion": "North America",
      "currency": "USD"
   },
   {
      "nameCommon": "Saint Helena, Ascension and Tristan da Cunha",
      "nameOfficial": "Saint Helena, Ascension and Tristan da Cunha",
      "region": "Africa",
      "flag": "sh",
      "subregion": "Western Africa",
      "currency": "GBP"
   },
   {
      "nameCommon": "Afghanistan",
      "nameOfficial": "Islamic Republic of Afghanistan",
      "region": "Asia",
      "flag": "af",
      "subregion": "Southern Asia",
      "currency": "AFN"
   },
   {
      "nameCommon": "Solomon Islands",
      "nameOfficial": "Solomon Islands",
      "region": "Oceania",
      "flag": "sb",
      "subregion": "Melanesia",
      "currency": "SBD"
   },
   {
      "nameCommon": "China",
      "nameOfficial": "People's Republic of China",
      "region": "Asia",
      "flag": "cn",
      "subregion": "Eastern Asia",
      "currency": "CNY"
   },
   {
      "nameCommon": "Eritrea",
      "nameOfficial": "State of Eritrea",
      "region": "Africa",
      "flag": "er",
      "subregion": "Eastern Africa",
      "currency": "ERN"
   },
   {
      "nameCommon": "Russia",
      "nameOfficial": "Russian Federation",
      "region": "Europe",
      "flag": "ru",
      "subregion": "Eastern Europe",
      "currency": "RUB"
   },
   {
      "nameCommon": "Andorra",
      "nameOfficial": "Principality of Andorra",
      "region": "Europe",
      "flag": "ad",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Armenia",
      "nameOfficial": "Republic of Armenia",
      "region": "Asia",
      "flag": "am",
      "subregion": "Western Asia",
      "currency": "AMD"
   },
   {
      "nameCommon": "Austria",
      "nameOfficial": "Republic of Austria",
      "region": "Europe",
      "flag": "at",
      "subregion": "Central Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Suriname",
      "nameOfficial": "Republic of Suriname",
      "region": "Americas",
      "flag": "sr",
      "subregion": "South America",
      "currency": "SRD"
   },
   {
      "nameCommon": "Spain",
      "nameOfficial": "Kingdom of Spain",
      "region": "Europe",
      "flag": "es",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Tokelau",
      "nameOfficial": "Tokelau",
      "region": "Oceania",
      "flag": "tk",
      "subregion": "Polynesia",
      "currency": "NZD"
   },
   {
      "nameCommon": "Bahamas",
      "nameOfficial": "Commonwealth of the Bahamas",
      "region": "Americas",
      "flag": "bs",
      "subregion": "Caribbean",
      "currency": "BSD"
   },
   {
      "nameCommon": "Sint Maarten",
      "nameOfficial": "Sint Maarten",
      "region": "Americas",
      "flag": "sx",
      "subregion": "Caribbean",
      "currency": "ANG"
   },
   {
      "nameCommon": "Belize",
      "nameOfficial": "Belize",
      "region": "Americas",
      "flag": "bz",
      "subregion": "Central America",
      "currency": "BZD"
   },
   {
      "nameCommon": "Jersey",
      "nameOfficial": "Bailiwick of Jersey",
      "region": "Europe",
      "flag": "je",
      "subregion": "Northern Europe",
      "currency": "GBP"
   },
   {
      "nameCommon": "Sweden",
      "nameOfficial": "Kingdom of Sweden",
      "region": "Europe",
      "flag": "se",
      "subregion": "Northern Europe",
      "currency": "SEK"
   },
   {
      "nameCommon": "Botswana",
      "nameOfficial": "Republic of Botswana",
      "region": "Africa",
      "flag": "bw",
      "subregion": "Southern Africa",
      "currency": "BWP"
   },
   {
      "nameCommon": "Isle of Man",
      "nameOfficial": "Isle of Man",
      "region": "Europe",
      "flag": "im",
      "subregion": "Northern Europe",
      "currency": "GBP"
   },
   {
      "nameCommon": "United Arab Emirates",
      "nameOfficial": "United Arab Emirates",
      "region": "Asia",
      "flag": "ae",
      "subregion": "Western Asia",
      "currency": "AED"
   },
   {
      "nameCommon": "Iran",
      "nameOfficial": "Islamic Republic of Iran",
      "region": "Asia",
      "flag": "ir",
      "subregion": "Southern Asia",
      "currency": "IRR"
   },
   {
      "nameCommon": "Gabon",
      "nameOfficial": "Gabonese Republic",
      "region": "Africa",
      "flag": "ga",
      "subregion": "Middle Africa",
      "currency": "XAF"
   },
   {
      "nameCommon": "Saint Kitts and Nevis",
      "nameOfficial": "Federation of Saint Christopher and Nevis",
      "region": "Americas",
      "flag": "kn",
      "subregion": "Caribbean",
      "currency": "XCD"
   },
   {
      "nameCommon": "Equatorial Guinea",
      "nameOfficial": "Republic of Equatorial Guinea",
      "region": "Africa",
      "flag": "gq",
      "subregion": "Middle Africa",
      "currency": "XAF"
   },
   {
      "nameCommon": "São Tomé and Príncipe",
      "nameOfficial": "Democratic Republic of São Tomé and Príncipe",
      "region": "Africa",
      "flag": "st",
      "subregion": "Middle Africa",
      "currency": "STN"
   },
   {
      "nameCommon": "Greenland",
      "nameOfficial": "Greenland",
      "region": "Americas",
      "flag": "gl",
      "subregion": "North America",
      "currency": "DKK"
   },
   {
      "nameCommon": "Bangladesh",
      "nameOfficial": "People's Republic of Bangladesh",
      "region": "Asia",
      "flag": "bd",
      "subregion": "Southern Asia",
      "currency": "BDT"
   },
   {
      "nameCommon": "Romania",
      "nameOfficial": "Romania",
      "region": "Europe",
      "flag": "ro",
      "subregion": "Southeast Europe",
      "currency": "RON"
   },
   {
      "nameCommon": "British Indian Ocean Territory",
      "nameOfficial": "British Indian Ocean Territory",
      "region": "Africa",
      "flag": "io",
      "subregion": "Eastern Africa",
      "currency": "USD"
   },
   {
      "nameCommon": "Sudan",
      "nameOfficial": "Republic of the Sudan",
      "region": "Africa",
      "flag": "sd",
      "subregion": "Northern Africa",
      "currency": "SDG"
   },
   {
      "nameCommon": "Bosnia and Herzegovina",
      "nameOfficial": "Bosnia and Herzegovina",
      "region": "Europe",
      "flag": "ba",
      "subregion": "Southeast Europe",
      "currency": "BAM"
   },
   {
      "nameCommon": "Malta",
      "nameOfficial": "Republic of Malta",
      "region": "Europe",
      "flag": "mt",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Seychelles",
      "nameOfficial": "Republic of Seychelles",
      "region": "Africa",
      "flag": "sc",
      "subregion": "Eastern Africa",
      "currency": "SCR"
   },
   {
      "nameCommon": "Sri Lanka",
      "nameOfficial": "Democratic Socialist Republic of Sri Lanka",
      "region": "Asia",
      "flag": "lk",
      "subregion": "Southern Asia",
      "currency": "LKR"
   },
   {
      "nameCommon": "Mexico",
      "nameOfficial": "United Mexican States",
      "region": "Americas",
      "flag": "mx",
      "subregion": "North America",
      "currency": "MXN"
   },
   {
      "nameCommon": "Yemen",
      "nameOfficial": "Republic of Yemen",
      "region": "Asia",
      "flag": "ye",
      "subregion": "Western Asia",
      "currency": "YER"
   },
   {
      "nameCommon": "British Virgin Islands",
      "nameOfficial": "Virgin Islands",
      "region": "Americas",
      "flag": "vg",
      "subregion": "Caribbean",
      "currency": "USD"
   },
   {
      "nameCommon": "Netherlands",
      "nameOfficial": "Kingdom of the Netherlands",
      "region": "Europe",
      "flag": "nl",
      "subregion": "Western Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Paraguay",
      "nameOfficial": "Republic of Paraguay",
      "region": "Americas",
      "flag": "py",
      "subregion": "South America",
      "currency": "PYG"
   },
   {
      "nameCommon": "United Kingdom",
      "nameOfficial": "United Kingdom of Great Britain and Northern Ireland",
      "region": "Europe",
      "flag": "gb",
      "subregion": "Northern Europe",
      "currency": "GBP"
   },
   {
      "nameCommon": "Venezuela",
      "nameOfficial": "Bolivarian Republic of Venezuela",
      "region": "Americas",
      "flag": "ve",
      "subregion": "South America",
      "currency": "VES"
   },
   {
      "nameCommon": "Bouvet Island",
      "nameOfficial": "Bouvet Island",
      "region": "Antarctic",
      "flag": "bv",
      "currency": ""
   },
   {
      "nameCommon": "Ukraine",
      "nameOfficial": "Ukraine",
      "region": "Europe",
      "flag": "ua",
      "subregion": "Eastern Europe",
      "currency": "UAH"
   },
   {
      "nameCommon": "Morocco",
      "nameOfficial": "Kingdom of Morocco",
      "region": "Africa",
      "flag": "ma",
      "subregion": "Northern Africa",
      "currency": "MAD"
   },
   {
      "nameCommon": "Portugal",
      "nameOfficial": "Portuguese Republic",
      "region": "Europe",
      "flag": "pt",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Pakistan",
      "nameOfficial": "Islamic Republic of Pakistan",
      "region": "Asia",
      "flag": "pk",
      "subregion": "Southern Asia",
      "currency": "PKR"
   },
   {
      "nameCommon": "Saint Vincent and the Grenadines",
      "nameOfficial": "Saint Vincent and the Grenadines",
      "region": "Americas",
      "flag": "vc",
      "subregion": "Caribbean",
      "currency": "XCD"
   },
   {
      "nameCommon": "North Korea",
      "nameOfficial": "Democratic People's Republic of Korea",
      "region": "Asia",
      "flag": "kp",
      "subregion": "Eastern Asia",
      "currency": "KPW"
   },
   {
      "nameCommon": "Slovenia",
      "nameOfficial": "Republic of Slovenia",
      "region": "Europe",
      "flag": "si",
      "subregion": "Central Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Ivory Coast",
      "nameOfficial": "Republic of Côte d'Ivoire",
      "region": "Africa",
      "flag": "ci",
      "subregion": "Western Africa",
      "currency": "XOF"
   },
   {
      "nameCommon": "Palestine",
      "nameOfficial": "State of Palestine",
      "region": "Asia",
      "flag": "ps",
      "subregion": "Western Asia",
      "currency": "EGP"
   },
   {
      "nameCommon": "Caribbean Netherlands",
      "nameOfficial": "Bonaire, Sint Eustatius and Saba",
      "region": "Americas",
      "flag": "bq",
      "subregion": "Caribbean",
      "currency": "USD"
   },
   {
      "nameCommon": "Belgium",
      "nameOfficial": "Kingdom of Belgium",
      "region": "Europe",
      "flag": "be",
      "subregion": "Western Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Zimbabwe",
      "nameOfficial": "Republic of Zimbabwe",
      "region": "Africa",
      "flag": "zw",
      "subregion": "Southern Africa",
      "currency": "ZWL"
   },
   {
      "nameCommon": "Tanzania",
      "nameOfficial": "United Republic of Tanzania",
      "region": "Africa",
      "flag": "tz",
      "subregion": "Eastern Africa",
      "currency": "TZS"
   },
   {
      "nameCommon": "Togo",
      "nameOfficial": "Togolese Republic",
      "region": "Africa",
      "flag": "tg",
      "subregion": "Western Africa",
      "currency": "XOF"
   },
   {
      "nameCommon": "Cook Islands",
      "nameOfficial": "Cook Islands",
      "region": "Oceania",
      "flag": "ck",
      "subregion": "Polynesia",
      "currency": "CKD"
   },
   {
      "nameCommon": "Guadeloupe",
      "nameOfficial": "Guadeloupe",
      "region": "Americas",
      "flag": "gp",
      "subregion": "Caribbean",
      "currency": "EUR"
   },
   {
      "nameCommon": "New Caledonia",
      "nameOfficial": "New Caledonia",
      "region": "Oceania",
      "flag": "nc",
      "subregion": "Melanesia",
      "currency": "XPF"
   },
   {
      "nameCommon": "Saint Lucia",
      "nameOfficial": "Saint Lucia",
      "region": "Americas",
      "flag": "lc",
      "subregion": "Caribbean",
      "currency": "XCD"
   },
   {
      "nameCommon": "South Georgia",
      "nameOfficial": "South Georgia and the South Sandwich Islands",
      "region": "Antarctic",
      "flag": "gs",
      "currency": "SHP"
   },
   {
      "nameCommon": "Poland",
      "nameOfficial": "Republic of Poland",
      "region": "Europe",
      "flag": "pl",
      "subregion": "Central Europe",
      "currency": "PLN"
   },
   {
      "nameCommon": "Samoa",
      "nameOfficial": "Independent State of Samoa",
      "region": "Oceania",
      "flag": "ws",
      "subregion": "Polynesia",
      "currency": "WST"
   },
   {
      "nameCommon": "Czechia",
      "nameOfficial": "Czech Republic",
      "region": "Europe",
      "flag": "cz",
      "subregion": "Central Europe",
      "currency": "CZK"
   },
   {
      "nameCommon": "Indonesia",
      "nameOfficial": "Republic of Indonesia",
      "region": "Asia",
      "flag": "id",
      "subregion": "South-Eastern Asia",
      "currency": "IDR"
   },
   {
      "nameCommon": "Bolivia",
      "nameOfficial": "Plurinational State of Bolivia",
      "region": "Americas",
      "flag": "bo",
      "subregion": "South America",
      "currency": "BOB"
   },
   {
      "nameCommon": "Colombia",
      "nameOfficial": "Republic of Colombia",
      "region": "Americas",
      "flag": "co",
      "subregion": "South America",
      "currency": "COP"
   },
   {
      "nameCommon": "Honduras",
      "nameOfficial": "Republic of Honduras",
      "region": "Americas",
      "flag": "hn",
      "subregion": "Central America",
      "currency": "HNL"
   },
   {
      "nameCommon": "Denmark",
      "nameOfficial": "Kingdom of Denmark",
      "region": "Europe",
      "flag": "dk",
      "subregion": "Northern Europe",
      "currency": "DKK"
   },
   {
      "nameCommon": "Central African Republic",
      "nameOfficial": "Central African Republic",
      "region": "Africa",
      "flag": "cf",
      "subregion": "Middle Africa",
      "currency": "XAF"
   },
   {
      "nameCommon": "Libya",
      "nameOfficial": "State of Libya",
      "region": "Africa",
      "flag": "ly",
      "subregion": "Northern Africa",
      "currency": "LYD"
   },
   {
      "nameCommon": "Guinea-Bissau",
      "nameOfficial": "Republic of Guinea-Bissau",
      "region": "Africa",
      "flag": "gw",
      "subregion": "Western Africa",
      "currency": "XOF"
   },
   {
      "nameCommon": "Mongolia",
      "nameOfficial": "Mongolia",
      "region": "Asia",
      "flag": "mn",
      "subregion": "Eastern Asia",
      "currency": "MNT"
   },
   {
      "nameCommon": "DR Congo",
      "nameOfficial": "Democratic Republic of the Congo",
      "region": "Africa",
      "flag": "cd",
      "subregion": "Middle Africa",
      "currency": "CDF"
   },
   {
      "nameCommon": "Falkland Islands",
      "nameOfficial": "Falkland Islands",
      "region": "Americas",
      "flag": "fk",
      "subregion": "South America",
      "currency": "FKP"
   },
   {
      "nameCommon": "Nauru",
      "nameOfficial": "Republic of Nauru",
      "region": "Oceania",
      "flag": "nr",
      "subregion": "Micronesia",
      "currency": "AUD"
   },
   {
      "nameCommon": "Syria",
      "nameOfficial": "Syrian Arab Republic",
      "region": "Asia",
      "flag": "sy",
      "subregion": "Western Asia",
      "currency": "SYP"
   },
   {
      "nameCommon": "Montenegro",
      "nameOfficial": "Montenegro",
      "region": "Europe",
      "flag": "me",
      "subregion": "Southeast Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "France",
      "nameOfficial": "French Republic",
      "region": "Europe",
      "flag": "fr",
      "subregion": "Western Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Zambia",
      "nameOfficial": "Republic of Zambia",
      "region": "Africa",
      "flag": "zm",
      "subregion": "Eastern Africa",
      "currency": "ZMW"
   },
   {
      "nameCommon": "Myanmar",
      "nameOfficial": "Republic of the Union of Myanmar",
      "region": "Asia",
      "flag": "mm",
      "subregion": "South-Eastern Asia",
      "currency": "MMK"
   },
   {
      "nameCommon": "Saint Pierre and Miquelon",
      "nameOfficial": "Saint Pierre and Miquelon",
      "region": "Americas",
      "flag": "pm",
      "subregion": "North America",
      "currency": "EUR"
   },
   {
      "nameCommon": "Costa Rica",
      "nameOfficial": "Republic of Costa Rica",
      "region": "Americas",
      "flag": "cr",
      "subregion": "Central America",
      "currency": "CRC"
   },
   {
      "nameCommon": "Somalia",
      "nameOfficial": "Federal Republic of Somalia",
      "region": "Africa",
      "flag": "so",
      "subregion": "Eastern Africa",
      "currency": "SOS"
   },
   {
      "nameCommon": "Ireland",
      "nameOfficial": "Republic of Ireland",
      "region": "Europe",
      "flag": "ie",
      "subregion": "Northern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "French Polynesia",
      "nameOfficial": "French Polynesia",
      "region": "Oceania",
      "flag": "pf",
      "subregion": "Polynesia",
      "currency": "XPF"
   },
   {
      "nameCommon": "Pitcairn Islands",
      "nameOfficial": "Pitcairn Group of Islands",
      "region": "Oceania",
      "flag": "pn",
      "subregion": "Polynesia",
      "currency": "NZD"
   },
   {
      "nameCommon": "Hungary",
      "nameOfficial": "Hungary",
      "region": "Europe",
      "flag": "hu",
      "subregion": "Central Europe",
      "currency": "HUF"
   },
   {
      "nameCommon": "Turkey",
      "nameOfficial": "Republic of Turkey",
      "region": "Asia",
      "flag": "tr",
      "subregion": "Western Asia",
      "currency": "TRY"
   },
   {
      "nameCommon": "Oman",
      "nameOfficial": "Sultanate of Oman",
      "region": "Asia",
      "flag": "om",
      "subregion": "Western Asia",
      "currency": "OMR"
   },
   {
      "nameCommon": "Guam",
      "nameOfficial": "Guam",
      "region": "Oceania",
      "flag": "gu",
      "subregion": "Micronesia",
      "currency": "USD"
   },
   {
      "nameCommon": "Nepal",
      "nameOfficial": "Federal Democratic Republic of Nepal",
      "region": "Asia",
      "flag": "np",
      "subregion": "Southern Asia",
      "currency": "NPR"
   },
   {
      "nameCommon": "Liechtenstein",
      "nameOfficial": "Principality of Liechtenstein",
      "region": "Europe",
      "flag": "li",
      "subregion": "Western Europe",
      "currency": "CHF"
   },
   {
      "nameCommon": "Madagascar",
      "nameOfficial": "Republic of Madagascar",
      "region": "Africa",
      "flag": "mg",
      "subregion": "Eastern Africa",
      "currency": "MGA"
   },
   {
      "nameCommon": "Kazakhstan",
      "nameOfficial": "Republic of Kazakhstan",
      "region": "Asia",
      "flag": "kz",
      "subregion": "Central Asia",
      "currency": "KZT"
   },
   {
      "nameCommon": "Djibouti",
      "nameOfficial": "Republic of Djibouti",
      "region": "Africa",
      "flag": "dj",
      "subregion": "Eastern Africa",
      "currency": "DJF"
   },
   {
      "nameCommon": "Gibraltar",
      "nameOfficial": "Gibraltar",
      "region": "Europe",
      "flag": "gi",
      "subregion": "Southern Europe",
      "currency": "GIP"
   },
   {
      "nameCommon": "Guernsey",
      "nameOfficial": "Bailiwick of Guernsey",
      "region": "Europe",
      "flag": "gg",
      "subregion": "Northern Europe",
      "currency": "GBP"
   },
   {
      "nameCommon": "Namibia",
      "nameOfficial": "Republic of Namibia",
      "region": "Africa",
      "flag": "na",
      "subregion": "Southern Africa",
      "currency": "NAD"
   },
   {
      "nameCommon": "Republic of the Congo",
      "nameOfficial": "Republic of the Congo",
      "region": "Africa",
      "flag": "cg",
      "subregion": "Middle Africa",
      "currency": "XAF"
   },
   {
      "nameCommon": "Germany",
      "nameOfficial": "Federal Republic of Germany",
      "region": "Europe",
      "flag": "de",
      "subregion": "Western Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Vatican City",
      "nameOfficial": "Vatican City State",
      "region": "Europe",
      "flag": "va",
      "subregion": "Southern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "French Southern and Antarctic Lands",
      "nameOfficial": "Territory of the French Southern and Antarctic Lands",
      "region": "Antarctic",
      "flag": "tf",
      "currency": "EUR"
   },
   {
      "nameCommon": "Albania",
      "nameOfficial": "Republic of Albania",
      "region": "Europe",
      "flag": "al",
      "subregion": "Southeast Europe",
      "currency": "ALL"
   },
   {
      "nameCommon": "Algeria",
      "nameOfficial": "People's Democratic Republic of Algeria",
      "region": "Africa",
      "flag": "dz",
      "subregion": "Northern Africa",
      "currency": "DZD"
   },
   {
      "nameCommon": "Mayotte",
      "nameOfficial": "Department of Mayotte",
      "region": "Africa",
      "flag": "yt",
      "subregion": "Eastern Africa",
      "currency": "EUR"
   },
   {
      "nameCommon": "Haiti",
      "nameOfficial": "Republic of Haiti",
      "region": "Americas",
      "flag": "ht",
      "subregion": "Caribbean",
      "currency": "HTG"
   },
   {
      "nameCommon": "Svalbard and Jan Mayen",
      "nameOfficial": "Svalbard og Jan Mayen",
      "region": "Europe",
      "flag": "sj",
      "subregion": "Northern Europe",
      "currency": "NOK"
   },
   {
      "nameCommon": "Tonga",
      "nameOfficial": "Kingdom of Tonga",
      "region": "Oceania",
      "flag": "to",
      "subregion": "Polynesia",
      "currency": "TOP"
   },
   {
      "nameCommon": "Hong Kong",
      "nameOfficial": "Hong Kong Special Administrative Region of the People's Republic of China",
      "region": "Asia",
      "flag": "hk",
      "subregion": "Eastern Asia",
      "currency": "HKD"
   },
   {
      "nameCommon": "Singapore",
      "nameOfficial": "Republic of Singapore",
      "region": "Asia",
      "flag": "sg",
      "subregion": "South-Eastern Asia",
      "currency": "SGD"
   },
   {
      "nameCommon": "Antigua and Barbuda",
      "nameOfficial": "Antigua and Barbuda",
      "region": "Americas",
      "flag": "ag",
      "subregion": "Caribbean",
      "currency": "XCD"
   },
   {
      "nameCommon": "Saudi Arabia",
      "nameOfficial": "Kingdom of Saudi Arabia",
      "region": "Asia",
      "flag": "sa",
      "subregion": "Western Asia",
      "currency": "SAR"
   },
   {
      "nameCommon": "Cuba",
      "nameOfficial": "Republic of Cuba",
      "region": "Americas",
      "flag": "cu",
      "subregion": "Caribbean",
      "currency": "CUC"
   },
   {
      "nameCommon": "Panama",
      "nameOfficial": "Republic of Panama",
      "region": "Americas",
      "flag": "pa",
      "subregion": "Central America",
      "currency": "PAB"
   },
   {
      "nameCommon": "Liberia",
      "nameOfficial": "Republic of Liberia",
      "region": "Africa",
      "flag": "lr",
      "subregion": "Western Africa",
      "currency": "LRD"
   },
   {
      "nameCommon": "Azerbaijan",
      "nameOfficial": "Republic of Azerbaijan",
      "region": "Asia",
      "flag": "az",
      "subregion": "Western Asia",
      "currency": "AZN"
   },
   {
      "nameCommon": "Latvia",
      "nameOfficial": "Republic of Latvia",
      "region": "Europe",
      "flag": "lv",
      "subregion": "Northern Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Antarctica",
      "nameOfficial": "Antarctica",
      "region": "Antarctic",
      "flag": "aq",
      "currency": ""
   },
   {
      "nameCommon": "Kiribati",
      "nameOfficial": "Independent and Sovereign Republic of Kiribati",
      "region": "Oceania",
      "flag": "ki",
      "subregion": "Micronesia",
      "currency": "AUD"
   },
   {
      "nameCommon": "Ethiopia",
      "nameOfficial": "Federal Democratic Republic of Ethiopia",
      "region": "Africa",
      "flag": "et",
      "subregion": "Eastern Africa",
      "currency": "ETB"
   },
   {
      "nameCommon": "Niger",
      "nameOfficial": "Republic of Niger",
      "region": "Africa",
      "flag": "ne",
      "subregion": "Western Africa",
      "currency": "XOF"
   },
   {
      "nameCommon": "Trinidad and Tobago",
      "nameOfficial": "Republic of Trinidad and Tobago",
      "region": "Americas",
      "flag": "tt",
      "subregion": "Caribbean",
      "currency": "TTD"
   },
   {
      "nameCommon": "Sierra Leone",
      "nameOfficial": "Republic of Sierra Leone",
      "region": "Africa",
      "flag": "sl",
      "subregion": "Western Africa",
      "currency": "SLL"
   },
   {
      "nameCommon": "Mozambique",
      "nameOfficial": "Republic of Mozambique",
      "region": "Africa",
      "flag": "mz",
      "subregion": "Eastern Africa",
      "currency": "MZN"
   },
   {
      "nameCommon": "Palau",
      "nameOfficial": "Republic of Palau",
      "region": "Oceania",
      "flag": "pw",
      "subregion": "Micronesia",
      "currency": "USD"
   },
   {
      "nameCommon": "Fiji",
      "nameOfficial": "Republic of Fiji",
      "region": "Oceania",
      "flag": "fj",
      "subregion": "Melanesia",
      "currency": "FJD"
   },
   {
      "nameCommon": "Réunion",
      "nameOfficial": "Réunion Island",
      "region": "Africa",
      "flag": "re",
      "subregion": "Eastern Africa",
      "currency": "EUR"
   },
   {
      "nameCommon": "Norfolk Island",
      "nameOfficial": "Territory of Norfolk Island",
      "region": "Oceania",
      "flag": "nf",
      "subregion": "Australia and New Zealand",
      "currency": "AUD"
   },
   {
      "nameCommon": "Turkmenistan",
      "nameOfficial": "Turkmenistan",
      "region": "Asia",
      "flag": "tm",
      "subregion": "Central Asia",
      "currency": "TMT"
   },
   {
      "nameCommon": "Tajikistan",
      "nameOfficial": "Republic of Tajikistan",
      "region": "Asia",
      "flag": "tj",
      "subregion": "Central Asia",
      "currency": "TJS"
   },
   {
      "nameCommon": "Lebanon",
      "nameOfficial": "Lebanese Republic",
      "region": "Asia",
      "flag": "lb",
      "subregion": "Western Asia",
      "currency": "LBP"
   },
   {
      "nameCommon": "Nigeria",
      "nameOfficial": "Federal Republic of Nigeria",
      "region": "Africa",
      "flag": "ng",
      "subregion": "Western Africa",
      "currency": "NGN"
   },
   {
      "nameCommon": "United States",
      "nameOfficial": "United States of America",
      "region": "Americas",
      "flag": "us",
      "subregion": "North America",
      "currency": "USD"
   },
   {
      "nameCommon": "Argentina",
      "nameOfficial": "Argentine Republic",
      "region": "Americas",
      "flag": "ar",
      "subregion": "South America",
      "currency": "ARS"
   },
   {
      "nameCommon": "Burkina Faso",
      "nameOfficial": "Burkina Faso",
      "region": "Africa",
      "flag": "bf",
      "subregion": "Western Africa",
      "currency": "XOF"
   },
   {
      "nameCommon": "Christmas Island",
      "nameOfficial": "Territory of Christmas Island",
      "region": "Oceania",
      "flag": "cx",
      "subregion": "Australia and New Zealand",
      "currency": "AUD"
   },
   {
      "nameCommon": "Bermuda",
      "nameOfficial": "Bermuda",
      "region": "Americas",
      "flag": "bm",
      "subregion": "North America",
      "currency": "BMD"
   },
   {
      "nameCommon": "Nicaragua",
      "nameOfficial": "Republic of Nicaragua",
      "region": "Americas",
      "flag": "ni",
      "subregion": "Central America",
      "currency": "NIO"
   },
   {
      "nameCommon": "Eswatini",
      "nameOfficial": "Kingdom of Eswatini",
      "region": "Africa",
      "flag": "sz",
      "subregion": "Southern Africa",
      "currency": "SZL"
   },
   {
      "nameCommon": "Bahrain",
      "nameOfficial": "Kingdom of Bahrain",
      "region": "Asia",
      "flag": "bh",
      "subregion": "Western Asia",
      "currency": "BHD"
   },
   {
      "nameCommon": "Kenya",
      "nameOfficial": "Republic of Kenya",
      "region": "Africa",
      "flag": "ke",
      "subregion": "Eastern Africa",
      "currency": "KES"
   },
   {
      "nameCommon": "Serbia",
      "nameOfficial": "Republic of Serbia",
      "region": "Europe",
      "flag": "rs",
      "subregion": "Southeast Europe",
      "currency": "RSD"
   },
   {
      "nameCommon": "Timor-Leste",
      "nameOfficial": "Democratic Republic of Timor-Leste",
      "region": "Asia",
      "flag": "tl",
      "subregion": "South-Eastern Asia",
      "currency": "USD"
   },
   {
      "nameCommon": "Dominica",
      "nameOfficial": "Commonwealth of Dominica",
      "region": "Americas",
      "flag": "dm",
      "subregion": "Caribbean",
      "currency": "XCD"
   },
   {
      "nameCommon": "Northern Mariana Islands",
      "nameOfficial": "Commonwealth of the Northern Mariana Islands",
      "region": "Oceania",
      "flag": "mp",
      "subregion": "Micronesia",
      "currency": "USD"
   },
   {
      "nameCommon": "Philippines",
      "nameOfficial": "Republic of the Philippines",
      "region": "Asia",
      "flag": "ph",
      "subregion": "South-Eastern Asia",
      "currency": "PHP"
   },
   {
      "nameCommon": "Kosovo",
      "nameOfficial": "Republic of Kosovo",
      "region": "Europe",
      "flag": "xk",
      "subregion": "Southeast Europe",
      "currency": "EUR"
   },
   {
      "nameCommon": "Kuwait",
      "nameOfficial": "State of Kuwait",
      "region": "Asia",
      "flag": "kw",
      "subregion": "Western Asia",
      "currency": "KWD"
   },
   {
      "nameCommon": "Taiwan",
      "nameOfficial": "Republic of China (Taiwan)",
      "region": "Asia",
      "flag": "tw",
      "subregion": "Eastern Asia",
      "currency": "TWD"
   },
   {
      "nameCommon": "Burundi",
      "nameOfficial": "Republic of Burundi",
      "region": "Africa",
      "flag": "bi",
      "subregion": "Eastern Africa",
      "currency": "BIF"
   },
   {
      "nameCommon": "American Samoa",
      "nameOfficial": "American Samoa",
      "region": "Oceania",
      "flag": "as",
      "subregion": "Polynesia",
      "currency": "USD"
   },
   {
      "nameCommon": "Bulgaria",
      "nameOfficial": "Republic of Bulgaria",
      "region": "Europe",
      "flag": "bg",
      "subregion": "Southeast Europe",
      "currency": "BGN"
   },
   {
      "nameCommon": "South Africa",
      "nameOfficial": "Republic of South Africa",
      "region": "Africa",
      "flag": "za",
      "subregion": "Southern Africa",
      "currency": "ZAR"
   },
   {
      "nameCommon": "Peru",
      "nameOfficial": "Republic of Peru",
      "region": "Americas",
      "flag": "pe",
      "subregion": "South America",
      "currency": "PEN"
   },
   {
      "nameCommon": "Aruba",
      "nameOfficial": "Aruba",
      "region": "Americas",
      "flag": "aw",
      "subregion": "Caribbean",
      "currency": "AWG"
   },
   {
      "nameCommon": "Ghana",
      "nameOfficial": "Republic of Ghana",
      "region": "Africa",
      "flag": "gh",
      "subregion": "Western Africa",
      "currency": "GHS"
   },
   {
      "nameCommon": "Saint Martin",
      "nameOfficial": "Saint Martin",
      "region": "Americas",
      "flag": "mf",
      "subregion": "Caribbean",
      "currency": "EUR"
   },
   {
      "nameCommon": "India",
      "nameOfficial": "Republic of India",
      "region": "Asia",
      "flag": "in",
      "subregion": "Southern Asia",
      "currency": "INR"
   },
   {
      "nameCommon": "Uganda",
      "nameOfficial": "Republic of Uganda",
      "region": "Africa",
      "flag": "ug",
      "subregion": "Eastern Africa",
      "currency": "UGX"
   }
]


export default allCountries