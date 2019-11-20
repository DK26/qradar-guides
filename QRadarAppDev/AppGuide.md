 
# QRadar Application Development #

## Requirements ##

You'll need to have a Python 2 version 2.7.9 or above installed on your development environment in order for QRadarSDK to even work.

Later on at the **"Pre-Install"** section, we discuss how to establish such an environment.

* **Notice:** Python 3 isn't supported.


## QRadarSDK Installation ##


### Downloading ###

1. Download **_QRadarAppSDK-1.1.0.zip_** from https://exchange.xforce.ibmcloud.com/hub/extension/517ff786d70b6dfa39dde485af6cbc8b _(Registration is required)_.
    
    - **SHA-1 checksum:** `2c8b52b84ea88caaf5f29388fd3bd0adadd09611`

2. Create a directory for you to develope QRadar Apps (aka _"yourdevdir"_)

3. Unzip **_QRadarAppSDK-1.1.0.zip_** to _./yourdevdir_ under another sub-directory (_"QRadarAppSDK-1.1.0"_). 

    - **Example**: `./yourdevdir/QRadarAppSDK-1.1.0/`

### Pre-Install ###

Before we go on, it's import to set an **virtual environment** for the proper python version, to make sure things do not conflict with the underlying OS and that everything is working just fine without needing to edit any SDK core files.

1. Make sure you have the latest python 2 version:

    - **Please refer to:** https://www.python.org/downloads/
    
    - The latest Python 2 version as of right now is `Python 2.7.17`: https://www.python.org/downloads/release/python-2717/

    - Download the proper binaries & install on your system.
    
    - **Notice:** On Linux, it is _highly recommended_ to install Python using your official linux _package manager_ or _applications installer_.

    - **Notice:** On Linux, make sure to install the `pip` tool for your Python 2 installation. 

2. Make sure your `pip` is updated: `<Python 2 binary> -m pip install --upgrade pip`.

3. Make sure you have the `virtualenv` module: `<Python 2 binary> -m pip install virtualenv`

    * Either you get a message saying `Requirement already satisfied: virtualenv` or your `pip` tool will simply download & install the `virtualenv` module for you.

4. Create a virtual, independed Python 2 environment:

    * Make sure you are in `yourdevdir`.

    * Create a virtual environment: `<Python 2 binary> -m virtualenv py2venv`

5. Activate the virtual environment: 

    - **Linux:** `source py2venv/bin/activate`

    - **Windows:** `py2venv/bin/activate.bat`

### Install ###

Now that we've activated the virtual environment, we should not encounter any errors regarding the underlying Python version. 

It is now time to install QRadarSDK.

**Notice:** You can now refer to the `README.html` file inside of `QRadarAppSDK-1.1.0` for official guidelines reference as you keep reading the guidelines in here.

1. Make sure you are in the extracted `QRadarAppSDK-1.1.0` directory.

    - **Example**: `./yourdevdir/QRadarAppSDK-1.1.0/`

    - **Linux**: Edit the file `./install.sh`:

        1. Find the line: `append_pip_modules_install $QRADAR_APP_CREATOR "--user"`

        2. Remove the trailing `"--user"` from the line

            - Expected result: `append_pip_modules_install $QRADAR_APP_CREATOR`

        3. Save the file.


2. Install the QRadarSDK in your system by running either `install.bat` for Windows or `sudo ./install.sh` for Linux.

3. Use the `qradar_app_creator` command to handle everything related to QRadar Apps.

    - Create an app directory with proper dependencies

    - Run an app in its proper environment

    - Pack the app to a proper .zip file

    - Deploy the app directly to QRadar

    - Check app status

    - Authorize an app deployment

    - Cancel an app deployment

    - Delete an app

4. **Bonus:** You may wish to shorten the command `qradar_app_creator` to maybe something like `qapp`. A way to do it is by assigning alias.

    - **Windows Alias:** https://stackoverflow.com/questions/20530996/aliases-in-windows-command-prompt

    - **Linux Alias:** https://www.tecmint.com/create-alias-in-linux/

## Manage Apps ##

### Local Management ###

#### Creating An App Directory ####

* In your projects directory, create a new app directory by calling: `qradar_app_creator create -w <path to myapp>`

    - _This will run longer at the first run._

    _Quoted from `README.html`:_

    > On completion, the entries in the folder will include:

    > * `app` - contains source files for the app

    > * `manifest.json` - JSON manifest file that describes the app

    > * `qradar_appfw_venv` - Python virtual environment for running your app locally

    > * `run.py` - default Python script for running your app locally

    > To customize your app, edit the manifest and add/update files in the app folder.

#### Run An App Locally ###

* In your projects directory, run an app by calling `qradar_app_creator run -w <path to myapp>`


> Your app should now be running at `http://0.0.0.0:5000` (or `http://127.0.0.1:5000`).

> If your app has REST endpoints you can call them at this URL.

> You will be prompted for QRadar user credentials when running the app. You will also be 

> given the option to store those credentials for convenience. Credentials are stored in _clear text_ at 

> `<HOME>/.qradar_appfw.auth`.

#### Deploy An App to QRadar ####

> To deploy an app to the QRadar console, run this command:

`qradar_app_creator deploy -q <QRadar console IP address> -u <QRadar user> -p com.mycompany.myapp.zip`

> Deployment will assign a unique numeric identifier to your app, e.g. **1001**.

> If your app uses OAuth, you must supply to the deployment the name of a QRadar user who 

> has the capabilities requested by your app. If you already know which user you want to use 

> for authorization you can supply that user’s name via the `-o` option. Otherwise, the 

> deployment will prompt you to select an entry from a list of users who have the required

> capabilities.

---

To be continued...