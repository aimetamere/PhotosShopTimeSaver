# Photoshop Instagram Carousel Splitter

This project automates the creation of **seamless Instagram carousel posts** using Photoshop scripting.  
It slices an image into 1080×1350px frames (Instagram’s portrait format) and ensures the second frame aligns perfectly with the first, so when swiped, the carousel flows smoothly without visible jumps.

---

## ✨ Features
- Automatically slices a large image into Instagram-ready frames.  
- Maintains **alignment across X and Y axes** for a seamless swipe experience.  
- Works directly inside **Adobe Photoshop 2025** via ExtendScript (`.jsx`).  
- Includes a **Python wrapper** to trigger the Photoshop script from the terminal.

---

## 📂 Project Structure
├── align_carousel.jsx # Photoshop script (ExtendScript)
├── run_photoshop.py # Python script to run the JSX in Photoshop
└── README.md # Project documentation

---

## 🚀 Usage

### 1. Open your image in Photoshop
- Make sure your source image is active in Photoshop before running the script.  
- The script will assume the first **1080×1350 frame** is already framed on the left.  

### 2. Run the Python script
From the project folder in terminal:



## 🎥 Demo
[Watch the demo video](demo.mp4)

---

```bash

## TODO

update it with front end to visualise before end 
python3 run_photoshop.py
