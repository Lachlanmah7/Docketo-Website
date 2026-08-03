# Deployment Guide

## GitHub Pages
1. Create a repository named `docketo-website`.
2. Upload the contents of `site/` to the repository root.
3. Go to Settings → Pages.
4. Deploy from branch `main`, folder `/root`.

## Important for AdMob
`app-ads.txt` must resolve at the root of the developer website domain:

`https://YOUR-DOMAIN/app-ads.txt`

A custom domain is strongly recommended.

## Firebase Hosting
```powershell
firebase login
firebase init hosting
firebase deploy
```
Choose `site` as the public directory.
