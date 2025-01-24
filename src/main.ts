import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <nav class="nav">
    <ul class="nav-list">
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#cv" class="nav-link">CV</a></li>
      <li class="dropdown">
        <a href="#" class="nav-link">Projects</a>
        <ul class="dropdown-content">
          <li><a href="/src/pages/web-projects.html">Web Development</a></li>
          <li><a href="/src/pages/mobile-projects.html">Mobile Apps</a></li>
          <li><a href="/src/pages/ml-projects.html">Machine Learning</a></li>
          <li><a href="/src/pages/other-projects.html">Other Projects</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <main class="content">
    <section id="about">
      <h1>About</h1>
      <p>Welcome to my personal website!</p>
    </section>
    <section id="cv">
      <h1>CV</h1>
      <p>My professional experience and education</p>
    </section>
  </main>
`;