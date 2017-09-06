import React from 'react';
import { init } from 'ityped';
import '../style/ityped.less';

export default class SplashPage extends React.Component {
  componentDidMount() {
    init(this.refs.ityped, {
      strings:['Jay Chang :)'],
      startDelay: 400,
      backDelay: 3600,
      loop: true
    });
  }

  render() {
    const styles =
      {
        'height': '100vh',
        'display':'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
      }

    return (
      <section className='Welcome' style={styles}>
        <div><span className='typed' ref='ityped' /></div>
      </section>
    );
  }
}
