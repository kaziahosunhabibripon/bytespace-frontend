import { paths } from "@/lib/paths";
import type { StatItem, Testimonial } from "@/types/content";

export const homeContent = {
  hero: {
    titleLines: ["Get Access to Hundreds", "Courses Available"],
    subtitle: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
    search: { placeholder: "Course, topic, creator", label: "Search courses", submitLabel: "Search" },
  },
  partners: { label: "Partners", image: "img/logos.png", alt: "Logoipsum", width: 1160, height: 70 },
  discover: {
    titleLines: ["Discover Your Passion,", "Build Your Skills"],
    lead: "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
    moreLabel: "+ More",
    courseCount: 6,
  },
  paths: {
    title: "Explore Diverse Learning Paths at Bytespace",
    lead: "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  },
  growth: {
    titleLines: ["Your Path to Professional", "Growth Starts Here!"],
    text: "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
    stats: [
      { value: "12K", label: "Students" },
      { value: "70+", label: "Courses" },
      { value: "16", label: "Creators" },
    ] satisfies StatItem[],
  },
  creators: {
    titleLines: ["Create & Manage", "Courses Easily."],
    lead: {
      brand: "ByteSpace",
      text: " supports individuals or entities in the creation, publication, and administration of educational courses.",
    },
    benefits: ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"],
    image: { name: "woman-headset", alt: "Creator with headset and tablet" },
    revenue: { title: "Total Revenue", period: "July 1-28", amount: "$120.29", percent: 57 },
    yearToDate: { title: "Year to Date", period: "2023", amount: "$1,200.38", change: "+12$" },
  },
  cta: {
    titleLines: ["Unlock Your Potential as a", "Creator with ByteSpace"],
    text: "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
    action: { label: "Join as Creator", to: paths.register },
  },
  testimonials: {
    titleLines: ["Discover What Our", "Community Is Saying"],
    lead: "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
    items: [
      {
        id: "sarah",
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: "a10",
        spacing: "tight",
        quote:
          '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
      },
      {
        id: "james",
        name: "James L.",
        role: "Lifelong Learner",
        avatar: "a35",
        quote:
          '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
      },
      {
        id: "alex",
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: "a38",
        quote:
          '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
      },
    ] satisfies Testimonial[],
  },
} as const;
