import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Code,
  Database,
  Server,
  Layout,
  Zap,
  GitBranch,
} from "lucide-react";

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const skills = [
    { name: "Kotlin", icon: <Code className="h-6 w-6" /> },
    { name: "Java", icon: <Code className="h-6 w-6" /> },
    { name: "Android SDK", icon: <Smartphone className="h-6 w-6" /> },
    { name: "Jetpack Compose", icon: <Layout className="h-6 w-6" /> },
    { name: "Room Database", icon: <Database className="h-6 w-6" /> },
    { name: "Retrofit", icon: <Server className="h-6 w-6" /> },
    { name: "MVVM Architecture", icon: <Layout className="h-6 w-6" /> },
    { name: "Git", icon: <GitBranch className="h-6 w-6" /> },
    { name: "Firebase", icon: <Zap className="h-6 w-6" /> },
    { name: "RESTful APIs", icon: <Server className="h-6 w-6" /> },
  ];

  const projects = [
    {
      title: "Art Gallery",
      description:
        "An app simmilar to instagram that allows user to share digital art comment on them.",
      technologies: ["Swift", "Google account", "Firebase"],
      video: `<iframe width="560" height="315" src="https://youtube.com/embed/THjShw7_Lc0?feature=shared" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      link: "https://github.com/SumitGhale/ArtGalleryIOS.git",
    },
    {
      title: "Study App",
      description:
        "A smart study app that helps you add subjects todos and track study session using inbuilt timer service.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Room Database",
        "Notification service",
        "Timer service",
      ],
      video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nM0CEy3_aLg?si=3vmMqJ7w57jNTelb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      images: [
        "https://picsum.photos/seed/fit1/300/600",
        "https://picsum.photos/seed/fit2/300/600",
        "https://picsum.photos/seed/fit3/300/600",
      ],
      link: "https://github.com/SumitGhale/Studysmart.git",
    },
    {
      title: "Camera X",
      description:
        "An camera app using camera x library which directly contacts with the camera hardware rather than calling default camera app.",
      technologies: ["Kotlin", "CameraX "],
      video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/FfA5FF8Y7HI?si=jKZIEt1zmYK3mjQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      link: "https://github.com/SumitGhale/CameraX.git",
    },
    {
      title: "Chatroom",
      description:
        "A chatroom app that allows user to create and join rooms where they can talk to each other in real time.",
      technologies: ["Kotlin", "Firebase"],
      video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Dnmco7fFIl0?si=G2FMjFu9QqDUEX_H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      link: "https://github.com/SumitGhale/Chatroom.git",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-['League_Spartan',sans-serif]">
      <header className="bg-primary text-primary-foreground w-full">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                abc@gmail.com
              </span>
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-black rounded-full text-xs px-3 py-1"
              >
                <FileText className="h-3 w-3 mr-1" />
                CV
              </Button>
            </div>
            <nav className="space-x-4">
              <Button size="sm">About</Button>
              <Button size="sm">Projects</Button>
              <Button size="sm">Contact</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-12 flex flex-col items-center">
          <img
            src="https://picsum.photos/seed/profile/200/200"
            alt="John Doe"
            className="rounded-full mb-6"
            width={200}
            height={200}
          />
          <p className="text-xl text-center max-w-2xl mb-6">
            Hi, I'm John Doe, a third-year BIT student specializing in Mobile
            App Development. I'm passionate about creating innovative Android
            applications that solve real-world problems. With a strong
            foundation in Kotlin and Java, I strive to deliver high-quality,
            user-friendly mobile experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-black text-white"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-black text-white"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </section>

        <section className="mb-12 bg-black text-white py-12 rounded-lg">
          <h3 className="text-2xl font-semibold mb-8 text-center">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white text-black rounded-full p-3 mb-2 w-12 h-12 flex items-center justify-center">
                  {skill.icon}
                </div>
                <span className="text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            My Projects
          </h3>
          {projects.map((project, index) => (
            <Card key={index} className="mb-12">
              <CardContent className="p-6">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="relative">
                    <div className="relative overflow-hidden h-[300px]">
                      <div
                        dangerouslySetInnerHTML={{ __html: project?.video }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="bg-black text-white self-start"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="bg-white text-black">
              <Mail className="h-4 w-4 mr-2" />
              Email Me
            </Button>
            <Button variant="outline" className="bg-white text-black">
              <Smartphone className="h-4 w-4 mr-2" />
              Call Me
            </Button>
            <Button variant="outline" className="bg-white text-black">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
