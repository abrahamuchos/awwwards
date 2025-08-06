import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  /**
   * @type {{href: string, icon: JSX.Element}[]}
   */
  const links = [
    {href: "https://discord.com", icon: <FaDiscord/>},
    {href: "https://twitter.com", icon: <FaTwitter/>},
    {href: "https://youtube.com", icon: <FaYoutube/>},
    {href: "https://medium.com", icon: <FaTwitch/>},
  ]


  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        {/* Copyright */}
        <p className='text-center text-sm  text-white font-general font-bold md:text-left '>
          &copy; <a href="https://abrahamuchos.onrender.com">Abrahamuchos</a> {year}. <br/>
          <small>For educational purposes only</small>
        </p>
        {/* End of Copyright */}

        {/* Social media links */}
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, i) => (
            <a href={link.href} key={i} target="_blank" rel="noopener noreferrer"
               className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        {/* End of Social media links */}

        {/* Privacy Policy */}
        <a href="#privacy-policy" className='font-general text-white text-center text-sm hover:underline md:text-right'>Privacy Policy</a>
        {/* End of Privacy Policy */}
      </div>
    </footer>
  );
}



