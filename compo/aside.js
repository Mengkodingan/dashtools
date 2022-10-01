import Footer from '../compo/footer'
import Link from 'next/link'
import React from 'react'

export default function Aside({ children }) {
    const [open, setOpen] = React.useState(false);

    function sidebarControl() {
      setOpen(!open);

      if(open) {
        document.querySelector('#aside').classList.remove("-translate-x-full")
      document.querySelector('#aside').classList.add("bg-base-100");
      document.querySelector('#mainDiv').classList.remove("-ml-64");
      document.querySelector('#sidebarButton').innerHTML = `
        <svg class="h-6 w-6" fill="rgb(107 114 128)" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgb(107 114 128)" stroke="rgb(107 114 128)" strokeWidth="2" d="M3,3 L21,21 M3,21 L21,3"/>
        </svg>
      `
      } else {
        document.querySelector('#aside').classList.add("-translate-x-full")
      document.querySelector('#aside').classList.remove("bg-base-100");
    document.querySelector('#mainDiv').classList.add("-ml-64");
    document.querySelector('#mainDiv').classList.add("-ml-64");
    document.querySelector('#sidebarButton').innerHTML = `
        <svg class="h-6 w-6" fill="rgb(107 114 128)" width="52px" height="52px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
          <path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
          <path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
        </svg>
      `
      }

    }

    return (
        <>
        <div className="flex flex-row min-h-screen">
        <aside id="aside" className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in">
          <div className="sidebar-header flex items-center justify-center py-4">
            <div className="inline-flex">
              <a href="#" className="inline-flex flex-row items-center">
                <svg className="w-10 h-10 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z" clipRule="evenodd"></path>
                </svg>
                <span className="leading-10 text-2xl font-bold ml-1 uppercase">Mengkodingan</span>
              </a>
            </div>
          </div>
          <div className="sidebar-content px-4 py-6">
            <ul className="flex flex-col w-full">
              <li className="my-px">
              <Link href="/">
              <a href="/" className="flex flex-row items-center h-10 px-3 rounded-lg hover:bg-gray-100 hover:text-gray-700">
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </span>
              <span className="ml-3">Dashboard</span>
            </a>
              </Link>
              </li>
              <li className="my-px">
                <span className="flex font-medium text-sm  px-4 my-4 uppercase">Instagram</span>
              </li>
              <li className="my-px">
                <Link href="/instagram/details">
                    <a className="flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:text-gray-700">
                        <span className="flex items-center justify-center text-lg text-gray-400">
                            <i className="fa-brands fa-instagram"></i>
                        </span>
                        <span className="ml-3">Account Details</span>
                    </a>
                </Link>
              </li>
              <li className="my-px">
                <a href="/api/text" className=" flex flex-row items-center h-10 px-3 rounded-lg  hover:bg-gray-100 hover:text-gray-700">
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <i className="fa-solid fa-text-height"></i>
                  </span>
                  <span className="ml-3">Text</span>
                  <span className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">10</span>
                </a>
              </li>
              
            </ul>
          </div>
        </aside>
        <main id="mainDiv" className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <header className="header shadow py-4 px-4">
            <div className="header-content flex items-center flex-row">
            <div className="flex md:hidden" id="sidebarControl">
            <button className="flex items-center justify-center h-10 w-10 border-transparent" id="sidebarButton" onClick={sidebarControl}>
              <svg className="h-6 w-6" fill="rgb(107 114 128)" width="52px" height="52px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
                <path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
                <path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/>
              </svg>
            </button>
          </div>
    
              <div className="flex ml-auto mr-1">
			  <div className="badge badge-warning gap-2 font-bold">
				  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
				  This is a bad app and is still in development
			  </div>
              
              </div>
    
            </div>
          </header>
    
          <div className="main-content flex flex-col flex-grow p-4">
          {children}
    
          <Footer></Footer>
    
    
        </div>
        </main>
      </div>
        </>
    )
}