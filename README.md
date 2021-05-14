# playsuper.club

## Backend

  ### Setup (Ubuntu)
  
   1. Download `sudo apt-get install -y python3-venv` to create a virtual environment for python.
   2. Write `python -m venv ~/env`. This will create a file `env` in your home directory.
   3. Write `source ~/env/bin/activate` to activate the environment. You will find `(env)` at the beginning of your commnad line. [To deactivate write `deactivate`]
   4. Now do `pip install django djangorestframework`.
   5. Write `pip install postgres` to install the dbms software.

  ### To Start the Server
  
  1. Write `source ~/env/bin/activate` to activate the environment. You will find `(env)` at the beginning of your commnad line.[If deactivated]
  2. Write `python manage.py runserver` and the server is running at 127.0.0.1:8000 (generally). Also this address will be given is cli once the server is running.
