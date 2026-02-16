# Rich Text Editing Features for Department Pages

## Overview

All department pages in the admin panel now support **rich text editing** with advanced formatting options. This allows you to edit text content with professional formatting capabilities including font selection, sizes, colors, alignment, and more.

## ✨ Automatic Rich Text Mode

**All multiline text fields automatically enable rich text editing** when you're in edit mode. This includes:

- HOD Messages
- Department Descriptions
- Vision & Mission Statements
- Program Educational Objectives (PEO)
- Program Outcomes (PO)
- Program Specific Objectives (PSO)
- Laboratory Information
- Research Descriptions
- And any other paragraph content

## 🎨 Available Formatting Features

### 1. Font Family Selection

Choose from 8 professional fonts:

- **Arial** - Clean, modern sans-serif
- **Comic Sans** - Casual, friendly style
- **Courier New** - Monospace, technical look
- **Georgia** - Classic serif font
- **Helvetica** - Professional sans-serif
- **Lucida** - Elegant sans-serif
- **Times New Roman** - Traditional serif
- **Verdana** - Highly readable sans-serif

### 2. Font Size

Select from 13 different font sizes ranging from:

- **10px** - Very small text
- **12px** - Small text
- **14px** - Default small
- **16px** - Standard body text
- **18px** - Slightly larger
- **20px** - Medium text
- **24px** - Subheadings
- **28px** - Large subheading
- **32px** - Heading
- **36px** - Large heading
- **48px** - Major heading
- **60px** - Extra large
- **72px** - Maximum size

### 3. Text Formatting

- **Bold** - Make text stand out
- **Italic** - Emphasize words or phrases
- **Underline** - Highlight important text
- **Strikethrough** - Show deleted or outdated content

### 4. Text Alignment

- **Left Align** - Default alignment
- **Center** - Center text on the page
- **Right Align** - Align text to the right
- **Justify** - Spread text evenly across the line

### 5. Colors

- **Text Color** - Choose from a full color palette
- **Background Color** - Highlight text with background colors

### 6. Lists and Structure

- **Ordered Lists** - Numbered lists (1, 2, 3...)
- **Unordered Lists** - Bullet points
- **Indent/Outdent** - Adjust list nesting
- **Headers** - H1 through H6 heading levels
- **Blockquotes** - Formatted quotations
- **Code Blocks** - Display code or technical content

### 7. Additional Features

- **Links** - Add hyperlinks to text
- **Clean Formatting** - Remove all formatting from selected text

## 🚀 How to Use

### Editing Department Content

1. **Access Admin Panel**
   - Navigate to `/admin` route
   - Login with admin credentials
   - Go to "Departments" section

2. **Select a Department**
   - Click on any department card (CSE, IT, Electrical, etc.)
   - This opens the Visual Page Editor

3. **Edit Text Content**
   - When you hover over any multiline text field, you'll see it's editable
   - Click on the text to open the rich text editor
   - A toolbar will appear with all formatting options

4. **Apply Formatting**
   - **Select text** you want to format
   - Use the **toolbar buttons** to apply formatting:
     - First dropdown: Choose **font family**
     - Second dropdown: Choose **font size**
     - Click buttons for **bold, italic, underline, strikethrough**
     - Use alignment buttons for **left, center, right, justify**
     - Click color buttons for **text and background colors**

5. **Save Changes**
   - Click the green **"Save"** button to save your changes
   - Or click **"Cancel"** to discard changes
   - After editing all sections, click the main **"Save All Changes"** button in the toolbar

### Example Workflow

**Editing HOD Message:**

1. Navigate to `Admin → Departments → CSE`
2. Click on the "HOD" tab
3. Click on the HOD message text
4. Select text you want to format
5. Choose font: "Georgia"
6. Set size: "16px"
7. Make the heading bold
8. Center-align the signature
9. Click "Save"

**Editing Vision Statement:**

1. Go to "Vision & Mission" tab
2. Click on the vision text
3. Select key phrases and make them bold
4. Change color of important words to blue
5. Adjust font size for emphasis
6. Click "Save"

