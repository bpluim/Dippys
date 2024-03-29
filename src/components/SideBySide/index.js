import Link from "next/link";
import { Button } from "../Button";
import '../../app/globals.css';

const SideBySide = ({ imageUrl, overlay, darkOverlay, imageLeft, title, description, buttonText, buttonUrl }) => {

  const styling = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '400px',
  }

  return (
    <div className={`shadow-md mx-auto my-12 md:my-0 md:flex flex-wrap w-full ${!imageLeft && 'md:flex-row-reverse' }`}>
      <div style={styling} className="w-full md:w-1/2 rounded-lg md:rounded-none">
        <div className={`${overlay && 'overlay'} md:hidden`}>
          <div className='p-8 text-center flex flex-col justify-between h-full p-6'>
            <div>
              <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
              <p className="md:text-gray-700 text-white mb-4 text-zinc-500 dark:text-zinc-400">{description}</p>
            </div>
            <div>
              <Button>
                <Link href={buttonUrl}>{buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={`hidden md:block md:w-1/2 ${imageLeft && 'text-right'}`}>
        <div className='py-8 flex flex-col justify-between h-full p-6'>
          <div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4 text-zinc-500 dark:text-zinc-400">{description}</p>
          </div>
          <div>
            <Button>
              <Link href={buttonUrl}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBySide;