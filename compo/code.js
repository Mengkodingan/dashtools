import { useEffect } from "react"
import Prism from "prismjs"
import "prismjs/components/prism-json";
import { Tab } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Code({ lang, children }) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			Prism.highlightAll();
		}
	}, []);

    return (
        <>
			<div className='flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden'>
	            <div className="mockup-code">
				  <pre className={'language-' + lang}><code id='code'>{children}</code></pre>
				</div>
			</div>
        </>
    )
}
