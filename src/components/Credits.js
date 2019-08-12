import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import {graphql, StaticQuery} from 'gatsby';

const styles = {
  credits: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '0.8em',
  }
}

const query = graphql`
query CreditsQuery {
  site {
    siteMetadata {
      credits {
        name
        url
      }
    }
  }
}`;

class Credits extends Component {
  render() {
    const {data} = this.props;
    const credits = data.site.siteMetadata.credits;
    return (
      <div key={credits.name} style={styles.credits}>
        This site has received great support from <a href={credits.url}>{credits.name}</a>, who inspired its creator.
      </div>
    )
  }
}

export default withStyles(styles) ((props) => (
  <StaticQuery
    query={query}
    render={ (data) => <Credits data={data} {...props}/>}
  />
));
