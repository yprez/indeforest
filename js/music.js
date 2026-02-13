(() => {
  'use strict';

  const albums = [
    {
      id: 2597425112,
      artist: 'Sphirala',
      name: 'Center Of Consciousness',
      album: 'Suomispace Ba Mid Bar',
      url: 'https://zerarecords.bandcamp.com/album/suomispace-ba-mid-bar',
      tracks: [3529662332],
      trackNames: ['Center Of Consciousness'],
    },
    {
      id: 1539159364,
      artist: 'Hipless',
      name: 'Space Monkey',
      url: 'https://hiplessmusic.bandcamp.com/album/space-monkey',
      tracks: [3082202725, 2844321015, 4232498355, 3954690445, 584806052, 4176947237, 629201618],
      trackNames: [
        'Space Monkey',
        'Acid Blues (feat. Sphirala)',
        'Duck Bass',
        'htbt 4',
        'Space Monkey (Omo Santana Takes A Flight With Jimi)',
        'Space Monkey (Weltklang Lockdown Mix)',
        'Acid Blues (Omo Santana\'s Abbey Road Crossing)',
      ],
    },
    {
      id: 1517639175,
      artist: 'Hipless',
      name: 'Sisyfeet Remixes',
      url: 'https://hiplessmusic.bandcamp.com/album/sisyfeet-remixes',
      tracks: [2575806238, 2265996597, 2540874659],
      trackNames: [
        'Sisyfeet (Omo Santana\'s Birds And Bees Remix)',
        'Sisyfeet (Sophisticated Fantasies Remix)',
        'htbt (Omo Santana\'s Mysterious Flying Saucer Mix)',
      ],
    },
    {
      id: 1174723102,
      artist: 'Hipless',
      name: 'Sisyfeet EP',
      url: 'https://hiplessmusic.bandcamp.com/album/sisyfeet-ep',
      tracks: [1766946223, 1196291231, 806798327],
      trackNames: ['Sisyfeet', 'Schmeckt Gut', 'Htbt'],
    },
  ];

  const allTracks = albums.flatMap(function (album) {
    return album.tracks.map(function (trackId, i) {
      return {
        albumId: album.id,
        trackId: trackId,
        artist: album.artist,
        name: album.trackNames[i],
        albumUrl: album.url,
      };
    });
  });

  const iframe = document.getElementById('player-iframe');
  const prevBtn = document.querySelector('[data-action="player-prev"]');
  const nextBtn = document.querySelector('[data-action="player-next"]');
  const trackLabel = document.querySelector('.player-track-name');
  if (!iframe) return;

  const history = [];
  let pos = -1;

  function randomPick() {
    return allTracks[Math.floor(Math.random() * allTracks.length)];
  }

  function loadTrack(entry) {
    iframe.src =
      'https://bandcamp.com/EmbeddedPlayer/album=' + entry.albumId +
      '/size=small/bgcol=0d1f0d/linkcol=7cb87c/track=' + entry.trackId +
      '/transparent=false/autoplay=true/';
    if (trackLabel) {
      trackLabel.textContent = entry.artist + ' \u2014 ' + entry.name;
      trackLabel.href = entry.albumUrl;
    }
    clearPlayingMark();
    var li = document.querySelector('[data-track-id="' + entry.trackId + '"]');
    if (li) li.classList.add('is-playing');
  }

  function updateButtons() {
    if (prevBtn) prevBtn.disabled = pos <= 0;
  }

  function goNext() {
    if (pos < history.length - 1) {
      pos++;
    } else {
      history.push(randomPick());
      pos = history.length - 1;
    }
    loadTrack(history[pos]);
    updateButtons();
  }

  function goPrev() {
    if (pos > 0) {
      pos--;
      loadTrack(history[pos]);
      updateButtons();
    }
  }

  function clearPlayingMark() {
    var prev = document.querySelector('.tracklist li.is-playing');
    if (prev) prev.classList.remove('is-playing');
  }

  document.addEventListener('click', function (e) {
    var li = e.target.closest('.tracklist li');
    if (!li) return;

    var trackId = Number(li.getAttribute('data-track-id'));
    var entry = allTracks.find(function (t) { return t.trackId === trackId; });
    if (!entry) return;

    history.push(entry);
    pos = history.length - 1;
    loadTrack(entry);
    updateButtons();
  });

  // EQ bars
  var BAR_COUNT = 12;
  document.querySelectorAll('.eq-bars').forEach(function (container) {
    for (var i = 0; i < BAR_COUNT; i++) {
      var bar = document.createElement('span');
      bar.className = 'eq-bar';
      bar.style.animationDuration = (0.6 + Math.random() * 0.8) + 's';
      bar.style.animationDelay = (Math.random() * -1.4) + 's';
      container.appendChild(bar);
    }
  });

  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  if (nextBtn) nextBtn.addEventListener('click', goNext);

  goNext();
})();
