import Logo from '../assets/LOGO.png'

export default function Header () {
  return (
    <div className='sticky flex justify-between items-center gap-5 text-center p-4 bg-cur-dark drop-shadow-md'>
      <img className='h-16 ml-2 md:ml-8 lg:ml-16 xl:ml-32' src={Logo} alt="Logo" />
      <p className='font-bold text-2xl md:pr-80 lg:pr-96 xl:pr-[30rem]'>
        COORDENADORIA DE URGÊNCIA - DASHBOARD DE ACOMPANHAMENTO
      </p>
    </div>
  );
};