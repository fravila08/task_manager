
# Task Manager

Task Manager, is a "to do" application, created with React, PostgreSQL, and Django, that allows users to create new task and mark each task as complete or delete if. It works with the
React Draggable library to create a daily dashboard for the user.


## Tech Stack

**Client:** React

**Server:** PostgreSQL, and Django

<p align="left"> <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>


## Visit this Project

Head to https://fataskmanager.com to see this project.

## Deploy this Project

To deploy this project first install requirements from requirements.txt. Then head over to the toDo
folder and run the following:

```bash
  npm install
  npm run watch
```

Then we will need to get our data base created with the following command:

```bash
  createdb to_do
```

Finally in a seperate terminal head over to the to_do_pro folder and run the following:

```bash
  python3 manage.py makemigrations to_do_app
  python3 manage.py migrate
  python3 manage.py loaddata task_list.json
  python3 manage.py runserver
```
## Future Improvements

#### Editing Abilities

I will eventually create functionality for the user to be able to edit his/her items.

#### Adding Notes

I will have the ability for the user to add notes to their task when marked as "complete".


## Thanks for Stopping By!

Thank you for checking out this project, feel free to follow me for more projects like this. Also,
if you happen to need help with any projects you are currently working on, please let me know where
I can help.
