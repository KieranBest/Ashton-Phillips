import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#intro' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
]

export const Header = () => {
    return (
        <Disclosure as="nav" className="bg-black sticky top-0 z-[9999]">
            {({ open }) => (
                <>
                <div>
                    <div className="flex h-[8vh] w-fullgrid grid-cols-2 gap-4 content-start px-8">
                        {/* Mobile */}
                        <div className="absolute inset-y-0 left-10 flex items-center">
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                <Transition
                    show={open}
                    enter="transition duration-1000 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-100 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    {/* drop down */}
                    <Disclosure.Panel>
                        <div className="space-y-1 px-2 left-10 pb-3 pt-1 absolute sm:w-1/4 w-1/2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className="bg-white text-gray-700 hover:bg-red-600 hover:text-white text-center block rounded-md px-3 py-2 text-base font-medium"
                                    >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Transition>
                </>
            )}
        </Disclosure>
    )
}
