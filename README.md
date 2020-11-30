# tailwind-bug-reproduction
Reproducing tailwind bug - Tailwind build is purging all dark mode classes

### The Bug
Tailwind build is purging all dark mode classes

### OS
```Edition	Windows 10 Home Single Language
Version	20H2
Installed on	‎02-‎10-‎2020
OS build	19042.630
Experience	Windows Feature Experience Pack 120.2212.31.0

PS D:\work> node -v
v12.19.0
PS D:\work> npm -v
6.14.8
```


### Command used
`npx tailwindcss-cli@latest build -c .\tailwind.config.js -o ./build-tailwind.css`
(Added in script.bat)

### Steps to reproduce
- Clone this repo using command:

  `git clone https://github.com/shivamsn97/tailwind-bug-reproduction`
- Verify files:
  - html/index.html contains a minimum html example which uses dark varients of classes.
  - tailwind.config.js is a valid js and has purge option set to true on all html files.
  - script.bat is a batch file containing the command `npx tailwindcss-cli@latest build -c .\tailwind.config.js -o ./build-tailwind.css`
 
- Try it out:
  - Run script.bat and wait until css is built.
  - Open build-tailwind.css in a text editor (preferally notepad++), and search for any classes of dark mode. There will be no such classes.
