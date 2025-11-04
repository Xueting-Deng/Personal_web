import { Icons } from "@/components/icons";

export const BLUR_FADE_DELAY = 0.05;

export const DATA = {
  // Website data
  url: "https://www.xueting.dev", // Use 'www' for vercel recommendation
  lastUpdated: "Nov 2025",
  avatarUrl: "/you.jpg",
  navbar: [
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "/blog", icon: Icons.notebook, label: "Blog" },
    { href: "/resume.pdf", icon: Icons.fileuser, label: "CV" },
  ],
  // Blog info
  blogDescription:
    "Thoughts on AI, software, life and more. Short notes and longer write-ups.",
  blogCharacter: "Z",
  blogInfo: {
    // For OpenGraph image generation
    "bp-deduction": {
      title: "A Detailed Derivation of Backpropagation",
    },
    "proj-came": {
      title:
        "CAME Optimizer: Adam Performance with Adafactor Memory Requirements",
    },
    "proj-infobatch": {
      title: "InfoBatch: Dataset Pruning on the Fly",
    },
    "proj-sequence-schedule": {
      title: "Can We Use LLMs Itself to Speed Up LLM Inference?",
    },
    "proj-zscl": {
      title:
        "ZSCL: Fine-tuning Vision-Language Models without Zero‑Shot Transfer Degradation",
    },
    "note-aievaluation": {
      title: "Evaluation as Creation: How AI is Redefining Human Productivity",
    },
  },
  // Generel data
  name: "Xueting Deng",
  subtitle: "邓雪婷, Ph.D. Candidate in Mechanical Engineering",
  description: "AI-aided Robot & Mechanism Design \n Generative AI | Linkage Systems \n Stony Brook University",
  summary:
    //"Hi there👋! AI has been deeply applied in software world - in Chat-GPT, in end-to-end robot control models. However, have you ever wondered if AI can be used for helping hardware design? Would that be cool if AI can help you design real mechanism structual out for an iron man? That is my research interests - break through the limitations of AI on software and be applied to hardware design.",
    "Hi there👋! While AI has revolutionized the software world - from ChatGPT to end-to-end robot control - but can it design the hardware too? That's what I'm working on: exploring how generative AI can design real mechanisms, sketching joints, links, gears, motions - maybe even a Iron Man suit! \n\n I'm pursuing my Ph.D. at Stony Brook University, where I write simulators, generate database, and design generative models for spatial linkage mechanisms. I'm also doing internship at Inspire Robots for Dexterous Hands research and Design. Please find more about my background in my [CV](./resume.pdf). \n\n🔬 **Research Interests:** AI-aided Robot & Mechanism Design, Generative Models, Simulation, Dexterous Hands Design, Deep Learning",
 
  //As a Ph.D. candidate specializing in kinematic synthesis of mechanisms and computer-aided mechanical design, 
  //I'm deeply passionate about the field of intelligent mechanism design. 
  //My research focuses on addressing the synthesis problem of spatial robotic linkage mechanisms, particularly for rehabilitation applications, 
  // using advanced computer technology and machine learning techniques. I have developed robust databases of spatial mechanisms and designed 
  // predictive machine learning models, leveraging frameworks such as Variational Autoencoders (VAEs) 
  // and Transformers to determine optimal mechanism types and dimensions based on specific requirements",
  surname: "Deng",
  firstName: "Xueting",
  initials: "XD",
  location: "New York, USA",
  locationLink: "https://www.google.com/maps/place/stony+brook+university",
  // Chinese general data
  // chinese: {
  //   name: "郑奘巍",
  //   subtitle: "博士",
  //   description: "全栈开发者 & AI 研究员\n潞晨科技技术负责人",
  //   summary:
  //     "你好，我是郑奘巍👋，[Open-Sora](https://github.com/hpcaitech/Open-Sora) 和 [VideoOcean](https://video-ocean.com/) 的创始人，专注于 AI 视频生成和融合研究与实际创意的 AI SaaS 产品。\n\n我博士毕业于 ![NUS Logo](/icon/nus.png) [新加坡国立大学](https://nus.edu.sg/)，师从 [尤洋教授](https://scholar.google.com/citations?user=jF4dPZwAAAAJ&hl=zh-CN)。曾于 ![Bytedance Logo](/icon/bytedance.png) [字节跳动](https://bytedance.com/) 担任科研实习生。本科毕业于 ![NJU Logo](/icon/nju.png) [南京大学](https://www.nju.edu.cn/en/) 计算机科学与技术专业（拔尖计划）。我还曾在 ![UC Berkeley Logo](/icon/ucb.png) [加州大学伯克利分校](https://www.berkeley.edu/) 远程科研实习一年，合作导师包括 [岳翔宇博士](https://scholar.google.com/citations?user=-xQ-C1sAAAAJ&hl=zh-CN&authuser=1) 和 [Alberto Sangiovanni-Vincentelli 教授](https://www2.eecs.berkeley.edu/Faculty/Homepages/sangiovanni-vicentelli.html)。更多背景信息欢迎查阅我的 [简历](./resume.pdf)。\n\n🔬 **研究方向：** 视频生成、高效机器学习与深度学习优化。",
  //   blogDescription: "关于AI、软件、生活等的思考。短篇笔记和长篇写作。",
  //   blogInfo: {
  //     "note-aievaluation": {
  //       title: "评价即创造：AI时代将重新定义人类的生产力",
  //     },
  //   },
  // },
  // Contact
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Xueting-Deng",
        icon: Icons.github,
        navbar: false,
        content: true,
        footer: true,
      },
      GoogleScholar: {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=FTqutJEAAAAJ&hl=en",
        icon: Icons.googlescholar,
        navbar: false,
        content: true,
        footer: true,
      },
      orcid: {
        name: "ORCID",
        url: "https://orcid.org/0000-0003-2251-9439",
        icon: Icons.orcid,
        navbar: false,
        content: false,
        footer: true,
      },
      researchgate: {
        name: "ResearchGate",
        url: "https://www.researchgate.net/profile/Xueting-Deng-3",
        icon: Icons.researchgate,
        navbar: false,
        content: false,
        footer: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/xueting-deng-ddw/",
        icon: Icons.linkedin,

        navbar: false,
        content: true,
        footer: true,
      },
      wechat: {
        name: "WeChat",
        url: "/wechat-qrcode.jpg",
        icon: Icons.wechat,
        navbar: false,
        content: false,
        footer: true,
      },
      email: {
        name: "Email",
        url: "mailto:xuetingdeng98@gmail.com",
        icon: Icons.email,
        navbar: false,
        content: true,
        footer: false,
      },
      calendly: {
        name: "Calendly",
        url: "https://calendly.com/zhengzangw/coffee-chat",
        icon: Icons.calendly,
        navbar: false,
        content: false,
        footer: false,
      },
    },
  },
  // News
  news: [
    {
      date: "2025.8",
      title: "Present ",
      content:
        "Presented my newest paper at ASME IDETC 2025",
    },
    {
      date: "2024.12",
      title: "Ph.D Proposal Defense",
      content:
        "Defensed my Ph.D proposal, one step closer to graduation!",
    },
    {
      date: "2024.8",
      title: "Won ASME BPart Fellowship",
      content:
        "Defensed my Ph.D proposal, one step closer to graduation!",
    },
      {
      date: "2024.8",
      title: "Present ",
      content:
        "Presented my newest paper at ASME IDETC 2025",
    },
  ],
  // Projects
  projects: [
    {
      title: "Spatial Mechanism Simulator",
      href: "https://github.com/Xueting-Deng/Spatial-RSCR-Simulator",
      dates: "Dec. 2024 - Present",
      active: true,
      description:
        "The world’s first open-source Sora-like video generation model — bringing efficient, high-quality video production to everyone.",
      technologies: [],
      authors: "",
      links: [
        {
          type: "Github",
          href: "https://github.com/hpcaitech/Open-Sora",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj-open-sora.png",
      video: "",
    },
   
  ],
  // Skills
  skills: [
    "Python",
    "PyTorch",
    "Docker",
    "Terraform",
    "C/C++",
  ],
  // Education
  education: [
    {
      school: "Stony Brook University",
      href: "https://www.stonybrook.edu/",
      degree: "Ph.D. in Mechanism Engineering",
      logoUrl: "/icon/sbu.png",
      start: "2021",
      end: "2026",
    },
    {
      school: "Stony Brook University",
      href: "https://www.stonybrook.edu/",
      degree: "Master in Mechanism Engineering",
      logoUrl: "/icon/sbu.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "Hefei University of Technology",
      href: "https://international.hfut.edu.cn/en/About_/About_HFUT.htm",
      degree: "Bachelor's Degree in Mechanism Engineering",
      logoUrl: "/icon/hfut.png",
      start: "2016",
      end: "2020",
    },
  ],
  // Work
  work: [
    {
      company: "HPC-AI Tech",
      href: "https://www.hpcaitech.com/",
      badges: [],
      location: "Singapore",
      title: "Tech Lead",
      logoUrl: "/icon/hpc-ai.png",
      start: "Dec. 2024",
      end: "Present",
      description: "Founder of Open-Sora and VideoOcean.",
    },
 
  ],
  // Awards
  awards: [
    { year: 2023, title: "Research Achievement Award of NUS" },
  ],
  // Academic Services
  reviewerConferences: ["NeurIPS", "ICLR", "CVPR", "ECCV", "AAAI"],
  reviewerJournals: ["Pattern Recognition", "TIP", "TSMC-S"],
  teaching: [
    {
      date: "Fall 2022",
      location: "National University of Singapore",
      title: "CS5242: Neural Networks and Deep Learning",
    },
  ],
  // Invited Talks
  invitedTalks: [
    {
      host: "QbitAI",
      url: "https://zhuanlan.zhihu.com/p/605329331",
      date: "2023.02",
      title: "Large Batch Training for CTR Prediction Model",
      logoUrl: "/icon/qbitai.png",
    },
    {
      host: "TechBeat",
      url: "https://www.techbeat.net/talk-info?id=762",
      date: "2023.03",
      title: "Large Batch Training for Recommendation Model",
      logoUrl: "/icon/techbeat.png",
    },
  ],
  // Discover (footer)
  discover: [
    {
      name: "HPC-AI Lab",
      url: "https://ai.comp.nus.edu.sg/",
    },
    {
      name: "NJU-CSE-Flyers",
      url: "https://nju-cse-flyers.github.io/",
    },
    {
      name: "Open-Sora",
      url: "https://github.com/hpcaitech/Open-Sora",
    },
    {
      name: "Video Ocean",
      url: "https://video-ocean.com/en/app",
    },
  ],
  // Fun facts
  aiTools: {
    description:
      "The AI models and services I use are handpicked for their performance and reliability.",
    tools: [
      { category: "General", name: "GPT-5" },
      { category: "Code", name: "Cursor (Auto)" },
      { category: "Image", name: "Seedream-4" },
      { category: "Video", name: "Seedance-1" },
    ],
  },
} as const;

export function getEmail(): string {
  return Object.values(DATA.contact.social)
    .filter((social) => social.name === "Email")
    .map((social) => social.url)[0];
}
