# playsuper.club

## Backend

  ### Setup (Ubuntu)
  
     - Download `sudo apt-get install -y python3-venv` to create a virtual environment for python.
     - Write `python -m venv ~/env`. This will create a file `env` in your home directory.
     - Write `source ~/env/bin/activate` to activate the environment. You will find `(env)` at the beginning of your commnad line. [To deactivate write `deactivate`]
     - Now do `pip install django djangorestframework`.
  
  ### To Start the Server
  
     - Write `python manage.py makemigrations` and then `python manage.py migrate`. ⚠️ ***FIRST TIME USE ONLY*** ⚠️
     - Write `python manage.py runserver` and the server is running at 127.0.0.1:8000 (generally). Also this address will be given is cli once the server is running.
