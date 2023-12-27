'use client'
import { codeSnippets, fonts, languages } from '@/app/(root)/options'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import hljs from 'highlight.js'
import React from 'react'
import Editor from 'react-simple-code-editor'
import useStore from '@/app/(root)/store'
import flourite from 'flourite'
const CodeEditor = () => {
    const store = useStore()


    useEffect(() => {
        const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        useStore.setState(randomCode)
    }, [])

    useEffect(() => {
        if (store.autoDetectLanguage) {
            const { language } = flourite(store.code, { noUnknown: true })
            useStore.setState({
                language: language.toLowerCase() || 'plaintext'
            })
        }
    }, [store.autoDetectLanguage, store.code])



    return (
        <div className={cn("min-w-[400px] border-2 rounded-xl shadow-2xl",
            store.darkMode ?
                "bg-black/75 border-gray-600/40" :
                "bg-white/75 border-gray-200/20"
        )}
        // onClick={() => useStore.setState({ darkMode: !store.darkMode })}
        >
            <header className="grid grid-cols-6 gap-3 items-center px-4 py-3">
                <div className='flex gap-1.5'>
                    <div className="rounded-full h-3 w-3 bg-red-500" />
                    <div className="rounded-full h-3 w-3 bg-yellow-500" />
                    <div className="rounded-full h-3 w-3 bg-green-500" />
                </div>
                <div className="col-span-4 flex justify-center">
                    <input
                        type="text"
                        value={store.title}
                        spellCheck={false}
                        onClick={(e) => e.target.select()}
                        onChange={(e) => useStore.setState({ title: e.target.value })}
                        className='bg-transparent text-center text-gray-400 text-sm font-medium focus:outline-none' />

                </div>
            </header>
            <div className={cn('px-4 pb-4', store.darkMode ? "brightness-110" : "text-gray-800 brightness-50 saturate-200 contrast-200")}>
                <Editor value={store.code}
                    onValueChange={code => useStore.setState({ code })}
                    highlight={code => hljs.highlight(code, { language: store.language || 'plaintext' }).value}
                    style={{
                        fontFamily: fonts[store.fontStyle].name,
                        fontSize: 18
                    }}
                    textareaClassName='focus:outline-none'
                    onClick={(e) => e.target.select()}

                />
            </div>
        </div>
    )
}

export default CodeEditor