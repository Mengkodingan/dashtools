import Aside from '../../compo/aside'
import Breadcrumbs from '../../compo/breadcrumbs'
import Image from 'next/image'
import imageLoader from '../../compo/imageloader.js'
import Code from '../../compo/code'

export default function InstagramDetails() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    btnSubmit(async() => {
      let u = e.target.username.value;
      u.startsWith("@") ? u = u.slice(1) : u = u;
      const getd = await fetch('/api/instagram/igstalk?u=' + u)
      let data = await getd.json();
      if(!data.graphql) {
        cuteAlert({
            type: 'error',
            title: 'user not found!',
            message: `No account with username <b>${u}</b>!`
        })
      } else {
        let a = data.graphql.user;

      document.getElementById('code').innerHTML = JSON.stringify(data, null, 2)
      Prism.highlightAll();

      Object.keys(a).map((d) => {
        if(document.getElementById('d.' + d)) {
          console.log('d.' + d + " =>", a[d])
          if(d !== 'profile_pic_url_hd') {
            if(a[d] !== null && a[d].count >= 0) {
              document.getElementById('d.' + d).innerHTML = a[d].count;
            } else {
              if(d === 'is_private' || d === 'is_verified') {
                a[d] ? document.getElementById('d.' + d).classList.remove('hidden') : document.getElementById('d.' + d).classList.add('hidden')
              } else {
                document.getElementById('d.' + d).innerHTML = d === 'external_url'? a[d] !== null ?  `<i class="fa-solid fa-link"></i> <a href="${a[d]}" class='hover:text-primary' target="_blank">${a[d]}</a>` : '' : d === 'full_name'? a[d].length === 0 ? '' : `<i class='fa-solid fa-user'></i> ${a[d]}` : a[d]
              }
            }
          } else {
              document.getElementById('d.' + d).setAttribute('src', '/api/imageProxy?url=' + encodeURIComponent(a[d]))
          }
        }
      })
      document.getElementById('val').classList.remove('hidden')
      }
    })
  }

  return (
    <>
      <Aside>
        <Breadcrumbs>
          <li><a>Instagram</a></li>
          <li><a>Account Details</a></li>
        </Breadcrumbs>
    
          <form onSubmit={handleSubmit} className='flex justify-center my-10'>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Username *</span>
              </label>
            <div className="input-group">
              <input type="text" placeholder="jstn.lt" name="username" className="input input-bordered" required/>
              <button className="btn btn-square" id="btnsubmit">
                <svg id="btnsubmitsvg" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
          </form>

          <div id='val' className='flex justify-center rounded hidden'>
          <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                          <div className="md:flex grid-cols-1 md:grid-cols-0 mb-5">
                            <Image className='rounded-full' width={80} height={80} loader={imageLoader} id='d.profile_pic_url_hd' src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt='profile pictures'></Image>
                    <div className='ml-5'>
                    <p className='text-xl font-bold'>
                      <span id='d.username'></span>

                      <span className="tooltip hidden" data-tip="Verified Account" id="d.is_verified">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block text-indigo-500 ml-2 w-6 h-6">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                      </span>
                      
                      <span className="tooltip hidden" data-tip="Private Account" id="d.is_private">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block text-red-500 ml-2 w-6 h-6">
                          <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                          <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                          <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                        </svg>
                      </span>

                      <span className='text-xs text-gray-500 mx-2' id='d.full_name'></span>
                      <span className='text-xs text-gray-500' id='d.external_url'></span>
                    </p>
                    <p className='flex justify-between'>
                      <span><strong id='d.edge_owner_to_timeline_media'></strong> posts</span>
                      <span><strong id='d.edge_followed_by'></strong> followers</span>
                      <span><strong id='d.edge_follow'></strong> following</span>
                    </p>
                    <p className='mt-2' id='d.biography'></p>
                    </div>
                  </div>
                  
                    <div>
                      <Code lang='json'></Code>
                    </div>
                  
            
                          
                        </div>
                      </div>
            </div>
        </Aside>
    </>
  )
}
