# Git & GitHub Interview Questions

## Day 2 - Git & GitHub Fundamentals

---

# Q1. What is Git?

### Answer

Git is a distributed version control system used to track changes in source code during software development. It helps developers collaborate, maintain version history, manage branches, and revert to previous versions if required.

---

# Q2. What is Version Control?

### Answer

Version Control is a system that records changes to files over time so developers can track modifications, restore previous versions, and collaborate without losing work.

Examples:
- Git
- SVN
- Mercurial

---

# Q3. What is the difference between Git and GitHub?

### Answer

| Git | GitHub |
|------|---------|
| Version Control System | Cloud Hosting Platform |
| Installed on Local Machine | Hosted on Internet |
| Tracks Source Code | Stores Git Repositories |
| Works Offline | Requires Internet for Sync |

Git manages code locally, whereas GitHub is used to store and collaborate on Git repositories online.

---

# Q4. What is a Repository?

### Answer

A repository is a storage location that contains all project files, commit history, branches, and version information.

Repositories can be:

- Local Repository
- Remote Repository

---

# Q5. Explain the Git Workflow.

### Answer

Git follows four main stages:

Working Directory
↓
Staging Area
↓
Local Repository
↓
Remote Repository (GitHub)

Commands:

git add .
git commit -m "message"
git push

---

# Q6. What is the Working Directory?

### Answer

The Working Directory is the current project folder where developers create, edit, and delete files.

Changes made here are not tracked until they are added to the staging area.

---

# Q7. What is the Staging Area?

### Answer

The Staging Area is an intermediate area where Git stores selected changes before creating a commit.

It allows developers to review and organize changes before permanently saving them.

---

# Q8. What is a Commit?

### Answer

A commit is a snapshot of the project at a specific point in time.

Each commit contains:

- Commit ID (SHA)
- Author
- Date & Time
- Commit Message
- Modified Files

---

# Q9. What is the difference between git add and git commit?

### Answer

git add

- Moves changes from the Working Directory to the Staging Area.

git commit

- Saves staged changes permanently into the Local Repository.

---

# Q10. What is GitHub?

### Answer

GitHub is a cloud-based platform used to host Git repositories. It enables collaboration, code review, pull requests, issue tracking, and continuous integration.

---

# Q11. What is Origin?

### Answer

Origin is the default nickname given to the remote GitHub repository.

Example:

git remote add origin https://github.com/username/shopsphere.git

Instead of typing the complete URL every time, developers use the alias "origin".

---

# Q12. What is a Remote Repository?

### Answer

A Remote Repository is a copy of the project stored on an online platform such as GitHub.

It allows developers to:

- Share code
- Collaborate
- Backup projects
- Track team changes

---

# Q13. What is the difference between Fetch and Push?

### Answer

Git Fetch

Downloads the latest changes from the remote repository without modifying the local working directory.

Git Push

Uploads local commits to the remote repository.

---

# Q14. Why doesn't Git track empty folders?

### Answer

Git tracks files, not directories.

If a folder is empty, Git ignores it because there is no file content to track.

Developers usually add:

- README.md
or
- .gitkeep

to keep empty folders in the repository.

---

# Q15. What is .gitignore?

### Answer

.gitignore is a configuration file that tells Git which files or folders should not be tracked.

Common examples:

node_modules/
.env
dist/
build/
coverage/

---

# Q16. Why should node_modules not be pushed to GitHub?

### Answer

The node_modules folder contains installed dependencies.

Reasons not to push it:

- Very large in size
- Can be regenerated using npm install
- Makes the repository unnecessarily heavy

Instead, only package.json and package-lock.json are committed.

---

# Q17. Why should the .env file not be pushed?

### Answer

The .env file contains sensitive information like:

- Database URL
- JWT Secret
- API Keys
- Payment Gateway Keys

Keeping it private protects the application's security.

---

# Q18. What is a Branch?

### Answer

A Branch is an independent line of development.

It allows developers to work on new features or bug fixes without affecting the main codebase.

Examples:

main
develop
feature/login
feature/cart

---

# Q19. Why do companies use Git?

### Answer

Companies use Git because it provides:

- Version History
- Team Collaboration
- Code Backup
- Branching
- Code Reviews
- Easy Rollback
- Release Management

---

# Q20. Explain the Git workflow used in ShopSphere.

### Answer

For the ShopSphere project, we followed this workflow:

1. Created the project structure.
2. Initialized Git using git init.
3. Created a .gitignore file.
4. Added project files using git add .
5. Created the first commit with a meaningful message.
6. Renamed the branch to main.
7. Created a GitHub repository.
8. Connected the local repository using git remote add origin.
9. Pushed the project using git push -u origin main.

This workflow follows standard software engineering practices and ensures proper version control from the beginning of the project.

---

# Practical Commands

Initialize Repository

git init

Check Status

git status

Stage Files

git add .

Commit Changes

git commit -m "Your Commit Message"

View Commit History

git log

Rename Branch

git branch -M main

Add Remote Repository

git remote add origin <repository-url>

View Remote Repository

git remote -v

Push Code

git push -u origin main

Push Future Changes

git push

Fetch Latest Changes

git fetch

Pull Latest Changes

git pull

Clone Repository

git clone <repository-url>

---

# Interview Tips

- Always explain concepts with examples.
- Differentiate Git and GitHub clearly.
- Understand the complete Git workflow.
- Use meaningful commit messages.
- Know why .gitignore is important.
- Be able to explain every Git command you use in your project.