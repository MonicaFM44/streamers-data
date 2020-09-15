# Streamers Data

This project is the first part of the frond end technical test for Stream Hatchet. 

It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Parts of the web

In the following sections I'll explain the design of the web and its different parts and content. 

### Navbar

In the top of the page, there is always present a navbar, in which we have some buttons that redirects to the corresponding sections stated bellow.

### Header

A presentation header that contains a button that goes to the first section of the web.

### Global Insights

In this section, we can find the analysis of the general global data provided in the file `aggregated_stats.json`, more specifically the `team_global_aggregates` subsection.

The first components shows the general KPIs with Minutes Watched, Airtime Minutes and Average Viewers for the data collected between the dates provided.

Bellow the KPIs, we have a selector to determine if we want to show the Minutes Watched and the Airtime minutes group by: 
- Game: on the `team_global_games` of `aggregated_stats.json`. 
- User: inside `team_global_aggregates/streamer_data`.
- Platform: same section as users, but this time, as there are platforms with multiple data, using a group by.

### Day By Day Insights

In this section we have the global data but divided by each day inside the date interval. This data is also provided by the file `aggregated_stats.json`, in the subsection `team_granular_aggregates`.

Also, it has some filtering selectors to show the data inside the `streamer_data` subsection.

### Viewership Insights

The last section shows the data inside the file `viewership.json`, which contains minute-to-minute viewers of a streaming.
For each user provided in the data, the charts show the average viewers inside each minute of the streaming.

## How to run it?

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

> It is necessary to have instaled the last version of Node.js.