// Country code data from:
// https://gist.github.com/maephisto/9228207
// https://github.com/michaelwittig/node-i18n-iso-countries/blob/master/codes.js

var countryToCode = {
    'Afghanistan': 'AFG',
    'Aland Islands': 'ALA',
    'Albania': 'ALB',
    'Algeria': 'DZA',
    'American Samoa': 'ASM',
    'Andorra': 'AND',
    'Angola': 'AGO',
    'Anguilla': 'AIA',
    'Antarctica': 'ATA',
    'Antigua And Barbuda': 'ATG',
    'Argentina': 'ARG',
    'Armenia': 'ARM',
    'Aruba': 'ABW',
    'Australia': 'AUS',
    'Austria': 'AUT',
    'Azerbaijan': 'AZE',
    'Bahamas': 'BHS',
    'Bahrain': 'BHR',
    'Bangladesh': 'BGD',
    'Barbados': 'BRB',
    'Belarus': 'BLR',
    'Belgium': 'BEL',
    'Belize': 'BLZ',
    'Benin': 'BEN',
    'Bermuda': 'BMU',
    'Bhutan': 'BTN',
    'Bolivia': 'BOL',
    'Bosnia And Herzegovina': 'BIH',
    'Botswana': 'BWA',
    'Bouvet Island': 'BVT',
    'Brazil': 'BRA',
    'British Indian Ocean Territory': 'IOT',
    'Brunei Darussalam': 'BRN',
    'Bulgaria': 'BGR',
    'Burkina Faso': 'BFA',
    'Burundi': 'BDI',
    'Cambodia': 'KHM',
    'Cameroon': 'CMR',
    'Canada': 'CAN',
    'Cape Verde': 'CPV',
    'Cayman Islands': 'CYM',
    'Central African Republic': 'CAF',
    'Chad': 'TCD',
    'Chile': 'CHL',
    'China': 'CHN',
    'Christmas Island': 'CXR',
    'Cocos (Keeling) Islands': 'CCK',
    'Colombia': 'COL',
    'Comoros': 'COM',
    'Congo': 'COG',
    'Congo, Democratic Republic': 'COD',
    'Cook Islands': 'COK',
    'Costa Rica': 'CRI',
    'Cote D\'Ivoire': 'CIV',
    'Croatia': 'HRV',
    'Cuba': 'CUB',
    'Cyprus': 'CYP',
    'Czech Republic': 'CZE',
    'Denmark': 'DNK',
    'Djibouti': 'DJI',
    'Dominica': 'DMA',
    'Dominican Republic': 'DOM',
    'Ecuador': 'ECU',
    'Egypt': 'EGY',
    'El Salvador': 'SLV',
    'Equatorial Guinea': 'GNQ',
    'Eritrea': 'ERI',
    'Estonia': 'EST',
    'Ethiopia': 'ETH',
    'Falkland Islands (Malvinas)': 'FLK',
    'Faroe Islands': 'FRO',
    'Fiji': 'FJI',
    'Finland': 'FIN',
    'France': 'FRA',
    'French Guiana': 'GUF',
    'French Polynesia': 'PYF',
    'French Southern Territories': 'ATF',
    'Gabon': 'GAB',
    'Gambia': 'GMB',
    'Georgia': 'GEO',
    'Germany': 'DEU',
    'Ghana': 'GHA',
    'Gibraltar': 'GIB',
    'Greece': 'GRC',
    'Greenland': 'GRL',
    'Grenada': 'GRD',
    'Guadeloupe': 'GLP',
    'Guam': 'GUM',
    'Guatemala': 'GTM',
    'Guernsey': 'GGY',
    'Guinea': 'GIN',
    'Guinea-Bissau': 'GNB',
    'Guyana': 'GUY',
    'Haiti': 'HTI',
    'Heard Island & Mcdonald Islands': 'HMD',
    'Holy See (Vatican City State)': 'VAT',
    'Honduras': 'HND',
    'Hong Kong': 'HKG',
    'Hungary': 'HUN',
    'Iceland': 'ISL',
    'India': 'IND',
    'Indonesia': 'IDN',
    'Iran': 'IRN',
    'Iran, Islamic Republic Of': 'IRN',
    'Iraq': 'IRQ',
    'Ireland': 'IRL',
    'Isle Of Man': 'IMN',
    'Israel': 'ISR',
    'Italy': 'ITA',
    'Jamaica': 'JAM',
    'Japan': 'JPN',
    'Jersey': 'JEY',
    'Jordan': 'JOR',
    'Kazakhstan': 'KAZ',
    'Kenya': 'KEN',
    'Kiribati': 'KIR',
    'Korea': 'KOR',
    'South Korea': 'KOR',
    'Republic of Korea': 'KOR',
    'Kuwait': 'KWT',
    'Kyrgyzstan': 'KGZ',
    'Lao People\'s Democratic Republic': 'LAO',
    'Latvia': 'LVA',
    'Lebanon': 'LBN',
    'Lesotho': 'LSO',
    'Liberia': 'LBR',
    'Libyan Arab Jamahiriya': 'LBY',
    'Liechtenstein': 'LIE',
    'Lithuania': 'LTU',
    'Luxembourg': 'LUX',
    'Macao': 'MAC',
    'Macedonia': 'MKD',
    'Madagascar': 'MDG',
    'Malawi': 'MWI',
    'Malaysia': 'MYS',
    'Maldives': 'MDV',
    'Mali': 'MLI',
    'Malta': 'MLT',
    'Marshall Islands': 'MHL',
    'Martinique': 'MTQ',
    'Mauritania': 'MRT',
    'Mauritius': 'MUS',
    'Mayotte': 'MYT',
    'Mexico': 'MEX',
    'México': 'MEX',
    'Micronesia, Federated States Of': 'FSM',
    'Moldova': 'MDA',
    'Monaco': 'MCO',
    'Mongolia': 'MNG',
    'Montenegro': 'MNE',
    'Montserrat': 'MSR',
    'Morocco': 'MAR',
    'Mozambique': 'MOZ',
    'Myanmar': 'MMR',
    'Namibia': 'NAM',
    'Nauru': 'NRU',
    'Nepal': 'NPL',
    'Netherland': 'NLD',
    'Netherlands': 'NLD',
    'New Caledonia': 'NCL',
    'New Zealand': 'NZL',
    'Nicaragua': 'NIC',
    'Niger': 'NER',
    'Nigeria': 'NGA',
    'Niue': 'NIU',
    'Norfolk Island': 'NFK',
    'Northern Mariana Islands': 'MNP',
    'Norway': 'NOR',
    'Oman': 'OMN',
    'Pakistan': 'PAK',
    'Palau': 'PLW',
    'Palestinian Territory, Occupied': 'PSE',
    'Panama': 'PAN',
    'Papua New Guinea': 'PNG',
    'Paraguay': 'PRY',
    'Peru': 'PER',
    'Philippines': 'PHL',
    'Pitcairn': 'PCN',
    'Poland': 'POL',
    'Portugal': 'PRT',
    'Puerto Rico': 'PRI',
    'Qatar': 'QAT',
    'Reunion': 'REU',
    'Romania': 'ROU',
    'Russia': 'RUS',
    'Russian Federation': 'RUS',
    'Rwanda': 'RWA',
    'Saint Barthelemy': 'BLM',
    'Saint Helena': 'SHN',
    'Saint Kitts And Nevis': 'KNA',
    'Saint Lucia': 'LCA',
    'Saint Martin': 'MAF',
    'Saint Pierre And Miquelon': 'SPM',
    'Saint Vincent And Grenadines': 'VCT',
    'Samoa': 'WSM',
    'San Marino': 'SMR',
    'Sao Tome And Principe': 'STP',
    'Saudi Arabia': 'SAU',
    'Senegal': 'SEN',
    'Serbia': 'SRB',
    'Seychelles': 'SYC',
    'Sierra Leone': 'SLE',
    'Singapore': 'SGP',
    'Slovakia': 'SVK',
    'Slovenia': 'SVN',
    'Solomon Islands': 'SLB',
    'Somalia': 'SOM',
    'South Africa': 'ZAF',
    'South Georgia And Sandwich Isl.': 'SGS',
    'Spain': 'ESP',
    'Sri Lanka': 'LKA',
    'Sudan': 'SDN',
    'Suriname': 'SUR',
    'Svalbard And Jan Mayen': 'SJM',
    'Swaziland': 'SWZ',
    'Sweden': 'SWE',
    'Switzerland': 'CHE',
    'Syrian Arab Republic': 'SYR',
    'Taiwan': 'TWN',
    'Tajikistan': 'TJK',
    'Tanzania': 'TZA',
    'Thailand': 'THA',
    'Timor-Leste': 'TLS',
    'Togo': 'TGO',
    'Tokelau': 'TKL',
    'Tonga': 'TON',
    'Trinidad And Tobago': 'TTO',
    'Tunisia': 'TUN',
    'Turkey': 'TUR',
    'Turkmenistan': 'TKM',
    'Turks And Caicos Islands': 'TCA',
    'Tuvalu': 'TUV',
    'Uganda': 'UGA',
    'Ukraine': 'UKR',
    'UAE': 'ARE',
    'United Arab Emirates': 'ARE',
    'United Kingdom': 'GBR',
    'UK': 'GBR',
    'US': 'USA',
    'United States': 'USA',
    'United States Outlying Islands': 'UMI',
    'Uruguay': 'URY',
    'Uzbekistan': 'UZB',
    'Vanuatu': 'VUT',
    'Venezuela': 'VEN',
    'Vietnam': 'VNM',
    'Viet Nam': 'VNM',
    'Virgin Islands, British': 'VGB',
    'Virgin Islands, U.S.': 'VIR',
    'Wallis And Futuna': 'WLF',
    'Western Sahara': 'ESH',
    'Yemen': 'YEM',
    'Zambia': 'ZMB',
    'Zimbabwe': 'ZWE'
};

// Record all the country codes for checking in getCountryCode()
var codeToCountry = [];
for (var name in countryToCode) {
    if (countryToCode.hasOwnProperty(name)) {
        codeToCountry.push(countryToCode[name]);
    }
}

// Get the corresponding alpha 3 code for the country name
// countryName param can be either full name or alpha 3 country code
// If the countryName is an alpha 3 country code, return it directly
function getCountryCode(countryName) {
    if (countryToCode.hasOwnProperty(countryName)) {
        return countryToCode[countryName];
    } else if (codeToCountry.indexOf(countryName) !== -1) {
        // Already in alpha 3
        return countryName;
    } else {
        return null;
    }
}
