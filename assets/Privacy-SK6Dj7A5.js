import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{a as t}from"./protocol-CmNyTa8n.js";import{M as n}from"./index-D2XFf0JZ.js";import{o as r}from"./Icon-7uLxg3Y9.js";var i=e(t(),1),a=r();function o(){let e=(0,i.useMemo)(()=>/<main>([\s\S]*)<\/main>/.exec(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gaslight Privacy Policy</title>
<meta name="description" content="What the Gaslight murder mystery app does with your information.">
<link rel="icon" href="icon.svg">
<style>
  :root { --bg: #120c0e; --surface: #1d1416; --line: #3d2a2c; --text: #eadfca; --muted: #a39282; --brass: #dcc08a; color-scheme: dark; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--text); font: 17px/1.6 Georgia, 'Times New Roman', serif; }
  main { max-width: 760px; margin: 0 auto; padding: 32px 16px 64px; }
  h1 { font-weight: normal; letter-spacing: 0.06em; color: var(--brass); margin: 0 0 4px; font-size: 2rem; }
  h2 { font-weight: normal; color: var(--brass); margin: 36px 0 8px; font-size: 1.3rem; border-bottom: 1px solid var(--line); padding-bottom: 6px; }
  p, li { color: var(--text); }
  .muted { color: var(--muted); font-size: 0.95rem; }
  .box { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 14px 18px; margin: 18px 0; }
  a { color: var(--brass); }
  ul { padding-left: 22px; }
  li { margin: 6px 0; }
  b { color: #f3e7cf; }
</style>
</head>
<body>
<main>
  <h1>Gaslight Privacy Policy</h1>
  <p class="muted">Effective 7 November 2026 · Gaslight by Spongedev - KBG - Terrint Creations · <a href="mailto:support@terrint.com">support@terrint.com</a></p>

  <div class="box">
    <b>The short version:</b> Gaslight has no accounts, no ads, no analytics and no tracking, and we run no servers that store your information. Your mysteries, settings and characters stay on your own device. The only things that leave it are the ones you send on purpose: game messages to the Game Master's device, invitations you share, and problem reports you choose to send.
  </div>

  <h2>What stays on your device</h2>
  <ul>
    <li>Mysteries you write in the Studio (text, pictures, audio and video clips), your settings, the name you play under, character files you open, and the rooms you have joined.</li>
    <li>You can delete all of it at any time in <b>Settings &gt; Advanced</b>, or by uninstalling the app.</li>
  </ul>

  <h2>Camera, microphone and location</h2>
  <ul>
    <li><b>Camera:</b> only while the QR scanner is open, to read room codes and clue codes. The picture is processed on your device and is never recorded or sent anywhere.</li>
    <li><b>Microphone:</b> only when you press record in the Studio, to make audio evidence for your own mystery. The recording is saved in that mystery on your device.</li>
    <li><b>Location:</b> on a computer or in a browser, the "use my location" button on an invitation's map can place a pin where you are. It is only used if you press it, and the pin is only shared if you publish the invitation.</li>
  </ul>

  <h2>Playing a game</h2>
  <ul>
    <li>Players connect to the Game Master's own device. Your player name, your choices, messages and votes go to that device for the length of the game. They don't go to us.</li>
    <li>When joining from another network, the two devices find each other through public Nostr relays (encrypted, short-lived notes) and then connect directly. Public STUN servers (Google and Cloudflare) help the devices see each other's internet address. Nothing about the game itself passes through those services.</li>
    <li>The Game Master can remove a guest, which also deletes that guest's game data on their device.</li>
    <li>A Game Master can save a game and continue it later. The saved game (including guests' names and progress) is kept only on the Game Master's own device.</li>
    <li>If you turn on <b>Remember names by network</b> (off by default), Gaslight asks the same public STUN servers for this network's internet address, so it can tell networks apart. Only a scrambled (hashed) form of it is kept, on your device, next to the name you used there.</li>
  </ul>

  <h2>Invitations and RSVPs</h2>
  <ul>
    <li>When you publish an invitation, it is encrypted on your device and stored on public Nostr relays (relay.damus.io, nos.lol, relay.primal.net, offchain.pub, or ones you choose in Settings). Only people with the invitation link can read it.</li>
    <li>Guests' replies (name, answer, date votes and an optional note) are encrypted the same way and can only be read with the invitation link.</li>
    <li>Address search on the invitation map uses OpenStreetMap (Nominatim), and the map pictures come from OpenStreetMap. They receive what you type and your internet address, under <a href="https://osmfoundation.org/wiki/Privacy_Policy" rel="noopener">their privacy policy</a>.</li>
  </ul>

  <h2>Reporting a problem</h2>
  <ul>
    <li>If you send a report from <b>Settings &gt; Report a problem</b>, your message, the reply email address if you give one, and basic device details (app version, device type, browser version, screen size) are emailed to us through FormSubmit (formsubmit.co). We use them only to answer you and fix the problem.</li>
  </ul>

  <h2>Children</h2>
  <p>Gaslight is a party game for adults and teenagers and is not directed at children under 13. We don't knowingly collect information from children.</p>

  <h2>Sharing and selling</h2>
  <p>We don't sell, rent or share personal information, and there is no advertising in Gaslight.</p>

  <h2>Changes and contact</h2>
  <p>If this policy changes, the new version will be posted on this page with a new date. Questions or requests: <a href="mailto:support@terrint.com">support@terrint.com</a>.</p>
</main>
</body>
</html>
`)?.[1]??``,[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{title:`Privacy`}),(0,a.jsx)(`div`,{className:`page privacy-doc`,dangerouslySetInnerHTML:{__html:e}})]})}export{o as Privacy};