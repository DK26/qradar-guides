# Upgrading Custom Action's Python Version 

QRadar 7.3.1 & 7.3.2 are using Python 2.7.5 (Red Hat's system default) as a platform for running custom actions script, althought their documentations state that 2.7.9 is the one that is used (which is also the minimum recommended version for QRadar App SDK). 

Since this isn't the case, and python 2.7.5 is missing some crucial functionality (Namely, the ability to access REST API using secure TLS connection & SSLContext while there may be more stuff missing..)