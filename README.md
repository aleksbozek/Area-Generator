# Insta-Instance

**Description:**

This website will allow for the generation of map / area ideas.  The user decides what type of environment they wish to generate as well as how large of an area.  This will provide them with a rough guideline.  There will also be input fields for the user to add their own unique flavor into the random gen in case they have a theme to maintain.  Suitable for a broad creative audience seeking inspiration; from writers to digital artists!

**Wireframes:**
![Home Page](https://i.imgur.com/Ewq6Dm8.png)
![Build Page](https://i.imgur.com/33aC8ED.png)
![Gallery](https://i.imgur.com/L92CUeX.png)
![Post-Build](https://i.imgur.com/6Cncj3L.png)

**Component Hierarchy:**

![Spiderweb](https://i.imgur.com/2UsGU71.png)

**API:**

I plan on having at minimum two tables, one for storing finished generated locations as samples as well as another table to contain the generator options/attributes.

**MVP:** 

- Display random finished gens on home page
- Ability to add and remove options in dropdown menus
- Maintain entries added to dropdown menus to it's area
- Populate dropdown menu options from airtable
- Three area sizes
- Populate attribute dropdown menu based on area type
- 2nd dropdown menu for # of attributes to generate per 30x30 section

**Post-MVP:** 

- Able to make a new build using existing one as a template
- Unique/Individual page will have pictures
- Additional default sizes, as well as oblong (rectangular) sizes
- 3rd dropdown menu for attribute build as 'quick theme'

**Way-Post-MVP:**

- Areas with more than one 'type' property

**SWOT Analysis:**

Well, I'll be referencing & attempting to replicate code I've made in the past.  So that's a plus.  

I'll have to remember that populating the options for the build page aught to come last.  Code first!  Details, css, information fluff : afterburner.

My greatest hurdle will most likely come in the part of attaching appropriate attributes with the area selected.  I'll probably overcome this by discovering the code I avoided in P1 : populating days dropdown menu based on the month selected.
