import React, { useMemo } from 'react';
import { NavLink, useMatches } from 'react-router-dom';

const Breadcrumb = () => {
    const matches = useMatches();
    const filteredMatches = useMemo(() => {
        return matches
            .filter((item, index, self) =>
                index === self.findIndex(t => t.pathname === item.pathname))
    }, [matches]);

    const matchPathToName = (path:string):string => {
        switch (path) {
            case '/comic':
                return 'Comic'

            case '/magazine':
                return 'Magazie'

            case '/digital':
                return 'Digital'

            case '/':
            default:
                return 'Home'
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
