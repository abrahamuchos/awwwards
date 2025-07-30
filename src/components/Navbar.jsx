/**
 * @typedef {Object} NavItem
 * @property {string} name
 * @property {string} href
 */
import { useEffect, useRef, useState } from "react";
import Button from "./Button.jsx";
import { TiLocationArrow } from "react-icons/ti";

/**
 * @type {Array<NavItem>}
 */
const NavItems = [
  {
    name: 'Nexus',
    href: '#'
  },
  {
    name: 'Vault',
    href: '#'
  },
  {
    name: 'Prologue',
    href: '#'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
];

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Navbar() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(/**@type {boolean}*/false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(/**@type {boolean}*/false);
  const containerRef = useRef(/**@type{null|HTMLDivElement} */null);
  const audioElRef = useRef(/**@type{null|HTMLAudioElement} */null);

  /**
   * Toggle audio indicator
   * @returns {void}
   */
  const handleToggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive(prev => !prev);
  }

  useEffect(() => {
    if(isAudioPlaying){
      audioElRef.current?.play();
    }else{
      audioElRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div ref={containerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700
      sm:inset-x-6"
    >
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
          {/*Logo and CTA*/}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className='w-10'/>
            <Button
              id='product-button'
              text='Products'
              rightIcon={<TiLocationArrow/>}
              className='bg-blue-50 hidden items-center justify-center gap-1 md:flex'
            />
          </div>
          {/*End Logo and CTA*/}

          {/*Nav Links*/}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {NavItems.map((item, index)=>(
                <a key={index} className='nav-hover-btn' href={item.href.toLowerCase()}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/*End Nav Links*/}

          {/*Audio Indicator*/}
          <div className="ml-10 flex items-center space-x-0.5 cursor-pointer" onClick={handleToggleAudioIndicator}>
            <audio
              ref={audioElRef}
              src='/audio/loop.mp3'
              className='hidden'
              loop
            />
            {[1, 2, 3, 4].map((itemBar, index) => (
                <div
                  key={index}
                  className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                  style={{animationDelay: `${itemBar * 0.1}s`}}
                >
                </div>
            ))}
          </div>
          {/*End Audio Indicator*/}
        </nav>
      </header>

    </div>
  );
}



