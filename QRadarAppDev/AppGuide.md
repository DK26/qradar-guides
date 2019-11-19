 
# QRadar Application Development

## Requirements

You'll need to have a Python 2 version 2.7.9 or above installed on your development environment in order for QRadarSDK to even work.

* **Notice:** Python 3 isn't supported.


## QRadarSDK Installation


### Downloading

1. Download **_QRadarAppSDK-1.1.0.zip_** from https://exchange.xforce.ibmcloud.com/hub/extension/517ff786d70b6dfa39dde485af6cbc8b _(Registration is required)_.
    
    - **SHA-1 checksum:** `2c8b52b84ea88caaf5f29388fd3bd0adadd09611`

2. Create a directory for yyou to develope QRadar Apps (aka _"yourdevdir"_)

3. Unzip **_QRadarAppSDK-1.1.0.zip_** to _yourdevdir_ under another sub-directory. 

    - Make sure you are not just extracting all the files to  _"yourdevdir"_ and have another directory inside it to hold all the extracted files. 

    - **Example**: `./yourdevdir/QRadarAppSDK-1.1.0/`

4. You can refer to the `README.html` file inside of `QRadarAppSDK-1.1.0` for official guidelines reference as you keep reading the guidelines in here.

### Pre-Installation

Before we go on, it's import to set an **virtual environment** for the proper python version, to make sure things do not conflict with the underlying OS and that everything is working just fine without needing to edit any SDK core files.

5. Install the QRadarSDK in your system by running either `install.bat` for Windows or `sudo ./install.sh` for Linux.

6. Use the `qradar_app_creator` command to handle everything related to QRadar Apps.

    - Create an app directory.

    - Run an app in its proper environment.

6. In your projects directory, create a new app directory by calling: `qradar_app_creator create -w <path to myapp>`.