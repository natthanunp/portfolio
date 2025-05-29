## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── Achievements.tsx
│       ├── Contact.tsx
│       ├── Experience.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Skills.tsx
│       └── ThemeProvider.tsx
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Personal Information

Update the following components with your personal information:

1. **Hero Section** (`src/components/Hero.tsx`): Name, title, description
2. **About Section** (`src/components/About.tsx`): About me content
3. **Experience Section** (`src/components/Experience.tsx`): Work experience
4. **Skills Section** (`src/components/Skills.tsx`): Technical skills
5. **Achievements Section** (`src/components/Achievements.tsx`): Achievements and recognition
6. **Contact Section** (`src/components/Contact.tsx`): Contact information

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Each component uses Tailwind CSS classes for styling

## License

This project is open source and available under the [MIT License](LICENSE).
