# JSX Concepts Demonstration - Office Space Rental App

This React application demonstrates all the key JSX concepts and objectives outlined in the exercise.

## 🎯 Objectives Covered

### 1. **JSX Definition**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React components more readable and easier to write.

**Example in our app:**
```jsx
<h1 style={{ margin: 0, fontSize: '2.5rem' }}>
  Office Space Rental Application
</h1>
```

### 2. **ECMA Script (ES6+) Features Used**
- **Arrow Functions**: `const getRentColor = (rent) => { ... }`
- **Template Literals**: Used in alt attributes and formatting
- **Destructuring**: Implicit in map function parameters
- **Const/Let**: Modern variable declarations
- **Array Methods**: `.map()` for rendering lists

### 3. **React.createElement() Explanation**
JSX is syntactic sugar for `React.createElement()`. Behind the scenes, this JSX:
```jsx
<div className="App">
  <h1>Hello World</h1>
</div>
```
Compiles to:
```javascript
React.createElement('div', {className: 'App'}, 
  React.createElement('h1', null, 'Hello World')
)
```

### 4. **Creating React Nodes with JSX**
Our app creates various React nodes:
- **Elements**: `<div>`, `<h1>`, `<img>`, `<button>`
- **Components**: The `App` function component
- **Fragments**: Implicit fragments in our return statement

### 5. **Rendering JSX to DOM**
The app renders to DOM through:
```jsx
// In index.js (React 18 style)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### 6. **JavaScript Expressions in JSX**
Multiple examples throughout the app:
```jsx
{/* Variable interpolation */}
{office.name}

{/* Function calls */}
{formatCurrency(space.rent)}

{/* Conditional expressions */}
{space.rent < 60000 ? 'Budget Option' : 'Premium Choice'}

{/* Array mapping */}
{officeSpaces.map((space) => (...))}
```

### 7. **Inline CSS in JSX**
Extensive use of inline CSS with JavaScript objects:
```jsx
<div style={{
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '20px',
  textAlign: 'center'
}}>
```

**Conditional Styling:**
```jsx
<span style={{ 
  color: getRentColor(space.rent),  // Red if < 60000, Green if >= 60000
  fontWeight: 'bold'
}}>
```

## 🏢 Application Features

### 1. **Page Heading Element**
- Created using JSX `<h1>` element
- Styled with inline CSS
- Demonstrates basic JSX syntax

### 2. **Image Attributes**
- Office space images with proper `src` and `alt` attributes
- Error handling with `onError` event
- Responsive image styling

### 3. **Office Object**
Single office object displaying:
- Name
- Rent (with conditional coloring)
- Address

### 4. **Office List with Looping**
Array of office objects rendered using:
- `.map()` function for iteration
- Unique `key` props for React optimization
- Dynamic content generation

### 5. **Conditional CSS Coloring**
Rent amount styling:
- **Red color**: Rent below ₹60,000 (Budget-friendly)
- **Green color**: Rent above ₹60,000 (Premium)

## 🚀 Running the Application

1. **Install Dependencies:**
   ```bash
   cd officespacerentalapp
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm start
   ```

3. **View in Browser:**
   Open [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design
- Grid layout adapts to screen size
- Mobile-friendly responsive design
- Hover effects and smooth transitions

## 🎨 Styling Approach
- **Inline CSS**: Demonstrates JSX styling capabilities
- **Conditional Styling**: Based on business logic (rent amount)
- **Responsive Grid**: CSS Grid for modern layout
- **Color Coding**: Visual indicators for rent ranges

## 🔧 Technical Implementation

### Key Functions:
- `getRentColor(rent)`: Determines color based on rent amount
- `formatCurrency(amount)`: Formats numbers as Indian Rupee currency
- `map()`: Iterates through office spaces array

### JSX Best Practices Demonstrated:
- Proper component structure
- Event handling (`onMouseOver`, `onMouseOut`, `onError`)
- Conditional rendering
- List rendering with keys
- Inline event handlers
- Style objects for CSS

This application serves as a comprehensive example of JSX usage in React, covering all fundamental concepts while building a practical office space rental interface.
