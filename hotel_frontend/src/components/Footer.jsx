import './Footer.css';

function Footer(){
    const now=new Date();
    return(
          <footer className=' absolute flex bg-red-400 justify-center inset-x-0  pb-5'>
        <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; {now.getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </div>
      </footer>
    
        
    );
}

export default Footer;