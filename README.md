# 🌻 Flores Amarillas

A small interactive web experience created to turn a simple idea into a personalized digital surprise.

The project starts with a short welcome screen and a button that leads to the main experience: a page filled with falling yellow flowers, a personal message, and background music. 💛

It was built as a simple frontend project focused on animations, DOM manipulation, audio, styling, and creating an interactive experience with vanilla web technologies.

## ✨ What it does

* Displays an initial surprise screen.
* Navigates to a dedicated flower experience.
* Generates flowers dynamically with JavaScript.
* Uses multiple flower images selected randomly.
* Randomizes flower positions and sizes.
* Gives each flower a different falling animation duration.
* Removes flowers from the DOM after their animation finishes.
* Plays background music in a loop.
* Includes a responsive viewport configuration for different screen sizes.
* Uses custom CSS styling and animations.

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* CSS Animations
* HTML5 Audio
* Responsive Web Design

## 📁 Project Structure

```text
FloresAmarillas/
├── img/
│   ├── flor1.webp
│   ├── flor2.png
│   ├── flor3.png
│   └── flor4.png
├── music/
│   └── cancion.weba
├── flowers.html
├── index.html
├── script.js
└── styles.css
```

## 🌼 How the experience works

The first page presents a simple message and a button to reveal the surprise.

Once `flowers.html` is opened, JavaScript starts generating flowers dynamically inside the page.

Each flower:

1. Is selected randomly from the available flower images.
2. Receives a random horizontal position.
3. Receives a random size between 30px and 60px.
4. Receives a random animation duration.
5. Is added to the page.
6. Is removed after completing its animation.

The page also contains an HTML5 audio element configured to autoplay and loop the included music.

## 🚀 Live Demo

The project is deployed and available online:

**Live Demo:** https://flores-michael.netlify.app/

## 💻 Run Locally

No backend or package installation is required.

Clone the repository:

```bash
git clone https://github.com/MichaelAcostaDev/FloresAmarillas.git
```

Then open `index.html` in a browser or serve the project using any local static web server.

## 🎯 Purpose

This project was created as a personal and creative frontend experiment.

Not every project needs to be a large application. Sometimes a small idea is enough to practice web development, experiment with animations, and create something meaningful.

## 👨‍💻 Author

**Michael Acosta**

LinkedIn:
https://www.linkedin.com/in/michael-acosta-dev/

⭐ If you like the project, consider giving the repository a star and following me on GitHub.

⭐ You can also follow me on LinkedIn for more projects and development updates.

---

Made with HTML, CSS, JavaScript, and a few yellow flowers. 🌻
