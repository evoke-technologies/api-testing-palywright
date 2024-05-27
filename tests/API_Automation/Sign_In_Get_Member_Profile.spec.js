const { test, expect } = require('@playwright/test');
const{getToken}= require('../../utils/get-access-token');
const {getRequestHeaders}= require('../../utils/get-request-headers')
const {getAuthTokenRequest}= require('../../models/auth0-token-request')
const {getMemberProfileRequest}= require('../../models/get-member-profile-request')

const XLSX = require('xlsx');
const fs = require('fs');

// Function to check if file exists

test.describe('Auth0 Token Retrieval', () => {

    var authToken;
    var access_token
    test.beforeAll('token generation', async ({request}) => {
      access_token = await getToken(request)
    });

  test.beforeAll('should retrieve the auth0 token successfully', async ({request }) => {
    const response = await request.post('https://gateway-dev-sonesta.azure-api.net/guest/graphql', {
      headers: getRequestHeaders(access_token),
      data: getAuthTokenRequest(),
    });

    // Parse and log the response body
    const responseBody = await response.json();
    console.log(responseBody);

    // Assert the response
    expect(response.ok()).toBeTruthy();
    expect(responseBody.data.auth0Token).toBeDefined();
    authToken = responseBody.data.auth0Token;
  });

  test('Sign In And Get Member Profile', async ({ request}) => {
    const response = await request.post('https://gateway-dev-sonesta.azure-api.net/member/graphql', {
      headers: getRequestHeaders(authToken),  
      data: JSON.stringify(getMemberProfileRequest())
    });
  
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();
    console.log("sign in response body is : " + responseBody.data);
}); 

});
