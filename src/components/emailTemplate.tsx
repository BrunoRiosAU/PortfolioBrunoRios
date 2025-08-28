import {
  Body,
  Head,
  Html,
  Text,
} from '@react-email/components';
import * as React from 'react'

interface EmailTemplateProps {
  name?: string;
  surname?: string;
  email?: string;
  text?: string;
}

export const EmailTemplate = ({
  name, surname, email, text
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body>
      <Text>From: <strong>{name} {surname}</strong></Text>
      <Text>Email: <strong>{email}</strong></Text>
      <Text>{text}</Text>
    </Body>
  </Html>
);

EmailTemplate.PreviewProps = {
  name: 'yo',
  surname: 'yo2',
  email: 'sexo@sexo.com',
  text: 'hola papu'
} as EmailTemplateProps;

export default EmailTemplate;
