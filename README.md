# Healthcare Appointment Booking Web Application

This project is a responsive web application for booking healthcare appointments, developed using React.js. It features a clean and intuitive user interface for displaying doctor information, availability, and a simple appointment scheduling system.

## Tools/Libraries Used

- React.js: A JavaScript library for building user interfaces.
- React Router (`react-router-dom`): For declarative routing in the application.
- React Context API: For managing global state, such as the list of doctors and search functionality, without external libraries like Redux.
- JavaScript (ES6+): The core programming language used.
- CSS3: For custom styling and creating a responsive design.
- Mock JSON Data: A static `doctors.json` file is used to simulate a backend API.

## [WEBSITE LINK] (http://healthbooking.netlify.app)

## Improvements with More Time

If I had more time to work on this project, I would implement the following enhancements:

- User Authentication: Add a user login and registration system to allow patients to manage their appointments and view their booking history.

## Challenges Faced and Solutions

- State Management:
  - Challenge: Managing the state of the doctors' list and search filter across different components (e.g., `SearchBar` and `DoctorsList`) could have led to complex prop drilling.
  - Solution: I leveraged the React Context API to create a centralized state management solution. The `AppContext` provides the `doctors` list and `handleSearch` function to any component that needs it, resulting in cleaner and more maintainable code.

- Component Communication:
  - Challenge: The `BookingForm` needed to know which doctor was selected, and the confirmation message had to be displayed after a successful booking.
  - Solution: I passed the `doctorName` as a prop to the `BookingForm`. For the confirmation, I used local component state (`isBooked`) within the `BookingForm` to conditionally render either the form or the success message, providing immediate feedback to the user.

- Responsive Design:
  - Challenge: Ensuring the application looks good and functions well on various screen sizes, from mobile phones to desktops.
  - Solution: I used CSS Flexbox to create a flexible layout for the `DoctorsList` and other components. Media queries could be further added to fine-tune the styling for specific device breakpoints, ensuring a fully responsive user experience.
