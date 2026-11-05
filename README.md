# Gaslight - web app (v0.7.0)

This folder is the complete, built Gaslight web app. It contains no source code.

* **Upload:** put everything in this folder (including the hidden `.nojekyll` file, `.well-known/` and
  `.github/`) at the root of a GitHub repository, then Settings > Pages > Build and deployment >
  *Deploy from a branch* > `main` / `/ (root)`. Don't delete `release.json` in the repository:
  the cloud build writes it.
* **App downloads:** `downloads/` holds the Android APK. `build-kit/` (compiled files only) makes GitHub
  build the Windows, macOS, Linux and iPhone apps (Actions tab > *Build Gaslight apps*) and publish them
  as a Release; the footer's download pages link to it.
* **Address:** https://<user>.github.io/<repository>/
* **Invitation links:** the built-in default (src/shared/config.ts: https://terrint.com/).
* **Moving to your own domain/server later:** copy the same files to any static web host (no server code needed).
  Rebuild with the new address so invitation links point there.

Built 2026-11-05 17:45 UTC.
