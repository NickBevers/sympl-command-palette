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
Total time (so far): 3 hours
- 1 hour for the setup of the project and learning th emain differences between Recat en Preact.
- 0.5 hours for the setup of typescript and creating the needed types in the project (types.d.ts file).
- 1.5 hours for creating the command palette with styling.

### TO-DO's:
- [] Create a command palette that opens when pressing `ctrl` + `/`.
- [] Make the command palette responsive.
- [] Give some more and better styling to the command palette and the results.
- [] Add a small animation for better UX.
- [] Reset the command palette and hide the search bar when the user clicks off the command palette.

### Issues encountered / Difficulties:
- I needed a bit of time to get used to the differences between React and Preact. I had to look up some things, but it was not too difficult. They are very similar after all.
- I forgot to put it all in GitHub from the get-go, so I tried recreating my workflow as best as I could (so the timestamps don't match up with the time spent above)

### What I focused on:
- UX: I wanted to make sure that the command palette was easy to use and that the user would know what to do when they opened it.
- Responsiveness: I wanted to make sure that the command palette would work on all screen sizes. (WIP)
- Styling: I wanted to make sure that the command palette looked visually good. (WIP see TO-DO's)

### Hosting:
When it's finished, the frontend will be hosted on Vercel with a subdomain connected to it.

