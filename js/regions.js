/* ════════════════════════════════════════════════════════
   REGION DATA — 6 body parts, 3 sub-scenes each
   Each sub-scene has 3 cards: stat, chart, or map
   ════════════════════════════════════════════════════════ */
const REGIONS = [
  {
    id: 'MIND', icon: '<img src="assets/icons/brain.png" alt="brain">', label: 'MIND', side: 'right',
    subtitle: 'Neural & cognitive analysis',
    scenes: [
      /* ── Scene 1: What has been on my mind ── */
      { label: '1',
        header: 'What\'s on My Mind',
        cards: [
        { type:'chart', title:'Mental Focus Distribution', chartType:'doughnut',
          labels:['Projects','Socializing','Contemplative What-ifs','Rabbit Holes','Rest'],
          data:[45,10,20,15,10], colors:['#c94e44','#b5736b','#5b8a8a','#c1ab85','#8be5a7'], centerIcon:'assets/icons/brain.png' },
        { type:'stat', title:'Dominant Thread', bigVal:'Artificing', bigUnit:'', bigLabel:'Cataloging ideas, crafting artifacts, building things',
          pills:[{v:'32%',l:'Successful Prototypes'},{v:'33%',l:'Failed Prototypes'},{v:'35%',l:'Ideas'}] },
        { type:'stat', title:'Idea Emergence Window', bigVal:'10:30', bigUnit:'PM', bigLabel:'Prime ideation: 10:30–11:45 PM',
          pills:[{v:'±30min',l:'Variance'},{v:'1 in 5',l:'Captured'}], bigValClass:'flash-puce' }
      ]},
      /* ── Scene 2: Live feed — brain waves, week capture, wake/sleep ── */
      { label: '2',
        header: 'Mind Stream',
        cards: [
        { type:'brain-wave', title:'Last 3-Day Thought Activity',
          sleepStart: 22, sleepEnd: 6, days: ['Fri','Sat','Sun'] },
        { type:'stat', title:'Average Run Time', bigVal:'16', bigUnit:'hr', bigLabel:'Awake hours — 6 AM to 10 PM' },
        { type:'rotating-model', title:'Mind Model', model:'assets/models/brain.glb' }
      ]},
      /* ── Scene 3: Idea capture recap ── */
      { label: '3',
        header: 'Idea Capture Summary',
        cards: [
        { type:'stat', title:'Ideas Captured', bigVal:'12', bigUnit:'', bigLabel:'Written down this week',
          list:[
            {v:'Wifi Vision',l:'Wifi signal through VR'},{v:'Clone-Me',l:'Me if I was a dashboard'},{v:'Self Building Models',l:'3D that Builds itself'}
          ] },
        { type:'stat', title:'Ideas Lost', bigVal:'44', bigUnit:'', bigLabel:'Slipped away before capture',
          pills:[{v:'~5/day',l:'Avg'},{v:'78%',l:'Evaporated'}] },
        { type:'chart', title:'Idea Capture Success Rate', chartType:'polarArea',
          labels:['Captured (20%)','Lost (60%)', 'Melding (20%)'],
          data:[20,60,20], colors:['#c94e44','#2a2520','#8b5e5a'], centerIcon:'assets/icons/brain.png' }
      ]}
    ]
  },
  {
    id: 'Baggage', icon: '<img src="assets/icons/backpack.png" alt="backpack">', label: 'Baggage', side: 'left',
    subtitle: 'What has been weighing me down?',
    scenes: [
      /* ── Scene 1: Emotional & Physical Load ── */
      { label: '1',
        header: 'The Load',
        commentary: 'The Last 5 Months',
        cards: [
        { type:'chart', title:'Emotional Load Index', chartType:'line',
          labels:['N','D','J','F','M'],
          data:[10,11,15,20,30], color:'#c94e44', fill:true },
        { type:'stat', title:'Recovery Velocity', bigVal:'0.2', bigUnit:'d', bigLabel:'Days to return to baseline',
          pills:[{v:'Improving',l:'Trend'},{v:'-0.4d',l:'vs Last'}] },
          { type:'image', title:'Its a matter of perspective...', src:'assets/images/Handstand.png' }
      ]},
      /* ── Scene 2: Strength & Climbing ── */
      { label: '2',
        header: 'Getting Stronger?',
        commentary: 'Shoulders improving from handstand practice.',
        cards: [
        { type:'chart', title:'Handstand Holdtime Progression', chartType:'line',
          labels:['Dec','Jan','Feb','Mar'],
          data:[5,7,10,25], color:'#5b8a8a', fill:true },
        { type:'stat', title:'Climbing Difficulty Plateau', bigVal:'V3', bigUnit:'', bigLabel:'Current benchmark barrier',
          pills:[{v:'Strength > Technique',l:'Diagnosis'}] },
        { type:'chart', title:'Posture Integrity Score', chartType:'radar',
          labels:['Alignment','Load Dist.','Spinal Curve','Shoulder Set','Neck Angle','Core Support'],
          data:[72,65,58,78,52,68], color:'#b5736b' }
      ]},
      /* ── Scene 3: Gear & Personality Metrics ── */
      { label: '3',
        header: 'Load Offsetting System',
        commentary: 'Emotional Baggage: Managed',
        cards: [
        { type:'baggage-stat', title:'Baggage Status',
          pills:[{v:'Optimized',l:'Load Dist.'},{v:'A+',l:'Durability'}],
          bigVal:'GOOD BUY', bigLabel:'New carry system acquired',
          linkUrl:'https://www.amazon.com/dp/B0DF9BCHT4?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1', linkIcon:'👜', linkLabel:'View Bag on Amazon' },
        { type:'stat', title:'Responsibility Meter', bigVal:'7', bigUnit:'', bigLabel:'Active commitments on shoulders',
          pills:[{v:'3',l:'Work'},{v:'2',l:'Personal'},{v:'2',l:'Projects'}] },
        { type:'chart', title:'Shoulder Zone Overview', chartType:'doughnut',
          labels:['Emotional Load','Physical Strain','Responsibility','Recovery'],
          data:[32,28,25,15], colors:['#c94e44','#b5736b','#c1ab85','#3e6868'] }
      ]}
    ]
  },
  {
    id: 'Occupation', icon: '<img src="assets/icons/palm.png" alt="palm">', label: 'Occupation', side: 'right',
    subtitle: 'What\'s keeping me occupied',
    scenes: [
      /* ── Scene 1: Activity & Task Distribution ── */
      { label: '1',
        header: 'Contentment Meter',
        commentary: 'Optimal zone — not idle, not overloaded. Split between proposals, 3D modeling, and typing. 42% AI-assisted keystrokes. Steady output.',
        cards: [
        { type:'stat', title:'Manual Activity Index', bigVal:'78', bigUnit:'%', bigLabel:'Optimal engagement zone',
          pills:[{v:'Steady',l:'Status'},{v:'Not Idle',l:'Mode'}] },
        { type:'chart', title:'Task Distribution Meter', chartType:'doughnut',
          labels:['Proposals','3D Modeling','Writing/Typing','Drawing','Word Games','Podcast+Work'],
          data:[24,22,28,10,8,8], colors:['#c94e44','#b5736b','#c1ab85','#5b8a8a','#8b5e5a','#3e6868'], centerIcon:'assets/icons/palm.png' },
        { type:'stat', title:'Keystroke Throughput', bigVal:'4.8k', bigUnit:'/day', bigLabel:'Estimated daily typing volume',
          pills:[{v:'42%',l:'AI Collab Ratio'},{v:'↑6%',l:'This Week'}] }
      ]},
      /* ── Scene 2: Creative Production ── */
      { label: '2',
        header: 'Crafts and Recreation',
        commentary: '5 artifacts Created this week. Code drafts, sketches. Occasional Drawing. Word puzzles keep the mind loop sharp.',
        cards: [
        { type:'stat', title:'Artifact Generation Rate', bigVal:'14', bigUnit:'/wk', bigLabel:'Models, drafts, sketches, notes, experiments',
          pills:[{v:'3',l:'Models'},{v:'5',l:'Drafts'},{v:'6',l:'Sketches'}] },
        { type:'chart', title:'Productivity Pattern', chartType:'line',
          labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          data:[8,2,12,1,15,3,10], color:'#c1ab85', fill:true },
        { type:'stat', title:'Lexical Dexterity Score', bigVal:'20', bigUnit:'', bigLabel:'Word puzzle interaction frequency',
          pills:[{v:'Daily',l:'Frequency'},{v:'so-so',l:'Hand↔Language'}],
          scrabble:{word:'TRAIKING', points:166, label:'TOP WORD SCORE'} }
      ]},
      /* ── Scene 3: Playful Indicators ── */
      { label: '3',
        header: 'Mischief Report',
        commentary: 'Sufficiently occupied — mischief potential low. Ideas moving concept→artifact consistently. Juggling 5 projects.',
        cards: [
        { type:'chart', title:'Mischief Potential Meter', chartType:'doughnut',
          labels:['😈 Mischief','Occupied'],
          data:[30,70], colors:['#c94e44','#2a2520'] },
        { type:'stat', title:'Creative Momentum Gauge', bigVal:'High', bigUnit:'', bigLabel:'Idea → Artifact pipeline flowing',
          pills:[{v:'Consistent',l:'Output'},{v:'↑12%',l:'vs Last Mo.'}] },
        { type:'stat', title:'Multi-Tool Mode', bigVal:'5', bigUnit:'', bigLabel:'Simultaneous projects juggling',
          pills:[{v:'2',l:'Active'},{v:'2',l:'Simmering'},{v:'1',l:'Chaotic'}] }
      ]}
    ]
  },
  {
    id: 'heart', icon: '<img src="assets/icons/heart-rate.png" alt="heart">', label: 'Heart', side: 'left',
    subtitle: 'Spirit, soul & cardiovascular vitality',
    scenes: [
      /* ── Scene 1: Spirit & Morale ── */
      { label: '1',
        header: 'Spirit Check',
        commentary: 'Morale strong, stable. No catastrophic dips this year. Major soul-crushing events dodged. System holding.',
        cards: [
        { type:'stat', title:'Spirit Stability Index', bigVal:'Strong', bigUnit:'', bigLabel:'Inner momentum: stable, no major dips',
          pills:[{v:'Stable',l:'Morale'},{v:'0',l:'Catastrophic Dips'}] },
        { type:'chart', title:'❤️ Emotional Battery', chartType:'doughnut',
          labels:['❤️ Charged','Empty'],
          data:[72,28], colors:['#c94e44','#221a18'], centerIcon:'assets/icons/heart-rate.png' },
        { type:'stat', title:'High-Stress Avoidance Rate', bigVal:'-80', bigUnit:'%', bigLabel:'Soul-crushing events',
          pills:[{v:'Low',l:'Avoidance'},{v:'3/3',l:'Critical Hits'}] }
      ]},
      /* ── Scene 2: Social & Companion Energy ── */
      { label: '2',
        header: 'Heart Fuel',
        commentary: 'Puppies heal all wounds.',
        cards: [
        { type:'stat', title:'Companion Presence Factor', bigVal:'+60', bigUnit:'%', bigLabel:'Rumble & Maggie stabilization effect',
          pills:[{v:'🐕 Rumble',l:'Active'},{v:'🐕 Maggie',l:'Active'}] },
        { type:'spotify-list', title:'Mood Regulator Playlist', items:[
          { name:'MOTHERFOLK', desc:'Indie alternative with warm, folk-tinged textures and introspective lyricism.', url:'https://open.spotify.com/artist/70fUpxdAr6t0LJw3xJmMhm?si=gltWtyr6QciM8vggvmOH1Q' },
          { name:'Joywave', desc:'Indie electronic / alternative pop with quirky, satirical edge.', url:'https://open.spotify.com/artist/1UfzhwcOR4yfX7yHTPfC9m?si=TsnXbgH9S0mxV1dSD7FYiQ' },
          { name:'LEAP', desc:'Indie alternative rock with punchy, emotional energy; sharp guitar work and modern, anthemic intensity.', url:'https://open.spotify.com/artist/538iX6YCTybcgzsrjDTrFi?si=6tsQYOeNRF-z8PS3S_s_Qg' },
          { name:'Nothing But Thieves', desc:'Alternative rock with cinematic scale and falsetto-driven intensity.', url:'https://open.spotify.com/artist/1kDGbuxWknIKx4FlgWxiSp?si=ltJmTC6fSoO7jlwvhnDWWA' },
        ]}
      ]},
      /* ── Scene 3: Cardio & Resilience ── */
      { label: '3',
        header: 'The Engine',
        commentary: 'Cardio improving from climbing and training. Resilience tightening — bouncing back faster. Battery charged for creative and social engagement.',
        cards: [
        { type:'chart', title:'Cardio Vitality Score', chartType:'line',
          labels:['Oct','Nov','Dec','Jan','Feb','Mar'],
          data:[10,15,15,30,40,75], color:'#c94e44', fill:true },
        { type:'stat', title:'Resilience Recovery Time', bigVal:'1.8', bigUnit:'d', bigLabel:'Days to return to baseline after setback',
          pills:[{v:'-0.6d',l:'vs 3mo Ago'},{v:'Fast',l:'Grade'}] },
        { type:'chart', title:'Heart Zone Overview', chartType:'radar',
          labels:['Drive','Resonance','Connection','Identity','Curiosity','Discipline', 'Vitality','Chaos'],
          data:[100,50,70,90,90,70,65,90 ], color:'#c94e44'}
      ]}
    ]
  },
  {
    id: 'stomach', icon: '<img src="assets/icons/poop.png" alt="poop">', label: 'Output Chute', side: 'right',
    subtitle: 'Creative Recreational APPs',
    scenes: [
      /* ── Scene 1: Metrics & First Batch ── */
      { label: '1',
        header: 'Byproduct Port',
        commentary: 'Steady output. Not all good.',
        cards: [
        { type:'stat', title:'Creative Output Rate', bigVal:'2.4', bigUnit:'/mo', bigLabel:'Experimental projects produced monthly',
          pills:[{v:'Frequent',l:'Output'},{v:'Chaotic',l:'Style'}] },
        { type:'stat', title:'Prototype Survival Rate', bigVal:'38', bigUnit:'%', bigLabel:'Projects that evolve into something bigger',
          pills:[{v:'6/16',l:'Survived'},{v:'RIP',l:'The Rest'}] },
        { type:'projects', title:'CRAPPs Ive Made', items:[
          {name:'Lottery App', url:'https://pawndaring.github.io/lotto-sphere-generator/'},
          {name:'Password Game', url:'https://pawndaring.github.io/password/'},
          {name:'Video Game', url:'https://pawndaring.github.io/SantaSlayer/'},
        ]}
      ]},
      /* ── Scene 2: Second Batch ── */
      { label: '2',
        header: 'MVP',
        commentary: 'Maps multiply. Quizzes iterate. Audio→words→audio. Code escaped the screen and became a bracelet. Nothing is safe.',
        cards: [
        { type:'stat', title:'Iteration Loop Count', bigVal:'3', bigUnit:'×', bigLabel:'Same idea returning in slightly different form',
          pills:[{v:'Personality Quiz',l:'Primary Offender'}] },
        { type:'chart', title:'Output Type Distribution', chartType:'doughnut',
          labels:['Web Apps','Games','Tools','Quizzes','Physical','Maps'],
          data:[30,12,18,22,5,13], colors:['#c94e44','#5b8a8a','#b5736b','#8b5e5a','#3e6868','#c1ab85'], centerIcon:'assets/icons/poop.png' },
        { type:'projects', title:'The Bin — Batch 2', items:[
          {name:'Interactive Map', desc:'Spatial curiosity experiment — explore the world.', url:'https://halovista-interactive-map.web.app/'}
        ]}
      ]},
      /* ── Scene 3: The Full Dump ── */
      { label: '3',
        header: 'Full Dump',
        commentary: 'Full inventory. One selfie a day, zero followers, that\'s the point. Only missed 2 day so far.',
        cards: [
        { type:'contribution-grid', title:'Daily Selfie Tracker',
          squares: 80, teal: 54, pink: 24, black: 2, caption:'1 selfie/day · 0 followers · 1 day missed' },
        { type:'image', title:'Instagram-Feed', src:'assets/images/Selfie.png' }
      ]}
    ]
  },
  {
    id: 'Tracking', icon: '<img src="assets/icons/route.png" alt="feet">', label: 'Feet', side: 'left',
    subtitle: 'Trajectory, grounding & navigation',
    scenes: [
      /* ── Scene 1: Trajectory & Movement ── */
      { label: '1',
        header: 'Direction',
        commentary: 'Balanced forward motion. Q1: minor setbacks + meaningful leaps.',
        cards: [
        { type:'stat', title:'Trajectory Stability Index', bigVal:'Balanced', bigUnit:'', bigLabel:'Forward motion — minor setbacks, meaningful leaps',
          pills:[{v:'Q1 \'26',l:'Period'},{v:'Steady',l:'Momentum'}] },
        { type:'map', title:'Ground Coverage', center:[35,-30], zoom:2, markers:[
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
        { type:'stat', title:'Forward Momentum', bigVal:'72', bigUnit:'%', bigLabel:'Ideas consistently moving to action',
          pills:[{v:'↑8%',l:'vs Q4'},{v:'Improving',l:'Trend'}] }
      ]},
      /* ── Scene 2: Flexibility & Training ── */
      { label: '2',
        header: 'Flexibility',
        commentary: 'Body and mind flexibility improving. Yoga is primary driver. Low load, high intensity training. Balance board unexpectedly effective.',
        cards: [
        { type:'git-graph', title:'Direction Log',
          lanes:['#3e6868','#c94e44','#c1ab85'],
          entries:[
            { lane:0, msg:'Yoga routine established', tag:'Q1' },
            { lane:0, msg:'Started climbing', fork:1 },
            { lane:1, msg:'V3 plateau hit' },
            { lane:0, msg:'Balance board experiment', fork:2 },
            { lane:2, msg:'Flexibility gains' },
            { lane:1, msg:'Technique breakthrough' },
            { lane:0, msg:'Merged climbing progress', merge:1 },
            { lane:2, msg:'Still exploring' },
            { lane:0, msg:'Direction locked', tag:'HEAD' }
        ]},
        { type:'stat', title:'Intensity-to-Load Ratio', bigVal:'Low/High', bigUnit:'', bigLabel:'Low load, high intensity — efficient exertion',
          pills:[{v:'Efficient',l:'Exertion'},{v:'↓ Strain',l:'Load'}] }
      ]},
      /* ── Scene 3: Grounding & Navigation ── */
      { label: '3',
        header: 'Grounding',
        commentary: 'Inputs: yoga, engaging work, balance training, exploration. Path corrections frequent — adaptability, not indecision. Adventure probability elevated.',
        cards: [
        { type:'chart', title:'Grounding Inputs', chartType:'doughnut',
          labels:['Yoga Practice','Engaging Work','Balance Training','Exploration'],
          data:[28,32,20,20], colors:['#3e6868','#c94e44','#5b8a8a','#c1ab85'], centerIcon:'assets/icons/route.png' },
        { type:'stat', title:'Path Correction Frequency', bigVal:'6', bigUnit:'/mo', bigLabel:'Plan direction changes after new info',
          pills:[{v:'Adaptive',l:'Style'},{v:'Not Chaotic',l:'Grade'}] },
        { type:'stat', title:'Adventure Probability', bigVal:'84', bigUnit:'%', bigLabel:'Likelihood of wandering somewhere interesting',
          pills:[{v:'High',l:'Readiness'},{v:'🧭',l:'Compass'}] }
      ]}
    ]
  }
];
