import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '#intro', current: false },
    { name: 'About', href: '#about', current: false },
    { name: 'Gallery', href: '#gallery', current: false },
    { name: 'Contact', href: '#contact', current: false },
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
        <Disclosure as="nav" className="bg-black sticky top-0 z-[9999]">
            {({ open }) => (
                <>
                <div className="">
                    <div className="flex h-[8vh] w-fullgrid grid-cols-2 gap-4 content-start px-8">
                        {/* Mobile */}
                        <div className="absolute inset-y-0 left-10 flex items-center">
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
                        <div className="absolute inset-y-0 right-10 flex items-center text-white">
                            <a href="/" className="text-xl hover:text-red-600">Ashton Phillips</a>
                        </div>
                    </div>
                </div>

                {/* drop down */}
                <Disclosure.Panel>
                    <div className="space-y-1 px-2 left-10 pb-3 pt-1 absolute sm:w-1/4 w-1/2">
                        {navigation.map((item) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className="bg-white text-gray-700 hover:bg-red-600 hover:text-white text-center block rounded-md px-3 py-2 text-base font-medium"
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
