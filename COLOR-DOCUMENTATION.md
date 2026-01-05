# Color Documentation - Web3 Portfolio

## Quick Reference

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--background` | Off-white `210 40% 98%` | Deep navy `222 47% 6%` | Page background |
| `--foreground` | Deep navy `222 47% 11%` | Off-white `210 40% 98%` | Primary text |
| `--primary` | Teal `174 72% 40%` | Teal `174 72% 56%` | CTAs, links, accents |
| `--accent` | Purple `270 60% 55%` | Purple `270 60% 60%` | Gradient endpoints |
| `--card` | White `0 0% 100%` | Navy `222 47% 8%` | Card backgrounds |
| `--secondary` | Light gray `220 14% 96%` | Navy `222 47% 12%` | Secondary surfaces |
| `--muted` | Gray `220 14% 95%` | Navy `222 30% 15%` | Subtle backgrounds |
| `--border` | Light gray `220 13% 91%` | Navy `222 30% 18%` | Borders, dividers |

---

## Detailed Color System

### Primary Colors
The primary color is a **Teal/Cyan** that represents the Web3 futuristic aesthetic.

```css
/* Light Mode */
--primary: 174 72% 40%;           /* Darker for visibility on light backgrounds */
--primary-foreground: 0 0% 100%;  /* White text on primary buttons */

/* Dark Mode */
--primary: 174 72% 56%;           /* Vibrant teal for dark backgrounds */
--primary-foreground: 222 47% 6%; /* Dark text on primary buttons */
```

**Used in:**
- Hero section CTA buttons
- Navigation "Let's Talk" button
- Footer social icon hovers
- Contact section submit button
- Service card icons
- Glow effects throughout

---

### Accent Colors
The accent color is a **Purple** used primarily in gradients.

```css
/* Light Mode */
--accent: 270 60% 55%;
--accent-foreground: 0 0% 100%;

/* Dark Mode */
--accent: 270 60% 60%;
--accent-foreground: 210 40% 98%;
```

**Used in:**
- Gradient text (primary → accent)
- Hero button gradients
- Background decorative orbs
- Card border gradients

---

### Background & Surface Colors

```css
/* Page Background */
--background: 210 40% 98%;  /* Light: Off-white */
--background: 222 47% 6%;   /* Dark: Deep navy */

/* Card Surfaces */
--card: 0 0% 100%;          /* Light: Pure white */
--card: 222 47% 8%;         /* Dark: Slightly lighter navy */

/* Secondary Surfaces */
--secondary: 220 14% 96%;   /* Light: Light gray */
--secondary: 222 47% 12%;   /* Dark: Navy */

/* Muted/Subtle Surfaces */
--muted: 220 14% 95%;       /* Light */
--muted: 222 30% 15%;       /* Dark */
```

---

### Text Colors

```css
/* Primary Text */
--foreground: 222 47% 11%;  /* Light mode: Dark navy */
--foreground: 210 40% 98%;  /* Dark mode: Off-white */

/* Muted/Secondary Text */
--muted-foreground: 220 8% 46%;   /* Light mode: Medium gray */
--muted-foreground: 215 20% 55%;  /* Dark mode: Muted light */
```

---

### Border & Input Colors

```css
/* Borders */
--border: 220 13% 91%;  /* Light mode: Subtle gray */
--border: 222 30% 18%;  /* Dark mode: Subtle navy */

/* Focus Ring */
--ring: 174 72% 40%;    /* Light mode: Teal */
--ring: 174 72% 56%;    /* Dark mode: Teal */
```

---

## Section-by-Section Color Usage

### Navigation
| Element | Color Token | Description |
|---------|-------------|-------------|
| Background (scrolled) | `background/80` | 80% opacity with blur |
| Logo | `text-gradient` | Primary → Accent gradient |
| Nav Links | `muted-foreground` → `foreground` | Hover transition |
| CTA Button | `hero` variant | Gradient button |
| Border (scrolled) | `border` | Subtle divider |

### Hero Section
| Element | Color Token | Description |
|---------|-------------|-------------|
| Background | `background` | With radial gradient overlays |
| Main Heading | `text-gradient` | Primary → Accent |
| Subheading | `muted-foreground` | Secondary text |
| Primary CTA | `hero` button | Gradient with glow |
| Secondary CTA | `glow` button | Outline with glow |
| Decorative Orbs | `primary/30`, `accent/20` | Background effects |

### Services Section
| Element | Color Token | Description |
|---------|-------------|-------------|
| Background | `background` | Base page color |
| Section Title | `text-gradient` | Gradient heading |
| Cards | `card` + `border-gradient` | Gradient border effect |
| Icons | `primary` | Teal icon color |
| Card Title | `foreground` | Primary text |
| Card Description | `muted-foreground` | Secondary text |

### Projects Section
| Element | Color Token | Description |
|---------|-------------|-------------|
| Background | `background` | Base page color |
| Section Title | `text-gradient` | Gradient heading |
| Project Cards | `card` + `card-glow` | Interactive glow on hover |
| Tags | `secondary` | Subtle tag backgrounds |
| Links | `primary` | With hover glow effect |

### About Section
| Element | Color Token | Description |
|---------|-------------|-------------|
| Background | `card` | Card surface color |
| Section Title | `text-gradient` | Gradient heading |
| Stats Numbers | `primary` | Highlighted numbers |
| Body Text | `foreground` | Primary text |
| Secondary Text | `muted-foreground` | Supporting text |

### Contact Section
| Element | Color Token | Description |
|---------|-------------|-------------|
| Background | `background` | Base page color |
| Section Title | `text-gradient` | Gradient heading |
| Form Inputs | `input` bg + `border` | Form styling |
| Submit Button | `hero` variant | Gradient with glow |
| Contact Info Icons | `primary` | Teal icons |
| Contact Info Text | `muted-foreground` | Secondary text |

### Footer
| Element | Color Token | Description |
|---------|-------------|-------------|
| Background | `card` | Card surface |
| Logo | `text-gradient` | Brand gradient |
| Links | `muted-foreground` → `primary` | Hover transition |
| Social Icons | `muted-foreground` → `primary` | Hover transition |
| Border | `border` | Top divider |

---

## Special Effects & Utilities

### Gradient Classes
```css
.text-gradient      /* Text with primary → accent gradient */
.bg-gradient-primary /* Background with primary → accent gradient */
.border-gradient    /* Border with gradient effect */
```

### Glow Effects
```css
.glow-effect        /* Large glow shadow */
.glow-effect-sm     /* Small glow shadow */
.card-glow          /* Interactive mouse-following glow */
.animate-pulse-glow /* Pulsing glow animation */
```

### Shadow Tokens
```css
--shadow-glow: 0 0 60px hsl(var(--primary) / 0.3);
--shadow-glow-sm: 0 0 30px hsl(var(--primary) / 0.2);
--shadow-card: 0 4px 40px hsl(0 0% 0% / 0.4);
```

---

## Tailwind Usage Examples

```tsx
// Using semantic colors
<div className="bg-background text-foreground">
<div className="bg-card border border-border">
<button className="bg-primary text-primary-foreground">
<p className="text-muted-foreground">

// Using utility classes
<h1 className="text-gradient">
<div className="border-gradient glow-effect">
<div className="card-glow">
```

---

## Theme Toggle
The theme can be toggled using the sun/moon button in the navigation. The theme preference is saved to localStorage and respects the user's system preference on first visit.
