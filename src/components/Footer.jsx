import YoutubeIcon from '../assets/Youtube.png'
import InstagramIcon from '../assets/Instagram.png'
import FacebookIcon from '../assets/Facebook.png'



export function Footer() {
  return (
    <div className="bg-violeta flex gap-10 h-auto w-full items-center flex-wrap justify-around py-20">
      <div className="flex flex-col gap-0 items-center justify-center">
        <div className="flex flex-col gap-0 items-center justify-center">
          <p className="text-white text-xl font-extrabold">ABOUT</p>
          <span className="text-white text-xl font-extralight">____</span>
        </div>
        <div className="flex flex-col gap-3 items-start justify-center">
          <span className="text-white text-xl font-extralight">History</span>
          <span className="text-white text-xl font-extralight">Our Team</span>
          <span className="text-white text-xl font-extralight">
            Mission Statement
          </span>
          <span className="text-white text-xl font-extralight">
            Terms & Condition
          </span>
          <span className="text-white text-xl font-extralight">
            Privacy Policy
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-0 items-center justify-center">
        <div className="flex flex-col">
          <p className="text-white text-xl font-extrabold">WHAT WE DO</p>
          <span className="text-white text-xl font-extralight">________</span>
        </div>
        <div className="flex flex-col gap-3 items-start justify-center">
          <span className="text-white text-xl font-extralight">
            Newsand Stories
          </span>
          <span className="text-white text-xl font-extralight">
            Publications
          </span>
          <span className="text-white text-xl font-extralight">
            Take Action
          </span>
          <span className="text-white text-xl font-extralight">
            Recomendations
          </span>
          <span className="text-white text-xl font-extralight">Help</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-col ">
          <p className="text-white text-xl font-extrabold">FOLLOW US!</p>
          <span className="text-white text-xl font-extralight">________</span>
        </div>
        <div className="flex items-center justify-around gap-5">
          <img src={FacebookIcon} aria-hidden="true" className='w-10' />
          <img src={InstagramIcon} aria-hidden="true" className='w-10'/>
          <img src={YoutubeIcon} aria-hidden="true" className='w-10'/>
        </div>
      </div>
    </div>
  );
}
