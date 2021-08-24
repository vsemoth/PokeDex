import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright @2021. Created by
        {" "} {" "}
        <Image
          className='footer_image'
          src={`/${"webs_logo.ico"}`}
          alt="site logo"
          width={15}
          height={15}
          blurDataURL={`/${"webs_logo.ico"}`}
        /> 
        {" "}
        ID Webs Market
      </p>
    </footer>
  );
};

export default Footer;
