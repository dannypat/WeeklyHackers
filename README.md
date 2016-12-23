#Weekly Hackers Git Setup

##Create A GitHub Account

You can use either your work or personal email. Your personal email is preferred, especially if you plan on using your personal laptop.

The purpose of this git repository is to enable you to use your personal or work laptop or both to work on this outside learning project.

##Git Setup

Go to the location you want to create your WeeklyHackers folder (git will create the folder for you).

Right click in the file explorer and click "Git Bash Here".

Enter the following commands:

```git
$ git config --global user.name "Your Username"
$ git config --global user.email "YourEmail@email.com"
$ git init
$ git clone https://github.com/dannypat/WeeklyHackers/
```

If you cannot access github, see Connect To GitHub From a Finra Laptop

##Create Your Own Branch For Your Project

Enter the following commands in git bash:

```git
$ git checkout -b <your branch name e.g. dannys_branch>
$ mkdir <folder name e.g. Angular2_demo>
$ cd <folder name>
$ touch <file name e.g. tsconfig.json>
#Add some content to the file you just made
#Note that the above example file name is for an Angular2 project
#If you are working on a different language/tool, your file names will be different
$ cd ..
$ git add . -A
$ git commit -m'First commit to my project'
$ git push origin <your branch name>
```

##Connect To GitHub From a Finra Laptop

Enter the following commands in git bash:

```git
$ export http_proxy=http://proxye1.finra.org:8080
$ export https_proxy=http://proxye1.finra.org:8080
```

##Become A Contributor!

Give me your GitHub email or username, and I will send you an invitation to become a contributor.

You will get an email with an invitation, accept it and you will have full access to the repository.

##More Resources for Help:
[Finra Proxy Settings](https://wiki.finra.org/display/devexchange/Proxy+settings+for+Git)

[Installing Git](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git)

[Git Setup](https://git-scm.com/book/en/v1/Getting-Started-First-Time-Git-Setup)