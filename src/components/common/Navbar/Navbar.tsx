import { NavUserPill } from '@/components/shared';
import { useCurrentUser } from '@/hooks/useUser';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import SearchBar from '../SearchBar';

const Navbar: FC = () => {
    const hiddenTo = ['/login', '/signup'];
    const router = useRouter();
    const { user, mutate } = useCurrentUser();

    return hiddenTo.includes(router.pathname) ? null : (
        <nav className="w-full h-14 laptop:h-16 bg-white fixed top-0 left-0 z-50 flex px-4 laptop:px-10 justify-between items-center shadow-sm border-b border-solid border-gray-100">
            <ul className="flex items-center space-x-4">
                <li className="cursor-pointer">
                    <Link href="/">
                        <img
                            className="w-14  laptop:w-16 object-contain"
                            id="title"
                            src="/logo.png"
                            alt="pet care logo"
                            width={100}
                            height={80}
                        />
                    </Link>
                </li>
                <li>
                    <SearchBar />
                </li>
            </ul>
            <ul className="flex items-center space-x-4 laptop:space-x-8">
                <li className="py-3">
                    <Link href="/">
                        Explore
                    </Link>
                </li>
                {user ? (
                    <li>
                        <NavUserPill user={user} mutate={mutate} />
                    </li>
                ) : (
                        <>
                            <li className="py-3">
                                <Link href="/login">Login</Link>
                            </li>
                            <li className="py-3">
                                <Link href="/signup">Sign Up</Link>
                            </li>
                        </>
                    )}
            </ul>
        </nav >
    );
};

export default Navbar;
