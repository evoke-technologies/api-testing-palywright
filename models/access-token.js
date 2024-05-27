
// shared.js

let sharedData;

module.exports = {
    setAccessToken(data) {
        sharedData = data;
    },
    getAccessToken() {
        return sharedData;
    }
};
