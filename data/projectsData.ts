interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AI Chatbot web app',
    description: `Developed an AI chatbot with Next.js, tailwindcss, shadcn and langchain to build an AI chatbot with the help of GROQ AI. It can be fine-tuned with the help of several buttons given in the dashboard, to get the desired output from the chatbot.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://gpt.zenithstech.com/playground',
  },
  {
    title: 'Fullstack accounting app for small manufactuerers/retailers/wholesalers',
    description: `Developed a Fullstack application with Next.js, prisma, tailwindcss, shadcn to build an accounting software. Follow the tutorial on how to use it by clicking on learn more and search for *How to use this software* on that page.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'blog/my-new-project#how-to-use-this-software',
  },
  {
    title: 'MERN Stack Posts App',
    description: `Developed a MERN Stacks posts app, where the users will need to authenticate (login/register) to post, edit it or even delete, similar to Twitter/X, with the ability to like, unlike and comment on that post (comment is write only and cannot be deleted or edited). Alongwith this, there is also a forgot password functionality built with the login form.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/Pancham555/banao-mern-task-2.git',
  },
  {
    title: 'Strapi E-commerce (Backend)',
    description: `Developed an e-commerce backend with strapi, integrated razorpay for payments, made a custom search plugin in strapi, and hosted the service on render.com.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://drip-vault.onrender.com/',
  },
  {
    title: 'Next-js Strapi E-commerce (Frontend)',
    description: `Developed an e-commerce frontend using nextjs and tailwind css, and integrated it with a strapi backend, and accepting payments with razorpay, and dynamically obtaining the carousel data from the strapi backend.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://drip-vault.vercel.app',
  },
  {
    title: 'MERN Stack filtering app',
    description: `Developed a straightforward MERN applications, which implements data  initialization and presented it in a tabular format. It has been incorporated customizable filters for efficient data exploration, available on different pages for different types of data.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/Pancham555/internship-project-1',
  },
  {
    title: 'React Native Base App',
    description: `Developed a foundational onboarding app using React Native. Designed the onboarding UI, login screen, search functionality, result display, and user profile screen. This app can be easily extended for building various applications.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/Pancham555/react-native-base-app',
  },
  {
    title: 'Flask ML Chatbot',
    description: `Built a simple chatbot web chat interface, with Flask, scikit-learn, numpy, pandas, that uses AI to chat with users. The data comes from a data.csv file inside the working directory.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/Pancham555/flask-ml',
  },
  {
    title: 'React Native News App',
    description: `Developed a React Native news app that fetches data from an API and presents it to users. The app also features an integrated weather viewer and a straightforward note-taking functionality.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://drive.google.com/file/d/1fn0xeTFufhmh5DCpU1_znMSmHoiZe8Ve/view?usp=sharing',
  },
  {
    title: 'Simple MERN Stack TODO Application',
    description: `This is a simple todo list application which uses CRUD operation to write, update and delete lists.`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/Pancham555/Mern-todo',
  },
]

export default projectsData
