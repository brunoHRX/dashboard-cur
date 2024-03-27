import Logo from '../assets/LOGO.png'

export default function Header () {
  return (
    <div className='sticky flex justify-between items-center gap-5 text-center p-4 bg-cur-dark drop-shadow-md'>
      <img className='h-16 ' src={Logo} alt="" />
      <h1 className='font-bold text-2xl text-center md:pr-80' >COORDENADORIA DE URGÊNCIA - DASHBOARD DE ACOMPANHAMENTO</h1>
    </div>
  );
};