# Browser Storage

JavaScript can access the browser's storage mechanism. This is how various websites know you are logged in, and why sometimes you have to clear your `cookies`. Let's try using the browser storage in this challenge.

First, we want to check if the user has been to our site before. If they have, we use what we already have to display their name on our website. If they haven't, we prompt them for their name, and then use it in the same way.

# Release 0 - Pseudocode
Think through the process of how you'd solve this before diving in. Maybe it looks something like this: 
```
if i have their name
  render their name
if i don't have their name
  ask for their name
  render their name
```

# Release 1 - Code
When you code this locally, bring the JS file into the HTML file instead of putting it directly into the HTML file.

Some things to think through and to guide your development:
1. Do you have their name already in local storage?
2. What would my function look like in JS to render their name?
3. How would I set their name if they didn't have one?

# Release 2 - Refactor
I bet you can clean this up!