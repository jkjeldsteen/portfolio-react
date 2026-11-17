# Portfolio Website

A modern, responsive personal portfolio built with React and TypeScript. Showcases projects, skills, and provides a contact form for direct communication.

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Project Showcase** - Display work with detailed case studies
- **Skills Section** - Highlight technical expertise
- **Contact Form** - Integrated email functionality via EmailJS
- **Dev Blog** - Share progress and insights on projects
- **Modern Tech Stack** - React 18, TypeScript, Vite, Tailwind CSS

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + custom CSS
- **Email**: EmailJS
- **Hosting**: DigitalOcean App Platform

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/jkjeldsteen/portfolio-react.git
cd portfolio-react
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with your EmailJS credentials
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:
```bash
npm run build
```

### SEO and hosting

The production output is `dist/`. The build generates page-specific HTML metadata
for all public routes and a `sitemap.xml` from `src/seo.ts`. That file is the source
of truth for page titles, descriptions, canonical URLs, and the production domain.
React updates the same metadata when visitors navigate within the app.

Configure hosting to serve existing route files (for example,
`/work/index.html`) before falling back to `/index.html` for client-side routes.
This lets social crawlers receive the correct metadata without running JavaScript.
The build also prerenders each route's React content, waiting for lazy components,
so headings, text, and links are available without JavaScript. It checks that
every route has a heading and that referenced production assets exist.
Unknown routes receive `noindex` after JavaScript runs; configure HTTP 404 responses
at the host for unknown URLs to avoid soft 404s.

After deployment, check the live route metadata and submit
`https://jkjeldsteen.com/sitemap.xml` in Google Search Console.

## Environment Variables

This project requires EmailJS credentials for the contact form:
- `VITE_EMAILJS_SERVICE_ID` - EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - EmailJS public API key

**Note**: When deploying to DigitalOcean, add these variables in the App Platform dashboard under Settings > Environment Variables.

## Project Structure

```
src/
├── components/        # React components
├── resources/        # Images, SVGs, GIFs
├── lib/              # Utilities
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Deployment

This project is automatically built and deployed via DigitalOcean App Platform when changes are pushed to the main branch.

## About This Project

This is a personal portfolio project developed primarily for showcasing work and continuous learning. **This project has been developed with the assistance of AI tools** to accelerate development and improve code quality. While AI tools were used throughout the development process, all design decisions, content, and customizations reflect personal choices and vision.

## License

This project is open source and available under the MIT License.
