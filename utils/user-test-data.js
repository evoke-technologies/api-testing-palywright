const { faker } = require('@faker-js/faker');
const {writeDataToFile} = require('./xlsx-file-writer')

function createUserTestData() {
    let source = ['website', 'mobile', 'wifi'];
    const hotels = ['12050', '10054', '31867', '56920', '56925', '32948', '36613', '12667', '31865', '31861', '31864', '31569', '32951', '32209', '31862'];

    const randomEmail = faker.internet.email();
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    const randomSource = source[Math.floor(Math.random() * source.length)];
    const randomHotelId = hotels[Math.floor(Math.random() * hotels.length)];
    const data= [
        { firstName: randomFirstName, lastName: randomLastName,email: randomEmail, password: ''}
      ];
    writeDataToFile(data);
    return {
        email: randomEmail,
        firstName: randomFirstName,
        lastName: randomLastName,
        source: randomSource,
        hotelId: randomHotelId
    };
}

function createCompleProfileTestData(){
    const randomPassword = faker.internet.password();
    const streetAddress1 = faker.location.streetAddress();
    const locality = faker.location.city();
    const postalCode = faker.location.zipCode();
    const country_Data = ['US', 'CA'];
    const country = country_Data[Math.floor(Math.random() * country_Data.length)];
    let stateCode;
    if (country === 'US') {
        const countryCode_US_Data = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'NY', 'NC', 'WA', 'WV', 'MA'];
        stateCode = countryCode_US_Data[Math.floor(Math.random() * countryCode_US_Data.length)];
    } else if (country === 'CA') {
        const countryCode_CA_Data = ['NT', 'BC', 'AB'];
        stateCode = countryCode_CA_Data[Math.floor(Math.random() * countryCode_CA_Data.length)];
    }
    const mobileNumber = generateRandomPhoneNumber();

    return {
        password: randomPassword,
        streetAddress1: streetAddress1,
        locality: locality,
        stateCode: stateCode,
        mobileNumber: mobileNumber,
        postalCode: postalCode,
        country: country
    }
}

function generateRandomPhoneNumber() {
    let phoneNumber = '+1';
    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}

module.exports = {createUserTestData,createCompleProfileTestData }