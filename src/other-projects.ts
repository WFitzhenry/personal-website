import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <nav class="nav">
    <ul class="nav-list">
      <li><a href="/index.html" class="nav-link">About</a></li>
      <li><a href="/index.html#cv" class="nav-link">CV</a></li>
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
    <h1>Other Projects</h1>
    <div class="projects-grid">
      <div class="project-card">
        <h2>Other Project 1</h2>
        <p>Description of other project 1</p>
      </div>
      <div class="project-card">
        <h2>Other Project 2</h2>
        <p>Description of other project 2</p>
      </div>
    </div>
  </main>
`;