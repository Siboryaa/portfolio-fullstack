const Footer = () => {
return (
<footer className="footer footer-center bg-base-200 text-base-content rounded p-20 bg-white">
  <nav className="grid grid-flow-col gap-4">
    <p>Thanks for visiting my websites.</p>
  </nav>
  <nav>
  <ul className="menu menu-horizontal px-1">
        <li><a href="https://www.instagram.com/sultanaryasp_/" target="_blank">
        <img src="src/assets/images/instagram-logo.png" alt="Instagram" className="w-10"/></a></li>
        <li><a href="https://wa.me/6281295490986" target="_blank">
        <img src="src/assets/images/wa.png" alt="whatsapp" className="w-10"/></a></li>
        <li><a href="https://github.com/Siboryaa" target="_blank">
        <img src="src/assets/images/th.png" alt="Github" className="w-10"/></a></li>
        <li><a href="https://www.youtube.com/@sultanarya4299" target="_blank">
        <img src="src/assets/images/yt.png" alt="youtube" className="w-10"/></a></li>
    </ul>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - Sultan aryasatya putra</p>
  </aside>
</footer>
  );
};
export default Footer;