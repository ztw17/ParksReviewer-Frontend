const prod = {
    url: {
        API_FAVORITES: "https://myparks-test-heroku-22.herokuapp.com/favorites",
        API_LOGIN: "https://myparks-test-heroku-22.herokuapp.com/login",
        API_PARKS: "https://myparks-test-heroku-22.herokuapp.com/parks",
        API_REVIEWS: "https://myparks-test-heroku-22.herokuapp.com/reviews",
        API_TAGS: "https://myparks-test-heroku-22.herokuapp.com/tags",
        API_USERS: "https://myparks-test-heroku-22.herokuapp.com/users"
    }
};

const dev = {
    url: {
        API_FAVORITES: "http://localhost:3000/favorites",
        API_LOGIN: "http://localhost:3000/login",
        API_PARKS: "http://localhost:3000/parks",
        API_TAGS: "http://localhost:3000/tags",
        API_REVIEWS: "http://localhost:3000/reviews",
        API_USERS: "http://localhost:3000/users"
    }
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;