# GitHub API Integration Guide

## Auto-Update Portfolio from GitHub

Your portfolio is set up to automatically fetch your latest projects from GitHub. Here's how to connect it to the real GitHub API:

### Current Setup

Right now, the portfolio uses **mock data** to display projects. To enable real-time updates from your GitHub account, follow these steps:

### Step 1: Get a GitHub Personal Access Token (Optional for Public Repos)

For public repositories, you don't need a token, but it increases the API rate limit.

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio App"
4. Select scopes: `public_repo` (for public repos only)
5. Generate and copy your token

### Step 2: Update the Projects Component

Open `/src/app/components/Projects.tsx` and replace the mock API call:

**Current code (around line 79):**
```typescript
// Simulate API call - Replace with real GitHub API
// fetch('https://api.github.com/users/ShehanHarshaKumara/repos?sort=updated&per_page=6')
//   .then(res => res.json())
//   .then(data => setProjects(data))
//   .catch(error => console.error('Error fetching projects:', error))
//   .finally(() => setLoading(false));

// Using mock data for now
setTimeout(() => {
  setProjects(mockProjects);
  setLoading(false);
}, 500);
```

**Replace with:**
```typescript
// Real GitHub API call
fetch('https://api.github.com/users/ShehanHarshaKumara/repos?sort=updated&per_page=6', {
  headers: {
    // Optional: Add your token for higher rate limits
    // 'Authorization': 'token YOUR_GITHUB_TOKEN_HERE'
  }
})
  .then(res => res.json())
  .then(data => {
    // Filter and sort your repos as needed
    const filteredRepos = data.filter(repo => !repo.fork && !repo.archived);
    setProjects(filteredRepos);
  })
  .catch(error => {
    console.error('Error fetching projects:', error);
    // Fallback to mock data if API fails
    setProjects(mockProjects);
  })
  .finally(() => setLoading(false));
```

### Step 3: Automatic Updates

Once connected, your portfolio will automatically show:
- ✅ Your latest GitHub repositories
- ✅ Real star and fork counts
- ✅ Actual programming languages used
- ✅ Repository descriptions and topics
- ✅ Links to live demos (if homepage is set)

### Step 4: Customize Which Projects Appear

You can filter which repositories show up by modifying the filter logic:

```typescript
const filteredRepos = data
  .filter(repo => 
    !repo.fork && 
    !repo.archived && 
    repo.stargazers_count > 0 // Only show repos with stars
  )
  .slice(0, 6); // Limit to 6 projects
```

### API Rate Limits

- **Without token:** 60 requests per hour
- **With token:** 5,000 requests per hour

For a portfolio site, the rate limit without a token is usually sufficient since the API is only called when the page loads.

### Alternative: GitHub GraphQL API

For more advanced queries and better performance, consider using GitHub's GraphQL API:

```typescript
fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Authorization': 'bearer YOUR_TOKEN',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
      query {
        user(login: "ShehanHarshaKumara") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                homepageUrl
                stargazerCount
                forkCount
                primaryLanguage { name }
                repositoryTopics(first: 5) {
                  nodes { topic { name } }
                }
              }
            }
          }
        }
      }
    `
  })
})
```

This allows you to show your pinned repositories specifically!

---

## Features of Your Portfolio

✨ **3D Animations** - Interactive Three.js elements
🎥 **Video Background** - Cinematic hero section
🌓 **Dark/Light Mode** - Smooth theme switching
📱 **Fully Responsive** - Works on all devices
🚀 **Auto-Updated Projects** - Direct GitHub integration
💼 **Professional Design** - Modern, unique layout
📧 **Contact Form** - Easy way for clients to reach you

---

**Note:** Never commit your GitHub token to a public repository. Use environment variables for production deployments.
