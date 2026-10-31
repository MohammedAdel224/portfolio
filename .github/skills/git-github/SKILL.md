---
name: git-github
description: Handle git workflows, repo setup, branching, commits, pull requests, and GitHub publishing tasks for software projects.
---

# Git and GitHub Workflow

Use this skill for repository setup, version control hygiene, branch strategy, publishing, and collaboration tasks.

## Core practices
- Keep commits small, clear, and descriptive.
- Use a meaningful default branch such as `main`.
- Make sure each commit matches the project scope and includes a useful message.
- Prefer clean working trees before pushing or opening a PR.
- Use conventional branch names when helpful, such as `feature/…`, `fix/…`, or `chore/…`.

## Typical tasks
- Initialize a repo locally or from an existing project.
- Add a remote and push to GitHub.
- Create branches for feature work or fixes.
- Commit staged changes with a clear summary.
- Open pull requests and keep review notes concise.
- Sync with remote branch state before major merges.

## Commands to use
- `git init -b main`
- `git add .`
- `git commit -m "Summary"`
- `git branch -M main`
- `git remote add origin <url>`
- `git push -u origin main`
- `git status`
- `git log --oneline`

## Example
- Good: `git commit -m "Refine portfolio hero and CTA layout"`
- Bad: vague messages like "updates" or "misc changes" with no clear context.

## GitHub publishing checklist
- Ensure repo is initialized and committed locally.
- Create the remote repository on GitHub.
- Push the main branch.
- Add a license, README, and CI if needed.
- Open a PR for any non-trivial change.
