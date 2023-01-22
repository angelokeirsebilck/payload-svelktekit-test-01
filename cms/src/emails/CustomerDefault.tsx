import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import * as React from "react";
import { render } from "@react-email/render";
import parse from "html-react-parser";

export default function CustomerDefault({
  text,
  companyInfo,
}: {
  text: string;
  companyInfo: any;
}) {
  return (
    <Html>
      <Head />
      <Preview>You updated the password for your Twitch account</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section
            style={{
              paddingTop: "24px",
              paddingBottom: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Img width={200} src={companyInfo?.logo?.url}></Img>
          </Section>
          <Section
            style={{
              padding: "24px",
              paddingTop: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {parse(text)}
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  width: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 50px 10px 60px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

const iconsSocial = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 15,
};

const link = {
  textDecoration: "underline",
};

export const emailCustomerDefault = (text: string, companyInfo: any) => {
  return render(<CustomerDefault text={text} companyInfo={companyInfo} />, {
    pretty: true,
  });
};
