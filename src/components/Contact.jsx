import ImageClipBox from "./ImageClipBox.jsx";
import Button from "./Button.jsx";

export default function Contact() {

  return (
    <section id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Contact Images (Left)*/}
        <div className="absolute hidden -left-20 top-0 h-full w-72 overflow-hidden
          sm:block
          lg:left-20 lg:w-96"
        >
          <ImageClipBox src="/img/contact-1.webp" className="contact-clip-path-1" alt="Contact Image 1"/>
          <ImageClipBox src="/img/contact-2.webp"
                        className="contact-clip-path-2 translate-y-60 lg:translate-y-40"
                        alt="Contact Image 1"
          />
        </div>
        {/*End Contact Images (Left)*/}

        {/* Swordman Character (Right)*/}
        <div className="absolute -top-40 left-20 w-60
          sm:top-1/2
          md:left-auto md:right-10
          lg:top-20 lg:w-80"
        >
          <ImageClipBox src="/img/swordman-partial.webp" className="absolute md:scale-125" alt="swordman"/>
          <ImageClipBox src="/img/swordman.webp" className="sword-man-clip-path md:scale-125" alt="swordman-full"/>
        </div>
        {/*End Swordman Character (Right)*/}
        
        {/*Text Content*/}
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">
            Zentry
          </p>
          <p className='mt-10 w-full z-50 special-font font-zentry text-5xl leading-[0.9] md:text-[6rem]'>
            let's b<b>u</b>ild the <br/> new era of <br/>g<b>a</b>ming t<b>o</b>gether.
          </p>
          <Button text='contact us' className='cursor pointer mt-10' />
        </div>
        {/*Text Content*/}

        </div>
    </section>
);
}



