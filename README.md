Getting some practice in so we're not overwriting the whole code base, just working on certain features.

To add collaborators to a repo:

- go to the repo settings.
- on left side under access click Collaborator
- add

Once a collaborator on the project:

- Clone, NOT FORK, the repo (forking will create a new copy for your person GH, not use the same repo on origional authors page that can be collaborated with.)
- cd into the directory
- make sure your on the main/master branch. to check run 
   git rev-parse --abbrev-ref HEAD
- to keep files up to date locally (if other devs have updated the repo on their end) run
   git pull origin -main(or master depending on what it was named)
- to work on a new feature without effecting the main branch on the repo run
   git checkout(or co) -b "name of feature being worked on"
- to verify new branch run
   git branch
- once ready to commit changes run
   git add .
   git commit -m "messge on what was added or worked on"
   git push origin "name of that feature being worked on" (will push changes to remote/original) to be reviewed
- go to your github account to that repo, it will show your features name with a "compare & pull request option"
- click the compare & pull request button, add a comment to explain further on the changes made or added with your feature.
- collaborators will be pinged that pull request was made, can be reviewed and merged.


After succesfully merging a branch and working on a new feature:

- switch back to main/master branch by running
   git checkout main/master
  and to check if you have the most up to date repo 
   git pull origin -main/master
  create a new branch and run
   git checkout(or co) -b "name of feature being worked on"


