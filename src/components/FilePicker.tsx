import { useRef, useCallback } from "react"
interface FilePickerProps<T> {
    children: React.ReactNode,
    as: 'json' | 'text' | 'buffer'
    onChange: (files: FileElement<T>[]) => void,
    style?: object,
    multiple?:boolean
}
export interface FileElement<T> {
    data: Buffer | object | string | T,
    file: File
}
export function FilePicker<T>({ children, onChange, style = {}, as, multiple = false }: FilePickerProps<T>) {
    const input = useRef<HTMLInputElement>(null)

    const handleEvent = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files === null) return 
        const promises: Promise<FileElement<T>>[] = Array.from(event.target.files).map((file: File) => {
            return new Promise(resolve => {
                const fileReader = new FileReader()
                function handleLoad(){
                    const value = fileReader.result as any
                    resolve({
                        data: as === 'json' ? JSON.parse(value) : value,
                        file: file
                    })
                }
                fileReader.addEventListener('loadend',handleLoad,{once: true})
                if (as === 'text' || as === 'json') fileReader.readAsText(file)
                if (as === 'buffer') fileReader.readAsArrayBuffer(file)
            })
        })
        onChange(await Promise.all(promises))
        if(input.current !== null) input.current.value = ''
    }, [as, onChange])

    return <>
        <input type='file' style={{ display: 'none' }} ref={input} onChange={handleEvent} multiple={multiple}/>
        <div onClick={() => input.current?.click()} style={style}>
            {children}
        </div>
    </>
}