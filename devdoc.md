<body>
# Brief documentation of Isle of Wright Travel Connections Mobile App

## Initializing of the application

When the application starts, it tries to download the latest data fron the backend. This functionality can be found in the {@link Ext.application#preCacheStores} function.
If the download successful, it stores the mirror of the database's data in the the browsers local storage.

From that point, if the application fails to connect to the backend server, the data will be available from localStorage, so the program can continue to operate properly.

## Data structure

The database consits of three tables, which are the Providers, Stations, and StationDepartures. The Providers and Stations table holds basic data, the StationsDepartures table have 1-n connection with them.
This allow to store the departures of multiple providers at multiple stations. The departures holds an additional information, which is day of week, where one can set a timetable for example only for Monday(dow=1)
or the whole week(dow=0).

## The user interface

### Main tab
The app's ui mainly a TabPanel, which holds three tabs. The main information can be found on the first tab, where a Carousel item holds
all the days of the week plus a view of the "today", where the timetables of the current day(dow = 1-7) are merged with timetables of every day(dow=0).
Above the carousel, there is a select field, where the user can select the station what he would like to see in the timetable.

### Settings tab

The user can set up a global filter about providers, to hide them from timetables. Note, that selecting none of them will append all of them!

### Data download tab

This is not a real tab, just a button streamlined to the tabpanel buttons, which allow the user to reload the stores from the backend. There is an alert message at the end of the process which
will gives a notice to the user if the action was failed.



## Backend

The backend is Ext.direct connector, implemented in Kohana. Its automatically exports the defined backend functions to the frontend.
This funcionality implemented in the ext-direct module.

The three controllers are simple bindings between the database result and the frontend, they are exported directly. All controllers are
accessible from the frontend with the same name as they can be found in Kohana, with the exported functions.
For example, one can make a call to backend with this line:

Controller_Providers.getProviders(callback function() {...});


To function properly, the cache and db modules must be enabled in Kohana configuration, and the ext-direct configureation must be adjusted to
the server where the backend installed( The url config option).

</body>