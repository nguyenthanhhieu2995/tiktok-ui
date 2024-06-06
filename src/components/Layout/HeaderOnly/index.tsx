import { PropsWithChildren } from 'react';
import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
