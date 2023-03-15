setTimeout(() => {
  console.clear();

  /* TODO: make this a button
  scrollToBottomOfPlaylist();
  */

  // ad new release button
  addNewReleasesLink();

  /* highlighting of current playlist in sidebar */
  const playlistItemElems = document.querySelectorAll("#main > div > div.Root__top-container > nav > div.tUwyjggD2n5KvEtP5z1B > div.LKgm9fCDTO7wqig_5U1q > div > div.UCEIwrWMxnBFH4uoPybJ > div > div.os-padding > div > div > ul > div > div:nth-child(2) > div");
  // Add click event listener to each div element
  playlistItemElems.forEach(item => {
    item.addEventListener('click', handleListItemClick);
  });

}, 2000);

function handleListItemClick() {
  const playlistItemElems = document.querySelectorAll("#main > div > div.Root__top-container > nav > div.tUwyjggD2n5KvEtP5z1B > div.LKgm9fCDTO7wqig_5U1q > div > div.UCEIwrWMxnBFH4uoPybJ > div > div.os-padding > div > div > ul > div > div:nth-child(2) > div");

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

function getLastTrackOfPlaylist () {
  const tracks = document.querySelectorAll("div.contentSpacing > div.ShMHCGsT93epRGdxJp2w.Ss6hr6HYpN4wjHJ9GHmi > div.JUa6JJNj7R_Y3i4P8YUX > div:nth-child(2) > div[aria-rowindex]");
  console.log(tracks);
  const lastTrack = tracks[tracks.length - 1];
  const rowCount = lastTrack.getAttribute("aria-rowcount");
  console.log(rowCount);

  for(let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const rowIndex = track.getAttribute("aria-rowindex");

    if(rowIndex === rowCount) {
      // This is the last track element
      return track;
    }
  }
}

function scrollToBottomOfPlaylist () {
  const scrollable = document.querySelector('.main-view-container__scroll-node-child');
  scrollable.scrollTop = scrollable.scrollHeight;
  scrollable.scrollIntoView(false);
}

function addNewReleasesLink () {
  // get your Library element
  const navList = document.querySelector("#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > nav > div.tUwyjggD2n5KvEtP5z1B > ul");
  // generate new Releases element
  // Build the swap button with the SVG and the URL
  const newReleaseElement = Object.assign(document.createElement('li'), {
    className: 'eNs6P3JYpf2LScgTDHc6',
    innerHTML: `
                  <div class="GlueDropTarget GlueDropTarget--tracks GlueDropTarget--albums GlueDropTarget--artists GlueDropTarget--playlists GlueDropTarget--playlists GlueDropTarget--shows b2KVTiBUcXV1kT0OjL2p">
                    <a draggable="false" class="link-subtle ATUzFKub89lzvkmvhpyE" href="https://spotifyreleaselist.netlify.app/">
                      <svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw" viewBox="0 0 1024 1024" data-encore-id="icon">
                        <path d="M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"/>
                        <path d="M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"/>
                        <path d="M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"/>
                      </svg>
                      <span class="Type__TypeElement-sc-goli3j-0 jdSGNV ellipsis-one-line" data-encore-id="type">
                        New Releases
                      </span>
                    </a>
                  </div>    `
  });
  // insert after
  // Inject the button right before the account button
  navList.insertAdjacentElement('beforeend' ,newReleaseElement);
}

function getColorOfPlaylist () {
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
}