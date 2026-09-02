const linux = {
  intro: {
    definition: 'Linux is a free, open-source operating system built on the Linux kernel. It powers servers, desktops, and the cloud. It comes in "distributions" (distros) — the two most important families for system administration are Debian-based (Ubuntu) and Red Hat-based (Red Hat Enterprise Linux / RHEL).',
    whyUse: 'Companies run Linux on almost every server and in the cloud (AWS, Azure). Knowing it — especially Ubuntu and RHEL — is a core skill for Linux and cloud administrators.',
    whereUse: 'Servers, data centers, cloud instances (EC2, Azure VMs), containers, and DevOps pipelines.',
    syntax: null,
    explanation: 'An administrator manages Linux through a command-line shell (Bash). Although Ubuntu and RHEL share the same core tools and commands, they differ in package management (apt vs dnf) and some config files. This course covers both.',
    examples: [
      {
        title: 'Your first command',
        code: 'whoami\nhostname\nuname -a',
        output: 'your-username\nserver-01\nLinux server-01 5.15.0-91-generic ...'
      }
    ],
    keyPoints: [
      'Note: Ubuntu = Debian family, uses apt for packages',
      'Note: RHEL / Rocky / AlmaLinux = Red Hat family, uses dnf for packages',
      'Note: Both use the same Bash shell and core commands'
    ],
    commonMistakes: [
      'Warning: Commands that need root use sudo on Ubuntu; RHEL often uses sudo or the root user'
    ],
    proTips: [
      'Tip: Use the man command or --help to learn any tool: man ls'
    ]
  },

  shell: {
    definition: 'The shell is the program that reads your commands and runs them. Bash is the default shell for Ubuntu and RHEL. The shell lets you navigate the filesystem and run programs.',
    whyUse: 'Everything in Linux administration happens on the command line. Mastering Basic Bash commands is the foundation of system administration.',
    whereUse: 'Daily administration, remote management via SSH, and writing scripts.',
    syntax: null,
    explanation: 'You type a command and press Enter. The shell finds the program on PATH and runs it. Key commands: pwd (print working directory), ls (list), cd (change directory), echo (print text), and man (manual).',
    examples: [
      {
        title: 'Where am I and what is here?',
        code: 'pwd\nls -la',
        output: '/home/admin\ntotal 36\ndrwxr-xr-x 3 admin admin 4096 ... .bashrc ...'
      },
      {
        title: 'Get help for a command',
        code: 'man cp',
        output: 'NAME\n    cp - copy files and directories\nSYNOPSIS\n    cp [OPTION]... SOURCE... DEST'
      },
      {
        title: 'Print information to the screen',
        code: 'echo "Hello from Bash"\nwhoami\nhostname',
        output: 'Hello from Bash\nadmin\nmy-server'
      }
    ],
    keyPoints: [
      'Note: pwd shows your current directory',
      'Note: ls -la lists all files with details',
      'Note: man <command> opens the manual; press q to quit',
      'Note: Commands work identically on Ubuntu and RHEL'
    ],
    commonMistakes: [
      'Warning: On RHEL you may need sudo before admin commands; Ubuntu requires sudo for root-level tasks'
    ],
    proTips: [
      'Tip: Press Tab to auto-complete commands and file names',
      'Tip: Use Ctrl+C to cancel a running command'
    ]
  },

  files: {
    definition: 'Linux organizes everything as files, arranged in a single tree starting at / (root). Administrators spend most of their time creating, copying, moving and inspecting files and directories.',
    whyUse: 'Managing files correctly keeps a system organized, backed up, and secure.',
    whereUse: 'Configuration files live under /etc, user data under /home, logs under /var/log.',
    syntax: null,
    explanation: 'Use cd to move around, ls to list, cp to copy, mv to move/rename, rm to delete, mkdir to create directories, and cat/less/head/tail to view files.',
    examples: [
      {
        title: 'Create directories and files',
        code: 'mkdir -p /tmp/backups\ncd /tmp/backups\necho "log line" > app.log\nls -la',
        output: "total 12\ndrwxr-xr-x 2 admin admin 4096 ... .\ndrwxr-xr-x 3 admin admin 4096 ... ..\n-rw-r--r-- 1 admin admin  10 ... app.log"
      },
      {
        title: 'Copy and move files',
        code: 'cp app.log app-copy.log\nmv app-copy.log renamed.log\nls',
        output: 'app.log  renamed.log'
      },
      {
        title: 'View the start and end of a file',
        code: 'head -n 2 /var/log/syslog\ntail -n 2 /etc/hostname',
        output: 'Aug 28 09:00:01 server systemd[1]: Started Session...\nmy-server'
      }
    ],
    keyPoints: [
      'Note: cp copies, mv moves or renames',
      'Note: mkdir -p creates nested directories',
      'Note: head shows the start, tail shows the end of a file',
      'Note: Remember to be careful with rm — deletion is permanent'
    ],
    commonMistakes: [
      'Warning: rm -rf is dangerous; always double-check the path',
      'Warning: Different distros store some logs in different places (Ubuntu: /var/log/syslog, RHEL: /var/log/messages)'
    ],
    proTips: [
      'Tip: Use rsync for safe backups and syncing files between servers'
    ]
  },

  users: {
    definition: 'Linux is multi-user. Each person (and service) has an account. Users belong to groups. Administrators create users, add them to groups, and grant admin power with sudo.',
    whyUse: 'Proper user and group management keeps the system secure and controls who can do what.',
    whereUse: 'Creating employee accounts, granting sudo to admins, and locking accounts.',
    syntax: null,
    explanation: 'useradd creates a user, usermod changes it, userdel removes it, groupadd creates groups, passwd sets passwords, and sudo runs a command as root. The sudoers file (/etc/sudoers) controls sudo access — always edit it with visudo.',
    examples: [
      {
        title: 'Create a user and a group',
        code: 'sudo useradd -m -s /bin/bash jane\nsudo groupadd developers\nsudo usermod -aG developers jane\nid jane',
        output: 'uid=1001(jane) gid=1001(jane) groups=1001(jane),1002(developers)'
      },
      {
        title: 'Set a password',
        code: 'sudo passwd jane',
        output: 'New password: ******\nRetype new password: ******\npasswd: password updated successfully'
      },
      {
        title: 'Delete a user',
        code: 'sudo userdel -r jane',
        output: '(removes the user and their home directory)'
      }
    ],
    keyPoints: [
      'Note: useradd -m creates the home directory; -s sets the shell',
      'Note: usermod -aG adds a user to a group',
      'Note: sudo runs a single command as root; visudo safely edits sudoers'
    ],
    commonMistakes: [
      'Warning: Do not edit /etc/sudoers with a normal editor — always use visudo',
      'Warning: Forgetting -m with useradd leaves no home directory'
    ],
    proTips: [
      'Tip: Use the same commands on Ubuntu and RHEL — user management is nearly identical',
      'Tip: Lock an account with sudo usermod -L <user> and unlock with -U'
    ]
  },

  permissions: {
    definition: 'Every file has an owner and a group, plus three sets of permissions: read (r), write (w), and execute (x) for the owner, the group, and everyone else.',
    whyUse: 'Permissions protect files so only the right users can read, modify, or run them.',
    whereUse: 'Securing config files, allowing scripts to run, and multi-user environments.',
    syntax: null,
    explanation: 'ls -l shows permissions like -rwxr-xr--. chmod changes permissions, chown changes owner/group, and umask sets default permissions for new files.',
    examples: [
      {
        title: 'View permissions',
        code: 'ls -l script.sh',
        output: '-rwxr-xr-- 1 admin developers 20 ... script.sh\nowner: rwx | group: r-x | others: r--'
      },
      {
        title: 'Change permissions with chmod',
        code: 'chmod 755 script.sh\nls -l script.sh',
        output: '-rwxr-xr-x 1 admin developers 20 ... script.sh'
      },
      {
        title: 'Change ownership with chown',
        code: 'sudo chown jane:developers app.log\nls -l app.log',
        output: '-rw-r--r-- 1 jane developers 10 ... app.log'
      }
    ],
    keyPoints: [
      'Note: chmod 755 = rwx for owner, r-x for group, r-x for others',
      'Note: chown <user>:<group> changes both owner and group',
      'Note: Numeric permission triad: read=4, write=2, execute=1'
    ],
    commonMistakes: [
      'Warning: Execute permission is required to run a script: ./script.sh needs +x'
    ],
    proTips: [
      'Tip: chmod -R changes permissions recursively; use it carefully'
    ]
  },

  packages: {
    definition: 'Package managers install, update, and remove software from repositories. Ubuntu uses apt (Debian .deb packages); RHEL uses dnf (RPM packages).',
    whyUse: 'Installing and patching software is a core admin job — and the commands differ between Ubuntu and RHEL.',
    whereUse: 'Installing tools, applying security updates, and removing old software.',
    syntax: null,
    explanation: 'Both package managers have parallel commands. On Ubuntu: apt update, apt install, apt upgrade, apt remove. On RHEL: dnf install, dnf upgrade, dnf remove. You need sudo for all of them.',
    examples: [
      {
        title: 'Ubuntu: install a package',
        code: 'sudo apt update\nsudo apt install -y htop',
        output: 'Reading package lists... Done\n... htop is the newest version.'
      },
      {
        title: 'RHEL: install a package',
        code: 'sudo dnf install -y htop',
        output: 'Last metadata expiration check: 3:41:21 ago...\nInstalled: htop-3.2.2-1.el9.x86_64'
      },
      {
        title: 'Update the system',
        code: 'sudo apt update && sudo apt upgrade -y   # Ubuntu\nsudo dnf upgrade -y                            # RHEL',
        output: 'Upgrading system packages to the latest versions.'
      }
    ],
    keyPoints: [
      'Note: Ubuntu: apt update refreshes repos, apt upgrade applies updates',
      'Note: RHEL: dnf is the modern replacement for yum',
      'Note: Use apt search / dnf search to find packages',
      'Note: Removing: apt remove <pkg> or dnf remove <pkg>'
    ],
    commonMistakes: [
      'Warning: Do NOT use apt on RHEL or dnf on Ubuntu — they are not interchangeable',
      'Warning: Always run apt update before apt install on Ubuntu'
    ],
    proTips: [
      'Tip: dnf history shows past installs; apt also logs package operations',
      'Tip: Enable automatic security updates on servers'
    ]
  },

  processes: {
    definition: 'A process is a running program. Processes and the services that run in the background are managed with commands like ps, top, and kill, and long-running services are controlled with systemd (systemctl).',
    whyUse: 'Admins must find slow or stuck processes, stop and start services, and ensure critical services restart on boot.',
    whereUse: 'Troubleshooting a high-CPU server, restarting a web server, enabling a database on startup.',
    syntax: null,
    explanation: 'ps shows processes, top shows live CPU/memory usage, kill terminates a process by PID. Modern Linux uses systemd to manage services: systemctl start, stop, enable, disable, status.',
    examples: [
      {
        title: 'List running processes',
        code: 'ps aux | head -n 5',
        output: 'USER   PID %CPU %MEM ...\nroot     1  0.2  0.1  /sbin/init\nadmin  123  0.1  0.4  /usr/bin/nginx'
      },
      {
        title: 'Manage a service with systemd',
        code: 'sudo systemctl status nginx\nsudo systemctl restart nginx\nsudo systemctl enable nginx',
        output: '● nginx.service - A high performance web server\n   Loaded: loaded (/lib/systemd/system/nginx.service)\n   Active: active (running)'
      },
      {
        title: 'Stop a process by PID',
        code: 'top -n 1\nkill -9 1234',
        output: 'Tasks: 1 running ...\n(force-kills process with PID 1234)'
      }
    ],
    keyPoints: [
      'Note: ps lists processes; top shows live usage (press q to quit)',
      'Note: systemctl start/stop/restart/status control services',
      'Note: systemctl enable makes a service start on boot',
      'Note: These commands work the same on Ubuntu and RHEL'
    ],
    commonMistakes: [
      'Warning: kill -9 is forceful; use plain kill first to allow clean shutdown'
    ],
    proTips: [
      'Tip: journalctl -u nginx -f streams live logs for a service'
    ]
  },

  networking: {
    definition: 'Networking covers the machine IP and connections, and firewalls that control what can reach the server. Ubuntu commonly uses ufw; RHEL uses firewalld.',
    whyUse: 'You must set IPs, verify connectivity, and open only the ports a service needs.',
    whereUse: 'Configuring a server IP, troubleshooting connections, opening a firewall port for a web app.',
    syntax: null,
    explanation: 'ip addr shows IPs, ping tests connectivity, ss shows ports/connections. Firewalls: on Ubuntu allow ports with ufw allow; on RHEL open ports with firewall-cmd.',
    examples: [
      {
        title: 'Show network interfaces and IPs',
        code: 'ip addr',
        output: '2: eth0: <BROADCAST,MULTICAST,UP> ...\n    inet 192.168.1.10/24 brd 192.168.1.255 ...'
      },
      {
        title: 'Ubuntu: open a port with ufw',
        code: 'sudo ufw allow 22/tcp\nsudo ufw status',
        output: 'Status: active\n22/tcp  ALLOW  Anywhere'
      },
      {
        title: 'RHEL: open a port with firewalld',
        code: 'sudo firewall-cmd --permanent --add-port=80/tcp\nsudo firewall-cmd --reload\nsudo firewall-cmd --list-ports',
        output: '80/tcp'
      }
    ],
    keyPoints: [
      'Note: ip addr shows IP configuration; ping tests reachability',
      'Note: ss -tulpn lists listening ports and their programs',
      'Note: Ubuntu: ufw allow <port>/<proto>; RHEL: firewall-cmd --add-port=... '
    ],
    commonMistakes: [
      'Warning: RHEL uses firewalld by default, not ufw — commands differ',
      'Warning: Remember --permanent + --reload for firewalld changes to persist'
    ],
    proTips: [
      'Tip: Only expose ports that services actually need (22, 80, 443, etc.)'
    ]
  },

  security: {
    definition: 'Security for a Linux administrator means controlling access (SSH), managing who can run root commands (sudo), and applying firewalls and updates to reduce risk.',
    whyUse: 'Security is the most important responsibility of an admin — a misconfigured server can be compromised.',
    whereUse: 'Hardening a new server, restricting SSH login, and applying updates.',
    syntax: null,
    explanation: 'SSH (OpenSSH) is how you log in remotely; secure it by disabling root login and password auth, and use SSH keys. Keep software updated, apply firewall rules, and review sudo/root access.',
    examples: [
      {
        title: 'Secure SSH (edit /etc/ssh/sshd_config)',
        code: 'sudo nano /etc/ssh/sshd_config\n# set:\nPermitRootLogin no\nPasswordAuthentication no\n\nsudo systemctl restart sshd',
        output: '(restarts SSH with safer settings)'
      },
      {
        title: 'Check who can run sudo',
        code: 'sudo -l',
        output: 'User admin may run the following commands:\n    (ALL) ALL'
      },
      {
        title: 'Apply security updates',
        code: 'sudo apt update && sudo apt upgrade -y   # Ubuntu\nsudo dnf upgrade --security -y              # RHEL',
        output: 'System packages updated to the latest secure versions.'
      }
    ],
    keyPoints: [
      'Note: Disable root SSH login (PermitRootLogin no)',
      'Note: Prefer SSH keys over passwords',
      'Note: Keep packages updated with recognized update commands',
      'Note: RHEL adds SELinux; Ubuntu uses AppArmor by default'
    ],
    commonMistakes: [
      'Warning: Locking yourself out — test SSH config before restarting sshd; keep a second session open',
      'Warning: Never disable SELinux/AppArmor to "fix" a problem; learn how it works'
    ],
    proTips: [
      'Tip: Use a firewall to allow only needed ports',
      'Tip: Run fail2ban or set up key-based auth to block brute-force SSH'
    ]
  },

  scripting: {
    definition: 'A shell script is a file containing commands that run automatically. Bash scripts use variables, conditionals, loops, and functions to automate everything from backups to monitoring.',
    whyUse: 'Automation saves time and reduces errors — the heart of modern system administration and DevOps.',
    whereUse: 'Backups, log rotation, health checks, and scheduled maintenance with cron.',
    syntax: null,
    explanation: 'A script starts with #!/bin/bash. Make it executable (chmod +x) and run with ./script.sh. Schedule repeating jobs with cron using crontab.',
    examples: [
      {
        title: 'A simple backup script',
        code: '#!/bin/bash\nBACKUP_DIR="/backups"\nmkdir -p "$BACKUP_DIR"\ntar -czf "$BACKUP_DIR/$(date +%F)-etc.tgz" /etc\necho "Backup saved to $BACKUP_DIR"',
        output: 'Backup saved to /backups'
      },
      {
        title: 'A loop over servers',
        code: 'for host in web1 web2 db1; do\n  echo "Checking $host"\n  ping -c 1 "$host" >/dev/null && echo "$host is up" || echo "$host is DOWN"\ndone',
        output: 'Checking web1\nweb1 is up\nChecking web2\nweb2 is up\nChecking db1\ndb1 is DOWN'
      },
      {
        title: 'Schedule the script with cron',
        code: 'crontab -e\n# run backup every day at 2:30 AM\n30 2 * * * /home/admin/backup.sh',
        output: '(runs the script daily at 02:30)'
      }
    ],
    keyPoints: [
      'Note: Scripts start with #!/bin/bash and need +x permission',
      'Note: Use variables with $NAME and quotes for safety',
      'Note: crontab -e edits your cron jobs; format is: minute hour day month weekday command',
      'Note: Scripting works identically on Ubuntu and RHEL'
    ],
    commonMistakes: [
      'Warning: A missing executable bit (chmod +x) prevents ./script.sh from running',
      'Warning: Always quote variables ("$BACKUP_DIR") to handle spaces safely'
    ],
    proTips: [
      'Tip: Test a script with bash -x script.sh to trace each command',
      'Tip: Use systemd timers as a modern alternative to cron'
    ]
  },

  filesystem: {
    definition: 'The Filesystem Hierarchy Standard (FHS) defines where everything lives. Everything hangs off the single root directory / and is organized into standard folders regardless of distro.',
    whyUse: 'Knowing where files belong lets you find configs, logs, and binaries fast, and tells you where user data, programs, and temporary files must go.',
    whereUse: 'Config files in /etc, user data in /home, logs and spool in /var, installed programs in /usr and /bin.',
    syntax: null,
    explanation: 'Important directories: /bin and /usr/bin hold commands; /etc holds configuration; /var holds variable data (logs, mail, spool); /home holds user home folders; /tmp holds temporary files; /root is the root user home; /dev holds devices; /proc and /sys expose kernel/process info; /mnt and /media are mount points. These locations are the same on Ubuntu and RHEL.',
    examples: [
      {
        title: 'Explore the filesystem',
        code: 'ls /\nls /etc | head\nls /var/log',
        output: 'bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var'
      },
      {
        title: 'Where is a command?',
        code: 'which ls\ntype -a ls\nls -l /bin/ls',
        output: '/usr/bin/ls\nls is /usr/bin/ls\n-rwxr-xr-x 1 root root ... /usr/bin/ls'
      }
    ],
    keyPoints: [
      'Note: /etc = configuration, /var = variable data (logs), /home = users',
      'Note: /usr/bin and /bin hold programs; /tmp is world-writable scratch space',
      'Note: The FHS is the same on Ubuntu and RHEL'
    ],
    commonMistakes: [
      'Warning: Never put personal files directly in / (root) — use /home or /srv',
      'Warning: /tmp is cleared on reboot on many systems — do not store important data there'
    ],
    proTips: [
      'Tip: Use tab completion and cd ~ (home) to navigate faster'
    ]
  },

  text: {
    definition: 'Administrators constantly read and search log and config files. Core tools—head, tail, cat, less, grep, sort, uniq, wc—make this fast. They work identically on Ubuntu and RHEL.',
    whyUse: 'Most troubleshooting is reading files: checking the end of a log (tail), searching for an error (grep), and counting lines (wc).',
    whereUse: 'Searching logs in /var/log, filtering command output, and summarizing data.',
    syntax: null,
    explanation: 'cat prints a file, less lets you scroll (press q to quit), head shows the start, tail the end (tail -f follows live). grep filters lines matching a pattern (-i case-insensitive, -r recursive). sort orders lines, uniq removes duplicates (use with sort), and wc -l counts lines.',
    examples: [
      {
        title: 'Follow a log live',
        code: 'tail -f /var/log/syslog   # Ubuntu\n# RHEL: journalctl -f',
        output: 'Aug 28 09:00:01 server systemd[1]: Started Session...'
      },
      {
        title: 'Search for errors',
        code: 'grep -i error /var/log/syslog | tail -n 5',
        output: 'Aug 28 08:59:12 server kernel: [ 1.2] error: ...'
      },
      {
        title: 'Count and sort',
        code: 'ps aux | awk \'{print $1}\' | sort | uniq -c | sort -rn',
        output: '   4 root\n   2 admin\n   1 www-data'
      }
    ],
    keyPoints: [
      'Note: tail -f follows a file as it grows — great for logs',
      'Note: grep -i ignores case; grep -r searches a whole folder',
      'Note: uniq needs sorted input; combine as sort | uniq -c'
    ],
    commonMistakes: [
      'Warning: forget sudo and you may not be able to read /var/log files owned by root'
    ],
    proTips: [
      'Tip: Use less instead of cat for long files — you get search and scroll'
    ]
  },

  redirection: {
    definition: 'Redirection sends a command output or input to/from files, and pipes (|) connect one command to another. This is the glue of the Linux command line.',
    whyUse: 'You redirect output to save it, discard errors, or feed one tool into another to build powerful one-liners.',
    whereUse: 'Writing config/setup output to logs, chaining filters, and scripting.',
    syntax: null,
    explanation: '> writes output to a file (overwrites), >> appends, 2> redirects stderr, < reads input from a file, and | sends stdout to the next command. Use tee to both show and save output.',
    examples: [
      {
        title: 'Redirect output to a file',
        code: 'ls -l > listing.txt\ncat listing.txt | wc -l',
        output: '12'
      },
      {
        title: 'Append and separate errors',
        code: 'echo "start" >> /tmp/log.txt\nls /root 2>> /tmp/errors.txt\necho "done" >> /tmp/log.txt',
        output: '(logs written; errors separated to errors.txt)'
      },
      {
        title: 'Pipe between commands',
        code: 'ps aux | grep -i nginx | grep -v grep',
        output: 'root 123 0.0 0.2 /usr/sbin/nginx -g daemon on;'
      }
    ],
    keyPoints: [
      'Note: > overwrites, >> appends — be careful with >',
      'Note: 2> redirects error output (stderr); 2>&1 combines errors into stdout',
      'Note: tee file writes to the file AND shows on screen'
    ],
    commonMistakes: [
      'Warning: A single > wipes an existing file — use >> to append'
    ],
    proTips: [
      'Tip: Send output to /dev/null to discard it: command > /dev/null 2>&1'
    ]
  },

  editors: {
    definition: 'Most Linux settings live in plain-text config files, so editing them from the command line is essential. nano is simple to learn; vi/vim is powerful and always installed.',
    whyUse: 'You will edit /etc files (SSH config, network config, sudoers) almost daily. Choosing vi or nano is a matter of preference, but every admin should be comfortable in both.',
    whereUse: 'Editing configs over SSH, writing scripts, and quick fixes without a GUI.',
    syntax: null,
    explanation: 'nano: arrow keys to move, Ctrl+O save, Ctrl+X exit. vi/vim: different modes — press i to insert, Esc to return to normal mode, :w to save, :q to quit, :wq save and quit, :q! quit without saving. Both editors are identical on Ubuntu and RHEL.',
    examples: [
      {
        title: 'Edit a file with nano',
        code: 'sudo nano /etc/hostname\n# edit, then Ctrl+O to save, Ctrl+X to exit',
        output: '(opens a simple full-screen editor)'
      },
      {
        title: 'Edit a file with vi',
        code: 'sudo vi /etc/hosts\n# press i to edit, Esc, then :wq to save and quit',
        output: '(vi opens; i = insert, Esc = normal, :wq = save+quit)'
      },
      {
        title: 'Edit sudoers safely',
        code: 'sudo visudo\n# validate + edit, :wq to save',
        output: '(visudo validates the file before saving)'
      }
    ],
    keyPoints: [
      'Note: nano is easiest for beginners (Ctrl+O save, Ctrl+X exit)',
      'Note: vi/vim is more powerful and universally installed — worth learning',
      'Note: visudo is the ONLY safe way to edit /etc/sudoers'
    ],
    commonMistakes: [
      'Warning: On RHEL, vi may be replaced by vim-minimal; both still work',
      'Warning: A syntax error in /etc/sudoers can lock out sudo — always use visudo'
    ],
    proTips: [
      'Tip: If a syntax error breaks sudo, boot or fix as root, or use pkexec visudo'
    ]
  },

  archives: {
    definition: 'Archiving bundles many files into one file (tar), and compression shrinks it (gzip, bzip2, xz, zip). Used for backups, log rotation, and moving files.',
    whyUse: 'Backing up directories and distributing/installing software all rely on archives. Every admin creates and extracts archives.',
    whereUse: 'System backups, downloading source tar balls, moving configs between servers.',
    syntax: null,
    explanation: 'tar -czf backup.tar.gz /etc creates a gzip archive (-c create, -z gzip, -f file); tar -xzf extracts (-x). zip/unzip work the same as on Windows. gunzip/bzip2/xz compress single files. Commands are identical on Ubuntu and RHEL.',
    examples: [
      {
        title: 'Create a gzipped tar archive',
        code: 'tar -czf /tmp/etc-backup.tar.gz /etc\ntar -tzf /tmp/etc-backup.tar.gz | head',
        output: 'etc/\netc/hostname\netc/hosts\n...'
      },
      {
        title: 'Extract an archive',
        code: 'cd /tmp\nmkdir restore\ncd restore\ntar -xzf /tmp/etc-backup.tar.gz\nls etc | head',
        output: 'hostname  hosts  ...'
      },
      {
        title: 'Work with zip',
        code: 'zip -r /tmp/logs.zip /var/log\nunzip -l /tmp/logs.zip | head',
        output: 'Archive:  /tmp/logs.zip\n  ...  syslog'
      }
    ],
    keyPoints: [
      'Note: -c create, -x extract, -t list, -z gzip, -f file',
      'Note: tar.gz is the most common archive on Linux',
      'Note: Commands are identical on Ubuntu and RHEL'
    ],
    commonMistakes: [
      'Warning: Always list (-t) an archive before extracting if unsure of contents',
      'Warning: Recursive zip needs -r, just like on other systems'
    ],
    proTips: [
      'Tip: Use tar --exclude to skip folders like /tmp or /proc when backing up'
    ]
  },

  repos: {
    definition: 'Repositories are online collections of packages that your package manager pulls from. Ubuntu (apt) and RHEL (dnf) each have their own repos and their own package formats—.deb vs .rpm.',
    whyUse: 'To install software beyond the default repos (e.g. the latest version or proprietary tools), you add extra repos or install .deb/.rpm files directly.',
    whereUse: 'Adding Ubuntu PPAs, enabling RHEL/EPEL, and installing a downloaded .deb or .rpm.',
    syntax: null,
    explanation: 'On Ubuntu, apt uses sources in /etc/apt/sources.list (and .list.d). Software not in the base repos is often in a PPA (Personal Package Archive). On RHEL, repos live in /etc/yum.repos.d, and EPEL (Extra Packages for Enterprise Linux) adds a huge set of extra packages. You can also install a single .deb (apt install ./file.deb) or .rpm (dnf install ./file.rpm).',
    examples: [
      {
        title: 'Ubuntu: add a PPA and install from it',
        code: 'sudo add-apt-repository ppa:graphics-drivers/ppa\nsudo apt update\nsudo apt install -y <package>',
        output: 'Adding ppa:graphics-drivers/ppa\nHit:1 ...\nReading package lists... Done'
      },
      {
        title: 'RHEL: enable EPEL',
        code: 'sudo dnf install -y epel-release\nsudo dnf update\ndnf repolist',
        output: 'Last metadata expiration...\nrepo id      repo name\nepel         Extra Packages for Enterprise Linux 9'
      },
      {
        title: 'Install a downloaded package file',
        code: 'sudo apt install ./myapp.deb      # Ubuntu\nsudo dnf install ./myapp.rpm           # RHEL',
        output: 'The following NEW packages will be installed: ...'
      }
    ],
    keyPoints: [
      'Note: Ubuntu = .deb + apt; RHEL = .rpm + dnf',
      'Note: PPA adds repos on Ubuntu; EPEL adds repos on RHEL',
      'Note: apt install ./file.deb is simpler than dpkg -i for dependencies'
    ],
    commonMistakes: [
      'Warning: Only add PPAs/repos you trust — they grant significant power',
      'Warning: dnf localinstall was renamed to dnf install for .rpm files'
    ],
    proTips: [
      'Tip: apt list --upgradable and dnf list --upgradable show available updates'
    ]
  },

  disks: {
    definition: 'Disks are physical storage devices named like /dev/sda. You split them into partitions (/dev/sda1, /dev/sda2) before formatting. Tools: lsblk, fdisk, parted.',
    whyUse: 'Adding storage is a routine admin task — attach a disk, partition it, format it, and mount it. Correct partitioning avoids data loss.',
    whereUse: 'New servers, extra data disks, and inspecting attached block devices.',
    syntax: null,
    explanation: 'lsblk lists all block devices and partitions in a tree. fdisk (MBR) and parted/gdisk (GPT) create partitions interactively. After partitioning you format with mkfs then mount. Device names and tools are the same on Ubuntu and RHEL.',
    examples: [
      {
        title: 'List disks and partitions',
        code: 'lsblk\nfdisk -l',
        output: 'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda      8:0    0  100G  0 disk\n├─sda1   8:1    0    1G  0 part /boot\n└─sda2   8:2    0   99G  0 part /'
      },
      {
        title: 'Create a partition with fdisk',
        code: 'sudo fdisk /dev/sdb\n# n (new), p (primary), w (write)',
        output: 'Command (m for help): n\nPartition type: ...\nCreated a new partition 1'
      },
      {
        title: 'Inspect SCSI/block devices',
        code: 'lsblk /dev/sdb\ncat /sys/block/sdb/size',
        output: 'NAME   SIZE ...\nsdb    50G  ...'
      }
    ],
    keyPoints: [
      'Note: lsblk is the modern way to list disks/partitions',
      'Note: fdisk for MBR, gdisk/parted for GPT',
      'Note: Device names (/dev/sda) are identical on Ubuntu and RHEL'
    ],
    commonMistakes: [
      'Warning: Repartitioning a disk you are using can destroy data — back up first',
      'Warning: fdisk is interactive; double-check the device before writing (w)'
    ],
    proTips: [
      'Tip: Use gdisk for disks >2TB (GPT), fdisk for smaller MBR disks'
    ]
  },

  filesystems: {
    definition: 'A filesystem is how a partition stores files. Common Linux filesystems are ext4 (default on Ubuntu and many RHEL setups) and xfs (default on RHEL). You format partitions with mkfs and make them available by mounting.',
    whyUse: 'To use a partition for storage, you must format (create a filesystem) and mount it. Persistent mounts are defined in /etc/fstab.',
    whereUse: 'Formatting new data disks, mounting extras, and configuring /etc/fstab.',
    syntax: null,
    explanation: 'mkfs.ext4 /dev/sdb1 or mkfs.xfs /dev/sdb1 creates the filesystem. mount /dev/sdb1 /data makes it available; umount unmounts. To persist across reboots, add a line to /etc/fstab with the device and mount point. fstab support is identical on Ubuntu and RHEL.',
    examples: [
      {
        title: 'Format and mount a partition',
        code: 'sudo mkfs.ext4 /dev/sdb1\nsudo mkdir -p /data\nsudo mount /dev/sdb1 /data\ndf -h /data',
        output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sdb1        50G   24K   50G   1% /data'
      },
      {
        title: 'Align and check with fsck',
        code: 'sudo fsck /dev/sda1',
        output: 'fsck from util-linux 2.34\n/dev/sda1: clean, 114/131072 files...'
      },
      {
        title: 'Add a persistent mount to /etc/fstab',
        code: '# /etc/fstab — add:\n/dev/sdb1  /data  ext4  defaults  0 2',
        output: '(now mounted automatically at boot)'
      }
    ],
    keyPoints: [
      'Note: ext4 is common on Ubuntu; RHEL defaults to xfs',
      'Note: mount attaches a filesystem; umount detaches (no n in umount)',
      'Note: /etc/fstab defines persistent mounts'
    ],
    commonMistakes: [
      'Warning: A bad /etc/fstab entry can prevent boot — test with mount -a first',
      'Warning: unmount is spelled "umount" (no second n)'
    ],
    proTips: [
      'Tip: Use the UUID instead of the device name in fstab — it never changes'
    ]
  },

  diskusage: {
    definition: 'Monitoring disk space prevents outages. df reports free space on filesystems; du reports how much space a directory uses. Quotas limit how much a user can use.',
    whyUse: 'A full disk can stop a service or crash a server. Admins routinely check usage and enforce limits with quotas.',
    whereUse: 'Planning capacity, finding what fills a disk, and limiting users.',
    syntax: null,
    explanation: 'df -h shows human-readable free space per filesystem. du -sh /path shows total size of a directory; du -sh * finds the biggest items. quota tools (quota, edquota) set per-user limits. These work the same on Ubuntu and RHEL.',
    examples: [
      {
        title: 'Check free space on all filesystems',
        code: 'df -h\ndf -h /',
        output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda2        99G   12G   82G  13% /'
      },
      {
        title: 'Find what is using space',
        code: 'sudo du -sh /* 2>/dev/null | sort -rh | head',
        output: '4.6G    /var\n1.2G    /usr\n200M    /tmp'
      },
      {
        title: 'See inodes in use',
        code: 'df -i',
        output: 'Filesystem     Inodes  IUsed  IFree IUse% Mounted on\n/dev/sda2    6553600 204800 6348800    4% /'
      }
    ],
    keyPoints: [
      'Note: df -h shows free space; du shows directory sizes',
      'Note: df -i shows inode usage — a disk with free space can still be full of inodes',
      'Note: quota limits usage per user'
    ],
    commonMistakes: [
      'Warning: A disk can be "full" of inodes even with free space — check df -i too',
      'Warning: Enabling quotas requires adding usrquota to fstab and remounting'
    ],
    proTips: [
      'Tip: Set up logrotate to stop logs from filling the disk'
    ]
  },

  systemd: {
    definition: 'Systemd is the init system and service manager on both Ubuntu and RHEL. It starts services at boot and manages them at runtime via systemctl. It also provides logging via journald.',
    whyUse: 'You start, stop, restart, enable, and inspect services constantly — web servers, databases, SSH. Systemd makes this consistent across distros.',
    whereUse: 'Managing services, checking status, and reading service logs.',
    syntax: null,
    explanation: 'systemctl start/stop/restart/status <service> controls a service. systemctl enable makes it start at boot; enable --now does both. systemctl is-enabled checks. Unit files live in /etc/systemd/system. Logs are read with journalctl. Commands are identical on Ubuntu and RHEL.',
    examples: [
      {
        title: 'Check a service status',
        code: 'systemctl status sshd\nsystemctl is-enabled sshd',
        output: '● sshd.service - OpenSSH server daemon\n   Active: active (running)\nenabled'
      },
      {
        title: 'Enable and start a service',
        code: 'sudo systemctl enable --now nginx\nsystemctl status nginx',
        output: 'Created symlink .../multi-user.target.wants/nginx.service\n● nginx.service ... Active: active (running)'
      },
      {
        title: 'Read live logs for a service',
        code: 'sudo journalctl -u nginx -f',
        output: 'Aug 28 09:02:11 server nginx[1234]: 192.168.1.5 - - "GET / HTTP/1.1" 200'
      }
    ],
    keyPoints: [
      'Note: systemctl start/stop/restart/status control a service',
      'Note: enable = start at boot; enable --now = enable + start',
      'Note: journalctl -u <service> reads that service logs'
    ],
    commonMistakes: [
      'Warning: On RHEL the SSH service is sshd; on Ubuntu it is also sshd (service name ssh on Debian)',
      'Warning: Remember sudo before systemctl admin commands'
    ],
    proTips: [
      'Tip: systemctl list-units --type=service shows all active services'
    ]
  },

  ssh: {
    definition: 'SSH (Secure Shell) is how you connect to and administer remote Linux servers. OpenSSH is the standard implementation, configured in /etc/ssh/sshd_config.',
    whyUse: 'Servers have no screen — you reach them over SSH. Secure key-based login is the foundation of safe remote administration.',
    whereUse: 'Connecting to cloud VMs, managing remote servers, secure file transfer.',
    syntax: null,
    explanation: 'ssh user@host connects; ssh -p port connects on a custom port. ssh-keygen generates a key pair; ssh-copy-id installs your public key on a server so you can log in without a password. For security, disable root login and password auth in sshd_config and restart sshd. Identical on Ubuntu and RHEL.',
    examples: [
      {
        title: 'Connect to a server',
        code: 'ssh admin@192.168.1.10\nhostname\nwhoami',
        output: 'The authenticity of host ...\nadmin@192.168.1.10\'s password:\nserver-01\nadmin'
      },
      {
        title: 'Set up key-based login',
        code: 'ssh-keygen -t ed25519\nssh-copy-id admin@192.168.1.10\nssh admin@192.168.1.10',
        output: 'Generating public/private ed25519 key pair...\nNow try logging into the machine with: ssh admin@192.168.1.10'
      },
      {
        title: 'Copy a file with scp',
        code: 'scp backup.tar.gz admin@192.168.1.10:/tmp/\n# rsync is often better\nrsync -avz backup.tar.gz admin@192.168.1.10:/tmp/',
        output: 'backup.tar.gz   100%  120MB   2.4MB/s   00:50'
      }
    ],
    keyPoints: [
      'Note: ssh user@host connects; -p changes the port',
      'Note: ssh-keygen + ssh-copy-id enables passwordless key login',
      'Note: Same behavior on Ubuntu and RHEL'
    ],
    commonMistakes: [
      'Warning: If you disable password auth, ensure keys work before closing the session',
      'Warning: Change the default SSH key permissions (chmod 600 ~/.ssh/authorized_keys)'
    ],
    proTips: [
      'Tip: Use a SSH config file (~/.ssh/config) to store host aliases and options'
    ]
  },

  firewall: {
    definition: 'Firewalls control which ports are open to the network. Ubuntu uses ufw (a front-end to iptables); RHEL uses firewalld. Both also have security frameworks — SELinux (RHEL) and AppArmor (Ubuntu).',
    whyUse: 'A closed firewall blocks attackers. You must open only the ports your services need and understand SELinux/AppArmor, which restrict what processes can do.',
    whereUse: 'Opening web/SSH ports, blocking unwanted traffic, and diagnosing "connection refused" issues.',
    syntax: null,
    explanation: 'On Ubuntu: sudo ufw allow 80/tcp and sudo ufw enable. On RHEL: sudo firewall-cmd --add-port=80/tcp --permanent then --reload. SELinux (RHEL) uses enforcing modes and booleans; AppArmor (Ubuntu) uses profiles in /etc/apparmor.d. Security context can block a service even with the firewall open.',
    examples: [
      {
        title: 'Ubuntu: open a port with ufw',
        code: 'sudo ufw allow 22/tcp\nsudo ufw allow 80/tcp\nsudo ufw enable\nsudo ufw status',
        output: 'Status: active\n22/tcp  ALLOW  Anywhere\n80/tcp  ALLOW  Anywhere'
      },
      {
        title: 'RHEL: open a port with firewalld',
        code: 'sudo firewall-cmd --add-port=80/tcp --permanent\nsudo firewall-cmd --reload\nsudo firewall-cmd --list-ports',
        output: '80/tcp'
      },
      {
        title: 'Check SELinux mode (RHEL)',
        code: 'getenforce\nsestatus',
        output: 'Enforcing\nSELinux status: enabled'
      }
    ],
    keyPoints: [
      'Note: Ubuntu: ufw allow <port>/<proto>; RHEL: firewall-cmd --add-port=..',
      'Note: Remember --permanent + --reload for firewalld changes to persist',
      'Note: RHEL = SELinux; Ubuntu = AppArmor (do not disable them)'
    ],
    commonMistakes: [
      'Warning: Enabling ufw can lock you out of SSH if 22 is not allowed first',
      'Warning: Do not disable SELinux/AppArmor to "fix" a blocked service'
    ],
    proTips: [
      'Tip: Use semanage/setsebool on RHEL to fix SELinux denials instead of disabling it'
    ]
  },

  dns: {
    definition: 'DNS translates hostnames to IP addresses. Your server learns which nameserver to use from /etc/resolv.conf, and you query DNS with dig, nslookup, or host.',
    whyUse: 'If DNS breaks, your server cannot reach or be reached by name. Diagnosing name resolution is a core troubleshooting skill.',
    whereUse: 'Troubleshooting "cannot resolve host", verifying records, and setting a servers hostname.',
    syntax: null,
    explanation: 'The hostname is set via hostnamectl. Name resolution uses /etc/resolv.conf (nameserver lines). dig <name> A and dig -x <ip> query records. systemd-resolved (Ubuntu) and NetworkManager manage resolv.conf. The commands work on both distros.',
    examples: [
      {
        title: 'Check the hostname',
        code: 'hostname\nhostnamectl status',
        output: 'server-01\n  Static hostname: server-01\n  Operating System: Ubuntu 22.04 LTS'
      },
      {
        title: 'Query a web address',
        code: 'dig +short example.com A\nnslookup example.com',
        output: '93.184.216.34\nServer:  ...\nName:   example.com\nAddress: 93.184.216.34'
      },
      {
        title: 'Look at the resolver config',
        code: 'cat /etc/resolv.conf',
        output: 'nameserver 127.0.0.53\nnameserver 8.8.8.8'
      }
    ],
    keyPoints: [
      'Note: dig/nslookup/host query DNS; /etc/resolv.conf lists nameservers',
      'Note: hostnamectl sets the hostname',
      'Note: Same commands on Ubuntu and RHEL'
    ],
    commonMistakes: [
      'Warning: Editing /etc/resolv.conf directly on Ubuntu/RHEL is overwritten by systemd-resolved or NetworkManager — change it through the right tool instead'
    ],
    proTips: [
      'Tip: Use dig to check propagation: dig @8.8.8.8 example.com'
    ]
  },

  cron: {
    definition: 'Scheduling lets you run maintenance (backups, updates, cleanup) automatically. Tools are cron (crontab), at (one-off), and modern systemd timers.',
    whyUse: 'Automating recurring jobs is fundamental to running servers reliably without manual work.',
    whereUse: 'Nightly backups, log rotation, health checks, and report generation.',
    syntax: null,
    explanation: 'crontab -e edits your cron jobs. A cron line is: minute hour day month weekday command. at schedules a one-time job (echo "cmd" | at 2pm). systemd timers (.timer units) are a modern alternative with better logging. cron works identically on Ubuntu and RHEL; you may need cronie (RHEL) installed.',
    examples: [
      {
        title: 'Schedule a nightly backup with cron',
        code: 'crontab -e\n# add:\n0 2 * * * /home/admin/backup.sh',
        output: '(runs backup.sh every day at 02:00)'
      },
      {
        title: 'List your cron jobs',
        code: 'crontab -l',
        output: '0 2 * * * /home/admin/backup.sh\n30 3 * * 0 /scripts/report.sh'
      },
      {
        title: 'Run a one-off job with at',
        code: 'echo "/home/admin/update.sh" | at 3am\natq',
        output: 'job 5 at Wed Aug 28 03:00:00 2026'
      }
    ],
    keyPoints: [
      'Note: crontab -e edits, -l lists, -r removes your jobs',
      'Note: cron format: minute hour day month weekday command',
      'Note: at runs one-time jobs; systemd timers are the modern alternative'
    ],
    commonMistakes: [
      'Warning: cron jobs run without your interactive environment — use absolute paths and set PATH inside the script'
    ],
    proTips: [
      'Tip: Redirect cron output (>> /var/log/backup.log 2>&1) so you can see what ran'
    ]
  },

  logs: {
    definition: 'Logs record what a system and its services did. Traditional logs live in /var/log; service logs are also captured by journald and read with journalctl (systemd).',
    whyUse: 'Logs are your primary diagnostic tool — they show errors, login attempts, and service events.',
    whereUse: 'Troubleshooting failures, auditing logins, and checking service output.',
    syntax: null,
    explanation: 'Find logs in /var/log: syslog (Ubuntu) / messages (RHEL), auth.log (Ubuntu) / secure (RHEL), and per-service logs. journalctl reads the systemd journal: journalctl -xe for recent errors, journalctl -u <service> for a service, journalctl -b for this boot. Log rotation is handled by logrotate.',
    examples: [
      {
        title: 'See authentication events',
        code: 'sudo tail -n 20 /var/log/auth.log   # Ubuntu\nsudo tail -n 20 /var/log/secure        # RHEL',
        output: 'Aug 28 08:55:12 server sshd[999]: Accepted password for admin ...'
      },
      {
        title: 'Read the systemd journal',
        code: 'journalctl -xe\njournalctl -u sshd -n 20',
        output: '-- Logs begin at ...\nAug 28 09:00:01 server sshd[1234]: Server listening on 0.0.0.0 port 22'
      },
      {
        title: 'List common logs',
        code: 'ls /var/log | head\nsudo tail -n 10 /var/log/messages   # RHEL',
        output: 'syslog  auth.log  kern.log  dpkg.log  ...'
      }
    ],
    keyPoints: [
      'Note: Ubuntu: syslog + auth.log; RHEL: messages + secure',
      'Note: journalctl -xe shows the latest errors with context',
      'Note: journalctl -b shows logs from the current boot'
    ],
    commonMistakes: [
      'Warning: Read-only logs need sudo; use sudo when tailing /var/log/*',
      'Warning: On RHEL the auth log is /var/log/secure, not auth.log'
    ],
    proTips: [
      'Tip: Setup logrotate to keep logs from filling the disk'
    ]
  },

  performance: {
    definition: 'Monitoring shows how healthy a server is and helps find bottlenecks. Core tools: top, free, uptime, vmstat, iostat, and sar.',
    whyUse: 'Before tuning or buying hardware you must identify the bottleneck — CPU, memory, disk, or network.',
    whereUse: 'Investigating slow servers, checking memory pressure, and tracking load.',
    syntax: null,
    explanation: 'uptime shows load average. free -h shows memory. top/htop show live processes by resource use. vmstat reports virtual memory, CPU, and I/O stats. iostat shows disk I/O. These tools are installed via the procps (top) and sysstat (iostat/sar) packages on both distros.',
    examples: [
      {
        title: 'System load and memory',
        code: 'uptime\nfree -h',
        output: ' 09:05:12 up 21 days,  3:42,  1 user,  load average: 0.10, 0.15, 0.20\n              total        used        free\nMem:           7.8G        3.1G        4.7G'
      },
      {
        title: 'Live process and CPU view',
        code: 'top -n 1 | head -n 15\n# or install: sudo dnf install htop / sudo apt install htop',
        output: 'Tasks: 123 total ...\n%CPU   %MEM COMMAND\n 25.0   1.2  java'
      },
      {
        title: 'Disk I/O stats',
        code: 'iostat -x 1\nvmstat 1 3',
        output: 'avg-cpu:  %user %nice %system %iowait\n           2.5  0.0   1.0     0.5'
      }
    ],
    keyPoints: [
      'Note: uptime shows load; free shows memory; top shows live processes',
      'Note: vmstat/iostat (from sysstat) show CPU and disk I/O',
      'Note: Same tools on Ubuntu and RHEL; install htop for a nicer top'
    ],
    commonMistakes: [
      'Warning: High load average can be CPU- or I/O-bound — check all stats, not just one'
    ],
    proTips: [
      'Tip: Use sar -q and sar -d for historical load and I/O trends'
    ]
  },

  backup: {
    definition: 'Backups protect data by copying it to a safe location. The go-to Linux tools are rsync (efficient synced copies) and tar (full archives), plus deduplicated tools like restic.',
    whyUse: 'Data loss from mistakes, corruption, or attacks is inevitable without backups. Restoring quickly is the whole point.',
    whereUse: 'Nightly server backups, syncing to offsite storage, and migrating data.',
    syntax: null,
    explanation: 'rsync -avz /source/ user@host:/dest/ mirrors a directory (only copies changed files). tar -czf makes a full compressed archive. Verify backups by listing or restoring to a scratch dir. Back up configs (/etc) and databases, and store offsite. These tools are identical on Ubuntu and RHEL.',
    examples: [
      {
        title: 'Back up a directory with rsync',
        code: 'rsync -avz /etc/ /var/backups/etc/\n# remote:\nrsync -avz /var/www/ admin@backup.example.com:/backups/www/',
        output: 'sending incremental file list\n/etc/hostname\n...\n\nsent 1.2M bytes  received 23K bytes'
      },
      {
        title: 'Create a full tar archive backup',
        code: 'sudo tar -czf /backups/etc-$(date +%F).tar.gz /etc\nls -lh /backups',
        output: 'etc-2026-08-28.tar.gz  -rw-r--r-- 1 root root 2.1M ...'
      },
      {
        title: 'Verify and restore a backup',
        code: 'tar -tzf /backups/etc-2026-08-28.tar.gz | head\nmkdir /tmp/restore && cd /tmp/restore\ntar -xzf /backups/etc-2026-08-28.tar.gz',
        output: 'etc/\netc/hostname\n...  (files restored to /tmp/restore/etc)'
      }
    ],
    keyPoints: [
      'Note: rsync -avz syncs efficiently; it only copies what changed',
      'Note: tar -czf creates full compressed archives',
      'Note: Always verify a backup (tar -t, or restore to a scratch dir)'
    ],
    commonMistakes: [
      'Warning: A backup you never tested is not a backup — verify restores regularly',
      'Warning: Keep backups offsite (or in another zone) so a single failure cannot destroy both'
    ],
    proTips: [
      'Tip: Back up databases with their tools (mysqldump / pg_dump) and schedule with cron'
    ]
  }
}

export default linux
