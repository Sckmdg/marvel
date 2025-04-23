import React, { useMemo } from 'react';
import { NavLink, useMatches } from 'react-router-dom';

const Breadcrumb = () => {
    const matches = useMatches();
    const filteredMatches = useMemo(() => {
        return matches
            .filter((item, index, self) =>
                index === self.findIndex(t => t.pathname === item.pathname))
            // hack for github pages
            .filter(item => item.pathname !== '/marvel' && item.id !== '0-1')
    }, [matches]);

    const matchPathToName = (path:string):string => {
        switch (path) {
            case '/marvel/comic':
                return 'Comic'

            case '/marvel/magazine':
                return 'Magazine'

            case '/marvel/digital':
                return 'Digital'

            case '/marvel/all':
                return 'All';

            case '/':
            default:
                return 'Home';
        }
    }

    return (
        <div className="mb-[20px]">
            {filteredMatches.map(({ pathname }, key) => (
                <NavLink
                    key={key}
                    to={pathname}
                    className="hover:text-red-500 transition font-bold text-[18px] text-gray-500"
                >
                    {matchPathToName(pathname)} {(filteredMatches.length !== key + 1) ? `\u003e ` : ''}
                </NavLink>
            ))}
        </div>
    );
};

export default Breadcrumb;
