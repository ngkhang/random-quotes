import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { BsWikipedia } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
// Import icons
interface KeyofVal {
  [key: PropertyKey]: (className?: string) => JSX.Element;
}

const Icons: KeyofVal = {
  QuotesL: (className) => <RiDoubleQuotesL className={className} />,
  QuotesR: (className) => <RiDoubleQuotesR className={className} />,
  Github: (className) => <GrGithub className={className} />,
  Linkedin: (className) => <GrLinkedinOption className={className} />,
  Random: (className) => <GiPerspectiveDiceSixFacesRandom className={className} />,
  Wiki: (className) => <BsWikipedia className={className} />,
  Close: (className) => <IoCloseOutline className={className} />,
};

export default Icons;
