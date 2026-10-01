import type { CourseModule, CourseTabItem, IconListItem, RatingBucket, Review, SidebarLesson } from "@/types/content";

export const courseDetails = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  badges: [
    { icon: "bars", iconSize: 20, label: "Intermediate" },
    { icon: "star", iconSize: 20, label: "4.8 (172 reviews)" },
    { icon: "users", iconSize: 22, label: "199 Students" },
  ],
  shareLabel: "Share",
  /** Empty space under each tab's content, as drawn in the three Figma frames. */
  bottomSpace: { about: 59, lessons: 87, reviews: 92 },
  poster: { image: "poster", alt: "Course preview", playLabel: "Play preview" },
  tabs: [
    { value: "about", label: "About" },
    { value: "lessons", label: "Lessons" },
    { value: "reviews", label: "Reviews" },
  ] satisfies CourseTabItem[],

  about: {
    heading: "Description",
    paragraphs: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeek: { heading: "Sneak Peak", images: ["sneak-s1", "sneak-s2", "sneak-s3", "sneak-s4"] },
    keyPoints: {
      heading: "Key Points",
      items: [
        "Foundational Concepts",
        "Design Principles Mastery",
        "Advanced Techniques in Digital Creation",
        "Project Showcase and Critique",
        "Optimizing for Various Platforms",
        "Digital Asset Management Best Practices",
        "Monetization Strategies",
        "Capstone Project: Building Your Portfolio",
      ].map((label): IconListItem => ({ label, icon: "checkCircle" })),
    },
  },

  lessons: {
    heading: "Explore the Modules",
    intro:
      "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    listHeading: "Lesson List",
    modules: [
      {
        title: "Module 1: Introduction to Digital Assets",
        summary:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Module 2: Design Principles for Impact",
        summary:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "Module 4: User-Centric Design Strategies",
        summary:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Module 5: Interactive Media and Engagement",
        summary:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Module 6: Project Showcase and Critique",
        summary:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        summary:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ] satisfies CourseModule[],
    contentHeading: "Lesson Content",
    contentText:
      "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    progressHeading: "Lesson Progress Tracking",
    progressText:
      "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    progress: { label: "Learning Progress", percent: 55 },
  },

  reviews: {
    heading: "What Learners Are Saying",
    intro:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    summary: {
      label: "Ratings",
      score: "4.7",
      buckets: [
        { stars: 5, percent: 92, count: 720 },
        { stars: 4, percent: 36.5, count: 120 },
        { stars: 3, percent: 9.6, count: 21 },
        { stars: 2, percent: 3.5, count: 12 },
        { stars: 1, percent: 5, count: 16 },
      ] satisfies RatingBucket[],
    },
    listHeading: "Individual Reviews:",
    allRatingLabel: "All rating",
    emptyMessage: "No reviews with this rating yet.",
    items: [
      {
        id: "purepearl",
        author: "PurePearl Studio",
        avatar: "a33",
        role: "UI/UX Designer",
        rating: 5,
        postedAgo: "a year ago",
        spacing: "tight",
        text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      },
      {
        id: "albert",
        author: "Albert Flores",
        avatar: "a34",
        role: "UI/UX Designer",
        rating: 5,
        postedAgo: "a year ago",
        text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        id: "cody",
        author: "Cody Fisher",
        avatar: "a35",
        role: "UI/UX Designer",
        rating: 5,
        postedAgo: "a year ago",
        text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        id: "brooklyn",
        author: "Brooklyn Simmons",
        avatar: "a01",
        role: "UI/UX Designer",
        rating: 5,
        postedAgo: "a year ago",
        text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ] satisfies Review[],
  },

  sidebar: {
    title: "112 Lessons (24 hours)",
    lessons: [
      { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
      { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
      { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
    ] satisfies SidebarLesson[],
    moreVideos: "99 more videos",
    pitch: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    priceUnit: "/lifetime",
    enrollLabel: "Enroll Now",
    includesHeading: "This course include",
    includes: [
      { label: "Learning Resources", icon: "resources" },
      { label: "Quality Lesson Videos", icon: "video" },
      { label: "Certificate of Completion", icon: "certificate" },
      { label: "Private Consultation", icon: "consult" },
    ] satisfies IconListItem[],
    creator: { name: "PurePearl Studio", role: "Professional Creator", avatar: "a32" },
    profileLabel: "See Full Profile",
  },
} as const;
