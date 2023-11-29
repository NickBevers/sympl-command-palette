## Command palette Frontend:

### Description:
This is the frontend for the command palette. It is a simple preact app that allows you to search for people/files/projects.

### Technologies used:
- Preact
- Typescript
- CSS (no frameworks, but everything gets put in modules)
- Vercel (for hosting)

I wanted to experiment a bit with using other frameworks than React/Vue and this project was way to small to use either one of those (+ Angular was probably overkill as well).
I debated between using Preact and SolidJS, but I decided to go with Preact as this lies the closest to what I've seen before so that this projects gets both finished on time and looks visually good.
If I have time left, I might try to recreate this project with SolidJS as well just for funsies.

### How to use:
To start typing, press the `ctrl` + `/` key. This will open the command palette. You can now start typing. The command palette will show you the results of your search.

### Time spent:
**Total time: 5 hours**
- 1 hour for the setup of the project and learning th emain differences between Recat en Preact.
- 0.5 hours for the setup of typescript and creating the needed types in the project (types.d.ts file).
- 1.5 hours for creating the command palette with styling.
- 0.5 hours for creating the filtering and styling.
- ± 1 hour for creating the responsive design and showing/hiding the command palette based on user actions.
- 0.5 hours for finding a fitting animationn library to use and apply the animation to the command palette and resultList.

### TO-DO's:
- [x] Create a command palette that opens when pressing `ctrl` + `/`.
- [x] Make the command palette responsive.
- [x] Give some more and better styling to the command palette and the results.
- [x] Add a small animation for better UX.
- [x] Reset the command palette and hide the search bar when the user clicks off the command palette.
- [x] Allow for filtering on the results based on the type of result (people, files, projects).

### Issues encountered / Difficulties:
- I needed a bit of time to get used to the differences between React and Preact. I had to look up some things, but it was not too difficult. They are very similar after all.
- I forgot to put it all in GitHub from the get-go, so I tried recreating my workflow as best as I could (so the timestamps don't match up with the time spent above)

### What I focused on:
- UX: I wanted to make sure that the command palette was easy to use and that the user would know what to do when they opened it.
- Responsiveness: I wanted to make sure that the command palette would work on all screen sizes. (WIP)
- Styling: I wanted to make sure that the command palette looked visually good. (WIP see TO-DO's)

### Hosting:
When it's finished, the frontend will be hosted on Vercel with a subdomain connected to it.

