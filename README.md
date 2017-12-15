BURP!



Burp is a an application meant for the sale of beer. It is meant to be a traditional e-commerce app meaning it has an index of beers where as a user, one can add beers to their cart and then be able to review their cart/make changes, and then finally purchase the beer. 

![Alt Text](https://imgur.com/6rD4Z1z)
![Alt Text](https://imgur.com/n7yD2M5)
![Alt Text](https://imgur.com/t4DsWrl)
![Alt Text](https://imgur.com/TZJx0mt)
![Alt Text](https://imgur.com/bNMHjL4)
![Alt Text](https://imgur.com/4I2PeDv)
![Alt Text](https://imgur.com/dMBKb34)
![Alt Text](https://imgur.com/lEMucgA)


Technologies Used: HTML, CSS, JavaScript, MERN Stack, GitHub


Deployed application: https://guarded-coast-85416.herokuapp.com/


Trello:
https://trello.com/b/MTxLEQBC/wdi-project-4-burp

Biggest issue unsolved: 
I should have implemented the cart with its own model / had it either embedded or referenced with the User. That way when a user logs in they can still have their old cart should they have logged out without purchasing. The cart persists when logging out, but upon a full oage refresh it goes away and worst of all it is not dependent upon the user, meaning that another user can login and get the previous user's cart. This was something I noticed Thurday and I wanted to fix it but it would have been too much to refactor before Friday. My cart is currently living as an array on state and I plan to refactor this cart after WDI. Also all the user stories in my icebox still need to be implemented and I plan on working on many of these upon finishing WDI as well. 

Overall this project has been a real challenge for me because the MERN stack is still new to me. I think I learned the most on this project of WDI though and for that I am thankful. I really am enjoying the organization that React implements with components and although it seemed unnecessary at first, now I realize how this seperation of components is extremely beneficial when producing a large application.