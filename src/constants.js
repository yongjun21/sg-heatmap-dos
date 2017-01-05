export const ONEMAP_TOKEN = process.env.ONEMAP_TOKEN

export const ONEMAP_ENDPOINTS = [
  'getEconomicStatus',
  'getEducationAttending',
  'getEthnicGroup',
  'getHouseholdMonthlyIncomeWork',
  'getHouseholdSize',
  'getHouseholdStructure',
  'getIncomeFromWork',
  'getIndustry',
  'getLanguageLiterate',
  'getMaritalStatus',
  'getModeOfTransportSchool',
  'getModeOfTransportWork',
  'getOccupation',
  'getPopulationAgeGroup',
  'getReligion',
  'getSpokenAtHome',
  'getTenancy',
  'getTypeOfDwellingHousehold',
  'getTypeOfDwellingPop'
]

export const WITHGENDER = [
  'getEconomicStatus',
  'getMaritalStatus'
]

export const DATAGOVSG_ENDPOINTS = {
  '2016.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2016/2016/09/22/json/subzone-dwelling-type-2016.json',
  '2015.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2015/2016/10/19/json/subzone-dwelling-type-2015.json',
  '2014.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2014/2016/10/19/json/subzone-dwelling-type-2014.json',
  '2013.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2013/2016/10/19/json/subzone-dwelling-type-2013.json',
  '2012.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2012/2016/10/19/json/subzone-dwelling-type-2012.json',
  '2011.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2011/2016/10/18/json/subzone-dwelling-type-2011.json',
  '2010.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2010/2016/10/18/json/subzone-dwelling-type-2010.json',
  '2009.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2009/2016/10/18/json/subzone-dwelling-type-2009.json',
  '2008.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2008/2016/10/18/json/subzone-dwelling-type-2008.json',
  '2007.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2007/2016/10/21/json/subzone-dwelling-type-2007.json',
  '2006.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2006/2016/10/21/json/subzone-dwelling-type-2006.json',
  '2005.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2005/2016/10/21/json/subzone-dwelling-type-2005.json',
  '2004.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2004/2016/10/20/json/subzone-dwelling-type-2004.json',
  '2003.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2003/2016/10/19/json/subzone-dwelling-type-2003.json',
  '2002.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2002/2016/10/19/json/subzone-dwelling-type-2002.json',
  '2001.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2001/2016/10/21/json/subzone-dwelling-type-2001.json',
  '2000.DwellingType': 'https://geo.data.gov.sg/subzone-dwelling-type-2000/2016/10/24/json/subzone-dwelling-type-2000.json',
  '2016.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2016/2016/09/22/json/subzone-age-male-2016.json',
  '2015.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2015/2016/10/19/json/subzone-age-male-2015.json',
  '2014.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2014/2016/10/19/json/subzone-age-male-2014.json',
  '2013.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2013/2016/10/19/json/subzone-age-male-2013.json',
  '2012.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2012/2016/10/19/json/subzone-age-male-2012.json',
  '2011.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2011/2016/10/18/json/subzone-age-male-2011.json',
  '2010.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2010/2016/10/18/json/subzone-age-male-2010.json',
  '2009.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2009/2016/10/18/json/subzone-age-male-2009.json',
  '2008.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2008/2016/10/18/json/subzone-age-male-2008.json',
  '2007.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2007/2016/10/21/json/subzone-age-male-2007.json',
  '2006.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2006/2016/10/21/json/subzone-age-male-2006.json',
  '2005.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2005/2016/10/21/json/subzone-age-male-2005.json',
  '2004.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2004/2016/10/20/json/subzone-age-male-2004.json',
  '2003.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2003/2016/10/19/json/subzone-age-male-2003.json',
  '2002.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2002/2016/10/19/json/subzone-age-male-2002.json',
  '2001.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2001/2016/10/20/json/subzone-age-male-2001.json',
  '2000.Resident.Male': 'https://geo.data.gov.sg/subzone-age-male-2000/2016/10/24/json/subzone-age-male-2000.json',
  '2016.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2016/2016/09/22/json/subzone-age-gender-2016.json',
  '2015.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2015/2016/10/19/json/subzone-age-gender-2015.json',
  '2014.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2014/2016/10/19/json/subzone-age-gender-2014.json',
  '2013.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2013/2016/10/19/json/subzone-age-gender-2013.json',
  '2012.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2012/2016/10/19/json/subzone-age-gender-2012.json',
  '2011.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2011/2016/10/18/json/subzone-age-gender-2011.json',
  '2010.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2010/2016/10/18/json/subzone-age-gender-2010.json',
  '2009.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2009/2016/10/18/json/subzone-age-gender-2009.json',
  '2008.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2008/2016/10/18/json/subzone-age-gender-2008.json',
  '2007.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2007/2016/10/21/json/subzone-age-gender-2007.json',
  '2006.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2006/2016/10/21/json/subzone-age-gender-2006.json',
  '2005.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2005/2016/10/21/json/subzone-age-gender-2005.json',
  '2004.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2004/2016/10/20/json/subzone-age-gender-2004.json',
  '2003.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2003/2016/10/19/json/subzone-age-gender-2003.json',
  '2002.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2002/2016/10/19/json/subzone-age-gender-2002.json',
  '2001.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2001/2016/10/20/json/subzone-age-gender-2001.json',
  '2000.Resident': 'https://geo.data.gov.sg/subzone-age-gender-2000/2016/10/24/json/subzone-age-gender-2000.json'
}

export const YEAR2MAP = {
  mp98: ['2000'],
  mp08: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
  mp14: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
}