import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { GrLinkedinOption, GrGithub } from 'react-icons/gr';
import { BsWikipedia, BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import { HiOutlineExternalLink } from 'react-icons/hi';
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
  ArrowDown: (className) => <BsArrowDownCircle className={className} />,
  ArrowUp: (className) => <BsArrowUpCircle className={className} />,
  External: (className) => <HiOutlineExternalLink className={className} />,
};

export default Icons;
