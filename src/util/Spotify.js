const clientId = 'efd621d2e3241ba971dd47a78618ea6';
const redirectUri = 'http://localhost:3000/';

const accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expirationMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expirationMatch) {
            accessToken = accessTokenMatch[1];
            const expirationTime = Number(expirationMatch[1]);
            window.setTimeout(() => accessToken = '', expirationTime * 1000);
window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    }
};

export default Spotify;