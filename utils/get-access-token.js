
// Environment variables for sensitive data
const CLIENT_ID = process.env.CLIENT_ID || "pYEcp6paOBr2tUA2eRGou1KuvWneL79X";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "naSzzlgAP4CLutU18zivbje9RwURbP4B_S880Ucvbg5RXC5pno_TsJ5ErrHo0tGU";
const API_URL = process.env.API_URL || "https://gateway-dev-sonesta.azure-api.net";
const AUTH_URL = process.env.AUTH_URL || "https://sonestaqa.us.auth0.com/oauth/token";


async function getToken (request) {
    const response = await request.post(AUTH_URL, {
        data: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            audience: `${API_URL}`,
            grant_type: "client_credentials"
        }
    });
    const responseBody = JSON.parse(await response.text());
    return responseBody.access_token;
    
};

module.exports= {getToken}
