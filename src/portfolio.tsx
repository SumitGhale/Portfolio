import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaGithub,
  FaJava,
  FaAndroid,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import {
  SiKotlin,
  SiJetpackcompose,
  SiFirebase,
  SiSwift,
  SiJavascript,
} from "react-icons/si";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Smartphone,
  ArrowLeft,
} from "lucide-react";

// images
import artGallery1 from "./assets/ArtGalleryHome.png";
import artGallery2 from "./assets/ArtGallerySearch.png";
import artGallery3 from "./assets/ArtgalleryLogin.png";
import study1 from "./assets/StudyHome.png";
import study2 from "./assets/StudyTask.png";
import study3 from "./assets/StudyTimer.png";
import Camera1 from "./assets/CameraGallery.png";
import Camera2 from "./assets/CameraHome.png";
import Chat1 from "./assets/ChatLogin.png";
import Chat2 from "./assets/ChatMessage.png";
import Chat3 from "./assets/ChatRooms.png";
import Wealth1 from "./assets/WealthHome.jpg";
import Wealth2 from "./assets/WealthIncome.jpg";
import Wealth3 from "./assets/WealthCompare.jpg";
import Wealth4 from "./assets/WealthBudget.jpg";
import TicTac1 from "./assets/TicTac.png";
import TicTac2 from "./assets/GameWon.png";
import Timer1 from "./assets/TimeChHome.png";
import Timer2 from "./assets/TimeChScore.png";
import DocumentEditor1 from "./assets/DocumentEditorHome.png";
import DocumentEditor2 from "./assets/DocumentEditorEdit.png";
import cv from "./assets/CV.pdf"

interface TerminalTextProps {
  text: string;
  delay?: number;
}

const TerminalText: React.FC<TerminalTextProps> = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, delay, text]);

  return <span className="font-mono">{displayText}</span>;
};

interface DirectionAwareHoverProps {
  children: React.ReactNode;
}

