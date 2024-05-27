const SUBSCRIPTION_KEY = process.env.SUBSCRIPTION_KEY || '1c6a4a7a67a64308b666dbbbd4ca8e44';

function getRequestHeaders(access_token) {
    return {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY,
        'Api-Version': 'v1.1',
        'Authorization': `Bearer ${access_token}`,
        'User-Agent': 'Sonesta/1.1.1 CFNetwork/1327.0.4 Darwin/21.3.0 (iPhone/13 iOS/15.2)'
    };
}

module.exports={getRequestHeaders}