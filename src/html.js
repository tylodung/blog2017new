import React from 'react';
import PropTypes from 'prop-types';
import Component from 'react';

const BUILD_TIME = new Date().getTime();

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  };

  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css'),
          }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-idhere",
    enable_page_level_ads: true
  });
</script>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {this.props.headComponents}
          {css}

          
        </head>
        <body >
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
