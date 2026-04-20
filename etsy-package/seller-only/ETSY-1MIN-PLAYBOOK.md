# Face Tracking Kids → Etsy 1-Minute Demo Playbook

**For Etsy listing videos (60-second cap, 9:16 portrait, autoplay-muted preview).**

A second-by-second script: **what to say** + **what to click / do** to produce a tight Etsy demo that converts. Keep this open on a second monitor or print A4.

---

## Etsy video specs (memorise once)

| Spec | Value |
|---|---|
| **Length** | Max 60 seconds (aim for 55 s to be safe) |
| **Aspect** | **9:16 portrait** — Etsy autoplays in the mobile feed |
| **Resolution** | 1080 × 1920 minimum |
| **Codec** | MP4 / H.264 + AAC audio |
| **File size** | Under 100 MB |
| **Audio** | Muted by default in feed → **captions or on-screen text are mandatory** |
| **Cover frame** | First frame becomes the thumbnail — make it visually loud |
| **Hook window** | First 3 seconds decide whether a scroller stops |

---

## Pre-flight checklist (90 seconds, do once per shoot)

Before you press Record:

- [ ] Chrome or Edge open with `index.html` loaded
- [ ] Webcam permission granted, **Start webcam** tested — mesh visible on your face
- [ ] **Mirror ON** (most natural for on-camera talent)
- [ ] **Demo ON** + **Start Speech** tested — one sample phrase heard
- [ ] A clear voice selected in the Voice dropdown (rate ~1.0, pitch ~1.05)
- [ ] (Optional) micro:bit V2 flashed with `makecode.ts` and paired — only if you film the BLE scene
- [ ] Good front lighting on the face — no backlight, no window behind you
- [ ] Phone in 9:16 on a tripod, clean background, facing the laptop screen
- [ ] Desk cleared — only the laptop (and micro:bit, if used) in frame
- [ ] Captions app running OR on-screen text plan ready
- [ ] Script read aloud once, timed under 55 seconds
- [ ] Phone silenced, kids / dogs warned

---

## The 60-second arc

```
 0–3 s   HOOK        "Watch an AI track my face in 60 seconds — no cloud."
 3–10 s  CONTEXT     Open index.html → Start webcam → mesh snaps on.
10–25 s  FACE DEMO   Smile / open mouth / wink / turn head — Speech names each.
25–38 s  MESH DEMO   Toggle Mesh / Contours / Points.
38–50 s  PAYOFF      Numerics panel — X, Y, yaw, pitch, smile live.
           OR (if filmed) BLE bridge — smile lights the micro:bit LEDs.
50–55 s  CTA         "Full kit, lifetime updates — link below."
55–60 s  END FRAME   Logo + handle frozen for the loop preview.
```

Etsy loops the video, so the **end frame should match the cover** — keeps viewers watching the loop.

---

## Script Template A — "See • Follow • Smile" (hero demo)

**Use case:** the main Etsy listing video. Shows the mesh, the detections, and the voice callouts in one take.

| Time | What to SAY | What to CLICK / DO |
|---|---|---|
| 0–3 s | *"Watch an AI track my face in 60 seconds — no cloud, no upload."* | Close-up of your face. Mesh snaps on. Title overlay: **See · Follow · Smile**. |
| 3–10 s | *"One HTML file in Chrome — no install, no login."* | Cut to screen: double-click `index.html` → click **📷 Start webcam** → allow camera. |
| 10–20 s | *"Smile. Open your mouth. Wink. Turn your head."* | Demo ON + Start Speech. Perform each gesture. Burn in labels: "Smile", "Open mouth", "Wink", "Head turn". |
| 20–30 s | *"Here is how the AI sees you — 468 points."* | Toggle **Mesh** → **Contours** → **Points**. Fast cuts. Counter overlay "~468 points". |
| 30–45 s | *"Every value is live — X, Y, yaw, pitch, smile, eyes."* | Cut to Numerics panel. Slight head turn. Yaw number flips. Slow-mo. |
| 45–55 s | *"Runs on your device. No cloud. No account."* | Text overlay: "100% local · Chrome / Edge · lifetime updates". |
| 55–60 s | *"Link below."* | Face-cam, smile, freeze on logo. |

