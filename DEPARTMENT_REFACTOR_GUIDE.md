# Department Page Refactoring Guide

## Overview
All department files will follow the exact same structure as CSE.jsx. This document explains what needs to be changed for each department.

## Template File Location
`d:\Sem 7\Web\client\src\pages\departments\DepartmentTemplate.jsx`

## What to Replace (Placeholders)

### 1. Component Name & Export
- `DepartmentTemplate` → Replace with department name (e.g., `Mechanical`, `Electrical`, etc.)

### 2. Banner Image Import
```javascript
// Uncomment and update this line:
// import deptBanner from '../../assets/images/departments/[dept-folder]/[dept]-banner.png';

// Then in GenericPage:
backgroundImage={deptBanner}  // Instead of empty string
```

### 3. Title
```javascript
<GenericPage title="[Department Full Name]" ...>
```
Replace with actual department name (e.g., "Mechanical Engineering", "Electrical Engineering")

### 4. Department-Specific Data to Fill

#### Overview Section
- `[Department Overview Paragraph 1]` - Replace with actual overview text
- `[Department Overview Paragraph 2]` - Replace with actual overview text
- Video `src=""` - Add YouTube embed URL

#### Courses Table
- `[B.E. Degree Full Name]` - e.g., "Bachelor of Engineering (Mechanical Engineering)"
- `[Duration Details]` - e.g., "4 Year(8 Semesters) (Full time)"
- `[Number] Students per year` - e.g., "120 Students per year"
- `[Year]` - Establishment year
- `[NBA Accreditation Status]` - e.g., "Five Times Accredited by NBA"
- `[M.E. Specialization Name]` - e.g., "M.E. (Thermal Engineering)"
- `[HOD Name]` - Actual HOD name

#### Vision & Mission
- `[Vision Statement]` - Department vision
- `[Mission Point 1, 2, 3]` - Mission points
- `[PEO 1, 2, 3]` - Program Educational Objectives
- `[PSO 1, 2, 3]` - Program Specific Objectives

#### HOD Message
- `[HOD Name]` - Multiple occurrences
- `[Qualification 1]` - e.g., "Ph.D (Mech)"
- `[Qualification 2]` - e.g., "M.Tech"
- `[HOD Message Paragraph 1, 2, 3]` - Actual message text

#### Laboratories
Array of lab objects:
```javascript
{ name: '[Lab Name]', feat: '[Lab Features]', icon: '💻' }
```

#### Faculty
Array of faculty objects:
```javascript
{ 
  name: "[Faculty Name]", 
  role: "[Designation]", 
  area: ["[Specialization 1]", "[Specialization 2]"], 
  email: "[email]", 
  phone: "[phone]" 
}
```

#### Curriculum
- `[Syllabus Document Name 1, 2, ...]` - Document names
- `[M.E. Syllabus Document]` - ME syllabus name

#### Projects
Arrays for each year (2024-25, 2023-24, 2022-23):
```javascript
{ id: 1, title: "[Project Title]" }
```

#### Achievements
```javascript
{
  title: "[Achievement Title]",
  desc: "[Achievement Description]",
  icon: <FaAward />
}
```

#### Placements
Summary table:
```javascript
{ year: '2024-25', count: '[Number]*', id: '2024-25' }
```

Detail table:
```javascript
{ name: "[Student Name]", company: "[Company Name]", ctc: "[CTC]" }
```

#### Best Practices
```javascript
{
  title: "[Practice Title]",
  description: "[Practice Description]",
  icon: <FaLaptopCode />
}
```

#### Industrial Visits
```javascript
{ 
  company: "[Company Name]", 
  loc: "[Location]", 
  date: "[Date]", 
  desc: "[Visit Description]" 
}
```

#### MoUs
```javascript
{ 
  name: "[Partner Name]", 
  scope: "[Collaboration Scope]", 
  year: "Active since [Year]" 
}
```

#### Patents & Publications
```javascript
// Patents
{ 
  title: "[Patent Title]", 
  status: "Published/Granted", 
  id: "[Application No.]", 
  inventors: "[Inventor Names]", 
  date: "[Year]" 
}

// Publications
{ 
  title: "[Publication Title]", 
  authors: "[Author Names]", 
  journal: "[Journal/Conference Name]", 
  link: "#" 
}
```

## Step-by-Step Process for Each Department

### Example: Mechanical.jsx

1. Copy `DepartmentTemplate.jsx` to `Mechanical.jsx`
2. Find and replace:
   - `DepartmentTemplate` → `Mechanical`
   - `export default DepartmentTemplate` → `export default Mechanical`
3. Update banner import:
   ```javascript
   import mechBanner from '../../assets/images/departments/mechanical/mech-banner.png';
   ```
4. Update title:
   ```javascript
   <GenericPage title="Mechanical Engineering" backgroundImage={mechBanner}>
   ```
5. Fill in all placeholder data with actual content (or leave as placeholders for now)

## Files to Update
1. ✅ Mechanical.jsx
2. ✅ Electrical.jsx
3. ✅ EnTC.jsx
4. ✅ IT.jsx
5. ✅ MBA.jsx
6. ✅ AppliedSciences.jsx

## CSS Classes & Structure
**DO NOT MODIFY** - All CSS classes, layout structure, and design patterns are final.
Only replace the text content and data arrays.

## Important Notes
- Keep all Tailwind CSS classes exactly as they are
- Keep all Framer Motion animations unchanged
- Keep all React Icons unchanged
- Keep the sidebar navigation structure
- Keep the tab switching logic
- **Only change the data/content, not the structure or styling**

## Testing After Changes
1. Check that the banner image loads correctly
2. Verify all tabs work (Overview, HOD, Vision/Mission, etc.)
3. Test year dropdowns (Projects, Placements, Research)
4. Test tab switching (Vision/Mission, PEO/PO/PSO, Patents/Publications)
5. Verify responsive design on mobile

## Data You Can Leave Blank Initially
If you don't have specific data yet, you can leave these as placeholders:
- Industrial visits dates/companies
- Specific project titles (keep just 1-2 placeholder entries)
- Placement statistics (keep structure but use placeholder numbers)
- Patents and publications (keep 1 placeholder entry)
- Faculty members (keep 1 placeholder entry per section)

The structure will be identical, making it easy to fill in data later.
