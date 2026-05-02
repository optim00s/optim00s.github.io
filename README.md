# Sharaf Feyzullayev — Personal Portfolio

A clean, Jekyll-based academic-style personal site.

## Local development

You need Ruby and Bundler installed.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Editing your content

All personal content lives in the `_data/` folder so you don't need to touch HTML:

- `_data/info.yml` — name, photo path, roles, email, social links, biography
- `_data/projects.yml` — list of projects shown on the page

Replace `assets/img/profile.svg` with your real photo (e.g. `profile.jpg`)
and update the `photo:` field in `_data/info.yml` accordingly.

## Deploying to GitHub Pages

1. Push this folder to a repository named `optim00s.github.io`.
2. In **Settings → Pages**, set the source to the `main` branch.
3. Your site will be available at `https://optim00s.github.io`.

## Structure

```
.
├── _config.yml          # Jekyll configuration
├── _data/
│   ├── info.yml         # Profile data (name, roles, bio, socials)
│   └── projects.yml     # Project entries
├── _includes/
│   ├── head.html        # <head> partial
│   └── socials.html     # Social icons (inline SVG)
├── _layouts/
│   └── default.html     # Base layout
├── assets/
│   ├── css/main.css     # Styles
│   └── img/             # Profile photo + favicon
├── index.html           # Home page
├── Gemfile              # Ruby dependencies
└── README.md
```
