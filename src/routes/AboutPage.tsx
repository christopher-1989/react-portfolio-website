import {Heading, Text} from '@chakra-ui/react'
import {profile} from '../store/profile'
import React from "react"
import {PageContainer} from "../components/PageContainer"

const {
  name,
  bio,
} = profile

export const ABOUT_PAGE_TITLE = "Bio:"

export default function AboutPage () {
  return <PageContainer heading={name}>
    <Heading as={'h2'} size={'lg'}>{ABOUT_PAGE_TITLE}</Heading>
    {bio.split('\n').map((text, index) => <Text py='3' padding={2} key={`bio-paragraph-${index}`}>{text}</Text>)}
  </PageContainer>
}
