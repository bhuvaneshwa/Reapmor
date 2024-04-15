
export default function Footer() {
  return (
    <div>
      <div className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800 p-5">
        <ul className="flex justify-between mx-10 text-center">
          <li>
            <a
              to="/"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <span>
                <img src="/image.png" alt="" className="h-10" />
              </span>
            </a>
          </li>
          <li className="xs:mt-2">
            <div
              to="/privacypolicy"
              className="text-blue-500 hover:text-blue-700"
            >
              Privacy Policy
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
