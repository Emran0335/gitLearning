/*
Git is a version control system/tool that allows you to track changes to your code over time. 
1. What is verson control?
Ans: Version control is the process of tracking changes to your code of the file or folder's file over time. It allows you to revert back to previous versions of your code if necessary. For example, if we write somethig in a file and leave it to anybody, another person will aslo write something in this file. Then the   version of will be changed and it will get second version as something is write on the file. So we can revert back to the first version of the file if we need to. 
2. What is git?
Ans: Git is a version control system that allows you to track changes to your code over time. It is a popular tool for version control in software development. It allows you to store and manage changes to your code over time. 
3. What is the difference between git and github?
Ans: Git is a version control system that allows you to track changes to your code over time. It is a popular tool for version control in software development. It allows you to store and manage changes to your code over time. 
Github is a cloud-based platform that allows you to store and manage your code on the cloud. It is a popular tool for version control in software development. It allows you to store and manage changes to your code over time. 
4. What is commit?
Ans: Commit is a record of changes made to your code. It is used to take control of the file or folder to git after tracking/staging.
5. What is the use of key q of the keyboard using terminal?
Ans: This key is used to quit the terminal(End) situation.
6. What is last-in first-out?
Ans: In git which files or folders are commited/saved last will appear first in the terminal.
*/
/*
1. .git 
Ans: When something is created in a folder with dot(.git). It is then called a hidden folder. This hidden(.git folder) can track everything on the local repository folder.
2. ls -a
Ans: It means to show all listed files even with all hidden files.
*/

/*
1. git config --list
Ans: This command is used to list all the configuration settings for git. 
2. git config --global user.name "Emran Hossain"
Ans: This command is used to set the name of the user for git. 
3. git config --global user.email "emranhossain0335@gmail.com"
Ans: This command is used to set the email address of the user for git. 

*/

/*
** important conmmands **
1. touch readme.md
Ans: This command is used to create a new file. 
2. git init
Ans: This command is used to initialize a git repository. 
3. git add readme.md
Ans: This command is used to stage/track a specific file for commit. It is used to track a file so that git can control the version of the file.
4. git add --all
Ans: This command is used to stage or track all the files and folders.
5. git add .
Ans: This command is used to stage or track the current directory or file. But if we use it in the root folder, then all files or folder or sub-folder will be staged or tracked.
6. git status
Ans: This command is used to check the status of the git repository. It shows the current state of the repository. It shows the status of the files and folders. It shows the staged files and folders(new files and folder). It also shows the unstaged/untracked files and folders.
7. git commit -m "first commit"
Ans: This command is used to commit/save the staged files and folders. It is used to take control of the file or folder by git after tracking/staging. 
8. git log
Ans: This command is used to show the history of the changes(commits) made to the files and folders.
9. git log --oneline
Ans: This command is used to show the history of the changes(commits) made to the files and folders in a more readable format e.i. in one line.
10. vi readme.md
Ans: This command is used to edit the file.
11. :wq
Ans: This command is used to save the file and from insert mode to command mode
12. i 
Ans: This command is used to insert the text in the file using the terminal vi editor.
13. esc
Ans: This command is used to exit the vi editor. And then we can enter the command mode. After that, we have to use :wq to save the file. 
14. git reset --hard commitId(d14e8b0)
Ans: This command is used to reset the file to the specified commit. It is used to revert back to the previous version of the file.
15. git reflog
Ans: This command is used to show the reflog(all the history of commits) of the git repository. It shows the history of the commits made to the files and folders.
16. git rm file's name(help.md)
<<<<<<< HEAD
Ans: This command is used to remove the file from the git repository. This particular file is removed from the working directory but git still does not know that the file is removed from its local directory. So, commit is needed in this situation. But we can move to the previos commits(using commitId) and there we will find the deleted file.
*/

/*
** Branching **
1. git branch --list
Ans: This command is used to show the list of all the branches. Star sign indicates where I am.
2. git branch branchName(feature/dashboard)
Ans: This command is used to create a new branch. But we have to follow rules to name the branch such as bugfix/readme, feature/dashboard, etc. Branches will always be created from thier parent branch. 
3. git switch branchName(dev/add-heading-text)

Ans: This command is used to remove the file from the git repository. This particular file is removed from the working directory but git still does not know that the file is removed from its local directory. So, commit is needed in this situation.
*/

/*
** Merging **
1. What is merging?
Ans: Merging is the process of combining two or more branches of a repository into a single branch. It is used to integrate changes from multiple repositories into a single branch. Merging can be done in the branch where we are from the other branches.

2. How to merge?
Ans: To merge, we need to first create a branch from the main branch. Then, we need to make changes to the branch. Then, we need to merge the branch into the main branch.

3. git branch -d branchName(dev/add-heading-text)
Ans: This command is used to delete the branch. If we use small(d) and there are some unstaged/commited something, then the branch will never be deleted. But if we use capital(D), then it will delete all.

*/