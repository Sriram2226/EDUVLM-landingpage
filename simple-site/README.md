# EduVLM-Bench Website - Simple HTML Version

This is a simplified version of the EduVLM-Bench research website built with only HTML, CSS, JavaScript, and Tailwind CSS. Perfect for beginners to understand and modify.

## Files Structure

```
simple-site/
├── index.html         # Research overview page
├── leaderboard.html   # Model leaderboard page
├── styles.css         # Custom CSS styles and color variables
├── script.js          # JavaScript for interactivity
└── README.md          # This file
```

## Features

- **Mobile-First Design**: Responsive layout optimized for all devices
- **Two Separate Pages**: Research overview (`index.html`) and Model leaderboard (`leaderboard.html`)
- **Interactive Navigation**: Mobile hamburger menu and desktop navigation bar
- **Mobile Leaderboard Cards**: Easy-to-read cards on mobile devices
- **Desktop Table View**: Full sortable table for larger screens
- **Interactive Filtering**: Sort and filter model performance data
- **Citation Modal**: Copy research citation to clipboard
- **Clean Academic Styling**: Professional white background with academic blue theme

## How to Use

1. **Open the Website**: Start with `index.html` in any web browser
2. **Navigate on Desktop**: Use the navigation bar to switch between Research and Leaderboard
3. **Navigate on Mobile**: Tap the hamburger menu (☰) for navigation options
4. **View Leaderboard**: Switch to `leaderboard.html` to see model performance
5. **Sort Data**: Click column headers (desktop) to sort the leaderboard
6. **Filter Models**: Use dropdown filters to narrow results by model type or size
7. **Get Citation**: Click "Citation" button to copy the research citation

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

- `toggleMobileMenu()` - Show/hide mobile navigation menu
- `sortTable(column)` - Sort leaderboard by column
- `renderLeaderboard()` - Update both desktop table and mobile cards
- `showCitation()` - Display citation modal
- `copyCitation()` - Copy citation to clipboard
- `downloadPaper()` - Handle paper download action
- `resetFilters()` - Clear all leaderboard filters

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