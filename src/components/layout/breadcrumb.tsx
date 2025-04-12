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
        <div className="text-sm text-gray-500 px-12 mt-4">
            {filteredMatches.map(({ pathname }, key) => (
                <NavLink
                    to={pathname}
                    className="hover:text-red-500 duration-150 ease-in"
                >
                    {matchPathToName(pathname)} {(filteredMatches.length !== key + 1) ? `\u003e ` : ''}
                </NavLink>
            ))}
        </div>
    );
};

export default Breadcrumb;
