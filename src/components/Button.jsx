import { twMerge } from "tailwind-merge";

/**
 *
 * @param {string} id
 * @param {string} [text='Click me']
 * @param {JSX.Element} [leftIcon]
 * @param {JSX.Element} [rightIcon]
 * @param {string} [className]
 * @returns {JSX.Element}
 * @constructor
 */
export default function Button({id, text= 'Click me', leftIcon, rightIcon, className}) {

  return (
    <button id={id}
            className={twMerge("group relative px-7 py-3 text-black bg-violet-50 z-10 w-fit " +
              "cursor-pointer overflow-hidden rounded-full", className)} >
      {leftIcon}

      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        {text}
      </span>

      {rightIcon}
    </button>
  );
}