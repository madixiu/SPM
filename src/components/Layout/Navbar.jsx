import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-56 bg-gray-600  text-white h-full p-4">
      {/* <h2 className="text-lg font-bold mb-4">Navigation</h2> */}
      <ul className="space-y-2">
        <li>
          <Link to="/document-form-1" className="block hover:bg-gray-700 hover:shadow-sm p-2 rounded-lg">Document Form 1</Link>
        </li>
        <li>
          <Link to="/document-form-2-1" className="block hover:bg-gray-700 hover:shadow-sm p-2 rounded-lg">Document Form 2-1</Link>
        </li>
        <li>
          <Link to="/document-form-2-2" className="block hover:bg-gray-700 hover:shadow-sm p-2 rounded-lg">Document Form 2-2</Link>
        </li>
        <li>
          <Link to="/document-form-3-1" className="block hover:bg-gray-700 hover:shadow-sm p-2 rounded-lg">Document Form 3-1</Link>
        </li>
        <li>
          <Link to="/document-form-3-2" className="block hover:bg-gray-700 hover:shadow-sm p-2 rounded-lg">Document Form 3-2</Link>
        </li>
        <li>
          <Link to="/document-form-4-1" className="block hover:bg-gray-700 hover:shadow-sm p-2 rounded-lg">Document Form 4-1</Link>
        </li>
        <li>
          <Link to="/document-form-4-2" className="block hover:bg-gray-700 hover:shadow-sm p-2 rounded-lg">Document Form 4-2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
