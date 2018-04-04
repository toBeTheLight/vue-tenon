import { remote } from 'electron'
import * as fs from 'fs'

export const selectDirPath = () => {
  return new Promise((resolve, reject) => {
    remote.dialog.showOpenDialog({
      properties: ['openDirectory', 'createDirectory']
    },  paths => {
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

export const projectPathPassed = path => {
  return path !== ''
}

export const projectNamePassed = name => {
  console.log()
  return /^[a-zA-Z][a-zA-Z0-9]{0,19}$/.test(name)
}
