<h1>HacAtac BookSearch With GraphQL<h1>

<h2>Description</h2>
  <p>Created With: React, state, hooks, props, JSX, conditional rendering, form validation, tailwind + css, MVC structure. </br>
 First: I've studied the legacy code that utilized a restful API for CRUD methods</br> 
 Second: I've updated server.js to include an apollo server </br> 
 Third: Then I've converted the restfull API schema into my typeDefs.js</br>
 Fourth: Once my typeDefs were defined i've then made resolvers to handle the queries and mutations. 'Basically the same as GET POST PUT DELETE'</br>
 Fifth: Then I've used the one endpoint from apollo-playground to ensure all routes/methods are working. </br>
 Sixth: I've then converted my JWT file to be used in a graphQL apollo application + tested it in apollo playground.</br>
 Seventh: Once I've found that all my queries/mutations, and JWT were working, I've then started the front end implementation as follows... </br>
 Eighth: First, in client/utils i've made a mutations.js file to implement our graphQL mutations. Secondly, I've made queries.js to handle the 'me' page query. Thirdly, I've updated my components to handle our newly created graphQL application </br>
 Ninth: Once all previous steps were completed I've ran through the application to ensure everything is workign as inteded. </br>
 Once all functionality was completed I've used React to deploy live on GitHub Pages <a href ="https://hacatac.github.io/hac-portfolio/" target="_blank">Link to deployed application.</a>. </br>

 </p>

## Usage

1: Make sure you have react downloaded (if you don't, follow the instructions on the React Website)</br>
2: Clone the repo </br>
3: Install dependencies with npm -i </br>
4: Run npm start to run the server and make the API live </br>
5: Use your device to test this application. </br>

## Language

JavaScript </br>
JSX </br>
React </br>
GraphQL/Apollo </br>
JWT authentication </br>
Object Oriented Programming </br>
useEffect </br>
useState </br>
props</br>

## Contributing

If you'd like to contribute to App you can fork or clone this repo and have at it! </br>

## User Story

AS AN avid reader </br>
I WANT to search for new books to read </br>
SO THAT I can keep a list of books to purchase </br>

GIVEN a book search engine </br>
WHEN I load the search engine </br>
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button </br>
WHEN I click on the Search for Books menu option </br>
THEN I am presented with an input field to search for books and a submit button </br>
WHEN I am not logged in and enter a search term in the input field and click the submit button </br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site</br>
WHEN I click on the Login/Signup menu option</br>
THEN a modal appears on the screen with a toggle between the option to log in or sign up
</br>
WHEN the toggle is set to Signup
</br>
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
</br>
WHEN the toggle is set to Login
</br>
THEN I am presented with two inputs for an email address and a password and login button
</br>
WHEN I enter a valid email address and create a password and click on the signup button
</br>
THEN my user account is created and I am logged in to the site
</br>
WHEN I enter my account’s email address and password and click on the login button
</br>
THEN I the modal closes and I am logged in to the site
</br>
WHEN I am logged in to the site
</br>
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
</br>
WHEN I am logged in and enter a search term in the input field and click the submit button
</br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
</br>
WHEN I click on the Save button on a book
</br>
THEN that book’s information is saved to my account
</br>
WHEN I click on the option to see my saved books </br>
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account </br>
WHEN I click on the Remove button on a book </br>
THEN that book is deleted from my saved books list</br>
WHEN I click on the Logout button</br>
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button </br>

## Author

Greetings! <('.') , >('.')> </br>
My name is Jordan Hackworth and I hope that this application catches your eye and helps show you my ablities in the workplace! </br>
If you have any questions, comments, or concerns please feel free to contact me. </br>

Jordan Hackworth aka HacAtac </br>
GitHub repo: https://github.com/HacAtac/Hac-BookSearch-QL </br>
LinkedIn: https://www.linkedin.com/in/jordan-hackworth-898205217/ </br>
E-mail: jhack00@icloud.com </br>

<a href ="https://github.com/HacAtac/Hac-BookSearch-QL" target="_blank">Link to my git hub application.</a></br>
<a href ="https://hacatac.github.io/hac-portfolio/" target="_blank">Link to deployed application.</a>

<h3>Screenshot of app!</h3>

![image](https://user-images.githubusercontent.com/87215152/148424949-87e1652e-ae8e-4ab7-959c-df719f3a0b91.png)
