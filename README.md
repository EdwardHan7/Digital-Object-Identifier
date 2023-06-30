# DOI Information Fetcher Project Documentation

The DOI Information Fetcher is a single-page application built with React and Redux to fetch article information associated with a Digital Object Identifier (DOI).

## Technology Choices

- **React**: React is a JavaScript library for building user interfaces. In this project, we used React to construct the user interface and React Hooks for handling the component's state and lifecycle.

- **Redux**: Redux is a predictable state container for JavaScript applications. In this project, we used Redux to manage global state, such as the status and result of fetching DOI information.

- **Material UI**: Material UI is a popular React UI framework offering a rich and flexible set of components. In this project, we used Material UI to construct the user interface and leveraged its theming capability to achieve responsive design.

- **Axios**: Axios is a Promise-based HTTP client for the browser and Node.js. In this project, we used Axios to make HTTP requests to fetch DOI information.

## UI Design Philosophy

The UI design of this project follows the principles of simplicity and ease-of-use. Users can enter the DOI in a single input field and click the "Fetch" button to get the information. The fetched information is displayed on the page in the form of a card.

The page theme uses the default Material UI theme, ensuring a pleasant visual experience across various devices and screen sizes.

## Data Visualization Approach

The fetched DOI information is presented as a card on the page. The card includes the title of the paper, authors, and journal information. To ensure a good reading experience across different screen sizes, we utilized the responsive design features of Material UI.

## Performance Optimization Strategy

The performance optimization in this project primarily centers on network requests. Before sending a request to fetch DOI information, we first check whether the current state is 'loading'. If so, we avoid making a new request, preventing unnecessary network traffic.

Simultaneously, we used Redux's asynchronous Actions to handle network requests, ensuring the state is only updated upon successful completion of the request.

## Testing Strategy

We employed Jest and the React Testing Library for unit testing and component testing. The aim of testing is to ensure the correctness of the core functionalities and the quality of the code. For instance, we test whether the application correctly fetches and displays information when a valid DOI is input and the "Fetch" button is clicked. We also test for exceptions, like displaying the correct error message when an invalid DOI is entered.

## Conclusion

The above covers the key design and implementation details of the DOI Information Fetcher project. The project adheres to modular and testable design principles and uses the latest technologies in React and Redux. Whether you are looking to learn about React and Redux, or need a practical tool to fetch DOI information, this project serves as a beneficial resource.