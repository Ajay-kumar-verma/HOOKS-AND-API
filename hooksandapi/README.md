# useState 
- It is sued for state managament 
- when data gets updated it re render the component 
- when we have to manage 1 or 2 state then we can use this
- no Logic or simple logic 
- for local management 


# useReducer 
- It is used to update the data iwth prev and current data
- It is used for State management
- if we have to handle multiple state to handle then we can use this
- when we have complex business logic 
- For global managent 
- It can be understood like Array reducer function 
- It takes two parameter 
- 1 previous State 2 initialState  
- It return two Array value
- If we have complex State to manage better choose usereducer 
- It has function to manage it 
- In useState we have to defined function  


# useContext  
- It is used for Context Api 
- Create context Api 
- provider 
- useContext { for consumer  }



# useEffect 
- It is sued for handing side Effect 
- we can execute whole block or we can stop from executing whole block 
- using useEffect and its dependecies 
- it is used for calling Api or executing some task 



- Notes :- when we call Component or function 
-  It gets executed ,store in memory  then return to ,from where it is called 
- when we use memo it check for changes if not return last store value if yes re cal it then store and return   


# useMemo  { return memorise value }
- The React useMemo Hook returns a memoized value.
- It is used to control partially Component 
- It return component that can be used inside return    
- rest of thing is similar to useEffect 
- using we can stop exectuting a part of return statement 


# memo 
- The React useMemo Hook returns a memoized component.
- when parent component is redering 
- Its child component is auto get rendered unnessery 
- for avoiding this we use memo
- If no update or change Component does not render  


# useCallback
- The React useMemo Hook returns a memoized function .
 - It retunr memorised function 






**++++++++++++++++++++++++++++++++++++++++++++++++++++++++**
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
