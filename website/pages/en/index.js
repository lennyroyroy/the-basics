/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
             <Button href={docUrl('intro/intro.html')}>Get Started!</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Lorem Ipsum</h2>
        <MarkdownBlock> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis faucibus aliquam. Vivamus vel convallis velit, sit amet malesuada sem. Nam posuere mattis sodales.</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis faucibus aliquam. Vivamus vel convallis velit, sit amet malesuada sem. Nam posuere mattis sodales. Duis mattis rutrum est, at ultrices nunc semper et. Nullam et diam placerat nulla ultrices tempor. Sed interdum elit nec dictum rutrum. ',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Lorem ipsum dolor sit amet',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis faucibus aliquam. Vivamus vel convallis velit, sit amet malesuada sem. Nam posuere mattis sodales. Duis mattis rutrum est, at ultrices nunc semper et. Nullam et diam placerat nulla ultrices tempor. Sed interdum elit nec dictum rutrum. ',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: ' Course Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis faucibus aliquam. Vivamus vel convallis velit, sit amet malesuada sem. Nam posuere mattis sodales. Duis mattis rutrum est, at ultrices nunc semper et. Nullam et diam placerat nulla ultrices tempor. Sed interdum elit nec dictum rutrum. Mauris quis turpis bibendum, volutpat leo ac, congue tortor. Sed vehicula interdum molestie. Nunc dapibus urna pellentesque diam varius tempus..',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Lorem ipsum dolor sit amet',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Learn HTML, CSS & JavaScript!',
            image: `${baseUrl}img/undraw_voice_interface.svg`,
            imageAlign: 'top',
            title: 'HTML & CSS',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_professor_8.svg`,
            imageAlign: 'top',
            title: 'JavaScript',
          },
          {
            content: 'The content of my Third feature',
            image: `${baseUrl}img/undraw_responsiveness.svg`,
            imageAlign: 'top',
            title: 'Responsive',
          },
                 {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_static_assets.svg`,
            imageAlign: 'top',
            title: 'The Basics!',
          },


        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Lorem Ipsum</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis faucibus aliquam. Vivamus vel convallis velit, sit amet malesuada sem. Nam posuere mattis sodales.</p>
          {/*<div className="logos">{showcase}</div>*/}
          <div className="more-users">
{/*            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>*/}
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
