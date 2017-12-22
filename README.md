## BURP!


## Description
Burp is a an application meant for the sale of beer. It is meant to be a traditional e-commerce app meaning it has an index of beers where as a user, one can add beers to their cart and then be able to review their cart/make changes, and then finally purchase the beer. 

## Screenshots
![Imgur](https://i.imgur.com/gEowG8c.jpg)
![Imgur](https://i.imgur.com/obA65rl.jpg)
![Imgur](https://i.imgur.com/TqJjoyZ.png)
![Imgur](https://i.imgur.com/PGRcx2l.jpg)
![Imgur](https://i.imgur.com/knVqtX2.png)
![Imgur](https://i.imgur.com/WY9tfPt.png)
![Imgur](https://i.imgur.com/U7d5MHg.png)


## Technologies Used: 
HTML, CSS, JavaScript, MERN Stack, Bootstrap


## Deployed application: https://burpbeer.herokuapp.com/


## Trello:
https://trello.com/b/MTxLEQBC/wdi-project-4-burp

## Biggest issue unsolved: 
I should have implemented the cart with its own model / had it either embedded or referenced with the User. That way when a user logs in they can still have their old cart should they have logged out without purchasing. The cart persists when logging out, but upon a full oage refresh it goes away and worst of all it is not dependent upon the user, meaning that another user can login and get the previous user's cart. This was something I noticed Thurday and I wanted to fix it but it would have been too much to refactor before Friday. My cart is currently living as an array on state and I plan to refactor this cart after WDI. Also all the user stories in my icebox still need to be implemented and I plan on working on many of these upon finishing WDI as well. 



## Conclusion
Overall this project has been a real challenge for me because the MERN stack is still new to me. I think I learned the most on this project of WDI though and for that I am thankful. I really am enjoying the organization that React implements with components and although it seemed unnecessary at first, now I realize how this seperation of components is extremely beneficial when producing a large application.