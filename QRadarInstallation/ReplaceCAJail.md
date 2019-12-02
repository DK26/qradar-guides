# Replace CA_JAIL

1. Unmount everything under `/opt/qradar/bin/ca_jail`:

   \# `umount -v $(ls -d /opt/qradar/bin/ca_jail/*/)`

2. Backup the current `ca_jail`:

   \# `cp -R /opt/qradar/bin/ca_jail /opt/qradar/bin/ca_jail_backup`

3. Replace ca_jail:

   \# `tar xvzf root_jail.tar.gz`

   \# `\cp -R root_jail/* /opt/qradar/bin/ca_jail`

## CheatSheet 

### Try to unmount all directories in current directory

   \# `umount -v $(ls -d */)`

### Re-mount everything back from `/etc/fstab`

   \# `mount --all`

### Archive Tar GZIP

   $ `tar -czvf output.tar.gz fileordirectorys`

### Extract Tar GZIP

   $ `tar xvzf file.tar.gz`

`chroot: failed to run command ‘/bin/bash’: No such file or directory`

I figured it out. bin/bash is there, but I didn't have /lib and /lib64 inside it. /bin/bash depends (ofc) on libc, ld-linux, libdl etc... So simple cp -a /usr rootfs/, cp -a /lib rootfs/, cp -a /lib64 rootfs/ was enough. (You can mount-bind those ofc, but I copied them, because I want to run something dangerous, which might corrupt those files in rootfs.) The message from chroot could be more descriptive. "no such file or directory" really means "I can't run this sh..."

