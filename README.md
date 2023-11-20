# SKILL SYNC - By Faris Dababneh
#### Video Demo: 
## Description:

Skill Sync is a website modeled on humanbenchmark.com that tests aspects of one's cognitive abilities. The application is built using React.js, Node.js, Tailwind CSS, and incorporates Firebase. Currently, there are 2 fully functional tests, Reaction Time and Number Memory, the rest are in progress. This project was created for Harvard's CS50x Final Project. Full functionality for this application would stretch the development time by at least 1 month. Therefore, I chose to leave the functionality, UI, and UX design at its current state to model what a fully functional website would look like without implementing features that would otherwise be insecure (sign up and login) and not refined (the remaining tests).

#### /Components/TestScreen.jsx
A reusable component that takes a test's info as a parameter, including its icon, title, and short description, and formats it in a blue box which is the start screen for all other tests.

#### /Components/Info.jsx
A reusable component that formats a test's long description and the global statistics (in progress) at the bottom of each test's page.

#### App.css
The styles page that was used before switching over to Tailwind CSS. Styles only a few elements of the application.

#### App.js
Contains the routes for all of the sub-pages of the websites and where to direct the user.

#### Home.js
The main page of the website. Displays all of the site's tests in a grid with a navbar, and 2 main buttons.

#### GameCard.jsx
A component that displays each test as a hoverable tile with its icon, title, and description.

#### /Contexts/GamesContext.js
A context that provides the information for all the tests that will be displayed on the home screen.

#### /Server/Database.js
This file is the bridge that communicates with this application's Firestore database. Multiple functions are present that primarily send data accepted as parameters to their corresponding collection in a document with a random id.

#### Dashboard.js (In Progress)
A page that will show a user's stats including the number of tests played and their relative score on each test compared to other users.

#### /Navbar/Navbar.js
Contains the format for custom navbar elements. Has button links to the home screen (through the logo), dashboard, and login. 

#### /Navbar/NavbarElements.js
This file holds the custom navbar elements that were used in Navbar.js along with their CSS styling.

#### Suggestions.js
A page that allows a user to send a suggestion for a new potential test or idea to improve the website. When the form is submitted, the data gets sent to the Firestore database.

#### /Games/ReactionTime.js
The full page for the reaction time test. The functionality is heavily reliant on the React hooks useState and useEffect. When the user starts the test, a red screen appears which will be replaced by a green screen after a random amount of time within a pre-set interval. Once this green screen appears, a timer begins and will stop once the user clicks the screen. The time difference is the user's reaction time. To account for latency issues and other factors, the final score is subtracted by a constant to make the results more accurate to reality. 

The test handles the case where the user may click the screen too early. Once 5 attempts are made, the final time is calculated as the average of the 5 attempts. The user can then choose to save this score (send score to database) or restart the test.

#### /Games/NumberTest.js
The full page for the number memory test. When the user initiates the test, a random singe-digit number first appears with an accompanying progress bar indicating the time left to memorize the number. After the time has elapsed, the user is prompted to input the number. A correct answer would progress the user to the next level where the digits in the number increase as well as the time to memorize. However, an incorrect answer would display a screen with the correct number in comparison to the user's incorrect answer and the last level that the user completed. Then, the user can either save the score (send the data to the database) or restart the test.

 
