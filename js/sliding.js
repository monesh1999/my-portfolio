const contentArea = document.getElementById('contentArea');
  const buttons = document.querySelectorAll('.buttons button');
  let currentPage = 1;

  function renderXContent(page) {
    const startIdx = (page - 1) * 4;
    const endIdx = startIdx + 4;

    const boxData = [
      { url: 'https://example.com/1', img: 'https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU', heading: 'Tic Tac Toe', text: 'Tic Tac Toe is a simple and fun two-player game that uses a 3x3 grid. Players take turns marking the squares with either an "X" or an "O". The objective is to be the first to get three of your marks in a row, either across, down, or diagonally. If all nine squares are filled and no player has achieved this, the game ends in a draw. Despite being an easy game, it helps players practice strategic thinking as they try to block their opponent while creating their own winning opportunities. It’s quick to play and can be enjoyed by anyone, anywhere!' },
      { url: 'https://example.com/2', img: 'image/todo.jpg', heading: 'Todo List App using HTML CSS & JavaScript', text: 'The Todo List App is a simple yet functional application designed for managing daily tasks. Built entirely with HTML, CSS, and JavaScript, it provides an intuitive interface where users can add, delete, and mark tasks as completed. The responsive design ensures usability across devices, and the dynamic interaction enables real-time updates without refreshing the page. This project showcases fundamental web development skills while emphasizing clean UI and efficient JavaScript logic for seamless task management.' },
      { url: 'https://github.com/monesh1999/Compare_Two_DNA', img: 'image/dna.jpg', heading: 'A Digital DNA Sequence Analysis to Find Matches with Integrated Hospital Management', text: 'This project focuses on DNA sequence analysis using the Smith-Waterman algorithm to identify similarities or matches within genetic data. Developed with Java, Spring Boot, and Spring Security, the system ensures robust and secure handling of sensitive genomic information. The integrated hospital management system bridges genetic insights with patient records, streamlining data-driven decision-making. A responsive frontend is built with HTML, CSS, and JavaScript, providing an intuitive interface for healthcare professionals to visualize and interpret genetic matches seamlessly. This solution promotes precision medicine and efficient healthcare data integration.' },
      { url: 'https://example.com/4', img: 'image/rps.jpg', heading: 'Rock Paper Scissors Game using HTML, CSS & JavaScript', text: 'The Rock Paper Scissors Game is a web-based implementation of the classic hand game, built with HTML, CSS, and JavaScript. The project features a clean and interactive user interface where players compete against the computer. Players make their choice, and the computer randomly selects its move, with the game logic determining the winner in real time. The responsive design ensures a smooth experience on any device. This project demonstrates the core principles of DOM manipulation, event handling, and conditional logic in JavaScript, making it a fun and educational example of dynamic web development.' },
      { url: 'https://example.com/5', img: 'image/up.jpg', heading: 'upcomming', text: 'This is box 5 content.' },
      { url: 'https://example.com/6', img: 'image/up.jpg', heading: 'upcomming', text: 'This is box 6 content.' },
      { url: 'https://example.com/7', img: 'image/up.jpg', heading: 'upcomming', text: 'This is box 7 content.' },
      { url: 'https://example.com/8', img: 'image/up.jpg', heading: 'upcomming', text: 'This is box 8 content.' }
    ];

    let gridHTML = '<div class="grid">';
    for (let i = startIdx; i < endIdx && i < boxData.length; i++) {
      const box = boxData[i];
      gridHTML += `
        <a href="${box.url}" target="_blank" class="box">
          <img src="${box.img}" alt="${box.heading}" />
          <h3>${box.heading}</h3>
          <p>${box.text}</p>
        </a>
      `;
    }
    gridHTML += '</div>';

    gridHTML += `
      <div class="pagination">
        ${page > 1 ? '<button onclick="prevPage()">Prev</button>' : ''}
        ${page < 2 ? '<button onclick="nextPage()">Next</button>' : ''}
      </div>
    `;
    contentArea.innerHTML = gridHTML;
  }

  function showContent(button) {
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + button).classList.add('active');

    contentArea.classList.add('hide');

    setTimeout(() => {
      if (button === 'x') {
        currentPage = 1;
        renderXContent(currentPage);
      } else if (button === 'y') {
        contentArea.innerHTML = ' <div class="container-e1"><div class="left"><h1>Education</h1><h2>B.Tech - Information Technology</h2><h3>Dr.MGR Educational and Research Institution</h3><p style="text-align:right">2017-2021</p><p> Chennai , TamilNadu </p></div><div class="right"><h1>Work Experience</h1><h2>Research Assistant</h2><h3>Dr.MGR Educational and Research Institution</h3> <p style="text-align:right">july /2021  - dec/2021</p><p> Chennai , TamilNadu </p></div></div>';
      } else if (button === 'z') {
        contentArea.innerHTML = '<div class="container-e1"><div class="left"><h1>A Digital DNA Sequence Analysis to Find Matches with Integrated Hospital Management</h1><a href="https://www.irjmets.com/uploadedfiles/paper/volume3/issue_6_june_2021/13444/1628083525.pdf" style="color: #fff; text-decoration: underline;"text-decoration: none ><p>publication Journal : International Research Journal Of Modernization In Engineering Technology And Science</p></a></div></div>';
      }
      contentArea.classList.remove('hide');
    }, 300);
  }

  function nextPage() {
    if (currentPage < 2) {
      currentPage++;
      renderXContent(currentPage);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      renderXContent(currentPage);
    }
  }

  window.onload = () => {
    showContent('x');
  };