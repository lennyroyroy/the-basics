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
        <small>{siteConfig.tagline_display}</small>
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
        <Logo img_src={`${baseUrl}img/LR-white@2x.png`} />
        <div className="inner sidebyside">
          <ProjectTitle siteConfig={siteConfig} />
          <div className="sidebyside2">
          <PromoSection>
             <Button href={docUrl('Introduction/Introduction')}>Start Online Course</Button>
          </PromoSection>
          <PromoSection>
          <Button href="https://slides.com/lennyroyroy/deck-3#/" target="_blank">Start Live Course</Button>
          </PromoSection>
           </div>
            <a href="#learn-more-scroll" className="button learn-more-home">About The Course</a>
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
        <h2 id="learn-more">Course Description</h2>
        <MarkdownBlock>This 8-week course will take a close look at how HTML & CSS work together to build engaging websites. Each class will be taking a deep dive into web development basics. Exploring everything from centering images to using CSS gradients and organizing content with Flexbox. There will also be optional at-home resources to push your web development skills to the next level! If you have written a single line of HTML and have an email address, this course will be perfect for you.</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis faucibus aliquam. Vivamus vel convallis velit, sit amet malesuada sem. Nam posuere mattis sodales. Duis mattis rutrum est, at ultrices nunc semper et. Nullam et diam placerat nulla ultrices tempor. Sed interdum elit nec dictum rutrum. ',
            image: `https://raw.githubusercontent.com/lennyroyroy/basics-image/master/work.png`,
            imageAlt: 'Screen shot of a challenge for this course. There is code in the image as a well as a view of the Glitch interface',
            imageAlign: 'left',
            title: 'Over 50 in-lesson challenges to test your new skills! ',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'Over 10 hours of course content spanning from early HTML to responsive design.<br><br>lorem',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: ' Course Overview',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="dark">
        {[
          {
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis faucibus aliquam. Vivamus vel convallis velit, sit amet malesuada sem. Nam posuere mattis sodales. Duis mattis rutrum est, at ultrices nunc semper et. Nullam et diam placerat nulla ultrices tempor. Sed interdum elit nec dictum rutrum. Mauris quis turpis bibendum, volutpat leo ac, congue tortor. Sed vehicula interdum molestie. Nunc dapibus urna pellentesque diam varius tempus..',
            image: `https://raw.githubusercontent.com/lennyroyroy/basics-image/master/homepage.png`,
            imageAlign: 'right',
            title: 'Each lesson has a video tutorial to help you through your coding journey.',
            imageAlt: 'Screen shot of a YouTube video. The image contains a small picture of the instructor Lennyroy Robles. This is the first video in the HTML series.',
          },
        ]}
      </Block>


    );

    const Features = () => (
      <Block layout="fourColumn" id="learn-more-scroll">
        {[
          {
            content: 'Learn all about the <a onClick={this.handleClick} href="/the-basics/docs/HTML/1-getting-started.html" class="links">building blocks</a> of web development! We will be diving deep in HTML Tags and structure in this lesson.',
            image: `${baseUrl}img/undraw_voice_interface.svg`,
            imageAlign: 'top',
            title: 'HTML Foundations',
          },
          {
            content: 'Learn all about how to add styling to your HTML Documents. In this <a onClick={this.handleClick} href="/the-basics/docs/HTML/1-getting-started.html" class="links">series of lessons</a>, we dive deep into CSS properties and values.',
            image: `${baseUrl}img/undraw_online_resume.svg`,
            imageAlign: 'top',
            title: 'Exploring CSS',
          },
          {
            content: 'Adjust your projects to be modern and responsive to different devices. <a onClick={this.handleClick} href="/the-basics/docs/HTML/1-getting-started.html" class="links">In this lesson</a> you will learn how to make sites for iphones and tablets.',
            image: `${baseUrl}img/undraw_bookmarks.svg`,
            imageAlign: 'top',
            title: 'Responsive Design',
          },
          {
            content: 'Join me to learn the basics of web development! By the end of this 10+ hour course you will have a firm grasp on the modern web! <a onClick={this.handleClick} href="/the-basics/docs/Introduction/Introduction" class="links">Ready to begin?</a>',
            image: `${baseUrl}img/undraw_voice_interface.svg`,
            imageAlign: 'top',
            title: 'Learn the Basics!',
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
          <a href={user.infoLink} key={user.infoLink} target="_blank">
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Built with ❤️</h2>
          <p>This course is was built using a collection of online tools designed to make coding easier for beginners.</p>
          <div className="logos">{showcase}</div>
          <div className="more-users logo-message">
           <a className="button" href={pageUrl('users.html')}>
              Special Thanks
            </a> 
          </div>
        
          <div className="testimonials">
            <Container padding={['bottom', 'top']}>
              <GridBlock
                align="center"
                contents={[
                  {
                    content:
                      "*\"I personally believe that anyone who wants to learn coding should have access to the resources available to do so. Computer science and the economic opportunities it affords are crucial in today's economy, and introducing more young women and P.O.C to coding is a lifelong passion of mine.\"*",
                    image: `https://s3.amazonaws.com/media-p.slid.es/uploads/1075364/images/6495706/IMG_0433.JPG.jpg`,
                    imageAlign: 'top',
                    imageAlt: 'Lennyroy Robles',
                    title:
                      'Lennyroy Robles <br/><font size="2">Instructor</font>',
                  },
                ]}
                layout="threeColumn"
              />
            </Container>
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


