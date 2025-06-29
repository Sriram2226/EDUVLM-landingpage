# EduVLM-Bench Website - Simple HTML Version

This is a simplified version of the EduVLM-Bench research website built with only HTML, CSS, JavaScript, and Tailwind CSS. Perfect for beginners to understand and modify.

## Files Structure

```
simple-site/
├── index.html      # Main HTML file with all content
├── styles.css      # Custom CSS styles and color variables
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Features

- **Clean Academic Design**: White background with professional styling
- **Two Main Pages**: Research overview and Model leaderboard
- **Interactive Leaderboard**: Sortable table with filtering options
- **Citation Modal**: Copy research citation to clipboard
- **Responsive Design**: Works on desktop and mobile devices
- **Simple Navigation**: Easy switching between pages

## How to Use

1. **Open the Website**: Double-click `index.html` or open it in any web browser
2. **Navigate**: Click "Research" or "Leaderboard" in the navigation
3. **Sort Data**: Click column headers in the leaderboard to sort
4. **Filter Models**: Use the dropdown filters to narrow results
5. **Get Citation**: Click "Generate Citation" to copy the research citation

## Customization Guide

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --academic-blue: #2563eb;
  --dark-slate: #1e293b;
  --slate-grey: #64748b;
  --light-grey: #f1f5f9;
  --accent-amber: #f59e0b;
  --success-emerald: #10b981;
}
```

### Content
- **Research Text**: Edit the HTML content in `index.html`
- **Leaderboard Data**: Modify the `leaderboardData` array in `script.js`
- **Authors**: Update the authors section in the HTML

### Styling
- **Fonts**: Change the Google Fonts link in the HTML head
- **Layout**: Modify Tailwind classes directly in the HTML
- **Custom Styles**: Add new CSS rules in `styles.css`

## Key JavaScript Functions

- `showPage(pageName)` - Switch between research and leaderboard pages
- `sortTable(column)` - Sort leaderboard by column
- `renderLeaderboard()` - Update the table display
- `showCitation()` - Display citation modal
- `copyCitation()` - Copy citation to clipboard

## Browser Compatibility

Works in all modern browsers including:
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## No Build Process Required

This website runs directly in the browser with no compilation or build steps needed. Simply open `index.html` and it works immediately.

## Adding New Features

1. **New Page**: Add a new div with `page-content` class in HTML
2. **Navigation**: Add link in the navigation section
3. **JavaScript**: Add corresponding function to show/hide the page
4. **Styling**: Use existing CSS classes or add new ones

## Performance

- Fast loading with CDN resources
- Minimal JavaScript for smooth interactions
- Responsive images and optimized layout
- Clean code structure for easy maintenance

Perfect for students, researchers, or anyone wanting to create a simple academic website!