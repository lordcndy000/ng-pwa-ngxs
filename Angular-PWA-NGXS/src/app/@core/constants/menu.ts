export const pages = {
    cart: {
        label: 'View Cart',
        path: '/cart',
        activeClass: 'active',
        activeLinkOption: {
            exact: true
        }
    },
    checkOut: {
        label: 'View Checkout',
        path: '/checkout',
        activeClass: 'active',
        activeLinkOption: {
            exact: true
        }
    },
    mainNav: [
        {
            label: 'Home',
            path: '/',
            activeClass: 'active',
            activeLinkOption: {
                exact: true
            }
        },
        {
            label: 'Products',
            path: '/products',
            activeClass: 'active',
            activeLinkOption: {
                exact: true
            }
        },
        {
            label: 'About',
            path: '/about',
            activeClass: 'active',
            activeLinkOption: {
                exact: true
            }
        }
    ]
};
