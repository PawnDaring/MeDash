/* ════════════════════════════════════════════════════════
   REGION DATA — 6 body parts, 3 sub-scenes each
   Each sub-scene has 3 cards: stat, chart, or map
   ════════════════════════════════════════════════════════ */
   const REGIONS = [
    {
      id: 'Mindstream', icon: '<img src="assets/icons/brain.png" alt="brain">', label: 'Mindstream', side: 'right',
      subtitle: 'Neural & cognitive analysis',
      scenes: [
        /* ── Scene 1: What has been on my mind ── */
        { label: '1',
          header: 'What\'s been on My Mind',
          cards: [
          { type:'chart', title:'Focus Distribution', chartType:'doughnut',
            labels:['Projects','Socializing','Contemplative What-ifs','Rabbit Holes','Rest'],
            data:[45,10,20,15,10], colors:['#c94e44','#b5736b','#5b8a8a','#c1ab85','#8be5a7'], centerIcon:'assets/icons/brain.png' },
          { type:'rotating-model', title:'Mental Activity', model:'assets/models/brain.glb' },
          { type:'brain-wave', title:'Brain Wave Activity',
            sleepStart: 0, sleepEnd:24, days: ['Tue','Wed','Thu','Fri','Sat','Sun','Mon'],
            waveColors: ['#c94e44','#b5736b','#5b8a8a','#c1ab85','#8b5e5a','#8be5a7','#3e6868'],
            /* waveChaos: 0 = nearly flat, 1 = full jitter (same order as days) */
            waveChaos: [0.50, 0.9, 1, 0.7, 0.0, 0.50, 0.50, ] },
          { type:'stat', title:'Manual Activity Index', bigVal:'5', bigUnit:'%', bigLabel:'Optimal Balance zone',
            pills:[{v:'Work',l:'40%'},{v:'Play',l:'25%'},{v:'Rest',l:'35%'}] },

        ]},
        /* ── Scene 2: Live feed — brain waves, week capture, wake/sleep ── */
        { label: '2',
          header: 'Quality of Rest',
          cards: [
          { type:'image', title:'Quality Relaxation', src:'assets/images/Sleep.png' },
          { type:'stat', title:'Weekend Review', bigVal:'Well Rested', bigUnit:'', bigLabel:'Relaxation and Turkey Legs',
            pills:[{v:'15%',l:'Events'},{v:'15%',l:'Responsabilities'},{v:'70%',l:'Nothing'}] },
          { type:'image', title:'Eating Turkey Leg', src:'' },
          { type:'chart', title:'❤️ Emotional Battery', chartType:'doughnut',
            labels:['❤️ Charged','Empty'],
            data:[80,20], colors:['#c1ab85','#221a18'], centerIcon:'assets/icons/heart-rate.png' }        
        ]},
        { label: '3',
          header: 'Mood Stablizers',
          cards: [
          { type:'stat', title:'Companion Presence Factor', bigVal:'+60', bigUnit:'%', bigLabel:'Rumble & Maggie stabilization effect',
            pills:[{v:'🐕 Rumble',l:'Active'},{v:'🐕 Maggie',l:'Active'}] },
          { type:'spotify-list', title:'Mood Regulator Playlist', items:[
            { name:'MOTHERFOLK', desc:'Indie alternative with warm, folk-tinged textures and introspective lyricism.', url:'https://open.spotify.com/artist/70fUpxdAr6t0LJw3xJmMhm?si=gltWtyr6QciM8vggvmOH1Q' },
            { name:'Joywave', desc:'Indie electronic / alternative pop with quirky, satirical edge.', url:'https://open.spotify.com/artist/1UfzhwcOR4yfX7yHTPfC9m?si=TsnXbgH9S0mxV1dSD7FYiQ' },
            { name:'Nothing But Thieves', desc:'Alternative rock with cinematic scale and falsetto-driven intensity.', url:'https://open.spotify.com/artist/1kDGbuxWknIKx4FlgWxiSp?si=ltJmTC6fSoO7jlwvhnDWWA' },
          ]},
          { type:'stat', title:'Spirit Stability Index', bigVal:'Strong', bigUnit:'', bigLabel:'Inner momentum: stable, no major dips',
            pills:[{v:'Stable',l:'Morale'},{v:'1/365',l:'Crashes'}] }  
        ]},
      ]
    },
    {
      id: 'Cognitive Load', icon: '<img src="assets/icons/heart-rate.png">', label: 'COGNATIVE LOAD', side: 'left',
      subtitle: 'What has been weighing me down?',
      scenes: [
        /* ── Scene 1: Emotional & Physical Load ── */
        { label: '1',
          header: 'The Load',
          commentary: 'The Last 5 Months',
          cards: [
          { type:'chart', title:'Engagement Distribution', chartType:'doughnut',
            labels:['Engaged', 'Transitional', 'Disengaged'],
            data:[40,25,35], colors:['#c94e44','#5b8a8a','#8be5a7'], centerIcon:'assets/icons/palm.png' },
          { type:'chart', title:'Daily engagement', chartType:'engagement-day',
            labels:['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p'],
            data:[20, 30, 50, 80, 60, 80, 70, 50, 40, 50, 20, 15, 10, 8, 8, 5, 2] },
          { type:'chart', title:'Emotional Load Index', chartType:'line',
          labels:['N','D','J','F','M','A'],
          data:[10,11,15,20,30,25], color:'#c94e44', fill:true },
          { type:'image', title:'Pursuits Animation TO be Added', src:'' },
        ]},
        /* ── Scene 2: Strength & Climbing ── */
        { label: '2',
          header: 'Recalibration',
          commentary: 'Shoulders improving from handstand practice.',
          cards: [
          { type:'chart', title:'Handstand Progression', chartType:'line',
            labels:['Dec','Jan','Feb','Mar'],
            data:[5,7,10,25], color:'#5b8a8a', fill:true },
          { type:'chart', title:'Tension Thresholds', chartType:'doughnut',
            labels:['Emotional Load','Physical Strain','Responsibilities','Recovery'],
            data:[40,20,30,10], colors:['#c94e44','#b5736b','#c1ab85','#3e6868'],centerIcon:'assets/icons/backpack.png'},
          { type:'stat', title:'Climbing Plateau', bigVal:'V3', bigUnit:'', bigLabel:'Current benchmark barrier',
            pills:[{v:'Strength > Technique',l:'Diagnosis'}] },
          { type:'image', title:'If life flips, flip back.', src:'assets/images/Handstand.png' },
        ]},
        /* ── Scene 3: Gear & Personality Metrics ── */
        { label: '3',
          header: 'Neuroplasticity',
          commentary: 'Emotional Baggage: Managed',
          cards: [
          { type:'stat', title:'Lexical Dexterity Score', bigVal:'1443', bigUnit:'', bigLabel:'Words Played',
            pills:[{v:'Daily',l:'Play Frequency'},{v:'67/30',l:'Win Rate'}],
            scrabble:{word:'TRAIKING', points:166, label:'TOP WORD SCORE'},
            linkUrl:'https://nytimes.onelink.me/B892/ygttfega', linkImg:'assets/icons/word-play-invite.svg',
            linkLabel:'Invite to play — NYT Games', linkAlt:'Play me on NYT Games', linkCaption:'Play me' },
          { type:'baggage-stat', title:'Puzzle pick',
            pills:[{v:'Logic',l:'Genre'},{v:'∞ grid',l:'Scale'}],
            bigVal:'Infinite Minesweeper', bigLabel:'Endless board, classic rules — a sharp logic fix',
            linkUrl:'https://play.google.com/store/apps/details?id=com.grykuby.minesweeper&pcampaignid=web_share', linkIcon:'💣', linkLabel:'Play Infinite Minesweeper',
            sideIcon:'assets/icons/mine.svg', sideAlt:'Mine' },
        ]}
      ]
    },
    {
      id: 'My Vectors', icon: '<img src="assets/icons/route.png" alt="feet">', label: 'My Vectors', side: 'right',
      subtitle: 'Trajectory, grounding & navigation',
      scenes: [
        /* ── Scene 1: Trajectory & Movement ── */
        { label: '1',
          header: 'Goal Progression',
          commentary: 'A track record, you might not Git it...',
          cards: [

          { type:'stat', title:'Prototype Survival Rate', bigVal:'25', bigUnit:'%', bigLabel:'Projects that evolve into something bigger',
            pills:[{v:'1/4',l:'Survived'},{v:'RIP',l:'The Rest'}] },
          { type:'chart', title:'Output Type Distribution', chartType:'doughnut',
            labels:['Web Apps','Games','Tools','Misc'],
            data:[40,15,25,20], colors:['#c94e44','#5b8a8a','#b5736b','#8b5e5a'], centerIcon:'assets/icons/poop.png'},
          { type:'git-graph', title:'Progression Log',
            lanes:['#3e6868','#c94e44','#c1ab85'],
            entries:[
              { lane:2, msg:'Strength & Flexibility', tag:'2025' },
              { lane:2, msg:'Yoga Practice' },
              { lane:0, msg:'Mental Stability', fork:2 },
              { lane:0, msg:'Quality Rest' },
              { lane:1, msg:'Creative Outlet', fork:0 },
              { lane:2, msg:'Climbing Progress' },
              { lane:2, msg:'V3 Plateau',tag:'2026'  },
              { lane:1, msg:'Technique Breakthrough', tag:'Q1' },
              { lane:1, msg:'Still Exploring' },
              { lane:0, msg:'Interactive Data', merge:1},
              { lane:0, msg:'Integrated Direction', merge:2, tag:'Q2' }
            ]}
        ]},
        /* ── Scene 2: Flexibility & Training ── */
        { label: '2',
          header: 'Artifact Collection',
          commentary: '',
          cards: [
            { type:'stat', title:'Current Explortations', bigVal:'TOP 3', bigUnit:'', bigLabel:'Top 3 Explortations',
              list:[
                {v:'Wifi Vision',l:'Wifi signal through VR'},{v:'Cloud Me',l:'Dashboard Me'},{v:'Self Building Models',l:'3D that Builds itself'}
              ] },
            { type:'chart', title:'Idea Capture Success Rate', chartType:'polarArea',
              labels:['Lost (60%)','Captured (20%)', 'Melding (20%)'],
              data:[60,40,30], colors:['#2a2520','#c94e44','#8b5e5a'], centerIcon:'assets/icons/brain.png' },
            { type:'stat', title:'Idea Capture Window', bigVal:'10:30', bigUnit:'PM', bigLabel:'Prime ideation: 10:30–11:45 PM',
              pills:[{v:'±30min',l:'Duration'},{v:'1 in 5',l:'GOOD'},{v:'15%',l:'Useful'}], bigValClass:'flash-puce' },
              { type:'projects', title:'C.R.APPs Ive Made', items:[
                {name:'Lottery App', url:'https://pawndaring.github.io/lotto-sphere-generator/', desc:'A Gambling Detourant.'},
                {name:'Password Game', url:'https://pawndaring.github.io/password/', desc:'A Stranger Version of Wordle.'},
                {name:'Santa Slayer', url:'https://pawndaring.github.io/SantaSlayer/', desc:'A Game About Saving Christmas and fighting Krampus.'},
              ]},
           
        ]},
        /* ── Scene 3: Grounding & Navigation ── */
        { label: '3',
          header: 'Speaking of Maps!',
          commentary: 'Moving into Project Spotlight: Interactive Map',
          cards: [
          { type:'projects', title:'Halovista Interactive Map', items:[
            {name:'Interactive Map', desc:'Spatial curiosity experiment — explore the world.', url:'https://halovista-interactive-map.web.app/'}
          ]},
          { type:'map', title:'Past Vacations', center:[35,-30], zoom:2, markers:[
            {place:'Dublin',coords:[53.3498,-6.2603]},
            {place:'Oslo',coords:[59.9139,10.7522]},
            {place:'Toronto',coords:[43.6532,-79.3832]},
            {place:'Anchorage',coords:[61.2181,-149.9003]},
            {place:'Montego Bay',coords:[18.4762,-77.8939]},
            {place:'Roatan',coords:[16.3184,-86.5225]},
            {place:'George Town',coords:[19.2866,-81.3670]},
            {place:'London',coords:[51.5072,-0.1276]},
            {place:'New York',coords:[40.7128,-74.0060]},
            {place:'Los Angeles',coords:[34.0522,-118.2437]},
            {place:'Chicago',coords:[41.8781,-87.6298]},
            {place:'Florence',coords:[25.7617,-80.1918]},
            {place:'San Francisco',coords:[37.7749,-122.4194]},
            {place:'Seattle',coords:[47.6062,-122.3321]},
            {place:'Austin',coords:[30.2672,-97.7431]},
            {place:'San Diego',coords:[32.7157,-117.1611]},
            {place:'Phoenix',coords:[33.4484,-112.0740]},
            {place:'Las Vegas',coords:[36.1699,-115.1398]},
            {place:'Denver',coords:[39.7392,-104.9903]},
            {place:'Atlanta',coords:[33.7490,-84.3880]},
            {place:'south dakota',coords:[44.5008,-100.4370]},
            {place:'Utah',coords:[39.1130,-111.4041]},
            {place:'New Mexico',coords:[35.6868,-105.9378]},
            {place:'minneapolis',coords:[44.9778,-93.2650]}
          ] },
          { type:'stat', title:'2026 Big Travels', bigVal:'Low %', bigUnit:'', bigLabel:'Forward motion — minor setbacks, meaningful leaps' },
          { type:'contribution-grid', title:'Daily Selfie Tracker',
            squares: 89, teal: 74, pink: 14, black: 2, caption:'1 selfie/day · 1 follower · 2 days missed' },
          { type:'image', title:'Instagram-Feed', src:'assets/images/Selfie.png' },   
        ]}
      ]
    }
  ];
  