---

## Script Template B — "Teacher Tuesday" (classroom angle)

**Use case:** targeting teachers of AI, computer vision, or STEM.

| Time | What to SAY | What to CLICK / DO |
|---|---|---|
| 0–3 s | *"Teachers — want to show AI on your students' faces?"* | Overhead: a laptop + the classroom poster in frame. |
| 3–10 s | *"One browser tab. The camera never leaves the laptop."* | Start webcam → mesh locks. Text overlay: "No uploads · No accounts". |
| 10–20 s | *"The mesh is the AI's view of a face. 468 landmarks, live."* | Toggle Mesh → Contours → Points. Emphasise the point count. |
| 20–32 s | *"Smile. Blink. Turn your head. The app calls them out."* | Demo ON + Speech. Act out each event. Captions follow. |
| 32–45 s | *"Site license for up to 30 teachers. Lifetime updates."* | Text overlay with the licensing tiers + shop name. |
| 45–55 s | *"45-minute AI lesson is included in the kit."* | Quick flash of the printed lesson plan page. |
| 55–60 s | *"Link below. Tag me when your class makes an AI smile back."* | Face-cam, smile, freeze on logo. |

---

## Script Template C — "Kid meets AI" (parent / home-school angle)

**Use case:** UGC / influencer feel — a young maker using the app.

| Time | What to SAY | What to CLICK / DO |
|---|---|---|
| 0–3 s | *"My kid taught a computer to see a smile."* | Close-up: a small hand clicking Start webcam. |
| 3–12 s | *"No install. No login. Just a browser."* | Cut to index.html opening. Mesh lands on the kid's face. |
| 12–25 s | *"Smile — it says smile. Wink — it says wink."* | Demo ON + Speech. Kid smiles / winks. Captions burn in the labels. |
| 25–35 s | *"Look — every dot the AI is tracking."* | Toggle to Points view. Kid pulls funny faces. Dots follow. |
| 35–45 s | *"Connect a micro:bit and a smile lights it up."* (optional) | BLE Connect → Start sending. Kid smiles → micro:bit LEDs show a heart. |
| 45–55 s | *"Nothing leaves the laptop. Offline after first load."* | Toggle Wi-Fi off. App still works. |
| 55–60 s | *"Full kit on Etsy. Link below."* | Kid smiling next to the laptop. Freeze. |

---

## During-recording tactics

- **One scene per phase.** Do not cut every 2 s — it feels frantic.
- **Switch scenes on words**, not mid-sentence.
- **Pause 1 second on the mesh snap-on** — visual emphasis for the hook.
- **Look at the camera lens**, not the screen, during all CTAs.
- **Smile for the final 3 seconds**. The loop frame matters.
- **Watch the clock** — if you pass 55 s, re-cut. Etsy compresses aggressively.

---

## Common mistakes to avoid

| ❌ Don't | ✅ Do |
|---|---|
| Start with "Hi, I'm…" + 10 s intro | First 3 s = the mesh snapping onto a face |
| Film landscape (16:9) | 9:16 portrait — Etsy autoplays on mobile |
| Demo on Safari / iPhone | Show Chrome / Edge only. iOS users will buy and refund |
| Skip captions | Burn in captions — the feed is muted by default |
| Backlight the face (silhouette) | Front light — a clean mesh reads as "real tech" |
| Whisper | Speak 15% louder and 10% slower than normal conversation |
| Forget the CTA | "Link below" in the last 5 s, every single time |
| End mid-sentence | Land your closing line. Then hold 2 seconds of silence |
| Cluttered desk | Clean area in frame — even a tiny frame shows clutter |

---

## After you press Stop

