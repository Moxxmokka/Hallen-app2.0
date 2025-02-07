1. Initial Setup
   - [x]Set up a new React Native project with Expo (or without Expo if you prefer bare React Native setup).
   - [x]Install necessary dependencies:
   - [x]React Navigation (@react-navigation/native, @react-navigation/stack, react-navigation-bottom-tabs)
   - [ ]Redux Toolkit (@reduxjs/toolkit, react-redux) for state management
   - [ ]React Native Paper (for UI components)
   - [x]Axios (for making API calls)
   - [ ]React Native AsyncStorage or React Native Keychain (for secure token storage)
   - [ ]React Native Gesture Handler (for smooth navigation and interactions)
   - [ ]React Native Reanimated (for smooth animations)
2. Authentication
   - [ ]Create authentication flow:
   - [ ]Sign up screen
   - [ ]Login screen
   - [ ]Forgot password screen
   - [ ]Create JWT token management utilities in /utils/auth.js (store, retrieve, remove tokens).
   - [ ]Create an API service to handle login, signup, and authentication using Axios (/utils/api.js).
   - [ ]Protect routes with authenticated checks (redirect to login if not authenticated).
3. User Profile and Settings
   - [ ]Create profile screen where users can:
   - [ ]View their profile (name, email, profile image).
   - [ ]Edit profile details (name, email, password, profile image).
   - [ ]Update workout goals.
   - [ ]Upload profile images using Firebase Storage or AWS S3.
4. Workout Plans
   - [ ]Create Workout Plan screen where users can:
   - [ ]Create a new workout plan.
   - [ ]Add exercises to the plan (exercise name, sets, reps, weights).
   - [ ]Edit/delete exercises.
   - [ ]View existing workout plans.
   - [ ]Integrate with the backend API to store and fetch workout plans from MongoDB.
5. Progress Tracker
   - [ ]Create Progress Tracker screen where users can:
   - [ ]Log daily workout progress (sets, reps, weight lifted).
   - [ ]View progress over time (graphical representation of progress).
   - [ ]Integrate with backend API to fetch user progress data and update it.
6. Personal Bests (PBs)
   - [ ]Create PB screen where users can:
   - [ ]Post new personal bests.
   - [ ]View their personal bests.
   - [ ]Post PB updates to the backend when a user surpasses their previous best.
7. Leaderboards
   - [ ]Create Leaderboard screen showing global leaderboard:
   - [ ]Display top users by total lifts, PBs, or workout performance.
   - [ ]Create Friends Leaderboard showing top friends.
   - [ ]Use Socket.io for real-time leaderboard updates as users post new PBs.
8. Push Notifications
   - [ ]Integrate push notifications (using Firebase Cloud Messaging or Expo Notifications).
   - [ ]Send notifications for new PBs, friend activity, leaderboard updates.
9. UI Design & Styling
   - [ ]Use React Native Paper to style components.
   - [ ]Design home screen (with tab navigation: Home, Progress, Leaderboards, Profile).
   - [ ]Design workout plan screen and progress tracker with intuitive inputs (input fields, sliders, etc.).
   - [ ]Design leaderboard screen with scrollable lists and ranking systems.
10. Testing
   - [ ]Write unit tests for utility functions and Redux reducers.
   - [ ]Write integration tests for key screens (login, workout plan creation, progress tracking).
   - [ ]Test the app on both Android and iOS simulators and devices.
