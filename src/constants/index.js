import {
  mobile,
  backend,
  creator,
  web,
  bryan,
  charlie,
  rebel,
  expandai,
  resilientperception,

} from "../assets";

const navLinks = [
  { id: "home", title: "Home", path: "/" },
  { id: "members", title: "Members", path: "/members" },
  { id: "projects", title: "Projects", path: "/projects" },
  { id: "publications", title: "Publications", path: "/publications" },
  { id: "openings", title: "Job Openings", path: "/openings" },
  { id: "contact", title: "Contact Us", path: "/contact" },
  
];

const researchAreas = [
  {
    title: "Autonomous Cyber-physical Systems",
    icon: backend,
  },
  {
    title: "Real-time Edge Networks",
    icon: web,
  },
];

const latestNews = [
  {
    title: "ExpandAI Project Launches with a Seminar",
    date: "October 2nd, 2024",
    icon: creator,
    description: "The CSI Lab proudly kicked off the ExpandAI project on October 2 with an engaging seminar. This initiative will focus on advancing AI-driven technologies for intelligent systems and mobile devices. The seminar brought together industry experts, researchers, and students to discuss the project’s vision and goals.",
    link: "https://tilos.ai/events/tilos-sdsu-seminar-ai-ml-nlp-for-uas-air-traffic-management/",
  },
  {
    title: "Professor Donyanavard to Speak at SoCal Robotics Symposium",
    date: "September 2024",
    icon: mobile,
    description: "Professor Bryan Donyanavard has been invited to deliver a talk at the Southern California Robotics Symposium, hosted by UC Riverside. The talk will focus on cutting-edge research in autonomous systems and robotics, showcasing recent innovations from the CSI Lab.",
    link: "https://robotics.ucr.edu/scr-2024",
  },
  {
    title: "TECoSA Work Presented at ECC Workshop",
    date: "June 25th, 2024",
    icon: web,
    description: "The CSI Lab presented its ongoing TECoSA research at the ECC workshop in late June. The poster presentation highlighted novel developments in cyber-physical systems, sparking discussions on the potential applications of this work in autonomous mobile devices and next-generation technologies.",
    link: "https://www.ericsson.com/en/events/ecc-ws-control-6g",
  },
];


const members = [
  {
    id: 1,
    name: "Bryan Donyanavard",
    designation: "Faculty",
    image: bryan, 
    portfolio_link: "https://bryandony.github.io", 
  },
  {
    id: 2,
    name: "Alyssa Serrano",
    designation: "Undergraduate Student",
    image: "",
    portfolio_link: "", 
  },
  {
    id: 3,
    name: "Adam Kaauwai",
    designation: "Undergraduate Student",
    image: "", 
    portfolio_link: "", 
  },
  {
    id: 4,
    name: "Changhoon Sung",
    designation: "Masters Student",
    image: charlie, 
    portfolio_link: "/changhoon-sung-portfolio", 
  },
  {
    id: 5,
    name: "Alles Rebel",
    designation: "PhD Student",
    image: rebel, 
    portfolio_link: "/alles-rebel-portfolio", 
  },
];


const alumni = [
  {
    id: 1,
    name: "Marius Hillen",
    designation: "Visiting Masters Thesis",
    image: "", 
    portfolio_link: "", 
  },
]

const projects = [
  {
    name: "Supporting Resilient Perception in Autonomous Cyber-physical Systems",
    description:
      "Research project focused on developing robust perception frameworks for autonomous cyber-physical systems to enhance resilience and adaptability in dynamic environments.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "autonomy",
        color: "green-text-gradient",
      },
      {
        name: "cyber-physical systems",
        color: "pink-text-gradient",
      },
    ],
    image: resilientperception, 
    source_code_link: "", 
  },
  {
    name: "Expanding AI Capacity in San Diego: A Strategic Collaboration between SDSU & TILOS AI Institute",
    description:
      "A strategic initiative aimed at leveraging AI advancements through collaboration between San Diego State University and TILOS AI Institute, focusing on community impact and technological growth.",
    tags: [
      {
        name: "artificial-intelligence",
        color: "blue-text-gradient",
      },
      {
        name: "collaboration",
        color: "green-text-gradient",
      },
      {
        name: "strategic-research",
        color: "pink-text-gradient",
      },
    ],
    image: expandai, 
    source_code_link: "https://expandai.sdsu.edu", 
  },
];


