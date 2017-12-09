import * as React from "react";

export interface HelloProps { target: string; }

class Hello extends React.Component<HelloProps, {}> {
	public render(): JSX.Element {
		return <div>Hello { this.props.target }!</div>;
	}
}

export default Hello;

