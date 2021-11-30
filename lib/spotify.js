import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read"
    // "user-read-playback,-position",
    // "ugc-image-upload",
    // "user-follow-modify",
    // "user-library-modify",
    // "app-remote-control",
    // "Listening History",
    // "playlist-modify-private",
    // "playlist-modify-public"
].join(',')

const params = {
    scope: scopes
}

const queryParamString = new URLSearchParams(params).toString()

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
})

export default spotifyApi

export { LOGIN_URL }