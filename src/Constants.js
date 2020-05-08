const prod = {
    url: {
        API_FAVORITES: "https://warm-sands-18775.herokuapp.com/favorites",
        API_LOGIN: "https://warm-sands-18775.herokuapp.com/login",
        API_PARKS: "https://warm-sands-18775.herokuapp.com/parks",
        API_REVIEWS: "https://warm-sands-18775.herokuapp.com/reviews",
        API_TAGS: "https://warm-sands-18775.herokuapp.com/tags",
        API_USERS: "https://warm-sands-18775.herokuapp.com/users"
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