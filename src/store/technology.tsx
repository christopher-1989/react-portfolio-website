import {ReactElement} from "react"
import {
  SiApachekafka,
  SiAuth0,
  SiElasticsearch,
  SiExpo,
  SiIntellijidea,
  SiJest,
  SiKotlin,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiRabbitmq,
  SiReactrouter,
  SiTypescript,
  SiVisualstudiocode,
  SiXcode
} from "react-icons/si"
import {FaAppStore, FaGithub, FaGooglePlay, FaAws,
  FaJava,
  FaJs,
  FaMicrosoft,
  FaPython,
  FaReact,
  FaSwift} from "react-icons/fa"

export type Technology = {
  name: string
  icon: ReactElement
}

export const technologies: Technology[] = [
  {
    name: "AWS Cloud",
    icon: <FaAws size={50} />
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={50} />
  },
  {
    name: "JavaScript",
    icon: <FaJs size={50} />
  },
  {
    name: "React",
    icon: <FaReact size={50} />
  },
  {
    name: 'Kotlin',
    icon: <SiKotlin size={50} />
  },
  {
    name: "Java",
    icon: <FaJava size={50} />
  },
  {
    name: "Python",
    icon: <FaPython size={50} />
  },
  {
    name: "Swift/SwiftUI",
    icon: <FaSwift size={50} />
  },
  {
    name: "GitHub",
    icon: <FaGithub size={50} />
  },
  {
    name: "Azure AD",
    icon: <FaMicrosoft size={50} />
  },
  {
    name: "Auth0",
    icon: <SiAuth0 size={50} />
  },

  {
    name: "Expo",
    icon: <SiExpo size={50} />
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={50} />
  },
  {
    name: "MySQL/Postgres",
    icon: <SiPostgresql size={50} />
  },
  {
    name: "Postman/Insomnia",
    icon: <SiPostman size={50} />
  },
  {
    name: "Rabbit MQ",
    icon: <SiRabbitmq size={50} />
  },
  {
    name: "Kafka",
    icon: <SiApachekafka size={50} />
  },
  {
    name: "Elastic/Kibana",
    icon: <SiElasticsearch size={50} />
  },
  {
    name: "App Store",
    icon: <FaAppStore size={50} />
  },
  {
    name: "Play Store",
    icon: <FaGooglePlay size={50} />
  },
  {
    name: "Intellij",
    icon: <SiIntellijidea size={50} />
  },
  {
    name: "VSC",
    icon: <SiVisualstudiocode size={50} />
  },
  {
    name: "XCode",
    icon: <SiXcode size={50} />
  },
  {
    name: 'React Router',
    icon: <SiReactrouter size={50} />
  },
  {
    name: 'Jest',
    icon: <SiJest size={50} />
  }
]
