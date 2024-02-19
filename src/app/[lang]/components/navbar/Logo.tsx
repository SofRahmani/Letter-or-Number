import Image from 'next/image';
import logo from '../../../../../public/logo.png';

export default function Logo() {
  return (
    <Image src={logo} alt="Logo navbar" width={70} height={70} aria-label='Letter or Number' />
  );
}