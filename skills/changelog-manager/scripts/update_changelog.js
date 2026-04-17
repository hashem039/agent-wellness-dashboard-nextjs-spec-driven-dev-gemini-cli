#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHANGELOG_PATH = path.join(process.cwd(), 'CHANGELOG.md');

function getCommits() {
    // Get all commits since we don't have a reliable way to avoid duplicates within a single day without tracking commit hashes.
    // For simplicity, we'll fetch all and re-generate or carefully prepend.
    try {
        const output = execSync(`git log --pretty=format:"%ad: %s" --date=short`, { encoding: 'utf-8' });
        return output.trim().split('\n').filter(Boolean);
    } catch (e) {
        console.error("Failed to get git commits:", e.message);
        return [];
    }
}

function parseCommits(lines) {
    const groups = {};
    lines.forEach(line => {
        const colonIndex = line.indexOf(': ');
        if (colonIndex === -1) return;
        const date = line.substring(0, colonIndex);
        const msg = line.substring(colonIndex + 2);
        if (!groups[date]) groups[date] = [];
        groups[date].push(msg);
    });
    return groups;
}

function updateChangelog() {
    const commits = getCommits();
    if (!commits.length) {
        console.log("No commits found.");
        return;
    }

    const groups = parseCommits(commits);
    const sortedDates = Object.keys(groups).sort().reverse();

    let content = "# CHANGELOG\n\n";
    sortedDates.forEach(date => {
        content += `## ${date}\n\n`;
        // Deduplicate messages on the same day if necessary, or just list them all
        const msgs = Array.from(new Set(groups[date]));
        msgs.forEach(msg => {
            content += `- ${msg}\n`;
        });
        content += `\n`;
    });

    fs.writeFileSync(CHANGELOG_PATH, content);
    console.log("CHANGELOG.md has been generated/updated successfully in the project root.");
}

updateChangelog();
