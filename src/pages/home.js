import React from "react";
import { JumbotronContainer } from "../containers/jumbotron";
import { Feature, OptForm } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";

export default function Home() {
  return (
    <>
      <HeaderContainer className="home1">
        <Feature>
          <span className="main-home">
            <span className="home-title">
              Unlimited movies, TV shows and more
            </span>
            <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
            <p className="third-para">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <OptForm>
              <OptForm.Break />
              <OptForm.Input placeholder="Email address" className="ph-email" />
              <OptForm.Button className="gs-btn">
                <span className="get_started_font">Get Started</span>
              </OptForm.Button>
              <OptForm.Break />
            </OptForm>
          </span>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
