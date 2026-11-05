# Gaslight build kit (v0.7.0)

Compiled files only - no source code. `gaslight-kit.tgz` holds the built web app, the minified desktop
main process and the recipes (electron-builder config, iPhone build script).

When this folder changes on GitHub, `.github/workflows/build-apps.yml` builds on GitHub's free
cloud machines:

| App | Machine | File |
|---|---|---|
| Windows installer + portable | windows-latest | Gaslight-Setup-0.7.0.exe, Gaslight-0.7.0-portable.exe |
| macOS (Apple silicon + Intel) | macos-latest | Gaslight-0.7.0-mac.dmg (ad-hoc signed) |
| Linux | ubuntu-latest | Gaslight-0.7.0.AppImage, gaslight_0.7.0_amd64.deb |
| iPhone / iPad | macos-latest | Gaslight-0.7.0.ipa (unsigned, for sideloading) |

It publishes them as the GitHub Release `v0.7.0` and commits `release.json` to the site root,
which the download pages (footer > Windows | macOS | Linux | Android | iPhone) read.
Re-run it any time from the repository's **Actions** tab > *Build Gaslight apps* > *Run workflow*.
