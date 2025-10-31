import './styles.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

// Helper function to set active menu
function setActiveMenu(targetId: string) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(
    `.nav-link[data-target="${targetId}"]`
  );
  activeLink?.classList.add('active');
}

app.innerHTML = `
  <nav class="nav">
    <ul class="nav-list">
      <li><a href="#projects" class="nav-link active" data-target="projects">Projects</a></li>
      <li><a href="#about" class="nav-link" data-target="about">About</a></li>
      <li><a href="#cv" class="nav-link" data-target="cv">CV</a></li>
    </ul>
  </nav>

  <main class="content">
    <section id="projects" class="section">
      <h1>Data Visualisation</h1>
      <ul class="project-list">
        <li><a href="#">Project One</a></li>
        <li><a href="#">Project Two</a></li>
        <li><a href="#">Project Three</a></li>
      </ul>
      <h1></h1>
      <ul class="project-list">
        <li><a href="#">Project One</a></li>
        <li><a href="#">Project Two</a></li>
        <li><a href="#">Project Three</a></li>
      </ul>
    </section>
    <section id="about" class="section">
      <h1>About</h1>
      <p>Welcome to my personal website!</p>
    </section>
    <section id="cv" class="section">
      <h1>CV</h1>
      <p>My professional experience and education</p>
    </section>
  </main>
`;

// Navigation click handling
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = (link as HTMLAnchorElement).dataset.target!;
    setActiveMenu(targetId);
    document.querySelectorAll('.section').forEach((section) => {
      (section as HTMLElement).style.display =
        section.id === targetId ? 'block' : 'none';
    });
  });
});

// Initialize to show Projects page
document.querySelectorAll('.section').forEach((section) => {
  (section as HTMLElement).style.display =
    section.id === 'projects' ? 'block' : 'none';
});