const DirectionAwareHover: React.FC<DirectionAwareHoverProps> = ({
  children,
}) => {
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      setDirection({ x: x - centerX, y: y - centerY });
    }
  };

  const handleMouseLeave = () => {
    setDirection({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: direction.y * 0.1,
        rotateY: -direction.x * 0.1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const Header: React.FC = () => (
  <header className="relative bg-white bg-opacity-80 text-gray-800 w-full shadow-md">
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <a href="mailto: grgsten@gmail.com">grgsten@gmail.com</a>
          </span>
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-800 text-white rounded-full text-xs px-3 py-1 hover:bg-gray-700"
            onClick={() => window.open(`${cv}`)}
          >
            <FileText className="h-3 w-3 mr-1" />
              CV
          </Button>
        </div>
        <nav className="space-x-4">
          <Button variant="ghost" size="sm">
            <a href="#about">About</a>
          </Button>
          <Button variant="ghost" size="sm">
            <a href="#projects">Projects</a>
          </Button>
          <Button variant="ghost" size="sm">
            <a href="mailto: grgsten@gmail.com">Contact</a>
          </Button>
        </nav>
      </div>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="relative bg-white bg-opacity-80 text-gray-800 py-12 shadow-inner">
    <div className="container mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          className="bg-gray-800 text-white hover:bg-gray-700"
        >
          <Mail className="h-4 w-4 mr-2" />
          <a href="mailto: grgsten@gmail.com">Email Me</a>
        </Button>
        <Button
          variant="outline"
          className="bg-gray-800 text-white hover:bg-gray-700"
        >
          <Smartphone className="h-4 w-4 mr-2" />
          Call Me
        </Button>
        <Button
          variant="outline"
          className="bg-gray-800 text-white hover:bg-gray-700"
        >
          <Linkedin className="h-4 w-4 mr-2" />
          <a href="https://www.linkedin.com/in/sumit-ghale-4157721a6">
            LinkedIn
          </a>
        </Button>
      </div>
    </div>
  </footer>
);

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  video: string;
  screenshots: string[];
  link: string;
  fullDescription: string;
}

export default function Component() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const skills: Skill[] = [
    { name: "Kotlin", icon: <SiKotlin className="h-6 w-6 text-[#7F52FF]" /> },
    { name: "Java", icon: <FaJava className="h-6 w-6 text-[#007396]" /> },
    {
      name: "Android SDK",
      icon: <FaAndroid className="h-6 w-6 text-[#3DDC84]" />,
    },
    {
      name: "Jetpack Compose",
      icon: <SiJetpackcompose className="h-6 w-6 text-[#4285F4]" />,
    },
    {
      name: "Room Database",
      icon: <FaDatabase className="h-6 w-6 text-[#FF8C00]" />,
    },
    { name: "Retrofit", icon: <FaServer className="h-6 w-6 text-[#48B983]" /> },
    {
      name: "React",
      icon: <FaReact className="h-6 w-6 text-[#61DAFB]" />,
    },
    { name: "Git", icon: <FaGitAlt className="h-6 w-6 text-[#F05032]" /> },
    {
      name: "Firebase",
      icon: <SiFirebase className="h-6 w-6 text-[#FFCA28]" />,
    },
    {
      name: "RESTful APIs",
      icon: <FaServer className="h-6 w-6 text-[#00C7B7]" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-6 w-6 text-[#F7DF1E]" />,
    },
    { name: "Swift", icon: <SiSwift className="h-6 w-6 text-[#FA7343]" /> },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Art Gallery",
      description:
        "An app similar to Instagram that allows users to share digital art and comment on them.",
      technologies: ["Swift", "Google account", "Firebase"],
      video: `<iframe a style="width: 100%; height: 56.25vw;"  src="https://youtube.com/embed/THjShw7_Lc0?feature=shared" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      screenshots: [`${artGallery1}`, `${artGallery2}`, `${artGallery3}`],
      link: "https://github.com/SumitGhale/ArtGalleryIOS.git",
      fullDescription:
        "Art Gallery is a dynamic platform designed for digital artists and art enthusiasts. It provides a space where users can showcase their artwork, engage with other artists, and explore a diverse range of digital creations. The app features a user-friendly interface reminiscent of Instagram, making it easy for users to navigate and interact with content. With integrated Google account authentication and Firebase backend, Art Gallery ensures a secure and seamless experience for all users. Whether you're an established artist or just starting your creative journey, Art Gallery offers a vibrant community to share, discover, and appreciate digital art.",
    },
    {
      id: 2,
      title: "Study App",
      description:
        "A smart study app that helps you add subjects, todos and track study sessions using an inbuilt timer service.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Room Database",
        "Notification service",
        "Timer service",
      ],
      video: `<iframe style="width: 100%; height: 56.25vw;"  src="https://www.youtube.com/embed/nM0CEy3_aLg?si=3vmMqJ7w57jNTelb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      screenshots: [`${study1}`, `${study2}`, `${study3}`],
      link: "https://github.com/SumitGhale/Studysmart.git",
      fullDescription:
        "Study App is a comprehensive tool designed to enhance your learning experience and boost productivity. Built with modern Android technologies, this app offers a suite of features to help students organize their studies effectively. Users can easily add and manage subjects, create to-do lists, and track their study sessions with an integrated timer service. The app's intuitive interface, powered by Jetpack Compose, ensures a smooth and responsive user experience. With local data persistence through Room Database, your study data is always at your fingertips. The app also includes a notification service to keep you on track with your study goals and a timer service to manage your study sessions efficiently. Whether you're preparing for exams or managing daily coursework, Study App is your perfect companion for academic success.",
    },
    {
      id: 3,
      title: "Camera X",
      description:
        "A camera app using the CameraX library which directly interacts with the camera hardware rather than calling the default camera app.",
      technologies: ["Kotlin", "CameraX"],
      video: `<iframe 
          src="https://www.youtube.com/embed/FfA5FF8Y7HI?si=jKZIEt1zmYK3mjQM" 
          title="YouTube video player" 
          style="width: 100%; height: 56.25vw;" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>`,
      screenshots: [`${Camera1}`, `${Camera2}`],
      link: "https://github.com/SumitGhale/CameraX.git",
      fullDescription:
        "Camera X is an advanced camera application that leverages the power of Android's CameraX library to provide a superior photography experience. Unlike traditional camera apps that rely on the device's default camera application, Camera X interacts directly with the camera hardware, offering enhanced control and performance. This approach allows for more sophisticated features and better integration with your device's capabilities. Built with Kotlin, the app showcases the potential of modern Android development techniques. Users can enjoy a range of professional-grade camera features, including advanced focus controls, exposure adjustment, and various capture modes. Whether you're a photography enthusiast or a developer looking to understand camera implementations in Android, Camera X offers a blend of functionality and educational value.",
    },
    {
      id: 4,
      title: "WealthGuard",
      description:
        "A chatroom app that allows users to create and join rooms where they can talk to each other in real time.",
      technologies: ["Java", "Room", "XML", "MPAndroidChart"],
      video: ``,
      screenshots: [`${Wealth1}`, `${Wealth2}`, `${Wealth3}`, `${Wealth4}`],
      link: "https://github.com/SumitGhale/WealthGuard.git",
      fullDescription:
        "Chatroom is a real-time messaging application that brings people together in virtual spaces. Built with Kotlin and powered by Firebase, this app offers a seamless and responsive chatting experience. Users can create their own chat rooms or join existing ones, facilitating group discussions on various topics. The app's real-time synchronization ensures that messages are delivered instantly, making conversations flow naturally. With Firebase as the backend, Chatroom benefits from robust security features and scalable infrastructure. The user-friendly interface makes it easy to navigate between different chat rooms and manage your conversations. Whether you're looking to host a study group, coordinate with team members, or just chat with friends, Chatroom provides a versatile platform for all your communication needs.",
    },
    {
      id: 5,
      title: "Chatroom",
      description:
        "A chatroom app that allows users to create and join rooms where they can talk to each other in real time.",
      technologies: ["Kotlin", "Firebase"],
      video: `<iframe style="width: 100%; height: 56.25vw;"  src="https://www.youtube.com/embed/Dnmco7fFIl0?si=G2FMjFu9QqDUEX_H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      screenshots: [`${Chat1}`, `${Chat2}`, `${Chat3}`],
      link: "https://github.com/SumitGhale/Chatroom.git",
      fullDescription:
        "Chatroom is a real-time messaging application that brings people together in virtual spaces. Built with Kotlin and powered by Firebase, this app offers a seamless and responsive chatting experience. Users can create their own chat rooms or join existing ones, facilitating group discussions on various topics. The app's real-time synchronization ensures that messages are delivered instantly, making conversations flow naturally. With Firebase as the backend, Chatroom benefits from robust security features and scalable infrastructure. The user-friendly interface makes it easy to navigate between different chat rooms and manage your conversations. Whether you're looking to host a study group, coordinate with team members, or just chat with friends, Chatroom provides a versatile platform for all your communication needs.",
    },
    {
      id: 6,
      title: "TicTacToe",
      description:
        "Timer Challenge is an engaging online gaming website where users test their timing skills.",
      technologies: ["React", "JavaScript"],
      video: ``,
      screenshots: [`${TicTac1}`, `${TicTac2}`],
      link: "https://github.com/SumitGhale/TicTacToe.git",
      fullDescription:
        "Timer Challenge is an engaging online gaming website where users test their timing skills. Players choose from game modes like Easy or Hard, and their goal is to stop a timer as close as possible to a target time. Scoring is based on accuracy: if the target is 10 seconds and a player stops at 6 seconds, they score 60 points. However, stopping the timer after the target results in a failure, adding a fun layer of challenge and precision to the game!",
    },

    {
      id: 7,
      title: "Timer Challange",
      description:
        "Timer Challenge is an engaging online gaming website where users test their timing skills.",
      technologies: ["React", "JavaScript"],
      video: ``,
      screenshots: [`${Timer1}`, `${Timer2}`],
      link: "https://github.com/SumitGhale/TimerChallange.git",
      fullDescription:
        "Timer Challenge is an engaging online gaming website where users test their timing skills. Players choose from game modes like Easy or Hard, and their goal is to stop a timer as close as possible to a target time. Scoring is based on accuracy: if the target is 10 seconds and a player stops at 6 seconds, they score 60 points. However, stopping the timer after the target results in a failure, adding a fun layer of challenge and precision to the game!",
    },

    {
      id: 8,
      title: "Document Editor",
      description:
        "Document Editor app built for Android! With rich text editing, formatting options, and PDF export, this app lets you create, edit, and save documents with ease. Perfect for users who need a lightweight and intuitive writing tool..",
      technologies: ["Kotlin", "Room database", "itext", "Rich text editor"],
      video: `<iframe 
          src="https://youtube.com/embed/6He_kewocuo?si=SvaBVKHIQTNLHiFB" 
          title="YouTube video player" 
          style="width: 100%; height: 56.25vw;" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>`,
      screenshots: [`${DocumentEditor1}`, `${DocumentEditor2}`],
      link: "https://github.com/SumitGhale/DocumentEditor.git",
      fullDescription:
        "The Document Editor App is a powerful and user-friendly tool designed for creating, editing, and exporting rich-text documents on Android. Built with Jetpack Compose, it features advanced text formatting using the Compose Rich Editor library, seamless data storage with Room, and PDF generation with iText. The app enables users to save documents to device storage, manage permissions effectively, and navigate effortlessly through a clean and modern interface. Perfect for anyone looking for a lightweight yet robust document editing solution!",
    },
  ];

  const renderMainContent = () => (
    <main className="relative container mx-auto px-6 py-12">
      <section className="mb-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-2">
            <TerminalText text="Sumit Ghale" />
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            <TerminalText
              text="3rd yr BIT (Mobile app dev) student"
              delay={30}
            />
          </h2>
          <p className="text-lg mb-6">
            <TerminalText
              text="Passionate about creating innovative Android applications that solve real-world problems. With a strong foundation in Kotlin and Java, I strive to deliver high-quality, user-friendly mobile experiences."
              delay={10}
            />
          </p>
          <div className="flex space-x-4">
            <Button
              variant="default"
              className="bg-gray-800 text-white hover:bg-gray-700"
            >
              <a href="mailto: grgsten@gmail.com">Contact Me</a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-gray-800 border-gray-800 hover:bg-gray-100"
              onClick={() =>
                window.open("https://github.com/SumitGhale", "_blank")
              }
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-gray-800 border-gray-800 hover:bg-gray-100"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/sumit-ghale-4157721a6",
                  "_blank"
                )
              }
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <DirectionAwareHover>
            <img
              src="https://img.freepik.com/premium-vector/it-administrator-with-software-upgrade-process-mobile-digital-system-device-administration-network-upkeeping-smartphone-systems-configuration-concept-system-maintenance-application-vector_37895-623.jpg?w=2000"
              alt="IT Administrator Illustration"
              className="max-w-full h-auto rounded-lg shadow-lg"
              width={400}
              height={400}
            />
          </DirectionAwareHover>
        </div>
      </section>

      <section className="mb-12 bg-white bg-opacity-80 py-12 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-8 text-center relative">
          My Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white rounded-full p-3 mb-2 w-16 h-16 flex items-center justify-center shadow-md">
                {skill.icon}
              </div>
              <span className="text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mb-12 bg-white bg-opacity-80 py-12 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-semibold mb-8 text-center relative">
          About Me
        </h3>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg mb-4">
            I'm a passionate mobile app developer with a focus on Android
            development. Currently in my third year of Bachelor of Information
            Technology, I specialize in creating innovative and user-friendly
            applications that solve real-world problems.
          </p>
          <p className="text-lg mb-4">
            My expertise lies in Kotlin and Java, and I'm well-versed in modern
            Android development practices including Jetpack Compose, MVVM
            architecture, and working with various APIs and databases.
          </p>
          <p className="text-lg">
            I'm always eager to learn new technologies and improve my skills.
            When I'm not coding, you can find me exploring the latest tech
            trends, or brainstorming ideas for my next app.
          </p>
        </div>
      </section>

      <section id="projects">
        <h3 className="text-2xl font-semibold mb-6 text-center relative">
          My Projects
        </h3>
        {projects.map((project, index) => (
          <Card key={index} className="mb-12 bg-white shadow-lg">
            <CardContent className="p-6">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`relative ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden h-[300px]">
                    <img
                      src={project.screenshots[0]}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-200 text-gray-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="bg-gray-800 text-white hover:bg-gray-700"
                      onClick={() => setSelectedProject(project)}
                    >
                      Learn More
                    </Button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="bg-gray-800 text-white hover:bg-gray-700"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );

  const renderProjectDetail = () => {
    if (!selectedProject) return null;

    return (
      <main className="relative container mx-auto px-6 py-12">
        <Button
          variant="link"
          className="mb-6 text-gray-800 hover:text-gray-600 p-0"
          onClick={() => setSelectedProject(null)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>
        <h1 className="text-4xl font-bold mb-8">{selectedProject.title}</h1>
        <div className="mb-12 grid grid-cols-3 gap-4">
          {selectedProject.screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`${selectedProject.title} screenshot ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-200 text-gray-800 text-lg"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>Project Links</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="bg-gray-800 text-white hover:bg-gray-700"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </CardContent>
          </Card>
        </div>
        {selectedProject.video && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Project Demo</h2>
            <div className="w-full aspect-w-16 aspect-h-9">
              <div
                dangerouslySetInnerHTML={{ __html: selectedProject.video }}
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f3ee] to-[#bcb8b1] text-gray-800 font-['League_Spartan',sans-serif]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2Y0ZjNlZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzYgMzRoLTJsMS0xMmgtNmwxIDEyaC0ybDEtMTJoLTZsMSAxMmgtMnYyaDJ2MTJoNnYtMTJoMnYxMmg2di0xMmgydi0yem0tOCAwdi0xMmgydjEyaC0yeiIgZmlsbD0iI2JjYjhiMSIgZmlsbC1vcGFjaXR5PSIwLjQiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
      <Header />
      {selectedProject ? renderProjectDetail() : renderMainContent()}
      <Footer />
    </div>
  );
}
