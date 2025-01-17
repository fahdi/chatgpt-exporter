import sanitize from 'sanitize-filename'
import { timestamp } from './utils'

export function downloadFile(filename: string, type: string, content: string) {
    const blob = new Blob([content], { type })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export function downloadUrl(filename: string, url: string) {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

export function getFileNameWithFormat(format: string, ext: string) {
    const title = sanitize(document.title).replace(/\s+/g, '_')

    return format
        .replace('{title}', title)
        .replace('{timestamp}', timestamp())
        .concat(`.${ext}`)
}
