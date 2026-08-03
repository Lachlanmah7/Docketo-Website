# Docketo Detailed Developer Website

This package contains a full static website for GitHub Pages.

## Main pages

- Home
- Features
- Free and Premium
- About
- Roadmap
- FAQ
- Videos
- Privacy Policy
- Account deletion
- Support
- app-ads.txt

## Local preview

```powershell
cd site
python -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## GitHub Pages

Upload the entire package to a GitHub repository. The included workflow deploys the `site` folder automatically.

In GitHub:

```text
Settings → Pages → Source: GitHub Actions
```

## Final Play Console URLs

```text
Website: https://YOUR-DOMAIN/
Privacy: https://YOUR-DOMAIN/privacy.html
Account deletion: https://YOUR-DOMAIN/delete-account.html
Support: https://YOUR-DOMAIN/support.html
```

## AdMob

The file must resolve at:

```text
https://YOUR-DOMAIN/app-ads.txt
```

A custom domain is recommended before final AdMob verification.
