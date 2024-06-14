import React from "react";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id} className="accord">
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <span className="box1">
        <p className="para">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <OptForm className="optform-css">
          <OptForm.Break />
          <OptForm.Input placeholder="Email address" className="ph-email" />
          <OptForm.Button className="gs-btn">
            <span className="get_started_font">Get Started</span>
          </OptForm.Button>
          <OptForm.Break />
        </OptForm>
      </span>
    </Accordion>
  );
}
