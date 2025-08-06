/**
 *
 * @param {string} src - Path to the image
 * @param {string} [alt=''] - Alt text for the image
 * @param {string} className
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImageClipBox({src, alt = '', className}) {

  return (
    <div className={className}>
      <img src={src} alt={alt}/>
    </div>
  );
}



