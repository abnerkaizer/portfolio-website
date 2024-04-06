import Image from 'next/image'

const Footer = () => {
    return (
      <footer className="footer z-10 text-white">
        <div className="container p-12 flex justify-between">
          <span className="text-muted">
            <Image src={"/images/ASK-no-bg.png"} width={90} height={90} alt='Logo'></Image>
          </span>
          <p className="text-slate-600">All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;