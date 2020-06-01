var gProjs = createProjects()

function getProjects() {
  return gProjs
}

function getProjectById(projId) {
  return gProjs.find((project) => project.id === projId)
}

function createProjects() {
  var projects = []
  projects.push(
    createProject(
      'Book-shop',
      'book-shop',
      'Store your books',
      'An internet library',
      'https://shai95670.github.io/book-shop/',
    ),
  )
  projects.push(
    createProject(
      'Minesweeper',
      'Minesweeper',
      'A better minesweeper',
      'Luck game',
      'https://shai95670.github.io/Minesweeper/',
    ),
  )
  projects.push(
    createProject(
      'Touch-nums',
      'touch-nums',
      'Touch a number',
      'bhased on speed',
      'https://shai95670.github.io/touch-nums/',
    ),
  )
  projects.push(
    createProject(
      'Tetris',
      'Tetris',
      'A mind game',
      'Play Tetris',
      'https://shai95670.github.io/Tetris_Game/',
    ),
  )
  projects.push(
    createProject(
      'Breakout game',
      'Breakout game',
      'Bash the blocks with the ball and base',
      'Bash the blocks with the ball and base',
      'https://shai95670.github.io/breakout-game/',
    ),
  )
  return projects
}

function createProject(id, name, title, desc, url) {
  var project = null
  project = {
    id,
    name,
    title,
    desc,
    url,
    publishedAt: '01-06-2020',
    lables: ['js', 'html', 'css'],
  }
  return project
}
