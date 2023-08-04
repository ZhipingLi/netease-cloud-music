/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from "react"
import type { ReactNode } from "react"

interface IProps {
  children?: ReactNode
}
interface IState {}

class Template extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  render(): ReactNode {
    return <div>Template</div>
  }
}

class AbbrTemplate extends PureComponent<IProps, IState> {
  state = {}

  render(): ReactNode {
    return <div>AbbrTemplate</div>
  }
}

interface ISnapshot {}

class SnapshotTemplate extends PureComponent<IProps, IState, ISnapshot> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
    return {}
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: ISnapshot | undefined): void {}

  render(): ReactNode {
    return <div>SnapshotTemplate</div>
  }
}

export default Template
export { AbbrTemplate, SnapshotTemplate }
