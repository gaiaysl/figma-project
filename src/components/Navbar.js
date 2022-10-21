
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'How tere works', href: '#', current: false },
  { name: 'Tere benefits', href: '#', current: false },
  { name: 'Help Center', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-100 flex justify-between m-12">
      {({ open }) => (
        <>
        
         <svg   xmlns="http://www.w3.org/2000/svg" width="181" height="52" viewBox="0 0 181 52" fill="none">
<path d="M75.8804 20.0471H69.942V50H63.1553V20.0471H58.261V13.8477H63.1553V1.70989H69.942V13.8477H75.8804V20.0471ZM115.579 31.467C115.579 32.5982 115.514 33.7293 115.383 34.8604H85.4303C86.1264 37.7317 87.5403 40.1027 89.672 41.9734C91.8473 43.8006 94.3923 44.7142 97.3071 44.7142C99.4388 44.7142 101.44 44.1704 103.311 43.0828C105.225 41.9952 106.661 40.516 107.618 38.6453H114.404C113.012 42.3432 110.75 45.3233 107.618 47.5855C104.485 49.8042 100.961 50.9136 97.0461 50.9136C91.956 50.9136 87.6056 49.0211 83.9947 45.2362C80.4273 41.4513 78.6436 36.9921 78.6436 31.8586C78.6436 26.5945 80.4273 22.1135 83.9947 18.4157C87.5621 14.7178 91.956 12.8688 97.1766 12.8688C102.267 12.8688 106.595 14.696 110.163 18.3504C113.774 22.0048 115.579 26.377 115.579 31.467ZM108.792 29.6398C108.618 26.6815 107.357 24.18 105.007 22.1353C102.702 20.0906 100.07 19.0682 97.1113 19.0682C94.153 19.0682 91.4992 20.0906 89.15 22.1353C86.8442 24.18 85.6044 26.6815 85.4303 29.6398H108.792ZM138.001 19.8513C136.305 19.8513 134.673 20.2864 133.107 21.1564C130.453 22.5051 129.126 25.5287 129.126 30.2272V50H122.34V13.8477H128.67V17.1105H128.8C130.714 14.4132 133.781 12.9993 138.001 12.8688V19.8513ZM177.841 31.467C177.841 32.5982 177.775 33.7293 177.645 34.8604H147.692C148.388 37.7317 149.802 40.1027 151.934 41.9734C154.109 43.8006 156.654 44.7142 159.569 44.7142C161.701 44.7142 163.702 44.1704 165.572 43.0828C167.487 41.9952 168.922 40.516 169.879 38.6453H176.666C175.274 42.3432 173.012 45.3233 169.879 47.5855C166.747 49.8042 163.223 50.9136 159.308 50.9136C154.218 50.9136 149.867 49.0211 146.256 45.2362C142.689 41.4513 140.905 36.9921 140.905 31.8586C140.905 26.5945 142.689 22.1135 146.256 18.4157C149.824 14.7178 154.218 12.8688 159.438 12.8688C164.528 12.8688 168.857 14.696 172.424 18.3504C176.035 22.0048 177.841 26.377 177.841 31.467ZM171.054 29.6398C170.88 26.6815 169.618 24.18 167.269 22.1353C164.963 20.0906 162.331 19.0682 159.373 19.0682C156.415 19.0682 153.761 20.0906 151.412 22.1353C149.106 24.18 147.866 26.6815 147.692 29.6398H171.054Z" fill="#75BF7A"/>
<path d="M49.1393 16.4156L49.0128 16.1073L48.7779 16.3435L44.0983 21.0479L44.009 21.1376L44.0411 21.26C44.4323 22.7514 44.6281 24.2924 44.6281 25.8834C44.6281 36.2098 36.2346 44.6034 25.9082 44.6034C15.5568 44.6034 7.1635 36.2097 7.1635 25.8834C7.1635 24.2672 7.3594 22.7015 7.75049 21.2105L7.7826 21.0881L7.69336 20.9984L3.01379 16.294L2.77804 16.057L2.65209 16.3667C1.45339 19.3135 0.778814 22.5109 0.778814 25.8834C0.778814 39.7224 12.0444 50.9881 25.8834 50.9881C39.7224 50.9881 50.9881 39.7224 50.9881 25.8834C50.9881 22.5368 50.3387 19.3391 49.1393 16.4156ZM41.4469 15.4838L41.5967 15.7073L41.787 15.517L46.0456 11.2583L46.1805 11.1235L46.067 10.9703C41.4962 4.80102 34.1522 0.778814 25.8834 0.778814C17.6397 0.778814 10.2956 4.77597 5.72469 10.9455L5.61116 11.0987L5.74601 11.2336L10.0047 15.4922L10.1949 15.6825L10.3448 15.459C13.1835 11.2253 17.7106 8.2157 22.9465 7.38368C23.9004 7.23696 24.8793 7.1635 25.8834 7.1635C26.8876 7.1635 27.8666 7.23696 28.8205 7.38369C34.0805 8.21564 38.6078 11.2497 41.4469 15.4838Z" fill="#75BF7A" stroke="#75BF7A" stroke-width="0.442372"/>
<path d="M28.8623 26.6944H29.0835V26.4732L29.0835 3.422V3.20081H28.8623L22.92 3.20081L22.6988 3.20081V3.422L22.6988 26.4732V26.6944H22.92H28.8623Z" fill="#75BF7A" stroke="#75BF7A" stroke-width="0.442372"/>
</svg>
          <div className=" max-w-7xl  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center ">
              <div className="absolute inset-y-0  flex  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className=" p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex flex-row justify-between ">
                
               
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'text-black hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
        
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className=" px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-red-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
