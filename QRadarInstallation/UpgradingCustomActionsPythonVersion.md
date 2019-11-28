# Upgrading Custom Action's Python Version 

## Introduction

QRadar 7.3.1 & 7.3.2 are using Python 2.7.5 (Red Hat's system default) as a platform for running custom actions script, althought their [documentation states that python 2.7.9](https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.2/com.ibm.appfw.doc/c_appframework_CREResp.html) is the one that is used (which is also the minimum recommended version for QRadar App SDK). 

Since this isn't the case, and python 2.7.5 is missing some crucial functionality (Namely, the ability to access REST API using secure TLS connection & SSLContext while there may be more stuff missing..)

## Disclaimer

This guide isn't official, and my solution is "hacky". It was tested many times on the QRadar 7.3.1 Community Edition and verified to have worked without any problems. However I strongly recommend you create a snapshot backup of your system before you do anything that is written and/or described in here. 

Also, as long as you do not remove any system files and as long as you don't mess around _wrongly_ with the file `/etc/fstab`, then any damage can be fixed by simply restarting the QRadar appliance.

And finally: _**You are fully responsible for your own actions -- use good judgment as you use this unofficial guide. By reading this guide you agree that you are completely responsible for any potential damage that may accure when practicing this guide and that you have no; and cannot have any complaints against this guide's author(s)**_.


## Technical Background

QRadar `Custom Action` functionality allows to upload a script of one of the three programming language & environments: **Bash**, **Perl** & **Python**, and run it with given arguments (**Check for reference**: https://www.ibm.com/support/knowledgecenter/en/SS42VS_7.3.2/com.ibm.appfw.doc/c_appframework_CREResp.html)