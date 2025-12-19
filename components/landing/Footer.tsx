import { TbArrowsSplit } from "react-icons/tb";

const Footer = () => {
  return (
    <footer id="documentation" className="border-t border-slate-700 py-12 px-6">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 max-w-7xl mx-auto">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg  flex items-center justify-center"><TbArrowsSplit size={24} color="lightgreen" /></div>
              <span className="text-lg sm:text-xl font-bold text-white">PixelPipe</span>
            </div>
            <p className="text-slate-400 text-sm">
              Essential developer tools for modern teams
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button className="hover:text-white transition">Features</button></li>
              <li><button className="hover:text-white transition">Pricing</button></li>
              <li><button className="hover:text-white transition">Security</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button className="hover:text-white transition">Documentation</button></li>
              <li><button className="hover:text-white transition">API</button></li>
              <li><button className="hover:text-white transition">Blog</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button className="hover:text-white transition">About</button></li>
              <li><button className="hover:text-white transition">Contact</button></li>
              <li><button className="hover:text-white transition">Careers</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-700">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} PixelPipe. All rights reserved.</p>
                <div className="flex items-center gap-6 text-slate-500 text-sm">
                  <button className="hover:text-white transition">Privacy</button>
                  <button className="hover:text-white transition">Terms</button>
                  <button className="hover:text-white transition">Status</button>
                </div>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;