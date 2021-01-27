import Head from 'next/head';

/* Google Analytics Import React-ga */
import { initGA, logPageView } from '../utils/googleAnalytics';

export default class Layout extends React.Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }
    render() {
        return (
            <div>
                <Head>
                </Head>
                {this.props.children}
            </div>
        );
    }
}