1. Watch the playback **once**, eyes off the script. Does it land?
2. If >60 s → trim with a simple editor (iMovie, CapCut, DaVinci). Aim for 55 s.
3. Burn in captions if you haven't already. Keep them centered below the subject.
4. First frame — set it to a strong, still visual (the face with the mesh on it, or the logo). This is your cover.
5. Export MP4 / H.264, under 100 MB.
6. Upload to the Etsy listing. Verify autoplay. Check on a phone with sound off.

---

## Etsy-specific upload tips

- Etsy listing videos appear at the top as an **autoplaying preview tile**. First frame is the cover — make it visually clean.
- Use the listing **title** to echo the video's first words. If you say *"Watch an AI track my face in 60 seconds"*, the listing title starts with *"Face Tracking Kids — Browser Face-AI Lab…"*.
- Add the captions text into the listing **description** — searchable, helps SEO.
- Tag the listing with words you actually said in the video.

---

## The 5-take rule

**Never publish your first take.** Plan to do 3–5:

1. **Take 1** — read the script literally. Find the awkward bits.
2. **Take 2** — fix the awkward bits. Less reading, more talking.
3. **Take 3** — drop the script. Talk to a friend, not to a camera.
4. **Take 4** — slow down 10 %. Add one deliberate pause.
5. **Take 5** — your keeper.

---

## Quick-reference cheat card

```
PRE     Chrome open · webcam live · mirror ON · 9:16 phone · good front light
LAUNCH  Record → first words land in the first 3 seconds
DURING  Smile/blink/turn → Demo+Speech calls them · Mesh→Contours→Points
AFTER   Stop → trim to 55 s → burn captions → first frame = thumbnail
UPLOAD  Etsy listing → upload MP4 → echo first words in listing title
```

---

## Listing-page copy snippets

**Title (140 chars max):**
```
Face Tracking Kids — Browser Face-AI Lab · Live Mesh · Smile & Blink Detection · Speech in 13 Langs · Optional micro:bit Bluetooth · Chrome / Edge
```

**160-char short description:**
```
Browser face-tracking app for kids 8–15. Live face mesh, smile & blink detection, 13 voice languages, optional Bluetooth to micro:bit V2. No cloud, no uploads.
```

**13 Etsy tags:**
```
face tracking, face mesh, computer vision, kids AI, education, STEM, kids coding, teacher resource, smile detection, classroom, home school, micro:bit, web bluetooth
```

**Materials:**
```
HTML5, CSS, JavaScript, MediaPipe, Web Speech API, Web Bluetooth, MakeCode
```

**SEO keywords:**
```
browser-based · no-install · privacy-first · on-device AI · face landmarks · teacher resource · STEM workshop · kid-first AI
```

**Price tiers:**

| Tier | Who | Price |
|---|---|---|
| Launch | Early-bird, first 50 buyers | `$14.99` |
| Standard | Single user | `$19.99` |
| Bundle | App + extended lesson pack | `$34.99` |
| Tripwire | Intro upsell after opt-in | `$5` |
| Site License | One school, up to 30 teachers | `$249` |
| District License | Multiple schools | `$599` |
| Promo `FACELAUNCH` | Launch code → tripwire | `$8` |

---

## 7-image listing order

1. **Hero** — laptop screenshot with a smiling face wearing the green mesh overlay. Title overlay in Orbitron.
2. **Three views** — Mesh · Contours · Points side-by-side, same face.
3. **Detection grid** — six frames (smile, open mouth, wink-L, wink-R, blink, head turn) with captions.
4. **Numerics close-up** — the live X/Y/yaw/pitch/smile panel in green.
5. **BLE bridge** — laptop mesh → Bluetooth icon → micro:bit LEDs showing a heart.
6. **Classroom shot** — a row of laptops, each with a different expression.
7. **License card** — "Single-user license · Lifetime updates · No cloud · Chrome / Edge" on a dark gradient.

---

*Made for Face Tracking Kids v1.0.0 — print this on A4, laminate, keep next to the shoot rig.*
