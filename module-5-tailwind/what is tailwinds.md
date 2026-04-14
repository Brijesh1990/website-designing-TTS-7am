# what is tailwindcss ?

  1.  tailwindcss is framework of css
  2.  tailwindcss make a responsive website 
  3.  tailwind most of developer and website designer used 
  4.  tailwind create some components to make code easy 
  5.  tailwind write very less external css 
  6.  tailwindcss provides its own class 
  7.  tailwindcss make any responsive design
  8.  tailwindcss fast load css to write very less css 
  9.  tailwindcss is max used now days to create any website UI 
  10. tailwindcss provides max css class compared with bootstrap  

# advantage of tailwindcss 

  1. Utility-First Approach (Fast Development)
     Instead of writing custom CSS, you use small utility classes directly in your HTML (like flex, mt-4, text-center).

 2. Highly Customizable
    Tailwind provides a config file where you can easily define:

    Colors
    Fonts
    Spacing
    Breakpoints(creating responsive)    


 3. No Naming Headaches
    You don’t need to come up with class names like card-header or btn-primary.   

 4. Built-in Responsive Design

    Tailwind makes responsive design simple with prefixes:

    sm:small
    md:medium
    lg:large 

 5. Smaller Final CSS (with Purging)
     
    Tailwind removes unused styles in production builds.      

 6. Easy to Learn (for Beginners)

    You don’t need deep CSS knowledge to get started.   

 7. Encourages Reusable Components

    Even though it’s utility-based, you can still create reusable UI components using:

    Component frameworks
    Extracted class patterns   


 8. Great Developer Experience
    Excellent documentation
    Works well with frameworks like React, Vue, etc.
    IntelliSense support in editors


# how to install tailwindcss 

  go to its official website 

  https://tailwindcss.com/

  https://tailwindcss.com/docs/installation/play-cdn

  add its CDN 

  ```
  <!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>

  ```