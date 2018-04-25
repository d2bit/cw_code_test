import React from 'react'

class Info extends React.PureComponent {
  render() {
    return <pre>{JSON.stringify(this.props.data, null, 2)}</pre>
  }
}

export default Info
