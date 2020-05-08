# MyParks Explorer

**Quick Links**

Backend repo: https://github.com/ztw17/ParksReviewer-Backend

Demo: https://www.youtube.com/watch?v=Ov322Iv3fDQ&t=2s
***
MyParks Explorer is a platform that gives users the ability to find, review, tag, and favorite national and state parks.
***
### Prerequisites
Before you continue, ensure you have met the following requirements:
- Ruby version 2.6.1 or higher
- Rails version 6.0.2 or higher

While this app can mostly be cloned as is (don't forget the backend repo, linked above), it does assume you have an active Mapbox account. If you don't have one, you can create one (and get an access token) here: https://www.mapbox.com/.

A number of national and state parks are currently included in the seeds file. You may add additional seeds or create new parks within the platform itself.

### Built With
- React
- Ruby
- Rails API utilizing Active Model Serializers
- PostgreSQL Database using ActiveRecord
- React Map GL

### Server-Side Install Instructions
1. Run `bundle install`
2. Run `rake db:create`
3. Run `rake db:migrate`
4. Run `rake db:seed`
5. Run `rails s`

### Client-Side Install Instructions
1. Run `npm install`
2. Run `npm start`

### The App
The app itself is designed to be easy and fun to use. You may search for parks by clicking on the 3 icons on the left side of the navbar. In left to right order, the 1st icon (US map) allows you to find parks by their state in alphabetical order; the 2nd icon (map with pin) allows you to find parks via map; the 3rd icon (tag) allows you to find parks by their associated tag(s). You may add new parks by clicking on the mountains and forests icon. 

### Author
Zach Weber
