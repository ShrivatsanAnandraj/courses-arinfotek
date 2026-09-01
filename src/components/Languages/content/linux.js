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
  }
}

export default linux
