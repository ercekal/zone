This project is done as a part of Zone tech test.

in order to run this project you should:

- clone the project from https://github.com/ercekal/zone.git
### git clone https://github.com/ercekal/zone.git

- then install the dependencies
### `npm install`

- start the project.
### `npm start`

- the browser tab automatically should open. if not type `http://localhost:3000/`

- The projects makes 2 API calls to fetch the `playing movies` and `genres` from `themoviedb.org`

- API calls are done in 2 different ways. First one is explicitly calling the API from the container. Second one is to use redux and reducer. The 2nd option uses componentWillMount which will be deprecated.

- gets the genres from the `playing` movies and filters from all genres in order to show the applicable Genres

- in the upper section there is checkboxes which changes the redux store to add/remove selected genres

- based on the selection movies are filtered in order to show the ones that contain selected genres

- average vote filter has limits from 0 - 10 with increments of 0.5. Only movies with greater than or equal to the average vote amount is shown

