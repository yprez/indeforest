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
    {
      id: 2727484909,
      artist: 'Fuzzonaut',
      name: 'Cow Speed Breaker',
      url: 'https://zerarecords.bandcamp.com/album/cow-speed-breaker',
      tracks: [392460041, 747375178, 741403587],
      trackNames: ['Come Out of the Air', 'Samatuja', 'Vaping Charas'],
    },
    {
      id: 2597425112,
      artist: 'Fuzzonaut',
      name: 'Nomnomnomnom',
      album: 'Suomispace Ba Mid Bar',
      url: 'https://zerarecords.bandcamp.com/album/suomispace-ba-mid-bar',
      tracks: [2796184810],
      trackNames: ['Nomnomnomnom'],
    },
    {
      id: 1894039887,
      artist: 'Fuzzonaut',
      name: 'Shunyavada',
      url: 'https://fuzzonaut.bandcamp.com/album/shunyavada',
      tracks: [3538854178, 57064462, 4237341473, 3518428263, 3492773477, 2078176, 2203142298, 4191734092, 185524790],
      trackNames: [
        'Kicknsnr',
        'Swirly Swirl',
        'Acid is in the Air',
        'Kill the DOG',
        'That Which Knows This',
        'Maa Ka Lauda',
        'Recklessly',
        'Whola Lotta Weird Shit',
        'A Not Yet Begining to Be a Not Yet Begining to Be a Nonbeing',
      ],
    },
    {
      id: 1895869885,
      artist: 'Fuzzonaut',
      name: 'Swirly Rythmic Stuff',
      url: 'https://fuzzonaut.bandcamp.com/album/swirly-rythmic-stuff',
      tracks: [1785326566, 223753740, 2903229507, 3398627354, 3478068321, 3121924578, 528732094, 3626337524, 2043085121],
      trackNames: [
        'Space Groove',
        'Phasing Bass',
        'Words',
        'Chapachula',
        'Ok, No Problem',
        'Scratching the Head',
        'My Own Distortion',
        'Fucked Up Kitchy Thing',
        'Burned Out',
      ],
    },
    {
      id: 86511541,
      artist: 'Fuzzonaut',
      name: 'Jokers and the Weird Space Equipment',
      url: 'https://fuzzonaut.bandcamp.com/album/jokers-and-the-weird-space-equipment',
      tracks: [4110468628, 3432543459, 3596352708, 1052914951, 4066090784, 3088123312, 720691166, 889836794, 4146501787, 3432105752, 1881613355, 2866988089],
      trackNames: [
        'Hello',
        'Rust in Peace',
        'Psychedelic Attack Part1',
        'State of Mind',
        'the Message',
        '9',
        'Moongaze',
        'Astro-Domine',
        'Psychedelic Attack Part2',
        'Schizophrenic Computer',
        'Spaceman Tree',
        'Zaps',
      ],
    },
    {
      id: 3570212573,
      artist: 'Sphirala',
      name: 'Water Ways',
      album: 'Goa Meditation vol. 2',
      url: 'https://timewarprecords.bandcamp.com/album/goa-meditation-vol-2-compiled-by-sky-technology-timewarp082-timewarp',
      tracks: [887951993],
      trackNames: ['Water Ways'],
    },
    {
      id: null,
      artist: 'Consept Lightwork',
      name: '3rd Dimension Capabilities',
      url: 'https://conseptlightwork.bandcamp.com/track/3rd-dimension-capabilities',
      tracks: [563147147],
      trackNames: ['3rd Dimension Capabilities'],
    },
    {
      id: 2588559555,
      artist: 'Consept Lightwork',
      name: 'Moments Of Magic',
      url: 'https://timewarprecords.bandcamp.com/album/consept-lightwork-moments-of-magic-timewarp083-timewarp',
      tracks: [1704276706, 3830354528, 261501608, 2568555118, 4020795603, 1498499009, 4036666809, 974781872, 3103678043],
      trackNames: [
        'Aliens Interference',
        'Normal Light Motion',
        'Tempering Sound Waves',
        'UFO Contact',
        'Magic Frequency',
        'The Forgotten Message',
        'Out Of Perspective',
        'Dream State',
        'Moments of Magic',
      ],
    },
    {
      id: 4198611513,
      artist: 'Stoner Kebab',
      name: 'SIMON',
      url: 'https://stonerkebab.bandcamp.com/album/simon-2013',
      tracks: [4226892860, 1796888590],
      trackNames: ['St. Lucy', 'The Monster'],
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
    var src = 'https://bandcamp.com/EmbeddedPlayer/';
    if (entry.albumId) {
      src += 'album=' + entry.albumId + '/';
    }
    src += 'size=small/bgcol=0d1f0d/linkcol=7cb87c/track=' + entry.trackId +
      '/transparent=false/autoplay=true/';
    iframe.src = src;
    if (trackLabel) {
      trackLabel.textContent = entry.artist + ' \u2014 ' + entry.name;
      trackLabel.href = entry.albumUrl;
    }
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
