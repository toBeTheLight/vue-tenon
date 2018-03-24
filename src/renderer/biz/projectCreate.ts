import { remote } from 'electron'
import * as fs from 'fs'

interface dirPath {
  path: string,
  isEmpty: boolean
}
export const selectDirPath = ():Promise<dirPath> => {
  return new Promise((resolve, reject) => {
    remote.dialog.showOpenDialog({
      properties: ['openDirectory', 'createDirectory']
    },  (paths: string[]) => {
      if (paths && paths.length) {
      let children = fs.readdirSync(paths[0])
      resolve({
        path: paths[0],
        isEmpty: children.length === 0
      })
    }
    })
  })
}

export const projectPathPassed = (path: string):boolean => {
  return path !== ''
}

export const projectNamePassed = (name: string):boolean => {
  return /^[a-zA-Z][a-zA-Z0-9]{0,19}$/.test(name)
}
