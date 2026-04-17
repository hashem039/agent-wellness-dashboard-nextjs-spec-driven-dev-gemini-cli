---
name: changelog-manager
description: Generates and updates a CHANGELOG.md file in the project root based on git commit history. Use this skill before merging changes or when asked to update the project's changelog.
---

# Changelog Manager

This skill helps maintain a consistent `CHANGELOG.md` file by extracting commit messages and grouping them by date.

## Usage

When this skill is activated, you should run the provided script to update the changelog.

### Update Workflow

1. Ensure all relevant changes are committed (the script reads from git history).
2. Execute the update script:
   ```bash
   node scripts/update_changelog.js
   ```
3. Verify the `CHANGELOG.md` file in the project root.
4. If this is a manual update before a merge, confirm with the user if they want to commit the updated changelog.

## Implementation Details

- The script `scripts/update_changelog.js` fetches all commits using `git log`.
- Commits are grouped by date (YYYY-MM-DD).
- The `CHANGELOG.md` is overwritten with the latest history to ensure consistency and deduplication.
