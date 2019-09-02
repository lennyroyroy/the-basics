/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');





class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Lennyroy Codes</h5>
            <a href={this.docUrl('HTML/1-getting-started.html')}>
              Intro to HTML
            </a>
            <a href={this.docUrl('CSS/1-getting-started.html')}>
              Intro to CSS
            </a>
            <a href={this.docUrl('Layout/1-css-layout.html')}>
              Layout
            </a>
            <a href={this.docUrl('intro/intro.html')}>
              HTML Structure
            </a>

            <a href={this.docUrl('intro/intro.html')}>
              CSS Flexbox
            </a>

            <a href={this.docUrl('intro/intro.html')}>
              Responsive Design
            </a>


            <a href={this.docUrl('intro/intro.html')}>
              Review & Final Project
            </a>


          </div>
          <div>
            <h5>Features</h5>
            <a href={this.docUrl('Extras/slide-library', this.props.language)}>
              Slide Library
            </a>
            <a
              href="https://lennyroyroy.github.io/the-basics/docs/Extras/video-library"
              rel="noreferrer noopener">
              Video Library
            </a>
            <a href="https://lennyroyroy.github.io/the-basics/docs/Extras/challenges">Challenges</a>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
          </div>
          <div>
            <h5>Learn More</h5>
            <a href="https://github.com/lennyroyroy/the-basics">GitHub</a>
            <a
              href="https://twitter.com/lennyroyroy"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/lennyroyrobles/"
              target="_blank"
              rel="noreferrer noopener">
              LinkedIn
            </a>
            <a
              href="https://lennyroyroy.github.io/personal-website/"
              target="_blank"
              rel="noreferrer noopener">
              Portfolio
            </a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star lennyroyroy/the-basics on GitHub">
              Star
            </a>
            <div>
            <style dangerouslySetInnerHTML={{__html: ".bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#5c194d !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9px !important;font-size: 14px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Lato', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}" }} /><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet" /><a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/t9FNaoyvY"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee!" /><span style={{marginLeft: '5px'}}>Buy me a coffee!</span></a>
            </div>
          </div>
        </section>


        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
