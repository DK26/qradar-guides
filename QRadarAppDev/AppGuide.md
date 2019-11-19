 
# QRadar Application Development #

## Requirements ##

You'll need to have a Python 2 version 2.7.9 or above installed on your development environment in order for QRadarSDK to even work.

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

    - Create an app directory

    - Run an app in its proper environment

    - Pack the app to a proper .zip file

    - Deploy the app directly to QRadar

    - Check app status.

    - Authorize an app deployment

    - Cancel an app deployment

    - Delete an app

### Manage Apps ###

1. In your projects directory, create a new app directory by calling: `qradar_app_creator create -w <path to myapp>`.
    - _This will run longer at the first run._

2. _Please refer to `README.html` **"Create an app"** section for farther guidelines_:

    > On completion, the entries in the folder will include:

    > * `app` - contains source files for the app

    > * `manifest.json` - JSON manifest file that describes the app

    > * `qradar_appfw_venv` - Python virtual environment for running your app locally

    > * `run.py` - default Python script for running your app locally

    > To customize your app, edit the manifest and add/update files in the app folder.

3. From this point, just refer to `README.html`.

---

To be continued...