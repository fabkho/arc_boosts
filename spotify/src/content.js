/* TODO: 
 *     - auto scroll playlist to bottom
 *
*/



/* focus current playlist in sidebar */
setTimeout(() => {

  /* Check if playlist bg color changes */
  /*
  const playlistContainer = document.querySelector('.gHImFiUWOg93pvTefeAD');
  const root = document.documentElement;

  function updatePlaylistFade() {
    const computedColor = window.getComputedStyle(playlistContainer).getPropertyValue('background-color');
    console.clear();
    console.log(computedColor);
    root.style.setProperty('--playlist-color', computedColor);
  }

  // Call the function on page load and whenever the div changes
  updatePlaylistFade();
  playlistContainer.addEventListener('DOMSubtreeModified', updatePlaylistFade);
   */


  /* highlighting of current playlist in sidebar */
  const playlistItemElems = document.querySelectorAll("#main > div > div.Root__top-container > nav > div.tUwyjggD2n5KvEtP5z1B > div.LKgm9fCDTO7wqig_5U1q > div > div.UCEIwrWMxnBFH4uoPybJ > div > div.os-padding > div > div > ul > div > div:nth-child(2) > div");
  function handleListItemClick() {
    // Remove the 'selected-item' class from all div elements
    playlistItemElems.forEach(item => {
      item.classList.remove('selected-playlist');
    });

    console.log(playlistItemElems);

    // Add the 'selected-item' class to the clicked div element
    this.classList.add('selected-playlist');

    const playlistId = this.getAttribute('data-playlist-id');
    console.log(playlistId);
  }

  // Add click event listener to each div element
  playlistItemElems.forEach(item => {
    item.addEventListener('click', handleListItemClick);
  });
}, 2000);





document.querySelectorAll('#main > div > div.Root__top-container > nav > div.tUwyjggD2n5KvEtP5z1B > div.LKgm9fCDTO7wqig_5U1q > div > div.UCEIwrWMxnBFH4uoPybJ > div > div.os-padding > div > div > ul > div > div:nth-child(2) > div');