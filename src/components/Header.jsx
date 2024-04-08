import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function getCurrentLocation() {
    const location = useLocation();
    return location.pathname;
}

export const Header = () => {
    switch (getCurrentLocation()) {
        case '/':
            navigation[0].current = true;
            break;
        default:
            break;
    }

    return (
        <Disclosure as="nav" className="bg-black sticky top-0 z-10">
            {({ open }) => (
                <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-[8vh]">
                        {/* Mobile */}
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

                {/* Mobile drop down */}
                <Disclosure.Panel>
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-red-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
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
