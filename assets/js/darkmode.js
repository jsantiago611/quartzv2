const userPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const currentTheme = localStorage.getItem('theme') ?? userPref

if (currentTheme) {
  document.documentElement.setAttribute('saved-theme', currentTheme);
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('saved-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }
  else {
    document.documentElement.setAttribute('saved-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Darkmode toggle
  const toggleSwitch = document.querySelector('#darkmode-toggle')

  // listen for toggle
  toggleSwitch.addEventListener('change', switchTheme, false)

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    
    //-----------------------------------------------------------------------------
function setFlickerAnimation() {
  // get all elements that should be animated
  const animatedElements = Array.from(
    document.querySelectorAll(".flicker")
  );

  if (!animatedElements.length) {
    return false;
  }

  // helper function to wrap random letters in <span>
  const wrapRandomChars = (str, iterations = 1) => {
    const chars = str.split("");
    const excludedChars = [" ", "-", ",", ";", ":", "(", ")"];
    const excludedIndexes = [];
    let i = 0;

    // run for the number of letters we want to wrap
    while (i < iterations) {
      const randIndex = Math.floor(Math.random() * chars.length);
      const c = chars[randIndex];

      // make sure we don't wrap a space or punctuation char
      // or hit the same letter twice
      if (!excludedIndexes.includes(randIndex) && !excludedChars.includes(c)) {
        chars[randIndex] = `<span class="flicker">${c}</span>`;
        excludedIndexes.push(randIndex);
        i++;
      }
    }

    return chars.join("");
  };

  // replace the plain text content in each element
  animatedElements.forEach((el) => {
    const text = el.textContent.trim();
    const count = el.dataset.flickerChars ? parseInt(el.dataset.flickerChars) : undefined
    el.innerHTML = wrapRandomChars(text, count);
  });
}
    //function code done
  }
})


