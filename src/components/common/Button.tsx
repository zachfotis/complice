interface ButtonProps {
  text: string;
  variant?: 'lg-light' | 'lg-black' | 'sm-light' | 'sm-black' | 'xs-outline' | 'md-outline' | 'md-bottom-line';
}

function Button({ text, variant = 'sm-light' }: ButtonProps) {
  const getVariant = () => {
    switch (variant) {
      case 'lg-light':
        return 'text-h2 text-primary bg-whiteGrey font-custom px-5 py-2 border border-primary hover:bg-primary hover:text-white transition-all';
      case 'lg-black':
        return 'text-h2 text-white bg-primary font-custom px-5 py-2 border border-primary hover:bg-whiteGrey hover:text-primary transition-all';
      case 'sm-light':
        return 'text-h4 text-primary bg-white font-custom px-5 py-2 shadow-lg hover:bg-primary hover:text-white transition-all';
      case 'sm-black':
        return 'text-h4 text-white bg-primary font-custom px-5 py-2 shadow-lg hover:bg-whiteGrey hover:text-primary transition-all';
      case 'xs-outline':
        return 'text-base text-primary bg-transparent font-custom px-5 py-2 border-2 border-primary hover:bg-primary hover:text-white transition-all';
      case 'md-outline':
        return 'text-h3 text-primary bg-transparent font-custom px-5 py-2 border-2 border-primary hover:bg-primary hover:text-white transition-all';
      case 'md-bottom-line':
        return 'text-h3 text-primary bg-transparent font-custom px-5 py-2 border-b-2 border-primary hover:bg-primary hover:text-white transition-all';
      default:
        return 'text-h2 text-primary bg-whiteGrey font-custom px-5 py-2 border border-primary hover:bg-primary hover:text-white transition-all';
    }
  };

  return <button className={getVariant()}>{text}</button>;
}

export default Button;
