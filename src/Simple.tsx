import * as React from 'react';

export interface IAppProps {
}

export default class Simple extends React.Component<IAppProps> {
  public render() {
    return (
      <div style={{color:'red'}}>
        Hello
      </div>
    );
  }
}
