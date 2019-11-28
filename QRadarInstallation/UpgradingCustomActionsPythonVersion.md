# Upgrading Custom Action's Python Version 

## Introduction

QRadar 7.3.1 & 7.3.2 are using Python 2.7.5 (Red Hat's system default) as a platform for running custom actions script, althought their [documentation states that python 2.7.9](https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.2/com.ibm.appfw.doc/c_appframework_CREResp.html) is the one that is used (which is also the minimum recommended version for QRadar App SDK). 

Since this isn't the case, and python 2.7.5 is missing some crucial functionality (Namely, the ability to access REST API using secure TLS connection & SSLContext while there may be more stuff missing..)

## Disclaimer

This guide isn't official, and my solution is "hacky". It was tested many times on the QRadar 7.3.1 Community Edition and verified to have worked without any problems. However I strongly recommend you create a snapshot backup of your system before you do anything that is written and/or described in here. 

Also, as long as you do not remove any system files and as long as you don't mess around _wrongly_ with the file `/etc/fstab`, then any damage can be fixed by simply restarting the QRadar appliance.

And finally: _**You are fully responsible for your own actions -- use good judgment as you use this unofficial guide. By reading this guide you agree that you are completely responsible for any potential damage that may accure when practicing this guide and that you have no; and cannot have any complaints against this guide's author(s)**_.


## Technical Background

QRadar `Custom Action` functionality allows to upload a script of one of the three programming language & environments: **Bash**, **Perl** & **Python**, and run it with given arguments (**Please refer the next official guide for more**: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.2/com.ibm.appfw.doc/c_appframework_CREResp.html).

Once a _Custom Action_ is defined, you are then required by QRadar to _"Deploy Changes"_. Once the changes are _deployed_, your script is placed in a _virtual, sandboxed environment_ which is in practice a form of `chroot` command executed on the path: `/opt/qradar/bin/ca_jail` while the script itself is saved inside: `/opt/qradar/bin/ca_jail/custom_action_scripts` with the following naming convention: `customaction_N.script` where **N** is the script number. Take notice that it doesn't matter rather your script was originally a **Bash**, **Perl** or **Python** script, they all loose their original name and file extension.

**Also worth mentioning:** _QRadar is starting its **Custom Actions** with its own environmental variables which cannot be pre-configured for its running scripts._

**Now here is where our problems begin:** It seems that the virtual root environment (aka `chroot`) has its `/bin` and `/usr/bin` directories binded by `mount --bind` command to the main system's (aka **global**) `/bin` and `/usr/bin`, while it really should be using its own local ones (Seems like lazy Ops job?). Red Hat's / CentOS' `/bin` and `/usr/bin` are containing a default _Python 2.7.5_ version. The default Python version _**should NOT be upgraded!**_ as it may very well cause unexpected problems with some operating system tools, particallary tools that use the `yum` tool.

Finally, the consistent _mount binds_ are configured by and inside the file: `/etc/fstab`.

## Upgrade Overview

These are the general steps we are about to take, before we dive into the specifics.

1. The very first thing we've got to do is download and compile the latest **Python** version. At the moment of typing this very words, Python 2 is about to turn EOF ("End-Of-Life") and will no longer be supported! The latest version (and most probably the last of Python 2) is _**Python 2.7.17**_.

    To compile and produce proper Python binaries, we must use either the same Red Hat version of our QRadar or a paraller version of CentOS (Red Hat & CentOS share the same binaries while CentOS is non-commerical and free). 

    **Check out the proper version of CentOS for a Red Hat alternative:** https://en.wikipedia.org/wiki/CentOS

    * Once you know which version is needed, you can either download the iso file of that operating system or you could use a docker image.

    * In my examples, I'll be using a docker image of CentOS-7.5-1804 and compile everything within a container. 

    * But the idea is the same: _Python 2.7.17 compiled within an identical environment to the one of your QRadar appliance._

    | CentOS Version    | RHEL Base     |
    |------------------ |-------------- |
    | 7.0-1406          | 7.0           | 
    | 7.1-1503          | 7.1           | 
    | 7.2-1511          | 7.2           | 
    | 7.3-1611          | 7.3           | 
    | 7.4-1708          | 7.4           | 
    | 7.5-1804          | 7.5           | 
    | 7.6-1810          | 7.6           | 
    | 7.7-1908          | 7.7           | 


2. Copy our compiled **Python 2.7.17** from the previous section to the **QRadar** appliance and set it up correctly under `/opt/qradar/bin/ca_jail` and merge IBM's `site-packages` to it.

3. Create an overall system snapshot just in case something goes wrong.

4. Modifiy our `/etc/fstab` to remove the two persistent mounts to the sandboxed environments `/bin` and `/usr/bin`.

5. Unmount & Recreate `/opt/qradar/bin/ca_jail/bin` and `/opt/qradar/bin/ca_jail/usr/bin` to contain everything from the global `/bin` and `/usr/bin`.

6. Copy **Python 2.7.17** binaries to `/opt/qradar/bin/ca_jail/bin` and `/opt/qradar/bin/ca_jail/usr/bin`.

7. We're done! All python scripts should now run with Python 2.7.17. 

    * We will upload a short test script to verify that everything is working well.

   
## Setup Environment

In our example, we're going to use docker since my own workstation is running on Linux with Docker already installed. 

If you're not using Docker or Linux, just skip all the Docker parts and focus on the CentOS/Red Hat environment parts which you may either install on a virtual machine or bare metal.

### Docker: Download CentOS Image

`docker pull centos:centos7.5.1804`

### Docker: Create & Run CentOS Container

`docker run -it --name "CentOS-For-QRadar" centos:centos7.5.1804`

- **Notice:** I do not use the `--rm` switch because I personally like the idea that I can resume my container later from where I left off. But you may have a different agenda.

* If you exit your container and would like to resume it later:

    - Use `docker ps -a` and find the container ID of `CentOS-For-QRadar`

    - Use the next command to resume its run:

        `docker container start -i <container ID>`

    - Remove the container (if you wish):

        `docker rm <container ID>`

        * Just make sure the container isn't running.

### Update CentOS Environment

All commands assume you are running as `root`, which as marked as `#`.

However if you're in normal mode, marked as `$`, just add `sudo` to the start of each command.

Run the following commands:

\# `yum check-update`

\# `yum update`

   * Answer YES (Y) for any prompt.

If you're on Docker, then run these commands:

\# `yum install wget`

\# `yum install make`

Now we need to install updated GCC compilers for CentOS/Red Hat:

\# `yum install gcc openssl-devel bzip2-devel`


### Download & Compile The Latest Python 2

Assuming you are already running a setup of the appropriate Red Hat or CentOS to compile the latest **Python 2**, we will start with the next set of commands:




