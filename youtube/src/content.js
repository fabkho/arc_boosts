setTimeout(() => {
    console.clear();

    addNewSpotifyLink();


}, 2000);

function addNewSpotifyLink () {
    var targetNode = document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer");

    // clean-up string
    const title = targetNode.innerText.replace(/\s*\(.*/, "").replace(/[\s-]+/g, "%20");

    const spotifyLink = 'https://open.spotify.com/search/' + title;

    // get your Library element
    const buttons = document.querySelector("#actions-inner > #menu > ytd-menu-renderer > #top-level-buttons-computed");

    // Build the new Button
    const spotifyButton = Object.assign(document.createElement('div'), {
        className: 'spotifyLink',
        innerHTML: `
                  <a href="${spotifyLink}" class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m" aria-label="Spotify">
                    <div class="yt-spec-button-shape-next__icon" aria-hidden="true">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                            <circle cx="12" cy="12" r="10" opacity=".35"/>
                            <path d="M15.874,16.958c-0.146,0-0.292-0.073-0.439-0.146c-1.389-0.803-3.069-1.242-4.896-1.242c-1.024,0-2.047,0.146-2.997,0.365 c-0.146,0-0.365,0.073-0.438,0.073c-0.365,0-0.584-0.293-0.584-0.585c0-0.365,0.219-0.585,0.511-0.657 c1.169-0.293,2.338-0.439,3.581-0.439c2.047,0,3.946,0.51,5.554,1.462c0.219,0.146,0.365,0.292,0.365,0.657 C16.458,16.739,16.166,16.958,15.874,16.958z M16.897,14.472c-0.219,0-0.365-0.072-0.511-0.146c-1.534-0.95-3.654-1.535-6.065-1.535 c-1.17,0-2.266,0.146-3.069,0.366c-0.22,0.072-0.293,0.072-0.438,0.072c-0.438,0-0.731-0.365-0.731-0.731 c0-0.439,0.22-0.658,0.584-0.804c1.096-0.292,2.193-0.512,3.727-0.512c2.485,0,4.896,0.585,6.796,1.753 c0.292,0.146,0.438,0.439,0.438,0.731C17.628,14.108,17.335,14.472,16.897,14.472z M18.066,11.55c-0.219,0-0.292-0.073-0.511-0.146 c-1.754-1.023-4.385-1.609-6.943-1.609c-1.316,0-2.631,0.146-3.8,0.439c-0.147,0-0.293,0.073-0.511,0.073 C5.79,10.381,5.424,9.943,5.424,9.431c0-0.512,0.293-0.804,0.657-0.877c1.389-0.439,2.85-0.585,4.531-0.585 c2.777,0,5.7,0.585,7.893,1.827c0.292,0.146,0.511,0.439,0.511,0.877C18.944,11.184,18.577,11.55,18.066,11.55z"/>
                          </svg>
                    </div>
                  </a>           
                `
    });

    // set margin
    spotifyButton.style.marginRight = '8px';

    // insert after
    // Inject the button right before the like Button
    buttons.insertAdjacentElement('afterbegin' ,spotifyButton);
}


