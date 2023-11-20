# SKILL SYNC - By Faris Dababneh
#### Video Demo: 
## Description:

Skill Sync is a website modeled on humanbenchmark.com that tests aspects of one's cognitive abilities. The application is built using React.js, Node.js, Tailwind CSS, and incorporates Firebase. Currently, there are 2 fully functional tests, Reaction Time and Number Memory, the rest are in progress.

#### TestScreen.jsx
A reusable component that takes a test's info as a parameter, including its icon, title, and short description, and formats it in a blue box which is the start screen for all other tests.

#### Info.jsx
A reusable component that formats a test's long description and the global statistics (in progress) at the bottom of each test's page.

#### App.css
The styles page that was used before switching over to Tailwind CSS. Styles only a few elements of the application.

#### App.js
Contains the routes for all of the sub-pages of the websites and where to direct the user.

#### Home.js
The main page of the website. Displays all of the site's tests in a grid with a navbar, and 2 main buttons.

#### GameCard.jsx
A component that displays each test as a hoverable tile with its icon, title, and description.

#### Dashboard.js (In Progress)
A page that will show a user's stats including the number of tests played and their relative score on each test compared to other users.

#### Suggestions.js
A page that allows a user to send a suggestion for a new potential test or idea to improve the website. When the form is submitted, the data gets sent to the Firestore database.

#### /Games/ReactionTime.js
The full page for the reaction time test. The functionality is heavily reliant on the React hooks useState and useEffect. When the user starts the test, a red screen appears which will be replaced by a green screen after a random amount of time within a pre-set interval. Once this green screen appears, a timer begins and will stop once the user clicks the screen. The time difference is the user's reaction time. To account for latency issues and other factors, the final score is subtracted by a constant to make the results more accurate to reality. 

The test handles the case where the user may click the screen too early. Once 5 attempts are made, the final time is calculated as the average of the 5 attempts. The user can then choose to save this score (send score to database) or restart the test.

#### /Games/NumberTest.js

 
