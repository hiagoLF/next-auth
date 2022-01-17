import { withSSRAuth } from "../utils/withSSRAuth";

const Metrics: React.FC = () => {

    return (
        <>
            <h1>Metrics</h1>
        </>
    );
}

export default Metrics;

export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
        props: {}
    }
}, {
    permissions: ['metrics.list'],
    roles: ['administrator'],
})