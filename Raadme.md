##Euro-Country Search

#How to run

1. Make sure you have yarn setup on your computer




#What would I have done given more time?

1. I would have implemented redux/React Context for the handling of the Countries state in case of increase in screens and need of handling that state application-bound since it's reusable.
2. I would have implemented responsiveness by using a library react-native-responsive-screens which uses the Viewport percentages for the height and width
3. I would have tried optimizing the application more by trying to reduce the bundle size by enabling hermes, cacheing the images, enabling proguard etc.
4. I would have sanitized the input for the country for it to be validated before sending to the server to ignore security concerns.
5. I would have chosen a design system like react-native-paper or material design, and added a different font to change the look, feel and the UX for the application.
6. I would have implemented an error boundary for the application.
7. I would have created a seperate utilities file for common functions like converting the population number into a formatted number with comma seperated values.
8. I would have covered Country Details in much more detail, like adding a google maps modal for dislaying its location, displaying the time in the country's timezone etc.