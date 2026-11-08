# Sharaf Feyzullayev — Personal Portfolio

A clean, Jekyll-based personal portfolio with a dark/light theme.

## Local development

You need Ruby and Bundler installed.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Editing your content

All personal content lives in the `_data/` folder so you don't need to touch HTML:

- `_data/info.yml` — name, title, status pill, tagline, social links, biography, highlight stats
- `_data/experience.yml` — work experience
- `_data/education.yml` — education
- `_data/projects.yml` — projects shown as cards
- `_data/skills.yml` — technical skills, languages, coursework

## Deploying to GitHub Pages

1. Push this folder to a repository named `optim00s.github.io`.
2. In **Settings → Pages**, set the source to the `main` branch.
3. Your site will be available at `https://optim00s.github.io`.

## Structure

```
.
├── _config.yml          # Jekyll configuration
├── _data/
│   ├── info.yml         # Profile data (name, title, bio, socials, stats)
│   ├── experience.yml   # Experience entries
│   ├── education.yml    # Education entries
│   ├── projects.yml     # Project entries
│   └── skills.yml       # Skills, languages, coursework
├── _includes/
│   ├── head.html        # <head> partial
│   └── socials.html     # Social icons (inline SVG)
├── _layouts/
│   └── default.html     # Base layout
├── assets/
│   ├── css/main.css     # Styles (theme tokens at the top)
│   ├── js/main.js       # Theme toggle, nav highlight, reveal
│   └── img/             # Favicon
├── index.html           # Home page
├── Gemfile              # Ruby dependencies
└── README.md
```
