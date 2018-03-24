export declare interface State {
  projectPath: string
  projectName: string
  pageList: { [index: string]: string }
  selectedPageName: string
}

// payload

export declare interface ProjectPayload {
  projectName: string,
  projectPath: string
}