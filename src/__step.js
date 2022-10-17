/*
========================
Basic Context API Setup
========================
1. Context API: Share Auth state with other components (across the application)
2. Create an userContext
3. context provider with passed children.
4. set the userContext in the index.js file.
5. To consume the context: export the AuthContext from the userContext
6. Now at Header or anywhere else: use useContext hook to get the info in the context.

==================
Auth Integration
==================
1. use getAuth by passing the app from firebase confiq
2. create a function named createUser to return createUserWithEmailAndPassword 

*/