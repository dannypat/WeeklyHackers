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
https://wiki.finra.org/display/devexchange/Proxy+settings+for+Git
https://git-scm.com/book/en/v1/Getting-Started-Installing-Git
https://git-scm.com/book/en/v1/Getting-Started-First-Time-Git-Setup