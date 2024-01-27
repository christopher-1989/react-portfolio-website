import {LinkButtonProps} from "../components/LinkButton"
import {FaAppStore, FaGithub, FaGooglePlay} from "react-icons/fa"
import android from '../assets/img/android-cookbook.png'
import ios from '../assets/img/ios-cookbook.png'
import hourglass from '../assets/img/hourglass-app-store.png'
import portfolio from '../assets/img/react-chakra-portfolio.png'

export type Project = {
  name: string
  description: string
  link1: LinkButtonProps
  link2?: LinkButtonProps
  thumbnail: string
  thumbnailAlt: string
  keySkills: string
}
export const projects: Project[] = [
  {
    name: '[iOS] Hourglass 3D',
    description: "An app inspired by the need to help toddlers transition between tasks. This iOS version was a first attempt at 3D using Swift, after having created a similar version using threeJS",
    link1: {
      name: "View in App Store",
      icon: <FaAppStore/>,
      href: 'https://apps.apple.com/au/app/hourglass-3d/id6475616853'
    },
    link2: {
      name: "Hourglass",
      icon: <FaAppStore/>,
      href: "src/assets/vid/hourglass-no-timer.mp4"
    },
    thumbnail: hourglass,
    thumbnailAlt: 'iOS mobile app',
    keySkills: "TypeScript, React, React Native, Expo, Redux, native APIs, AWS Lambda, AWS Gateway, AWS DynamoDB, App Store"
  },
  {
    name: '[iOS] recipeme - the pocket cookbook',
    description: "A self driven project to develop a recipe/cookbook app. \nThe objective was to learn React Native and learn the end2end process for deploying an application to the App Store as well as meeting my personal requirements for cooking. \nThe development process used Behaviour Driven Development enabled by Expo's live preview feature. \nTo enable users to share recipes an AWS backend was used. Initially the backend was written in Kotlin, however some of the features in AWS SDK were in Beta and therefore Node/JS was used. Testing for the backend was done using Postman.",
    link1: {
      name: "View in App Store",
      icon: <FaAppStore/>,
      href: 'https://apps.apple.com/au/app/recipeme-the-pocket-cookbook/id1616346969'
    },
    link2: {
      name: "recipeme demo",
      icon: <FaAppStore/>,
      href: "src/assets/vid/share-recipe.mp4"
    },
    thumbnail: ios,
    thumbnailAlt: 'iOS mobile app',
    keySkills: "TypeScript, React, React Native, Expo, Redux, native APIs, AWS Lambda, AWS Gateway, AWS DynamoDB, App Store"
  },
  {
    name: '[android] recipeme - the pocket cookbook',
    description: "Similar to the iOS application, the motivation for this version of the application to learn the end2end process for deploying an application to the Play Store. \nAs the recipeme app was developed in React Native, most of the components and functions were reusable for both iOS and android. There were examples of components in the React Native API that did require changing as they were specific to iOS - such as the 'ActionSheet'",
    link1: {
      name: "View in Play Store",
      icon: <FaGooglePlay/>,
      href: 'https://play.google.com/store/apps/details?id=com.crobinmcdonald.recipeme'
    },
    thumbnail: android,
    thumbnailAlt: 'android mobile app',
    keySkills: "TypeScript, React, React Native, Expo, Redux, native APIs, AWS Lambda, AWS Gateway, AWS DynamoDB, Play Store"
  },
  {
    name: 'Portfolio website',
    description: "This website was designed using mobile first, responsiveness and accessibility as priorities.\nIt showcases a clean design using React 18, React Router and Chakra UI. It was developed using TDD with Jest and React Testing Library - to see tests, refer to the source code on GitHub via the link. There was no need for Server Side Rendering for this application.",
    link1: {
      name: "View source code",
      icon: <FaGithub/>,
      href: 'https://github.com/christopher-1989/react-portfolio-website'
    },
    thumbnail: portfolio,
    thumbnailAlt: 'portfolio screenshot',
    keySkills: "TypeScript, React, TDD, Jest, React Testing Library"
  },
]
