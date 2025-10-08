# Git Commit and PR Workflow

## Overview

This workflow automates the process of testing commits, staging changes, creating commits, and submitting pull requests to sync changes with the repository.

## Workflow Steps

### 1. Pre-Commit Testing

```bash
# Run tests and linting
npm test
npm run lint
```

### 2. Stage Changes

```bash
# Add all modified files
git add .

# Or add specific files
git add <file1> <file2>
```

### 3. Commit Changes

```bash
# Create commit with descriptive message
git commit -m "feat: add Mississippi SEO optimization

- Update meta tags with location-specific keywords
- Add Mississippi/Jackson MS content throughout site
- Optimize for local search terms: IT consulting Mississippi, AI consulting Jackson MS
- Enhance SEO for 'near me' searches"
```

### 4. Push to Feature Branch

```bash
# Push to current branch
git push origin HEAD

# Or specify branch name
git push origin feature/seo-mississippi
```

### 5. Create Pull Request

```bash
# Create PR using GitHub CLI (if available)
gh pr create --title "SEO Optimization for Mississippi Market" \
             --body "This PR implements comprehensive SEO optimizations targeting Mississippi and Jackson MS searches.

## Changes Made
- Updated meta titles and descriptions with local keywords
- Added location-specific content throughout all pages
- Optimized for top search terms: IT consulting Mississippi, AI consulting Jackson MS
- Enhanced content for 'near me' and local business searches

## Testing
- All HTML validation passed
- Meta tags properly formatted
- Content maintains readability while optimizing for SEO

## Expected Impact
- Improved rankings for Mississippi-based IT consulting searches
- Better local search visibility for Jackson MS businesses
- Enhanced discoverability for AI consulting and SEO services"

# Or create PR manually through GitHub interface
```

### 6. PR Review and Merge

```bash
# Check PR status
gh pr view

# Wait for PR approval and CI checks to pass
# Then merge PR to master branch
gh pr merge --merge --delete-branch

# Alternative: Squash and merge (recommended for cleaner history)
gh pr merge --squash --delete-branch

# Or merge manually through GitHub interface
```

### 7. Post-Merge Cleanup

```bash
# Switch back to master branch
git checkout master

# Pull latest changes
git pull origin master

# Delete local feature branch (if not auto-deleted)
git branch -d feature/your-branch-name

# Verify merge was successful
git log --oneline -5
```

## Branch Naming Convention

- `feature/[description]` - for new features
- `fix/[description]` - for bug fixes
- `docs/[description]` - for documentation updates
- `seo/[description]` - for SEO-related changes

## Commit Message Format

```
type: description

- Detailed change 1
- Detailed change 2
- Impact or rationale
```

Types:
- `feat:` - new feature
- `fix:` - bug fix
- `docs:` - documentation
- `style:` - formatting
- `refactor:` - code restructuring
- `test:` - testing
- `chore:` - maintenance

## Quality Checks

- [ ] All tests pass
- [ ] Linting passes
- [ ] No console errors
- [ ] HTML validation passes
- [ ] SEO meta tags properly formatted
- [ ] Content is readable and professional
- [ ] Changes follow project conventions

## Automated Workflow Script
```bash
#!/bin/bash
# commit-and-pr.sh

echo "🚀 Starting Git workflow..."

# Run tests
echo "🧪 Running tests..."
npm test

# Run linting
echo "🔍 Running linting..."
npm run lint

# Stage changes
echo "📦 Staging changes..."
git add .

# Commit with message
echo "💾 Creating commit..."
read -p "Enter commit message: " commit_msg
git commit -m "$commit_msg"

# Push to branch
echo "⬆️ Pushing to remote..."
git push origin HEAD

# Create PR
echo "🔄 Creating pull request..."
gh pr create --title "SEO Optimization for Mississippi Market" \
             --body "Comprehensive SEO updates for Mississippi market targeting"

echo "⏳ Waiting for PR approval and CI checks..."
echo "After approval, run: gh pr merge --squash --delete-branch"

# Post-merge cleanup
echo "🧹 Switching to master and cleaning up..."
git checkout master
git pull origin master

echo "✅ Workflow complete! Changes merged to master branch."