const publications = [

  {
    "id": 1,
    "title": "Updating a map for use in localising a mobile device",
    "venue": "",
    "year": 2024,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:-f6ydRqryjwC"
  },
  {
    "id": 2,
    "title": "Back to the Future: Reversible Runtime Neural Network Pruning for Safe Autonomous Systems",
    "venue": "2024 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
    "year": 2024,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:hC7cP41nSMkC"
  },
  {
    "id": 3,
    "title": "Predicting Performance of a Localization-Related Device",
    "venue": "",
    "year": 2024,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:ZeXyd9-uunAC"
  },
  {
    "id": 4,
    "title": "Lightning Talk: The New Era of Computational Cognitive Intelligence",
    "venue": "2023 60th ACM/IEEE Design Automation Conference (DAC)",
    "year": 2023,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:7PzlFSSx8tAC"
  },
  
  {
    "id": 5,
    "title": "Information processing factory 2.0-self-awareness for autonomous collaborative systems",
    "venue": "2023 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
    "year": 2023,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:QIV2ME_5wuYC"
  },
  {
    "id": 6,
    "title": "Tutorial: MARS: A framework for runtime monitoring, modeling, and management of realtime systems",
    "venue": "Proceedings of the 2023 International Conference on Hardware/Software Codesign and System Synthesis",
    "year": 2023,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:L8Ckcad2t8MC"
  },
  {
    "id": 7,
    "title": "Machine learning in run-time control of multicore processor systems",
    "venue": "it-Information Technology",
    "year": 2023,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:dhFuZR0502QC"
  },
  {
    "id": 8,
    "title": "Online learning for orchestration of inference in multi-user end-edge-cloud networks",
    "venue": "ACM Transactions on Embedded Computing Systems",
    "year": 2022,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:aqlVkmm33-oC"
  },
  {
    "id": 9,
    "title": "Proswarp: Period-aware proactive swapping to maximize embedded application performance",
    "venue": "2022 IEEE International Conference on Networking, Architecture and Storage (NAS)",
    "year": 2022,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:mVmsd5A6BfQC"
  },
  {
    "id": 10,
    "title": "Hybrid learning for orchestrating deep learning inference in multi-user edge-cloud networks",
    "venue": "2022 International Symposium on Quality Electronic Design (ISQED)",
    "year": 2022,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:4DMP91E08xMC"
  },
  {
    "id": 11,
    "title": "Seams: Self-optimizing runtime manager for approximate memory hierarchies",
    "venue": "ACM Transactions on Embedded Computing Systems (TECS)",
    "year": 2021,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:_kc_bZDykSQC"
  },
  {
    "id": 12,
    "title": "Chauffeur: Benchmark suite for design and end-to-end analysis of self-driving vehicles on embedded systems",
    "venue": "ACM Transactions on Embedded Computing Systems (TECS)",
    "year": 2021,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:M3ejUd6NZC8C"
  },
  {
    "id": 13,
    "title": "Mars: Middleware for adaptive reflective computer systems",
    "venue": "arXiv preprint arXiv:2107.11417",
    "year": 2021,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:YOwf2qJgpHMC"
  },
  {
    "id": 14,
    "title": "Cross-layer Configuration Optimization for Localization on Resource-constrained Devices",
    "venue": "2021 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    "year": 2021,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:qxL8FJ1GzNcC"
  },
  {
    "id": 15,
    "title": "Intelligent management of mobile systems through computational self-awareness",
    "venue": "Handbook of Research on Methodologies and Applications of Supercomputing",
    "year": 2021,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:kNdYIx-mwKoC"
  },
  {
    "id": 16,
    "title": "Reflecting on Self-Aware Systems-on-Chip",
    "venue": "A Journey of Embedded and Cyber-Physical Systems: Essays Dedicated to Peter Marwedel on the Occasion of His 70th Birthday",
    "year": 2021,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:0EnyYjriUFMC"
  },
  {
    "id": 17,
    "title": "Emergent control of mpsoc operation by a hierarchical supervisor/reinforcement learning approach",
    "venue": "2020 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
    "year": 2020,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:hqOjcs7Dif8C"
  },
  {
    "id": 18,
    "title": "Dynamic iFogSim: A framework for full-stack simulation of dynamic resource management in IoT systems",
    "venue": "2020 International Conference on Omni-layer Intelligent Systems (COINS)",
    "year": 2020,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:5nxA0vEk-isC"
  },
  {
    "id": 19,
    "title": "The self-aware information processing factory paradigm for mixed-critical multiprocessing",
    "venue": "IEEE Transactions on Emerging Topics in Computing",
    "year": 2020,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:MXK_kJrjxJIC"
  },
  {
    "id": 20,
    "title": "Self-aware memory management for emerging energy-efficient architectures",
    "venue": "2020 11th International Green and Sustainable Computing Workshops (IGSC)",
    "year": 2020,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:Zph67rFs4hoC"
  },
  {
    "id": 21,
    "title": "Predicting failures in embedded systems using long short-term inference",
    "venue": "IEEE Embedded Systems Letters",
    "year": 2020,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:3fE2CSJIrl8C"
  },
  {
    "id": 22,
    "title": "Sosa: Self-optimizing learning with self-adaptive control for hierarchical system-on-chip management",
    "venue": "Proceedings of the 52nd annual IEEE/ACM international symposium on microarchitecture",
    "year": 2019,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:UebtZRa9Y70C"
  },
  {
    "id": 23,
    "title": "The information processing factory: A paradigm for life cycle management of dependable systems",
    "venue": "Proceedings of the International Conference on Hardware/Software Codesign and System Synthesis Companion",
    "year": 2019,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:roLk4NBRz8UC"
  },
  {
    "id": 24,
    "title": "Workload Characterization for Memory Management in Emerging Embedded Platforms",
    "venue": "Analysis, Estimations, and Applications of Embedded Systems: 6th IFIP TC 10 International Embedded Systems Symposium, IESS 2019, Friedrichshafen, Germany, September 9–11, 2019, Revised Selected Papers",
    "year": 2019,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:9ZlFYXVOiuMC"
  },
  {
    "id": 25,
    "title": "Adaptive Resource Management for Mobile Multiprocessors through Computational Self",
    "venue": "",
    "year": 2019,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:qUcmZB5y_30C"
  },
  {
    "id": 26,
    "title": "Adaptive Resource Management for Mobile Multiprocessors through Computational Self-Awareness",
    "venue": "University of California, Irvine",
    "year": 2019,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:Se3iqnhoufwC"
  },
  {
    "id": 27,
    "title": "Design Methodology for Responsive and Robust MIMO Control of Heterogeneous Multicores",
    "venue": "IEEE Transactions on Multi-Scale Computing Systems",
    "year": 2018,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:eQOLeE2rZwMC"
  },
 {
    "id": 28,
    "title": "SPECTR: Formal supervisory control and coordination for many-core systems resource management",
    "venue": "ACM SIGPLAN Notices",
    "year": 2018,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:WF5omc3nYNoC"
  },
  {
    "id": 29,
    "title": "Design methodologies for enabling self-awareness in autonomous systems",
    "venue": "2018 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
    "year": 2018,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:zYLM7Y9cAGgC"
  },
  {
    "id": 30,
    "title": "Gain scheduled control for nonlinear power management in CMPs",
    "venue": "2018 Design, Automation & Test in Europe Conference & Exhibition (DATE)",
    "year": 2018,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:IjCSPb-OGe4C"
  },
  {
    "id": 31,
    "title": "Shave-ice: Sharing distributed virtualized spms in many-core embedded systems",
    "venue": "ACM Transactions on Embedded Computing Systems (TECS)",
    "year": 2018,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:Y0pCki6q_DkC"
  },
  {
    "id": 32,
    "title": "Exploring hybrid memory caches in chip multiprocessors",
    "venue": "2018 13th International Symposium on Reconfigurable Communication-centric Systems-on-Chip (ReCoSoC)",
    "year": 2018,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:ufrVoPGSRksC"
  },
  {
    "id": 33,
    "title": "SPECTR",
    "venue": "Proceedings of the Twenty-Third International Conference on Architectural Support for Programming Languages and Operating Systems",
    "year": 2018,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:IWHjjKOFINEC"
  },
  {
    "id": 34,
    "title": "PoliCym: Rapid prototyping of resource management policies for HMPs",
    "venue": "Proceedings of the 28th International Symposium on Rapid System Prototyping: Shortening the Path from Specification to Prototype",
    "year": 2017,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&cstart=20&pagesize=80&citation_for_view=2PglakMAAAAJ:Tyk-4Ss8FVUC"
  },
  {
    "id": 35,
    "title": "SPARTA: Runtime task allocation for energy-efficient heterogeneous manycores",
    "venue": "2016 International Conference on Hardware/Software Codesign and System Synthesis (CODES+ ISSS)",
    "year": 2016,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:u5HHmVD_uO8C"
  },
  {
    "id": 36,
    "title": "SPMPool: Runtime spm management for memory-intensive applications in embedded many-cores",
    "venue": "ACM Transactions on Embedded Computing Systems (TECS)",
    "year": 2016,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:d1gkVwhDpl0C"
  },
  
  {
    "id": 37,
    "title": "Automatic management of Software Programmable Memories in Many-core Architectures",
    "venue": "IET Computers & Digital Techniques",
    "year": 2016,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:9yKSN-GCB0IC"
  },
  {
    "id": 38,
    "title": "On detecting and using memory phases in multimedia systems",
    "venue": "Proceedings of the 14th ACM/IEEE Symposium on Embedded Systems for Real-Time Multimedia",
    "year": 2016,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:u-x6o8ySG0sC"
  },
  {
    "id": 39,
    "title": "Energy-aware real-time face recognition system on mobile CPU-GPU platform",
    "venue": "Trends and Topics in Computer Vision: ECCV 2010 Workshops, Heraklion, Crete, Greece, September 10-11, 2010, Revised Selected Papers, Part II 11",
    "year": 2012,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=2PglakMAAAAJ&citation_for_view=2PglakMAAAAJ:qjMakFHDy7sC"
  },  
];






export { navLinks, researchAreas, latestNews, members, alumni, projects, publications };