## 💡 Best Practices

### Do's ✅

- **Use consistent fonts** throughout a section
- **Choose readable font sizes** (14-18px for body text)
- **Apply bold/italic sparingly** for emphasis
- **Use alignment** purposefully (center for headings, justify for paragraphs)
- **Test readability** on different screen sizes
- **Save frequently** to avoid losing changes

### Don'ts ❌

- **Don't mix too many fonts** in one paragraph
- **Avoid extremely large sizes** (>48px) for body text
- **Don't overuse colors** - stick to 2-3 colors max
- **Avoid Comic Sans for formal content**
- **Don't use all caps with large font sizes** - it's hard to read
- **Avoid strikethrough for permanent content**

## 🎯 Common Use Cases

### 1. Highlighting Key Achievements

```
Format: Bold + Larger Font + Blue Color
Example: "100% Placement Record Achieved!"
```

### 2. Professional HOD Messages

```
Font: Georgia or Times New Roman
Size: 16px
Alignment: Justify
Signature: Center-aligned, Italic
```

### 3. Department Vision

```
Font: Helvetica or Arial
Size: 18px
Key phrases: Bold
Color: Navy Blue (#003366)
```

### 4. Technical Descriptions

```
Font: Courier New (for code/technical terms)
Size: 14px
Background: Light gray for code blocks
```

### 5. Lists and Objectives

```
Format: Bullet points
Font: Arial or Verdana
Size: 16px
Bold: Only for headings
```

## 🔧 Technical Details

### For Developers

**Automatic Rich Text Activation:**

- EditableText component checks if `multiline={true}`
- If true, automatically enables RichTextEditor
- Can be overridden with explicit `richText={false}`

**Custom Fonts:**

- Registered in RichTextEditor.jsx
- Styles defined in RichTextEditor.css
- Font families: arial, comic-sans, courier-new, georgia, helvetica, lucida, times-new-roman, verdana

**Custom Sizes:**

- Sizes: 10px, 12px, 14px, 16px, 18px, 20px, 24px, 28px, 32px, 36px, 48px, 60px, 72px
- Registered size format in Quill
- CSS classes: .ql-size-10px through .ql-size-72px

**Component Props:**

```jsx
<EditableText
  path="content.description" // Path to data in context
  value={customValue} // Or controlled value
  onSave={handleSave} // Custom save handler
  multiline={true} // Enables rich text (auto)
  richText={true} // Force enable rich text
  richText={false} // Force disable rich text
  placeholder="Click to edit..." // Placeholder text
  className="custom-class" // Additional CSS classes
/>
```

## 📋 Troubleshooting

### Issue: Rich text editor not appearing

**Solution:** Ensure the field has `multiline={true}` prop or explicitly set `richText={true}`

### Issue: Formatting not saving

**Solution:**

1. Click the "Save" button in the editor
2. Click the main "Save All Changes" button in the toolbar
3. Check browser console for errors

### Issue: Fonts not displaying correctly

**Solution:**

1. Clear browser cache
2. Ensure RichTextEditor.css is loaded
3. Check if custom fonts are installed on the system

### Issue: Content looks different after saving

**Solution:**

1. The editor uses HTML - ensure your CSS doesn't override Quill classes
2. Check if `.ql-editor` styles are being applied correctly
3. Verify font families are available in both edit and view modes

## 🆘 Support

For additional help or to report issues:

1. Check the browser console for error messages
2. Verify you're logged in as an admin
3. Ensure you clicked "Save" after editing
4. Try refreshing the page and editing again

## 📚 Related Documentation

- [ADMIN_PANEL_GUIDE.md](./ADMIN_PANEL_GUIDE.md) - Complete admin panel guide
- [ADMIN_QUICK_START.md](./ADMIN_QUICK_START.md) - Quick start guide
- [DEPARTMENT_REFACTOR_GUIDE.md](./DEPARTMENT_REFACTOR_GUIDE.md) - Department structure guide

---

**Last Updated:** February 13, 2026
**Version:** 2.0
