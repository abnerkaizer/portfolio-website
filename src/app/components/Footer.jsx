import Image from 'next/image'

const Footer = () => {
    return (
      <footer className="footer text-white">
        <div className="container p-12 flex justify-between">
          <span className="text-muted">
            <Image src={"/images/ASK-no-bg.png"} width={90} height={90} alt='Logo'></Image>
          </span>
          <p className="text-slate-600">All right reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;