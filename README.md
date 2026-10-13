# Talat Zehra Ali — Engineering Portfolio

A custom, responsive, static portfolio for **Talat Zehra Ali**, focused on software engineering, information retrieval, backend systems, and AI engineering.

## Featured work

- [AtlasSearch](https://github.com/Alita41/atlassearch) — C++17 BM25, multilingual search, optional E5/FAISS hybrid retrieval, Python API, Redis and PostgreSQL.
- [DevLens](https://github.com/Alita41/devlens) — read-only GitHub ingestion, source-cited repository Q&A, issue triage, and an approval-check example.
- [NovaKV](https://github.com/Alita41/novakv) — concurrent C++17 TCP key-value store with TTL, LRU, WAL, and recovery.
- [EdgeVision](https://github.com/Alita41/edgevision) — edge-first OpenCV perception, temporal tracking, optional TFLite classification, event logging, and a monitoring dashboard.

## Run locally

No framework, npm install, API keys, or build step required. Open `index.html` in a browser or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment on GitHub Pages

1. Open **Settings → Pages** in the [profile-website repository](https://github.com/Alita41/profile-website).
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Choose `main` and `/(root)`, then click **Save**.
4. GitHub Pages will publish the portfolio at `https://alita41.github.io/profile-website/` after deployment completes.

All asset paths are relative, so the site works under the GitHub Pages project subpath. The previous `about.html`, `portfolio.html`, and `contact.html` URLs redirect to their corresponding sections of the new site.

## Architecture and accessibility

- Semantic HTML landmarks and accessible skip link
- Responsive desktop, tablet, and mobile layout
- Keyboard-accessible navigation and visible focus indicators
- Reduced-motion support
- Copy-email interaction with `mailto:` fallback
- CSS-only project visualizations, no screenshot dependencies
- No user tracking or analytics scripts
- Existing `profile.jpg` is used in the About section

## Technology

HTML5 · CSS3 · Vanilla JavaScript

## Contact

- Email: [talatzehra.ali14@gmail.com](mailto:talatzehra.ali14@gmail.com)
- GitHub: [Alita41](https://github.com/Alita41)
- LinkedIn: [Talat Zehra Ali](https://www.linkedin.com/in/talat-zehra-ali-36394a257)

## License

Website source © 2026 Talat Zehra Ali. The featured project repositories carry their own licenses.