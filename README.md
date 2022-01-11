# Clicky Game

Test your memory playing this game! Try to click all of the Pokemon one time. If you clicked the same Pokemon twice, you will lose.

# Technologies Used
+ React.js
+ Reactstrap (Bootstrap for React)
+ JSON

# Personal Thoughts
+ Reactstrap felt pretty easy to use 
+ Keeping all of the data I needed for each card was easy to create using a .json to hold all the objects to be rendered.
+ I learned about the Fisher-Yates shuffle for randomizing where each card would end up
+ The most tricky part was getting the game to end correctly... The 12th correct card should trigger Win after clicking it
+ + If you clicked the last correct card, it would wait until you click again to trigger you win, but then also trigger you lose
+ + If you clicked the last incorrect card, it would trigger you lose (Good) - but then trigger you win after clicking the right one after 


Created as an assignment from the UCF Coding Bootcamp
