import {PageContainer} from "../components/PageContainer";
import {VStack, Text} from "@chakra-ui/react";
import React from "react";
import {profile} from "../store/profile";
import {ExternalLinkButton} from "../components/ExternalLinkButton";
import {contactButtonProps} from "../components/contactButtonProps";

const {
  name,
  contactPageMessage
} = profile

const CONTACT_BUTTONS = contactButtonProps

export const ContactPage = () => {

  return <PageContainer heading={name}>
    <Text>{contactPageMessage}</Text>
    <VStack alignItems={'start'}>
      {CONTACT_BUTTONS.map((button, index) => <ExternalLinkButton name={button.name} icon={button.icon} href={button.href} key={`contact-button-${index}`} />)}
    </VStack>
  </PageContainer>
}

