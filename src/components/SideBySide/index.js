import Image from "next/image";
import Link from "next/link";

const SideBySide = ({ imageUrl, imageLeft, title, description, buttonText, buttonUrl }) => {
  return (
    <div className={`shadow-md mx-auto my-4 md:flex w-full ${!imageLeft && 'md:flex-row-reverse' }`}>
      <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
        <Image src={imageUrl} alt="Card Image" width={500} height={500} className="w-full h-auto md:rounded-lg" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          <Link href={buttonUrl}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default SideBySide;