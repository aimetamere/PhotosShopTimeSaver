import subprocess
import os

def run_jsx(jsx_path):
    # Full path to your Photoshop 2025 app
    photoshop_app = "/Applications/Adobe Photoshop 2025/Adobe Photoshop 2025.app"

    # AppleScript command to run JSX inside Photoshop
    command = f'''
    osascript -e 'tell application "{photoshop_app}" to do javascript file "{jsx_path}"'
    '''

    subprocess.run(command, shell=True)

if __name__ == "__main__":
    jsx_file = os.path.abspath("align_carousel.jsx")  # make sure this file exists
    run_jsx(jsx_file)
